import { createRoute, z } from '@hono/zod-openapi'

type AcquirerNameType =
  | 'Adyen'
  | 'Alipay'
  | 'AIB'
  | 'Airpay'
  | 'ApcoPay'
  | 'AsiaPaymentGateway'
  | 'AstroPay Card'
  | 'Ipay Options'
  | 'B+S'
  | 'Bambora'
  | 'BitPay'
  | 'Bank of America'
  | 'Bank of Moscow'
  | 'Bank of Rebilly'
  | 'Bank One'
  | 'BMO Harris Bank'
  | 'Borgun'
  | 'BraintreePayments'
  | 'Cardknox'
  | 'CASHlib'
  | 'CashToCode'
  | 'Catalunya Caixa'
  | 'CCAvenue'
  | 'Chase'
  | 'ChinaUnionPay'
  | 'CIM'
  | 'Circle'
  | 'Citadel'
  | 'Clearhaus'
  | 'CODVoucher'
  | 'CoinPayments'
  | 'Conekta'
  | 'Coppr'
  | 'Credorax'
  | 'Cryptonator'
  | 'CyberSource'
  | 'dLocal'
  | 'Dragonphoenix'
  | 'EBANX'
  | 'ecoPayz'
  | 'EcorePay'
  | 'Elavon'
  | 'EMS'
  | 'EPG'
  | 'Euteller'
  | 'eZeeWallet'
  | 'ezyEFT'
  | 'Fifth Third Bank'
  | 'Finrax'
  | 'First Data Buypass'
  | 'First Data Nashville'
  | 'First Data North'
  | 'First Data Omaha'
  | 'FinTecSystems'
  | 'Flexepin'
  | 'Forte'
  | 'FundSend'
  | 'Gigadat'
  | 'Global East'
  | 'Gooney'
  | 'Gpaysafe'
  | 'Heartland'
  | 'HiPay'
  | 'HSBC'
  | 'iCanPay'
  | 'ICEPAY'
  | 'iCheque'
  | 'Ilixium'
  | 'Ingenico'
  | 'INOVAPAY'
  | 'Intuit'
  | 'Jeton'
  | 'Khelocard'
  | 'Konnektive'
  | 'loonie'
  | 'LPG'
  | 'Masapay'
  | 'Merrick'
  | 'Mission Valley Bank'
  | 'MiFinity'
  | 'Moneris'
  | 'MuchBetter'
  | 'MyFatoorah'
  | 'NATWEST'
  | 'Neosurf'
  | 'Netbanking'
  | 'Neteller'
  | 'NinjaWallet'
  | 'NMI'
  | 'NuaPay'
  | 'OchaPay'
  | 'Onlineueberweisen'
  | 'OnRamp'
  | 'Other'
  | 'Panamerican'
  | 'Panda Bank'
  | 'Paramount'
  | 'ParamountEft'
  | 'ParamountInterac'
  | 'Pay4fun'
  | 'PayCash'
  | 'PayClub'
  | 'PaymentAsia'
  | 'PaymenTechnologies'
  | 'PaymentsOS'
  | 'Paymero'
  | 'Paynetics'
  | 'PayPal'
  | 'Payr'
  | 'PayTabs'
  | 'PayULatam'
  | 'Payvision'
  | 'Piastrix'
  | 'Peoples Trust Company'
  | 'PostFinance'
  | 'Privatbank'
  | 'Prosa'
  | 'QQPay'
  | 'Rapyd'
  | 'RBC'
  | 'RBS WorldPay'
  | 'RealTime'
  | 'Rotessa'
  | 'SaltarPay'
  | 'SecureTrading'
  | 'SecurionPay'
  | 'Skrill'
  | 'SmartInvoice'
  | 'SMSVoucher'
  | 'Sofort'
  | 'SparkPay'
  | 'State Bank of Mauritius'
  | 'Stripe'
  | 'TBI'
  | 'TestProcessor'
  | 'ToditoCash'
  | 'Trustly'
  | 'TrustPay'
  | 'TrustsPay'
  | 'TSYS'
  | 'TWINT'
  | 'UPayCard'
  | 'Vantiv'
  | 'VCreditos'
  | 'VoicePay'
  | 'Wallet88'
  | 'WeChat Pay'
  | 'Wells Fargo'
  | 'Wing Hang Bank'
  | 'Wirecard'
  | 'WorldPay'
  | 'XPay'
  | 'Zimpler'
  | 'Zotapay'

const LinkSchema = z
  .object({ href: z.string().openapi({ description: 'The link URL.' }) })
  .openapi({ required: ['href'] })
  .openapi('Link')

type ApprovalUrlLinkType = z.infer<typeof LinkSchema>

const TransactionSchema: z.ZodType<TransactionType> = z
  .lazy(() =>
    CommonTransactionSchema.and(
      z
        .object({
          _embedded: z
            .array(
              z.union([
                ParentTransactionEmbedSchema,
                RetriedTransactionEmbedSchema,
                GatewayAccountEmbedSchema,
                CustomerEmbedSchema,
                LeadSourceEmbedSchema,
                WebsiteEmbedSchema,
                PaymentCardEmbedSchema,
                BankAccountEmbedSchema,
                InvoicesEmbedSchema,
              ]),
            )
            .min(1)
            .exactOptional()
            .openapi({
              description:
                'Any embedded objects available that are requested by the `expand` querystring parameter.',
              readOnly: true,
            }),
          _links: z
            .array(
              z.union([
                SelfLinkSchema,
                WebsiteLinkSchema,
                CustomerLinkSchema,
                GatewayAccountLinkSchema,
                PaymentCardLinkSchema,
                ParentTransactionLinkSchema,
                RetriedTransactionLinkSchema,
                LeadSourceLinkSchema,
                ApprovalUrlLinkSchema,
                RefundUrlLinkSchema,
                TransactionUpdateUrlLinkSchema,
                DisputeLinkSchema,
                InvoicesLinkSchema,
                QueryUrlLinkSchema,
              ]),
            )
            .min(1)
            .exactOptional()
            .openapi({ description: 'The links related to resource.', readOnly: true }),
          acquirerName: AcquirerNameSchema.exactOptional().openapi({
            description: 'Acquirer name, available only when transaction use gateway, else null.',
            readOnly: true,
          }),
          arn: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The acquirer reference number.',
              example: '74836950144358910018150',
              readOnly: true,
              'x-label': 'ARN',
            }),
          bin: z
            .string()
            .exactOptional()
            .openapi({ description: 'Payment Card BIN.', readOnly: true, 'x-label': 'BIN' }),
          bumpOffer: z
            .object({
              language: LanguageIsoCodeSchema.exactOptional().openapi({
                description:
                  'The language of the bump offer that was displayed to user (useful for finding any translation problems).',
              }),
              order: MoneySchema.exactOptional().openapi({
                description: 'Initial amount and currency.',
              }),
              outcome: PurchaseBumpStatusSchema.exactOptional(),
              presentedOffers: PurchaseBumpOfferListSchema.exactOptional().openapi({
                description: 'Offers presented to a customer.',
              }),
              selectedOffer: PurchaseBumpOfferSchema.exactOptional().openapi({
                description:
                  'Offer selected by a customer. Null if bump offer outcome is not `selected`.',
              }),
              version: PurchaseBumpSplitVersionNameSchema.exactOptional().openapi({
                description:
                  'The name of the version that was picked (useful for measuring split tests).',
              }),
            })
            .exactOptional()
            .openapi({
              description: 'Bump offer information. Null if hasBumpOffer is false.',
              readOnly: true,
              required: [],
            }),
          dcc: z
            .object({
              base: MoneySchema.exactOptional().openapi({
                description: 'Initial amount and currency to convert from.',
              }),
              outcome: z
                .enum(['rejected', 'selected', 'unknown'])
                .exactOptional()
                .openapi({ description: 'Dynamic Currency Conversion outcome.' }),
              quote: MoneySchema.exactOptional().openapi({
                description: 'Suggested amount and currency to convert to.',
              }),
              usdMarkup: MoneyAmountSchema.exactOptional().openapi({
                description: 'The amount of markup translated to USD.',
              }),
            })
            .exactOptional()
            .openapi({
              description:
                'Dynamic Currency Conversion detailed information. Null if hasDcc is false.',
              readOnly: true,
              required: [],
            }),
          discrepancyTime: z.iso
            .datetime({ offset: true })
            .nullable()
            .exactOptional()
            .openapi({
              description: 'The time of the most recent discrepancy on the transaction.',
              readOnly: true,
              'x-sortable': true,
            }),
          disputeStatus: z
            .enum(['response-needed', 'under-review', 'forfeited', 'won', 'lost', 'unknown'])
            .nullable()
            .exactOptional()
            .openapi({ description: "The dispute's status, else null.", readOnly: true }),
          disputeTime: z.iso
            .datetime({ offset: true })
            .nullable()
            .exactOptional()
            .openapi({
              description: 'Time the dispute was created, else null.',
              readOnly: true,
              'x-sortable': true,
            }),
          gateway: z
            .object({
              avsResponse: z
                .object({
                  code: z.string().exactOptional().openapi({ description: 'The response code.' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The response message.' }),
                  originalCode: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The raw response code.' }),
                  originalMessage: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The raw response message.' }),
                })
                .exactOptional()
                .openapi({ description: "The AVS gateway's response.", required: [] }),
              cvvResponse: z
                .object({
                  code: z.string().exactOptional().openapi({ description: 'The response code.' }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The response message.' }),
                  originalCode: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The raw response code.' }),
                  originalMessage: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The raw response message.' }),
                })
                .exactOptional()
                .openapi({ description: "The CVV gateway's response.", required: [] }),
              response: z
                .object({
                  code: z
                    .string()
                    .exactOptional()
                    .openapi({ description: "The gateway's response code." }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ description: "The gateway's response message." }),
                  originalCode: z
                    .string()
                    .exactOptional()
                    .openapi({ description: "The raw, unmapped gateway's response code." }),
                  originalMessage: z
                    .string()
                    .exactOptional()
                    .openapi({ description: "The raw, unmapped gateway's response message." }),
                  type: z
                    .string()
                    .exactOptional()
                    .openapi({ description: "The gateway's response type." }),
                })
                .exactOptional()
                .openapi({ description: "The gateway's response.", required: [] }),
            })
            .exactOptional()
            .openapi({
              description: 'The related gateway information.',
              readOnly: true,
              required: [],
            }),
          gatewayAccountId: ResourceIdSchema.exactOptional().openapi({
            description: "The transaction's Gateway Account ID.",
            readOnly: true,
          }),
          gatewayTransactionId: ResourceIdSchema.exactOptional().openapi({
            description: "The gateway's transaction ID.",
            readOnly: true,
          }),
          hadDiscrepancy: z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                'True if the transaction has been updated due to a discrepancy with its. source of truth.',
              readOnly: true,
            }),
          hasBumpOffer: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'True if transaction has a Bump offer.', readOnly: true }),
          hasDcc: z
            .boolean()
            .exactOptional()
            .openapi({
              description: 'True if transaction has Dynamic Currency Conversion applied.',
              readOnly: true,
            }),
          isDisputed: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'True if transaction is disputed.', readOnly: true }),
          isMerchantInitiated: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'True if the transaction was initiated by the merchant.' }),
          isProcessedOutside: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'True if the transaction was processed outside of Rebilly.' }),
          isReconciled: z
            .boolean()
            .exactOptional()
            .openapi({
              description: 'True if the transaction has been verified with gateway batch data.',
              readOnly: true,
            }),
          method: PaymentMethodSchema.exactOptional().openapi({
            deprecated: true,
            description: 'Payment Method. Use `paymentInstrument.method` instead.',
          }),
          notificationUrl: TransactionNotificationUrlSchema.exactOptional(),
          orderId: z
            .string()
            .exactOptional()
            .openapi({
              deprecated: true,
              description:
                "The transaction's order ID.  This ID must be unique within a 24 hour period. This field was renamed to the `requestId`.",
              'x-sortable': true,
            }),
          paymentInstrument: PaymentInstrumentSchema.exactOptional(),
          referenceData: z
            .record(z.string(), z.string())
            .nullable()
            .exactOptional()
            .openapi({
              description: 'Transaction reference data.',
              example: { gatewayTransactionId: 'GAT123' },
              readOnly: true,
            }),
          reportAmount: z
            .float64()
            .exactOptional()
            .openapi({
              description:
                'Transaction amount converted to organization&nbsp;selected report currency.',
              readOnly: true,
              'x-currency-field': 'reportCurrency',
              'x-sortable': true,
              'x-type': 'Money',
            }),
          reportCurrency: CurrencyCodeSchema.exactOptional().openapi({ readOnly: true }),
          retriedTransactionId: ResourceIdSchema.exactOptional().openapi({
            description: 'The retried transaction ID.',
            readOnly: true,
          }),
          retriesResult: z
            .enum(['approved', 'canceled', 'declined', 'scheduled'])
            .exactOptional()
            .openapi({ description: 'Retries sequence result.', readOnly: true }),
          retryInstruction: PaymentRetrySchema.exactOptional(),
          revision: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of times the transaction data has been modified.\nThe revision is useful when analyzing webhook data to determine if the change takes precedence over the current representation.\n',
              readOnly: true,
            }),
          riskMetadata: RiskMetadataSchema.exactOptional().openapi({
            description: 'Risk metadata.',
          }),
          riskScore: z
            .int()
            .exactOptional()
            .openapi({ description: "The transaction's risk score.", readOnly: true }),
          scheduledTime: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({ description: 'The time the transaction is scheduled for collection.' }),
          settlementTime: z.iso
            .datetime({ offset: true })
            .nullable()
            .exactOptional()
            .openapi({
              description: 'The time that the transaction was settled by the banking instuition.',
              readOnly: true,
              'x-sortable': true,
            }),
          velocity: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of transactions by the same customer in the past 24 hours.',
            }),
        })
        .openapi({ required: [] }),
    ),
  )
  .openapi('Transaction')

type AuthTransactionEmbedType = { authTransaction?: z.infer<typeof TransactionSchema> }

type AuthTransactionLinkType = z.infer<typeof LinkSchema>

const ContactEmailsSchema = z
  .array(
    z
      .object({
        label: z.string().max(45).openapi({ description: 'The email label.', example: 'main' }),
        primary: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'True if email is primary.', example: true }),
        value: z
          .email()
          .max(255)
          .openapi({ description: 'The email value.', example: 'rebilly@example.com' }),
      })
      .openapi({ required: ['label', 'value'] }),
  )
  .openapi({ description: 'The list of emails.' })
  .openapi('ContactEmails')

const ContactPhoneNumbersSchema = z
  .array(
    z
      .object({
        label: z.string().max(45).openapi({ description: 'The phone label.', example: 'main' }),
        primary: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'True if phone is primary.', example: true }),
        value: z
          .string()
          .max(50)
          .openapi({ description: 'The phone value.', example: '512-710-1640' }),
      })
      .openapi({ required: ['label', 'value'] }),
  )
  .openapi({ description: 'The list of phone numbers.' })
  .openapi('ContactPhoneNumbers')

const ContactObjectSchema = z
  .object({
    address: z
      .string()
      .regex(/^[\w\s\-\/\pL,.#;:()']+$/)
      .max(60)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The contact street address.', example: '36 Craven St' }),
    address2: z
      .string()
      .regex(/^[\w\s\-\/\pL,.#;:()']+$/)
      .max(60)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The contact street address (second line).' }),
    city: z
      .string()
      .regex(/^[\w\s\-\pL,.']+$/)
      .max(45)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The contact city.', example: 'London' }),
    country: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .max(2)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The contact country ISO Alpha-2 code.', example: 'GB' }),
    emails: ContactEmailsSchema.exactOptional(),
    firstName: z
      .string()
      .regex(/^[\w\s\-\pL,.']+$/)
      .max(45)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The contact first name.', example: 'Benjamin' }),
    hash: z
      .string()
      .max(40)
      .exactOptional()
      .openapi({
        description:
          'A hash that can be used to compare multiple contacts for identical attribute values.',
        example: '056ae6d97c788b9e98b049ebafd7b229bf852221',
        readOnly: true,
      }),
    lastName: z
      .string()
      .regex(/^[\w\s\-\pL,.']+$/)
      .max(45)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The contact last name.', example: 'Franklin' }),
    organization: z
      .string()
      .regex(/^[\w\s\-\pL,.']+$/)
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The contact organization.',
        example: { $ref: '#/components/schemas/ReadyToPayMethods/example/2/feature' },
      }),
    phoneNumbers: ContactPhoneNumbersSchema.exactOptional(),
    postalCode: z
      .string()
      .regex(/^[\w\s\-]+$/)
      .max(10)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The contact postal code.', example: 'WC2N 5NF' }),
    region: z
      .string()
      .regex(/^[\w\s\-\/\pL,.#;:()']+$/)
      .max(45)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The contact region (state).', example: 'London' }),
  })
  .openapi({ required: [] })
  .openapi('ContactObject')

type ServerTimestampType = string

const ServerTimestampSchema: z.ZodType<ServerTimestampType> = z.iso
  .datetime({ offset: true })
  .openapi({
    description: 'Read-only timestamp, automatically assigned on back-end.',
    readOnly: true,
  })
  .openapi('ServerTimestamp')

const ResourceCustomFieldsSchema = z
  .object({})
  .default({})
  .openapi({
    description:
      'Custom Fields list as a map `{"custom field name": "custom field value", ...}`. The format must follow the saved format (see Custom Fields section for the formats).\n',
    example: { foo: 'bar' },
  })
  .openapi('ResourceCustomFields')

type ResourceIdType = string

const ResourceIdSchema: z.ZodType<ResourceIdType> = z
  .string()
  .max(50)
  .openapi({
    description: 'The resource ID. Defaults to UUID v4.',
    example: '4f6cf35x-2c4y-483z-a0a9-158621f77a21',
  })
  .openapi('ResourceId')

const BrowserDataSchema = z
  .object({
    colorDepth: z
      .int()
      .min(1)
      .max(48)
      .openapi({
        description:
          "The browser's color depth in bits per pixel obtained using the `screen.colorDepth` property.",
        example: 24,
      }),
    isJavaEnabled: z
      .boolean()
      .openapi({
        description:
          'Whether Java is enabled in a browser or not. Value is returned from the `navigator.javaEnabled` property.',
      }),
    language: z
      .string()
      .max(8)
      .openapi({
        description:
          "The browser's language settings returned from the `navigator.language` property.",
        example: 'en-US',
      }),
    screenHeight: z
      .int()
      .min(0)
      .max(65535)
      .openapi({
        description: "The browser's screen height returned from the `screen.height` property.",
        example: 1080,
      }),
    screenWidth: z
      .int()
      .min(0)
      .max(65535)
      .openapi({
        description: "The browser's screen width returned from the `screen.width` property.",
        example: 1920,
      }),
    timeZoneOffset: z
      .int()
      .min(-1410)
      .max(1410)
      .openapi({
        description:
          "The browser's time zone offset in minutes from UTC.\nA positive offset indicates the local time is behind UTC, and negative is ahead.\nCan find it with `(new Date()).getTimezoneOffset()` property.\n",
        example: 300,
      }),
  })
  .openapi({
    description: 'Browser data used for 3DS and risk scoring.',
    required: [
      'colorDepth',
      'isJavaEnabled',
      'language',
      'screenWidth',
      'screenHeight',
      'timeZoneOffset',
    ],
    title: 'Browser data',
  })
  .openapi('BrowserData')

const HttpHeadersSchema = z
  .record(z.string(), z.string())
  .openapi({
    description: 'The HTTP headers.',
    example: {
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Content-Type': 'application/json',
    },
  })
  .openapi('HttpHeaders')

type RiskMetadataType = {
  accuracyRadius?: number
  browserData?: z.infer<typeof BrowserDataSchema>
  city?: string
  country?: string
  deviceVelocity?: number
  distance?: number
  fingerprint?: string
  hasMismatchedBankCountry?: boolean
  hasMismatchedBillingAddressCountry?: boolean
  hasMismatchedHolderName?: boolean
  hasMismatchedTimeZone?: boolean
  httpHeaders?: z.infer<typeof HttpHeadersSchema>
  ipAddress?: string
  isHosting?: boolean
  isProxy?: boolean
  isTor?: boolean
  isVpn?: boolean
  isp?: string
  latitude?: number
  longitude?: number
  paymentInstrumentVelocity?: number
  postalCode?: string
  region?: string
  score?: number
  timeZone?: string
  vpnServiceName?: string
}

const RiskMetadataSchema: z.ZodType<RiskMetadataType> = z
  .object({
    accuracyRadius: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Accuracy radius for specified ipAddress (kilometers).',
        readOnly: true,
      }),
    browserData: BrowserDataSchema.exactOptional(),
    city: z
      .string()
      .exactOptional()
      .openapi({
        description: 'City for specified ipAddress.',
        example: 'New York',
        readOnly: true,
      }),
    country: z
      .string()
      .max(2)
      .exactOptional()
      .openapi({
        description: 'Country ISO Alpha-2 code for specified ipAddress.',
        example: 'US',
        readOnly: true,
      }),
    deviceVelocity: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Number of transactions for this device (based on fingerprint) in the last 24 hours.',
        readOnly: true,
      }),
    distance: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Distance between IP Address and Billing Address geolocation (kilometers).',
        readOnly: true,
      }),
    fingerprint: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({ description: 'The fingerprint.', example: 'pIUt3xbgX3l9g3YDiLbx' }),
    hasMismatchedBankCountry: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'True if the bank country and geo-IP address are not the same.',
        readOnly: true,
      }),
    hasMismatchedBillingAddressCountry: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'True if the billing address country and geo-IP address are not the same.',
        readOnly: true,
      }),
    hasMismatchedHolderName: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "True if the customer's name from billing address and from customer's primary address are not the same.",
        readOnly: true,
      }),
    hasMismatchedTimeZone: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the browser time zone and IP address associated time zone are not the same.',
        readOnly: true,
      }),
    httpHeaders: HttpHeadersSchema.exactOptional(),
    ipAddress: z
      .string()
      .exactOptional()
      .openapi({ description: "The customer's IP.", example: '93.92.91.90' }),
    isHosting: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "True if customer's ip address is related to hosting.",
        readOnly: true,
      }),
    isProxy: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "True if customer's ip address is related to proxy.",
        readOnly: true,
      }),
    isTor: z
      .boolean()
      .exactOptional()
      .openapi({ description: "True if customer's ip address is related to TOR.", readOnly: true }),
    isVpn: z
      .boolean()
      .exactOptional()
      .openapi({ description: "True if customer's ip address is related to VPN.", readOnly: true }),
    isp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internet Service Provider name, if available.', readOnly: true }),
    latitude: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Latitude for specified ipAddress.', readOnly: true }),
    longitude: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Longitude for specified ipAddress.', readOnly: true }),
    paymentInstrumentVelocity: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Number of transactions for this payment instrument (based on fingerprint) in the last 24 hours.',
        readOnly: true,
      }),
    postalCode: z
      .string()
      .max(10)
      .exactOptional()
      .openapi({ description: 'Postal code for specified ipAddress.', readOnly: true }),
    region: z
      .string()
      .exactOptional()
      .openapi({ description: 'Region for specified ipAddress.', example: 'NY', readOnly: true }),
    score: z
      .int()
      .exactOptional()
      .openapi({ description: 'Risk score computed per all the factors.', readOnly: true }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Time zone for specified ipAddress.',
        example: 'America/New_York',
        readOnly: true,
      }),
    vpnServiceName: z
      .string()
      .exactOptional()
      .openapi({ description: 'VPN service name, if available.', readOnly: true }),
  })
  .openapi({
    description: 'Risk metadata used for 3DS and risk scoring.',
    title: 'Risk metadata',
    required: [],
  })
  .openapi('RiskMetadata')

const CommonBankAccountSchema = z
  .object({
    accountNumberType: z
      .enum(['BBAN', 'IBAN'])
      .default('BBAN')
      .exactOptional()
      .openapi({
        description:
          "Bank's account number type. A valid value is basic bank account number (BBAN) or international bank account number (IBAN).",
      }),
    accountType: z
      .enum(['checking', 'savings', 'other'])
      .exactOptional()
      .openapi({ description: "Bank's account type." }),
    bankName: z.string().exactOptional().openapi({ description: "Bank's name." }),
    bic: z.string().exactOptional().openapi({ description: 'Bank Identifier Code.' }),
    billingAddress: ContactObjectSchema.exactOptional().openapi({
      description: 'The billing address.',
    }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Bank account created time.',
    }),
    customFields: ResourceCustomFieldsSchema.exactOptional(),
    customerId: ResourceIdSchema.exactOptional().openapi({ description: "The customer's ID." }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique value to identify the bank account. It contains alphanumeric values.',
        readOnly: true,
      }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'The payment instrument ID.',
      readOnly: true,
    }),
    last4: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last 4 digits of the bank account.', readOnly: true }),
    method: z
      .literal('ach')
      .exactOptional()
      .openapi({ description: 'The method of payment instrument.', readOnly: true }),
    riskMetadata: RiskMetadataSchema.exactOptional(),
    routingNumber: z.string().exactOptional().openapi({ description: "Bank's routing number." }),
    status: z
      .enum(['active', 'deactivated'])
      .exactOptional()
      .openapi({ description: 'Bank account status.', readOnly: true }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Bank account updated time.',
    }),
  })
  .openapi({ title: 'Bank Account', required: [] })
  .openapi('CommonBankAccount')

type SelfLinkType = z.infer<typeof LinkSchema>

const SelfLinkSchema: z.ZodType<SelfLinkType> = LinkSchema.and(
  z
    .object({ rel: z.literal('self').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('SelfLink')

type CustomerLinkType = z.infer<typeof LinkSchema>

const CustomerLinkSchema: z.ZodType<CustomerLinkType> = LinkSchema.and(
  z
    .object({
      rel: z.enum(['customer', 'targetCustomer']).openapi({ description: 'The link type.' }),
    })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('CustomerLink')

const LeadSourceDataSchema = z
  .object({
    _links: z
      .array(z.union([SelfLinkSchema, CustomerLinkSchema]))
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    affiliate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Lead source affiliate (eg 123, Bob Smith).' }),
    campaign: z
      .string()
      .exactOptional()
      .openapi({ description: 'Lead source campaign (eg go-big-123).' }),
    clickId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Lead source click id (may come from an ad server).' }),
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'Lead source content (eg smiley faces).' }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Lead source created time.',
    }),
    medium: z
      .string()
      .exactOptional()
      .openapi({ description: 'Lead source medium (eg search, display).' }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'Lead source path url (eg www.example.com/some/landing/path).' }),
    referrer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Lead source [`referer` url](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) as determined (eg www.example.com/some/landing/path).',
      }),
    salesAgent: z
      .string()
      .exactOptional()
      .openapi({ description: 'Lead source sales agent (eg James Bond).' }),
    source: z
      .string()
      .exactOptional()
      .openapi({ description: 'Lead source origin (eg google, yahoo).' }),
    subAffiliate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Lead source sub-affiliate also called a sub-id or click id in some circles (eg 123456).',
      }),
    term: z
      .string()
      .exactOptional()
      .openapi({ description: 'Lead source term (eg salt shakers).' }),
  })
  .openapi({ required: [] })
  .openapi('LeadSourceData')

const LeadSourceSchema = LeadSourceDataSchema.and(
  z
    .object({ original: LeadSourceDataSchema.exactOptional().openapi({ readOnly: true }) })
    .openapi({ required: [] }),
).openapi('LeadSource')

type LeadSourceEmbedType = { leadSource?: z.infer<typeof LeadSourceSchema> }

const LeadSourceEmbedSchema: z.ZodType<LeadSourceEmbedType> = z
  .object({ leadSource: LeadSourceSchema.exactOptional() })
  .openapi({ description: 'Lead Source object.', readOnly: true, required: [] })
  .openapi('LeadSourceEmbed')

const DefaultPaymentInstrumentLinkSchema = LinkSchema.and(
  z
    .object({
      rel: z.literal('defaultPaymentInstrument').openapi({ description: 'The link type.' }),
    })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('DefaultPaymentInstrumentLink')

type LeadSourceLinkType = z.infer<typeof LinkSchema>

const LeadSourceLinkSchema: z.ZodType<LeadSourceLinkType> = LinkSchema.and(
  z
    .object({ rel: z.literal('leadSource').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('LeadSourceLink')

type WebsiteLinkType = z.infer<typeof LinkSchema>

const WebsiteLinkSchema: z.ZodType<WebsiteLinkType> = LinkSchema.and(
  z
    .object({ rel: z.literal('website').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('WebsiteLink')

type CurrencyCodeType = string

const CurrencyCodeSchema: z.ZodType<CurrencyCodeType> = z
  .string()
  .length(3)
  .openapi({ description: 'ISO 4217 alphabetic currency code.', example: 'USD' })
  .openapi('CurrencyCode')

const CustomerAverageValueSchema = z
  .object({
    amount: z
      .float64()
      .exactOptional()
      .openapi({
        description: "Average approved payment amount in Merchant's reporting currency.",
        'x-basic': true,
        'x-label': 'Average Value',
        'x-sortable': true,
        'x-type': 'Money',
      }),
    amountUsd: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Average approved payment amount in USD.' }),
    currency: CurrencyCodeSchema.exactOptional().openapi({
      description: "Merchant's reporting currency.",
    }),
  })
  .openapi({ readOnly: true, required: [] })
  .openapi('CustomerAverageValue')

const PaymentInstrumentSchema: z.ZodType<PaymentInstrumentType> = z
  .lazy(() =>
    z.xor([
      VaultedInstrumentSchema,
      AlternativePaymentInstrumentSchema,
      CashInstrumentSchema,
      CheckInstrumentSchema,
    ]),
  )
  .openapi('PaymentInstrument')

const CustomerLifetimeRevenueSchema = z
  .object({
    amount: z
      .float64()
      .exactOptional()
      .openapi({
        description: "Revenue amount in Merchant's reporting currency.",
        'x-basic': true,
        'x-label': 'Lifetime Revenue',
        'x-sortable': true,
        'x-type': 'Money',
      }),
    amountUsd: z.float64().exactOptional().openapi({ description: 'Revenue amount in USD.' }),
    currency: CurrencyCodeSchema.exactOptional().openapi({
      description: "Merchant's reporting currency.",
    }),
  })
  .openapi({ readOnly: true, required: [] })
  .openapi('CustomerLifetimeRevenue')

const TagSchema = z
  .object({
    _links: z
      .array(z.union([SelfLinkSchema]))
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: "The tag's created time.",
    }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: "The tag's identifier string.",
      readOnly: true,
    }),
    name: z
      .string()
      .regex(/^[@~\-\.\w\s]+$/)
      .max(255)
      .openapi({
        description: 'The tag is unique name, which is case-insensitive.',
        example: 'New',
      }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: "The tag's updated time.",
    }),
  })
  .openapi({ description: 'Tag.', required: ['name'] })
  .openapi('Tag')

const CustomerSchema = z
  .object({
    _embedded: z
      .array(z.union([LeadSourceEmbedSchema]))
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'Any embedded objects available that are requested by the `expand` querystring parameter.',
        readOnly: true,
      }),
    _links: z
      .array(
        z.union([
          SelfLinkSchema,
          DefaultPaymentInstrumentLinkSchema,
          LeadSourceLinkSchema,
          WebsiteLinkSchema,
        ]),
      )
      .min(3)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    averageValue: CustomerAverageValueSchema.exactOptional(),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'The customer created time.',
      'x-label': 'Creation Time',
      'x-sortable': true,
    }),
    customFields: ResourceCustomFieldsSchema.exactOptional(),
    defaultPaymentInstrument: PaymentInstrumentSchema.exactOptional(),
    email: z
      .email()
      .exactOptional()
      .openapi({
        description: "The customer's email.",
        readOnly: true,
        'x-basic': true,
        'x-sortable': true,
      }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: "The customer's first name.", readOnly: true, 'x-basic': true }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'The customer identifier string.',
      readOnly: true,
    }),
    invoiceCount: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'An auto-incrementing number based on the sequence of invoices. If set to 0, then this record is a Lead, otherwise is a Customer.',
        readOnly: true,
        'x-sortable': true,
      }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({
        description: "The customer's last name.",
        readOnly: true,
        'x-basic': true,
        'x-sortable': true,
      }),
    lastPaymentTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'The most recent time of an approved payment for the customer.',
      'x-basic': true,
      'x-label': 'Last Payment',
      'x-sortable': true,
    }),
    lifetimeRevenue: CustomerLifetimeRevenueSchema.exactOptional(),
    paymentCount: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of approved payments for the customer.',
        readOnly: true,
        'x-basic': true,
        'x-label': 'Payments',
        'x-sortable': true,
      }),
    paymentToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A write-only payment token; if supplied, it will be converted into a\npayment instrument and be set as the `defaultPaymentInstrument`. The\nvalue of this property will override the `defaultPaymentInstrument`\nin the case that both are supplied. The token may only be used once\nbefore it is expired.\n',
        writeOnly: true,
      }),
    primaryAddress: ContactObjectSchema.exactOptional(),
    revision: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The number of times the customer data has been modified.\nThe revision is useful when analyzing webhook data to determine if the change takes precedence over the current representation.\n',
        readOnly: true,
      }),
    tags: z
      .array(TagSchema)
      .exactOptional()
      .openapi({ description: "A list of customer's tags.", readOnly: true }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'The customer updated time.',
      'x-label': 'Last Update Time',
      'x-sortable': true,
    }),
    websiteId: ResourceIdSchema.exactOptional().openapi({
      description: "The website's ID.",
      'x-sortable': true,
    }),
  })
  .openapi({ required: [] })
  .openapi('Customer')

type CustomerEmbedType = { customer?: z.infer<typeof CustomerSchema> }

const CustomerEmbedSchema: z.ZodType<CustomerEmbedType> = z
  .object({ customer: CustomerSchema.exactOptional() })
  .openapi({ description: 'Customer object.', readOnly: true, required: [] })
  .openapi('CustomerEmbed')

type BankAccountType = z.infer<typeof CommonBankAccountSchema> & {
  _embedded?: z.infer<typeof CustomerEmbedSchema>[]
  _links?: (z.infer<typeof SelfLinkSchema> | z.infer<typeof CustomerLinkSchema>)[]
}

const BankAccountSchema: z.ZodType<BankAccountType> = z
  .lazy(() =>
    CommonBankAccountSchema.and(
      z
        .object({
          _embedded: z
            .array(z.union([CustomerEmbedSchema]))
            .min(1)
            .exactOptional()
            .openapi({
              description:
                'Any embedded objects available that are requested by the `expand` querystring parameter.',
              readOnly: true,
            }),
          _links: z
            .array(z.union([SelfLinkSchema, CustomerLinkSchema]))
            .min(1)
            .exactOptional()
            .openapi({ description: 'The links related to resource.', readOnly: true }),
        })
        .openapi({ required: [] }),
    ),
  )
  .openapi('BankAccount')

type BankAccountEmbedType = { bankAccount?: z.infer<typeof BankAccountSchema> }

const InvoiceDiscountSchema = z
  .object({
    amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total amount that was discounted by this Coupon.' }),
    couponId: ResourceIdSchema.exactOptional().openapi({ description: "Coupon's ID." }),
    description: z.string().exactOptional().openapi({ description: 'Discount description.' }),
    redemptionId: ResourceIdSchema.exactOptional().openapi({ description: 'Redemption ID.' }),
  })
  .openapi({ readOnly: true, required: [] })
  .openapi('InvoiceDiscount')

const ProductSchema: z.ZodType<ProductType> = z
  .lazy(() =>
    CommonProductSchema.and(
      z
        .object({
          _links: z
            .array(SelfLinkSchema)
            .min(1)
            .exactOptional()
            .openapi({ description: 'The links related to resource.', readOnly: true }),
          accountingCode: z
            .string()
            .exactOptional()
            .openapi({ description: 'The product accounting code.', example: '4010' }),
          taxCategoryId: z
            .enum(['00000', '99999', '20010', '40030', '51020', '51010', '31000', '30070'])
            .exactOptional()
            .openapi({ description: "The product's tax category identifier string." }),
        })
        .openapi({ required: [] }),
    ),
  )
  .openapi('Product')

const ProductEmbedSchema = z
  .object({ product: ProductSchema.exactOptional() })
  .openapi({ description: 'Product object.', readOnly: true, required: [] })
  .openapi('ProductEmbed')

const PlanSchema: z.ZodType<PlanType> = z
  .lazy(() =>
    CommonPlanSchema.and(
      z
        .object({
          _links: z
            .array(SelfLinkSchema)
            .min(1)
            .exactOptional()
            .openapi({ description: 'The links related to resource.', readOnly: true }),
          invoiceTimeShift: InvoiceTimeShiftSchema.exactOptional().openapi({
            description: 'You can shift issue time and due time of invoices for this plan.',
          }),
        })
        .openapi({ required: [] }),
    ),
  )
  .openapi('Plan')

const PlanEmbedSchema = z
  .object({ plan: PlanSchema.exactOptional() })
  .openapi({ description: 'Plan object.', readOnly: true, required: [] })
  .openapi('PlanEmbed')

const ProductLinkSchema = LinkSchema.and(
  z
    .object({ rel: z.literal('product').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('ProductLink')

const InvoiceItemSchema = z
  .object({
    _embedded: z
      .array(z.union([ProductEmbedSchema, PlanEmbedSchema]))
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'Any embedded objects available that are requested by the `expand` querystring parameter.',
        readOnly: true,
      }),
    _links: z
      .array(z.union([SelfLinkSchema, ProductLinkSchema]))
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Invoice item created time.',
    }),
    description: z.string().exactOptional().openapi({ description: "Invoice item's description." }),
    discountAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Invoice item discount amount.', readOnly: true }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'The website identifier string.',
      readOnly: true,
    }),
    periodEndTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'End time.' }),
    periodNumber: z
      .int()
      .exactOptional()
      .openapi({ description: 'Invoice item subscription order period number.' }),
    periodStartTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Start time.' }),
    price: z
      .float64()
      .exactOptional()
      .openapi({ description: "Invoice item's total price.", readOnly: true }),
    productId: ResourceIdSchema.exactOptional().openapi({ description: "The product's ID." }),
    quantity: z.int().exactOptional().openapi({ description: "Invoice item's quantity." }),
    type: z
      .enum(['debit', 'credit'])
      .openapi({ description: "Invoice item's type.", 'x-basic': true }),
    unitPrice: z.float64().openapi({ description: "Invoice item's price." }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Invoice item updated time.',
    }),
  })
  .openapi({ required: ['type', 'unitPrice'] })
  .openapi('InvoiceItem')

const InvoiceShippingSchema = z
  .object({
    calculator: z.enum(['manual', 'rebilly']).openapi({ description: 'Shipping calculator.' }),
  })
  .openapi({
    description: 'Invoice shipping.',
    discriminator: {
      mapping: { manual: '#/components/schemas/manual', rebilly: '#/components/schemas/rebilly' },
      propertyName: 'calculator',
    },
    required: ['calculator'],
  })
  .openapi('InvoiceShipping')

const InvoiceTaxSchema = z
  .object({
    amount: z
      .int()
      .exactOptional()
      .openapi({
        description: 'A sum of all invoice taxes.',
        'x-sortable': true,
        'x-type': 'Money',
      }),
    calculator: z.enum(['manual', 'rebilly-taxjar']).openapi({ description: 'Tax calculator.' }),
  })
  .openapi({
    description: 'Invoice taxes.',
    discriminator: {
      mapping: {
        manual: '#/components/schemas/manual-2',
        rebilly: '#/components/schemas/rebilly-taxjar',
      },
      propertyName: 'calculator',
    },
    required: ['calculator'],
  })
  .openapi('InvoiceTax')

type CommonInvoiceType = {
  abandonedTime?: z.infer<typeof ServerTimestampSchema>
  amount?: number
  amountDue?: number
  autopayRetryNumber?: number
  autopayScheduledTime?: string
  billingAddress?: z.infer<typeof ContactObjectSchema>
  collectionPeriod?: number
  createdTime?: z.infer<typeof ServerTimestampSchema>
  currency: z.infer<typeof CurrencyCodeSchema>
  delinquentCollectionPeriod?: number
  deliveryAddress?: z.infer<typeof ContactObjectSchema>
  discountAmount?: number
  discounts?: z.infer<typeof InvoiceDiscountSchema>[]
  dueTime?: z.infer<typeof ServerTimestampSchema>
  id?: z.infer<typeof ResourceIdSchema>
  invoiceNumber?: number
  issuedTime?: z.infer<typeof ServerTimestampSchema>
  items?: z.infer<typeof InvoiceItemSchema>[]
  notes?: string
  paidTime?: z.infer<typeof ServerTimestampSchema>
  paymentFormUrl?: string
  poNumber?: string | null
  shipping?: z.infer<typeof InvoiceShippingSchema>
  status?:
    | 'draft'
    | 'unpaid'
    | 'paid'
    | 'past-due'
    | 'delinquent'
    | 'abandoned'
    | 'voided'
    | 'partially-refunded'
    | 'refunded'
    | 'disputed'
  subscriptionId?: z.infer<typeof ResourceIdSchema>
  subtotalAmount?: number
  tax?: z.infer<typeof InvoiceTaxSchema>
  updatedTime?: z.infer<typeof ServerTimestampSchema>
  voidedTime?: z.infer<typeof ServerTimestampSchema>
  websiteId: z.infer<typeof ResourceIdSchema>
}

const PaymentCardBrandSchema = z
  .enum([
    'Visa',
    'MasterCard',
    'American Express',
    'Discover',
    'Maestro',
    'Solo',
    'Electron',
    'JCB',
    'Voyager',
    'Diners Club',
    'Switch',
    'Laser',
    'China UnionPay',
    'AstroPay Card',
  ])
  .openapi({ description: 'Payment Card brand.' })
  .openapi('PaymentCardBrand')

type CommonPaymentCardType = {
  bankCountry?: string
  bankName?: string
  billingAddress?: z.infer<typeof ContactObjectSchema>
  bin?: string
  brand?: z.infer<typeof PaymentCardBrandSchema>
  createdTime?: z.infer<typeof ServerTimestampSchema>
  customFields?: z.infer<typeof ResourceCustomFieldsSchema>
  customerId?: z.infer<typeof ResourceIdSchema>
  cvv?: string
  expMonth?: number
  expYear?: number
  fingerprint?: string
  id?: z.infer<typeof ResourceIdSchema>
  last4?: string
  method?: 'payment-card'
  pan?: string
  riskMetadata?: z.infer<typeof RiskMetadataSchema>
  status?: 'active' | 'inactive' | 'expired' | 'deactivated' | 'verification-needed'
  updatedTime?: z.infer<typeof ServerTimestampSchema>
}

const ThreeDSecureResultSchema = z
  .object({
    authenticated: z
      .enum(['yes', 'no', 'not applicable', 'attempted'])
      .openapi({ description: '3D Secure authentication response status.' }),
    enrolled: z
      .enum(['yes', 'no', 'invalid card/timeout', 'unavailable'])
      .openapi({ description: 'Is the cardholder enrolled in 3D Secure.' }),
    flow: z
      .enum(['frictionless', 'challenge'])
      .exactOptional()
      .openapi({ description: '3D Secure 2 authentication flow.' }),
    isDowngraded: z
      .boolean()
      .default(false)
      .openapi({ description: 'If 3D Secure 2 was attempted but downgraded to 3D Secure 1.' }),
    liability: z.enum(['protected', 'not protected', 'protected (attempt)']),
    version: z
      .enum(['1.0.2', '2.1.0', '2.2.0'])
      .exactOptional()
      .openapi({ description: '3D Secure version.' }),
  })
  .openapi({ readOnly: true, required: ['enrolled', 'authenticated', 'liability', 'isDowngraded'] })
  .openapi('ThreeDSecureResult')

const GatewayNameSchema = z
  .enum([
    'A1Gateway',
    'Adyen',
    'Airpay',
    'AmexVPC',
    'ApcoPay',
    'AsiaPaymentGateway',
    'AstroPayCard',
    'AuthorizeNet',
    'Bambora',
    'BitPay',
    'BlueSnap',
    'BraintreePayments',
    'Cardknox',
    'Cashflows',
    'CASHlib',
    'CashToCode',
    'CauriPayment',
    'Cayan',
    'CCAvenue',
    'Chase',
    'Circle',
    'Citadel',
    'Clearhaus',
    'CODVoucher',
    'CoinPayments',
    'Conekta',
    'Coppr',
    'Credorax',
    'Cryptonator',
    'CyberSource',
    'DataCash',
    'Dengi',
    'Dragonphoenix',
    'Directa24',
    'dLocal',
    'EBANX',
    'ecoPayz',
    'EcorePay',
    'Elavon',
    'Euteller',
    'eMerchantPay',
    'EMS',
    'EPG',
    'EPro',
    'eZeeWallet',
    'ezyEFT',
    'Finrax',
    'Flexepin',
    'FinTecSystems',
    'FundSend',
    'Forte',
    'GET',
    'Gigadat',
    'GlobalOnePay',
    'Gooney',
    'Gpaysafe',
    'Greenbox',
    'HiPay',
    'iCanPay',
    'ICEPAY',
    'iCheque',
    'iDebit',
    'Ilixium',
    'Ingenico',
    'INOVAPAY',
    'Inovio',
    'Intuit',
    'InstaDebit',
    'IpayOptions',
    'JetPay',
    'Jeton',
    'Khelocard',
    'Konnektive',
    'loonie',
    'LPG',
    'MiFinity',
    'Moneris',
    'MtaPay',
    'MuchBetter',
    'MyFatoorah',
    'Neosurf',
    'Netbanking',
    'Neteller',
    'NGenius',
    'NinjaWallet',
    'NMI',
    'NuaPay',
    'OchaPay',
    'Onlineueberweisen',
    'OnRamp',
    'Pagsmile',
    'Panamerican',
    'ParamountEft',
    'ParamountInterac',
    'PandaGateway',
    'Pay4Fun',
    'PayCash',
    'PayClub',
    'Payeezy',
    'Payflow',
    'PaymentAsia',
    'PaymenTechnologies',
    'PaymentsOS',
    'Paymero',
    'PayPal',
    'Payr',
    'Paysafe',
    'Paysafecash',
    'PayTabs',
    'PayULatam',
    'Payvision',
    'Piastrix',
    'Plugnpay',
    'PostFinance',
    'Prosa',
    'Rapyd',
    'Realex',
    'Realtime',
    'Redsys',
    'Rotessa',
    'RPN',
    'SaltarPay',
    'Sagepay',
    'SeamlessChex',
    'SecureTrading',
    'SecurionPay',
    'Skrill',
    'SmartInvoice',
    'SMSVoucher',
    'Sofort',
    'SparkPay',
    'StaticGateway',
    'Stripe',
    'TestProcessor',
    'ToditoCash',
    'TrustPay',
    'TrustsPay',
    'Trustly',
    'TWINT',
    'UPayCard',
    'USAePay',
    'VantivLitle',
    'vegaaH',
    'VCreditos',
    'Wallet88',
    'Walpay',
    'Wirecard',
    'WorldlineAtosFrankfurt',
    'Worldpay',
    'XPay',
    'Zimpler',
    'Zotapay',
  ])
  .openapi({ description: 'The payment gateway name.' })
  .openapi('GatewayName')

type PaymentMethodType =
  | 'payment-card'
  | 'ach'
  | 'cash'
  | 'check'
  | 'paypal'
  | 'AdvCash'
  | 'Airpay'
  | 'Alfa-click'
  | 'Alipay'
  | 'Apple Pay'
  | 'AstroPay Card'
  | 'AstroPay-GO'
  | 'bank-transfer'
  | 'bank-transfer-2'
  | 'bank-transfer-3'
  | 'bank-transfer-4'
  | 'bank-transfer-5'
  | 'bank-transfer-6'
  | 'bank-transfer-7'
  | 'bank-transfer-8'
  | 'bank-transfer-9'
  | 'Beeline'
  | 'Belfius-direct-net'
  | 'bitcoin'
  | 'Boleto'
  | 'Boleto-2'
  | 'Boleto-3'
  | 'cash-deposit'
  | 'CASHlib'
  | 'CashToCode'
  | 'CCAvenue'
  | 'China UnionPay'
  | 'CODVoucher'
  | 'Conekta-oxxo'
  | 'Conekta-spei'
  | 'cryptocurrency'
  | 'Cupon-de-pagos'
  | 'CyberSource'
  | 'domestic-cards'
  | 'echeck'
  | 'ecoPayz'
  | 'ecoVoucher'
  | 'EPS'
  | 'ePay.bg'
  | 'Ethereum'
  | 'e-wallet'
  | 'ezyEFT'
  | 'eZeeWallet'
  | 'Flexepin'
  | 'Giropay'
  | 'Google Pay'
  | 'Gpaysafe'
  | 'iDebit'
  | 'iDEAL'
  | 'ING-homepay'
  | 'INOVAPAY-pin'
  | 'INOVAPAY-wallet'
  | 'InstaDebit'
  | 'instant-bank-transfer'
  | 'Interac-online'
  | 'Interac-eTransfer'
  | 'Interac-express-connect'
  | 'Interac'
  | 'invoice'
  | 'iWallet'
  | 'Jeton'
  | 'jpay'
  | 'Khelocard'
  | 'Klarna'
  | 'Litecoin'
  | 'loonie'
  | 'LPG-online'
  | 'LPG-payment-card'
  | 'Megafon'
  | 'MiFinity-eWallet'
  | 'miscellaneous'
  | 'Bancontact'
  | 'MTS'
  | 'MuchBetter'
  | 'MyFatoorah'
  | 'Neosurf'
  | 'Netbanking'
  | 'Neteller'
  | 'Nordea-Solo'
  | 'OchaPay'
  | 'online-bank-transfer'
  | 'Onlineueberweisen'
  | 'oriental-wallet'
  | 'OXXO'
  | 'Pagsmile-lottery'
  | 'Pagsmile-deposit-express'
  | 'PayCash'
  | 'Payeer'
  | 'PaymentAsia-crypto'
  | 'Paysafecard'
  | 'PayTabs'
  | 'Pay4Fun'
  | 'Paymero'
  | 'Paymero-QR'
  | 'PayULatam'
  | 'Perfect-money'
  | 'Piastrix'
  | 'PIX'
  | 'PinPay'
  | 'phone'
  | 'PhonePe'
  | 'POLi'
  | 'PostFinance-card'
  | 'PostFinance-e-finance'
  | 'Przelewy24'
  | 'QIWI'
  | 'QQPay'
  | 'Resurs'
  | 'SEPA'
  | 'Siirto'
  | 'Skrill'
  | 'Skrill Rapid Transfer'
  | 'SMSVoucher'
  | 'Sofort'
  | 'SparkPay'
  | 'swift-dbt'
  | 'Tele2'
  | 'Terminaly-RF'
  | 'Tether'
  | 'ToditoCash-card'
  | 'Trustly'
  | 'TWINT'
  | 'UniCrypt'
  | 'UPayCard'
  | 'UPI'
  | 'VCreditos'
  | 'VenusPoint'
  | 'voucher'
  | 'voucher-2'
  | 'voucher-3'
  | 'voucher-4'
  | 'Webmoney'
  | 'Webpay'
  | 'Webpay-2'
  | 'Webpay Card'
  | 'WeChat Pay'
  | 'XPay-P2P'
  | 'XPay-QR'
  | 'Yandex-money'
  | 'Zotapay'
  | 'Zimpler'

const PaymentMethodSchema: z.ZodType<PaymentMethodType> = z
  .enum([
    'payment-card',
    'ach',
    'cash',
    'check',
    'paypal',
    'AdvCash',
    'Airpay',
    'Alfa-click',
    'Alipay',
    'Apple Pay',
    'AstroPay Card',
    'AstroPay-GO',
    'bank-transfer',
    'bank-transfer-2',
    'bank-transfer-3',
    'bank-transfer-4',
    'bank-transfer-5',
    'bank-transfer-6',
    'bank-transfer-7',
    'bank-transfer-8',
    'bank-transfer-9',
    'Beeline',
    'Belfius-direct-net',
    'bitcoin',
    'Boleto',
    'Boleto-2',
    'Boleto-3',
    'cash-deposit',
    'CASHlib',
    'CashToCode',
    'CCAvenue',
    'China UnionPay',
    'CODVoucher',
    'Conekta-oxxo',
    'Conekta-spei',
    'cryptocurrency',
    'Cupon-de-pagos',
    'CyberSource',
    'domestic-cards',
    'echeck',
    'ecoPayz',
    'ecoVoucher',
    'EPS',
    'ePay.bg',
    'Ethereum',
    'e-wallet',
    'ezyEFT',
    'eZeeWallet',
    'Flexepin',
    'Giropay',
    'Google Pay',
    'Gpaysafe',
    'iDebit',
    'iDEAL',
    'ING-homepay',
    'INOVAPAY-pin',
    'INOVAPAY-wallet',
    'InstaDebit',
    'instant-bank-transfer',
    'Interac-online',
    'Interac-eTransfer',
    'Interac-express-connect',
    'Interac',
    'invoice',
    'iWallet',
    'Jeton',
    'jpay',
    'Khelocard',
    'Klarna',
    'Litecoin',
    'loonie',
    'LPG-online',
    'LPG-payment-card',
    'Megafon',
    'MiFinity-eWallet',
    'miscellaneous',
    'Bancontact',
    'MTS',
    'MuchBetter',
    'MyFatoorah',
    'Neosurf',
    'Netbanking',
    'Neteller',
    'Nordea-Solo',
    'OchaPay',
    'online-bank-transfer',
    'Onlineueberweisen',
    'oriental-wallet',
    'OXXO',
    'Pagsmile-lottery',
    'Pagsmile-deposit-express',
    'PayCash',
    'Payeer',
    'PaymentAsia-crypto',
    'Paysafecard',
    'PayTabs',
    'Pay4Fun',
    'Paymero',
    'Paymero-QR',
    'PayULatam',
    'Perfect-money',
    'Piastrix',
    'PIX',
    'PinPay',
    'phone',
    'PhonePe',
    'POLi',
    'PostFinance-card',
    'PostFinance-e-finance',
    'Przelewy24',
    'QIWI',
    'QQPay',
    'Resurs',
    'SEPA',
    'Siirto',
    'Skrill',
    'Skrill Rapid Transfer',
    'SMSVoucher',
    'Sofort',
    'SparkPay',
    'swift-dbt',
    'Tele2',
    'Terminaly-RF',
    'Tether',
    'ToditoCash-card',
    'Trustly',
    'TWINT',
    'UniCrypt',
    'UPayCard',
    'UPI',
    'VCreditos',
    'VenusPoint',
    'voucher',
    'voucher-2',
    'voucher-3',
    'voucher-4',
    'Webmoney',
    'Webpay',
    'Webpay-2',
    'Webpay Card',
    'WeChat Pay',
    'XPay-P2P',
    'XPay-QR',
    'Yandex-money',
    'Zotapay',
    'Zimpler',
  ])
  .openapi({ description: 'The payment method.' })
  .openapi('PaymentMethod')

const InstrumentReferenceSchema = z
  .object({
    method: PaymentMethodSchema,
    paymentInstrumentId: ResourceIdSchema.exactOptional().openapi({
      description: 'The payment instrument ID.',
    }),
  })
  .openapi({ required: ['method'] })
  .openapi('InstrumentReference')

type CommonTransactionType = {
  '3ds'?: z.infer<typeof ThreeDSecureResultSchema>
  amount?: number
  billingAddress?: z.infer<typeof ContactObjectSchema>
  billingDescriptor?: string
  childTransactions?: z.infer<typeof ResourceIdSchema>[]
  createdTime?: z.infer<typeof ServerTimestampSchema>
  currency?: z.infer<typeof CurrencyCodeSchema>
  customFields?: z.infer<typeof ResourceCustomFieldsSchema>
  customerId?: z.infer<typeof ResourceIdSchema>
  description?: string
  gatewayName?: z.infer<typeof GatewayNameSchema>
  has3ds?: boolean
  hasAmountAdjustment?: boolean
  id?: z.infer<typeof ResourceIdSchema>
  invoiceIds?: z.infer<typeof ResourceIdSchema>[]
  isRebill?: boolean
  isRetry?: boolean
  parentTransactionId?: z.infer<typeof ResourceIdSchema>
  paymentInstrument?: z.infer<typeof InstrumentReferenceSchema>
  planIds?: z.infer<typeof ResourceIdSchema>[]
  processedTime?: z.infer<typeof ServerTimestampSchema>
  purchaseAmount?: number
  purchaseCurrency?: z.infer<typeof CurrencyCodeSchema>
  rebillNumber?: number
  redirectUrl?: string
  requestAmount?: number
  requestCurrency?: z.infer<typeof CurrencyCodeSchema>
  requestId?: string
  result?: 'abandoned' | 'approved' | 'canceled' | 'declined' | 'unknown'
  retryNumber?: number
  status?:
    | 'completed'
    | 'conn-error'
    | 'disputed'
    | 'never-sent'
    | 'offsite'
    | 'partially-refunded'
    | 'pending'
    | 'refunded'
    | 'sending'
    | 'suspended'
    | 'timeout'
    | 'voided'
    | 'waiting-approval'
    | 'waiting-capture'
    | 'waiting-gateway'
    | 'waiting-refund'
  subscriptionIds?: z.infer<typeof ResourceIdSchema>[]
  type?: '3ds-authentication' | 'authorize' | 'capture' | 'credit' | 'refund' | 'sale' | 'void'
  updatedTime?: z.infer<typeof ServerTimestampSchema>
  websiteId?: z.infer<typeof ResourceIdSchema>
}

type DisputeLinkType = z.infer<typeof LinkSchema>

const OnBoardingUrlLinkSchema = LinkSchema.and(
  z
    .object({ rel: z.literal('onBoardingUrl').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('OnBoardingUrlLink')

const DynamicIpnLinkSchema = LinkSchema.and(
  z
    .object({ rel: z.literal('dynamicIpnUrl').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('DynamicIpnLink')

const StaticIpnLinkSchema = LinkSchema.and(
  z
    .object({ rel: z.literal('staticIpnUrl').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('StaticIpnLink')

const AcquirerNameSchema: z.ZodType<AcquirerNameType> = z
  .enum([
    'Adyen',
    'Alipay',
    'AIB',
    'Airpay',
    'ApcoPay',
    'AsiaPaymentGateway',
    'AstroPay Card',
    'Ipay Options',
    'B+S',
    'Bambora',
    'BitPay',
    'Bank of America',
    'Bank of Moscow',
    'Bank of Rebilly',
    'Bank One',
    'BMO Harris Bank',
    'Borgun',
    'BraintreePayments',
    'Cardknox',
    'CASHlib',
    'CashToCode',
    'Catalunya Caixa',
    'CCAvenue',
    'Chase',
    'ChinaUnionPay',
    'CIM',
    'Circle',
    'Citadel',
    'Clearhaus',
    'CODVoucher',
    'CoinPayments',
    'Conekta',
    'Coppr',
    'Credorax',
    'Cryptonator',
    'CyberSource',
    'dLocal',
    'Dragonphoenix',
    'EBANX',
    'ecoPayz',
    'EcorePay',
    'Elavon',
    'EMS',
    'EPG',
    'Euteller',
    'eZeeWallet',
    'ezyEFT',
    'Fifth Third Bank',
    'Finrax',
    'First Data Buypass',
    'First Data Nashville',
    'First Data North',
    'First Data Omaha',
    'FinTecSystems',
    'Flexepin',
    'Forte',
    'FundSend',
    'Gigadat',
    'Global East',
    'Gooney',
    'Gpaysafe',
    'Heartland',
    'HiPay',
    'HSBC',
    'iCanPay',
    'ICEPAY',
    'iCheque',
    'Ilixium',
    'Ingenico',
    'INOVAPAY',
    'Intuit',
    'Jeton',
    'Khelocard',
    'Konnektive',
    'loonie',
    'LPG',
    'Masapay',
    'Merrick',
    'Mission Valley Bank',
    'MiFinity',
    'Moneris',
    'MuchBetter',
    'MyFatoorah',
    'NATWEST',
    'Neosurf',
    'Netbanking',
    'Neteller',
    'NinjaWallet',
    'NMI',
    'NuaPay',
    'OchaPay',
    'Onlineueberweisen',
    'OnRamp',
    'Other',
    'Panamerican',
    'Panda Bank',
    'Paramount',
    'ParamountEft',
    'ParamountInterac',
    'Pay4fun',
    'PayCash',
    'PayClub',
    'PaymentAsia',
    'PaymenTechnologies',
    'PaymentsOS',
    'Paymero',
    'Paynetics',
    'PayPal',
    'Payr',
    'PayTabs',
    'PayULatam',
    'Payvision',
    'Piastrix',
    'Peoples Trust Company',
    'PostFinance',
    'Privatbank',
    'Prosa',
    'QQPay',
    'Rapyd',
    'RBC',
    'RBS WorldPay',
    'RealTime',
    'Rotessa',
    'SaltarPay',
    'SecureTrading',
    'SecurionPay',
    'Skrill',
    'SmartInvoice',
    'SMSVoucher',
    'Sofort',
    'SparkPay',
    'State Bank of Mauritius',
    'Stripe',
    'TBI',
    'TestProcessor',
    'ToditoCash',
    'Trustly',
    'TrustPay',
    'TrustsPay',
    'TSYS',
    'TWINT',
    'UPayCard',
    'Vantiv',
    'VCreditos',
    'VoicePay',
    'Wallet88',
    'WeChat Pay',
    'Wells Fargo',
    'Wing Hang Bank',
    'Wirecard',
    'WorldPay',
    'XPay',
    'Zimpler',
    'Zotapay',
  ])
  .openapi({ description: 'The acquirer name.' })
  .openapi('AcquirerName')

const DigitalWalletsSchema = z
  .object({
    applePay: z
      .object({
        isEnabled: z
          .boolean()
          .default(false)
          .openapi({ description: 'Set true if Apple Pay is enabled.' }),
      })
      .exactOptional()
      .openapi({
        description: 'The Apple Pay digital wallet configuration. Skip if not using Apple Pay.',
        required: ['isEnabled'],
      }),
    googlePay: z
      .object({
        isEnabled: z
          .boolean()
          .default(false)
          .openapi({ description: 'Set true if Google Pay is enabled.' }),
        merchantName: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The merchant name in Google Pay. Leave blank if using FramePay.',
            example: 'Test Merchant',
          }),
        merchantOrigin: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The merchant origin in Google Pay. The fully qualified domain name. Leave blank if using FramePay.',
            example: 'www.example.com',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'The Google Pay™ digital wallet configuration. Skip if not using Google Pay™.',
        required: ['isEnabled'],
      }),
  })
  .openapi({
    description: 'Configure which digital wallets are enabled.',
    title: 'Digital Wallets',
    required: [],
  })
  .openapi('DigitalWallets')

const GatewayAccountSchema = z
  .object({
    _links: z
      .array(
        z.union([
          SelfLinkSchema,
          OnBoardingUrlLinkSchema,
          DynamicIpnLinkSchema,
          StaticIpnLinkSchema,
        ]),
      )
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    acceptedCurrencies: z
      .array(z.string())
      .openapi({ description: 'Accepted currencies (array of the currency three letter codes).' }),
    acquirerName: AcquirerNameSchema.default('Other').exactOptional(),
    additionalFilters: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The additional filters are used to determine whether the gateway account can be selected for the transaction to be processed.\nFor example, the filter may put a maximum amount value. If the transaction is above that amount, this gateway account wouldn't be used.\nThis follows our standard filter format.\n",
        example: 'amount:1..100;bin:411111,444433',
      }),
    approvalWindowTtl: z
      .int()
      .min(300)
      .max(16777215)
      .default(3600)
      .exactOptional()
      .openapi({
        description:
          'The time window (in seconds) allotted for approving an offsite transaction before it is automatically `abandoned`.',
      }),
    cityField: z
      .string()
      .exactOptional()
      .openapi({
        description: "The gateway account's city field (also known as line 2 descriptor).",
      }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Gateway Account created time.',
    }),
    dccForceCurrency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Force dynamic currency conversion to the specified currency on each sale.\nLeave it empty to disable force DCC.\n',
      }),
    dccMarkup: z
      .int()
      .min(-10000)
      .max(10000)
      .exactOptional()
      .openapi({ description: 'Dynamic currency conversion markup in basis points.' }),
    descriptor: z
      .string()
      .exactOptional()
      .openapi({ description: "The gateway account's descriptor." }),
    digitalWallets: DigitalWalletsSchema.exactOptional(),
    dynamicDescriptor: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'True, if Gateway Account allows dynamic descriptor.' }),
    excludedDccQuoteCurrencies: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Excluded Dynamic Currency Conversion Quote Currencies.' }),
    gatewayName: GatewayNameSchema,
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'The gateway identifier string.',
      readOnly: true,
    }),
    isDown: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if gateway is currently in downtime period.', readOnly: true }),
    merchantCategoryCode: z
      .string()
      .regex(/^[0-9]{4}$/)
      .default('0000')
      .exactOptional()
      .openapi({ description: "The gateway account's merchant category code." }),
    method: PaymentMethodSchema,
    monthlyLimit: z.float64().min(0).exactOptional().openapi({ description: 'Monthly Limit.' }),
    organizationId: ResourceIdSchema.exactOptional().openapi({
      deprecated: true,
      description: 'Organization ID.',
      readOnly: true,
    }),
    paymentCardSchemes: z
      .array(PaymentCardBrandSchema)
      .exactOptional()
      .openapi({ description: 'Accepted payment card brands.' }),
    reconciliationWindowEnabled: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If a transaction is not reconciled within the `reconciliationWindowTtl` time, then the transaction is marked as `abandoned`.',
      }),
    reconciliationWindowTtl: z
      .int()
      .min(300)
      .max(16777215)
      .exactOptional()
      .openapi({
        description:
          'The time window (in seconds) allotted for a reconciliation to occur. If it is not reconciled in that time, then the transaction is marked as `abandoned`.',
      }),
    status: z
      .enum(['active', 'inactive', 'pending', 'closed'])
      .exactOptional()
      .openapi({ description: "The gateway account's status.", readOnly: true }),
    sticky: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Customer\'s payment instrument will "stick" to the gateway account for future transactions when enabled.',
      }),
    threeDSecure: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'True, if Gateway Account allows 3DSecure.' }),
    timeout: z
      .int()
      .min(10)
      .max(120)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Gateway Account request timeout in seconds.' }),
    token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Gateway Account token.',
        example: 'TwiX3f92k4AiBE27BzTbQ38hHjicBz_w',
        readOnly: true,
      }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Gateway Account updated time.',
    }),
  })
  .openapi({
    discriminator: {
      mapping: {
        A1Gateway: '#/components/schemas/A1Gateway',
        Adyen: '#/components/schemas/Adyen',
        Airpay: '#/components/schemas/Airpay',
        AmexVPC: '#/components/schemas/AmexVPC',
        ApcoPay: '#/components/schemas/ApcoPay',
        AsiaPaymentGateway: '#/components/schemas/AsiaPaymentGateway',
        AstroPayCard: '#/components/schemas/AstroPayCard',
        AuthorizeNet: '#/components/schemas/AuthorizeNet',
        Bambora: '#/components/schemas/Bambora',
        BitPay: '#/components/schemas/BitPay',
        BlueSnap: '#/components/schemas/BlueSnap',
        BraintreePayments: '#/components/schemas/BraintreePayments',
        CASHlib: '#/components/schemas/CASHlib',
        CCAvenue: '#/components/schemas/CCAvenue',
        CODVoucher: '#/components/schemas/CODVoucher',
        Cardknox: '#/components/schemas/Cardknox',
        CashToCode: '#/components/schemas/CashToCode',
        Cashflows: '#/components/schemas/Cashflows',
        CauriPayment: '#/components/schemas/CauriPayment',
        Cayan: '#/components/schemas/Cayan',
        Chase: '#/components/schemas/Chase',
        Circle: '#/components/schemas/Circle',
        Citadel: '#/components/schemas/Citadel',
        Clearhaus: '#/components/schemas/Clearhaus',
        CoinPayments: '#/components/schemas/CoinPayments',
        Conekta: '#/components/schemas/Conekta',
        Coppr: '#/components/schemas/Coppr',
        Credorax: '#/components/schemas/Credorax',
        Cryptonator: '#/components/schemas/Cryptonator',
        CyberSource: '#/components/schemas/CyberSource',
        DataCash: '#/components/schemas/DataCash',
        Dengi: '#/components/schemas/Dengi',
        Directa24: '#/components/schemas/Directa24',
        Dragonphoenix: '#/components/schemas/Dragonphoenix',
        EBANX: '#/components/schemas/EBANX',
        EMS: '#/components/schemas/EMS',
        EPG: '#/components/schemas/EPG',
        EPro: '#/components/schemas/EPro',
        EcorePay: '#/components/schemas/EcorePay',
        Elavon: '#/components/schemas/Elavon',
        Euteller: '#/components/schemas/Euteller',
        FinTecSystems: '#/components/schemas/FinTecSystems',
        Finrax: '#/components/schemas/Finrax',
        Flexepin: '#/components/schemas/Flexepin',
        Forte: '#/components/schemas/Forte',
        FundSend: '#/components/schemas/FundSend',
        GET: '#/components/schemas/GET',
        Gigadat: '#/components/schemas/Gigadat',
        GlobalOne: '#/components/schemas/GlobalOne',
        Gooney: '#/components/schemas/Gooney',
        Gpaysafe: '#/components/schemas/Gpaysafe',
        Greenbox: '#/components/schemas/Greenbox',
        HiPay: '#/components/schemas/HiPay',
        ICEPAY: '#/components/schemas/ICEPAY',
        INOVAPAY: '#/components/schemas/INOVAPAY',
        Ilixium: '#/components/schemas/Ilixium',
        Ingenico: '#/components/schemas/Ingenico',
        Inovio: '#/components/schemas/Inovio',
        InstaDebit: '#/components/schemas/InstaDebit',
        Intuit: '#/components/schemas/Intuit',
        IpayOptions: '#/components/schemas/IpayOptions',
        JetPay: '#/components/schemas/JetPay',
        Jeton: '#/components/schemas/Jeton',
        Khelocard: '#/components/schemas/Khelocard',
        Konnektive: '#/components/schemas/Konnektive',
        LPG: '#/components/schemas/LPG',
        MiFinity: '#/components/schemas/MiFinity',
        Moneris: '#/components/schemas/Moneris',
        MtaPay: '#/components/schemas/MtaPay',
        MuchBetter: '#/components/schemas/MuchBetter',
        MyFatoorah: '#/components/schemas/MyFatoorah',
        NGenius: '#/components/schemas/NGenius',
        NMI: '#/components/schemas/NMI',
        Neosurf: '#/components/schemas/Neosurf',
        Netbanking: '#/components/schemas/Netbanking',
        Neteller: '#/components/schemas/Neteller',
        NinjaWallet: '#/components/schemas/NinjaWallet',
        NuaPay: '#/components/schemas/NuaPay',
        OchaPay: '#/components/schemas/OchaPay',
        OnRamp: '#/components/schemas/OnRamp',
        Onlineueberweisen: '#/components/schemas/Onlineueberweisen',
        Pagsmile: '#/components/schemas/Pagsmile',
        Panamerican: '#/components/schemas/Panamerican',
        PandaGateway: '#/components/schemas/PandaGateway',
        ParamountEft: '#/components/schemas/ParamountEft',
        ParamountInterac: '#/components/schemas/ParamountInterac',
        Pay4Fun: '#/components/schemas/Pay4Fun',
        PayCash: '#/components/schemas/PayCash',
        PayClub: '#/components/schemas/PayClub',
        PayPal: '#/components/schemas/PayPal',
        PayTabs: '#/components/schemas/PayTabs',
        PayULatam: '#/components/schemas/PayULatam',
        Payeezy: '#/components/schemas/Payeezy',
        Payflow: '#/components/schemas/Payflow',
        PaymenTechnologies: '#/components/schemas/PaymenTechnologies',
        PaymentAsia: '#/components/schemas/PaymentAsia',
        PaymentsOS: '#/components/schemas/PaymentsOS',
        Paymero: '#/components/schemas/Paymero',
        Payr: '#/components/schemas/Payr',
        Paysafe: '#/components/schemas/Paysafe',
        Paysafecash: '#/components/schemas/Paysafecash',
        Payvision: '#/components/schemas/Payvision',
        Piastrix: '#/components/schemas/Piastrix',
        Plugnpay: '#/components/schemas/Plugnpay',
        PostFinance: '#/components/schemas/PostFinance',
        Prosa: '#/components/schemas/Prosa',
        RPN: '#/components/schemas/RPN',
        Rapyd: '#/components/schemas/Rapyd',
        Realex: '#/components/schemas/Realex',
        Realtime: '#/components/schemas/Realtime',
        Redsys: '#/components/schemas/Redsys',
        Rotessa: '#/components/schemas/Rotessa',
        SMSVoucher: '#/components/schemas/SMSVoucher',
        Sagepay: '#/components/schemas/Sagepay',
        SaltarPay: '#/components/schemas/SaltarPay',
        SeamlessChex: '#/components/schemas/SeamlessChex',
        SecureTrading: '#/components/schemas/SecureTrading',
        SecurionPay: '#/components/schemas/SecurionPay',
        Skrill: '#/components/schemas/Skrill',
        SmartInvoice: '#/components/schemas/SmartInvoice',
        Sofort: '#/components/schemas/Sofort',
        SparkPay: '#/components/schemas/SparkPay',
        StaticGateway: '#/components/schemas/StaticGateway',
        Stripe: '#/components/schemas/Stripe',
        TWINT: '#/components/schemas/TWINT',
        TestProcessor: '#/components/schemas/TestProcessor',
        ToditoCash: '#/components/schemas/ToditoCash',
        TrustPay: '#/components/schemas/TrustPay',
        Trustly: '#/components/schemas/Trustly',
        TrustsPay: '#/components/schemas/TrustsPay',
        UPayCard: '#/components/schemas/UPayCard',
        USAePay: '#/components/schemas/USAePay',
        VCreditos: '#/components/schemas/VCreditos',
        VantivLitle: '#/components/schemas/VantivLitle',
        Wallet88: '#/components/schemas/Wallet88',
        Walpay: '#/components/schemas/Walpay',
        Wirecard: '#/components/schemas/Wirecard',
        WorldlineAtosFrankfurt: '#/components/schemas/WorldlineAtosFrankfurt',
        Worldpay: '#/components/schemas/Worldpay',
        XPay: '#/components/schemas/XPay',
        Zimpler: '#/components/schemas/Zimpler',
        Zotapay: '#/components/schemas/Zotapay',
        dLocal: '#/components/schemas/dLocal',
        eMerchantPay: '#/components/schemas/eMerchantPay',
        eZeeWallet: '#/components/schemas/eZeeWallet',
        ecoPayz: '#/components/schemas/ecoPayz',
        ezyEFT: '#/components/schemas/ezyEFT',
        iCanPay: '#/components/schemas/iCanPay',
        iCheque: '#/components/schemas/iCheque',
        iDebit: '#/components/schemas/iDebit',
        loonie: '#/components/schemas/loonie',
        vegaaH: '#/components/schemas/vegaaH',
      },
      propertyName: 'gatewayName',
    },
    required: ['gatewayName', 'method', 'acceptedCurrencies'],
  })
  .openapi('GatewayAccount')

type GatewayAccountEmbedType = { gatewayAccount?: z.infer<typeof GatewayAccountSchema> }

type GatewayAccountLinkType = z.infer<typeof LinkSchema>

const CommonInvoiceSchema: z.ZodType<CommonInvoiceType> = z
  .object({
    abandonedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Invoice abandoned time.',
      'x-sortable': true,
    }),
    amount: z
      .float64()
      .exactOptional()
      .openapi({
        description: "The invoice's amount.",
        readOnly: true,
        'x-basic': true,
        'x-sortable': true,
        'x-type': 'Money',
      }),
    amountDue: z
      .float64()
      .exactOptional()
      .openapi({
        description: "The invoice's due amount.",
        readOnly: true,
        'x-sortable': true,
        'x-type': 'Money',
      }),
    autopayRetryNumber: z
      .int()
      .min(0)
      .default(0)
      .exactOptional()
      .openapi({
        description: 'Invoice autopay retry number.',
        readOnly: true,
        'x-sortable': true,
      }),
    autopayScheduledTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Invoice autopay scheduled time.', 'x-sortable': true }),
    billingAddress: ContactObjectSchema.exactOptional().openapi({
      description: "Invoice's billing address.",
    }),
    collectionPeriod: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Collection period - difference between paidTime and issuedTime in days.',
        readOnly: true,
        'x-sortable': true,
      }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Invoice created time.',
      'x-sortable': true,
    }),
    currency: CurrencyCodeSchema.openapi({ 'x-basic': true, 'x-sortable': true }),
    delinquentCollectionPeriod: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Delinquent collection period - difference between paidTime and dueTime in days.',
        readOnly: true,
        'x-sortable': true,
      }),
    deliveryAddress: ContactObjectSchema.exactOptional().openapi({
      description: "Invoice's delivery address.",
    }),
    discountAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description: "The invoice's discounts amount.",
        readOnly: true,
        'x-type': 'Money',
      }),
    discounts: z
      .array(InvoiceDiscountSchema)
      .exactOptional()
      .openapi({ description: 'Discounts applied.', readOnly: true }),
    dueTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Invoice due time.',
      'x-sortable': true,
    }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'The invoice ID.',
      readOnly: true,
    }),
    invoiceNumber: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'An auto-incrementing number based on the sequence of invoices for any particular customer.',
        readOnly: true,
        'x-basic': true,
      }),
    issuedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Invoice issued time.',
      'x-basic': true,
      'x-label': 'Date Issued',
      'x-sortable': true,
    }),
    items: z
      .array(InvoiceItemSchema)
      .exactOptional()
      .openapi({ description: 'Invoice items array.', readOnly: true }),
    notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Notes for the customer which will be displayed on the invoice.' }),
    paidTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Invoice paid time.',
      'x-basic': true,
      'x-label': 'Payment Date',
      'x-sortable': true,
    }),
    paymentFormUrl: z
      .url()
      .exactOptional()
      .openapi({
        description:
          "URL where the customer can be redirected to pay for the invoice\nwith one of the methods which are available for this customer.\nIt's an alternative to creating a new transaction with empty `methods`.\n",
        readOnly: true,
      }),
    poNumber: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Purchase order number which will be displayed on the invoice.',
        example: 'PO123456',
      }),
    shipping: InvoiceShippingSchema.exactOptional(),
    status: z
      .enum([
        'draft',
        'unpaid',
        'paid',
        'past-due',
        'delinquent',
        'abandoned',
        'voided',
        'partially-refunded',
        'refunded',
        'disputed',
      ])
      .exactOptional()
      .openapi({ description: 'Invoice status.', readOnly: true, 'x-basic': true }),
    subscriptionId: ResourceIdSchema.exactOptional().openapi({
      description: "The related order's ID if available, otherwise null.",
      readOnly: true,
    }),
    subtotalAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description: "The invoice's subtotal amount.",
        readOnly: true,
        'x-type': 'Money',
      }),
    tax: InvoiceTaxSchema.exactOptional(),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Invoice updated time.',
      'x-sortable': true,
    }),
    voidedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Invoice voided time.',
      'x-sortable': true,
    }),
    websiteId: ResourceIdSchema.openapi({ description: 'The website ID.' }),
  })
  .openapi({ required: ['currency', 'websiteId'] })
  .openapi('CommonInvoice')

type WebsiteEmbedType = { website?: { [key: string]: unknown } }

const WebsiteEmbedSchema: z.ZodType<WebsiteEmbedType> = z
  .object({ website: z.object({}).exactOptional() })
  .openapi({ description: 'Website object.', readOnly: true, required: [] })
  .openapi('WebsiteEmbed')

const OrganizationQuestionnaireSchema = z
  .object({
    integrationType: z
      .string()
      .exactOptional()
      .openapi({ description: 'What kind of integration organization looks for.' }),
    launchTiming: z.string().exactOptional().openapi({ description: 'Desired time to go live.' }),
    monthlyTransactions: z
      .string()
      .exactOptional()
      .openapi({ description: 'The amount of monthly processed transaction.' }),
    products: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of products organization is interested in.' }),
    role: z.string().exactOptional().openapi({ description: 'The role of the owner.' }),
  })
  .openapi({ required: [] })
  .openapi('OrganizationQuestionnaire')

const OrganizationSchema = z
  .object({
    _links: z
      .array(SelfLinkSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    address: z
      .string()
      .max(60)
      .exactOptional()
      .openapi({ description: 'The organization street address.' }),
    address2: z
      .string()
      .max(60)
      .exactOptional()
      .openapi({ description: 'The organization street address.' }),
    city: z.string().max(45).exactOptional().openapi({ description: 'The organization city.' }),
    country: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .openapi({ description: 'The organization country ISO Alpha-2 code.' }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'The organization created time.',
    }),
    emails: ContactEmailsSchema.exactOptional(),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'The organization identifier string.',
      readOnly: true,
    }),
    invoiceTimeZone: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({
        description:
          'Invoice will use this time zone to display time otherwise UTC will be used. Example "America/New_York".',
      }),
    isPrimary: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True, if Organization is primary (available to set as true only, other organizations will become as isPrimary=false).',
      }),
    name: z.string().max(60).openapi({ description: 'The organization name.' }),
    phoneNumbers: ContactPhoneNumbersSchema.exactOptional(),
    postalCode: z
      .string()
      .max(10)
      .exactOptional()
      .openapi({ description: 'The organization postal code.' }),
    questionnaire: OrganizationQuestionnaireSchema.exactOptional(),
    region: z
      .string()
      .max(45)
      .exactOptional()
      .openapi({ description: 'The organization region (state).' }),
    taxDescriptor: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description: "The organization's tax label. This will be displayed on the invoice.",
      }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'The organization updated time.',
    }),
  })
  .openapi({ required: ['name', 'country'] })
  .openapi('Organization')

type OrganizationEmbedType = { organization?: z.infer<typeof OrganizationSchema> }

const OrganizationEmbedSchema: z.ZodType<OrganizationEmbedType> = z
  .object({ organization: OrganizationSchema.exactOptional() })
  .openapi({ description: 'Organization object.', readOnly: true, required: [] })
  .openapi('OrganizationEmbed')

type OrganizationLinkType = z.infer<typeof LinkSchema>

const OrganizationLinkSchema: z.ZodType<OrganizationLinkType> = LinkSchema.and(
  z
    .object({ rel: z.literal('organization').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('OrganizationLink')

type TransactionAllocationsLinkType = z.infer<typeof LinkSchema>

const TransactionAllocationsLinkSchema: z.ZodType<TransactionAllocationsLinkType> = LinkSchema.and(
  z
    .object({ rel: z.literal('transactionAllocations').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('TransactionAllocationsLink')

type RecalculateInvoiceLinkType = z.infer<typeof LinkSchema>

const RecalculateInvoiceLinkSchema: z.ZodType<RecalculateInvoiceLinkType> = LinkSchema.and(
  z
    .object({ rel: z.literal('recalculateInvoice').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('RecalculateInvoiceLink')

type SubscriptionLinkType = z.infer<typeof LinkSchema>

const SubscriptionLinkSchema: z.ZodType<SubscriptionLinkType> = LinkSchema.and(
  z
    .object({ rel: z.literal('subscription').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('SubscriptionLink')

type InvoiceRetryScheduleInstructionType = {
  method: 'intelligent' | 'immediately' | 'date-interval' | 'day-of-month' | 'day-of-week'
}

const InvoiceRetryScheduleInstructionSchema: z.ZodType<InvoiceRetryScheduleInstructionType> = z
  .object({
    method: z.enum(['intelligent', 'immediately', 'date-interval', 'day-of-month', 'day-of-week']),
  })
  .openapi({
    description: 'The calculation instruction of scheduled time.',
    discriminator: {
      mapping: {
        'date-interval': '#/components/schemas/date-interval',
        'day-of-month': '#/components/schemas/day-of-month',
        'day-of-week': '#/components/schemas/day-of-week',
        immediately: '#/components/schemas/immediately',
        intelligent: '#/components/schemas/intelligent',
      },
      propertyName: 'method',
    },
    required: ['method'],
  })
  .openapi('InvoiceRetryScheduleInstruction')

type InvoiceType = z.infer<typeof CommonInvoiceSchema> & { [key: string]: unknown } & {
  _embedded?: (
    | z.infer<typeof CustomerEmbedSchema>
    | z.infer<typeof WebsiteEmbedSchema>
    | z.infer<typeof OrganizationEmbedSchema>
    | z.infer<typeof LeadSourceEmbedSchema>
  )[]
  _links?: (
    | z.infer<typeof SelfLinkSchema>
    | z.infer<typeof CustomerLinkSchema>
    | z.infer<typeof WebsiteLinkSchema>
    | z.infer<typeof OrganizationLinkSchema>
    | z.infer<typeof LeadSourceLinkSchema>
    | z.infer<typeof TransactionAllocationsLinkSchema>
    | z.infer<typeof RecalculateInvoiceLinkSchema>
    | z.infer<typeof SubscriptionLinkSchema>
  )[]
  customerId?: z.infer<typeof ResourceIdSchema>
  dueReminderNumber?: number
  dueReminderTime?: z.infer<typeof ServerTimestampSchema> | null
  retryInstruction?: {
    afterAttemptPolicies: 'change-subscription-renewal-time'[]
    afterRetryEndPolicies: ('abandon-invoice' | 'cancel-subscription')[]
    attempts: { scheduleInstruction: z.infer<typeof InvoiceRetryScheduleInstructionSchema> }[]
  }
  revision?: number
  transactions?: z.infer<typeof TransactionSchema>[]
  type?: 'initial' | 'renewal' | 'interim' | 'cancellation' | 'one-time' | 'refund' | 'charge'
}

const InvoiceSchema: z.ZodType<InvoiceType> = z
  .lazy(() =>
    CommonInvoiceSchema.and(
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (!Object.hasOwn(val, 'customerId')) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({ required: ['customerId'] }),
    ).and(
      z
        .object({
          _embedded: z
            .array(
              z.union([
                CustomerEmbedSchema,
                WebsiteEmbedSchema,
                OrganizationEmbedSchema,
                LeadSourceEmbedSchema,
              ]),
            )
            .min(1)
            .exactOptional()
            .openapi({
              description:
                'Any embedded objects available that are requested by the `expand` querystring parameter.',
              readOnly: true,
            }),
          _links: z
            .array(
              z.union([
                SelfLinkSchema,
                CustomerLinkSchema,
                WebsiteLinkSchema,
                OrganizationLinkSchema,
                LeadSourceLinkSchema,
                TransactionAllocationsLinkSchema,
                RecalculateInvoiceLinkSchema,
                SubscriptionLinkSchema,
              ]),
            )
            .min(1)
            .exactOptional()
            .openapi({ description: 'The links related to resource.', readOnly: true }),
          customerId: ResourceIdSchema.exactOptional().openapi({
            description: "The сustomer's ID.",
            'x-basic': true,
          }),
          dueReminderNumber: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Number of past due reminder events triggered.',
              readOnly: true,
            }),
          dueReminderTime: ServerTimestampSchema.nullable()
            .exactOptional()
            .openapi({ description: 'Time past due reminder event will be triggered.' }),
          retryInstruction: z
            .object({
              afterAttemptPolicies: z
                .array(z.literal('change-subscription-renewal-time'))
                .openapi({ description: 'The policy on the attempt finishes.' }),
              afterRetryEndPolicies: z
                .array(z.enum(['abandon-invoice', 'cancel-subscription']))
                .openapi({ description: 'The policy on the retry ends.' }),
              attempts: z
                .array(
                  z
                    .object({ scheduleInstruction: InvoiceRetryScheduleInstructionSchema })
                    .openapi({ required: ['scheduleInstruction'] }),
                )
                .min(1),
            })
            .exactOptional()
            .openapi({
              description: 'The invoice retry instruction.',
              required: ['attempts', 'afterAttemptPolicies', 'afterRetryEndPolicies'],
            }),
          revision: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of times the invoice data has been modified.\nThe revision is useful when analyzing webhook data to determine if the change takes precedence over the current representation.\n',
              readOnly: true,
            }),
          transactions: z
            .array(TransactionSchema)
            .exactOptional()
            .openapi({ description: 'Invoice transactions array.', readOnly: true }),
          type: z
            .enum(['initial', 'renewal', 'interim', 'cancellation', 'one-time', 'refund', 'charge'])
            .exactOptional()
            .openapi({ description: 'Invoice type.', readOnly: true }),
        })
        .openapi({ required: [] }),
    ),
  )
  .openapi('Invoice')

type InvoicesEmbedType = { invoices?: z.infer<typeof InvoiceSchema>[] }

type InvoicesLinkType = z.infer<typeof LinkSchema>

const KycDocumentSubtypesSchema = z
  .enum([
    'passport',
    'id-card',
    'driver-license',
    'birth-certificate',
    'utility-bill',
    'rental-receipt',
    'lease-agreement',
    'copy-credit-card',
    'credit-card-statement',
    'bank-statement',
    'inheritance-documentation',
    'tax-return',
    'salary-slip',
    'sale-of-assets',
    'public-health-card',
    'proof-of-age-card',
    'reverse-of-id',
    'public-service',
    'ewallet-holder-details',
    'ewallet-transaction-statement',
    'other',
  ])
  .openapi('KycDocumentSubtypes')

const KycDocumentTypesSchema = z
  .enum(['identity-proof', 'address-proof', 'funds-proof', 'purchase-proof'])
  .openapi('KycDocumentTypes')

const KycDocumentRejectionSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The rejection message.',
        example: 'Provided document is unreadable',
      }),
    type: z
      .enum([
        'document-unreadable',
        'document-expired',
        'document-not-matching',
        'underage-person',
        'other',
      ])
      .exactOptional(),
  })
  .openapi({ readOnly: true, required: [] })
  .openapi('KycDocumentRejection')

const CommonKycDocumentSchema = z
  .object({
    _links: z
      .array(z.union([SelfLinkSchema]))
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Creation date/time.',
    }),
    documentSubtype: KycDocumentSubtypesSchema.exactOptional().openapi({
      description: 'Document subtype submitted for validation.',
    }),
    documentType: KycDocumentTypesSchema.openapi({
      description:
        'Document type submitted for validation, only identity-proof type is analyzed in an automated manner.',
    }),
    fileId: ResourceIdSchema.exactOptional().openapi({
      deprecated: true,
      description: 'Linked file object id.',
    }),
    fileIds: z
      .array(ResourceIdSchema)
      .exactOptional()
      .openapi({ description: "Linked file object id's." }),
    id: ResourceIdSchema.exactOptional().openapi({ readOnly: true }),
    processedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Processing date/time.',
    }),
    rejectionReason: KycDocumentRejectionSchema.exactOptional(),
    requestId: ResourceIdSchema.nullable()
      .exactOptional()
      .openapi({ description: 'KYC request identifier string.', readOnly: true }),
    status: z
      .enum(['pending', 'in-progress', 'accepted', 'rejected'])
      .openapi({ description: 'Status of the validation.', readOnly: true }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Latest update date/time.',
    }),
  })
  .openapi({ required: ['customerId', 'documentType', 'status'] })
  .openapi('CommonKycDocument')

type KycDocumentType = z.infer<typeof CommonKycDocumentSchema> & {
  customerId?: z.infer<typeof ResourceIdSchema>
  matchLevel?: number
  notes?: string | null
  reason?: string
  reviewTime?: z.infer<typeof ServerTimestampSchema> | null
  reviewerId?: z.infer<typeof ResourceIdSchema> | null
  reviewerName?: string | null
}

const CommonKycRequestSchema = z
  .object({
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Creation date/time.',
    }),
    documents: z
      .array(
        z
          .object({
            maxAttempts: z
              .int()
              .min(0)
              .max(100)
              .default(3)
              .exactOptional()
              .openapi({
                description: 'The number of document upload attempts. `0` treated as unlimited.',
              }),
            subtypes: z
              .array(KycDocumentSubtypesSchema)
              .exactOptional()
              .openapi({ description: 'Document subtype allowed for customer.' }),
            type: KycDocumentTypesSchema.openapi({
              description: 'Document type to be requested from customer.',
            }),
          })
          .openapi({ required: ['type'] }),
      )
      .openapi({ description: 'Documents to be requested from customer.' }),
    expirationTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Expiration date/time.' }),
    id: ResourceIdSchema.exactOptional().openapi({ readOnly: true }),
    redirectUrl: z
      .url()
      .exactOptional()
      .openapi({ description: 'The URL to redirect the customer when an upload is completed.' }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Latest update date/time.',
    }),
  })
  .openapi({ required: ['documents'] })
  .openapi('CommonKycRequest')

const KycDocumentsLinkSchema = LinkSchema.and(
  z
    .object({ rel: z.literal('kycDocuments').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('KycDocumentsLink')

const KycGathererLinkSchema = LinkSchema.and(
  z
    .object({ rel: z.literal('kycGatherer').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('KycGathererLink')

type KycRequestType = z.infer<typeof CommonKycRequestSchema> & {
  _links?: (
    | z.infer<typeof SelfLinkSchema>
    | z.infer<typeof KycDocumentsLinkSchema>
    | z.infer<typeof KycGathererLinkSchema>
  )[]
  customerId: z.infer<typeof ResourceIdSchema>
  matchLevel?: number
  reason?: string
}

type LanguageIsoCodeType = string

type MoneyAmountType = number

const MoneyAmountSchema: z.ZodType<MoneyAmountType> = z
  .float64()
  .openapi({ example: 10, 'x-type': 'Money' })
  .openapi('MoneyAmount')

type MoneyType = {
  amount: z.infer<typeof MoneyAmountSchema>
  currency: z.infer<typeof CurrencyCodeSchema>
}

const PlanPriceFormulaSchema = z
  .object({
    formula: z
      .enum(['fixed-fee', 'flat-rate', 'stairstep', 'tiered', 'volume'])
      .openapi({
        description:
          'The price formula determines what algorithm is used to calculate the invoice price based on a few factors,\n- the quantity in the order (which may be variable if usage pricing, otherwise determined when creating the order)\n- the price brackets data\n\nTo determine which formula is correct, please see the price formula documentation.\n',
      }),
  })
  .openapi({
    discriminator: {
      mapping: {
        'fixed-fee': '#/components/schemas/fixed-fee',
        'flat-rate': '#/components/schemas/flat-rate',
        stairstep: '#/components/schemas/stairstep',
        tiered: '#/components/schemas/tiered',
        volume: '#/components/schemas/volume',
      },
      propertyName: 'formula',
    },
    required: ['formula'],
  })
  .openapi('PlanPriceFormula')

const PlanPeriodSchema = z
  .object({
    length: z.int().openapi({ description: 'The length of time.' }),
    unit: z.enum(['day', 'week', 'month', 'year']).openapi({ description: 'The unit of time.' }),
  })
  .openapi({ required: ['unit', 'length'] })
  .openapi('PlanPeriod')

const PlanBillingTimingSchema = z
  .enum(['prepaid', 'postpaid'])
  .default('prepaid')
  .openapi({
    description:
      'The billing timing in relation to the service period.\nFor `prepaid` plans the customer pays when the service period starts,\nwhereas, for `postpaid` plans, the customer pays when the service period ends.\n',
  })
  .openapi('PlanBillingTiming')

const CommonPlanSchema = z
  .object({
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Plan created time.',
    }),
    currency: CurrencyCodeSchema,
    currencySign: z
      .string()
      .exactOptional()
      .openapi({ description: 'Currency sign.', readOnly: true }),
    customFields: ResourceCustomFieldsSchema.exactOptional(),
    id: ResourceIdSchema.exactOptional().openapi({ description: 'The plan ID.', readOnly: true }),
    isTrialOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether a plan has a trial without recurring instructions.',
        readOnly: true,
      }),
    name: z.string().openapi({ description: 'The plan name, displayed on invoices and receipts.' }),
    pricing: PlanPriceFormulaSchema,
    productId: ResourceIdSchema.openapi({ description: 'The related product ID.' }),
    productOptions: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Name-value pairs to specify the product options.',
        example: { color: 'red', size: 'xxl' },
      }),
    recurringInterval: PlanPeriodSchema.and(
      z
        .object({
          billingTiming: PlanBillingTimingSchema.exactOptional(),
          limit: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of invoices this subscription order will generate\n(if 1, it will not generate any beyond the initial order creation).\nFor example, set this property to `12`, when the `periodUnit` is month and the\n`periodDuration` is 1, for a 1 year contract billed monthly.\n',
            }),
        })
        .openapi({ required: [] }),
    )
      .exactOptional()
      .openapi({ description: 'The service interval. For a one-time item, use `null`.' }),
    revision: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Increments when the plan is modified. \nCompare to materialized subscription items revision.\n',
        readOnly: true,
      }),
    setup: z
      .object({
        price: z
          .float64()
          .openapi({ description: 'The price of a setup - 0 is a valid value (for free).' }),
      })
      .exactOptional()
      .openapi({ description: 'The setup. Set `null` if no setup.', required: ['price'] }),
    trial: z
      .object({
        period: PlanPeriodSchema,
        price: z
          .float64()
          .openapi({ description: 'The price of the trial. For a free trial, use `0`.' }),
      })
      .exactOptional()
      .openapi({
        description: 'The trial. Set `null` if no trial.',
        required: ['price', 'period'],
      }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Plan updated time.',
    }),
  })
  .openapi({ required: ['name', 'currency', 'productId', 'pricing'] })
  .openapi('CommonPlan')

const FlexiblePlanSchema = CommonPlanSchema.and(
  z
    .object({
      id: ResourceIdSchema.openapi({ description: 'The Plan identifier.', readOnly: false }),
    })
    .openapi({ required: ['id', 'name', 'currency', 'productId', 'pricing'] }),
)
  .openapi({ required: ['id', 'name', 'currency', 'productId', 'pricing'] })
  .openapi('FlexiblePlan')

const CommonSubscriptionSchema = z
  .object({
    activationTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Order activation time.',
      'x-sortable': true,
    }),
    billingAddress: ContactObjectSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Order billing address.' }),
    billingStatus: z
      .enum([
        'unpaid',
        'past-due',
        'delinquent',
        'paid',
        'voided',
        'refunded',
        'disputed',
        'voided',
      ])
      .exactOptional()
      .openapi({
        description:
          'The billing status of the most recent invoice.  It may\nhelp you determine if you should change the service status\nsuch as suspending the service.\n',
        readOnly: true,
      }),
    couponIds: z
      .array(z.string().openapi({ description: 'Coupon ID.' }))
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A list of coupons to redeem on the customer and restrict to this subscription.\nRead more about [coupons here](https://docs.rebilly.com/docs/dashboard/marketing/coupons-and-discounts/).\n\nThis parameter respects the following logic:\n\n- When not passed then applied coupons will not be changed.\n\n- When empty array passed then all applied coupon redemptions will be canceled.\n\n- When list of coupons is passed then not applied yet coupons will be applied, already applied coupons\nwill not change their state, applied coupons that are not presented in passed list will be canceled.\n\nIf list of applied coupons on pending order will be changed due to this param during update order,\n Invoice for the order will be reissued.\n',
        writeOnly: true,
      }),
    deliveryAddress: ContactObjectSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Order delivery address.' }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'The order identifier string.',
      readOnly: true,
    }),
    initialInvoiceId: ResourceIdSchema.exactOptional().openapi({
      description: 'The initial invoice identifier string.',
      readOnly: true,
    }),
    items: z
      .array(
        z
          .object({
            isGrandfathered: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  "Indicates if the plan's current revision is greater than this item's plan revision.",
                readOnly: true,
              }),
            isModified: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Indicates if the plan information was modified for this subscription.',
                readOnly: true,
              }),
            plan: FlexiblePlanSchema,
            planId: ResourceIdSchema.exactOptional().openapi({
              deprecated: true,
              description: 'The plan identifier string.',
              'x-basic': true,
            }),
            quantity: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of units of the product on the given plan.' }),
            revision: z
              .int()
              .exactOptional()
              .openapi({
                description: 'Increments with each override change to this specific item.',
                readOnly: true,
              }),
          })
          .openapi({ required: ['plan'] }),
      )
      .min(1)
      .exactOptional(),
    orderType: z
      .enum(['subscription-order', 'one-time-order'])
      .default('subscription-order')
      .exactOptional()
      .openapi({
        description: 'Specifies the type of order, a subscription or a one-time purchase.\n',
      }),
    poNumber: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Purchase order number, will be displayed on the issued invoices.',
        example: 'PO123456',
      }),
    recentInvoiceId: ResourceIdSchema.exactOptional().openapi({
      description: 'Most recently issued invoice identifier string. It might not be `paid` yet.',
      readOnly: true,
    }),
    voidTime: ServerTimestampSchema.exactOptional().openapi({ description: 'Order void time.' }),
    websiteId: ResourceIdSchema.exactOptional().openapi({
      description: 'The website identifier string.',
      'x-basic': true,
      'x-sortable': true,
    }),
  })
  .openapi({ required: [] })
  .openapi('CommonSubscription')

const CommonOneTimeOrderSchema = CommonSubscriptionSchema.and(
  z
    .object({
      status: z
        .enum(['pending', 'completed', 'abandoned'])
        .exactOptional()
        .openapi({ description: 'One-time order status.', readOnly: true }),
    })
    .openapi({ required: [] }),
).openapi('CommonOneTimeOrder')

const RecentInvoiceEmbedSchema = z
  .object({ recentInvoice: InvoiceSchema.exactOptional() })
  .openapi({ description: 'Recent Invoice object.', readOnly: true, required: [] })
  .openapi('RecentInvoiceEmbed')

const InitialInvoiceEmbedSchema = z
  .object({ initialInvoice: InvoiceSchema.exactOptional() })
  .openapi({ description: 'Initial Invoice object.', readOnly: true, required: [] })
  .openapi('InitialInvoiceEmbed')

const InitialInvoiceLinkSchema = LinkSchema.and(
  z
    .object({ rel: z.literal('initialInvoice').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('InitialInvoiceLink')

const RecentInvoiceLinkSchema = LinkSchema.and(
  z
    .object({ rel: z.literal('recentInvoice').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('RecentInvoiceLink')

const ApprovalUrlLinkSchema: z.ZodType<ApprovalUrlLinkType> = LinkSchema.and(
  z
    .object({ rel: z.literal('approvalUrl').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('ApprovalUrlLink')

const SubscriptionMetadataSchema = z
  .object({
    _embedded: z
      .array(
        z.union([
          RecentInvoiceEmbedSchema,
          InitialInvoiceEmbedSchema,
          CustomerEmbedSchema,
          WebsiteEmbedSchema,
          LeadSourceEmbedSchema,
        ]),
      )
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'Any embedded objects available that are requested by the `expand` querystring parameter.',
        readOnly: true,
      }),
    _links: z
      .array(
        z.union([
          SelfLinkSchema,
          CustomerLinkSchema,
          InitialInvoiceLinkSchema,
          RecentInvoiceLinkSchema,
          WebsiteLinkSchema,
          ApprovalUrlLinkSchema,
        ]),
      )
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Order created time.',
      'x-label': 'Creation time',
      'x-sortable': true,
    }),
    customFields: ResourceCustomFieldsSchema.exactOptional(),
    revision: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The number of times the order data has been modified.\nThe revision is useful when analyzing webhook data to determine if the change takes precedence over the current representation.\n',
        readOnly: true,
      }),
    riskMetadata: RiskMetadataSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'Risk metadata. If null, the value would coalesce to the risk metadata captured when creating the payment token.',
        example: { $ref: '#/components/schemas/ReadyToPayMethods/example/2/feature' },
      }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Order updated time.',
      'x-label': 'Last update time',
      'x-sortable': true,
    }),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionMetadata')

type OneTimeOrderType = z.infer<typeof CommonOneTimeOrderSchema> & {
  customerId?: z.infer<typeof ResourceIdSchema>
} & z.infer<typeof SubscriptionMetadataSchema>

type ParentTransactionEmbedType = { parentTransaction?: z.infer<typeof TransactionSchema> }

type ParentTransactionLinkType = z.infer<typeof LinkSchema>

const CommonPayPalAccountSchema = z
  .object({
    billingAddress: ContactObjectSchema.openapi({ description: 'The billing address.' }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'PayPal account created time.',
    }),
    customFields: ResourceCustomFieldsSchema.exactOptional(),
    customerId: ResourceIdSchema.openapi({ description: "The customer's ID." }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'The payment instrument ID.',
      readOnly: true,
    }),
    method: z.literal('paypal').openapi({ description: 'The method of payment instrument.' }),
    riskMetadata: RiskMetadataSchema.exactOptional(),
    status: z
      .enum(['inactive', 'active', 'deactivated'])
      .exactOptional()
      .openapi({ description: 'PayPal account status.', readOnly: true }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'PayPal account updated time.',
    }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'PayPal username.', readOnly: true }),
  })
  .openapi({ required: ['method', 'customerId', 'billingAddress'], title: 'PayPal Account' })
  .openapi('CommonPayPalAccount')

const AuthTransactionEmbedSchema: z.ZodType<AuthTransactionEmbedType> = z
  .lazy(() =>
    z
      .object({ authTransaction: TransactionSchema.exactOptional() })
      .openapi({ description: 'Auth Transaction object.', readOnly: true, required: [] }),
  )
  .openapi('AuthTransactionEmbed')

const AuthTransactionLinkSchema: z.ZodType<AuthTransactionLinkType> = LinkSchema.and(
  z
    .object({ rel: z.literal('authTransaction').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('AuthTransactionLink')

type PayPalAccountType = z.infer<typeof CommonPayPalAccountSchema> & {
  _embedded?: (z.infer<typeof AuthTransactionEmbedSchema> | z.infer<typeof CustomerEmbedSchema>)[]
  _links?: (
    | z.infer<typeof SelfLinkSchema>
    | z.infer<typeof CustomerLinkSchema>
    | z.infer<typeof AuthTransactionLinkSchema>
    | z.infer<typeof ApprovalUrlLinkSchema>
  )[]
}

const CommonPaymentCardSchema: z.ZodType<CommonPaymentCardType> = z
  .object({
    bankCountry: z
      .string()
      .exactOptional()
      .openapi({ description: 'Payment instrument bank country.', readOnly: true }),
    bankName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Payment instrument bank name.', readOnly: true }),
    billingAddress: ContactObjectSchema.exactOptional().openapi({
      description: 'The billing address.',
    }),
    bin: z
      .string()
      .exactOptional()
      .openapi({ description: "The card's bin (the PAN's first 6 digits).", readOnly: true }),
    brand: PaymentCardBrandSchema.exactOptional().openapi({ readOnly: true }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Payment instrument created time.',
    }),
    customFields: ResourceCustomFieldsSchema.exactOptional(),
    customerId: ResourceIdSchema.exactOptional().openapi({ description: "The сustomer's ID." }),
    cvv: z
      .string()
      .exactOptional()
      .openapi({ description: "Card's cvv (card verification value).", writeOnly: true }),
    expMonth: z.int().exactOptional().openapi({ description: "Card's expiration month." }),
    expYear: z.int().exactOptional().openapi({ description: "Card's expiration year." }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique value to identify the payment instrument regardless of variable values. It contains alphanumeric values.',
        readOnly: true,
      }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'The payment instrument ID.',
      readOnly: true,
    }),
    last4: z
      .string()
      .exactOptional()
      .openapi({ description: "The PAN's last 4 digits.", readOnly: true }),
    method: z
      .literal('payment-card')
      .exactOptional()
      .openapi({ description: 'The method of payment instrument.', readOnly: true }),
    pan: z
      .string()
      .exactOptional()
      .openapi({ description: 'The card PAN (primary account number).', writeOnly: true }),
    riskMetadata: RiskMetadataSchema.exactOptional(),
    status: z
      .enum(['active', 'inactive', 'expired', 'deactivated', 'verification-needed'])
      .exactOptional()
      .openapi({
        description:
          'Payment instrument status. When an instrument is `active` it means it has been used at least once for an approved transaction.\nTo remove an instrument from being in use, set it as `deactivated` (see the deactivation endpoint).\n',
      }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Payment instrument updated time.',
    }),
  })
  .openapi({ title: 'Payment Card', required: [] })
  .openapi('CommonPaymentCard')

type PaymentCardType = z.infer<typeof CommonPaymentCardSchema> & {
  _embedded?: (z.infer<typeof AuthTransactionEmbedSchema> | z.infer<typeof CustomerEmbedSchema>)[]
  _links?: (
    | z.infer<typeof SelfLinkSchema>
    | z.infer<typeof CustomerLinkSchema>
    | z.infer<typeof AuthTransactionLinkSchema>
    | z.infer<typeof ApprovalUrlLinkSchema>
  )[]
  expirationReminderNumber?: number
  expirationReminderTime?: z.infer<typeof ServerTimestampSchema> | null
  stickyGatewayAccountId?: string
}

const PaymentCardSchema: z.ZodType<PaymentCardType> = z
  .lazy(() =>
    CommonPaymentCardSchema.and(
      z
        .object({
          _embedded: z
            .array(z.union([AuthTransactionEmbedSchema, CustomerEmbedSchema]))
            .min(1)
            .exactOptional()
            .openapi({
              description:
                'Any embedded objects available that are requested by the `expand` querystring parameter.',
              readOnly: true,
            }),
          _links: z
            .array(
              z.union([
                SelfLinkSchema,
                CustomerLinkSchema,
                AuthTransactionLinkSchema,
                ApprovalUrlLinkSchema,
              ]),
            )
            .min(1)
            .exactOptional()
            .openapi({ description: 'The links related to resource.', readOnly: true }),
          expirationReminderNumber: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Number of expiration reminder events triggered.',
              readOnly: true,
            }),
          expirationReminderTime: ServerTimestampSchema.nullable()
            .exactOptional()
            .openapi({ description: 'Time expiration reminder event will be triggered.' }),
          stickyGatewayAccountId: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Default gateway account ID used for transactions.',
              readOnly: true,
            }),
        })
        .openapi({ required: [] }),
    ),
  )
  .openapi('PaymentCard')

type PaymentCardEmbedType = { paymentCard?: z.infer<typeof PaymentCardSchema> }

type PaymentCardLinkType = z.infer<typeof LinkSchema>

const VaultedInstrumentSchema = z
  .object({
    method: PaymentMethodSchema.openapi({
      description:
        'The payment method supported vault.\nSee [Payment Instruments API](https://api-reference.rebilly.com/tag/Payment-Instruments).\n',
    }),
    paymentInstrumentId: ResourceIdSchema.openapi({
      description: 'The payment instrument identifier.',
    }),
  })
  .openapi({
    description: 'Vaulted payment instrument.',
    required: ['method', 'paymentInstrumentId'],
    title: 'Vaulted instrument',
  })
  .openapi('VaultedInstrument')

const AlternativePaymentInstrumentSchema = z
  .object({
    method: PaymentMethodSchema,
    paymentInstrumentId: z
      .any()
      .exactOptional()
      .openapi({ description: 'The payment instrument ID.' }),
  })
  .openapi({
    description: 'Alternative payment method instrument.',
    required: ['method'],
    title: 'Alternative instrument',
  })
  .openapi('AlternativePaymentInstrument')

const CashInstrumentSchema = z
  .object({
    method: z.literal('cash'),
    receivedBy: z.string().exactOptional().openapi({ description: "The receiver's name." }),
  })
  .openapi({ description: 'Cash payment instrument object.', required: ['method'], title: 'Cash' })
  .openapi('CashInstrument')

const CheckInstrumentSchema = z
  .object({
    method: z.literal('cash'),
    reference: z.string().exactOptional().openapi({ description: 'Reference data.' }),
  })
  .openapi({
    description: 'Check payment instrument object.',
    required: ['method'],
    title: 'Check',
  })
  .openapi('CheckInstrument')

type PaymentInstrumentType =
  | z.infer<typeof VaultedInstrumentSchema>
  | z.infer<typeof AlternativePaymentInstrumentSchema>
  | z.infer<typeof CashInstrumentSchema>
  | z.infer<typeof CheckInstrumentSchema>

const PayPalAccountSchema: z.ZodType<PayPalAccountType> = z
  .lazy(() =>
    CommonPayPalAccountSchema.and(
      z
        .object({
          _embedded: z
            .array(z.union([AuthTransactionEmbedSchema, CustomerEmbedSchema]))
            .min(1)
            .exactOptional()
            .openapi({
              description:
                'Any embedded objects available that are requested by the `expand` querystring parameter.',
              readOnly: true,
            }),
          _links: z
            .array(
              z.union([
                SelfLinkSchema,
                CustomerLinkSchema,
                AuthTransactionLinkSchema,
                ApprovalUrlLinkSchema,
              ]),
            )
            .min(1)
            .exactOptional()
            .openapi({ description: 'The links related to resource.', readOnly: true }),
        })
        .openapi({ required: [] }),
    ),
  )
  .openapi('PayPalAccount')

const KhelocardCardSchema = z
  .object({
    _embedded: z
      .array(z.union([CustomerEmbedSchema]))
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'Any embedded objects available that are requested by the `expand` querystring parameter.',
        readOnly: true,
      }),
    _links: z
      .array(z.union([SelfLinkSchema, CustomerLinkSchema]))
      .min(1)
      .exactOptional()
      .openapi({ description: 'Links related to the resource.', readOnly: true }),
    billingAddress: ContactObjectSchema.exactOptional().openapi({
      description: 'The billing address.',
    }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'The payment instrument created time.',
    }),
    customFields: ResourceCustomFieldsSchema.exactOptional(),
    customerId: ResourceIdSchema.exactOptional().openapi({ description: "Customer's ID." }),
    expMonth: z
      .int()
      .exactOptional()
      .openapi({ description: "Khelocard card's expiration month." }),
    expYear: z.int().exactOptional().openapi({ description: "Khelocard card's expiration year." }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique value to identify the payment instrument regardless of variable values. It contains alphanumeric values.',
      }),
    id: ResourceIdSchema.exactOptional().openapi({ description: 'The payment instrument ID.' }),
    last4: z.string().exactOptional().openapi({ description: "The number's last 4 digits." }),
    method: z
      .literal('Khelocard')
      .exactOptional()
      .openapi({ description: 'The method of payment instrument.' }),
    number: z.string().exactOptional().openapi({ description: "Khelocard card's masked number." }),
    riskMetadata: RiskMetadataSchema.exactOptional(),
    status: z
      .enum(['active', 'deactivated'])
      .exactOptional()
      .openapi({ description: 'The payment instrument status.' }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'The payment instrument updated time.',
    }),
  })
  .openapi({ title: 'Khelocard Card', required: [] })
  .openapi('KhelocardCard')

const AlternativePaymentMethodsSchema = z
  .enum([
    'cash',
    'check',
    'paypal',
    'AdvCash',
    'Alfa-click',
    'Alipay',
    'AstroPay Card',
    'AstroPay-GO',
    'bank-transfer',
    'bank-transfer-2',
    'bank-transfer-3',
    'bank-transfer-4',
    'bank-transfer-5',
    'bank-transfer-6',
    'bank-transfer-7',
    'bank-transfer-8',
    'bank-transfer-9',
    'Beeline',
    'Belfius-direct-net',
    'bitcoin',
    'Boleto',
    'cash-deposit',
    'CASHlib',
    'CashToCode',
    'China UnionPay',
    'CODVoucher',
    'Conekta-oxxo',
    'Cupon-de-pagos',
    'cryptocurrency',
    'domestic-cards',
    'echeck',
    'ecoPayz',
    'ecoVoucher',
    'EPS',
    'ePay.bg',
    'eZeeWallet',
    'Flexepin',
    'Giropay',
    'Gpaysafe',
    'Google Pay',
    'iDebit',
    'iDEAL',
    'ING-homepay',
    'INOVAPAY-pin',
    'INOVAPAY-wallet',
    'InstaDebit',
    'instant-bank-transfer',
    'Interac',
    'Interac-online',
    'Interac-eTransfer',
    'invoice',
    'iWallet',
    'Jeton',
    'jpay',
    'Khelocard',
    'Klarna',
    'loonie',
    'Megafon',
    'MiFinity-eWallet',
    'miscellaneous',
    'Bancontact',
    'MTS',
    'MuchBetter',
    'Neosurf',
    'Netbanking',
    'Neteller',
    'Nordea-Solo',
    'OchaPay',
    'online-bank-transfer',
    'Onlineueberweisen',
    'oriental-wallet',
    'OXXO',
    'Pagsmile-deposit-express',
    'Pagsmile-lottery',
    'PayCash',
    'Payeer',
    'PaymentAsia-crypto',
    'Paymero',
    'Perfect-money',
    'Piastrix',
    'plaid-account',
    'PayTabs',
    'Paysafecard',
    'Paysafecash',
    'Pay4Fun',
    'PinPay',
    'phone',
    'PhonePe',
    'POLi',
    'PostFinance-card',
    'PostFinance-e-finance',
    'Przelewy24',
    'QIWI',
    'QQPay',
    'Resurs',
    'SEPA',
    'Skrill',
    'Skrill Rapid Transfer',
    'SMSVoucher',
    'Sofort',
    'SparkPay',
    'swift-dbt',
    'Tele2',
    'Terminaly-RF',
    'ToditoCash-card',
    'Trustly',
    'UPayCard',
    'UPI',
    'VCreditos',
    'VenusPoint',
    'voucher',
    'voucher-2',
    'voucher-3',
    'voucher-4',
    'Webmoney',
    'Webpay',
    'Webpay-2',
    'Webpay Card',
    'WeChat Pay',
    'XPay-P2P',
    'XPay-QR',
    'Yandex-money',
    'Zotapay',
    'Zimpler',
  ])
  .openapi('AlternativePaymentMethods')

const AlternativePaymentInstrument_2Schema = z
  .object({
    _embedded: z
      .array(z.union([CustomerEmbedSchema]))
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'Any embedded objects available that are requested by the `expand` querystring parameter.',
        readOnly: true,
      }),
    _links: z
      .array(z.union([SelfLinkSchema, CustomerLinkSchema]))
      .min(1)
      .exactOptional()
      .openapi({ description: 'Links related to the resource.', readOnly: true }),
    billingAddress: ContactObjectSchema.exactOptional().openapi({
      description: 'The billing address.',
    }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'The payment instrument created time.',
    }),
    customFields: ResourceCustomFieldsSchema.exactOptional(),
    customerId: ResourceIdSchema.exactOptional().openapi({ description: "Customer's ID." }),
    id: ResourceIdSchema.exactOptional().openapi({ description: 'The payment instrument ID.' }),
    method: AlternativePaymentMethodsSchema.exactOptional().openapi({
      description: 'The method of payment instrument.',
    }),
    riskMetadata: RiskMetadataSchema.exactOptional(),
    status: z
      .enum(['active', 'deactivated'])
      .exactOptional()
      .openapi({ description: 'The payment instrument status.' }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'The payment instrument updated time.',
    }),
  })
  .openapi({ title: 'Alternative instrument', required: [] })
  .openapi('AlternativePaymentInstrument_2')

type PaymentInstrument_2Type =
  | z.infer<typeof PaymentCardSchema>
  | z.infer<typeof BankAccountSchema>
  | z.infer<typeof PayPalAccountSchema>
  | z.infer<typeof KhelocardCardSchema>
  | z.infer<typeof AlternativePaymentInstrument_2Schema>

const AmountAdjustmentSchema = z
  .object({ method: z.enum(['none', 'partial', 'discount']) })
  .openapi({
    discriminator: {
      mapping: {
        discount: '#/components/schemas/discount2',
        partial: '#/components/schemas/partial',
      },
      propertyName: 'method',
    },
    required: ['method'],
  })
  .openapi('AmountAdjustment')

const CommonScheduleInstructionSchema = z
  .object({
    method: z.enum([
      'auto',
      'intelligent',
      'immediately',
      'date-interval',
      'day-of-month',
      'day-of-week',
    ]),
  })
  .openapi({
    description: 'The calculation instruction of scheduled time.',
    discriminator: {
      mapping: {
        auto: '#/components/schemas/auto',
        'date-interval': '#/components/schemas/date-interval',
        'day-of-month': '#/components/schemas/day-of-month',
        'day-of-week': '#/components/schemas/day-of-week',
        immediately: '#/components/schemas/immediately',
        intelligent: '#/components/schemas/intelligent',
      },
      propertyName: 'method',
    },
    required: ['method'],
  })
  .openapi('CommonScheduleInstruction')

type PaymentRetryType = {
  afterAttemptPolicy: 'none' | 'change-subscription-renewal-time'
  afterRetryEndPolicy: 'none' | 'cancel-subscription'
  attempts: {
    paymentInstruction: z.infer<typeof AmountAdjustmentSchema>
    scheduleInstruction: z.infer<typeof CommonScheduleInstructionSchema>
  }[]
}

const TimeUnitSchema = z
  .enum(['second', 'minute', 'hour', 'day', 'month', 'year'])
  .openapi('TimeUnit')

const TimePluralUnitSchema = z
  .enum(['seconds', 'minutes', 'hours', 'days', 'months', 'years'])
  .openapi('TimePluralUnit')

const DueTimeShiftInstructionSchema = z
  .object({
    duration: z.int().min(1).openapi({ description: 'The number of the units.' }),
    unit: z.xor([TimeUnitSchema, TimePluralUnitSchema]),
  })
  .default({ duration: 1, unit: 'hour' })
  .openapi({
    description:
      'The calculation instruction of due time.\nThis is used in conjunction with the **billing anchor** to calculate due time of invoice.\nThe chronology of due time shift is always **after**.\n',
    required: ['duration', 'unit'],
  })
  .openapi('DueTimeShiftInstruction')

const IssueTimeShiftInstructionSchema = z
  .object({
    chronology: z
      .literal('before')
      .openapi({
        description: 'The chronology of the billing time relatively to the service period start.',
      }),
    duration: z.int().min(1).openapi({ description: 'The number of the units.' }),
    unit: z.xor([TimeUnitSchema, TimePluralUnitSchema]),
  })
  .openapi({
    description:
      'The calculation instruction of billing time.\nThis is used in conjunction with the **service period anchor** to calculate the time the invoice is issued.\n',
    required: ['chronology', 'duration', 'unit'],
  })
  .openapi('IssueTimeShiftInstruction')

const InvoiceTimeShiftSchema = z
  .object({
    dueTimeShift: DueTimeShiftInstructionSchema.exactOptional(),
    issueTimeShift: IssueTimeShiftInstructionSchema.exactOptional(),
  })
  .openapi({
    description:
      'The invoice time shift in conjunction with `billingTiming` allows to setup different billing use cases such as:\n- Bill immediately when the service period _starts_\n- Bill immediately after the service period _ends_\n- Bill _interval of time_ before the service period _starts_\n- Bill _interval of time_ after the service period _starts_\n- Bill _interval of time_ before the service period _ends_\n- Bill _interval of time_ after the service period _ends_\nIt allows to control the billing time.\n',
    required: [],
  })
  .openapi('InvoiceTimeShift')

type PlanType = z.infer<typeof CommonPlanSchema> & {
  _links?: z.infer<typeof SelfLinkSchema>[]
  invoiceTimeShift?: z.infer<typeof InvoiceTimeShiftSchema>
}

const BlankProblemSchema = z
  .looseObject({
    status: z
      .int()
      .min(400)
      .max(599)
      .exactOptional()
      .openapi({ description: 'The HTTP status code.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A short, human-readable summary of the problem type. It SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.',
      }),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({
    description:
      'The Problem Details JSON Object [[RFC7807](https://tools.ietf.org/html/rfc7807)].',
    required: [],
  })
  .openapi('BlankProblem')

const DocumentedProblemSchema = z
  .object({
    type: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'A URI reference [[RFC3986](https://tools.ietf.org/html/rfc3986)] that identifies the problem type. It should provide human-readable documentation for the problem type. When this member is not present, its value is assumed to be "about:blank".',
      }),
  })
  .openapi({ required: [] })
  .and(BlankProblemSchema)
  .openapi('DocumentedProblem')

const DetailedProblemSchema = BlankProblemSchema.and(
  z
    .object({
      detail: z
        .string()
        .exactOptional()
        .openapi({
          description: 'A human-readable explanation specific to this occurrence of the problem.',
        }),
    })
    .openapi({ required: [] }),
).openapi('DetailedProblem')

type ProblemType = z.infer<typeof DocumentedProblemSchema> & z.infer<typeof DetailedProblemSchema>

const CommonProductSchema = z
  .object({
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'The product created time.',
    }),
    customFields: ResourceCustomFieldsSchema.exactOptional(),
    description: z
      .string()
      .max(512)
      .exactOptional()
      .openapi({ description: 'The product description.' }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'The product ID.',
      example: 'membership',
      readOnly: true,
    }),
    name: z
      .string()
      .max(255)
      .openapi({ description: 'The product name.', example: 'Premium membership' }),
    options: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The product options such as color, size, etc. The product options definition does\nnot include option values. Those are defined within the plans.\n',
      }),
    requiresShipping: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If the product requires shipping, shipping calculations will be applied.',
        example: false,
      }),
    unitLabel: z
      .string()
      .max(50)
      .default('unit')
      .exactOptional()
      .openapi({
        description: 'The unit label, such as per `seat` or per `unit`.',
        example: 'seat',
      }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'The product updated time.',
    }),
  })
  .openapi({
    description:
      'Products include digital goods, services, and physical goods.\nProducts appear on invoice line items. If you set a tax category identifier,\ntaxes will be calculated upon invoice generation. If it is shippable,\nshipping will be calculated upon invoice generation. Pricing and\nvariations are set within Plans.\n',
    required: ['name'],
  })
  .openapi('CommonProduct')

type ProductType = z.infer<typeof CommonProductSchema> & {
  _links?: z.infer<typeof SelfLinkSchema>[]
  accountingCode?: string
  taxCategoryId?: '00000' | '99999' | '20010' | '40030' | '51020' | '51010' | '31000' | '30070'
}

type PurchaseBumpOfferType = {
  bumpAmount: z.infer<typeof MoneyAmountSchema>
  bumpAmountInUsd?: z.infer<typeof MoneyAmountSchema>
  customFields?: z.infer<typeof ResourceCustomFieldsSchema>
  offerId: string
  offerType: string
}

const PurchaseBumpOfferSchema: z.ZodType<PurchaseBumpOfferType> = z
  .object({
    bumpAmount: MoneyAmountSchema.openapi({ description: 'Bump amount.' }),
    bumpAmountInUsd: MoneyAmountSchema.exactOptional().openapi({
      description: 'Bump amount in USD.',
      readOnly: true,
    }),
    customFields: ResourceCustomFieldsSchema.exactOptional(),
    offerId: z.string().openapi({ description: 'Offer ID.' }),
    offerType: z.string().openapi({ description: 'Offer Type.', example: 'bonus' }),
  })
  .openapi({ required: ['offerId', 'offerType', 'bumpAmount'] })
  .openapi('PurchaseBumpOffer')

type PurchaseBumpOfferListType = z.infer<typeof PurchaseBumpOfferSchema>[]

type PurchaseBumpSplitVersionNameType = string

type PurchaseBumpStatusType = 'presented' | 'rejected' | 'selected' | 'unknown'

type QueryUrlLinkType = z.infer<typeof LinkSchema>

type RefundUrlLinkType = z.infer<typeof LinkSchema>

type RetriedTransactionEmbedType = { retriedTransaction?: z.infer<typeof TransactionSchema> }

type RetriedTransactionLinkType = z.infer<typeof LinkSchema>

const UpcomingInvoiceItemSchema = z
  .object({
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Date-time when the item was added to the subscription.',
    }),
    description: z.string().exactOptional().openapi({ description: 'Description of line item.' }),
    periodEndTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date-time when the period ends for this item.' }),
    periodStartTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date-time when the period begins for this item.' }),
    quantity: z.int().openapi({ description: 'Quantity of line item.', example: 1 }),
    type: z.enum(['debit', 'credit']).openapi({ description: 'Type of line item.' }),
    unitPriceAmount: z
      .float64()
      .openapi({ description: 'Unit price of the line item.', example: 49.95 }),
    unitPriceCurrency: CurrencyCodeSchema,
  })
  .openapi({
    description: 'Line item.',
    required: ['type', 'unitPriceAmount', 'unitPriceCurrency', 'quantity'],
  })
  .openapi('UpcomingInvoiceItem')

const UpcomingInvoiceItemCollectionSchema = z
  .array(UpcomingInvoiceItemSchema)
  .openapi('UpcomingInvoiceItemCollection')

const ServicePeriodAnchorInstructionSchema = z
  .object({ method: z.enum(['immediately', 'day-of-month', 'day-of-week']).default('immediately') })
  .default({ method: 'immediately' })
  .openapi({
    description:
      'Instruction for calculating the service period anchor.\nThis is used in conjunction with the **subscription start** to calculate the time the service period starts and ends.\n',
    discriminator: {
      mapping: {
        'day-of-month': '#/components/schemas/day-of-month',
        'day-of-week': '#/components/schemas/day-of-week',
        immediately: '#/components/schemas/immediately',
      },
      propertyName: 'method',
    },
    required: ['method'],
  })
  .openapi('ServicePeriodAnchorInstruction')

const CommonSubscriptionOrderSchema = CommonSubscriptionSchema.and(
  z
    .object({
      autopay: z
        .boolean()
        .default(true)
        .exactOptional()
        .openapi({ description: 'Autopay determines if a payment attempt will be automatic.' }),
      endTime: ServerTimestampSchema.exactOptional().openapi({
        description: 'Subscription end time.',
        'x-sortable': true,
      }),
      inTrial: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'True if the subscription is currently in a trial period.',
          readOnly: true,
        }),
      invoiceTimeShift: InvoiceTimeShiftSchema.nullable()
        .exactOptional()
        .openapi({
          description:
            'You can shift issue time and due time of invoices for this subscription.\nThis setting overrides plan settings. To use plan settings, set `null`.\nTo use multiple plans in one subscription they all must have the same billing period,\nthis property allows to subscribe to different plans.\n',
          example: { $ref: '#/components/schemas/ReadyToPayMethods/example/2/feature' },
        }),
      isTrialOnly: z
        .boolean()
        .default(false)
        .exactOptional()
        .openapi({
          description:
            "Whether a subscription ends after a trial period. Recurring settings are ignored if it's `true`.",
        }),
      lineItemSubtotal: z
        .object({
          amount: z
            .float64()
            .exactOptional()
            .openapi({ example: 49.95, 'x-sortable': true, 'x-type': 'Money' }),
          currency: CurrencyCodeSchema.exactOptional().openapi({
            'x-label': 'Currency',
            'x-sortable': true,
          }),
        })
        .exactOptional()
        .openapi({
          description:
            'Subtotal of line items in this subscription (signed value). If credits exceed debits, it will be a negative number.',
          readOnly: true,
          required: [],
        }),
      lineItems: UpcomingInvoiceItemCollectionSchema.exactOptional().openapi({
        description:
          'Subscription line items which queue until the next renewal (or interim) invoice is issued for the subscription.',
        readOnly: true,
      }),
      rebillNumber: z
        .int()
        .exactOptional()
        .openapi({ description: 'The current period number.', readOnly: true }),
      recurringInterval: z
        .object({ periodAnchorInstruction: ServicePeriodAnchorInstructionSchema.exactOptional() })
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'The recurring interval to override plan settings. To use plan settings, set `null`.\nTo use multiple plans in one subscription they all must have the same recurring period length,\nthis property allows to subscribe to different plans.\n',
          example: { $ref: '#/components/schemas/ReadyToPayMethods/example/2/feature' },
          required: [],
        }),
      renewalTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description: 'Subscription renewal time.',
          'x-basic': true,
          'x-sortable': true,
        }),
      startTime: z.iso
        .datetime({ offset: true })
        .nullable()
        .exactOptional()
        .openapi({
          description:
            "Subscription start time.  When the value is sent as null, it will use the current time. This value can't be in past more than one service period.",
          example: { $ref: '#/components/schemas/ReadyToPayMethods/example/2/feature' },
          'x-basic': true,
          'x-sortable': true,
        }),
      status: z
        .enum([
          'pending',
          'active',
          'canceled',
          'churned',
          'suspended',
          'paused',
          'abandoned',
          'trial-ended',
        ])
        .exactOptional()
        .openapi({
          description:
            'The status of the subscription service. A subscription starts\nin the `pending` status, and will become `active` when the\nservice period begins.\n',
          readOnly: true,
        }),
      trial: z
        .object({
          enabled: z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                'Enable or disable the trial for this subscription. If enabled for plans without trial prices, the trial will be free.',
            }),
          endTime: z.iso
            .datetime({ offset: true })
            .openapi({ description: 'The time the trial should end.' }),
        })
        .exactOptional()
        .openapi({
          description:
            'To use plan defaults do not send the `trial` key, or send a `null`. value with it.',
          required: ['endTime'],
        }),
    })
    .openapi({ required: [] }),
).openapi('CommonSubscriptionOrder')

const SubscriptionCancellationStateSchema = z
  .object({
    cancelCategory: z
      .enum([
        'billing-failure',
        'did-not-use',
        'did-not-want',
        'missing-features',
        'bugs-or-problems',
        'do-not-remember',
        'risk-warning',
        'contract-expired',
        'too-expensive',
        'never-started',
        'switched-plan',
        'other',
      ])
      .exactOptional()
      .openapi({ description: 'Cancel category.', readOnly: true }),
    cancelDescription: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'Cancel reason description in free form.', readOnly: true }),
    canceledBy: z
      .enum(['merchant', 'customer', 'rebilly'])
      .exactOptional()
      .openapi({ description: 'Canceled by.', readOnly: true }),
    canceledTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Subscription order canceled time.',
      'x-basic': true,
      'x-label': 'Cancellation time',
      'x-sortable': true,
    }),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionCancellationState')

type SubscriptionOrderType = z.infer<typeof CommonSubscriptionOrderSchema> & {
  customerId?: z.infer<typeof ResourceIdSchema>
  renewalReminderNumber?: number
  renewalReminderTime?: z.infer<typeof ServerTimestampSchema> | null
  trialReminderNumber?: number
  trialReminderTime?: z.infer<typeof ServerTimestampSchema> | null
} & z.infer<typeof SubscriptionCancellationStateSchema> &
  z.infer<typeof SubscriptionMetadataSchema>

const CommonTransactionSchema: z.ZodType<CommonTransactionType> = z
  .object({
    '3ds': ThreeDSecureResultSchema.exactOptional(),
    amount: z
      .float64()
      .exactOptional()
      .openapi({
        description: "The transaction's amount.",
        readOnly: true,
        'x-basic': true,
        'x-sortable': true,
        'x-type': 'Money',
      }),
    billingAddress: ContactObjectSchema.exactOptional().openapi({
      description: 'Billing address.',
    }),
    billingDescriptor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The billing descriptor that appears on the periodic billing statement. Commonly\n12 or fewer characters for a credit card statement.\n',
        readOnly: true,
      }),
    childTransactions: z
      .array(ResourceIdSchema)
      .exactOptional()
      .openapi({ description: 'The child transaction IDs.', readOnly: true }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Transaction created time.',
      'x-label': 'Created On',
      'x-sortable': true,
    }),
    currency: CurrencyCodeSchema.exactOptional().openapi({ readOnly: true }),
    customFields: ResourceCustomFieldsSchema.exactOptional(),
    customerId: ResourceIdSchema.exactOptional().openapi({
      description: "The сustomer's ID.",
      'x-basic': true,
    }),
    description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'The payment description.' }),
    gatewayName: GatewayNameSchema.exactOptional().openapi({
      description:
        'Payment Gateway name, available only after the gateway is selected for the transaction.\n',
      readOnly: true,
      'x-basic': true,
      'x-label': 'Gateway account',
    }),
    has3ds: z.boolean().exactOptional().openapi({ readOnly: true }),
    hasAmountAdjustment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if transaction has amount adjustment.', readOnly: true }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'The transaction ID.',
      readOnly: true,
    }),
    invoiceIds: z
      .array(ResourceIdSchema)
      .exactOptional()
      .openapi({ description: 'The invoice IDs related to transaction.', readOnly: true }),
    isRebill: z.boolean().exactOptional().openapi({ readOnly: true }),
    isRetry: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if this transaction is retry.', readOnly: true }),
    parentTransactionId: ResourceIdSchema.exactOptional().openapi({
      description: "The parent's transaction ID.",
      readOnly: true,
    }),
    paymentInstrument: InstrumentReferenceSchema.exactOptional(),
    planIds: z
      .array(ResourceIdSchema)
      .exactOptional()
      .openapi({ description: "The plan IDs related to transaction's order(s).", readOnly: true }),
    processedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Transaction processed time.',
      'x-basic': true,
      'x-sortable': true,
    }),
    purchaseAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The amount actually purchased which may have differed from the originally requested amount in case of an adjustment.',
        readOnly: true,
        'x-currency-field': 'purchaseCurrency',
        'x-sortable': true,
        'x-type': 'Money',
      }),
    purchaseCurrency: CurrencyCodeSchema.exactOptional().openapi({ readOnly: true }),
    rebillNumber: z
      .int()
      .exactOptional()
      .openapi({ description: "The transaction's rebill number.", readOnly: true }),
    redirectUrl: z
      .url()
      .exactOptional()
      .openapi({
        description:
          "The URL to redirect the end-user when an offsite transaction is completed. Defaults to the website's configured URL.",
      }),
    requestAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The amount in the payment request. If adjusted, the purchase amount and billing amount may vary from it.',
        readOnly: true,
        'x-currency-field': 'requestCurrency',
        'x-type': 'Money',
      }),
    requestCurrency: CurrencyCodeSchema.exactOptional().openapi({ readOnly: true }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The transaction's request ID.  This ID must be unique within a 24 hour period. Use this field to prevent duplicated transactions.",
        'x-sortable': true,
      }),
    result: z
      .enum(['abandoned', 'approved', 'canceled', 'declined', 'unknown'])
      .exactOptional()
      .openapi({ description: 'Transaction result.', readOnly: true, 'x-basic': true }),
    retryNumber: z
      .int()
      .exactOptional()
      .openapi({ description: 'The position in the sequence of retries.', readOnly: true }),
    status: z
      .enum([
        'completed',
        'conn-error',
        'disputed',
        'never-sent',
        'offsite',
        'partially-refunded',
        'pending',
        'refunded',
        'sending',
        'suspended',
        'timeout',
        'voided',
        'waiting-approval',
        'waiting-capture',
        'waiting-gateway',
        'waiting-refund',
      ])
      .exactOptional()
      .openapi({ description: 'Transaction status.', readOnly: true }),
    subscriptionIds: z
      .array(ResourceIdSchema)
      .exactOptional()
      .openapi({
        description: "The orders IDs related to transaction's invoice(s).",
        readOnly: true,
      }),
    type: z
      .enum(['3ds-authentication', 'authorize', 'capture', 'credit', 'refund', 'sale', 'void'])
      .exactOptional()
      .openapi({ description: 'Transaction type.', readOnly: true, 'x-basic': true }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Transaction updated time.',
      'x-label': 'Last update time',
      'x-sortable': true,
    }),
    websiteId: ResourceIdSchema.exactOptional().openapi({
      description: 'The website ID.',
      readOnly: true,
    }),
  })
  .openapi({ required: [] })
  .openapi('CommonTransaction')

const ParentTransactionEmbedSchema: z.ZodType<ParentTransactionEmbedType> = z
  .lazy(() =>
    z
      .object({ parentTransaction: TransactionSchema.exactOptional() })
      .openapi({ description: 'Retried Transaction object.', readOnly: true, required: [] }),
  )
  .openapi('ParentTransactionEmbed')

const RetriedTransactionEmbedSchema: z.ZodType<RetriedTransactionEmbedType> = z
  .lazy(() =>
    z
      .object({ retriedTransaction: TransactionSchema.exactOptional() })
      .openapi({ description: 'Parent Transaction object.', readOnly: true, required: [] }),
  )
  .openapi('RetriedTransactionEmbed')

const GatewayAccountEmbedSchema: z.ZodType<GatewayAccountEmbedType> = z
  .object({ gatewayAccount: GatewayAccountSchema.exactOptional() })
  .openapi({ description: 'Gateway Account object.', readOnly: true, required: [] })
  .openapi('GatewayAccountEmbed')

const PaymentCardEmbedSchema: z.ZodType<PaymentCardEmbedType> = z
  .lazy(() =>
    z
      .object({ paymentCard: PaymentCardSchema.exactOptional() })
      .openapi({ description: 'Payment Card object.', readOnly: true, required: [] }),
  )
  .openapi('PaymentCardEmbed')

const BankAccountEmbedSchema: z.ZodType<BankAccountEmbedType> = z
  .object({ bankAccount: BankAccountSchema.exactOptional() })
  .openapi({ description: 'Bank Account object.', readOnly: true, required: [] })
  .openapi('BankAccountEmbed')

const InvoicesEmbedSchema: z.ZodType<InvoicesEmbedType> = z
  .lazy(() =>
    z
      .object({ invoices: z.array(InvoiceSchema).exactOptional() })
      .openapi({ description: 'Invoices collection.', readOnly: true, required: [] }),
  )
  .openapi('InvoicesEmbed')

const GatewayAccountLinkSchema: z.ZodType<GatewayAccountLinkType> = LinkSchema.and(
  z
    .object({ rel: z.literal('gatewayAccount').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('GatewayAccountLink')

const PaymentCardLinkSchema: z.ZodType<PaymentCardLinkType> = LinkSchema.and(
  z
    .object({ rel: z.literal('paymentCard').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('PaymentCardLink')

const ParentTransactionLinkSchema: z.ZodType<ParentTransactionLinkType> = LinkSchema.and(
  z
    .object({ rel: z.literal('parentTransaction').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('ParentTransactionLink')

const RetriedTransactionLinkSchema: z.ZodType<RetriedTransactionLinkType> = LinkSchema.and(
  z
    .object({ rel: z.literal('retriedTransaction').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('RetriedTransactionLink')

const RefundUrlLinkSchema: z.ZodType<RefundUrlLinkType> = LinkSchema.and(
  z
    .object({ rel: z.literal('refundUrl').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('RefundUrlLink')

type TransactionUpdateUrlLinkType = z.infer<typeof LinkSchema>

const TransactionUpdateUrlLinkSchema: z.ZodType<TransactionUpdateUrlLinkType> = LinkSchema.and(
  z
    .object({ rel: z.literal('updateUrl').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('TransactionUpdateUrlLink')

const DisputeLinkSchema: z.ZodType<DisputeLinkType> = LinkSchema.and(
  z
    .object({ rel: z.literal('dispute').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('DisputeLink')

const InvoicesLinkSchema: z.ZodType<InvoicesLinkType> = LinkSchema.and(
  z
    .object({ rel: z.literal('invoices').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('InvoicesLink')

const QueryUrlLinkSchema: z.ZodType<QueryUrlLinkType> = LinkSchema.and(
  z
    .object({ rel: z.literal('queryUrl').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('QueryUrlLink')

const LanguageIsoCodeSchema: z.ZodType<LanguageIsoCodeType> = z
  .string()
  .regex(/[a-zA-Z]{2}/)
  .openapi({ description: 'Language (two letter ISO 639-1 code).', example: 'US' })
  .openapi('LanguageIsoCode')

const MoneySchema: z.ZodType<MoneyType> = z
  .object({ amount: MoneyAmountSchema, currency: CurrencyCodeSchema })
  .openapi({ required: ['amount', 'currency'] })
  .openapi('Money')

const PurchaseBumpStatusSchema: z.ZodType<PurchaseBumpStatusType> = z
  .enum(['presented', 'rejected', 'selected', 'unknown'])
  .openapi({ description: 'Bump offer status.' })
  .openapi('PurchaseBumpStatus')

const PurchaseBumpOfferListSchema: z.ZodType<PurchaseBumpOfferListType> = z
  .array(PurchaseBumpOfferSchema)
  .min(1)
  .openapi('PurchaseBumpOfferList')

const PurchaseBumpSplitVersionNameSchema: z.ZodType<PurchaseBumpSplitVersionNameType> = z
  .string()
  .openapi({ description: 'The name of bump offer version, useful to make split tests.' })
  .openapi('PurchaseBumpSplitVersionName')

type TransactionNotificationUrlType = string

const TransactionNotificationUrlSchema: z.ZodType<TransactionNotificationUrlType> = z
  .url()
  .openapi({
    description:
      "The URL where a server-to-server POST notification will be sent.  It  will be sent when the\ntransaction's result is finalized after a timeout or an offsite interaction. Do not trust the\nnotification; follow with a GET request to confirm the result of the transaction. Please\nrespond with a 2xx HTTP status code, or we will reattempt the request again.\nThe 2 placeholders are available to use in this URI: `{id}` and `{result}`.\n",
  })
  .openapi('TransactionNotificationUrl')

const PaymentRetrySchema: z.ZodType<PaymentRetryType> = z
  .object({
    afterAttemptPolicy: z
      .enum(['none', 'change-subscription-renewal-time'])
      .openapi({ description: 'The policy on the attempt finishes.' }),
    afterRetryEndPolicy: z
      .enum(['none', 'cancel-subscription'])
      .openapi({ description: 'The policy on the retry ends.' }),
    attempts: z
      .array(
        z
          .object({
            paymentInstruction: AmountAdjustmentSchema,
            scheduleInstruction: CommonScheduleInstructionSchema,
          })
          .openapi({ required: ['scheduleInstruction', 'paymentInstruction'] }),
      )
      .min(1),
  })
  .openapi({ required: ['attempts', 'afterAttemptPolicy', 'afterRetryEndPolicy'] })
  .openapi('PaymentRetry')

type TransactionType = z.infer<typeof CommonTransactionSchema> & {
  _embedded?: (
    | z.infer<typeof ParentTransactionEmbedSchema>
    | z.infer<typeof RetriedTransactionEmbedSchema>
    | z.infer<typeof GatewayAccountEmbedSchema>
    | z.infer<typeof CustomerEmbedSchema>
    | z.infer<typeof LeadSourceEmbedSchema>
    | z.infer<typeof WebsiteEmbedSchema>
    | z.infer<typeof PaymentCardEmbedSchema>
    | z.infer<typeof BankAccountEmbedSchema>
    | z.infer<typeof InvoicesEmbedSchema>
  )[]
  _links?: (
    | z.infer<typeof SelfLinkSchema>
    | z.infer<typeof WebsiteLinkSchema>
    | z.infer<typeof CustomerLinkSchema>
    | z.infer<typeof GatewayAccountLinkSchema>
    | z.infer<typeof PaymentCardLinkSchema>
    | z.infer<typeof ParentTransactionLinkSchema>
    | z.infer<typeof RetriedTransactionLinkSchema>
    | z.infer<typeof LeadSourceLinkSchema>
    | z.infer<typeof ApprovalUrlLinkSchema>
    | z.infer<typeof RefundUrlLinkSchema>
    | z.infer<typeof TransactionUpdateUrlLinkSchema>
    | z.infer<typeof DisputeLinkSchema>
    | z.infer<typeof InvoicesLinkSchema>
    | z.infer<typeof QueryUrlLinkSchema>
  )[]
  acquirerName?: z.infer<typeof AcquirerNameSchema>
  arn?: string
  bin?: string
  bumpOffer?: {
    language?: z.infer<typeof LanguageIsoCodeSchema>
    order?: z.infer<typeof MoneySchema>
    outcome?: z.infer<typeof PurchaseBumpStatusSchema>
    presentedOffers?: z.infer<typeof PurchaseBumpOfferListSchema>
    selectedOffer?: z.infer<typeof PurchaseBumpOfferSchema>
    version?: z.infer<typeof PurchaseBumpSplitVersionNameSchema>
  }
  dcc?: {
    base?: z.infer<typeof MoneySchema>
    outcome?: 'rejected' | 'selected' | 'unknown'
    quote?: z.infer<typeof MoneySchema>
    usdMarkup?: z.infer<typeof MoneyAmountSchema>
  }
  discrepancyTime?: string | null
  disputeStatus?:
    | 'response-needed'
    | 'under-review'
    | 'forfeited'
    | 'won'
    | 'lost'
    | 'unknown'
    | null
  disputeTime?: string | null
  gateway?: {
    avsResponse?: {
      code?: string
      message?: string
      originalCode?: string
      originalMessage?: string
    }
    cvvResponse?: {
      code?: string
      message?: string
      originalCode?: string
      originalMessage?: string
    }
    response?: {
      code?: string
      message?: string
      originalCode?: string
      originalMessage?: string
      type?: string
    }
  }
  gatewayAccountId?: z.infer<typeof ResourceIdSchema>
  gatewayTransactionId?: z.infer<typeof ResourceIdSchema>
  hadDiscrepancy?: boolean
  hasBumpOffer?: boolean
  hasDcc?: boolean
  isDisputed?: boolean
  isMerchantInitiated?: boolean
  isProcessedOutside?: boolean
  isReconciled?: boolean
  method?: z.infer<typeof PaymentMethodSchema>
  notificationUrl?: z.infer<typeof TransactionNotificationUrlSchema>
  orderId?: string
  paymentInstrument?: z.infer<typeof PaymentInstrumentSchema>
  referenceData?: { [key: string]: string } | null
  reportAmount?: number
  reportCurrency?: z.infer<typeof CurrencyCodeSchema>
  retriedTransactionId?: z.infer<typeof ResourceIdSchema>
  retriesResult?: 'approved' | 'canceled' | 'declined' | 'scheduled'
  retryInstruction?: z.infer<typeof PaymentRetrySchema>
  revision?: number
  riskMetadata?: z.infer<typeof RiskMetadataSchema>
  riskScore?: number
  scheduledTime?: string
  settlementTime?: string | null
  velocity?: number
}

const PaymentTokenSchema = z
  .object({ token: z.string().openapi({ description: 'Payment Token ID.' }) })
  .openapi({ required: ['token'], title: 'Payment Token' })
  .openapi('PaymentToken')

const PaymentInstrument_3Schema = z
  .object({
    paymentInstrumentId: ResourceIdSchema.openapi({
      description: 'The Payment Instrument identifier string.',
    }),
  })
  .openapi({ required: ['paymentInstrumentId'], title: 'Payment Instrument' })
  .openapi('PaymentInstrument_3')

const PaymentMethodsSchema = z
  .object({
    methods: z
      .array(PaymentMethodSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of available payment methods.\nOnly payment methods with at least one active gateway account are allowed.\n\nIf not specified all available payment methods will be displayed.\n\nCustomer can choose any of those as well as the payment instrument for them.\nAdditional steps will occur via a redirect to `approvalUrl`.\n',
      }),
  })
  .openapi({ title: 'Payment Methods', required: [] })
  .openapi('PaymentMethods')

const PaymentInstructionSchema = z
  .xor([PaymentTokenSchema, PaymentInstrument_3Schema, PaymentMethodsSchema])
  .openapi('PaymentInstruction')

const CommonTransactionRequestSchema = z
  .object({
    amount: z.float64().openapi({ description: 'The transaction amount.', example: 97.97 }),
    billingAddress: ContactObjectSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'Billing address. If not supplied, we use the billing address associated with the payment instrument, and then customer.',
      }),
    currency: CurrencyCodeSchema,
    customFields: ResourceCustomFieldsSchema.exactOptional(),
    customerId: ResourceIdSchema.openapi({ description: 'The customer identifier string.' }),
    description: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The payment description.' }),
    gatewayAccountId: ResourceIdSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'Rebilly will select the appropriate payment gateway account for the transaction based on the properties of the transaction and the `gateway-account-requested` event rules configurations. If you wish to prevent Rebilly from making the gateway account selection, you may supply a gateway account id here, and it will be used instead. Only use this field if you intend to override the settings.',
      }),
    invoiceIds: z
      .array(ResourceIdSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The array of invoice identifiers.' }),
    isMerchantInitiated: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'True if the transaction was initiated by the merchant.' }),
    isProcessedOutside: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'True if transaction was processed outside Rebilly.' }),
    notificationUrl: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The URL where a server-to-server notification request type `POST` with a transaction payload will be sent when the transaction's result is finalized. Do not trust the notification; follow with a `GET` request to confirm the result of the transaction. Please respond with a `2xx` HTTP status code, or we will reattempt the request again. You may use `{id}` or `{result}` as placeholders in the URL and we will replace them with the transaction's id and result accordingly.\n",
      }),
    paymentInstruction: PaymentInstructionSchema.exactOptional().openapi({
      description:
        "Payment instruction. If not supplied, customer's default payment instrument will be used.",
    }),
    paymentInstrument: PaymentInstrumentSchema.exactOptional().openapi({ deprecated: true }),
    processedTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time the transaction was processed. Can be specified only if transaction was processed outside Rebilly.',
      }),
    redirectUrl: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The URL to redirect the end-user when an offsite transaction is completed. Defaults to the website's configured URL. You may use `{id}` or `{result}` as placeholders in the URL and we will replace them with the transaction's id and result accordingly.",
      }),
    requestId: z
      .string()
      .regex(/^[\-\w]+$/)
      .max(50)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The request id is **recommended**. It prevents duplicate transaction requests within a short period of time. If a duplicate request is sent with the same `requestId` it will be ignored to prevent double-billing anyone.  It must be unique within a 24-hour period.  We recommend generating a UUID v4 as its value.',
        example: '44433322-2c4y-483z-a0a9-158621f77a21',
      }),
    riskMetadata: RiskMetadataSchema.exactOptional(),
    websiteId: ResourceIdSchema.openapi({ description: 'The website identifier string.' }),
  })
  .openapi({ required: ['websiteId', 'customerId', 'currency', 'amount'] })
  .openapi('CommonTransactionRequest')

type TransactionRequestType = z.infer<typeof CommonTransactionRequestSchema> & {
  [key: string]: unknown
} & { type?: '3ds-authentication' | 'sale' | 'authorize' }

const ThreeDSecureServerNameSchema = z
  .enum([
    'Payvision3dsServer',
    'Wirecard3dsServer',
    'Ilixium3dsServer',
    'DataCash3dsServer',
    'Paysafe3dsServer',
    'Ingenico3dsServer',
    'CardinalCommerce3dsServer',
    'Paay3dsServer',
    'Panamerican3dsServer',
    'eMerchantPay3dsServer',
    'SecureTrading3dsServer',
    'Clearhaus3dsServer',
    'Other',
    'ThreeDSecureIO3dsServer',
    'WorldlineAtosFrankfurt3dsServer',
    'Piastrix3dsServer',
    'NGenius3dsServer',
    'Stripe3dsServer',
  ])
  .openapi({ description: 'The Merchant plug-in Name.' })
  .openapi('ThreeDSecureServerName')

const A1Gateway3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'A1Gateway 3DS Servers.',
    discriminator: {
      mapping: {
        Other: '#/components/schemas/Other',
        Paay3dsServer: '#/components/schemas/Paay3dsServer',
      },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('A1Gateway3dsServers')

const A1GatewaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          accountId: z.string().openapi({ description: 'A1Gateway account ID.' }),
          password: z.string().openapi({ description: 'A1Gateway password.' }),
        })
        .openapi({
          description: 'A1Gateway credentials object.',
          required: ['accountId', 'password'],
        }),
      threeDSecureServer: A1Gateway3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'A1Gateway config.' })
  .openapi('A1Gateway')

const AMLSchema = z
  .object({
    _links: z
      .array(SelfLinkSchema)
      .min(1)
      .exactOptional()
      .openapi({
        description: 'The links related to resource, including links provided by the list.',
        readOnly: true,
      }),
    address: z
      .array(
        z
          .object({
            address: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Street Address Line 1.', readOnly: true }),
            address2: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Street Address Line 2.', readOnly: true }),
            birthplace: z
              .boolean()
              .default(false)
              .exactOptional()
              .openapi({ description: 'This address is their birth place.', readOnly: true }),
            city: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'City.', readOnly: true }),
            country: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Country.', readOnly: true }),
            region: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'State/Province/Region.', readOnly: true }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Addresses related to the identity.', readOnly: true }),
    aliases: z
      .array(
        z
          .object({
            authenticity: z
              .enum(['strong', 'weak', 'unknown'])
              .exactOptional()
              .openapi({ description: 'The level of confidence in the alias.', readOnly: true }),
            firstName: z
              .string()
              .exactOptional()
              .openapi({ description: 'First name of alias.', readOnly: true }),
            lastName: z
              .string()
              .exactOptional()
              .openapi({ description: 'Last name of alias.', readOnly: true }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'List of aliases, if any.', readOnly: true }),
    comments: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Extra information (the content varies per list).', readOnly: true }),
    confidence: z
      .enum(['weak', 'medium', 'strong', 'very-strong'])
      .exactOptional()
      .openapi({ description: "The source list's confidence in information.", readOnly: true }),
    dob: z
      .array(
        z.iso
          .date()
          .openapi({
            description: 'Date of birth.',
            example: '1706-01-17T00:00:00.000Z',
            readOnly: true,
          }),
      )
      .exactOptional()
      .openapi({ description: 'One or more possible dates of birth.', readOnly: true }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'First Name.', example: 'Benjamin', readOnly: true }),
    gender: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Gender of returned identity (if `type` is `individual`).',
        readOnly: true,
      }),
    lastName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Last Name. `null` if it is a single-name entity.',
        example: 'Franklin',
        readOnly: true,
      }),
    legalBasis: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of references to legal documents if they exist.',
        readOnly: true,
      }),
    nationality: z
      .string()
      .exactOptional()
      .openapi({ description: 'The nationality of the identity.', readOnly: true }),
    passport: z
      .array(
        z
          .object({
            number: z
              .string()
              .exactOptional()
              .openapi({ description: 'Passport number.', readOnly: true }),
            registrationDate: z.iso
              .date()
              .exactOptional()
              .openapi({ description: 'Passport registration date.', readOnly: true }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Passport information.', readOnly: true }),
    regime: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Regime.', example: 'United States Government', readOnly: true }),
    source: z
      .string()
      .exactOptional()
      .openapi({ description: 'Which list this came from.', readOnly: true }),
    sourceType: z
      .enum(['pep', 'sanctions', 'adverse-media'])
      .exactOptional()
      .openapi({ description: 'The list type.', readOnly: true }),
    title: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The title of their position.',
        example: [
          'Postmaster General',
          'Ambassador to France',
          'Ambassador to Sweden',
          'Supreme Executive Council of Commonwealth of Pennsylvania',
        ],
        readOnly: true,
      }),
    type: z
      .enum(['individual', 'entity'])
      .exactOptional()
      .openapi({ description: 'The record type.', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('AML')

const AchPlaidFeatureSchema = z
  .object({
    expirationTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The expiration time of a `linkToken`.' }),
    linkToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Plaid `linkToken` for frontend integrations.' }),
    name: z.literal('Plaid').exactOptional().openapi({ description: 'The feature name.' }),
  })
  .openapi({ title: 'Plaid', required: [] })
  .openapi('AchPlaidFeature')

const AclPermissionsSchema = z
  .array(z.string())
  .openapi({
    example: [
      'PostFile',
      'StorefrontGetAccount',
      'StorefrontGetWebsite',
      'StorefrontGetKycDocumentCollection',
      'StorefrontGetKycDocument',
      'StorefrontPostKycDocument',
    ],
  })
  .openapi('AclPermissions')

const ApiKeyScopeSchema = z
  .object({
    customFieldName: z
      .array(
        z
          .string()
          .regex(/^[\w-]+$/)
          .max(60),
      )
      .exactOptional()
      .openapi({ description: 'The array of custom field names.' }),
    organizationId: z
      .array(ResourceIdSchema)
      .exactOptional()
      .openapi({ description: 'The array of account identifier strings.' }),
    planId: z
      .array(ResourceIdSchema)
      .exactOptional()
      .openapi({ description: 'The array of plan identifier strings.' }),
    productId: z
      .array(ResourceIdSchema)
      .exactOptional()
      .openapi({ description: 'The array of product identifier strings.' }),
  })
  .openapi({ example: { organizationId: ['organizationId-id-1'] }, required: [] })
  .openapi('ApiKeyScope')

const AclSchema = z
  .array(
    z
      .object({
        permissions: AclPermissionsSchema.openapi({
          description:
            'Specify individual permission here if creating a restricted API key. Use wildcard `*` for full access.',
        }),
        scope: ApiKeyScopeSchema.openapi({ description: 'Api Key scope.' }),
      })
      .openapi({ required: ['scope', 'permissions'] }),
  )
  .openapi('Acl')

const AddressMatchesSchema = z
  .object({
    city: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The customer city if it was matched, null otherwise.',
        example: 'London',
      }),
    date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The date on the document proving the document is recent.',
        example: '2021-01-01T00:00:00.000Z',
      }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The customer first name if it was matched, null otherwise.',
        example: 'John',
      }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The customer last name if it was matched, null otherwise.',
        example: 'Doe',
      }),
    line1: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The customer address if it was matched, null otherwise.',
        example: '36 Craven St',
      }),
    phone: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The phone of the company or agency that sent the document.',
        example: '(123) 456-7890',
      }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The customer postal code if it was matched, null otherwise.',
        example: 'WC2N 5NF',
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The customer region if it was matched, null otherwise.',
        example: 'London',
      }),
    uniqueWords: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of unique words in the document.', example: 175 }),
    uniqueWordsResult: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag that indicates if the unique words passed the threshold.',
        example: true,
        readOnly: true,
      }),
    wordCount: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of words in the document.', example: 350 }),
    wordCountResult: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag that indicates if the word count passed the threshold.',
        example: true,
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('AddressMatches')

const AdyenSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiKey: z.string().openapi({ description: 'Adyen api key.' }),
          merchantAccount: z.string().openapi({ description: 'Adyen merchant account.' }),
        })
        .openapi({
          description: 'Adyen credentials object.',
          required: ['merchantAccount', 'apiKey'],
        }),
      settings: z
        .object({ url: z.string().openapi({ description: 'Adyen post URL.' }) })
        .openapi({ description: 'Adyen settings object.', required: ['url'] }),
    })
    .openapi({ required: ['credentials', 'settings'] }),
)
  .openapi({ description: 'Adyen config.' })
  .openapi('Adyen')

const AirpaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiKey: z.string().openapi({ description: 'Airpay api key.' }),
          merchantId: z.string().openapi({ description: 'Airpay merchant ID.' }),
          password: z.string().openapi({ description: 'Airpay password.' }),
          username: z.string().openapi({ description: 'Airpay username.' }),
        })
        .openapi({
          description: 'Airpay credentials object.',
          required: ['username', 'merchantId', 'password', 'apiKey'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Airpay config.' })
  .openapi('Airpay')

const CommonPaymentTokenSchema = z
  .object({
    _links: z
      .array(SelfLinkSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Token created time.',
    }),
    expirationTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Token expiration time.',
    }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'The token identifier string.',
      readOnly: true,
    }),
    isUsed: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Whether the token was already used.', readOnly: true }),
    leadSource: LeadSourceSchema.exactOptional().openapi({ writeOnly: true }),
    method: z.string(),
    riskMetadata: RiskMetadataSchema.exactOptional(),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Token updated time.',
    }),
    usageTime: ServerTimestampSchema.exactOptional().openapi({ description: 'Token usage time.' }),
  })
  .openapi({ required: ['method'] })
  .openapi('CommonPaymentToken')

const AlternativePaymentTokenSchema = CommonPaymentTokenSchema.and(
  z
    .object({
      billingAddress: ContactObjectSchema.openapi({ description: 'The billing address object.' }),
      method: AlternativePaymentMethodsSchema.openapi({ description: 'The token payment method.' }),
    })
    .openapi({ required: ['method', 'billingAddress'] }),
)
  .openapi({ required: ['method', 'billingAddress'], title: 'Alternative payment token.' })
  .openapi('AlternativePaymentToken')

const AmexVPCSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          accessCode: z.string().openapi({ description: 'Access Code.' }),
          merchantId: z.string().openapi({ description: 'Merchant ID.' }),
          password: z
            .string()
            .openapi({ description: 'Password (used for refund, void and capture).' }),
          user: z.string().openapi({ description: 'User (used for refund, void and capture).' }),
        })
        .openapi({
          description: 'AmexVPC credentials object.',
          required: ['merchantId', 'accessCode', 'user', 'password'],
        }),
      settings: z
        .object({ url: z.string().openapi({ description: 'Virtual Payment Client URL.' }) })
        .openapi({ description: 'AmexVPC settings object.', required: ['url'] }),
    })
    .openapi({ required: ['credentials', 'settings'] }),
)
  .openapi({ description: 'AmexVPC config.' })
  .openapi('AmexVPC')

const AmountAdjustmentToleranceSchema = z
  .int()
  .min(0)
  .max(5)
  .openapi({ description: 'Tolerance percentage for settled amount.', example: 5 })
  .openapi('AmountAdjustmentTolerance')

const ApcoPaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          MerchantID: z.string().openapi({ description: 'ApcoPay merchant ID.' }),
          MerchantPassword: z.string().openapi({ description: 'ApcoPay merchant password.' }),
          profileID: z.string().openapi({ description: 'ApcoPay profile ID.' }),
          secretWord: z.string().openapi({ description: 'ApcoPay secret word.' }),
        })
        .openapi({
          description: 'ApcoPay credentials object.',
          required: ['profileID', 'secretWord', 'MerchantID', 'MerchantPassword'],
        }),
      settings: z
        .object({
          method: z
            .enum(['AFTERPAY', 'IDEAL', 'CREDITCLICK', 'BANCONTACT', 'ONLINEUBERWEISEN'])
            .openapi({ description: "ApcoPay's method." }),
        })
        .exactOptional()
        .openapi({ required: ['method'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'ApcoPay config.' })
  .openapi('ApcoPay')

const DigitalWalletValidationSchema = z
  .object({
    type: z
      .literal('Apple Pay')
      .openapi({ description: 'Type of the digital wallet to validate.' }),
  })
  .openapi({
    discriminator: {
      mapping: { 'Apple Pay': '#/components/schemas/ApplePayValidation' },
      propertyName: 'type',
    },
    required: ['type'],
  })
  .openapi('DigitalWalletValidation')

const ApplePayValidationSchema = DigitalWalletValidationSchema.and(
  z
    .object({
      type: z.string().exactOptional(),
      validationRequest: z
        .object({
          displayName: z
            .string()
            .exactOptional()
            .openapi({
              description: 'A name of your store, suitable for display.',
              example: 'My Store',
            }),
          domainName: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The domain where the client code like FramePay is executed. Should be registered in the Apple Pay console by Rebilly before using.\n',
              example: 'www.example.com',
            }),
          validationURL: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The URL provided by the Apple Pay SDK to perform the validation.',
            }),
        })
        .openapi({ description: 'The validation request.', writeOnly: true, required: [] }),
      validationResponse: z
        .object({})
        .exactOptional()
        .openapi({
          description: 'The validation response to use by the Apple Pay SDK to proceed.',
          readOnly: true,
        }),
    })
    .openapi({ required: ['validationRequest'] }),
)
  .openapi({ description: 'Apple Pay session validation.' })
  .openapi('ApplePayValidation')

const AsiaPaymentGatewaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          merchantNumber: z
            .string()
            .openapi({ description: 'AsiaPaymentGateway merchant number.' }),
          secretKey: z.string().openapi({ description: 'AsiaPaymentGateway secret key for hash.' }),
        })
        .openapi({
          description: 'AsiaPaymentGateway credentials object.',
          required: ['merchantNumber', 'secretKey'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'AsiaPaymentGateway config.' })
  .openapi('AsiaPaymentGateway')

const AstroPayCardSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          api_key: z
            .string()
            .exactOptional()
            .openapi({ description: 'One Touch Astropay API key.' }),
          secret_key: z.string().openapi({ description: 'AstroPay Card secret key.' }),
          x_login: z.string().openapi({ description: 'AstroPay Card login.' }),
          x_tran_key: z.string().openapi({ description: 'AstroPay Card transaction key.' }),
        })
        .openapi({
          description: 'AstroPay Card credentials object.',
          required: ['x_login', 'x_tran_key', 'secret_key'],
        }),
      settings: z
        .object({
          oneTouchApi: z
            .boolean()
            .default(false)
            .exactOptional()
            .openapi({ description: 'Use One Touch Astropay API.' }),
        })
        .exactOptional()
        .openapi({ description: 'AstroPay Card settings object.', required: [] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'AstroPay Card config.' })
  .openapi('AstroPayCard')

const FileDownloadLinkSchema = LinkSchema.and(
  z
    .object({ rel: z.literal('download').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('FileDownloadLink')

const SignedLinkLinkSchema = LinkSchema.and(
  z
    .object({ rel: z.literal('signedLink').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('SignedLinkLink')

const PermalinkLinkSchema = LinkSchema.and(
  z
    .object({ rel: z.literal('permalink').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('PermalinkLink')

const FileSchema = z
  .object({
    _links: z
      .array(
        z.union([
          SelfLinkSchema,
          FileDownloadLinkSchema,
          SignedLinkLinkSchema,
          PermalinkLinkSchema,
        ]),
      )
      .min(3)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'The upload date/time.',
    }),
    description: z.string().exactOptional().openapi({ description: 'The File description.' }),
    extension: z.string().exactOptional().openapi({ description: 'The File extension.' }),
    height: z
      .int()
      .exactOptional()
      .openapi({ description: 'Image height, applicable to images only.', readOnly: true }),
    id: ResourceIdSchema.exactOptional().openapi({ readOnly: true }),
    isPublic: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Is the file available publicly (without authentication). If true, the permalink in the _links section contains the public URL.',
      }),
    mime: z
      .enum(['image/png', 'image/jpeg', 'image/gif', 'application/pdf', 'audio/mpeg'])
      .exactOptional()
      .openapi({ description: 'The mime type.', readOnly: true }),
    name: z.string().exactOptional().openapi({ description: 'Original File name.' }),
    sha1: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hash sum of the file.', readOnly: true }),
    size: z
      .int()
      .exactOptional()
      .openapi({ description: 'The File size in bytes.', readOnly: true }),
    tags: z.array(z.string()).exactOptional().openapi({ description: 'The tags list.' }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'The latest update date/time.',
    }),
    width: z
      .int()
      .exactOptional()
      .openapi({ description: 'Image width, applicable to images only.', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('File')

const FileEmbedSchema = z
  .object({ file: FileSchema.exactOptional() })
  .openapi({ description: 'File object.', readOnly: true, required: [] })
  .openapi('FileEmbed')

const FileLinkSchema = LinkSchema.and(
  z
    .object({ rel: z.literal('file').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('FileLink')

const AttachmentResourceLinkSchema = LinkSchema.and(
  z
    .object({
      rel: z
        .enum([
          'customer',
          'dispute',
          'invoice',
          'payment',
          'plan',
          'product',
          'subscription',
          'transaction',
        ])
        .openapi({ description: 'The link type.' }),
    })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('AttachmentResourceLink')

const AttachmentSchema = z
  .object({
    _embedded: z
      .array(z.union([FileEmbedSchema]))
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'Any embedded objects available that are requested by the `expand` querystring parameter.',
        readOnly: true,
      }),
    _links: z
      .array(z.union([SelfLinkSchema, FileLinkSchema, AttachmentResourceLinkSchema]))
      .min(3)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Creation date/time.',
    }),
    description: z.string().exactOptional().openapi({ description: 'The Attachment description.' }),
    fileId: z.string().openapi({ description: 'Linked File object id.' }),
    id: ResourceIdSchema.exactOptional().openapi({ readOnly: true }),
    name: z.string().exactOptional().openapi({ description: 'The Original Attachment name.' }),
    relatedId: z.string().openapi({ description: 'Linked object Id.' }),
    relatedType: z
      .enum([
        'customer',
        'dispute',
        'gateway-timeline-comment',
        'invoice',
        'organization',
        'payment',
        'plan',
        'product',
        'subscription',
        'transaction',
        'customer-timeline-comment',
        'transaction-timeline-comment',
        'order-timeline-comment',
      ])
      .openapi({ description: 'Linked object type.' }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Latest update date/time.',
    }),
  })
  .openapi({ required: ['fileId', 'relatedId', 'relatedType'] })
  .openapi('Attachment')

const AuthenticationOptionsSchema = z
  .object({
    authTokenTtl: z
      .int()
      .exactOptional()
      .openapi({ description: 'The default lifetime of the auth-token in seconds.' }),
    credentialTtl: z
      .int()
      .exactOptional()
      .openapi({ description: 'The default lifetime of the credential in seconds.' }),
    otpRequired: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Should OTP be required to exchange token.' }),
    passwordPattern: z
      .string()
      .exactOptional()
      .openapi({ description: 'Allowed password pattern.' }),
    resetTokenTtl: z
      .int()
      .exactOptional()
      .openapi({ description: 'The default lifetime of the reset-token in seconds.' }),
  })
  .openapi({ required: [] })
  .openapi('AuthenticationOptions')

const AuthenticationTokenSchema = z
  .object({
    credentialId: ResourceIdSchema.exactOptional().openapi({
      description: "The credential's ID.",
      readOnly: true,
    }),
    mode: z
      .enum(['password', 'passwordless'])
      .default('password')
      .exactOptional()
      .openapi({ description: "The token's generation mode.", writeOnly: true }),
    otpRequired: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Should OTP be required to exchange this token.' }),
    token: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token identifier string.', readOnly: true }),
  })
  .openapi({
    discriminator: {
      mapping: {
        password: '#/components/schemas/password',
        passwordless: '#/components/schemas/passwordless',
      },
      propertyName: 'mode',
    },
    required: [],
  })
  .openapi('AuthenticationToken')

const AuthenticationTokenMetadataSchema = z
  .object({
    _links: z
      .array(SelfLinkSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    expiredTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: "Token's expired time." }),
  })
  .openapi({ required: [] })
  .openapi('AuthenticationTokenMetadata')

const AuthorizeNetSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiLoginId: z.string().openapi({ description: 'AuthorizeNet Gateway api login ID.' }),
          transactionKey: z
            .string()
            .openapi({ description: 'AuthorizeNet Gateway Transaction Key.' }),
        })
        .openapi({ required: ['apiLoginId', 'transactionKey'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'AuthorizeNet Gateway config.' })
  .openapi('AuthorizeNet')

const BankAccountInstrumentSchema = z
  .object({
    accountNumberType: z
      .enum(['IBAN', 'BBAN'])
      .default('BBAN')
      .openapi({
        description:
          "Bank's Account Number type. A valid value is basic bank account number (BBAN) or international bank account number (IBAN).",
      }),
  })
  .openapi({
    description: 'The bank account BBAN or IBAN instrument.',
    discriminator: {
      mapping: {
        BBAN: '#/components/schemas/BBANInstrument',
        IBAN: '#/components/schemas/IBANInstrument',
      },
      propertyName: 'accountNumberType',
    },
    required: ['accountNumberType'],
  })
  .openapi('BankAccountInstrument')

const BBANInstrumentSchema = BankAccountInstrumentSchema.and(
  z
    .object({
      accountNumber: z
        .string()
        .regex(/^[0-9]+$/)
        .openapi({ description: 'Bank Account Number.', writeOnly: true }),
      accountType: z
        .enum(['checking', 'savings', 'other'])
        .openapi({ description: 'Bank Account Type.' }),
      bankName: z.string().exactOptional().openapi({ description: 'Bank name.' }),
      bic: z.string().exactOptional().openapi({ description: 'Bank Identifier Code.' }),
      last4: z
        .string()
        .exactOptional()
        .openapi({ description: "Bank Account Number's last 4 digits.", readOnly: true }),
      routingNumber: z
        .string()
        .regex(/^[0-9]+$/)
        .openapi({ description: 'Bank Routing Number.' }),
    })
    .openapi({ required: ['accountNumber', 'routingNumber', 'accountType'] }),
)
  .openapi({ description: 'Bank account BBAN instrument.' })
  .openapi('BBANInstrument')

const BBANTypeSchema = z
  .object({
    accountNumber: z
      .string()
      .regex(/^[0-9]+$/)
      .openapi({ description: "Bank's account number." }),
    accountNumberType: z
      .enum(['IBAN', 'BBAN'])
      .default('BBAN')
      .openapi({
        description:
          "Bank's Account Number type. A valid value is basic bank account number (BBAN) or international bank account number (IBAN).\nThis is the object for the BBAN.",
      }),
    accountType: z
      .enum(['checking', 'savings', 'other'])
      .openapi({ description: "Bank's account type." }),
    bankName: z.string().exactOptional().openapi({ description: "Bank's name." }),
    bic: z.string().exactOptional().openapi({ description: 'Bank Identifier Code.' }),
    billingAddress: ContactObjectSchema.openapi({ description: 'The billing address.' }),
    customFields: ResourceCustomFieldsSchema.exactOptional(),
    customerId: ResourceIdSchema.openapi({ description: "Customer's ID." }),
    method: z.literal('ach').openapi({ description: 'The method of payment instrument.' }),
    riskMetadata: RiskMetadataSchema.exactOptional(),
    routingNumber: z
      .string()
      .regex(/^[0-9]+$/)
      .openapi({ description: "Bank's routing number." }),
  })
  .openapi({
    description: 'BBAN type object.',
    required: [
      'method',
      'customerId',
      'accountNumberType',
      'accountNumber',
      'routingNumber',
      'accountType',
      'billingAddress',
    ],
  })
  .openapi('BBANType')

const BamboraSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiPasscode: z.string().openapi({ description: 'Bambora Gateway API Passcode.' }),
          merchantId: z.string().openapi({ description: 'Bambora Gateway merchant ID.' }),
        })
        .openapi({ required: ['merchantId', 'apiPasscode'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Bambora Gateway config.' })
  .openapi('Bambora')

const IBANTypeSchema = z
  .object({
    accountNumber: z
      .string()
      .openapi({
        description:
          "Bank's account number. Detailed information about all ISO 13616-compliant national IBAN formats is available in the [SWIFT IBAN Registry](https://www.swift.com/standards/data-standards/iban).\n",
      }),
    accountNumberType: z
      .enum(['IBAN', 'BBAN'])
      .default('BBAN')
      .openapi({
        description:
          "Bank's Account Number type. A valid value is basic bank account number (BBAN) or international bank account number (IBAN).\nThis is the object for the IBAN.",
      }),
    bankName: z.string().exactOptional().openapi({ description: "Bank's name." }),
    bic: z.string().exactOptional().openapi({ description: 'Bank Identifier Code.' }),
    billingAddress: ContactObjectSchema.openapi({ description: 'The billing address.' }),
    customFields: ResourceCustomFieldsSchema.exactOptional(),
    customerId: ResourceIdSchema.openapi({ description: "Customer's ID." }),
    method: z.literal('ach').openapi({ description: 'The method of payment instrument.' }),
    riskMetadata: RiskMetadataSchema.exactOptional(),
  })
  .openapi({
    description: 'IBAN type object.',
    required: ['method', 'customerId', 'accountNumberType', 'accountNumber', 'billingAddress'],
  })
  .openapi('IBANType')

const BankAccountCreatePlainSchema = z
  .union([BBANTypeSchema, IBANTypeSchema])
  .openapi('BankAccountCreatePlain')

const BankAccountCreateTokenSchema = z
  .object({
    customFields: ResourceCustomFieldsSchema.exactOptional(),
    customerId: ResourceIdSchema.openapi({ description: "The Customer's ID." }),
    token: z.string().openapi({ description: 'BankAccountToken ID.' }),
  })
  .openapi({ required: ['customerId', 'token'] })
  .openapi('BankAccountCreateToken')

const BankAccountTokenSchema = CommonPaymentTokenSchema.and(
  z
    .object({
      billingAddress: ContactObjectSchema.openapi({ description: 'The billing address object.' }),
      method: z.enum(['ach', 'echeck']).openapi({ description: 'The token payment method.' }),
      paymentInstrument: BankAccountInstrumentSchema,
    })
    .openapi({ required: ['method', 'paymentInstrument', 'billingAddress'] }),
)
  .openapi({
    required: ['method', 'paymentInstrument', 'billingAddress'],
    title: 'Bank Account Token.',
  })
  .openapi('BankAccountToken')

const BankAccountUpdatePlainSchema = z
  .object({
    accountType: z
      .enum(['checking', 'savings', 'other'])
      .exactOptional()
      .openapi({ description: "Bank's account type." }),
    bankName: z.string().exactOptional().openapi({ description: "Bank's name." }),
    billingAddress: ContactObjectSchema.exactOptional().openapi({
      description: 'The billing address.',
    }),
    customFields: ResourceCustomFieldsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BankAccountUpdatePlain')

const BitPaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ token: z.string().openapi({ description: 'BitPay merchant API token.' }) })
        .openapi({ description: 'BitPay credentials object.', required: ['token'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'BitPay Gateway config.' })
  .openapi('BitPay')

const BlocklistSchema = z
  .object({
    _links: z
      .array(SelfLinkSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'The blocklist created time.',
    }),
    expirationTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The blocklist expiration time.' }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'The blocklist identifier string.',
      readOnly: true,
    }),
    type: z
      .enum([
        'payment-card',
        'bank-account',
        'customer-id',
        'email',
        'email-domain',
        'ip-address',
        'country',
        'fingerprint',
        'bin',
        'address',
      ])
      .openapi({ description: 'The blocklist type.' }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'The blocklist updated time.',
    }),
    value: z.string().openapi({ description: 'The blocklist value.' }),
  })
  .openapi({ required: ['type', 'value'] })
  .openapi('Blocklist')

const BlueSnapSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          password: z.string().openapi({ description: "BlueSnap merchant's api password." }),
          username: z.string().openapi({ description: "BlueSnap merchant's api username." }),
        })
        .openapi({
          description: 'BlueSnap credentials object.',
          required: ['username', 'password'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'BlueSnap config.' })
  .openapi('BlueSnap')

const BraintreePaymentsSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          merchantAccountId: z
            .string()
            .openapi({ description: 'BraintreePayments merchant account ID.' }),
          merchantId: z.string().openapi({ description: 'BraintreePayments merchant ID.' }),
          privateKey: z.string().openapi({ description: 'BraintreePayments Private Key.' }),
          publicKey: z.string().openapi({ description: 'BraintreePayments Public Key.' }),
        })
        .openapi({ required: ['publicKey', 'privateKey', 'merchantId', 'merchantAccountId'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'BraintreePayments Gateway config.' })
  .openapi('BraintreePayments')

const CASHlibSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiKey: z.string().openapi({ description: 'CASHlib API Key.' }),
          merchantId: z.string().openapi({ description: 'CASHlib merchant id.' }),
        })
        .openapi({
          description: 'CASHlib credentials object.',
          required: ['apiKey', 'merchantId'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'CASHlib config.' })
  .openapi('CASHlib')

const CCAvenueSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          accessCode: z.string().openapi({ description: 'CCAvenue access code.' }),
          merchantId: z.string().openapi({ description: 'CCAvenue merchant id.' }),
          workingKey: z.string().openapi({ description: 'CCAvenue working key.' }),
        })
        .openapi({
          description: 'CCAvenue credentials object.',
          required: ['merchantId', 'accessCode', 'workingKey'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'CCAvenue config.' })
  .openapi('CCAvenue')

const CODVoucherSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiKey: z.string().openapi({ description: 'COD Voucher API key.' }),
          apiSecret: z.string().openapi({ description: 'COD Voucher API secret.' }),
        })
        .openapi({
          description: 'COD Voucher credentials object.',
          required: ['apiKey', 'apiSecret'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'COD Voucher config.' })
  .openapi('CODVoucher')

const Payvision3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'Payvision 3DS Servers.',
    discriminator: {
      mapping: {
        CardinalCommerce3dsServer: '#/components/schemas/CardinalCommerce3dsServer',
        Other: '#/components/schemas/Other',
        Paay3dsServer: '#/components/schemas/Paay3dsServer',
        Payvision3dsServer: '#/components/schemas/Payvision3dsServer',
        ThreeDSecureIO3dsServer: '#/components/schemas/ThreeDSecureIO3dsServer',
      },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('Payvision3dsServers')

const CardinalCommerce3dsServerSchema = Payvision3dsServersSchema.and(
  z
    .object({
      merchantId: z.string().openapi({ description: 'Cardinal MerchantId.' }),
      processorId: z.string().openapi({ description: 'Cardinal ProcessorId.' }),
      transactionPwd: z.string().openapi({ description: 'Cardinal TransactionPwd.' }),
    })
    .openapi({ required: ['merchantId', 'processorId', 'transactionPwd'] }),
)
  .openapi({ description: 'CardinalCommerce 3DS Server Credentials.' })
  .openapi('CardinalCommerce3dsServer')

const CardknoxSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ xKey: z.string().openapi({ description: 'Cardknox xKey.' }) })
        .openapi({ required: ['xKey'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Cardknox Gateway config.' })
  .openapi('Cardknox')

const CashToCodeSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          cashToCodePassword: z
            .string()
            .openapi({ description: 'CashToCode credentials password.' }),
          cashToCodeUsername: z
            .string()
            .openapi({ description: 'CashToCode credentials Username.' }),
          merchantPassword: z.string().openapi({ description: 'Merchant credentials password.' }),
          merchantUsername: z.string().openapi({ description: 'Merchant credentials Username.' }),
        })
        .openapi({
          description: 'CashToCode credentials object.',
          required: [
            'cashToCodeUsername',
            'cashToCodePassword',
            'merchantUsername',
            'merchantPassword',
          ],
        }),
      settings: z
        .object({
          amounts: z
            .array(z.float64().min(0))
            .exactOptional()
            .openapi({ description: 'Amounts for which to allow transactions.' }),
          skipAmountSelection: z
            .boolean()
            .default(false)
            .exactOptional()
            .openapi({ description: 'Skip amount selection screen.' }),
        })
        .exactOptional()
        .openapi({ required: [] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'CashToCode config.' })
  .openapi('CashToCode')

const CashflowsSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          authId: z.string().openapi({ description: 'Cashflows Gateway auth ID.' }),
          authPassword: z.string().openapi({ description: 'Cashflows Gateway auth password.' }),
        })
        .openapi({ required: ['authPassword', 'authId'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Cashflows Gateway config.' })
  .openapi('Cashflows')

const CauriPaymentSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          privateKey: z.string().openapi({ description: "CauriPayment merchant's private key." }),
          publicKey: z.string().openapi({ description: "CauriPayment merchant's public key." }),
        })
        .openapi({
          description: 'CauriPayment credentials object.',
          required: ['publicKey', 'privateKey'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'CauriPayment config.' })
  .openapi('CauriPayment')

const CayanSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          merchantKey: z.string().openapi({ description: 'Cayan Gateway merchant key.' }),
          merchantName: z.string().openapi({ description: 'Cayan Gateway merchant name.' }),
          merchantSiteId: z.string().openapi({ description: 'Cayan Gateway merchant site ID.' }),
        })
        .openapi({ required: ['merchantSiteId', 'merchantName', 'merchantKey'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Cayan Gateway config.' })
  .openapi('Cayan')

const ChaseSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          coNumber: z
            .string()
            .openapi({ description: 'Chase Gateway CO Number used for delimited file reports.' }),
          divisionId: z.string().openapi({ description: 'Chase Gateway division ID.' }),
          partialAuth: z
            .boolean()
            .default(false)
            .openapi({ description: 'Support for Partial Auths.' }),
          password: z.string().openapi({ description: 'Chase Gateway Net Connect password.' }),
          username: z.string().openapi({ description: 'Chase Gateway Net Connect username.' }),
        })
        .openapi({ required: ['username', 'password', 'coNumber', 'divisionId', 'partialAuth'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Chase Gateway config.' })
  .openapi('Chase')

const CircleSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ apiKey: z.string() })
        .openapi({ description: 'Circle credentials object.', required: ['apiKey'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Circle config.' })
  .openapi('Circle')

const CitadelSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          password: z.string().openapi({ description: 'Password.' }),
          storeId: z.string().openapi({ description: 'Store ID.' }),
          storeName: z.string().openapi({ description: 'Store name.' }),
          username: z.string().openapi({ description: 'Username.' }),
        })
        .openapi({
          description: 'Citadel credentials object.',
          required: ['storeName', 'storeId', 'username', 'password'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Citadel config.' })
  .openapi('Citadel')

const Clearhaus3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'Clearhaus 3DS Servers.',
    discriminator: {
      mapping: { Clearhaus3dsServer: '#/components/schemas/Clearhaus3dsServer' },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('Clearhaus3dsServers')

const ClearhausSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ apiKey: z.string().openapi({ description: 'Clearhaus api key.' }) })
        .openapi({ required: ['apiKey'] }),
      threeDSecureServer: Clearhaus3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Clearhaus Gateway config.' })
  .openapi('Clearhaus')

const Clearhaus3dsServerSchema = Clearhaus3dsServersSchema.and(
  z
    .object({
      acquirerBin: z
        .string()
        .openapi({ description: 'Acquiring institution identification code.' }),
      apiKey: z.string().openapi({ description: '3DS Server Api key.' }),
      merchantId: z
        .string()
        .openapi({
          description: 'Merchant account ID or Card Acceptor ID provided by the acquiring bank.',
        }),
    })
    .openapi({ required: ['merchantId', 'acquirerBin', 'apiKey'] }),
)
  .openapi({ description: 'Clearhaus 3DS Server Credentials.' })
  .openapi('Clearhaus3dsServer')

const CoinPaymentsSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ ipnSecret: z.string(), privateKey: z.string(), publicKey: z.string() })
        .openapi({
          description: 'CoinPayments credentials object.',
          required: ['publicKey', 'privateKey', 'ipnSecret'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'CoinPayments config.' })
  .openapi('CoinPayments')

const PaymentCardTokenSchema = CommonPaymentTokenSchema.and(
  z
    .object({
      billingAddress: ContactObjectSchema.exactOptional().openapi({
        description: 'The billing address object.',
      }),
      method: z.literal('payment-card').openapi({ description: 'The token payment method.' }),
      paymentInstrument: z
        .object({
          bin: z
            .string()
            .exactOptional()
            .openapi({
              description: "Payment Card BIN (the PAN's first 6 digits).",
              readOnly: true,
            }),
          brand: PaymentCardBrandSchema.exactOptional().openapi({ readOnly: true }),
          cvv: z
            .string()
            .exactOptional()
            .openapi({ description: 'Payment Card CVV/CVC.', writeOnly: true }),
          expMonth: z
            .int()
            .exactOptional()
            .openapi({ description: 'Payment Card expiration month.' }),
          expYear: z
            .int()
            .exactOptional()
            .openapi({ description: 'Payment Card expiration year.' }),
          last4: z
            .string()
            .exactOptional()
            .openapi({ description: "Payment Card PAN's last 4 digits.", readOnly: true }),
          pan: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Payment Card PAN (Primary Account Number).',
              writeOnly: true,
            }),
        })
        .openapi({ description: 'The payment card instrument details.', required: [] }),
    })
    .openapi({ required: ['method', 'paymentInstrument'] }),
)
  .openapi({ required: ['method', 'paymentInstrument'], title: 'Payment Card Token' })
  .openapi('PaymentCardToken')

const DigitalWalletTokenSchema = CommonPaymentTokenSchema.and(
  z
    .object({
      billingAddress: ContactObjectSchema.exactOptional().openapi({
        description: 'The billing address object.',
        readOnly: true,
      }),
      method: z.literal('digital-wallet').openapi({ description: 'The token payment method.' }),
      paymentInstrument: z
        .object({
          amount: z.float64().openapi({ description: 'Authorized for the digital wallet amount.' }),
          bin: z
            .string()
            .exactOptional()
            .openapi({
              description: "Payment Card BIN (the PAN's first 6 digits).",
              readOnly: true,
            }),
          brand: PaymentCardBrandSchema.exactOptional().openapi({ readOnly: true }),
          currency: CurrencyCodeSchema.openapi({
            description: 'Authorized for the digital wallet currency.',
          }),
          descriptor: z.string().openapi({ description: 'The descriptor for a payment.' }),
          expMonth: z
            .int()
            .exactOptional()
            .openapi({ description: 'Payment Card expiration month.', readOnly: true }),
          expYear: z
            .int()
            .exactOptional()
            .openapi({ description: 'Payment Card expiration year.', readOnly: true }),
          last4: z
            .string()
            .exactOptional()
            .openapi({ description: "Payment Card PAN's last 4 digits.", readOnly: true }),
          payload: z
            .object({})
            .openapi({
              description:
                'The digital wallet encoded data. May contain the digital wallet billing address.',
              writeOnly: true,
            }),
          type: z
            .enum(['Apple Pay', 'Google Pay'])
            .openapi({ description: 'The digital wallet type.' }),
        })
        .openapi({
          description: 'The payment instrument details.',
          required: ['type', 'amount', 'currency', 'descriptor', 'payload'],
        }),
    })
    .openapi({ required: ['method', 'paymentInstrument'] }),
)
  .openapi({ required: ['method', 'paymentInstrument'], title: 'Digital Wallet Token' })
  .openapi('DigitalWalletToken')

const PlaidAccountTokenSchema = CommonPaymentTokenSchema.and(
  z
    .object({
      billingAddress: ContactObjectSchema.openapi({ description: 'The billing address object.' }),
      method: z.literal('plaid-account').openapi({ description: 'The token method.' }),
      paymentInstrument: z
        .object({
          accountId: z.string().openapi({ description: 'The Plaid account ID.' }),
          credentialHash: ResourceIdSchema.openapi({ description: 'The Plaid credentials hash.' }),
          publicToken: z.string().openapi({ description: 'The Plaid public token.' }),
        })
        .openapi({
          description: 'The Plaid payment instrument details.',
          required: ['credentialHash', 'publicToken', 'accountId'],
        }),
    })
    .openapi({ required: ['method', 'billingAddress', 'paymentInstrument'] }),
)
  .openapi({
    required: ['method', 'billingAddress', 'paymentInstrument'],
    title: 'Plaid Account Token',
  })
  .openapi('PlaidAccountToken')

const KhelocardCardTokenSchema = CommonPaymentTokenSchema.and(
  z
    .object({
      billingAddress: ContactObjectSchema.openapi({ description: 'The billing address object.' }),
      method: z.literal('Khelocard').openapi({ description: 'The token method.' }),
      paymentInstrument: z
        .object({
          cvv: z.string().openapi({ description: 'Khelocard card CVV.', writeOnly: true }),
          expMonth: z.int().openapi({ description: 'Khelocard card expiration month.' }),
          expYear: z.int().openapi({ description: 'Khelocard card expiration year.' }),
          last4: z
            .string()
            .exactOptional()
            .openapi({ description: "Khelocard card number's last 4 digits.", readOnly: true }),
          number: z.string().openapi({ description: 'Khelocard card number.', writeOnly: true }),
        })
        .openapi({
          description: 'The token instrument details.',
          required: ['number', 'cvv', 'expYear', 'expMonth'],
        }),
    })
    .openapi({ required: ['method', 'billingAddress', 'paymentInstrument'] }),
)
  .openapi({
    required: ['method', 'billingAddress', 'paymentInstrument'],
    title: 'Khelocard card token',
  })
  .openapi('KhelocardCardToken')

const CompositeTokenSchema = z
  .xor([
    PaymentCardTokenSchema,
    BankAccountTokenSchema,
    DigitalWalletTokenSchema,
    PlaidAccountTokenSchema,
    KhelocardCardTokenSchema,
    AlternativePaymentTokenSchema,
  ])
  .openapi('CompositeToken')

const ConektaSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ apiKey: z.string().openapi({ description: 'Conekta private API key.' }) })
        .openapi({ description: 'Conekta credentials object.', required: ['apiKey'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Conekta config.' })
  .openapi('Conekta')

const CopprSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiKey: z.string().openapi({ description: 'Coppr api key.' }),
          organizationId: z.string().openapi({ description: "Coppr Organization's ID." }),
        })
        .openapi({
          description: 'Coppr credentials object.',
          required: ['organizationId', 'apiKey'],
        }),
      settings: z
        .object({
          rebillyPublishableKey: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Rebilly publishable api key. If provided a payment token will be created for each transaction.',
            }),
        })
        .exactOptional()
        .openapi({ description: 'Coppr settings object.', required: [] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Coppr config.' })
  .openapi('Coppr')

const ReadyToPayAmountSchema = z
  .object({
    amount: z.float64().openapi({ description: 'The amount.' }),
    currency: CurrencyCodeSchema,
  })
  .openapi({ required: ['currency', 'amount'], title: 'With amount' })
  .openapi('ReadyToPayAmount')

const ReadyToPayItemsSchema = z
  .object({
    items: z
      .array(
        z
          .object({
            planId: ResourceIdSchema.openapi({ description: 'The plan identifier string.' }),
            quantity: z
              .int()
              .openapi({ description: 'Number of units of the product on the given plan.' }),
          })
          .openapi({ required: ['planId', 'quantity'] }),
      )
      .min(1),
  })
  .openapi({ required: ['items'], title: 'With items' })
  .openapi('ReadyToPayItems')

const ReadyToPaySchema = z
  .xor([ReadyToPayAmountSchema, ReadyToPayItemsSchema])
  .openapi({ required: ['websiteId', 'riskMetadata'] })
  .openapi('ReadyToPay')

const CoreReadyToPaySchema = z
  .object({
    customerId: ResourceIdSchema.exactOptional().openapi({
      description: 'The customer identifier string.',
    }),
  })
  .openapi({ required: [] })
  .and(ReadyToPaySchema)
  .openapi('CoreReadyToPay')

const DiscountSchema = z
  .object({
    type: z
      .enum(['fixed', 'percent'])
      .exactOptional()
      .openapi({
        description: 'Discount type.',
        'x-basic': true,
        'x-label': 'Type',
        'x-sortable': true,
      }),
  })
  .openapi({
    discriminator: {
      mapping: { fixed: '#/components/schemas/fixed', percent: '#/components/schemas/percent' },
      propertyName: 'type',
    },
    required: [],
  })
  .openapi('Discount')

const CouponRestrictionSchema = z
  .object({
    type: z
      .enum([
        'discounts-per-redemption',
        'minimum-order-amount',
        'redemptions-per-customer',
        'restrict-to-invoices',
        'restrict-to-plans',
        'restrict-to-subscriptions',
        'restrict-to-products',
        'total-redemptions',
        'paid-by-time',
      ])
      .openapi({ description: "Coupon's restriction type." }),
  })
  .openapi({
    description: 'Coupon restrictions.',
    discriminator: {
      mapping: {
        'discounts-per-redemption': '#/components/schemas/discounts-per-redemption',
        'minimum-order-amount': '#/components/schemas/minimum-order-amount',
        'paid-by-time': '#/components/schemas/paid-by-time',
        'redemptions-per-customer': '#/components/schemas/redemptions-per-customer',
        'restrict-to-invoices': '#/components/schemas/restrict-to-invoices',
        'restrict-to-plans': '#/components/schemas/restrict-to-plans',
        'restrict-to-products': '#/components/schemas/restrict-to-products',
        'restrict-to-subscriptions': '#/components/schemas/restrict-to-subscriptions',
        'total-redemptions': '#/components/schemas/total-redemptions',
      },
      propertyName: 'type',
    },
    required: ['type'],
  })
  .openapi('CouponRestriction')

const CouponSchema = z
  .object({
    _links: z
      .array(SelfLinkSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Coupon created time.',
      'x-label': 'Creation time',
      'x-sortable': true,
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Your coupon description. When it is not empty this is used for invoice discount item description, otherwise the item's description uses coupon's ID like 'Coupon \"COUPON-ID\"'.\n",
        'x-basic': true,
      }),
    discount: DiscountSchema,
    expiredTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: "Coupon's expire time (end time).",
        'x-basic': true,
        'x-label': 'Valid until',
        'x-sortable': true,
      }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: "Coupon's ID a.k.a redemption code.",
      readOnly: true,
    }),
    issuedTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description: "Coupon's issued time (start time).",
        'x-basic': true,
        'x-label': 'Valid from',
        'x-sortable': true,
      }),
    redemptionsCount: z
      .int()
      .min(0)
      .exactOptional()
      .openapi({ description: "Coupon's redemptions count.", readOnly: true }),
    restrictions: z
      .array(CouponRestrictionSchema)
      .exactOptional()
      .openapi({ description: 'Coupon restrictions.' }),
    status: z
      .enum(['draft', 'issued', 'expired'])
      .exactOptional()
      .openapi({ description: 'If coupon enabled.', readOnly: true }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Coupon updated time.',
      'x-label': 'Last update time',
      'x-sortable': true,
    }),
  })
  .openapi({ description: 'Coupons and Discounts.', required: ['discount', 'issuedTime'] })
  .openapi('Coupon')

const CouponExpirationSchema = z
  .object({
    expiredTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          "The coupon's expiry time, must be greater than the issued time. Null or empty string will immediately expire the coupon.",
      }),
  })
  .openapi({ required: ['expiredTime'] })
  .openapi('CouponExpiration')

const RedemptionRestrictionSchema = z
  .object({
    type: z
      .enum([
        'discounts-per-redemption',
        'minimum-order-amount',
        'restrict-to-invoices',
        'restrict-to-plans',
        'restrict-to-subscriptions',
        'restrict-to-products',
        'paid-by-time',
      ])
      .openapi({ description: "Redemption's additional restriction type." }),
  })
  .openapi({
    description: 'Redemption restrictions.',
    discriminator: {
      mapping: {
        'discounts-per-redemption': '#/components/schemas/discounts-per-redemption',
        'minimum-order-amount': '#/components/schemas/minimum-order-amount',
        'paid-by-time': '#/components/schemas/paid-by-time',
        'restrict-to-invoices': '#/components/schemas/restrict-to-invoices',
        'restrict-to-plans': '#/components/schemas/restrict-to-plans',
        'restrict-to-products': '#/components/schemas/restrict-to-products',
        'restrict-to-subscriptions': '#/components/schemas/restrict-to-subscriptions',
      },
      propertyName: 'type',
    },
    required: ['type'],
  })
  .openapi('RedemptionRestriction')

const CouponRedemptionSchema = z
  .object({
    _links: z
      .array(SelfLinkSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    additionalRestrictions: z
      .array(RedemptionRestrictionSchema)
      .exactOptional()
      .openapi({ description: "Additional restrictions for coupon's redemptions." }),
    canceledTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Coupon redemption canceled time.',
      readOnly: true,
      'x-sortable': true,
    }),
    couponId: ResourceIdSchema.exactOptional().openapi({ description: "Coupon's ID." }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Coupon redeem time.',
      readOnly: true,
    }),
    customerId: ResourceIdSchema.exactOptional().openapi({ description: "Customer's ID." }),
    id: ResourceIdSchema.exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ description: 'Coupons redemption log.', required: [] })
  .openapi('CouponRedemption')

const CredentialSchema = z
  .object({
    _links: z
      .array(z.union([SelfLinkSchema, CustomerLinkSchema]))
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    customerId: z.string().openapi({ description: "The credential's customer ID." }),
    expiredTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: "The credential's expired time." }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'The credential identifier string.',
      readOnly: true,
    }),
    password: z.string().openapi({ description: "The credential's password.", writeOnly: true }),
    username: z.string().openapi({ description: "Credential's username." }),
  })
  .openapi({ required: ['username', 'password', 'customerId'] })
  .openapi('Credential')

const CredoraxSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          merchantId: z.string().openapi({ description: 'Credorax Gateway merchant ID.' }),
          merchantMd5Signature: z
            .string()
            .openapi({ description: 'Credorax Gateway md5 signature.' }),
        })
        .openapi({ required: ['merchantId', 'merchantMd5Signature'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Credorax Gateway config.' })
  .openapi('Credorax')

const CryptonatorSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          merchant_id: z.string().openapi({ description: 'Cryptonator merchant ID.' }),
          secret: z.string().openapi({ description: 'Cryptonator secret.' }),
        })
        .openapi({
          description: 'Cryptonator credentials object.',
          required: ['merchant_id', 'secret'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Cryptonator config.' })
  .openapi('Cryptonator')

const CustomEventScheduleInstructionSchema = z
  .object({ method: z.enum(['date-interval', 'day-of-month', 'day-of-week']) })
  .openapi({
    description: 'The calculation instruction of scheduled time.',
    discriminator: {
      mapping: {
        'date-interval': '#/components/schemas/date-interval',
        'day-of-month': '#/components/schemas/day-of-month',
        'day-of-week': '#/components/schemas/day-of-week',
      },
      propertyName: 'method',
    },
    required: ['method'],
  })
  .openapi('CustomEventScheduleInstruction')

const CustomFieldSchema = z
  .object({
    _links: z
      .array(SelfLinkSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    additionalSchema: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Additional parameters which can be added according to type:\nParameter Name | Types         | Description\n-------------- | ------------- | -------------\nallowedValues  | string, array | List of allowed values maxLength      | string        | Maximum allowed length for the string, 255 by default, up to 4000\nThe additional schema adds additional constrains for values.\n',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The custom field description.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the custom field.', readOnly: true }),
    type: z
      .enum(['array', 'boolean', 'datetime', 'integer', 'number', 'string', 'monetary'])
      .openapi({
        description:
          'Type value    | Description\n------------- | -------------\narray         | An array of strings up to 255 characters, maximum size is 1000 elements boolean       | true or false date          | String of format "full-date" (YYYY-MM-DD) from RFC-3339 (full-date) datetime      | String of format "date-time" (YYYY-MM-DDTHH:MM:SSZ) from RFC-3339 (date-time) integer       | Cardinal value of -2^31..2^31-1 number        | Float value. It can take cardinal values also which are interpreted as float string        | Regular string up to 255 characters monetary      | A map of 3-letters currency code and amount, e.g. {"currency": "EUR", "amount": 25.30}\nThe type cannot be changed.\n',
      }),
  })
  .openapi({ description: 'A separate Custom Field schema.', required: ['type'] })
  .openapi('CustomField')

const CustomerJWTSchema = z
  .object({
    _links: z
      .array(CustomerLinkSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    acl: AclSchema.exactOptional(),
    createdTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Session created time.', readOnly: true }),
    customClaims: z
      .looseObject({})
      .exactOptional()
      .openapi({
        example: {
          documents: ['identity-proof', 'address-proof'],
          redirectUrl: 'https://mywebsite.com',
        },
      }),
    customerId: ResourceIdSchema.exactOptional().openapi({
      description: "The customer's ID.",
      readOnly: true,
    }),
    expiredTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Session expired time. Defaults to one hour.' }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'The session identifier string.',
      readOnly: true,
    }),
    invalidate: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description: 'Whether to invalidate token after exchange or not.',
        example: true,
        writeOnly: true,
      }),
    oneTimePassword: z
      .string()
      .regex(/^[0-9]{6}$/)
      .exactOptional()
      .openapi({
        description: 'The one time password sent via an email. Should contain digits only.',
        example: '123456',
        writeOnly: true,
      }),
    token: z
      .string()
      .exactOptional()
      .openapi({ description: "The session's token used for authentication.", readOnly: true }),
    type: z
      .literal('customer')
      .exactOptional()
      .openapi({ description: 'Session type.', readOnly: true }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Session updated time.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CustomerJWT')

const TimelineActionSchema = z
  .object({
    action: z.enum(['resend-email', 'redemption-cancel', 'ruleset-restore']).exactOptional(),
  })
  .openapi({
    discriminator: {
      mapping: {
        'redemption-cancel': '#/components/schemas/redemption-cancel',
        'resend-email': '#/components/schemas/resend-email',
        'ruleset-restore': '#/components/schemas/ruleset-restore',
      },
      propertyName: 'action',
    },
    readOnly: true,
    required: [],
  })
  .openapi('TimelineAction')

const TimelineTableSchema = z
  .object({
    footer: z.string().exactOptional().openapi({ description: 'Data table footer.' }),
    title: z.string().exactOptional().openapi({ description: 'Data table title.' }),
    type: z.enum(['list', 'one-columns', 'two-columns', 'three-columns']).exactOptional(),
  })
  .openapi({
    description: 'Additional information about Timeline message.',
    discriminator: {
      mapping: {
        list: '#/components/schemas/list',
        'one-column': '#/components/schemas/one-column',
        'three-columns': '#/components/schemas/three-columns',
        'two-columns': '#/components/schemas/two-columns',
      },
      propertyName: 'type',
    },
    required: [],
  })
  .openapi('TimelineTable')

const TimelineExtraDataSchema = z
  .object({
    actions: z
      .array(TimelineActionSchema)
      .min(0)
      .exactOptional()
      .openapi({
        description:
          'Actions available to a Timeline message. Can be empty in case no actions are available for a message.',
      }),
    author: z
      .object({ userFullName: z.string().exactOptional(), userId: z.string().exactOptional() })
      .exactOptional()
      .openapi({ description: 'Timeline comment author data.', required: [] }),
    links: z
      .array(
        z
          .object({
            placeholder: z.string().exactOptional().openapi({ example: 'KYC Document' }),
            resourceId: ResourceIdSchema.exactOptional(),
            resourceType: z
              .enum([
                'kyc-document',
                'invoice',
                'subscription',
                'transaction',
                'email-message',
                'dispute',
                'coupon',
              ])
              .exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    mentions: z
      .record(z.string(), z.string().openapi({ example: { '@test@mail.com': 'userId-1' } }))
      .exactOptional(),
    tables: z.array(TimelineTableSchema).min(0).exactOptional(),
  })
  .openapi({ description: 'Additional data.', readOnly: true, required: [] })
  .openapi('TimelineExtraData')

const CustomerTimelineSchema = z
  .object({
    _links: z
      .array(SelfLinkSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    customData: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Timeline custom event data. Used with `custom-event` type. Will be transformed to `extraData` two-column table in response.',
        example: { customAttribute: 'customValue', otherAttribute: 'otherValue' },
        writeOnly: true,
      }),
    customEventType: z
      .string()
      .min(1)
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Timeline custom event type. Used with `custom-event` type. Must be defined using [Customer Timeline custom event API](#operation/PostCustomerTimelineCustomEventType).',
      }),
    extraData: TimelineExtraDataSchema.exactOptional(),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'The Timeline message identifier string.',
      readOnly: true,
    }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'The message that describes the message details.' }),
    occurredTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Timeline message time.',
    }),
    triggeredBy: z
      .enum(['rebilly', 'app', 'direct-api'])
      .exactOptional()
      .openapi({
        description: 'Shows who or what triggered the Timeline message.',
        readOnly: true,
      }),
    type: z
      .enum([
        'customer-comment-created',
        'customer-created',
        'primary-address-changed',
        'default-payment-instrument-changed',
        'lead-source-changed',
        'custom-fields-changed',
        'coupon-applied',
        'coupon-redeemed',
        'coupon-redemption-canceled',
        'kyc-document-created',
        'kyc-document-accepted',
        'kyc-document-manually-accepted',
        'kyc-document-rejected',
        'kyc-document-manually-rejected',
        'kyc-document-modified',
        'payment-card-expired',
        'payment-instrument-created',
        'payment-instrument-deactivated',
        'customer-bank-account-blocked',
        'customer-blocked',
        'customer-payment-card-blocked',
        'invoice-created',
        'invoice-issued',
        'invoice-abandoned',
        'invoice-voided',
        'invoice-past-due',
        'invoice-paid',
        'invoice-partially-paid',
        'invoice-disputed',
        'invoice-refunded',
        'invoice-partially-refunded',
        'order-created',
        'order-renewed',
        'order-activated',
        'order-completed',
        'order-reactivated',
        'order-canceled',
        'order-upgraded',
        'order-downgraded',
        'order-churned',
        'order-paid-early',
        'transaction-approved',
        'transaction-canceled',
        'transaction-declined',
        'transaction-abandoned',
        'transaction-refunded',
        'transaction-voided',
        'transaction-discrepancy-found',
        'transaction-amount-discrepancy-found',
        'email-message-sent',
        'custom-event-processed',
        'custom-event',
        'transaction-waiting-gateway',
        'aml-list-was-possibly-matched',
        'experian-check-performed',
      ])
      .exactOptional()
      .openapi({ description: 'Timeline message type.' }),
  })
  .openapi({ required: [] })
  .openapi('CustomerTimeline')

const CustomerTimelineCustomEventSchema = z
  .object({
    _links: z
      .array(SelfLinkSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Customer Timeline Custom event created time.',
    }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'Customer Timeline Custom Event identifier string.',
      readOnly: true,
    }),
    name: z
      .string()
      .min(1)
      .max(255)
      .openapi({
        description:
          'Customer Timeline Custom Event type name. It must not be similar to any Rebilly system event.',
      }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Customer Timeline Custom event updated time.',
    }),
  })
  .openapi({ required: ['name'] })
  .openapi('CustomerTimelineCustomEvent')

const CyberSourceSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          accessKey: z.string().openapi({ description: 'CyberSource access key.' }),
          profileId: z.string().openapi({ description: 'CyberSource profile ID.' }),
          secretKey: z.string().openapi({ description: 'CyberSource secret key.' }),
        })
        .openapi({
          description: 'CyberSource credentials object.',
          required: ['accessKey', 'profileId', 'secretKey'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'CyberSource config.' })
  .openapi('CyberSource')

const DataCash3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'DataCash 3DS Servers.',
    discriminator: {
      mapping: { DataCash3dsServer: '#/components/schemas/DataCash3dsServer' },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('DataCash3dsServers')

const DataCashSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          client: z.string().openapi({ description: 'DataCash Gateway client.' }),
          masterCardPayoutsClient: z
            .string()
            .exactOptional()
            .openapi({ description: 'DataCash Gateway client for MasterCard payouts (OCT).' }),
          masterCardPayoutsPassword: z
            .string()
            .exactOptional()
            .openapi({ description: 'DataCash Gateway password for MasterCard payouts (OCT).' }),
          password: z.string().openapi({ description: 'DataCash Gateway password.' }),
          reportGroup: z
            .string()
            .exactOptional()
            .openapi({ description: 'DataCash report group.' }),
          reportPassword: z
            .string()
            .exactOptional()
            .openapi({ description: 'DataCash report password.' }),
          reportUser: z.string().exactOptional().openapi({ description: 'DataCash report user.' }),
          visaPayoutsClient: z
            .string()
            .exactOptional()
            .openapi({ description: 'DataCash Gateway client for Visa payouts (OCT).' }),
          visaPayoutsPassword: z
            .string()
            .exactOptional()
            .openapi({ description: 'DataCash Gateway password for Visa payouts (OCT).' }),
        })
        .openapi({ required: ['client', 'password'] }),
      settings: z
        .object({
          delay: z
            .int()
            .min(0)
            .default(0)
            .exactOptional()
            .openapi({ description: 'Auto Capture delay (in hours).' }),
          policy: z
            .int()
            .min(0)
            .max(7)
            .default(2)
            .exactOptional()
            .openapi({ description: 'Policy.' }),
        })
        .exactOptional()
        .openapi({ description: 'Datacash settings object.', required: [] }),
      threeDSecureServer: DataCash3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'DataCash Gateway config.' })
  .openapi('DataCash')

const DataCash3dsServerSchema = DataCash3dsServersSchema.openapi({
  description: 'DataCash Integrated.',
}).openapi('DataCash3dsServer')

const DayOfWeekLongSchema = z
  .enum(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
  .openapi('DayOfWeekLong')

const DengiSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          projectId: z.string().openapi({ description: 'Dengi Gateway project ID.' }),
          publicKey: z.string().openapi({ description: 'Dengi Gateway public key.' }),
          refundKey: z.string().openapi({ description: 'Dengi Gateway refund key.' }),
        })
        .openapi({ required: ['projectId', 'publicKey', 'refundKey'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Dengi Gateway config.' })
  .openapi('Dengi')

const Directa24BanksSchema = z
  .enum([
    'AA',
    'AL',
    'AZ',
    'B',
    'BB',
    'BC',
    'BE',
    'BL',
    'BM',
    'BN',
    'BP',
    'BQ',
    'BU',
    'BV',
    'BW',
    'BX',
    'BZ',
    'CA',
    'CE',
    'CI',
    'CU',
    'EF',
    'EN',
    'EY',
    'FA',
    'FB',
    'FC',
    'GC',
    'GG',
    'HC',
    'I',
    'IA',
    'IB',
    'JM',
    'LC',
    'LE',
    'LL',
    'MC',
    'MD',
    'MP',
    'MT',
    'NB',
    'OM',
    'OX',
    'PC',
    'PH',
    'PL',
    'SB',
    'SC',
    'SE',
    'SF',
    'SM',
    'SS',
    'ST',
    'SU',
    'TC',
    'TG',
    'TY',
    'UB',
    'UI',
    'UL',
    'US',
    'VD',
    'VI',
    'WA',
    'WP',
    'WU',
  ])
  .openapi('Directa24Banks')

const Directa24Schema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          secret_key: z.string().openapi({ description: 'Directa24 secret key.' }),
          web_pay_login: z.string().openapi({ description: 'Directa24 web pay status login.' }),
          web_pay_tran_key: z
            .string()
            .openapi({ description: 'Directa24 web pay status password.' }),
          x_login: z.string().openapi({ description: 'Directa24 login.' }),
          x_tran_key: z.string().openapi({ description: 'Directa24 transaction key.' }),
        })
        .openapi({
          description: 'Directa24 credentials object.',
          required: ['x_login', 'x_tran_key', 'secret_key', 'web_pay_login', 'web_pay_tran_key'],
        }),
      settings: z
        .object({
          banks: z
            .array(Directa24BanksSchema)
            .exactOptional()
            .openapi({ description: 'List of banks which will be shown to customers.' }),
          skipStep: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'Skip step for user to enter their personal information.' }),
        })
        .exactOptional()
        .openapi({ description: 'Directa24 settings object.', required: [] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Directa24 config.' })
  .openapi('Directa24')

const TransactionEmbedSchema = z
  .object({ transaction: TransactionSchema.exactOptional() })
  .openapi({ description: 'Transaction object.', readOnly: true, required: [] })
  .openapi('TransactionEmbed')

const TransactionLinkSchema = LinkSchema.and(
  z
    .object({ rel: z.literal('transaction').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('TransactionLink')

const DisputeSchema = z
  .object({
    _embedded: z
      .array(z.union([TransactionEmbedSchema]))
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'Any embedded objects available that are requested by the `expand` querystring parameter.',
        readOnly: true,
      }),
    _links: z
      .array(z.union([SelfLinkSchema, TransactionLinkSchema]))
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    acquirerReferenceNumber: z
      .string()
      .exactOptional()
      .openapi({ description: "The dispute's acquirer reference number." }),
    amount: z.float64().openapi({ description: 'The dispute amount.' }),
    caseId: z.string().exactOptional().openapi({ description: 'The case ID for the dispute.' }),
    category: z
      .enum([
        'fraud',
        'unrecognized',
        'product-not-received',
        'product-unacceptable',
        'product-not-refunded',
        'duplicate',
        'subscription-canceled',
        'uncategorized',
      ])
      .exactOptional()
      .openapi({ description: "The dispute's category.", readOnly: true }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Dispute created time.',
    }),
    currency: CurrencyCodeSchema,
    customerId: z
      .string()
      .exactOptional()
      .openapi({ description: "The dispute's customer ID.", readOnly: true }),
    deadlineTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Dispute deadline time.' }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'The dispute identifier string.',
      readOnly: true,
    }),
    postedTime: z.iso.datetime({ offset: true }).openapi({ description: 'Dispute posted time.' }),
    rawResponse: z
      .string()
      .exactOptional()
      .openapi({ description: 'Dispute raw response from gateway.', readOnly: true }),
    reasonCode: z
      .enum([
        '1000',
        '10.1',
        '10.2',
        '10.3',
        '10.4',
        '10.5',
        '11.1',
        '11.2',
        '11.3',
        '12',
        '12.1',
        '12.2',
        '12.3',
        '12.4',
        '12.5',
        '12.6',
        '12.7',
        '13.1',
        '13.2',
        '13.3',
        '13.4',
        '13.5',
        '13.6',
        '13.7',
        '13.8',
        '13.9',
        '2',
        '30',
        '31',
        '35',
        '37',
        '40',
        '41',
        '42',
        '46',
        '47',
        '49',
        '50',
        '53',
        '54',
        '55',
        '57',
        '59',
        '60',
        '62',
        '7',
        '70',
        '71',
        '72',
        '73',
        '74',
        '75',
        '76',
        '77',
        '79',
        '8',
        '80',
        '81',
        '82',
        '83',
        '85',
        '86',
        '93',
        '00',
        '63',
        'A01',
        'A02',
        'A08',
        'F10',
        'F14',
        'F22',
        'F24',
        'F29',
        'C02',
        'C04',
        'C05',
        'C08',
        'C14',
        'C18',
        'C28',
        'C31',
        'C32',
        'M10',
        'M49',
        'P01',
        'P03',
        'P04',
        'P05',
        'P07',
        'P08',
        'P22',
        'P23',
        'R03',
        'R13',
        'M01',
        'FR1',
        'FR4',
        'FR6',
        'AL',
        'AP',
        'AW',
        'CA',
        'CD',
        'CR',
        'DA',
        'DP',
        'DP1',
        'EX',
        'IC',
        'IN',
        'IS',
        'LP',
        'N',
        'NA',
        'NC',
        'P',
        'RG',
        'RM',
        'RN1',
        'RN2',
        'SV',
        'TF',
        'TNM',
        'UA01',
        'UA02',
        'UA32',
        'UA99',
        'UA03',
        'UA10',
        'UA11',
        'UA12',
        'UA18',
        'UA20',
        'UA21',
        'UA22',
        'UA23',
        'UA28',
        'UA30',
        'UA31',
        'UA38',
        'duplicate',
        'fraudulent',
        'subscription_canceled',
        'product_unacceptable',
        'product_not_received',
        'unrecognized',
        'credit_not_processed',
        'customer_initiated',
        'incorrect_account_details',
        'insufficient_funds',
        'bank_cannot_process',
        'debit_not_authorized',
        'general',
        'pre-chargeback-alert',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '9',
        '51',
        'A',
        'B',
      ])
      .openapi({ description: "The dispute's reason code." }),
    resolvedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Dispute resolved time.',
    }),
    status: z
      .enum(['response-needed', 'under-review', 'forfeited', 'won', 'lost', 'unknown'])
      .openapi({ description: "The dispute's status." }),
    transactionId: z.string().openapi({ description: "The dispute's transaction ID." }),
    type: z
      .enum([
        'information-request',
        'first-chargeback',
        'second-chargeback',
        'arbitration',
        'fraud',
        'ethoca-alert',
        'verifi-alert',
      ])
      .openapi({ description: "The dispute's type." }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Dispute updated time.',
    }),
  })
  .openapi({
    required: ['currency', 'amount', 'transactionId', 'postedTime', 'type', 'status', 'reasonCode'],
  })
  .openapi('Dispute')

const DragonphoenixSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          rcode: z.string().openapi({ description: 'Dragonphoenix rcode.' }),
          sid: z.string().openapi({ description: 'Dragonphoenix site ID.' }),
        })
        .openapi({ description: 'Dragonphoenix credentials object.', required: ['sid', 'rcode'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Dragonphoenix config.' })
  .openapi('Dragonphoenix')

const EBANXSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ integrationKey: z.string().openapi({ description: 'EBANX integration key.' }) })
        .openapi({ description: 'EBANX credentials object.', required: ['integrationKey'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'EBANX config.' })
  .openapi('EBANX')

const EMS3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'EMS 3DS Servers.',
    discriminator: {
      mapping: { ThreeDSecureIO3dsServer: '#/components/schemas/ThreeDSecureIO3dsServer' },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('EMS3dsServers')

const EMSSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          clientCertificate: z
            .string()
            .openapi({ description: 'Client Certificate.', 'x-multiline': true }),
          clientCertificatePassword: z
            .string()
            .openapi({ description: 'Client Certificate password.' }),
          merchantName: z
            .string()
            .exactOptional()
            .openapi({ description: 'Merchant Name for SFTP reconciliation.' }),
          password: z.string().openapi({ description: 'EMS password.' }),
          privateKey: z.string().openapi({ description: 'Private Key.', 'x-multiline': true }),
          privateKeyPassword: z.string().openapi({ description: 'Private key password.' }),
          serverCertificate: z
            .string()
            .openapi({ description: 'Server Certificate.', 'x-multiline': true }),
          sftpPrivateKey: z
            .string()
            .exactOptional()
            .openapi({ description: 'SFTP reconciliation private key.', 'x-multiline': true }),
          storeId: z.string().openapi({ description: 'EMS store id.' }),
          userId: z.string().openapi({ description: 'EMS account id.' }),
        })
        .openapi({
          description: 'EMS credentials object.',
          required: [
            'storeId',
            'userId',
            'password',
            'privateKey',
            'privateKeyPassword',
            'clientCertificate',
            'clientCertificatePassword',
            'serverCertificate',
          ],
        }),
      settings: z
        .object({
          delay: z
            .int()
            .exactOptional()
            .openapi({ description: 'Automatic capture delay in hours.' }),
        })
        .exactOptional()
        .openapi({ description: 'EMS settings object.', required: [] }),
      threeDSecureServer: EMS3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'EMS e-Commerce (XML) API config.' })
  .openapi('EMS')

const EPGSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          merchantId: z.string().openapi({ description: 'Merchant ID.' }),
          merchantKey: z.string().openapi({ description: 'Merchant key.' }),
          merchantPassword: z.string().openapi({ description: 'Merchant password.' }),
          productId: z.string().openapi({ description: 'Product ID.' }),
        })
        .openapi({
          description: 'EPG credentials object.',
          required: ['merchantId', 'productId', 'merchantPassword', 'merchantKey'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'EPG config.' })
  .openapi('EPG')

const EProSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ apiSecretKey: z.string().openapi({ description: 'EPro API secret key.' }) })
        .openapi({ description: 'EPro credentials object.', required: ['apiSecretKey'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'EPro config.' })
  .openapi('EPro')

const EcorePaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          accountAuth: z.string().openapi({ description: 'EcorePay Account Auth.' }),
          accountId: z.string().openapi({ description: 'EcorePay Account ID.' }),
        })
        .openapi({ required: ['accountId', 'accountAuth'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'EcorePay Gateway config.' })
  .openapi('EcorePay')

const ElavonSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          ssl_merchant_id: z.string().openapi({ description: 'Elavon merchant ID.' }),
          ssl_pin: z.string().openapi({ description: 'Elavon pin.' }),
          ssl_user_id: z.string().openapi({ description: 'Elavon user ID.' }),
        })
        .openapi({
          description: 'Elavon credentials object.',
          required: ['ssl_merchant_id', 'ssl_user_id', 'ssl_pin'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Elavon config.' })
  .openapi('Elavon')

const ProblemSchema: z.ZodType<ProblemType> = z
  .lazy(() => DocumentedProblemSchema.and(DetailedProblemSchema))
  .openapi('Problem')

const ErrorSchema = ProblemSchema.and(
  z
    .object({ error: z.string().exactOptional().openapi({ deprecated: true }) })
    .openapi({ required: [] }),
).openapi('Error')

const EutellerSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ password: z.string(), username: z.string() })
        .openapi({
          description: 'Euteller credentials object.',
          required: ['username', 'password'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Euteller config.' })
  .openapi('Euteller')

const FileCreateFromInlineSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The file description.', example: 'My file description' }),
    file: z
      .string()
      .openapi({
        description: 'The file in base64 encoded format.',
        example: 'R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=',
      }),
    isPublic: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'The File visibility. If public a permalink is provided.',
        example: false,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The file name used for downloading.', example: 'logo.png' }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The tags list.', example: ['test', 'tags'] }),
  })
  .openapi({ required: ['file'] })
  .openapi('FileCreateFromInline')

const FileCreateFromUrlSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The file description.', example: 'My file description' }),
    isPublic: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'The File visibility. If public a permalink is provided.',
        example: false,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The file name used for downloading.', example: 'logo.png' }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The tags list.', example: ['test', 'tags'] }),
    url: z
      .string()
      .openapi({
        description: 'The URL of the file to upload.',
        example: 'https://blog.rebilly.com/wp-content/uploads/2017/09/rb_LogoInverted_Small.png',
      }),
  })
  .openapi({ required: ['url'] })
  .openapi('FileCreateFromUrl')

const FinTecSystemsSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ apiKey: z.string().openapi({ description: 'FinTecSystems api key.' }) })
        .openapi({ description: 'FinTecSystems credentials object.', required: ['apiKey'] }),
      settings: z
        .object({
          recipientBIC: z.string().openapi({ description: 'BIC of the recipient account.' }),
          recipientCountry: z
            .enum(['AT', 'CH', 'DE'])
            .openapi({ description: 'Two letter country code.' }),
          recipientHolder: z
            .string()
            .openapi({ description: 'Account holder of the recipient account.' }),
          recipientIBAN: z.string().openapi({ description: 'IBAN of the recipient account.' }),
        })
        .openapi({
          description: 'FinTecSystems settings object.',
          required: ['recipientIBAN', 'recipientBIC', 'recipientHolder', 'recipientCountry'],
        }),
    })
    .openapi({ required: ['credentials', 'settings'] }),
)
  .openapi({ description: 'FinTecSystems config.' })
  .openapi('FinTecSystems')

const FinraxSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiKey: z.string().openapi({ description: 'Finrax API Key.' }),
          apiSecret: z.string().openapi({ description: 'Finrax API Secret.' }),
          businessId: z.string().openapi({ description: 'Finrax Business Id.' }),
        })
        .openapi({
          description: 'Finrax credentials object.',
          required: ['businessId', 'apiKey', 'apiSecret'],
        }),
      settings: z
        .object({ tolerancePercentage: AmountAdjustmentToleranceSchema })
        .exactOptional()
        .openapi({ description: 'Finrax settings object.', required: ['tolerancePercentage'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Finrax config.' })
  .openapi('Finrax')

const FlexepinSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiKey: z.string().openapi({ description: 'Flexepin API Key.' }),
          apiSecret: z.string().openapi({ description: 'Flexepin API Secret.' }),
        })
        .openapi({ required: ['apiKey', 'apiSecret'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Flexepin Gateway config.' })
  .openapi('Flexepin')

const ForteSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          accountId: z.string().openapi({ description: 'Forte Gateway account ID.' }),
          apiAccessId: z.string().openapi({ description: 'Forte Gateway api access ID.' }),
          apiSecretKey: z.string().openapi({ description: 'Forte Gateway api secret key.' }),
          locationId: z.string().openapi({ description: 'Forte Gateway location ID.' }),
        })
        .openapi({ required: ['accountId', 'locationId', 'apiAccessId', 'apiSecretKey'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Forte Gateway config.' })
  .openapi('Forte')

const FundSendSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          clientId: z.string().openapi({ description: 'FundSend Gateway client ID.' }),
          secretWord: z.string().openapi({ description: 'FundSend Gateway secret word.' }),
        })
        .openapi({ required: ['clientId', 'secretWord'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'FundSend Gateway config.' })
  .openapi('FundSend')

const GET3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'GET 3DS Servers.',
    discriminator: {
      mapping: {
        Other: '#/components/schemas/Other',
        Paay3dsServer: '#/components/schemas/Paay3dsServer',
      },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('GET3dsServers')

const GETSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ accountId: z.string().openapi({ description: 'GET Gateway account ID.' }) })
        .openapi({ required: ['accountId'] }),
      threeDSecureServer: GET3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'GET Gateway config.' })
  .openapi('GET')

const GatewayAccountLimitSchema = z
  .object({
    _links: z
      .array(SelfLinkSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    cap: z
      .int()
      .openapi({
        description:
          "The limit's value cap is the maximum desired value.\nIf type is money, the currency is the report currency.\nThe cap only applies to approved transactions of type `authorize` or `sale`.\n",
        example: 1000,
      }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Gateway account limit created time.',
    }),
    endTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: "The limit's current period end time. At this time, the limit will reset.",
        readOnly: true,
      }),
    frequency: z
      .enum(['daily', 'monthly'])
      .exactOptional()
      .openapi({
        description: "The limit's period will reset according to the frequency.",
        readOnly: true,
      }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'The gateway account limit identifier.',
      readOnly: true,
    }),
    startTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: "The limit's current period start time.", readOnly: true }),
    status: z
      .enum(['monitoring', 'reached'])
      .exactOptional()
      .openapi({ description: 'The gateway account limit status.', readOnly: true }),
    type: z
      .enum(['count', 'money'])
      .exactOptional()
      .openapi({
        description:
          'The limit can be on `money` or `count` of transactions.\nIf `money` is chosen, the currency is the report currency.\n',
        readOnly: true,
      }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Gateway account limit updated time.',
    }),
    usage: z
      .int()
      .exactOptional()
      .openapi({
        description: "The limit's actual usage during this period.",
        example: 375,
        readOnly: true,
      }),
  })
  .openapi({ required: ['cap'] })
  .openapi('GatewayAccountLimit')

const GatewayAccountLimitLinkSchema = LinkSchema.and(
  z
    .object({ rel: z.literal('gatewayAccountLimit').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('GatewayAccountLimitLink')

const GigadatSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          accessToken: z.string().openapi({ description: 'Gigadat access token.' }),
          campaignId: z.string().openapi({ description: 'Gigadat campaign ID.' }),
          securityToken: z.string().openapi({ description: 'Gigadat security token.' }),
        })
        .openapi({
          description: 'Gigadat credentials object.',
          required: ['campaignId', 'accessToken', 'securityToken'],
        }),
      settings: z
        .object({
          sandbox: z
            .boolean()
            .default(false)
            .openapi({ description: 'True if gateway account is in sandbox mode.' }),
        })
        .exactOptional()
        .openapi({ required: ['sandbox'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Gigadat config.' })
  .openapi('Gigadat')

const GlobalOneSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          sharedSecret: z.string().openapi({ description: 'GlobalOne Gateway shared secret.' }),
          terminalId: z.string().openapi({ description: 'GlobalOne Gateway terminal ID.' }),
        })
        .openapi({ required: ['terminalId', 'sharedSecret'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'GlobalOne Gateway config.' })
  .openapi('GlobalOne')

const GlobalWebhookEventTypeSchema = z
  .enum([
    'aml-list-possibly-matched',
    'customer-created',
    'customer-merged',
    'customer-one-time-password-requested',
    'customer-updated',
    'dispute-created',
    'experian-check-performed',
    'gateway-account-downtime-ended',
    'gateway-account-downtime-started',
    'gateway-account-limit-reached',
    'gateway-account-requested',
    'invoice-abandoned',
    'invoice-created',
    'invoice-issued',
    'invoice-modified',
    'invoice-paid',
    'invoice-past-due',
    'invoice-past-due-reminder',
    'invoice-reissued',
    'invoice-voided',
    'kyc-document-accepted',
    'kyc-document-created',
    'kyc-document-modified',
    'kyc-document-rejected',
    'kyc-document-reviewed',
    'lead-source-changed',
    'nsf-response-received',
    'offsite-payment-completed',
    'order-completed',
    'payment-card-created',
    'payment-card-expiration-reminder',
    'payment-card-expired',
    'payment-instrument-modified',
    'renewal-invoice-issued',
    'renewal-invoice-payment-canceled',
    'renewal-invoice-payment-declined',
    'risk-score-changed',
    'subscription-activated',
    'subscription-canceled',
    'subscription-modified',
    'subscription-reactivated',
    'subscription-renewal-reminder',
    'subscription-renewed',
    'subscription-trial-converted',
    'subscription-trial-end-reminder',
    'subscription-trial-ended',
    'subscription-trial-end-changed',
    'transaction-amount-discrepancy-found',
    'transaction-declined',
    'transaction-discrepancy-found',
    'transaction-process-requested',
    'transaction-processed',
    'transaction-reconciled',
    'transaction-timeout-resolved',
    'waiting-gateway-transaction-completed',
  ])
  .openapi({ description: 'Rebilly webhooks event type.' })
  .openapi('GlobalWebhookEventType')

const GooneySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiKey: z.string().openapi({ description: 'Gooney API key.' }),
          apiPassword: z.string().exactOptional().openapi({ description: 'Gooney API password.' }),
          apiSecret: z.string().openapi({ description: 'Gooney API secret.' }),
          apiUser: z.string().exactOptional().openapi({ description: 'Gooney API user.' }),
        })
        .openapi({
          description: 'Gooney credentials object.',
          required: ['username', 'password', 'apiKey', 'apiSecret'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Gooney config.' })
  .openapi('Gooney')

const GpaysafeSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ apiKey: z.string().openapi({ description: 'Gpaysafe apiKey.' }) })
        .openapi({ required: ['apiKey'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Gpaysafe Gateway config.' })
  .openapi('Gpaysafe')

const GreenboxSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          clientId: z.string().openapi({ description: 'Greenbox client ID.' }),
          clientSecret: z.string().openapi({ description: 'Greenbox client secret.' }),
          locationId: z.string().openapi({ description: 'Greenbox location ID.' }),
        })
        .openapi({
          description: 'Greenbox credentials object.',
          required: ['clientId', 'clientSecret', 'locationId'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Greenbox config.' })
  .openapi('Greenbox')

const HiPaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiPassword: z.string().openapi({ description: 'HiPay API password.' }),
          apiUsername: z.string().openapi({ description: 'HiPay API user name.' }),
        })
        .openapi({
          description: 'HiPay credentials object.',
          required: ['apiUsername', 'apiPassword'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'HiPay config.' })
  .openapi('HiPay')

const IBANInstrumentSchema = BankAccountInstrumentSchema.and(
  z
    .object({
      accountNumber: z
        .string()
        .openapi({
          description:
            'Bank Account Number. Detailed information about all ISO 13616-compliant national IBAN formats is available in [SWIFT IBAN Registry](https://www.swift.com/standards/data-standards/iban).\n',
          writeOnly: true,
        }),
      bankName: z.string().exactOptional().openapi({ description: 'Bank name.' }),
      bic: z.string().exactOptional().openapi({ description: 'Bank Identifier Code.' }),
      last4: z
        .string()
        .exactOptional()
        .openapi({ description: "Bank Account Number's last 4 digits.", readOnly: true }),
    })
    .openapi({ required: ['accountNumber'] }),
)
  .openapi({ description: 'Bank account IBAN instrument.' })
  .openapi('IBANInstrument')

const ICEPAYSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          merchantId: z.string().openapi({ description: 'ICEPAY merchant ID.' }),
          secretKey: z.string().openapi({ description: 'ICEPAY API secret key.' }),
        })
        .openapi({
          description: 'ICEPAY credentials object.',
          required: ['merchantId', 'secretKey'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'ICEPAY config.' })
  .openapi('ICEPAY')

const INOVAPAYSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiKey: z.string().openapi({ description: 'INOVAPAY API key.' }),
          apiSecret: z.string().openapi({ description: 'INOVAPAY API secret.' }),
        })
        .openapi({
          description: 'INOVAPAY credentials object.',
          required: ['apiKey', 'apiSecret'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'INOVAPAY config.' })
  .openapi('INOVAPAY')

const IdentityMatchesSchema = z
  .object({
    containsImage: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag that indicates if there is an image that contains a face on it.',
        example: true,
      }),
    dateOfBirth: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date of birth found on the document, null if not found.' }),
    expiryDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The expiry date found on the document, null if not found.' }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The customer first name if it was matched, null otherwise.',
        example: 'John',
      }),
    hasMinimalAge: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Checks the minimal age, 21+ for USA and 18+ for all other countries. Null if dateOfBirth could not be determined.',
        example: true,
        readOnly: true,
      }),
    isIdentityDocument: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag that indicates if this looks like and ID.', example: true }),
    isPublishedOnline: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If there is an exact match found online.', example: false }),
    issueDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The issued date found on the document, null if not found.' }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The customer last name if it was matched, null otherwise.',
        example: 'Doe',
      }),
    nationality: z
      .string()
      .max(3)
      .exactOptional()
      .openapi({
        description: 'The nationality found on the document, null otherwise.',
        example: 'US',
      }),
  })
  .openapi({ required: [] })
  .openapi('IdentityMatches')

const Ilixium3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'Ilixium3dsServers 3DS Servers.',
    discriminator: {
      mapping: { Ilixium3dsServer: '#/components/schemas/Ilixium3dsServer' },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('Ilixium3dsServers')

const IlixiumSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          accountId: z.string().openapi({ description: 'Ilixium Gateway account ID.' }),
          digestPassword: z.string().openapi({ description: 'Ilixium Gateway digest password.' }),
          merchantId: z.string().openapi({ description: 'Ilixium Gateway merchant ID.' }),
        })
        .openapi({
          description: 'Ilixium credentials object.',
          required: ['merchantId', 'accountId', 'digestPassword'],
        }),
      settings: z
        .object({
          platform: z
            .enum(['itix', 'tpg'])
            .default('itix')
            .exactOptional()
            .openapi({ description: 'Direct API platform.' }),
          useCreditEndpoint: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'Use previous approval credit endpoint for payouts.' }),
          useIpFrame: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'Force Ilixium to process via Ip Frame.' }),
          useStandaloneCreditEndpoint: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'Use standalone (token) credit endpoint for payouts.' }),
        })
        .exactOptional()
        .openapi({ description: 'Ilixium settings object.', required: [] }),
      threeDSecureServer: Ilixium3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Ilixium Gateway config.' })
  .openapi('Ilixium')

const Ilixium3dsServerSchema = Ilixium3dsServersSchema.openapi({
  description: 'Ilixium Integrated.',
}).openapi('Ilixium3dsServer')

const Ingenico3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'Ingenico 3DS Servers.',
    discriminator: {
      mapping: { Ingenico3dsServer: '#/components/schemas/Ingenico3dsServer' },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('Ingenico3dsServers')

const IngenicoSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiKeyId: z.string().openapi({ description: 'Ingenico Gateway api key ID.' }),
          apiSecretKey: z.string().openapi({ description: 'Ingenico Gateway api secret key.' }),
          merchantId: z.string().openapi({ description: 'Ingenico Gateway merchant ID.' }),
          skipFraudService: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'Ingenico skip fraud service.' }),
        })
        .openapi({ required: ['merchantId', 'apiKeyId', 'apiSecretKey'] }),
      threeDSecureServer: Ingenico3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Ingenico Gateway config.' })
  .openapi('Ingenico')

const Ingenico3dsServerSchema = Ingenico3dsServersSchema.openapi({
  description: 'Ingenico Integrated.',
}).openapi('Ingenico3dsServer')

const Inovio3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'Inovio 3DS Servers.',
    discriminator: {
      mapping: { Inovio3dsServer: '#/components/schemas/Inovio3dsServer' },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('Inovio3dsServers')

const InovioSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          password: z.string().openapi({ description: 'Inovio password.' }),
          username: z.string().openapi({ description: 'Inovio username.' }),
        })
        .openapi({ description: 'Inovio credentials object.', required: ['username', 'password'] }),
      settings: z
        .object({
          merchantAccountId: z.string().openapi({ description: 'Inovio merchant account ID.' }),
          productId: z.string().openapi({ description: 'Inovio product ID.' }),
          websiteId: z.string().openapi({ description: 'Inovio website ID.' }),
        })
        .openapi({
          description: 'Inovio settings object.',
          required: ['websiteId', 'merchantAccountId', 'productId'],
        }),
      threeDSecureServer: Inovio3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['credentials', 'settings'] }),
)
  .openapi({ description: 'Inovio config.' })
  .openapi('Inovio')

const Inovio3dsServerSchema = Inovio3dsServersSchema.openapi({
  description: 'Inovio Integrated.',
}).openapi('Inovio3dsServer')

const InstaDebitSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          merchantId: z.string().openapi({ description: 'InstaDebit merchant account number.' }),
          password: z.string().openapi({ description: 'InstaDebit merchant account password.' }),
        })
        .openapi({
          description: 'InstaDebit credentials object.',
          required: ['merchantId', 'password'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'InstaDebit config.' })
  .openapi('InstaDebit')

const IntuitSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          clientId: z.string().openapi({ description: 'The Intuit client_id key.' }),
          clientSecret: z.string().openapi({ description: 'The Intuit client_secret key.' }),
        })
        .openapi({ required: ['clientId', 'clientSecret'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Intuit Gateway config.' })
  .openapi('Intuit')

const ValidationErrorExtensionsSchema = z
  .object({
    invalidFields: z
      .array(
        z
          .object({
            field: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The field name. Dot notation is used for nested object field names.',
              }),
            message: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        example: [
          { field: 'field1', message: 'field1 is invalid' },
          { field: 'subObject.field2', message: 'field2 is invalid' },
          { field: 'subObject.field2', message: 'another error in the field2' },
        ],
      }),
  })
  .openapi({ required: [] })
  .openapi('ValidationErrorExtensions')

const InvalidErrorSchema = ErrorSchema.and(ValidationErrorExtensionsSchema)
  .openapi({ description: 'Invalid data was sent.' })
  .openapi('InvalidError')

const InvoiceIssueSchema = z
  .object({
    dueTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Invoice due time. Will be set same as `issuedTime` if `null` or omitted.',
      }),
    issuedTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Invoice issued time. Will be issued immediately if `null` or omitted.',
      }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceIssue')

const InvoiceLinkSchema = LinkSchema.and(
  z
    .object({ rel: z.literal('invoice').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('InvoiceLink')

const InvoiceReissueSchema = z
  .object({
    dueTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Invoice due time. Will be set as current date-time if `null` or omitted.',
      }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceReissue')

const InvoiceTaxItemSchema = z
  .object({
    amount: z.float64().exactOptional().openapi({ description: 'Tax amount.' }),
    description: z.string().exactOptional().openapi({ description: 'Tax description.' }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceTaxItem')

const InvoiceTimelineSchema = z
  .object({
    _links: z
      .array(SelfLinkSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    extraData: TimelineExtraDataSchema.exactOptional(),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'The Timeline message identifier string.',
      readOnly: true,
    }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'The message that describes the message details.' }),
    occurredTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Timeline message time.',
      readOnly: true,
    }),
    triggeredBy: z
      .enum(['rebilly', 'app', 'direct-api'])
      .exactOptional()
      .openapi({ description: 'Shows who or what triggered the Timeline event.', readOnly: true }),
    type: z
      .enum([
        'timeline-comment-created',
        'invoice-created',
        'invoice-issued',
        'invoice-abandoned',
        'invoice-voided',
        'invoice-past-due',
        'invoice-paid',
        'invoice-partially-paid',
        'invoice-disputed',
        'invoice-refunded',
        'invoice-partially-refunded',
        'invoice-renewal-payment-declined',
        'email-message-sent',
        'coupon-applied',
        'transaction-approved',
        'transaction-abandoned',
        'transaction-canceled',
        'transaction-declined',
        'transaction-initiated',
        'transaction-refunded',
        'transaction-voided',
      ])
      .exactOptional()
      .openapi({ description: 'Timeline message type.', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceTimeline')

const InvoiceTransactionSchema = z
  .object({
    amount: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "Amount which needs to be applied to the invoice. Can't be more than the transaction's amount. If omitted, the lesser of the transaction's unused amount or the invoice's amount due will be used.\n",
      }),
    transactionId: z.string().openapi({ description: 'Transaction to be applied to the invoice.' }),
  })
  .openapi({ required: ['transactionId'] })
  .openapi('InvoiceTransaction')

const InvoiceTransactionAllocationSchema = z
  .object({
    _links: z
      .array(z.union([InvoiceLinkSchema, TransactionLinkSchema]))
      .length(2)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    amount: z.number().exactOptional(),
    currency: CurrencyCodeSchema.exactOptional(),
    invoiceId: ResourceIdSchema.exactOptional(),
    transactionId: ResourceIdSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvoiceTransactionAllocation')

const IpayOptionsSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          rcode: z.string().openapi({ description: 'Ipay Options rcode.' }),
          sid: z.string().openapi({ description: 'Ipay Options website ID.' }),
        })
        .openapi({ description: 'Ipay Options credentials object.', required: ['sid', 'rcode'] }),
      settings: z
        .object({
          cardType: z
            .enum(['ideal', 'idealqr', 'sofort'])
            .exactOptional()
            .openapi({ description: 'Manually set the card_type for iDEAL.' }),
          extraStep: z
            .boolean()
            .exactOptional()
            .openapi({
              description: 'Show extra step for user to enter their email and DNI number.',
            }),
          platform: z
            .enum(['SOAP', 'TxHandler', 'SecureHosted'])
            .exactOptional()
            .openapi({ description: 'Platform which IpayOptions will process.' }),
          subdomain: z
            .enum(['miglite', 'w88asiapay'])
            .exactOptional()
            .openapi({ description: 'Subdomain to use when sending request to IpayOptions.' }),
        })
        .openapi({ description: 'Ipay Options settings object.', required: [] }),
    })
    .openapi({ required: ['credentials', 'settings'] }),
)
  .openapi({ description: 'Ipay Options config.' })
  .openapi('IpayOptions')

const JetPaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ TerminalID: z.string().openapi({ description: 'JetPay Gateway terminal ID.' }) })
        .openapi({ required: ['TerminalID'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'JetPay Gateway config.' })
  .openapi('JetPay')

const JetonSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ apiKey: z.string().openapi({ description: 'Jeton apiKey.' }) })
        .openapi({ required: ['apiKey'] }),
      settings: z
        .object({
          method: z
            .enum(['CHECKOUT', 'DIRECT', 'QR', 'JETGO'])
            .openapi({ description: "Jeton's method." }),
        })
        .exactOptional()
        .openapi({ required: ['method'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Jeton Gateway config.' })
  .openapi('Jeton')

const KhelocardSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiKey: z.string().openapi({ description: 'API key.' }),
          apiSecret: z.string().openapi({ description: 'API secret.' }),
          merchantId: z.string().openapi({ description: 'Merchant ID.' }),
          referrer: z.url().openapi({ description: 'The referrer URL registered on Khelocard.' }),
        })
        .openapi({
          description: 'Credentials object.',
          required: ['merchantId', 'referrer', 'apiKey', 'apiSecret'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Khelocard config.' })
  .openapi('Khelocard')

const KonnektiveSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          loginId: z.string().openapi({ description: 'Konnektive API login ID.' }),
          password: z.string().openapi({ description: 'Konnektive API password.' }),
        })
        .openapi({ description: 'Credentials object.', required: ['loginId', 'password'] }),
      settings: z
        .object({
          campaignId: z
            .string()
            .openapi({
              description: 'Konnektive campaign ID for which the order is being placed.',
            }),
          productId: z
            .string()
            .openapi({
              description: 'Konnektive campaign product ID for which the order is being placed.',
            }),
        })
        .openapi({ description: 'Settings object.', required: ['campaignId', 'productId'] }),
    })
    .openapi({ required: ['credentials', 'settings'] }),
)
  .openapi({ description: 'Konnektive config.' })
  .openapi('Konnektive')

const KycDocumentSchema: z.ZodType<KycDocumentType> = z
  .lazy(() =>
    CommonKycDocumentSchema.and(
      z
        .object({
          customerId: ResourceIdSchema.exactOptional().openapi({
            description: "The сustomer's ID.",
          }),
          matchLevel: z
            .int()
            .min(1)
            .max(2)
            .exactOptional()
            .openapi({
              description: 'The level of strictness for the document matches.',
              example: 2,
            }),
          notes: z.string().nullable().exactOptional().openapi({ description: 'Reviewer notes.' }),
          reason: z.string().exactOptional().openapi({ description: 'Reason for uploading.' }),
          reviewTime: ServerTimestampSchema.nullable()
            .exactOptional()
            .openapi({ description: 'Date and time of manual review.' }),
          reviewerId: ResourceIdSchema.nullable()
            .exactOptional()
            .openapi({ description: "Reviewer's user ID.", readOnly: true }),
          reviewerName: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ description: "Reviewer's first and last name.", readOnly: true }),
        })
        .openapi({ required: [] }),
    ),
  )
  .openapi('KycDocument')

const ProofOfIdentitySchema = KycDocumentSchema.and(
  z
    .object({
      _links: z
        .array(z.union([SelfLinkSchema, FileLinkSchema, CustomerLinkSchema]))
        .min(3)
        .exactOptional()
        .openapi({ description: 'The links related to resource.', readOnly: true }),
      documentMatches: z
        .object({
          data: IdentityMatchesSchema.exactOptional(),
          score: z
            .float64()
            .exactOptional()
            .openapi({
              description:
                'The calculated score that represents the % of confidence that this ID represents the given customer.',
              example: 0.75,
            }),
        })
        .exactOptional()
        .openapi({ readOnly: true, required: [] }),
      parsedData: z
        .object({
          data: IdentityMatchesSchema.exactOptional(),
          score: z
            .float64()
            .exactOptional()
            .openapi({
              description:
                'The calculated score that represents the % of confidence that this ID represents the given customer.',
              example: 0.75,
            }),
        })
        .exactOptional()
        .openapi({ readOnly: true, required: [] }),
    })
    .openapi({ required: [] }),
).openapi('ProofOfIdentity')

const ProofOfAddressSchema = KycDocumentSchema.and(
  z
    .object({
      _links: z
        .array(z.union([SelfLinkSchema, FileLinkSchema, CustomerLinkSchema]))
        .min(3)
        .exactOptional()
        .openapi({ description: 'The links related to resource.', readOnly: true }),
      documentMatches: z
        .object({
          data: AddressMatchesSchema.exactOptional(),
          score: z
            .float64()
            .exactOptional()
            .openapi({
              description:
                'The calculated score that represents the % of confidence that this proof of address represents the given customer.',
              example: 0.75,
            }),
        })
        .exactOptional()
        .openapi({ readOnly: true, required: [] }),
      parsedData: z
        .object({
          data: AddressMatchesSchema.exactOptional(),
          score: z
            .float64()
            .exactOptional()
            .openapi({
              description:
                'The calculated score that represents the % of confidence that this proof of address represents the given customer.',
              example: 0.75,
            }),
        })
        .exactOptional()
        .openapi({ readOnly: true, required: [] }),
    })
    .openapi({ required: [] }),
).openapi('ProofOfAddress')

const ProofOfFundsSchema = KycDocumentSchema.openapi('ProofOfFunds')

const ProofOfPurchaseSchema = KycDocumentSchema.openapi('ProofOfPurchase')

const KycDocument_2Schema = z
  .xor([ProofOfIdentitySchema, ProofOfAddressSchema, ProofOfFundsSchema, ProofOfPurchaseSchema])
  .openapi({
    discriminator: {
      mapping: {
        'address-proof': '#/components/schemas/ProofOfAddress',
        'funds-proof': '#/components/schemas/ProofOfFunds',
        'identity-proof': '#/components/schemas/ProofOfIdentity',
        'purchase-proof': '#/components/schemas/ProofOfPurchase',
      },
      propertyName: 'documentType',
    },
  })
  .openapi('KycDocument_2')

const KycDocumentLinkSchema = LinkSchema.and(
  z
    .object({ rel: z.literal('kycDocument').openapi({ description: 'The link type.' }) })
    .openapi({ required: ['rel'] }),
)
  .openapi({ required: ['rel'] })
  .openapi('KycDocumentLink')

const KycRequestSchema: z.ZodType<KycRequestType> = z
  .lazy(() =>
    CommonKycRequestSchema.and(
      z
        .object({
          _links: z
            .array(z.union([SelfLinkSchema, KycDocumentsLinkSchema, KycGathererLinkSchema]))
            .min(1)
            .exactOptional()
            .openapi({ description: 'The links related to resource.', readOnly: true }),
          customerId: ResourceIdSchema.openapi({ description: "The сustomer's ID." }),
          matchLevel: z
            .int()
            .min(1)
            .max(2)
            .exactOptional()
            .openapi({
              description: 'The level of strictness for the document matches.',
              example: 2,
            }),
          reason: z.string().exactOptional().openapi({ description: 'Reason for uploading.' }),
        })
        .openapi({ required: ['customerId'] }),
    ),
  )
  .openapi('KycRequest')

const LPGSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          payoutPassword: z
            .string()
            .exactOptional()
            .openapi({ description: 'LPG payout account password.' }),
          payoutUsername: z
            .string()
            .exactOptional()
            .openapi({ description: 'LPG payout account username.' }),
          publicKey: z.string().openapi({ description: 'LPG public API key.' }),
          secureKey: z.string().openapi({ description: 'LPG secure API key.' }),
        })
        .openapi({ description: 'LPG credentials object.', required: ['publicKey', 'secureKey'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'LPG config.' })
  .openapi('LPG')

const MiFinitySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          accountHolderId: z.string(),
          apiKey: z.string(),
          mifinityAccountNumber: z.string(),
        })
        .openapi({
          description: 'MiFinity credentials object.',
          required: ['apiKey', 'mifinityAccountNumber', 'accountHolderId'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'MiFinity config.' })
  .openapi('MiFinity')

const MonerisSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiToken: z.string().openapi({ description: 'Moneris Gateway api token.' }),
          storeId: z.string().openapi({ description: 'Moneris Gateway store ID.' }),
        })
        .openapi({ required: ['storeId', 'apiToken'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Moneris Gateway config.' })
  .openapi('Moneris')

const MtaPaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          accountId: z.string().openapi({ description: 'MTA Pay Gateway account ID.' }),
          md5key: z.string().openapi({ description: 'MTA Pay Gateway md5key.' }),
          partyId: z.string().openapi({ description: 'MTA Pay Gateway party ID.' }),
        })
        .openapi({ required: ['accountId', 'partyId', 'md5key'] }),
      settings: z
        .object({
          goods: z.string().openapi({ description: 'MTA Pay Gateway goods.' }),
          mobilePay: z.string().openapi({ description: 'MTA Pay Gateway mobile pay param.' }),
        })
        .openapi({ description: 'MTA Pay settings object.', required: ['mobilePay', 'goods'] }),
    })
    .openapi({ required: ['credentials', 'settings'] }),
)
  .openapi({ description: 'MTA Pay Gateway config.' })
  .openapi('MtaPay')

const MuchBetterSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiKey: z.string().openapi({ description: 'MuchBetter api key.' }),
          merchantAccountId: z.string().openapi({ description: 'MuchBetter merchant account ID.' }),
        })
        .openapi({
          description: 'MuchBetter credentials object.',
          required: ['merchantAccountId', 'apiKey'],
        }),
      settings: z
        .object({
          brandName: z
            .string()
            .exactOptional()
            .openapi({ description: 'MuchBetter brand name used for reporting and logo.' }),
          hasPhoneNumberRequest: z
            .boolean()
            .default(false)
            .exactOptional()
            .openapi({
              description: 'Request phone number before submitting the request to MuchBetter.',
            }),
        })
        .exactOptional()
        .openapi({ description: 'MuchBetter settings object.', required: [] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'MuchBetter config.' })
  .openapi('MuchBetter')

const MyFatoorahSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ apiKey: z.string().openapi({ description: 'MyFatoorah api key.' }) })
        .openapi({ description: 'MyFatoorah credentials object.', required: ['apiKey'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'MyFatoorah config.' })
  .openapi('MyFatoorah')

const NGenius3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'NGenius 3DS Servers.',
    discriminator: {
      mapping: { NGenius3dsServer: '#/components/schemas/NGenius3dsServer' },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('NGenius3dsServers')

const NGeniusSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiKey: z.string().openapi({ description: 'NGenius API key.' }),
          outletId: z.string().openapi({ description: 'NGenius outlet ID.' }),
        })
        .openapi({ description: 'NGenius credentials object.', required: ['outletId', 'apiKey'] }),
      threeDSecureServer: NGenius3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'NGenius config.' })
  .openapi('NGenius')

const NGenius3dsServerSchema = NGenius3dsServersSchema.openapi({
  description: 'NGenius Integrated.',
}).openapi('NGenius3dsServer')

const NMI3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'NMI 3DS Servers.',
    discriminator: {
      mapping: {
        Other: '#/components/schemas/Other',
        Paay3dsServer: '#/components/schemas/Paay3dsServer',
      },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('NMI3dsServers')

const NMISchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          password: z.string().openapi({ description: 'NMI Gateway store ID.' }),
          username: z.string().openapi({ description: 'NMI Gateway api token.' }),
        })
        .openapi({ required: ['username', 'password'] }),
      settings: z
        .object({
          disableStoredCredentials: z
            .boolean()
            .default(false)
            .exactOptional()
            .openapi({ description: 'Disable NMI Stored Credentials (CIT/MIT).' }),
        })
        .exactOptional()
        .openapi({ required: [] }),
      threeDSecureServer: NMI3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'NMI Gateway config.' })
  .openapi('NMI')

const NeosurfSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          merchantId: z.string().openapi({ description: 'Neosurf merchant ID.' }),
          secretKey: z.string().openapi({ description: 'Neosurf API secret key.' }),
        })
        .openapi({
          description: 'Neosurf credentials object.',
          required: ['merchantId', 'secretKey'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Neosurf config.' })
  .openapi('Neosurf')

const NetbankingSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          midcode: z.string().openapi({ description: 'Netbanking MID code.' }),
          midsecret: z.string().openapi({ description: 'Netbanking MID secret key.' }),
        })
        .openapi({
          description: 'Netbanking credentials object.',
          required: ['midcode', 'midsecret'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Netbanking config.' })
  .openapi('Netbanking')

const NetellerSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          paysafePaymentsApiPassword: z
            .string()
            .openapi({
              description: 'Neteller App Paysafe Payments API Password for a private key.',
            }),
          paysafePaymentsApiUsername: z
            .string()
            .openapi({
              description: 'Neteller App Paysafe Payments API Username for a private key.',
            }),
        })
        .openapi({
          description: 'Neteller credentials object.',
          required: ['paysafePaymentsApiUsername', 'paysafePaymentsApiPassword'],
        }),
      settings: z
        .object({
          populateCustomerEmail: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'Populate customer email for payment.' }),
        })
        .exactOptional()
        .openapi({ required: [] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Neteller Gateway config.' })
  .openapi('Neteller')

const NinjaWalletSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiKey: z.string().openapi({ description: 'NinjaWallet api key.' }),
          passphrase: z.string().openapi({ description: 'NinjaWallet passphrase.' }),
          secret: z.string().openapi({ description: 'NinjaWallet secret.' }),
        })
        .openapi({
          description: 'NinjaWallet credentials object.',
          required: ['apiKey', 'secret', 'passphrase'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'NinjaWallet config.' })
  .openapi('NinjaWallet')

const NuaPaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          nuaPayAccountId: z.string().openapi({ description: 'NuaPay account ID.' }),
          nuaPayApiKey: z.string().openapi({ description: 'NuaPay api key.' }),
          nuaPayCommonName: z.string().openapi({ description: 'NuaPay common name.' }),
          nuaPayOriginatorIban: z.string().openapi({ description: 'NuaPay origiantor IBAN.' }),
          nuaPayPrivateKey: z
            .string()
            .openapi({ description: 'NuaPay private key.', 'x-multiline': true }),
          nuaPaySerialNumber: z.string().openapi({ description: 'NuaPay serial number.' }),
        })
        .openapi({
          description: 'NuaPay credentials object.',
          required: [
            'nuaPayCommonName',
            'nuaPaySerialNumber',
            'nuaPayAccountId',
            'nuaPayOriginatorIban',
            'nuaPayApiKey',
            'nuaPayPrivateKey',
          ],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'NuaPay Gateway config.' })
  .openapi('NuaPay')

const OchaPaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiPassword: z.string().openapi({ description: 'OchaPay Gateway api password.' }),
          apiUsername: z.string().openapi({ description: 'OchaPay Gateway username.' }),
          secretWord: z.string().openapi({ description: 'OchaPay Gateway secret word.' }),
        })
        .openapi({ required: ['apiUsername', 'apiPassword', 'secretWord'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'OchaPay Gateway config.' })
  .openapi('OchaPay')

const OnRampSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ apiKey: z.string() })
        .openapi({ description: 'OnRamp credentials object.', required: ['apiKey'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'OnRamp config.' })
  .openapi('OnRamp')

const OneTimeOrderSchema: z.ZodType<OneTimeOrderType> = z
  .lazy(() =>
    CommonOneTimeOrderSchema.and(
      z
        .object({
          customerId: ResourceIdSchema.exactOptional().openapi({
            description: 'The customer identifier string.',
            'x-basic': true,
          }),
        })
        .openapi({ required: [] }),
    )
      .and(SubscriptionMetadataSchema)
      .openapi({ required: ['orderType', 'customerId', 'websiteId', 'items'] }),
  )
  .openapi('OneTimeOrder')

const OnlineueberweisenSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiKey: z.string().openapi({ description: 'Onlineueberweisen API Key.' }),
          nuaPayAccountId: z
            .string()
            .exactOptional()
            .openapi({ description: 'NuaPay account ID for reconciliation.' }),
          nuaPayApiKey: z
            .string()
            .exactOptional()
            .openapi({ description: 'NuaPay API Key for reconciliation.' }),
        })
        .openapi({ description: 'Onlineueberweisen credentials object.', required: ['apiKey'] }),
      settings: z
        .object({
          payformCode: z
            .string()
            .default('default')
            .exactOptional()
            .openapi({
              description: 'Onlineueberweisen payform code to use customized Payform template.',
            }),
        })
        .openapi({ description: 'Onlineueberweisen settings object.', required: [] }),
    })
    .openapi({ required: ['credentials', 'settings'] }),
)
  .openapi({ description: 'Onlineueberweisen config.' })
  .openapi('Onlineueberweisen')

const OrderTimelineSchema = z
  .object({
    _links: z
      .array(SelfLinkSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    extraData: TimelineExtraDataSchema.exactOptional(),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'The Timeline message identifier string.',
      readOnly: true,
    }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'The message that describes the message details.' }),
    occurredTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Timeline message time.',
      readOnly: true,
    }),
    triggeredBy: z
      .enum(['rebilly', 'app', 'direct-api'])
      .exactOptional()
      .openapi({
        description: 'Shows who or what triggered the Timeline message.',
        readOnly: true,
      }),
    type: z
      .enum([
        'timeline-comment-created',
        'order-renewed',
        'order-activated',
        'order-completed',
        'order-reactivated',
        'order-canceled',
        'order-upgraded',
        'order-downgraded',
        'order-billing-address-changed',
        'order-delivery-address-changed',
        'order-renewal-time-changed',
        'order-churned',
        'order-custom-fields-changed',
        'order-items-changed',
        'order-billing-anchor-changed',
        'order-recurring-interval-changed',
        'order-risk-metadata-changed',
        'order-paid-early',
        'order-quantity-changed',
        'email-message-sent',
        'coupon-applied',
        'invoice-created',
        'invoice-issued',
        'invoice-abandoned',
        'invoice-voided',
        'invoice-past-due',
        'invoice-paid',
        'invoice-partially-paid',
        'invoice-disputed',
        'invoice-refunded',
        'invoice-partially-refunded',
        'invoice-renewal-payment-declined',
      ])
      .exactOptional()
      .openapi({ description: 'Timeline message type.', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('OrderTimeline')

const EMerchantPay3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'eMerchantPay 3DS Servers.',
    discriminator: {
      mapping: {
        Other: '#/components/schemas/Other',
        Paay3dsServer: '#/components/schemas/Paay3dsServer',
        ThreeDSecureIO3dsServer: '#/components/schemas/ThreeDSecureIO3dsServer',
        eMerchantPay3dsServer: '#/components/schemas/eMerchantPay3dsServer',
      },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('EMerchantPay3dsServers')

const VantivLitle3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'VantivLitle 3DS Servers.',
    discriminator: {
      mapping: {
        Other: '#/components/schemas/Other',
        Paay3dsServer: '#/components/schemas/Paay3dsServer',
      },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('VantivLitle3dsServers')

const Walpay3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'Walpay 3DS Servers.',
    discriminator: {
      mapping: {
        Other: '#/components/schemas/Other',
        Paay3dsServer: '#/components/schemas/Paay3dsServer',
      },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('Walpay3dsServers')

const Worldpay3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'Worldpay 3DS Servers.',
    discriminator: {
      mapping: {
        Other: '#/components/schemas/Other',
        Paay3dsServer: '#/components/schemas/Paay3dsServer',
        ThreeDSecureIO3dsServer: '#/components/schemas/ThreeDSecureIO3dsServer',
      },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('Worldpay3dsServers')

const OtherSchema = A1Gateway3dsServersSchema.and(EMerchantPay3dsServersSchema)
  .and(GET3dsServersSchema)
  .and(NMI3dsServersSchema)
  .and(Payvision3dsServersSchema)
  .and(VantivLitle3dsServersSchema)
  .and(Walpay3dsServersSchema)
  .and(Worldpay3dsServersSchema)
  .openapi({ description: 'Other.' })
  .openapi('Other')

const Paay3dsServerSchema = A1Gateway3dsServersSchema.and(EMerchantPay3dsServersSchema)
  .and(GET3dsServersSchema)
  .and(NMI3dsServersSchema)
  .and(Payvision3dsServersSchema)
  .and(VantivLitle3dsServersSchema)
  .and(Walpay3dsServersSchema)
  .and(Worldpay3dsServersSchema)
  .and(
    z
      .object({
        apiKey: z.string().openapi({ description: 'Paay ApiKey.' }),
        mpiUrl: z.string().openapi({ description: 'Paay 3DS Server url.' }),
        sandboxMpiUrl: z.string().openapi({ description: 'Paay sandbox 3DS Server url.' }),
        secret: z.string().openapi({ description: 'Paay secret.' }),
      })
      .openapi({ required: ['apiKey', 'secret', 'mpiUrl', 'sandboxMpiUrl'] }),
  )
  .openapi({ description: 'Paay.' })
  .openapi('Paay3dsServer')

const PagsmileSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          appId: z.string().openapi({ description: 'Pagsmile app ID.' }),
          merchantId: z.string().openapi({ description: 'Pagsmile merchant ID.' }),
          secretKey: z.string().openapi({ description: 'Pagsmile secret key.' }),
        })
        .openapi({ required: ['merchantId', 'appId', 'secretKey'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Pagsmile Gateway config.' })
  .openapi('Pagsmile')

const Panamerican3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'Panamerican 3DS Servers.',
    discriminator: {
      mapping: { Panamerican3dsServer: '#/components/schemas/Panamerican3dsServer' },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('Panamerican3dsServers')

const PanamericanSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          key: z.string().openapi({ description: "Panamerican's key." }),
          password: z.string().openapi({ description: "Panamerican's Password." }),
        })
        .openapi({ description: 'Panamerican credentials object.', required: ['key', 'password'] }),
      settings: z
        .object({
          convertToAscii: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'Will convert all chars to ascii.' }),
          extraStep: z
            .boolean()
            .openapi({ description: 'Show extra step for user to enter their ID number.' }),
        })
        .openapi({ description: 'Panamerican settings object.', required: ['extraStep'] }),
      threeDSecureServer: Panamerican3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['credentials', 'settings'] }),
)
  .openapi({ description: 'Panamerican config.' })
  .openapi('Panamerican')

const Panamerican3dsServerSchema = Panamerican3dsServersSchema.openapi({
  description: 'Panamerican Integrated.',
}).openapi('Panamerican3dsServer')

const PandaGatewaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiCode: z.string().openapi({ description: 'Panda Gateway api code.' }),
          merchantCode: z.string().openapi({ description: 'Panda Gateway merchant code.' }),
          signKey: z.string().openapi({ description: 'Panda Gateway sign key.' }),
        })
        .openapi({ required: ['merchantCode', 'apiCode', 'signKey'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Panda Gateway config.' })
  .openapi('PandaGateway')

const ParamountEftSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          merchant_id: z.string().openapi({ description: 'Merchant account ID.' }),
          merchant_pass: z.string().openapi({ description: 'Merchant account password.' }),
          payee: z.string().openapi({ description: 'Merchant name/descriptor.' }),
        })
        .openapi({
          description: 'Paramount credentials object.',
          required: ['merchant_id', 'merchant_pass', 'payee'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Paramount config.' })
  .openapi('ParamountEft')

const ParamountInteracSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          encryptionKey: z.string().openapi({ description: 'ParamountInterac encryption key.' }),
          merchantId: z.string().openapi({ description: 'ParamountInterac merchant ID.' }),
          password: z.string().openapi({ description: 'ParamountInterac password for query.' }),
        })
        .openapi({
          description: 'ParamountInterac credentials object.',
          required: ['merchantId', 'encryptionKey', 'password'],
        }),
      settings: z
        .object({
          sandbox: z
            .boolean()
            .default(false)
            .openapi({ description: 'True if gateway account is in sandbox mode.' }),
        })
        .exactOptional()
        .openapi({ required: ['sandbox'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'ParamountInterac config.' })
  .openapi('ParamountInterac')

const Pay4FunSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          merchantId: z.string().openapi({ description: 'Pay4Fun merchant ID.' }),
          merchantKey: z.string().openapi({ description: 'Pay4Fun merchant key.' }),
          merchantSecret: z.string().openapi({ description: 'Pay4Fun merchant secret.' }),
        })
        .openapi({
          description: 'Pay4Fun credentials object.',
          required: ['merchantId', 'merchantSecret', 'merchantKey'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Pay4Fun config.' })
  .openapi('Pay4Fun')

const PayCashSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          emisor: z.string().openapi({ description: 'Identify of the company.' }),
          token: z.string().openapi({ description: 'Token.' }),
        })
        .openapi({ description: 'PayCash credentials object.', required: ['emisor', 'token'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'PayCash config.' })
  .openapi('PayCash')

const PayClubSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          accountNumber: z.string(),
          merchantId: z.string().exactOptional(),
          signKey: z.string(),
        })
        .openapi({
          description: 'PayClub credentials object.',
          required: ['apiKey', 'accountNumber', 'signKey'],
        }),
      settings: z
        .object({
          use3DSChannel: z.boolean().exactOptional().openapi({ description: 'Use 3DS channel.' }),
        })
        .exactOptional()
        .openapi({ required: [] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'PayClub config.' })
  .openapi('PayClub')

const PayPalSchema = GatewayAccountSchema.and(
  z
    .object({
      settings: z
        .object({
          enableGuestCheckout: z
            .boolean()
            .default(false)
            .exactOptional()
            .openapi({
              description:
                'Allow users without PayPal accounts to pay using credit or debit cards.',
            }),
          redirectUrl: z
            .url()
            .openapi({
              description:
                'The URL where the user will be redirected after authorizing the account on PayPal.',
            }),
        })
        .openapi({ description: 'PayPal settings object.', required: ['redirectUrl'] }),
    })
    .openapi({ required: ['settings'] }),
)
  .openapi({ description: 'PayPal Gateway config.' })
  .openapi('PayPal')

const PayTabsSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ clientKey: z.string(), profileId: z.string(), serverKey: z.string() })
        .openapi({
          description: 'PayTabs credentials object.',
          required: ['profileId', 'clientKey', 'serverKey'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'PayTabs config.' })
  .openapi('PayTabs')

const PayULatamSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          accountId: z.string().openapi({ description: 'PayULatam account id.' }),
          apiKey: z.string().openapi({ description: 'PayULatam API key.' }),
          apiLogin: z.string().openapi({ description: 'PayULatam API login.' }),
          merchantId: z.string().openapi({ description: 'PayULatam merchant id.' }),
        })
        .openapi({
          description: 'PayULatam credentials object.',
          required: ['merchantId', 'accountId', 'apiLogin', 'apiKey'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'PayULatam config.' })
  .openapi('PayULatam')

const PayeezySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiKey: z.string().openapi({ description: 'API Key.' }),
          apiSecret: z.string().openapi({ description: 'API Secret.' }),
          merchantId: z.string().openapi({ description: 'Payeezy Merchant ID.' }),
          merchantToken: z.string().openapi({ description: 'Merchant Token.' }),
        })
        .openapi({ required: ['merchantId', 'merchantToken', 'apiKey', 'apiSecret'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Payeezy Gateway config.' })
  .openapi('Payeezy')

const PayflowSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          password: z
            .string()
            .openapi({
              description: 'The password you defined while registering for the account.',
            }),
          user: z
            .string()
            .openapi({
              description:
                'If you set up one or more additional users on the account, this value is the ID of the user authorized to process transactions. If, however, you have not set up additional users, USER has the same value as VENDOR.',
            }),
          vendor: z
            .string()
            .openapi({
              description: 'Your merchant login ID created when you registered for the account.',
            }),
        })
        .openapi({
          description: 'Payflow credentials object.',
          required: ['user', 'vendor', 'password'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Payflow config.' })
  .openapi('Payflow')

const PaymenTechnologiesSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiKey: z
            .string()
            .openapi({ description: 'PaymenTechnologies API key required for query operations.' }),
          authenticateId: z
            .string()
            .openapi({ description: 'PaymenTechnologies Gateway authenticate ID.' }),
          authenticatePw: z
            .string()
            .openapi({ description: 'PaymenTechnologies Gateway authenticate password.' }),
          publicKey: z
            .string()
            .openapi({ description: 'PaymenTechnologies Gateway API public key.' }),
          secretKey: z
            .string()
            .openapi({ description: 'PaymenTechnologies Gateway API secret key.' }),
        })
        .openapi({
          required: ['authenticateId', 'authenticatePw', 'publicKey', 'secretKey', 'apiKey'],
        }),
      settings: z
        .object({
          use3DSEndpoint: z.boolean().exactOptional().openapi({ description: 'Use 3DS endpoint.' }),
        })
        .exactOptional()
        .openapi({ required: [] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'PaymenTechnologies Gateway config.' })
  .openapi('PaymenTechnologies')

const PaymentAsiaSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ apiKey: z.string() })
        .openapi({ description: 'PaymentAsia credentials object.', required: ['apiKey'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'PaymentAsia config.' })
  .openapi('PaymentAsia')

const PaymentCardCreatePlainSchema = z
  .object({
    billingAddress: ContactObjectSchema.openapi({ description: 'The billing address.' }),
    customFields: ResourceCustomFieldsSchema.exactOptional(),
    customerId: ResourceIdSchema.openapi({ description: "The Customer's ID." }),
    cvv: z
      .string()
      .exactOptional()
      .openapi({ description: "Card's cvv (card verification value).", writeOnly: true }),
    expMonth: z.int().openapi({ description: "Card's expiration month." }),
    expYear: z.int().openapi({ description: "Card's expiration year." }),
    method: z.literal('payment-card').openapi({ description: 'The method of payment instrument.' }),
    pan: z
      .string()
      .openapi({ description: 'The card PAN (Primary Account Number).', writeOnly: true }),
    riskMetadata: RiskMetadataSchema.exactOptional(),
  })
  .openapi({ required: ['method', 'customerId', 'pan', 'expYear', 'expMonth', 'billingAddress'] })
  .openapi('PaymentCardCreatePlain')

const PaymentCardCreateTokenSchema = z
  .object({
    customFields: ResourceCustomFieldsSchema.exactOptional(),
    customerId: ResourceIdSchema.openapi({ description: "The Customer's ID." }),
    token: z.string().openapi({ description: 'PaymentCardToken ID.' }),
  })
  .openapi({ required: ['customerId', 'token'] })
  .openapi('PaymentCardCreateToken')

const PaymentCardDigitalWalletFeatureSchema = z
  .object({
    name: z
      .enum(['Google Pay', 'Apple Pay'])
      .exactOptional()
      .openapi({ description: 'The feature name.' }),
  })
  .openapi({ title: 'Digital Wallet', required: [] })
  .openapi('PaymentCardDigitalWalletFeature')

const PaymentCardUpdatePlainSchema = z
  .object({
    billingAddress: ContactObjectSchema.exactOptional().openapi({
      description: 'The billing address.',
    }),
    customFields: ResourceCustomFieldsSchema.exactOptional(),
    cvv: z
      .string()
      .exactOptional()
      .openapi({ description: "Card's cvv (card verification value)." }),
    expMonth: z.int().exactOptional().openapi({ description: "Card's expiration month." }),
    expYear: z.int().exactOptional().openapi({ description: "Card's expiration year." }),
    stickyGatewayAccountId: ResourceIdSchema.exactOptional().openapi({
      description: 'Sticky gateway account ID.',
    }),
  })
  .openapi({ required: [] })
  .openapi('PaymentCardUpdatePlain')

const PaymentInstrument_2Schema: z.ZodType<PaymentInstrument_2Type> = z
  .lazy(() =>
    z.xor([
      PaymentCardSchema,
      BankAccountSchema,
      PayPalAccountSchema,
      KhelocardCardSchema,
      AlternativePaymentInstrument_2Schema,
    ]),
  )
  .openapi('PaymentInstrument_2')

const PaymentInstrumentCreateTokenSchema = z
  .object({
    customFields: ResourceCustomFieldsSchema.exactOptional(),
    customerId: ResourceIdSchema.openapi({ description: "The customer's ID." }),
    token: z.string().openapi({ description: 'Payment token ID.' }),
  })
  .openapi({ required: ['customerId', 'token'] })
  .openapi('PaymentInstrumentCreateToken')

const PaymentInstrumentUpdateTokenSchema = z
  .object({
    billingAddress: ContactObjectSchema.exactOptional().openapi({
      description: 'The billing address (if supplied – overrides billing address from token).',
    }),
    customFields: ResourceCustomFieldsSchema.exactOptional(),
    token: z.string().exactOptional().openapi({ description: 'Payment token ID.' }),
  })
  .openapi({ required: [] })
  .openapi('PaymentInstrumentUpdateToken')

const PaymentsOSSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ appId: z.string(), privateKey: z.string() })
        .openapi({ required: ['appId', 'privateKey'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'PaymentsOS config.' })
  .openapi('PaymentsOS')

const PaymeroSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ apiKey: z.string().openapi({ description: 'Paymero API key.' }) })
        .openapi({ description: 'Paymero credentials object.', required: ['apiKey'] }),
      settings: z
        .object({
          amountExceeded: z
            .boolean()
            .default(false)
            .exactOptional()
            .openapi({
              description:
                'Decline transactions when the amount received exceeds the amount requested.',
            }),
          mainCurrency: z
            .enum(['TRX', 'ETH'])
            .exactOptional()
            .openapi({ description: 'This will be the blockchain on which currency runs.' }),
          targetCurrency: z
            .string()
            .length(3)
            .exactOptional()
            .openapi({
              description:
                'This will be the currency to which you want to auto-convert the received cryptocurrency in to.',
              example: 'USD',
            }),
        })
        .exactOptional()
        .openapi({ description: 'Paymero settings object.', required: [] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Paymero config.' })
  .openapi('Paymero')

const PayoutRequestSchema = CommonTransactionRequestSchema.openapi('PayoutRequest')

const PayrSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiSecurityToken: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Hash of the password for the Alliance API (transaction reporting).',
            }),
          apiUserId: z
            .string()
            .exactOptional()
            .openapi({ description: 'Username for the Alliance API (transaction reporting).' }),
          clientId: z.string().openapi({ description: 'Payr Gateway client ID.' }),
          secretWord: z.string().openapi({ description: 'Payr Gateway secret word.' }),
        })
        .openapi({ required: ['clientId', 'secretWord'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Payr Gateway config.' })
  .openapi('Payr')

const Paysafe3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'Paysafe 3DS Servers.',
    discriminator: {
      mapping: { Paysafe3dsServer: '#/components/schemas/Paysafe3dsServer' },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('Paysafe3dsServers')

const PaysafeSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          accountNum: z.string().openapi({ description: 'Paysafe Gateway account number.' }),
          storeId: z.string().openapi({ description: 'Paysafe Gateway store ID.' }),
          storePwd: z.string().openapi({ description: 'Paysafe Gateway store password.' }),
        })
        .openapi({ required: ['storeId', 'storePwd', 'accountNum'] }),
      threeDSecureServer: Paysafe3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Paysafe Gateway config.' })
  .openapi('Paysafe')

const Paysafe3dsServerSchema = Paysafe3dsServersSchema.openapi({
  description: 'Paysafe Integrated.',
}).openapi('Paysafe3dsServer')

const PaysafecashSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ apiKey: z.string().openapi({ description: 'Paysafecash API key.' }) })
        .openapi({ required: ['apiKey'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Paysafecash Gateway config.' })
  .openapi('Paysafecash')

const PayvisionSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          memberGuid: z.string().openapi({ description: 'Payvision Gateway member guid.' }),
          memberId: z.string().openapi({ description: 'Payvision Gateway member id.' }),
        })
        .openapi({ required: ['memberId', 'memberGuid'] }),
      settings: z
        .object({
          avs: z.boolean().exactOptional().openapi({ description: 'Payvision Gateway avs.' }),
          delay: z.int().exactOptional().openapi({ description: 'Payvision Gateway delay.' }),
          merchantAccountType: z.int().openapi({ description: 'Payvision merchant account type.' }),
        })
        .exactOptional()
        .openapi({ description: 'Payvision settings object.', required: ['merchantAccountType'] }),
      threeDSecureServer: Payvision3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Payvision Gateway config.' })
  .openapi('Payvision')

const Payvision3dsServerSchema = Payvision3dsServersSchema.openapi({
  description: 'Payvision Integrated.',
}).openapi('Payvision3dsServer')

const Piastrix3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'Piastrix 3DS Servers.',
    discriminator: {
      mapping: { Piastrix3dsServer: '#/components/schemas/Piastrix3dsServer' },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('Piastrix3dsServers')

const PiastrixSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          secretKey: z.string().openapi({ description: 'Secret Key.' }),
          shopId: z.string().openapi({ description: 'Shop ID.' }),
        })
        .openapi({
          description: 'Piastrix credentials object.',
          required: ['shopId', 'secretKey'],
        }),
      settings: z
        .object({
          tolerancePercentage: z
            .int()
            .min(0)
            .max(5)
            .exactOptional()
            .openapi({ description: 'Tolerance percentage for settled amount.', example: 5 }),
        })
        .exactOptional()
        .openapi({ description: 'Piastrix settings object.', required: [] }),
      threeDSecureServer: Piastrix3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Piastrix config.' })
  .openapi('Piastrix')

const Piastrix3dsServerSchema = Piastrix3dsServersSchema.openapi({
  description: 'Piastrix Integrated.',
}).openapi('Piastrix3dsServer')

const PlugnpaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          'publisher-name': z.string().openapi({ description: 'Plugnpay Gateway member id.' }),
          'publisher-password': z.string().openapi({ description: 'Plugnpay Gateway avs.' }),
        })
        .openapi({ required: ['publisher-name', 'publisher-password'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Plugnpay Gateway config.' })
  .openapi('Plugnpay')

const PostFinanceSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          keyPassphrase: z.string(),
          merchantId: z.string(),
          privateKey: z.string().openapi({ 'x-multiline': true }),
          pspId: z.string(),
          publicKey: z.string().openapi({ 'x-multiline': true }),
          sftpKeyPassphrase: z.string(),
          sftpPrivateKey: z.string().openapi({ 'x-multiline': true }),
          sftpUsername: z.string(),
        })
        .openapi({
          description: 'PostFinance credentials object.',
          required: [
            'pspId',
            'merchantId',
            'sftpUsername',
            'publicKey',
            'privateKey',
            'keyPassphrase',
            'sftpPrivateKey',
            'sftpKeyPassphrase',
          ],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'PostFinance config.' })
  .openapi('PostFinance')

const PriceBasedShippingRateSchema = z
  .object({
    _links: z
      .array(SelfLinkSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    currency: CurrencyCodeSchema,
    maxOrderSubtotal: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Maximum order subtotal for which this shipping rate is applicable (NULL if no maximum).',
      }),
    minOrderSubtotal: z
      .float64()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'Minimum order subtotal for which this shipping rate is applicable, defaults to 0.00.',
      }),
    name: z.string().max(255).openapi({ description: 'The shipping rate name.' }),
    price: z
      .float64()
      .openapi({ description: 'The shipping price - 0 is a valid value (for free).' }),
  })
  .openapi({ required: ['name', 'currency', 'price'] })
  .openapi('PriceBasedShippingRate')

const ProsaSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          accessToken: z.string().openapi({ description: 'Access token.' }),
          entityId: z.string().openapi({ description: 'Entity ID.' }),
        })
        .openapi({
          description: 'Prosa credentials object.',
          required: ['entityId', 'accessToken'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Prosa config.' })
  .openapi('Prosa')

const RPNSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          key: z.string().openapi({ description: 'RPN Key.' }),
          mid: z.string().openapi({ description: 'RPN MID.' }),
        })
        .openapi({ required: ['mid', 'key'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'RPN Gateway config.' })
  .openapi('RPN')

const RapydSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ accessKey: z.string(), secretKey: z.string() })
        .openapi({
          description: 'Rapyd credentials object.',
          required: ['accessKey', 'secretKey'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Rapyd config.' })
  .openapi('Rapyd')

const ReadyToPayAchMethodSchema = z
  .object({
    feature: z
      .xor([AchPlaidFeatureSchema])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The specific feature (eg. digital wallet or a processor) of this method. If method doesn't have any features – will be null.\n",
      }),
    filters: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'For the method to be applicable any of the following filters should match.\nIf no filters sent – no restrictions applied. This follows our standard filter format.\n',
      }),
    method: z.literal('ach').openapi({ description: 'The payment method.' }),
  })
  .openapi({ required: ['method'], title: 'ACH' })
  .openapi('ReadyToPayAchMethod')

const ReadyToPayGenericMethodSchema = z
  .object({
    filters: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'For the method to be applicable any of the following filters should match.\nIf no filters sent – no restrictions applied. This follows our standard filter format.\n',
      }),
    method: AlternativePaymentMethodsSchema.openapi({ description: 'The payment method.' }),
  })
  .openapi({ required: ['method'], title: 'Generic' })
  .openapi('ReadyToPayGenericMethod')

const ReadyToPayPaymentCardMethodSchema = z
  .object({
    brands: z
      .array(PaymentCardBrandSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'The list of supported brands.' }),
    feature: z
      .xor([PaymentCardDigitalWalletFeatureSchema])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The specific feature (eg. digital wallet or a processor) of this method. If method doesn't have any features – will be null.\n",
      }),
    filters: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'For the method to be applicable any of the following filters should match.\nIf no filters sent – no restrictions applied. This follows our standard filter format.\n',
      }),
    method: z.literal('payment-card').openapi({ description: 'The payment method.' }),
  })
  .openapi({ required: ['method'], title: 'Payment Card' })
  .openapi('ReadyToPayPaymentCardMethod')

const ReadyToPayMethodsSchema = z
  .array(
    z.xor([
      ReadyToPayPaymentCardMethodSchema,
      ReadyToPayAchMethodSchema,
      ReadyToPayGenericMethodSchema,
    ]),
  )
  .openapi({
    example: [
      {
        brands: ['Visa', 'MasterCard'],
        feature: { name: 'Google Pay' },
        filters: ['brand:Visa,MasterCard;bin:!411111'],
        method: 'payment-card',
      },
      {
        feature: {
          expirationTime: '2006-01-02T15:04:05Z',
          linkToken: 'some-random-link_token-for-plaid',
          name: 'Plaid',
        },
        method: 'ach',
      },
      {
        brands: ['Visa'],
        feature: null,
        filters: ['brand:Visa;bin:411111,444433'],
        method: 'payment-card',
      },
      {
        feature: { $ref: '#/components/schemas/ReadyToPayMethods/example/2/feature' },
        filters: [],
        method: 'ach',
      },
      { filters: [], method: 'paypal' },
      { filters: [], method: 'Skrill' },
    ],
  })
  .openapi('ReadyToPayMethods')

const RealexSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          account: z.string().openapi({ description: 'Realex Gateway account.' }),
          merchantId: z.string().openapi({ description: 'Realex Gateway merchant id.' }),
          rebatePassword: z.string().openapi({ description: 'Realex Gateway rebate password.' }),
          secretKey: z.string().openapi({ description: 'Realex Gateway secret key.' }),
        })
        .openapi({ required: ['merchantId', 'secretKey', 'rebatePassword', 'account'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Realex Gateway config.' })
  .openapi('Realex')

const RealtimeSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          clientId: z.string().openapi({ description: 'Realtime Gateway client ID.' }),
          secretWord: z.string().openapi({ description: 'Realtime Gateway secret word.' }),
        })
        .openapi({ required: ['clientId', 'secretWord'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Realtime Gateway config.' })
  .openapi('Realtime')

const RedsysSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          merchantCode: z.string().openapi({ description: 'Redsys Gateway merchant code.' }),
          secretCode: z.string().openapi({ description: 'Redsys Gateway secret code.' }),
        })
        .openapi({ required: ['merchantCode', 'secretCode'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Redsys Gateway config.' })
  .openapi('Redsys')

const ResetPasswordTokenSchema = z
  .object({
    _links: z
      .array(SelfLinkSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    credentialId: z
      .string()
      .exactOptional()
      .openapi({ description: "Token's credential ID.", readOnly: true }),
    expiredTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Password expired time.' }),
    token: z
      .string()
      .exactOptional()
      .openapi({ description: "The token's identifier string.", readOnly: true }),
    username: z.string().openapi({ description: "The token's username." }),
  })
  .openapi({ required: ['username', 'password'] })
  .openapi('ResetPasswordToken')

const RotessaSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ apiKey: z.string().openapi({ description: 'Rotessa api key.' }) })
        .openapi({ description: 'Rotessa credentials object.', required: ['apiKey'] }),
      settings: z
        .object({
          delay: z
            .int()
            .openapi({
              description: 'Rotessa Gateway time delay for them to process transaction.',
            }),
        })
        .openapi({ description: 'Rotessa settings object.', required: ['delay'] }),
    })
    .openapi({ required: ['credentials', 'settings'] }),
)
  .openapi({ description: 'Rotessa config.' })
  .openapi('Rotessa')

const SMSVoucherSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ AppId: z.string().openapi({ description: 'SMSVoucher AppId.' }) })
        .openapi({ required: ['AppId'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'SMSVoucher Gateway config.' })
  .openapi('SMSVoucher')

const SagepaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          M_ID: z.string().openapi({ description: 'Sagepay Gateway merchant ID.' }),
          M_KEY: z.string().openapi({ description: 'Sagepay Gateway merchant key.' }),
        })
        .openapi({ required: ['M_ID', 'M_KEY'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Sagepay Gateway config.' })
  .openapi('Sagepay')

const SaltarPaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiKey: z.string().openapi({ description: 'SaltarPay API key.' }),
          secretKey: z.string().openapi({ description: 'SaltarPay secret key.' }),
        })
        .openapi({
          description: 'SaltarPay credentials object.',
          required: ['apiKey', 'secretKey'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'SaltarPay config.' })
  .openapi('SaltarPay')

const SeamlessChexSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          publicKey: z.string().openapi({ description: 'SeamlessChex publishable key.' }),
          secretKey: z.string().openapi({ description: 'SeamlessChex secret key.' }),
        })
        .openapi({
          description: 'SeamlessChex credentials object.',
          required: ['publicKey', 'secretKey'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'SeamlessChex config.' })
  .openapi('SeamlessChex')

const SubscriptionSchema = z
  .object({
    orderType: z
      .enum(['subscription-order', 'one-time-order'])
      .exactOptional()
      .openapi({
        description: 'Specifies the type of order, a subscription or a one-time purchase.\n',
        'x-basic': true,
      }),
  })
  .openapi({
    discriminator: {
      mapping: {
        'one-time-order': '#/components/schemas/OneTimeOrder',
        'subscription-order': '#/components/schemas/SubscriptionOrder',
      },
      propertyName: 'orderType',
    },
    required: [],
  })
  .openapi('Subscription')

const SearchSchema = z
  .object({
    customers: z
      .array(CustomerSchema)
      .exactOptional()
      .openapi({ description: 'List of returned customers.', readOnly: true }),
    invoices: z
      .array(InvoiceSchema)
      .exactOptional()
      .openapi({ description: 'List of returned invoices.', readOnly: true }),
    orders: z
      .array(SubscriptionSchema)
      .exactOptional()
      .openapi({ description: 'List of returned orders.', readOnly: true }),
    searched: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Names of searched resources, even if they returned nothing.',
        readOnly: true,
      }),
    transactions: z
      .array(TransactionSchema)
      .exactOptional()
      .openapi({ description: 'List of returned transactions.', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('Search')

const SecureTrading3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'SecureTrading 3DS Servers.',
    discriminator: {
      mapping: { SecureTrading3dsServer: '#/components/schemas/SecureTrading3dsServer' },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('SecureTrading3dsServers')

const SecureTradingSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          password: z.string().openapi({ description: 'SecureTrading web service password.' }),
          username: z.string().openapi({ description: 'SecureTrading web service username.' }),
          websiteId: z.string().openapi({ description: 'Website ID.' }),
        })
        .openapi({
          description: 'SecureTrading credentials object.',
          required: ['websiteId', 'username', 'password'],
        }),
      threeDSecureServer: SecureTrading3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'SecureTrading config.' })
  .openapi('SecureTrading')

const SecureTrading3dsServerSchema = SecureTrading3dsServersSchema.openapi({
  description: 'SecureTrading 3DS Server.',
}).openapi('SecureTrading3dsServer')

const SecurionPay3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'SecurionPay 3DS Servers.',
    discriminator: {
      mapping: { ThreeDSecureIO3dsServer: '#/components/schemas/ThreeDSecureIO3dsServer' },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('SecurionPay3dsServers')

const SecurionPaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ secretApiKey: z.string() })
        .openapi({ description: 'SecurionPay credentials object.', required: ['secretApiKey'] }),
      threeDSecureServer: SecurionPay3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'SecurionPay config.' })
  .openapi('SecurionPay')

const ShippingZoneSchema = z
  .object({
    _links: z
      .array(SelfLinkSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    countries: z
      .array(
        z
          .string()
          .regex(/^[A-Z]{2}$/)
          .openapi({ description: 'Country ISO Alpha-2 code.' }),
      )
      .exactOptional()
      .openapi({
        description:
          'Countries covered by the shipping zone. A country can only belong to one shipping zone (no overlapping).\nThis property can be empty or null to create a default shipping zone for countries that were not specified in other zones.\n',
      }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'The shipping zone created time.',
    }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'The shipping zone identifier string.',
      readOnly: true,
    }),
    isDefault: z
      .any()
      .exactOptional()
      .openapi({ description: 'Is this Shipping Zone default.', readOnly: true }),
    name: z.string().max(255).openapi({ description: 'The shipping zone name.' }),
    rates: z
      .array(
        PriceBasedShippingRateSchema.openapi({
          description: 'Price based shipping rate instruction.',
        }),
      )
      .exactOptional()
      .openapi({ description: 'Price-based shipping rate instructions.' }),
    updatedTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'The shipping zone updated time.',
    }),
  })
  .openapi({ required: ['name'] })
  .openapi('ShippingZone')

const SkrillSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          accountEmail: z
            .string()
            .openapi({ description: 'Email address of your Skrill merchant account.' }),
          mqiPassword: z
            .string()
            .exactOptional()
            .openapi({ description: 'Password used during MQI/API requests.' }),
          secretWord: z
            .string()
            .openapi({ description: 'Secret word used for MD5 signature verifications.' }),
        })
        .openapi({
          description: 'Skrill credentials object.',
          required: ['accountEmail', 'secretWord'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Skrill config.' })
  .openapi('Skrill')

const SmartInvoice3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'SmartInvoice 3DS Servers.',
    discriminator: {
      mapping: { SmartInvoice3dsServer: '#/components/schemas/SmartInvoice3dsServer' },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('SmartInvoice3dsServers')

const SmartInvoiceSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          applicationId: z.string().openapi({ description: 'SmartInvoice application UID.' }),
          merchantId: z.string().openapi({ description: 'SmartInvoice merchant account UID.' }),
        })
        .openapi({
          description: 'SmartInvoice credentials object.',
          required: ['merchantId', 'applicationId'],
        }),
      threeDSecureServer: SmartInvoice3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'SmartInvoice config.' })
  .openapi('SmartInvoice')

const SmartInvoice3dsServerSchema = SmartInvoice3dsServersSchema.openapi({
  description: 'SmartInvoice Integrated.',
}).openapi('SmartInvoice3dsServer')

const SofortSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          configKey: z.string().openapi({ description: 'Sofort configuration key.' }),
          nuaPayAccountId: z
            .string()
            .exactOptional()
            .openapi({ description: 'NuaPay account ID for reconciliation.' }),
          nuaPayApiKey: z
            .string()
            .exactOptional()
            .openapi({ description: 'NuaPay API Key for reconciliation.' }),
        })
        .openapi({ description: 'Sofort credentials object.', required: ['configKey'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Sofort config.' })
  .openapi('Sofort')

const SparkPaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          secretKey: z.string().openapi({ description: 'SparkPay secret key.' }),
          shopId: z.string().openapi({ description: 'SparkPay shop ID.' }),
        })
        .openapi({
          description: 'SparkPay credentials object.',
          required: ['shopId', 'secretKey'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'SparkPay config.' })
  .openapi('SparkPay')

const StaticGatewaySchema = GatewayAccountSchema.and(z.object({}))
  .openapi({ description: 'StaticGateway Gateway config.' })
  .openapi('StaticGateway')

const Stripe3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema.exactOptional() })
  .openapi({
    description: 'Stripe 3DS Servers.',
    discriminator: {
      mapping: { Stripe3dsServer: '#/components/schemas/Stripe3dsServer' },
      propertyName: 'name',
    },
    required: [],
  })
  .openapi('Stripe3dsServers')

const StripeSchema = GatewayAccountSchema.and(
  z
    .object({
      settings: z
        .object({
          enforceOffSession: z
            .boolean()
            .default(false)
            .exactOptional()
            .openapi({
              description:
                'If `true`, `off_session` param will always be `true` in Stripe requests.',
            }),
          redirectUrl: z
            .url()
            .openapi({
              description:
                'The URL where the user will be redirected after authorizing the account on Stripe.',
            }),
          usePaymentIntents: z
            .boolean()
            .default(false)
            .exactOptional()
            .openapi({
              description:
                'If `true` the `PaymentIntents` API will be used instead of `Charges` API.',
            }),
        })
        .openapi({ description: 'Stripe settings object.', required: ['redirectUrl'] }),
      threeDSecureServer: Stripe3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['settings'] }),
)
  .openapi({ description: 'Stripe Gateway config.' })
  .openapi('Stripe')

const Stripe3dsServerSchema = Stripe3dsServersSchema.and(
  z
    .object({
      enforceThreeDSecure: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'If true, Stripe will attempt to perform 3D Secure\nand overrides any [dynamic 3D Secure Radar rules](https://stripe.com/docs/radar/rules#request-3ds).\n',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Stripe Integrated.' })
  .openapi('Stripe3dsServer')

const SubscriptionCancellationSchema = z
  .object({
    _links: z
      .array(SelfLinkSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    appliedInvoiceId: ResourceIdSchema.exactOptional().openapi({
      description:
        'The identifier of the invoice where the cancellation fees or credits are applied.',
      readOnly: true,
    }),
    canceledBy: z
      .enum(['merchant', 'customer'])
      .default('customer')
      .exactOptional()
      .openapi({ description: 'Who did the cancellation.' }),
    canceledTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The cancellation time (when the status is confirmed which is by default unless specified "draft").',
        readOnly: true,
      }),
    churnTime: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The time when the subscription will be deactivated.' }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'The time of resource creation (when it is posted).',
    }),
    description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'Cancel reason description in free form.' }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'Cancellation identifier.',
      readOnly: true,
    }),
    lineItemSubtotal: z
      .number()
      .exactOptional()
      .openapi({
        description:
          "Subtotal of the line items which will be added after the subscription's cancellation.",
        example: 49.95,
        readOnly: true,
      }),
    lineItems: UpcomingInvoiceItemCollectionSchema.exactOptional().openapi({
      description:
        'Items to be added to the new invoice. Proration item is generated and added automatically.',
    }),
    prorated: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          "Defines if the customer gets a pro-rata credit for the time remaining between `churnTime` and\nsubscription's next renewal time.\n",
      }),
    proratedInvoiceId: ResourceIdSchema.exactOptional().openapi({
      description: 'Identifier of the invoice on which the cancellation proration is calculated.',
      readOnly: true,
    }),
    reason: z
      .enum([
        'did-not-use',
        'did-not-want',
        'missing-features',
        'bugs-or-problems',
        'do-not-remember',
        'risk-warning',
        'contract-expired',
        'too-expensive',
        'other',
        'billing-failure',
      ])
      .default('other')
      .exactOptional()
      .openapi({ description: 'Cancellation reason.' }),
    status: z
      .enum(['draft', 'confirmed', 'completed', 'revoked'])
      .default('confirmed')
      .exactOptional()
      .openapi({
        description:
          '"draft" defines that the cancellation isn\'t applied on an invoice and subscription but\ncan be inspected to see the charge.\n"confirmed" will set a subscription to be canceled when the `churnTime` is reached.\n"completed" is a read-only status which is set by the system when the churnTime is reached.\nThe cancellation may not be changed or deleted when the status is "completed".\n',
      }),
    subscriptionId: ResourceIdSchema.openapi({
      description: 'Identifier of the canceled subscription order.',
    }),
  })
  .openapi({ required: ['subscriptionId', 'churnTime'] })
  .openapi('SubscriptionCancellation')

const SubscriptionChangeSchema = z
  .object({
    effectiveTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date from which the renewal time (for `reset` operations) and proration calculations are made.  If omitted, it will default to the current time.',
      }),
    items: z
      .array(
        z
          .object({
            plan: FlexiblePlanSchema,
            quantity: z
              .int()
              .openapi({ description: 'Number of units of the product on the given plan.' }),
          })
          .openapi({
            description:
              'A new set of items for the subscription. To remove an item, you include the items array without the items you wish to remove.',
            required: ['plan', 'quantity'],
          }),
      )
      .min(1),
    keepTrial: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          "If set to true and the subscription order has an active trial, it will use that trial further. Works with 'retain' renewalPolicy only.",
      }),
    preview: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If set to true, it will not change the subscription.  It allows for a way to preview the changes that would be made to a subscription.',
      }),
    prorated: z
      .boolean()
      .openapi({
        description:
          'Whether or not to give a pro rata credit for the amount of time remaining between the `effectiveTime` and the end of the current period.\nIn addition, if the `renewalTime` is retained (by setting the `renewalPolicy` to `retain`), then a pro rata debit will occur as well,\nfor the amount between the `effectiveTime` and the `renewalTime` as a percentage of the normal period size.\n',
      }),
    renewalPolicy: z
      .enum(['reset', 'retain'])
      .openapi({
        description:
          'The value determines whether the subscription retains its current `renewalTime` or resets it to a newly calculated `renewalTime`.',
      }),
  })
  .openapi({ required: ['items', 'renewalPolicy', 'prorated'] })
  .openapi('SubscriptionChange')

const SubscriptionInvoiceSchema = z
  .object({
    transactionId: ResourceIdSchema.exactOptional().openapi({
      description:
        'If present, applies a payment to the invoice created.  If the payment is for the invoice total, it would be marked as paid.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionInvoice')

const SubscriptionOrderSchema: z.ZodType<SubscriptionOrderType> = z
  .lazy(() =>
    CommonSubscriptionOrderSchema.and(
      z
        .object({
          customerId: ResourceIdSchema.exactOptional().openapi({
            description: 'The customer identifier string.',
            'x-basic': true,
          }),
          renewalReminderNumber: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Number of renewal reminder events triggered.',
              readOnly: true,
            }),
          renewalReminderTime: ServerTimestampSchema.nullable()
            .exactOptional()
            .openapi({ description: 'Time renewal reminder event will be triggered.' }),
          trialReminderNumber: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Number of renewal reminder events triggered.',
              readOnly: true,
            }),
          trialReminderTime: ServerTimestampSchema.nullable()
            .exactOptional()
            .openapi({ description: 'Time renewal reminder event will be triggered.' }),
        })
        .openapi({ required: [] }),
    )
      .and(SubscriptionCancellationStateSchema)
      .and(SubscriptionMetadataSchema)
      .openapi({ required: ['orderType', 'customerId', 'websiteId', 'items'] }),
  )
  .openapi('SubscriptionOrder')

const SubscriptionReactivationSchema = z
  .object({
    _links: z
      .array(SelfLinkSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    cancellationId: ResourceIdSchema.exactOptional().openapi({
      description: 'Identifier of the related cancellation.',
      readOnly: true,
    }),
    createdTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The time of resource creation (when it is posted).',
        readOnly: true,
      }),
    description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'Reactivation reason description in free form.' }),
    effectiveTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date from which the service period would start, unless the subscription is canceled but still active.\nIn case the susbcription is still active, the subscription will continue the current service period.\nIf omitted, it will default to the current time.\n',
      }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'Reactivation identifier.',
      readOnly: true,
    }),
    renewalTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time of the next subscription renewal. If omitted then it is computed from the effective time.\nIf the subscription is canceled but active it is ignored, so the next renewal will happen as scheduled.\n',
      }),
    subscriptionId: ResourceIdSchema.openapi({
      description: 'Identifier of the reactivated subscription.',
    }),
  })
  .openapi({ required: ['subscriptionId'] })
  .openapi('SubscriptionReactivation')

const TWINTSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          cashRegisterId: z.string().openapi({ description: 'Cash register ID.' }),
          keyPassphrase: z.string().openapi({ description: "TWINT key's passphrase." }),
          privateKey: z
            .string()
            .openapi({ description: 'TWINT private key.', 'x-multiline': true }),
          publicKey: z.string().openapi({ description: 'TWINT public key.', 'x-multiline': true }),
          storeUuid: z.string().openapi({ description: 'TWINT store UUID.' }),
        })
        .openapi({
          description: 'TWINT credentials object.',
          required: ['storeUuid', 'cashRegisterId', 'publicKey', 'privateKey', 'keyPassphrase'],
        }),
      settings: z
        .object({
          cashRegisterType: z.string().openapi({ description: 'TWINT cash register type.' }),
        })
        .openapi({ description: 'TWINT settings object.', required: ['cashRegisterType'] }),
    })
    .openapi({ required: ['credentials', 'settings'] }),
)
  .openapi({ description: 'TWINT config.' })
  .openapi('TWINT')

const TestProcessor3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'TestProcessor3dsServers 3DS Servers.',
    discriminator: {
      mapping: {
        TestSandbox3dsServer: '#/components/schemas/TestProcessor3dsServer',
        ThreeDSecureIO3dsServer: '#/components/schemas/ThreeDSecureIO3dsServer',
      },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('TestProcessor3dsServers')

const TestProcessorSchema = GatewayAccountSchema.and(
  z
    .object({ threeDSecureServer: TestProcessor3dsServersSchema.exactOptional() })
    .openapi({ required: [] }),
)
  .openapi({ description: 'TestProcessor Gateway config.' })
  .openapi('TestProcessor')

const TestProcessor3dsServerSchema = TestProcessor3dsServersSchema.openapi({
  description: 'TestProcessor Integrated.',
}).openapi('TestProcessor3dsServer')

const ThreeDSecureSchema = z
  .object({
    _links: z
      .array(SelfLinkSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    amount: z.float64().openapi({ description: 'Transaction amount.' }),
    cavv: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The 3D Secure entry cardholder authentication verification value.',
      }),
    createdTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'The 3D Secure entry created time.',
    }),
    currency: CurrencyCodeSchema,
    customerId: ResourceIdSchema.openapi({ description: 'Related customer ID.' }),
    eci: z
      .int()
      .exactOptional()
      .openapi({ description: 'The 3D Secure entry electronic commerce indicator.' }),
    enrolled: z
      .enum(['Y', 'N', 'U'])
      .openapi({ description: 'Is the cardholder enrolled in 3DSecure.' }),
    enrollmentEci: z.string().openapi({ description: 'The 3D Secure entry enrollment eci.' }),
    gatewayAccountId: ResourceIdSchema.openapi({ description: 'Related gateway account ID.' }),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'The 3D Secure entry identifier string.',
      readOnly: true,
    }),
    payerAuthResponseStatus: z
      .enum(['Y', 'N', 'U', 'A'])
      .exactOptional()
      .openapi({ description: 'The 3D Secure entry Auth Response Status.' }),
    paymentCardId: ResourceIdSchema.openapi({ description: 'Related payment card ID.' }),
    signatureVerification: z
      .enum(['Y', 'N'])
      .exactOptional()
      .openapi({ description: 'If signature was verified.' }),
    websiteId: ResourceIdSchema.openapi({ description: 'Related Website ID.' }),
    xid: z.string().exactOptional().openapi({ description: 'The 3D Secure entry transaction Id.' }),
  })
  .openapi({
    required: [
      'enrolled',
      'enrollmentEci',
      'customerId',
      'gatewayAccountId',
      'paymentCardId',
      'websiteId',
      'currency',
      'amount',
    ],
  })
  .openapi('ThreeDSecure')

const WorldlineAtosFrankfurt3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'WorldlineAtosFrankfurt 3DS Servers.',
    discriminator: {
      mapping: { ThreeDSecureIO3dsServer: '#/components/schemas/ThreeDSecureIO3dsServer' },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('WorldlineAtosFrankfurt3dsServers')

const ThreeDSecureIO3dsServerSchema = WorldlineAtosFrankfurt3dsServersSchema.and(
  TestProcessor3dsServersSchema,
)
  .and(EMS3dsServersSchema)
  .and(
    z
      .object({
        merchantAcquirerBinMastercard: z
          .string()
          .min(6)
          .max(11)
          .openapi({ description: 'Mastercard Acquirer BIN.' }),
        merchantAcquirerBinVisa: z
          .string()
          .min(6)
          .max(11)
          .openapi({ description: 'Visa Acquirer BIN.' }),
        merchantCountry: z
          .string()
          .max(2)
          .openapi({ description: 'Merchant Country ISO Alpha-2 Code.', example: 'US' }),
        merchantId: z.string().max(35).openapi({ description: 'Merchant Id.' }),
        merchantName: z.string().max(40).openapi({ description: 'Merchant Name.' }),
        merchantUrl: z.string().max(2048).openapi({ description: 'Merchant URL.' }),
        transactionType: z
          .enum(['01', '03', '10', '11', '28'])
          .exactOptional()
          .openapi({
            description:
              '01 - Goods/Service Purchase\n03 - Check Acceptance\n10 - Account Funding\n11 - Quasi-Cash Transaction\n28 - Prepaid Activation and Load\n\nIdentifies the type of transaction being authenticated.\n',
          }),
        v1: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Value determines if requests can use version 1 of 3DS.\nIn case both v1 and v2 are enabled it will prefer v2.\nIf v2 is not supported for the issuer, it will coalesce to v1.\n',
          }),
        v2: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Value determines if requests will attempt version 2 of 3DS.\nIn case both v1 and v2 are enabled it will prefer v2.\nIf v2 is not supported for the issuer, it will coalesce to v1.\n',
          }),
      })
      .openapi({
        required: [
          'merchantId',
          'merchantName',
          'merchantAcquirerBinVisa',
          'merchantAcquirerBinMastercard',
          'merchantCountry',
          'merchantUrl',
        ],
      }),
  )
  .openapi({ description: 'ThreeDSecureIO3dsServer.' })
  .openapi('ThreeDSecureIO3dsServer')

const TimeIso8601ExtendedSchema = z
  .string()
  .regex(
    /^(([01][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9]))?)((?:[+-](?:0[0-9]|1[12])(?::?[0-5][0-9])?)|Z)?$/,
  )
  .openapi({ description: 'Extended ISO-8601 format of time.' })
  .openapi('TimeIso8601Extended')

const ToditoCashSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ apiKey: z.string().openapi({ description: 'ToditoCash API key.' }) })
        .openapi({ description: 'ToditoCash credentials object.', required: ['apiKey'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'ToditoCash config.' })
  .openapi('ToditoCash')

const TransactionQuerySchema = z
  .object({
    amount: z
      .float64()
      .exactOptional()
      .openapi({ description: "The transaction's amount.", readOnly: true }),
    currency: CurrencyCodeSchema.exactOptional().openapi({ readOnly: true }),
    result: z
      .enum(['abandoned', 'approved', 'canceled', 'declined', 'unknown'])
      .exactOptional()
      .openapi({ description: 'Transaction result.', readOnly: true }),
    status: z
      .enum([
        'completed',
        'conn-error',
        'disputed',
        'never-sent',
        'offsite',
        'partially-refunded',
        'pending',
        'refunded',
        'sending',
        'suspended',
        'timeout',
        'voided',
        'waiting-approval',
        'waiting-capture',
        'waiting-gateway',
        'waiting-refund',
      ])
      .exactOptional()
      .openapi({ description: 'Transaction status.', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('TransactionQuery')

const TransactionRefundSchema = z
  .object({ amount: z.float64().openapi({ description: 'Refund amount.' }) })
  .openapi({ required: ['amount'] })
  .openapi('TransactionRefund')

const TransactionRequestSchema: z.ZodType<TransactionRequestType> = z
  .lazy(() =>
    CommonTransactionRequestSchema.and(
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (!Object.hasOwn(val, 'type')) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({ required: ['type'] }),
    ).and(
      z
        .object({
          type: z
            .enum(['3ds-authentication', 'sale', 'authorize'])
            .exactOptional()
            .openapi({
              description:
                'The type of transaction requested.\nYou should always include the type within your API request.\nThis supports a limited subset of Transaction types.  To refund or void, use the refund endpoint.\nTo `capture` use the `sale` type. If any existing `authorize` transactions are eligible, then they will be captured and the `sale` will be converted to a `capture` type.\n',
            }),
        })
        .openapi({ required: [] }),
    ),
  )
  .openapi('TransactionRequest')

const TransactionTimelineSchema = z
  .object({
    _links: z
      .array(SelfLinkSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'The links related to resource.', readOnly: true }),
    extraData: TimelineExtraDataSchema.exactOptional(),
    id: ResourceIdSchema.exactOptional().openapi({
      description: 'The Timeline message identifier string.',
      readOnly: true,
    }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'The message that describes the message details.' }),
    occurredTime: ServerTimestampSchema.exactOptional().openapi({
      description: 'Timeline message time.',
      readOnly: true,
    }),
    triggeredBy: z
      .enum(['rebilly', 'app', 'direct-api'])
      .exactOptional()
      .openapi({
        description: 'Shows who or what triggered the Timeline message.',
        readOnly: true,
      }),
    type: z
      .enum([
        'amount-adjusted',
        'blocklist-matched',
        'bump-offer-accepted',
        'bump-offer-presented',
        'bump-offer-rejected',
        'customer-redirected-offsite',
        'customer-returned',
        'dcc-offer-accepted',
        'dcc-offer-forced',
        'dcc-offer-presented',
        'dcc-offer-rejected',
        'dispute-changed',
        'dispute-created',
        'dispute-forfeited',
        'dispute-lost',
        'dispute-responded',
        'dispute-won',
        'gateway-connection-failed',
        'gateway-connection-timed-out',
        'gateway-response-received',
        'risk-score-changed',
        'timeline-comment-created',
        'transaction-abandoned',
        'transaction-amount-discrepancy-found',
        'transaction-approved',
        'transaction-canceled',
        'transaction-capture-delayed',
        'transaction-captured',
        'transaction-declined',
        'transaction-discrepancy-found',
        'transaction-initiated',
        'transaction-reconciled',
        'transaction-refunded',
        'transaction-retried',
        'transaction-rules-processed',
        'transaction-scheduled-time-changed',
        'transaction-timeout-resolved',
        'transaction-voided',
        'transaction-waiting-gateway',
        'transaction-queried',
        'transaction-updated',
      ])
      .exactOptional()
      .openapi({ description: 'Timeline message type.', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('TransactionTimeline')

const TransactionUpdateSchema = z
  .object({
    amount: z.float64().exactOptional().openapi({ description: 'The transaction amount.' }),
    currency: CurrencyCodeSchema.exactOptional().openapi({
      description: 'The transaction currency.',
    }),
    result: z
      .enum(['abandoned', 'approved', 'canceled', 'declined'])
      .openapi({ description: 'Transaction result.' }),
  })
  .openapi({
    description:
      'Update a Transaction manually to completed status with given result with optional currency and amount.',
    required: ['result'],
  })
  .openapi('TransactionUpdate')

const TrustPaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ accessToken: z.string(), entityId: z.string() })
        .openapi({
          description: 'TrustPay credentials object.',
          required: ['entityId', 'accessToken'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'TrustPay config.' })
  .openapi('TrustPay')

const TrustlySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          password: z.string().openapi({ description: 'Trustly password.' }),
          privateKey: z
            .string()
            .openapi({ description: 'Trustly private key.', 'x-multiline': true }),
          publicKey: z
            .string()
            .openapi({ description: 'Trustly public key.', 'x-multiline': true }),
          username: z.string().exactOptional().openapi({ description: 'Trustly username.' }),
        })
        .openapi({
          description: 'Trustly credentials object.',
          required: ['usernmae', 'password', 'publicKey', 'privateKey'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Trustly config.' })
  .openapi('Trustly')

const TrustsPaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ gatewayNo: z.string(), merchantNo: z.string(), signkey: z.string() })
        .openapi({
          description: 'TrustsPay credentials object.',
          required: ['merchantNo', 'gatewayNo', 'signkey'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'TrustsPay config.' })
  .openapi('TrustsPay')

const UPayCardSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          key: z.string().openapi({ description: 'merchant key.' }),
          receiver_account: z.string().openapi({ description: 'merchant receiver account.' }),
          secret: z.string().openapi({ description: 'merchant secret.' }),
        })
        .openapi({ required: ['receiver_account', 'key', 'secret'] }),
      settings: z
        .object({ tolerancePercentage: AmountAdjustmentToleranceSchema })
        .exactOptional()
        .openapi({ description: 'UpayCard settings object.', required: ['tolerancePercentage'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'UPayCard Gateway config.' })
  .openapi('UPayCard')

const USAePaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          pin: z.string().openapi({ description: 'USAePay Gateway pin.' }),
          sourceKey: z.string().openapi({ description: 'USAePay Gateway source key.' }),
        })
        .openapi({ required: ['sourceKey', 'pin'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'USAePay Gateway config.' })
  .openapi('USAePay')

const VCreditosSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          publicKey: z.string().openapi({ description: 'VCreditos API public key.' }),
          secretKey: z.string().openapi({ description: 'VCreditos API secret key.' }),
        })
        .openapi({
          description: 'VCreditos credentials object.',
          required: ['publicKey', 'secretKey'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'VCreditos config.' })
  .openapi('VCreditos')

const VantivLitleSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          merchantId: z.string().openapi({ description: 'VantivLitle Gateway merchant ID.' }),
          password: z.string().openapi({ description: 'VantivLitle Gateway password.' }),
          username: z.string().openapi({ description: 'VantivLitle Gateway username.' }),
        })
        .openapi({ required: ['username', 'password', 'merchantId'] }),
      threeDSecureServer: VantivLitle3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'VantivLitle Gateway config.' })
  .openapi('VantivLitle')

const Wallet88Schema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          password: z.string().openapi({ description: 'Wallet88 API password.' }),
          username: z.string().openapi({ description: 'Wallet88 API user.' }),
        })
        .openapi({
          description: 'Wallet88 credentials object.',
          required: ['username', 'password'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Wallet88 config.' })
  .openapi('Wallet88')

const WalpaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          merchantName: z.string().openapi({ description: 'Walpay Gateway merchant name.' }),
          merchantPin: z.string().openapi({ description: 'Walpay Gateway merchant pin.' }),
        })
        .openapi({ required: ['merchantName', 'merchantPin'] }),
      threeDSecureServer: Walpay3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Walpay Gateway config.' })
  .openapi('Walpay')

const Wirecard3dsServersSchema = z
  .object({ name: ThreeDSecureServerNameSchema })
  .openapi({
    description: 'Wirecard 3DS Servers.',
    discriminator: {
      mapping: { Wirecard3dsServer: '#/components/schemas/Wirecard3dsServer' },
      propertyName: 'name',
    },
    required: ['name'],
  })
  .openapi('Wirecard3dsServers')

const WirecardSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          businessSignature: z
            .string()
            .openapi({ description: 'Wirecard Gateway merchant business case signature.' }),
          delay: z.int().openapi({ description: 'Wirecard Gateway delay.' }),
          merchantPassword: z
            .string()
            .openapi({ description: 'Wirecard Gateway merchant password.' }),
          merchantUsername: z
            .string()
            .openapi({ description: 'Wirecard Gateway merchant username.' }),
          sftpPrivateKey: z
            .string()
            .exactOptional()
            .openapi({ description: 'Wirecard sftp private key.', 'x-multiline': true }),
          sftpUsername: z
            .string()
            .exactOptional()
            .openapi({ description: 'Wirecard sftp username.' }),
        })
        .openapi({
          required: ['merchantUsername', 'merchantPassword', 'businessSignature', 'delay'],
        }),
      threeDSecureServer: Wirecard3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Wirecard Gateway config.' })
  .openapi('Wirecard')

const Wirecard3dsServerSchema = Wirecard3dsServersSchema.openapi({
  description: 'Wirecard Integrated.',
}).openapi('Wirecard3dsServer')

const WorldlineAtosFrankfurtSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          acquiringInstitutionIdentificationCode: z
            .string()
            .openapi({ description: 'Acquiring Institution Identification Code.' }),
          cardAcceptorIdCode: z.string().openapi({ description: 'Card Acceptor ID Code.' }),
        })
        .openapi({
          description: 'WorldlineAtosFrankfurt credentials.',
          required: ['cardAcceptorIdCode', 'acquiringInstitutionIdentificationCode'],
        }),
      settings: z
        .object({
          cardAcceptorCountryCode: z
            .string()
            .openapi({ description: 'Card Acceptor Country Code.' }),
          cardAcceptorLocation: z.string().openapi({ description: 'Card Acceptor Location.' }),
          cardAcceptorName: z.string().openapi({ description: 'Card Acceptor Name.' }),
        })
        .openapi({
          description: 'WorldlineAtosFrankfurt settings.',
          required: ['cardAcceptorName', 'cardAcceptorLocation', 'cardAcceptorCountryCode'],
        }),
      threeDSecureServer: WorldlineAtosFrankfurt3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['credentials', 'settings'] }),
)
  .openapi({ description: 'WorldlineAtosFrankfurt Gateway config.' })
  .openapi('WorldlineAtosFrankfurt')

const WorldpaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          merchantCode: z.string().openapi({ description: 'Worldpay Gateway merchant code.' }),
          merchantPassword: z
            .string()
            .openapi({ description: 'Worldpay Gateway merchant password.' }),
          payoutMerchantCode: z
            .string()
            .exactOptional()
            .openapi({ description: 'Optional alternate merchant code for payouts.' }),
          payoutMerchantPassword: z
            .string()
            .exactOptional()
            .openapi({ description: 'Optional alternate merchant password for payouts.' }),
        })
        .openapi({ required: ['merchantCode', 'merchantPassword'] }),
      settings: z
        .object({
          delay: z
            .int()
            .min(0)
            .default(0)
            .exactOptional()
            .openapi({ description: 'Auto Capture delay (in hours).' }),
          enableStoredCredentials: z
            .boolean()
            .default(false)
            .exactOptional()
            .openapi({ description: 'True to enable Stored Credentials.' }),
          merchantInitiatedReason: z
            .enum([
              'UNSCHEDULED',
              'RECURRING',
              'INSTALMENT',
              'REAUTH',
              'DELAYED',
              'INCREMENTAL',
              'RESUBMISSION',
              'NOSHOW',
            ])
            .default('UNSCHEDULED')
            .exactOptional()
            .openapi({
              description:
                'The value of merchantInitiatedReason to send with merchant-initiated transactions.',
            }),
        })
        .exactOptional()
        .openapi({ required: [] }),
      threeDSecureServer: Worldpay3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Worldpay Gateway config.' })
  .openapi('Worldpay')

const XPaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ encryptionKey: z.string(), merchantId: z.string() })
        .openapi({
          description: 'XPay credentials object.',
          required: ['merchantId', 'encryptionKey'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'XPay config.' })
  .openapi('XPay')

const ZimplerSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiKey: z.string().openapi({ description: 'Zimpler API key.' }),
          merchantId: z.string().openapi({ description: 'Zimpler merchant id.' }),
        })
        .openapi({
          description: 'Zimpler credentials object.',
          required: ['merchantId', 'apiKey'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Zimpler config.' })
  .openapi('Zimpler')

const ZotapaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          endpointId: z.string().openapi({ description: "Zotapay's endpoint ID." }),
          merchantId: z.string().openapi({ description: "Zotapay's merchant ID." }),
          merchantSecretKey: z.string().openapi({ description: "Zotapay's merchant secret key." }),
        })
        .openapi({ required: ['endpointId', 'merchantId', 'merchantSecretKey'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'Zotapay Gateway config.' })
  .openapi('Zotapay')

const AutoSchema = CommonScheduleInstructionSchema.openapi('Auto')

const DLocalSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ secretKey: z.string(), xLogin: z.string(), xTransKey: z.string() })
        .openapi({ required: ['xLogin', 'xTransKey', 'secretKey'] }),
      settings: z
        .object({
          createInstallmentPlan: z
            .boolean()
            .default(false)
            .exactOptional()
            .openapi({ description: 'Create installment plan and use it for payment.' }),
        })
        .exactOptional()
        .openapi({ description: 'dLocal settings object.', required: [] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'dLocal config.' })
  .openapi('DLocal')

const DateIntervalSchema = CommonScheduleInstructionSchema.and(CustomEventScheduleInstructionSchema)
  .and(InvoiceRetryScheduleInstructionSchema)
  .and(
    z
      .object({
        duration: z.int().min(1).openapi({ description: 'The number of the units.' }),
        unit: z.xor([TimeUnitSchema, TimePluralUnitSchema]),
      })
      .openapi({ required: ['duration', 'unit'] }),
  )
  .openapi('DateInterval')

const DayOfMonthSchema = CommonScheduleInstructionSchema.and(CustomEventScheduleInstructionSchema)
  .and(ServicePeriodAnchorInstructionSchema)
  .and(InvoiceRetryScheduleInstructionSchema)
  .and(
    z
      .object({
        day: z
          .int()
          .min(1)
          .max(31)
          .openapi({
            description:
              'The day of the month when event will be scheduled.\nBe aware if the month has less days,\nthe last day of the month will be selected.\n',
          }),
        time: TimeIso8601ExtendedSchema.exactOptional(),
      })
      .openapi({ required: ['day'] }),
  )
  .openapi('DayOfMonth')

const DayOfWeekSchema = CommonScheduleInstructionSchema.and(CustomEventScheduleInstructionSchema)
  .and(ServicePeriodAnchorInstructionSchema)
  .and(InvoiceRetryScheduleInstructionSchema)
  .and(
    z
      .object({
        day: DayOfWeekLongSchema,
        time: TimeIso8601ExtendedSchema.exactOptional(),
        week: z.enum(['next', 'first-in-month', 'last-in-month']).default('next').exactOptional(),
      })
      .openapi({ required: ['day'] }),
  )
  .openapi('DayOfWeek')

const Discount2Schema = AmountAdjustmentSchema.and(
  z
    .object({
      type: z
        .enum(['percent', 'fixed'])
        .openapi({ description: 'The payment amount discount type.' }),
      value: z.float32().openapi({ description: 'The payment amount discount.' }),
    })
    .openapi({ required: ['value', 'type'] }),
).openapi('Discount2')

const DiscountsPerRedemptionSchema = CouponRestrictionSchema.and(RedemptionRestrictionSchema)
  .and(
    z
      .object({ quantity: z.int().openapi({ description: 'Restriction quantity.' }) })
      .openapi({ required: ['quantity'] }),
  )
  .openapi({ description: 'discounts-per-redemption restrictions.' })
  .openapi('DiscountsPerRedemption')

const EMerchantPaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiKey: z
            .string()
            .exactOptional()
            .openapi({ description: 'eMerchantPay Gateway api key.' }),
          clientId: z
            .string()
            .exactOptional()
            .openapi({ description: 'eMerchantPay Gateway client ID.' }),
          password: z
            .string()
            .exactOptional()
            .openapi({ description: 'eMerchantPay password for Genesis platform.' }),
          token: z
            .string()
            .exactOptional()
            .openapi({ description: 'eMerchantPay token for Genesis platform.' }),
          username: z
            .string()
            .exactOptional()
            .openapi({ description: 'eMerchantPay username for Genesis platform.' }),
        })
        .openapi({ required: [] }),
      settings: z
        .object({
          platform: z
            .enum(['IPG', 'Genesis'])
            .default('IPG')
            .exactOptional()
            .openapi({ description: 'eMerchantPay platform to process payment.' }),
        })
        .exactOptional()
        .openapi({ description: 'eMerchantPay settings object.', required: [] }),
      threeDSecureServer: EMerchantPay3dsServersSchema.exactOptional(),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'eMerchantPay Gateway config.' })
  .openapi('EMerchantPay')

const EMerchantPay3dsServerSchema = EMerchantPay3dsServersSchema.openapi({
  description: 'eMerchantPay 3DS Server.',
}).openapi('EMerchantPay3dsServer')

const EZeeWalletSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiPassword: z.string().openapi({ description: 'eZeeWallet API password.' }),
          apiUsername: z.string().openapi({ description: 'eZeeWallet API username.' }),
        })
        .openapi({
          description: 'eZeeWallet credentials object.',
          required: ['apiUsername', 'apiPassword'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'eZeeWallet config.' })
  .openapi('EZeeWallet')

const EcoPayzSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          merchantAccountNumber: z
            .string()
            .openapi({ description: 'ecoPayz merchant account number.' }),
          merchantPassword: z.string().openapi({ description: 'ecoPayz merchant password.' }),
          paymentPageId: z.string().openapi({ description: 'ecoPayz payment page ID.' }),
        })
        .openapi({
          description: 'ecoPayz credentials object.',
          required: ['paymentPageId', 'merchantAccountNumber', 'merchantPassword'],
        }),
      settings: z
        .object({
          validCurrency: z
            .enum(['CAD', 'EUR', 'GBP', 'USD'])
            .openapi({ description: 'Three letter currency code.' }),
        })
        .exactOptional()
        .openapi({ description: 'ecoPayz settings object.', required: ['validCurrency'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'ecoPayz config.' })
  .openapi('EcoPayz')

const EzyEFTSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ merchantId: z.string(), merchantToken: z.string() })
        .openapi({
          description: 'ezyEFT credentials object.',
          required: ['merchantId', 'merchantToken'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'ezyEFT config.' })
  .openapi('EzyEFT')

const FixedSchema = DiscountSchema.and(
  z
    .object({
      amount: z.float64().positive().openapi({ description: 'Discount amount.' }),
      currency: CurrencyCodeSchema,
    })
    .openapi({ required: ['amount', 'currency'] }),
)
  .openapi({ description: 'Coupon fixed amount discount.' })
  .openapi('Fixed')

const FixedFeeSchema = PlanPriceFormulaSchema.and(
  z
    .object({
      price: z
        .float64()
        .openapi({
          description:
            "For the very simple price when it's fixed and does not depend on the quantity chosen by customer.\n\nIf the price is 0, it's free.\n",
          example: 99.95,
        }),
    })
    .openapi({ required: ['price'] }),
).openapi('FixedFee')

const FlatRateSchema = PlanPriceFormulaSchema.and(
  z
    .object({
      maxQuantity: z
        .int()
        .exactOptional()
        .openapi({
          description: "If the value is `null`, it''s assumed to be infinite.",
          example: 1,
        }),
      price: z
        .float64()
        .openapi({
          description:
            "Flat-rate pricing is represented in a simple price per unit.\nSome examples:\n\n- $30 per unit\n- $0.10 per transaction\n- $50 per period\n\nIf the price is 0, it's free.\n",
          example: 99.95,
        }),
    })
    .openapi({ required: ['price'] }),
).openapi('FlatRate')

const ICanPaySchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          authenticateId: z.string().openapi({ description: 'iCanPay Gateway authenticate ID.' }),
          authenticatePw: z
            .string()
            .openapi({ description: 'iCanPay Gateway authenticate password.' }),
          publicKey: z.string().openapi({ description: 'iCanPay Gateway API public key.' }),
          secretKey: z.string().openapi({ description: 'iCanPay Gateway API secret key.' }),
        })
        .openapi({ required: ['authenticateId', 'authenticatePw', 'publicKey', 'secretKey'] }),
      settings: z
        .object({
          use3DSEndpoint: z.boolean().exactOptional().openapi({ description: 'Use 3DS endpoint.' }),
        })
        .exactOptional()
        .openapi({ required: [] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'iCanPay Gateway config.' })
  .openapi('ICanPay')

const IChequeSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          apiSecurityToken: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Hash of the password for the Alliance API (transaction reporting).',
            }),
          apiUserId: z
            .string()
            .exactOptional()
            .openapi({ description: 'Username for the Alliance API (transaction reporting).' }),
          clientId: z.string().openapi({ description: 'iCheque Gateway client ID.' }),
          secretWord: z.string().openapi({ description: 'iCheque Gateway secret word.' }),
        })
        .openapi({ required: ['clientId', 'secretWord'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'iCheque Gateway config.' })
  .openapi('ICheque')

const IDebitSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          merchantId: z.string().openapi({ description: 'iDebit merchant account number.' }),
          password: z.string().openapi({ description: 'iDebit merchant account password.' }),
        })
        .openapi({
          description: 'iDebit credentials object.',
          required: ['merchantId', 'password'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'iDebit config.' })
  .openapi('IDebit')

const ImmediatelySchema = CommonScheduleInstructionSchema.and(ServicePeriodAnchorInstructionSchema)
  .and(InvoiceRetryScheduleInstructionSchema)
  .openapi('Immediately')

const IntelligentSchema = CommonScheduleInstructionSchema.and(CustomEventScheduleInstructionSchema)
  .and(InvoiceRetryScheduleInstructionSchema)
  .and(
    z
      .object({
        duration: z.int().min(1).openapi({ description: 'The number of the units.' }),
        unit: z.xor([TimeUnitSchema, TimePluralUnitSchema]),
      })
      .openapi({ required: ['duration', 'unit'] }),
  )
  .openapi('Intelligent')

const ListSchema = TimelineTableSchema.and(
  z
    .object({
      data: z
        .array(z.string())
        .exactOptional()
        .openapi({ description: 'Table data. Each array element represents a line.' }),
    })
    .openapi({ required: [] }),
).openapi('List')

const LoonieSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({ merchantId: z.string(), merchantToken: z.string() })
        .openapi({
          description: 'loonie credentials object.',
          required: ['merchantId', 'merchantToken'],
        }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'loonie config.' })
  .openapi('Loonie')

const ManualSchema = InvoiceShippingSchema.and(
  z
    .object({
      amount: z.int().openapi({ description: "The invoice's shipping amount.", 'x-type': 'Money' }),
    })
    .openapi({ required: ['amount'] }),
)
  .openapi({ description: 'Manually set shipping amount.' })
  .openapi('Manual')

const Manual_2Schema = InvoiceTaxSchema.and(
  z
    .object({
      items: z
        .array(InvoiceTaxItemSchema)
        .exactOptional()
        .openapi({ description: 'Taxes applied to this invoice.' }),
    })
    .openapi({ required: ['amount'] }),
)
  .openapi({ description: 'Manually set tax items.' })
  .openapi('Manual_2')

const MinimumOrderAmountSchema = CouponRestrictionSchema.and(RedemptionRestrictionSchema)
  .and(
    z
      .object({
        amount: z.int().openapi({ description: 'Minimum order quantity.' }),
        currency: CurrencyCodeSchema,
      })
      .openapi({ required: ['amount', 'currency'] }),
  )
  .openapi({ description: 'minimum-order-amount restrictions.' })
  .openapi('MinimumOrderAmount')

const OneColumnSchema = TimelineTableSchema.and(
  z
    .object({
      data: z
        .array(
          z
            .object({ attribute: z.string().exactOptional(), value: z.string().exactOptional() })
            .openapi({ example: { attribute: 'Who', value: 'John Doe' }, required: [] }),
        )
        .exactOptional()
        .openapi({ description: 'Table data. Each array element represents a table row.' }),
    })
    .openapi({ required: [] }),
).openapi('OneColumn')

const PaidByTimeSchema = CouponRestrictionSchema.and(RedemptionRestrictionSchema)
  .and(
    z
      .object({
        time: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              "The time when the coupon's redemption is no longer valid and removed from unpaid invoices if applied. Note that this datetime cannot be changed.",
          }),
      })
      .openapi({ required: ['time'] }),
  )
  .openapi({ description: 'paid-by-time restrictions.' })
  .openapi('PaidByTime')

const PartialSchema = AmountAdjustmentSchema.and(
  z
    .object({
      type: z.enum(['percent', 'fixed']).openapi({ description: 'The payment amount type.' }),
      value: z.float32().openapi({ description: 'The payment amount.' }),
    })
    .openapi({ required: ['value', 'type'] }),
).openapi('Partial')

const PasswordSchema = AuthenticationTokenSchema.and(
  z
    .object({
      customerId: ResourceIdSchema.exactOptional().openapi({
        description: "The token's customer ID.",
        readOnly: true,
      }),
      password: z
        .string()
        .exactOptional()
        .openapi({ description: "The token's password.", writeOnly: true }),
      username: z.string().exactOptional().openapi({ description: "The token's username." }),
    })
    .openapi({ required: [] }),
)
  .and(AuthenticationTokenMetadataSchema)
  .openapi({ required: ['username', 'password'] })
  .openapi('Password')

const PasswordlessSchema = AuthenticationTokenSchema.and(
  z
    .object({
      customerId: ResourceIdSchema.exactOptional().openapi({
        description: "The token's customer ID.",
      }),
    })
    .openapi({ required: [] }),
)
  .and(AuthenticationTokenMetadataSchema)
  .openapi({ required: ['customerId'] })
  .openapi('Passwordless')

const PercentSchema = DiscountSchema.and(
  z
    .object({
      value: z.float64().positive().max(100).openapi({ description: 'Discount percent.' }),
    })
    .openapi({ required: ['value'] }),
)
  .openapi({ description: 'Coupon percent discount.' })
  .openapi('Percent')

const RebillySchema = InvoiceShippingSchema.and(
  z
    .object({
      amount: z
        .int()
        .exactOptional()
        .openapi({
          description:
            "The invoice's shipping amount which is calculated from [Shipping Zones](#tag/Shipping-Zones).",
          readOnly: true,
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Rebilly-based shipping which is calculated by shipping zones.' })
  .openapi('Rebilly')

const RebillyTaxjarSchema = InvoiceTaxSchema.and(
  z
    .object({
      items: z
        .array(InvoiceTaxItemSchema)
        .exactOptional()
        .openapi({
          description:
            "Taxes applied to this invoice and calculated based on the related Product's `taxCategoryId`.\n",
          readOnly: true,
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Taxjar-based taxes.' })
  .openapi('RebillyTaxjar')

const RedemptionCancelSchema = TimelineActionSchema.and(
  z.object({ redemptionId: ResourceIdSchema.exactOptional() }).openapi({ required: [] }),
)
  .openapi({ description: 'Cancel Redemption.' })
  .openapi('RedemptionCancel')

const RedemptionsPerCustomerSchema = CouponRestrictionSchema.and(RedemptionRestrictionSchema)
  .and(
    z
      .object({ quantity: z.int().openapi({ description: 'Restriction value.' }) })
      .openapi({ required: ['quantity'] }),
  )
  .openapi({ description: 'Quantity per Customer restrictions.' })
  .openapi('RedemptionsPerCustomer')

const ResendEmailSchema = TimelineActionSchema.and(
  z.object({ messageId: ResourceIdSchema.exactOptional() }).openapi({ required: [] }),
)
  .openapi({ description: 'Resend Email action.' })
  .openapi('ResendEmail')

const RestrictToInvoicesSchema = CouponRestrictionSchema.and(RedemptionRestrictionSchema)
  .and(
    z
      .object({
        invoiceIds: z
          .array(z.string())
          .openapi({ description: 'Invoice IDs coupon can be applied to.' }),
      })
      .openapi({ required: ['invoiceIds'] }),
  )
  .openapi({ description: 'restrict-to-invoices restrictions.' })
  .openapi('RestrictToInvoices')

const RestrictToPlansSchema = CouponRestrictionSchema.and(RedemptionRestrictionSchema)
  .and(
    z
      .object({
        planIds: z.array(z.string()).openapi({ description: 'Plan IDs coupon can be applied to.' }),
      })
      .openapi({ required: ['planIds'] }),
  )
  .openapi({ description: 'restrict-to-plans restrictions.' })
  .openapi('RestrictToPlans')

const RestrictToProductsSchema = CouponRestrictionSchema.and(RedemptionRestrictionSchema)
  .and(
    z
      .object({
        productIds: z
          .array(z.string())
          .openapi({ description: 'Product IDs coupon can be applied to.' }),
      })
      .openapi({ required: ['productIds'] }),
  )
  .openapi({ description: 'restrict-to-products restrictions.' })
  .openapi('RestrictToProducts')

const RestrictToSubscriptionsSchema = CouponRestrictionSchema.and(RedemptionRestrictionSchema)
  .and(
    z
      .object({
        subscriptionIds: z
          .array(z.string())
          .openapi({ description: 'Order IDs coupon can be applied to.' }),
      })
      .openapi({ required: ['subscriptionIds'] }),
  )
  .openapi({ description: 'restrict-to-subscriptions restrictions.' })
  .openapi('RestrictToSubscriptions')

const RulesetRestoreSchema = TimelineActionSchema.and(
  z
    .object({
      version: z.int().exactOptional().openapi({ description: 'Rulset version to restore.' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Restore ruleset version.' })
  .openapi('RulesetRestore')

const StairstepSchema = PlanPriceFormulaSchema.and(
  z
    .object({
      brackets: z
        .array(
          z
            .object({
              maxQuantity: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "If the value is `null`, it's assumed to be infinite.  It starts at the end of the previous bracket.\nIf there is no previous bracket, it starts at 1.\n",
                  example: 1,
                }),
              price: z
                .float64()
                .exactOptional()
                .openapi({ description: 'If the price is 0, it is free.', example: 99.95 }),
            })
            .openapi({ required: [] }),
        )
        .min(1)
        .openapi({
          description:
            'The price brackets, along with the price formula,\nis used to calculate the amount to charge for the product on this plan on the invoice.\n\nThe "stairstep" example:\n\nPrice total | Max quantity | Description\n------------|--------------|------------\n$5          | 1            | 1\n$13         | 5            | 2 to 5\n$30         | null         | 6 or more\n\nIf someone bought 1 apple, it would be $5.\n\nIf someone bought 2 apples, it would be $13. For 2 to 5 apples, the price is $13 in any case.\n',
        }),
    })
    .openapi({ required: ['brackets'] }),
).openapi('Stairstep')

const ThreeColumnsSchema = TimelineTableSchema.and(
  z
    .object({
      data: z
        .array(
          z
            .object({
              attribute: z.string().exactOptional(),
              newValue: z.string().exactOptional(),
              previousValue: z.string().exactOptional(),
            })
            .openapi({
              example: {
                attribute: 'Descriptor',
                newValue: 'new-test.com',
                previousValue: 'test.com',
              },
              required: [],
            }),
        )
        .exactOptional()
        .openapi({ description: 'Table data. Each array element represents a table row.' }),
    })
    .openapi({ required: [] }),
).openapi('ThreeColumns')

const TieredSchema = PlanPriceFormulaSchema.and(
  z
    .object({
      brackets: z
        .array(
          z
            .object({
              maxQuantity: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "If the value is `null`, it's assumed to be infinite.  It starts at the end of the previous bracket.\nIf there is no previous bracket, it starts at 1.\n",
                  example: 1,
                }),
              price: z
                .float64()
                .exactOptional()
                .openapi({ description: 'If the price is 0, it is free.', example: 99.95 }),
            })
            .openapi({ required: [] }),
        )
        .min(1)
        .openapi({
          description:
            'The price brackets, along with the price formula,\nis used to calculate the amount to charge for the product on this plan on the invoice.\n\nThe "tiered" example:\n\nPrice per apple | Max quantity | Description\n----------------|--------------|------------\n$5              | 1            | 1\n$4              | 5            | 2 to 5\n$3              | null         | 6 or more\n\nIf someone bought 1 apple, it would be $5.\n\nIf someone bought 2 apples, it would be $9. $5 per apple for the first apple, then $4 per apple for the 2nd to 5th apple.\n',
        }),
    })
    .openapi({ required: ['brackets'] }),
).openapi('Tiered')

const TotalRedemptionsSchema = CouponRestrictionSchema.and(RedemptionRestrictionSchema)
  .and(
    z
      .object({ quantity: z.int().openapi({ description: 'Total redemptions quantity.' }) })
      .openapi({ required: ['quantity'] }),
  )
  .openapi({ description: 'total-redemptions restrictions.' })
  .openapi('TotalRedemptions')

const TwoColumnsSchema = TimelineTableSchema.and(
  z
    .object({
      data: z
        .array(
          z
            .object({ attribute: z.string().exactOptional(), value: z.string().exactOptional() })
            .openapi({ example: { attribute: 'Who', value: 'John Doe' }, required: [] }),
        )
        .exactOptional()
        .openapi({ description: 'Table data. Each array element represents a table row.' }),
    })
    .openapi({ required: [] }),
).openapi('TwoColumns')

const VegaaHSchema = GatewayAccountSchema.and(
  z
    .object({
      credentials: z
        .object({
          password: z.string().openapi({ description: 'vegaaH Gateway password.' }),
          terminalId: z.string().openapi({ description: 'vegaaH Gateway terminal ID.' }),
        })
        .openapi({ required: ['terminalId', 'password'] }),
    })
    .openapi({ required: ['credentials'] }),
)
  .openapi({ description: 'vegaaH Gateway config.' })
  .openapi('VegaaH')

const VolumeSchema = PlanPriceFormulaSchema.and(
  z
    .object({
      brackets: z
        .array(
          z
            .object({
              maxQuantity: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "If the value is `null`, it's assumed to be infinite.  It starts at the end of the previous bracket.\nIf there is no previous bracket, it starts at 1.\n",
                  example: 1,
                }),
              price: z
                .float64()
                .exactOptional()
                .openapi({ description: 'If the price is 0, it is free.', example: 99.95 }),
            })
            .openapi({ required: [] }),
        )
        .min(1)
        .openapi({
          description:
            'The price brackets, along with the price formula,\nis used to calculate the amount to charge for the product on this plan on the invoice.\n\nThe "volume" example:\n\nPrice per apple | Max quantity | Description\n----------------|--------------|------------\n$5              | 1            | 1\n$4              | 5            | 2 to 5\n$3              | null         | 6 or more\n\nIf someone bought 1 apple, it would be $5.\n\nIf someone bought 2 apples, it would be $8. For 2 to 5 apples, the price is $4 per apple.\n',
        }),
    })
    .openapi({ required: ['brackets'] }),
).openapi('Volume')

const ConflictResponse = {
  description: 'Conflict.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const RateLimitLimitHeaderSchema = z
  .int()
  .exactOptional()
  .openapi({
    description: 'The number of allowed requests in the current period.',
    param: { required: false },
  })

const RateLimitRemainingHeaderSchema = z
  .int()
  .exactOptional()
  .openapi({
    description: 'The number of remaining requests in the current period.',
    param: { required: false },
  })

const RateLimitResetHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description:
      'The date in format defined by [RFC 822](https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1)\nwhen the current period will reset.\n',
    param: { required: false },
  })

const CustomerResponse = {
  description: 'Customer.',
  content: { 'application/json': { schema: CustomerSchema } },
  headers: z.object({
    'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
    'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
    'Rate-Limit-Reset': RateLimitResetHeaderSchema,
  }),
}

const ForbiddenResponse = {
  description: 'Access forbidden.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const FoundResponse = {
  description: 'Resource was moved.',
  headers: z.object({
    Location: {
      schema: z
        .string()
        .exactOptional()
        .openapi({ param: { required: false } }),
    },
  }),
}

const NotFoundResponse = {
  description: 'Resource was not found.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const UnauthorizedResponse = {
  description: 'Unauthorized access, invalid credentials was used.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const ValidationErrorResponse = {
  description: 'Invalid data was sent.',
  content: { 'application/json': { schema: InvalidErrorSchema } },
}

const CollectionExpandParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Expand a response to get a full related object included inside of the `_embedded` path in the response.\nIt accepts a comma-separated list of objects to expand.\nSee the [expand guide](https://api-reference.rebilly.com/#section/Expand-to-include-embedded-objects) for more info.\n',
      in: 'query',
      name: 'expand',
      schema: { type: 'string' },
      required: false,
    },
  })

const CollectionFieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Limit the returned fields to the list specified, separated by comma. Note that id is always returned.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const CollectionFilterParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The collection items filter requires a special format.\nUse "," for multiple allowed values.  Use ";" for multiple fields.\nSee the [filter guide](https://api-reference.rebilly.com/#section/Using-filter-with-collections) for more options and examples about this format.\n',
      in: 'query',
      name: 'filter',
      schema: { type: 'string' },
      required: false,
    },
  })

const CollectionLimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0).max(1000),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'The collection items limit.',
      in: 'query',
      name: 'limit',
      schema: { maximum: 1000, minimum: 0, type: 'integer' },
      required: false,
    },
  })

const CollectionOffsetParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'The collection items offset.',
      in: 'query',
      name: 'offset',
      schema: { minimum: 0, type: 'integer' },
      required: false,
    },
  })

const CollectionQueryParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The partial search of the text fields.',
      in: 'query',
      name: 'q',
      schema: { type: 'string' },
      required: false,
    },
  })

const CollectionSortParamsSchema = z
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
      description:
        'The collection items sort field and order (prefix with "-" for descending sort).',
      explode: false,
      in: 'query',
      name: 'sort',
      schema: { items: { type: 'string' }, type: 'array' },
      style: 'form',
      required: false,
    },
  })

const CustomFieldResourceParamsSchema = z
  .enum([
    'customers',
    'payment-instruments',
    'subscriptions',
    'transactions',
    'websites',
    'products',
    'plans',
    'bump-offers',
  ])
  .openapi({
    param: {
      description: 'The resource type string.',
      in: 'path',
      name: 'resource',
      required: true,
      schema: {
        enum: [
          'customers',
          'payment-instruments',
          'subscriptions',
          'transactions',
          'websites',
          'products',
          'plans',
          'bump-offers',
        ],
        type: 'string',
      },
    },
  })

const CustomerIdParamsSchema = z
  .string()
  .regex(/^[@~\-\.\w]+$/)
  .max(50)
  .openapi({
    param: {
      description: 'The customer identifier string.',
      in: 'path',
      name: 'customerId',
      required: true,
      schema: { maxLength: 50, pattern: '^[@~\\-\\.\\w]+$', type: 'string' },
    },
  })

const ImageSizeParamsSchema = z
  .string()
  .regex(/^[1-9]{1}[0-9]{1,3}x[1-9]{1}[0-9]{1,3}$/)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Resize image to specified size. Supports any sizes from 10x10 to 2000x2000 (format `{width}x{height}`). The image will be returned in the original size if the value is invalid. This parameter will be ignored for non-image files.',
      in: 'query',
      name: 'imageSize',
      schema: {
        example: '700x700',
        pattern: '^[1-9]{1}[0-9]{1,3}x[1-9]{1}[0-9]{1,3}$',
        type: 'string',
      },
      required: false,
    },
    example: '700x700',
  })

const MediaTypeJsonPdfParamsSchema = z
  .enum(['application/json', 'application/pdf'])
  .default('application/json')
  .exactOptional()
  .openapi({
    param: {
      description: 'The response media type.',
      in: 'header',
      name: 'Accept',
      schema: {
        default: 'application/json',
        enum: ['application/json', 'application/pdf'],
        type: 'string',
      },
      required: false,
    },
  })

const OrganizationIdParamsSchema = ResourceIdSchema.openapi({
  param: {
    description:
      'Organization identifier in scope of which need to perform request (if not specified, the default organization will be used).',
    in: 'header',
    name: 'Organization-Id',
    required: false,
    schema: { $ref: '#/components/schemas/ResourceId' },
  },
}).exactOptional()

const ResourceIdParamsSchema = z
  .string()
  .regex(/^[@~\-\.\w]+$/)
  .max(50)
  .openapi({
    param: {
      description: 'The resource identifier string.',
      in: 'path',
      name: 'id',
      required: true,
      schema: { maxLength: 50, pattern: '^[@~\\-\\.\\w]+$', type: 'string' },
    },
  })

const SubscriptionExpandParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Expand a response to get a full related object included inside of the `_embedded` path in the response.\nTo expand multiple objects, it accepts a comma-separated list of objects (example: `expand=recentInvoice,initialInvoice`).\nAvailable arguments are:\n  - recentInvoice\n  - initialInvoice\n  - customer\n  - website\n\nSee the [expand guide](https://api-reference.rebilly.com/#section/Expand-to-include-embedded-objects) for more info.\n',
      in: 'query',
      name: 'expand',
      schema: { type: 'string' },
      required: false,
    },
  })

const TagParamsSchema = z
  .string()
  .regex(/^[@~\-\.\w\s]+$/)
  .openapi({
    param: {
      description: 'The tag name.',
      in: 'path',
      name: 'tag',
      required: true,
      schema: { pattern: '^[@~\\-\\.\\w\\s]+$', type: 'string' },
    },
  })

const AttachmentRequestBody = {
  description: 'Attachment resource.',
  content: { 'application/json': { schema: AttachmentSchema } },
  required: true,
}

const BlocklistRequestBody = {
  description: 'Blocklist resource.',
  content: { 'application/json': { schema: BlocklistSchema } },
  required: true,
}

const CouponRequestBody = {
  description: 'Coupon resource.',
  content: { 'application/json': { schema: CouponSchema } },
  required: true,
}

const CredentialRequestBody = {
  description: 'Credential resource.',
  content: { 'application/json': { schema: CredentialSchema } },
  required: true,
}

const CustomerRequestBody = {
  description: 'Customer resource.',
  content: { 'application/json': { schema: CustomerSchema } },
  required: true,
}

const Customer_2RequestBody = {
  description: 'Customer webhook request body resource.',
  content: {
    'application/json': {
      schema: z
        .object({
          _embedded: z
            .object({ customer: CustomerSchema.exactOptional() })
            .exactOptional()
            .openapi({ required: [] }),
          _links: z
            .array(z.union([CustomerLinkSchema]))
            .min(1)
            .exactOptional()
            .openapi({ description: 'The links related to resource.' }),
          customerId: z.string().exactOptional().openapi({ description: 'The customer ID.' }),
          eventType: GlobalWebhookEventTypeSchema.exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const DisputeRequestBody = {
  description: 'Dispute resource.',
  content: { 'application/json': { schema: DisputeSchema } },
  required: true,
}

const Dispute_2RequestBody = {
  description: 'Dispute webhook request body resource.',
  content: {
    'application/json': {
      schema: z
        .object({
          _embedded: z
            .object({ dispute: DisputeSchema.exactOptional() })
            .exactOptional()
            .openapi({ required: [] }),
          _links: z
            .array(z.union([DisputeLinkSchema]))
            .min(1)
            .exactOptional()
            .openapi({ description: 'The links related to resource.' }),
          disputeId: z.string().exactOptional().openapi({ description: 'The dispute ID.' }),
          eventType: GlobalWebhookEventTypeSchema.exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const ExperianCheckPerformedRequestBody = {
  description: 'Experian check performed webhook request body resource.',
  content: {
    'application/json': {
      schema: z
        .object({
          _embedded: z
            .object({ customer: CustomerSchema.exactOptional() })
            .exactOptional()
            .openapi({ description: 'Customer object.', required: [] }),
          _links: z
            .array(z.union([CustomerLinkSchema]))
            .min(1)
            .exactOptional()
            .openapi({ description: 'The links related to resource.' }),
          customerId: z
            .string()
            .exactOptional()
            .openapi({ description: 'The ID of the checked customer.' }),
          errorCode: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Error code produced by the Experian system.',
              example: '001',
            }),
          errorMessage: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Error message produced by the Experian system.',
              example: 'Authentication Error: Bad Username or Password',
            }),
          eventType: GlobalWebhookEventTypeSchema.exactOptional(),
          outcome: z
            .union([z.literal(-1), z.literal(0), z.literal(1)])
            .exactOptional()
            .openapi({
              description:
                'The check decision where `1` - record matches, `0` - no matches found, `-1` - record mismatches.',
              example: 1,
            }),
          reason: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The text representation of the outcome.',
              example:
                'Individual has a 90 percent or greater match to forename surname premise postcode with ID verified and DOB',
            }),
        })
        .openapi({ required: [] }),
    },
  },
}

const GatewayAccountRequestBody = {
  description: 'Gateway account limit was reached body resource.',
  content: {
    'application/json': {
      schema: z
        .object({
          _embedded: z
            .object({ gatewayAccount: GatewayAccountSchema.exactOptional() })
            .exactOptional()
            .openapi({ required: [] }),
          _links: z
            .array(z.union([GatewayAccountLinkSchema]))
            .min(1)
            .exactOptional()
            .openapi({ description: 'The links related to resource.' }),
          eventType: GlobalWebhookEventTypeSchema.exactOptional(),
          gatewayAccountId: z
            .string()
            .exactOptional()
            .openapi({ description: 'The gateway account ID.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const GatewayAccountAndGatewayAccountLimitRequestBody = {
  description: 'Gateway account limit was reached body resource.',
  content: {
    'application/json': {
      schema: z
        .object({
          _embedded: z
            .object({
              gatewayAccount: GatewayAccountSchema.exactOptional(),
              gatewayAccountLimit: GatewayAccountLimitSchema.exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
          _links: z
            .array(z.union([GatewayAccountLinkSchema, GatewayAccountLimitLinkSchema]))
            .min(2)
            .exactOptional()
            .openapi({ description: 'The links related to resource.' }),
          eventType: GlobalWebhookEventTypeSchema.exactOptional(),
          gatewayAccountId: z
            .string()
            .exactOptional()
            .openapi({ description: 'The gateway account ID.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const InvoiceRequestBody = {
  description: 'Invoice resource.',
  content: { 'application/json': { schema: InvoiceSchema } },
  required: true,
}

const Invoice_2RequestBody = {
  description: 'Invoice webhook request body resource.',
  content: {
    'application/json': {
      schema: z
        .object({
          _embedded: z
            .object({ invoice: InvoiceSchema.exactOptional() })
            .exactOptional()
            .openapi({ required: [] }),
          _links: z
            .array(z.union([InvoiceLinkSchema]))
            .min(1)
            .exactOptional()
            .openapi({ description: 'The links related to resource.' }),
          eventType: GlobalWebhookEventTypeSchema.exactOptional(),
          invoiceId: z.string().exactOptional().openapi({ description: 'The invoice ID.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const InvoiceAndSubscriptionRequestBody = {
  description: 'Invoice and Order webhook request body resource.',
  content: {
    'application/json': {
      schema: z
        .object({
          _embedded: z
            .object({
              invoice: InvoiceSchema.exactOptional(),
              subscription: SubscriptionSchema.exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
          _links: z
            .array(z.union([SubscriptionLinkSchema, InvoiceLinkSchema]))
            .min(2)
            .exactOptional()
            .openapi({ description: 'The links related to resource.' }),
          eventType: GlobalWebhookEventTypeSchema.exactOptional(),
          invoiceId: z.string().exactOptional().openapi({ description: 'The invoice ID.' }),
          subscriptionId: z.string().exactOptional().openapi({ description: 'The order ID.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const InvoiceAndTransactionRequestBody = {
  description: 'Invoice and Transaction webhook request body resource.',
  content: {
    'application/json': {
      schema: z
        .object({
          _embedded: z
            .object({
              invoice: InvoiceSchema.exactOptional(),
              transaction: TransactionSchema.exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
          _links: z
            .array(z.union([TransactionLinkSchema, InvoiceLinkSchema]))
            .min(2)
            .exactOptional()
            .openapi({ description: 'The links related to resource.' }),
          eventType: GlobalWebhookEventTypeSchema.exactOptional(),
          invoiceId: z.string().exactOptional().openapi({ description: 'The invoice ID.' }),
          transactionId: z.string().exactOptional().openapi({ description: 'The transaction ID.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const KycDocumentRequestBody = {
  description: 'KYC document webhook request body resource.',
  content: {
    'application/json': {
      schema: z
        .object({
          _embedded: z
            .object({
              customer: CustomerSchema.exactOptional(),
              kycDocument: KycDocument_2Schema.exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
          _links: z
            .array(z.union([CustomerLinkSchema, FileLinkSchema, KycDocumentLinkSchema]))
            .min(3)
            .exactOptional()
            .openapi({ description: 'The links related to resource.' }),
          customerId: z.string().exactOptional().openapi({ description: 'The customer ID.' }),
          eventType: GlobalWebhookEventTypeSchema.exactOptional(),
          fileId: z.string().exactOptional().openapi({ description: 'The file ID.' }),
          kycDocumentId: z
            .string()
            .exactOptional()
            .openapi({ description: 'The KYC document ID.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const MergedCustomerRequestBody = {
  description: 'Merged customer webhook request body resource.',
  content: {
    'application/json': {
      schema: z
        .object({
          _embedded: z
            .object({ targetCustomer: CustomerSchema.exactOptional() })
            .exactOptional()
            .openapi({ description: 'Customer object.', required: [] }),
          _links: z
            .array(z.union([CustomerLinkSchema]))
            .min(1)
            .exactOptional()
            .openapi({ description: 'The links related to resource.' }),
          duplicatedCustomer: CustomerSchema.exactOptional(),
          eventType: GlobalWebhookEventTypeSchema.exactOptional(),
          targetCustomerId: z
            .string()
            .exactOptional()
            .openapi({ description: 'The ID of the customer containing the merged data.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const PatchKycRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({ customerId: z.any().exactOptional().openapi({ readOnly: true }) })
        .openapi({ required: [] })
        .and(KycRequestSchema),
    },
  },
}

const PatchPaymentInstrumentRequestBody = {
  description: 'PaymentInstrument resource.',
  content: {
    'application/json': {
      schema: z.xor([
        PaymentInstrumentUpdateTokenSchema,
        PaymentCardUpdatePlainSchema,
        BankAccountUpdatePlainSchema,
      ]),
    },
  },
  required: true,
}

const PatchTransactionRequestRequestBody = {
  description: 'Use the patch transaction request to modify custom fields.',
  content: {
    'application/json': {
      schema: z
        .object({ customFields: ResourceCustomFieldsSchema.exactOptional() })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const PaymentCardRequestBody = {
  description: 'Payment card webhook request body resource.',
  content: {
    'application/json': {
      schema: z
        .object({
          _embedded: z
            .object({ paymentCard: PaymentCardSchema.exactOptional() })
            .exactOptional()
            .openapi({ required: [] }),
          _links: z
            .array(z.union([PaymentCardLinkSchema]))
            .min(1)
            .exactOptional()
            .openapi({ description: 'The links related to resource.' }),
          eventType: GlobalWebhookEventTypeSchema.exactOptional(),
          paymentCardId: z
            .string()
            .exactOptional()
            .openapi({ description: 'The payment card ID.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const PayoutRequestRequestBody = {
  description: 'Transaction resource.',
  content: { 'application/json': { schema: PayoutRequestSchema } },
  required: true,
}

const PlanRequestBody = {
  description: 'Plan resource.',
  content: { 'application/json': { schema: PlanSchema } },
  required: true,
}

const PostPaymentInstrumentRequestBody = {
  description: 'PaymentInstrument resource.',
  content: {
    'application/json': {
      schema: z.union([
        PaymentInstrumentCreateTokenSchema,
        PaymentCardCreatePlainSchema,
        BankAccountCreatePlainSchema,
        PayPalAccountSchema,
      ]),
    },
  },
  required: true,
}

const ProductRequestBody = {
  description: 'Product resource.',
  content: { 'application/json': { schema: ProductSchema } },
  required: true,
}

const SubscriptionRequestBody = {
  description: 'Order resource.',
  content: { 'application/json': { schema: SubscriptionSchema } },
  required: true,
}

const Subscription_2RequestBody = {
  description: 'Order webhook request body resource.',
  content: {
    'application/json': {
      schema: z
        .object({
          _embedded: z
            .object({ subscription: SubscriptionSchema.exactOptional() })
            .exactOptional()
            .openapi({ required: [] }),
          _links: z
            .array(z.union([SubscriptionLinkSchema]))
            .min(1)
            .exactOptional()
            .openapi({ description: 'The links related to resource.' }),
          eventType: GlobalWebhookEventTypeSchema.exactOptional(),
          subscriptionId: z.string().exactOptional().openapi({ description: 'The order ID.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const SubscriptionCancellationRequestBody = {
  description: 'Cancellation resource.',
  content: { 'application/json': { schema: SubscriptionCancellationSchema } },
  required: true,
}

const TagRequestBody = {
  description: 'Tag resource.',
  content: { 'application/json': { schema: TagSchema } },
  required: true,
}

const TransactionRequestBody = {
  description: 'Transaction webhook request body resource.',
  content: {
    'application/json': {
      schema: z
        .object({
          _embedded: z
            .object({ transaction: TransactionSchema.exactOptional() })
            .exactOptional()
            .openapi({ required: [] }),
          _links: z
            .array(z.union([TransactionLinkSchema]))
            .min(1)
            .exactOptional()
            .openapi({ description: 'The links related to resource.' }),
          eventType: GlobalWebhookEventTypeSchema.exactOptional(),
          transactionId: z.string().exactOptional().openapi({ description: 'The transaction ID.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const TransactionRequestRequestBody = {
  description: 'Transaction resource.',
  content: { 'application/json': { schema: TransactionRequestSchema } },
  required: true,
}

const LocationHeaderSchema = z
  .url()
  .exactOptional()
  .openapi({ description: 'The location of the related resource.', param: { required: false } })

const PaginationLimitHeaderSchema = z
  .int()
  .exactOptional()
  .openapi({ description: 'Items per page limit.', param: { required: false } })

const PaginationOffsetHeaderSchema = z
  .int()
  .exactOptional()
  .openapi({ description: 'Pagination offset.', param: { required: false } })

const PaginationTotalHeaderSchema = z
  .int()
  .exactOptional()
  .openapi({ description: 'Total items count.', param: { required: false } })

const JWTSecurityScheme = {
  bearerFormat: 'JWT',
  description:
    'You can create a JSON Web Token (JWT) via our [JWT Session resource](https://user-api-docs.rebilly.com/#operation/PostSigninRequest).\nUsage format: `Bearer &lt;JWT&gt;`.\n',
  scheme: 'bearer',
  type: 'http',
}

const PublishableApiKeySecurityScheme = {
  description:
    'Only for the Tokens resource.\nYou can create a Publishable API Key via our [API Keys resource](https://user-api-docs.rebilly.com/#tag/API-Keys), by specifying the type as `publishable`.\n',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

const SecretApiKeySecurityScheme = {
  description:
    'When you sign up for an account, you are given your first secret API key.\nTo do so please [follow this link.](https://app.rebilly.com/signup)\nAlso you can generate additional API keys, and delete API keys (as you may\nneed to rotate your keys in the future). All API keys can be restricted to a\nsmall set of permissions (restricted API keys).\n',
  in: 'header',
  name: 'REB-APIKEY',
  type: 'apiKey',
}

export const get3dsecureRoute = createRoute({
  method: 'get',
  path: '/3dsecure',
  tags: ['3D Secure'],
  summary: 'Retrieve a list of ThreeDSecure entries',
  operationId: 'Get3DSecureCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({ limit: CollectionLimitParamsSchema, offset: CollectionOffsetParamsSchema }),
  },
  responses: {
    200: {
      description: 'A list was retrieved successfully.',
      content: { 'application/json': { schema: z.array(ThreeDSecureSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const post3dsecureRoute = createRoute({
  method: 'post',
  path: '/3dsecure',
  tags: ['3D Secure'],
  summary: 'Create a ThreeDSecure entry',
  description: 'Create a ThreeDSecure entry.\n',
  operationId: 'Post3DSecure',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'ThreeDSecure resource.',
      content: { 'application/json': { schema: ThreeDSecureSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'ThreeDSecure entry was created.',
      content: { 'application/json': { schema: ThreeDSecureSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const get3dsecureIdRoute = createRoute({
  method: 'get',
  path: '/3dsecure/{id}',
  tags: ['3D Secure'],
  summary: 'Retrieve a ThreeDSecure entry',
  description: 'Retrieve a ThreeDSecure entry with specified identifier string.\n',
  operationId: 'Get3DSecure',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'ThreeDSecure entry was retrieved successfully.',
      content: { 'application/json': { schema: ThreeDSecureSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const getAmlRoute = createRoute({
  method: 'get',
  path: '/aml',
  tags: ['AML'],
  summary: 'Search PEP/Sanctions/Adverse Media lists',
  description:
    'Search multiple PEP/Sanctions/Adverse Media lists with first and last name to find any blocklisted identities.\nPerforms a fuzzy search including soundex. Not all fields are guaranteed to be filled.\n',
  operationId: 'GetAmlEntry',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      firstName: z
        .string()
        .openapi({
          param: {
            description: 'First name of individual to search.',
            in: 'query',
            name: 'firstName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      lastName: z
        .string()
        .openapi({
          param: {
            description: 'Last name of individual to search.',
            in: 'query',
            name: 'lastName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      dob: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Date of birth in format YYYY-MM-DD.',
            in: 'query',
            name: 'dob',
            required: false,
            schema: { type: 'string' },
          },
        }),
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Country of individual as an ISO Alpha-2 code.',
            in: 'query',
            name: 'country',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of objects representing hits, or an empty array if none are found.',
      content: { 'application/json': { schema: z.array(AMLSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
  },
})

export const getAttachmentsRoute = createRoute({
  method: 'get',
  path: '/attachments',
  tags: ['Files'],
  summary: 'Retrieve a list of Attachments',
  description:
    'Retrieve a list of attachments.\nYou may sort by the id, name, relatedId, relatedType, fileId, createdTime, and updatedTime.\n',
  operationId: 'GetAttachmentCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      filter: CollectionFilterParamsSchema,
      q: CollectionQueryParamsSchema,
      expand: CollectionExpandParamsSchema,
      fields: CollectionFieldsParamsSchema,
      sort: CollectionSortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of Attachments was retrieved successfully.',
      content: { 'application/json': { schema: z.array(AttachmentSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postAttachmentsRoute = createRoute({
  method: 'post',
  path: '/attachments',
  tags: ['Files'],
  summary: 'Create an Attachment',
  description: 'Create an Attachment.\n',
  operationId: 'PostAttachment',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: AttachmentRequestBody,
  },
  responses: {
    201: {
      description: 'Attachment was created.',
      content: { 'application/json': { schema: AttachmentSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    409: ConflictResponse,
    422: ValidationErrorResponse,
  },
})

export const getAttachmentsIdRoute = createRoute({
  method: 'get',
  path: '/attachments/{id}',
  tags: ['Files'],
  summary: 'Retrieve an Attachment',
  description: 'Retrieve a Attachment with specified identifier string.\n',
  operationId: 'GetAttachment',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Attachment was retrieved successfully.',
      content: { 'application/json': { schema: AttachmentSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const putAttachmentsIdRoute = createRoute({
  method: 'put',
  path: '/attachments/{id}',
  tags: ['Files'],
  summary: 'Update the Attachment with predefined ID',
  description: 'Update the Attachment with predefined ID.\n',
  operationId: 'PutAttachment',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: AttachmentRequestBody,
  },
  responses: {
    200: {
      description: 'Attachment was updated.',
      content: { 'application/json': { schema: AttachmentSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    201: {
      description: 'Attachment was created.',
      content: { 'application/json': { schema: AttachmentSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    409: ConflictResponse,
    422: ValidationErrorResponse,
  },
})

export const deleteAttachmentsIdRoute = createRoute({
  method: 'delete',
  path: '/attachments/{id}',
  tags: ['Files'],
  summary: 'Delete an Attachment',
  description: 'Delete the Attachment with predefined identifier string.\n',
  operationId: 'DeleteAttachment',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    204: {
      description: 'Attachment was deleted.',
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
})

export const getAuthenticationOptionsRoute = createRoute({
  method: 'get',
  path: '/authentication-options',
  tags: ['Customer Authentication'],
  summary: 'Read current authentication options',
  description: 'Read current authentication options.\n',
  operationId: 'GetAuthenticationOption',
  request: { headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }) },
  responses: {
    200: {
      description: 'Current authentication options was retrieved successfully.',
      content: { 'application/json': { schema: z.array(AuthenticationOptionsSchema) } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const putAuthenticationOptionsRoute = createRoute({
  method: 'put',
  path: '/authentication-options',
  tags: ['Customer Authentication'],
  summary: 'Change authentication options',
  description: 'Change options.\n',
  operationId: 'PutAuthenticationOption',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'Authentication Options resource.',
      content: { 'application/json': { schema: AuthenticationOptionsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Authentication Options were updated.',
      content: { 'application/json': { schema: AuthenticationOptionsSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getAuthenticationTokensRoute = createRoute({
  method: 'get',
  path: '/authentication-tokens',
  tags: ['Customer Authentication'],
  summary: 'Retrieve a list of auth tokens',
  description: 'Retrieve a list of auth tokens.\n',
  operationId: 'GetAuthenticationTokenCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({ limit: CollectionLimitParamsSchema, offset: CollectionOffsetParamsSchema }),
  },
  responses: {
    200: {
      description: 'A list of auth tokens was retrieved successfully.',
      content: { 'application/json': { schema: z.array(AuthenticationTokenSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postAuthenticationTokensRoute = createRoute({
  method: 'post',
  path: '/authentication-tokens',
  tags: ['Customer Authentication'],
  summary: 'Login',
  description: 'Login a customer.\n',
  operationId: 'PostAuthenticationToken',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'AuthenticationToken resource.',
      content: { 'application/json': { schema: AuthenticationTokenSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Login successful.',
      content: { 'application/json': { schema: AuthenticationTokenSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
  security: [{ SecretApiKey: [] }, { JWT: [] }, { PublishableApiKey: [] }],
})

export const getAuthenticationTokensTokenRoute = createRoute({
  method: 'get',
  path: '/authentication-tokens/{token}',
  tags: ['Customer Authentication'],
  summary: 'Verify',
  description: 'Verify an authentication token.\n',
  operationId: 'GetAuthenticationTokenVerification',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The token identifier string.',
            in: 'path',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Authentication Token was verified.',
      content: { 'application/json': { schema: AuthenticationTokenSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
  security: [{ SecretApiKey: [] }, { JWT: [] }, { PublishableApiKey: [] }],
})

export const deleteAuthenticationTokensTokenRoute = createRoute({
  method: 'delete',
  path: '/authentication-tokens/{token}',
  tags: ['Customer Authentication'],
  summary: 'Logout a customer',
  description: 'Logout a customer.\n',
  operationId: 'DeleteAuthenticationToken',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The token identifier string.',
            in: 'path',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    204: {
      description: 'Customer was logged out.',
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
  security: [{ SecretApiKey: [] }, { JWT: [] }, { PublishableApiKey: [] }],
})

export const postAuthenticationTokensTokenExchangeRoute = createRoute({
  method: 'post',
  path: '/authentication-tokens/{token}/exchange',
  tags: ['Customer Authentication'],
  summary: 'Exchange',
  description:
    'Exchange Authentication Token for JWT.\n\nIt will also invalidate an Authentication Token by default (so it can only be exchanged once).\n',
  operationId: 'PostAuthenticationTokenExchange',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The token identifier string.',
            in: 'path',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: { content: { 'application/json': { schema: CustomerJWTSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Authentication Token exchanged for JWT.',
      content: { 'application/json': { schema: CustomerJWTSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
  security: [{ SecretApiKey: [] }, { JWT: [] }, { PublishableApiKey: [] }],
})

export const getBankAccountsRoute = createRoute({
  method: 'get',
  path: '/bank-accounts',
  tags: ['Bank Accounts'],
  summary: 'Retrieve a list of bank accounts',
  description: 'Retrieve a list of Bank Accounts.\n',
  operationId: 'GetBankAccountCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      q: CollectionQueryParamsSchema,
      sort: CollectionSortParamsSchema,
      filter: CollectionFilterParamsSchema,
      expand: CollectionExpandParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of Bank Accounts was retrieved successfully.',
      content: { 'application/json': { schema: z.array(BankAccountSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postBankAccountsRoute = createRoute({
  method: 'post',
  path: '/bank-accounts',
  tags: ['Bank Accounts'],
  summary: 'Create a Bank Account',
  description: 'Create a Bank Account.\n',
  operationId: 'PostBankAccount',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'BankAccount resource.',
      content: {
        'application/json': {
          schema: z.xor([BankAccountCreateTokenSchema, BankAccountCreatePlainSchema]),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Bank Account was created.',
      content: { 'application/json': { schema: BankAccountSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getBankAccountsIdRoute = createRoute({
  method: 'get',
  path: '/bank-accounts/{id}',
  tags: ['Bank Accounts'],
  summary: 'Retrieve a Bank Account',
  description: 'Retrieve a Bank Account with specified identifier string.\n',
  operationId: 'GetBankAccount',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Bank Account was retrieved successfully.',
      content: { 'application/json': { schema: BankAccountSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const putBankAccountsIdRoute = createRoute({
  method: 'put',
  path: '/bank-accounts/{id}',
  tags: ['Bank Accounts'],
  summary: 'Create a Bank Account with predefined ID',
  description: 'Create or update a BankAccount with predefined identifier string.\n',
  operationId: 'PutBankAccount',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'BankAccount resource.',
      content: {
        'application/json': {
          schema: z.xor([BankAccountCreateTokenSchema, BankAccountCreatePlainSchema]),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'BankAccount was updated.',
      content: { 'application/json': { schema: BankAccountSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    201: {
      description: 'BankAccount was created.',
      content: { 'application/json': { schema: BankAccountSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    422: ValidationErrorResponse,
  },
})

export const patchBankAccountsIdRoute = createRoute({
  method: 'patch',
  path: '/bank-accounts/{id}',
  tags: ['Bank Accounts'],
  summary: "Update a bank account's values",
  description: "Update bank account's values except for the account number and routing. number.\n",
  operationId: 'PatchBankAccount',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'Bank Account.',
      content: { 'application/json': { schema: BankAccountUpdatePlainSchema } },
    },
  },
  responses: {
    200: {
      description: 'Bank Account was updated.',
      content: { 'application/json': { schema: BankAccountSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    422: ValidationErrorResponse,
  },
})

export const postBankAccountsIdDeactivationRoute = createRoute({
  method: 'post',
  path: '/bank-accounts/{id}/deactivation',
  tags: ['Bank Accounts'],
  summary: 'Deactivate a Bank Account',
  description: 'Deactivate a Bank Account.\n',
  operationId: 'PostBankAccountDeactivation',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    201: {
      description: 'Bank Account was deactivated.',
      content: { 'application/json': { schema: BankAccountSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    409: ConflictResponse,
  },
})

export const getBlocklistsRoute = createRoute({
  method: 'get',
  path: '/blocklists',
  tags: ['Blocklists'],
  summary: 'Retrieve a list of blocklists',
  description: 'Retrieve a list of blocklists.\n',
  operationId: 'GetBlocklistCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      sort: CollectionSortParamsSchema,
      filter: CollectionFilterParamsSchema,
      q: CollectionQueryParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of Blocklists was retrieved successfully.',
      content: { 'application/json': { schema: z.array(BlocklistSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postBlocklistsRoute = createRoute({
  method: 'post',
  path: '/blocklists',
  tags: ['Blocklists'],
  summary: 'Create a blocklist',
  description: 'Create a blocklist.\n',
  operationId: 'PostBlocklist',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: BlocklistRequestBody,
  },
  responses: {
    201: {
      description: 'Blocklist was created.',
      content: { 'application/json': { schema: BlocklistSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getBlocklistsIdRoute = createRoute({
  method: 'get',
  path: '/blocklists/{id}',
  tags: ['Blocklists'],
  summary: 'Retrieve a blocklist',
  description: 'Retrieve a blocklist with specified identifier string.\n',
  operationId: 'GetBlocklist',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Blocklist was retrieved successfully.',
      content: { 'application/json': { schema: BlocklistSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const putBlocklistsIdRoute = createRoute({
  method: 'put',
  path: '/blocklists/{id}',
  tags: ['Blocklists'],
  summary: 'Create a blocklist with predefined ID',
  description: 'Create a blocklist with predefined identifier string.\n',
  operationId: 'PutBlocklist',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: BlocklistRequestBody,
  },
  responses: {
    201: {
      description: 'Blocklist was created.',
      content: { 'application/json': { schema: BlocklistSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    409: {
      description: 'Blocklist exist and cannot be updated.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: ValidationErrorResponse,
  },
})

export const deleteBlocklistsIdRoute = createRoute({
  method: 'delete',
  path: '/blocklists/{id}',
  tags: ['Blocklists'],
  summary: 'Delete a blocklist',
  description: 'Delete a blocklist with predefined identifier string.\n',
  operationId: 'DeleteBlocklist',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    204: {
      description: 'Blocklist was deleted.',
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const getCouponsRoute = createRoute({
  method: 'get',
  path: '/coupons',
  tags: ['Coupons'],
  summary: 'Retrieve a list of coupons',
  description: 'Retrieve a list of coupons.\n',
  operationId: 'GetCouponCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      filter: CollectionFilterParamsSchema,
      q: CollectionQueryParamsSchema,
      sort: CollectionSortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of coupons was retrieved successfully.',
      content: { 'application/json': { schema: z.array(CouponSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postCouponsRoute = createRoute({
  method: 'post',
  path: '/coupons',
  tags: ['Coupons'],
  summary: 'Create a coupon',
  description: 'Create a coupon.\n',
  operationId: 'PostCoupon',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: CouponRequestBody,
  },
  responses: {
    201: {
      description: 'Coupon was created.',
      content: { 'application/json': { schema: CouponSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getCouponsRedemptionsRoute = createRoute({
  method: 'get',
  path: '/coupons-redemptions',
  tags: ['Coupons'],
  summary: 'Retrieve a list of coupon redemptions',
  operationId: 'GetCouponRedemptionCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      filter: CollectionFilterParamsSchema,
      q: CollectionQueryParamsSchema,
      sort: CollectionSortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Coupons redemptions were retrieved successfully.',
      content: { 'application/json': { schema: z.array(CouponRedemptionSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postCouponsRedemptionsRoute = createRoute({
  method: 'post',
  path: '/coupons-redemptions',
  tags: ['Coupons'],
  summary: 'Redeem a coupon',
  description: 'Redeem a coupon.\n',
  operationId: 'PostCouponRedemption',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'Redeem a coupon.',
      content: { 'application/json': { schema: CouponRedemptionSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Coupon was redeemed.',
      content: { 'application/json': { schema: CouponRedemptionSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getCouponsRedemptionsIdRoute = createRoute({
  method: 'get',
  path: '/coupons-redemptions/{id}',
  tags: ['Coupons'],
  summary: 'Retrieve a coupon redemption with specified identifier string',
  operationId: 'GetCouponRedemption',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Retrieve a coupon redemption with specified identifier string.',
      content: { 'application/json': { schema: CouponRedemptionSchema } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const postCouponsRedemptionsIdCancelRoute = createRoute({
  method: 'post',
  path: '/coupons-redemptions/{id}/cancel',
  tags: ['Coupons'],
  summary: 'Cancel a coupon redemption',
  operationId: 'PostCouponRedemptionCancellation',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    201: { description: 'Cancel a coupon redemption.' },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const getCouponsIdRoute = createRoute({
  method: 'get',
  path: '/coupons/{id}',
  tags: ['Coupons'],
  summary: 'Retrieve a coupon',
  description: 'Retrieve a coupon with specified coupon ID string.\n',
  operationId: 'GetCoupon',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Coupon was retrieved successfully.',
      content: { 'application/json': { schema: CouponSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const putCouponsIdRoute = createRoute({
  method: 'put',
  path: '/coupons/{id}',
  tags: ['Coupons'],
  summary: 'Create or update a coupon with predefined coupon ID',
  description: 'Create or update a coupon with predefined coupon ID.\n',
  operationId: 'PutCoupon',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: CouponRequestBody,
  },
  responses: {
    200: {
      description: 'Coupon was updated.',
      content: { 'application/json': { schema: CouponSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    201: {
      description: 'Coupon was created.',
      content: { 'application/json': { schema: CouponSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    409: ConflictResponse,
    422: ValidationErrorResponse,
  },
})

export const postCouponsIdExpirationRoute = createRoute({
  method: 'post',
  path: '/coupons/{id}/expiration',
  tags: ['Coupons'],
  summary: "Set a coupon's expiration time",
  description:
    "Set a coupon's expiry time with the specified coupon ID.\nThe expiredTime of a coupon must be greater than its issuedTime.\nThis cannot be performed on expired coupons.\n",
  operationId: 'PostCouponExpiration',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'Coupon resource.',
      content: { 'application/json': { schema: CouponExpirationSchema } },
    },
  },
  responses: {
    201: {
      description: 'Coupon expiration was successfully set.',
      content: { 'application/json': { schema: CouponSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    409: {
      description:
        'The coupon is already expired and has been redeemed, unable to. reschedule expiration.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: ValidationErrorResponse,
  },
})

export const getCredentialsRoute = createRoute({
  method: 'get',
  path: '/credentials',
  tags: ['Customer Authentication'],
  summary: 'Retrieve a list of credentials',
  description: 'Retrieve a list of credentials.\n',
  operationId: 'GetCredentialCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({ limit: CollectionLimitParamsSchema, offset: CollectionOffsetParamsSchema }),
  },
  responses: {
    200: {
      description: 'A list of Credentials was retrieved successfully.',
      content: { 'application/json': { schema: z.array(CredentialSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postCredentialsRoute = createRoute({
  method: 'post',
  path: '/credentials',
  tags: ['Customer Authentication'],
  summary: 'Create a credential',
  description: 'Create a credential.\n',
  operationId: 'PostCredential',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: CredentialRequestBody,
  },
  responses: {
    201: {
      description: 'Credential was created.',
      content: { 'application/json': { schema: CredentialSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getCredentialsIdRoute = createRoute({
  method: 'get',
  path: '/credentials/{id}',
  tags: ['Customer Authentication'],
  summary: 'Retrieve a credential',
  description: 'Retrieve a credential with specified identifier string.\n',
  operationId: 'GetCredential',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Credential was retrieved successfully.',
      content: { 'application/json': { schema: CredentialSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const putCredentialsIdRoute = createRoute({
  method: 'put',
  path: '/credentials/{id}',
  tags: ['Customer Authentication'],
  summary: 'Create or update a credential with predefined ID',
  description: 'Create or update a credential with predefined identifier string.\n',
  operationId: 'PutCredential',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: CredentialRequestBody,
  },
  responses: {
    200: {
      description: 'Credential was updated.',
      content: { 'application/json': { schema: CredentialSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    201: {
      description: 'Credential was created.',
      content: { 'application/json': { schema: CredentialSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    422: ValidationErrorResponse,
  },
})

export const deleteCredentialsIdRoute = createRoute({
  method: 'delete',
  path: '/credentials/{id}',
  tags: ['Customer Authentication'],
  summary: 'Delete a credential',
  description: 'Delete a credential with predefined identifier string.\n',
  operationId: 'DeleteCredential',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    204: {
      description: 'Credential was deleted.',
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
})

export const getCustomFieldsResourceRoute = createRoute({
  method: 'get',
  path: '/custom-fields/{resource}',
  tags: ['Custom Fields'],
  summary: 'Retrieve Custom Fields',
  description: 'Retrieve a schema of Custom Fields for the given resource type.\n',
  operationId: 'GetCustomFieldCollection',
  request: {
    params: z.object({ resource: CustomFieldResourceParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({ limit: CollectionLimitParamsSchema, offset: CollectionOffsetParamsSchema }),
  },
  responses: {
    200: {
      description: 'A schema of Custom Fields was retrieved successfully.',
      content: {
        'application/json': {
          schema: z.array(CustomFieldSchema).openapi({ description: 'The list of custom fields.' }),
        },
      },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const getCustomFieldsResourceNameRoute = createRoute({
  method: 'get',
  path: '/custom-fields/{resource}/{name}',
  tags: ['Custom Fields'],
  summary: 'Retrieve a Custom Field',
  description: 'Retrieve a schema of the given Custom Field for the given resource type.\n',
  operationId: 'GetCustomField',
  request: {
    params: z.object({
      resource: CustomFieldResourceParamsSchema,
      name: z
        .string()
        .regex(/^[\w-]+$/)
        .max(60)
        .openapi({
          param: {
            description: "The custom field's identifier string.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { maxLength: 60, pattern: '^[\\w-]+$', type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'A schema of the Custom Field was retrieved successfully.',
      content: { 'application/json': { schema: CustomFieldSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const putCustomFieldsResourceNameRoute = createRoute({
  method: 'put',
  path: '/custom-fields/{resource}/{name}',
  tags: ['Custom Fields'],
  summary: 'Create or alter a Custom Field',
  description: 'Create or alter a schema of the given Custom Field for the given resource. type.\n',
  operationId: 'PutCustomField',
  request: {
    params: z.object({
      resource: CustomFieldResourceParamsSchema,
      name: z
        .string()
        .regex(/^[\w-]+$/)
        .max(60)
        .openapi({
          param: {
            description: "The custom field's identifier string.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { maxLength: 60, pattern: '^[\\w-]+$', type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'Custom Fields schema of the given resource type.',
      content: { 'application/json': { schema: CustomFieldSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Custom Field was updated.',
      content: { 'application/json': { schema: CustomFieldSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    201: {
      description: 'The Custom Fields was created.',
      content: { 'application/json': { schema: CustomFieldSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    409: {
      description:
        'The schema is in use: remove all the associated data in order to remove or alter the schema.\n',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: ValidationErrorResponse,
  },
})

export const getCustomerTimelineCustomEventsRoute = createRoute({
  method: 'get',
  path: '/customer-timeline-custom-events',
  tags: ['Customers Timeline'],
  summary: 'Retrieve a list of customer timeline custom event types',
  description: 'Retrieve a list of customer timeline custom event types.\n',
  operationId: 'GetCustomerTimelineCustomEventTypeCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      filter: CollectionFilterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of customer timeline custom event types was retrieved successfully.',
      content: { 'application/json': { schema: z.array(CustomerTimelineCustomEventSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postCustomerTimelineCustomEventsRoute = createRoute({
  method: 'post',
  path: '/customer-timeline-custom-events',
  tags: ['Customers'],
  summary: 'Create Customer Timeline custom event type',
  description: 'Create Customer Timeline custom event type.\n',
  operationId: 'PostCustomerTimelineCustomEventType',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'Customer Timeline Custom Event Type resource.',
      content: { 'application/json': { schema: CustomerTimelineCustomEventSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Customer Timeline Custom Event Type was created.',
      content: { 'application/json': { schema: CustomerTimelineCustomEventSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getCustomerTimelineCustomEventsIdRoute = createRoute({
  method: 'get',
  path: '/customer-timeline-custom-events/{id}',
  tags: ['Customers Timeline'],
  summary: 'Retrieve customer timeline custom event type with specified identifier string',
  description: 'Retrieve customer timeline custom event type.\n',
  operationId: 'GetCustomerTimelineCustomEventType',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Customer Timeline custom event type was retrieved successfully.',
      content: { 'application/json': { schema: CustomerTimelineCustomEventSchema } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const getCustomerTimelineEventsRoute = createRoute({
  method: 'get',
  path: '/customer-timeline-events',
  tags: ['Customers Timeline'],
  summary: 'Retrieve a list of customer timeline messages for all customers',
  description: 'Retrieve a list of customer timeline messages for all customers.\n',
  operationId: 'GetCustomerTimelineEventCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      filter: CollectionFilterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of customer timeline messages was retrieved successfully.',
      content: { 'application/json': { schema: z.array(CustomerTimelineSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const getCustomersRoute = createRoute({
  method: 'get',
  path: '/customers',
  tags: ['Customers'],
  summary: 'Retrieve a list of customers',
  description: 'Retrieve a list of customers.\n',
  operationId: 'GetCustomerCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      filter: CollectionFilterParamsSchema,
      q: CollectionQueryParamsSchema,
      expand: CollectionExpandParamsSchema,
      fields: CollectionFieldsParamsSchema,
      sort: CollectionSortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of Customers was retrieved successfully.',
      content: { 'application/json': { schema: z.array(CustomerSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postCustomersRoute = createRoute({
  method: 'post',
  path: '/customers',
  tags: ['Customers'],
  summary: 'Create a customer (without an ID)',
  description:
    "Create a customer without a predefined ID.\nThe customer's primary address\nwill be used as the default address for payment\ninstruments, subscriptions and invoices if none\nare provided.\n\nIf you wish to create the customer with a predefined\nID (which we recommend to prevent duplication), you\nmay use our `PUT` request described below.\n\nRead our guide to [preventing duplicates](https://api-guides.rebilly.com/core-concepts/preventing-duplicates)\nto understand more.\n",
  operationId: 'PostCustomer',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: CustomerRequestBody,
  },
  responses: {
    201: CustomerResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    409: ConflictResponse,
    422: ValidationErrorResponse,
  },
})

export const getCustomersIdRoute = createRoute({
  method: 'get',
  path: '/customers/{id}',
  tags: ['Customers'],
  summary: 'Retrieve a customer',
  description: 'Retrieve a customer with specified identifier string.\n',
  operationId: 'GetCustomer',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({ expand: CollectionExpandParamsSchema, fields: CollectionFieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Customer was retrieved successfully.',
      content: { 'application/json': { schema: CustomerSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const putCustomersIdRoute = createRoute({
  method: 'put',
  path: '/customers/{id}',
  tags: ['Customers'],
  summary: 'Upsert a customer with predefined ID',
  description:
    'Create or update (upsert) a customer with predefined identifier string.\nRead our guide to [preventing duplicates](https://api-guides.rebilly.com/core-concepts/preventing-duplicates)\nto understand more.\n',
  operationId: 'PutCustomer',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: CustomerRequestBody,
  },
  responses: {
    200: CustomerResponse,
    201: CustomerResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    409: ConflictResponse,
    422: ValidationErrorResponse,
  },
})

export const deleteCustomersIdRoute = createRoute({
  method: 'delete',
  path: '/customers/{id}',
  tags: ['Customers'],
  summary: 'Merge and delete a customer',
  description: 'Merge one duplicate customer to another target customer and delete the. former.',
  operationId: 'DeleteCustomer',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      targetCustomerId: z
        .string()
        .openapi({
          param: {
            description:
              'The customer identifier to get the data of the deleted duplicate customer.',
            in: 'query',
            name: 'targetCustomerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Customer has been merged and removed.',
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const getCustomersIdLeadSourceRoute = createRoute({
  method: 'get',
  path: '/customers/{id}/lead-source',
  tags: ['Customers'],
  summary: "Retrieve a customer's Lead Source",
  description: 'Retrieve a Lead Source of given customer.\n',
  operationId: 'GetCustomerLeadSource',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Lead Source was retrieved successfully.',
      content: { 'application/json': { schema: LeadSourceSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const putCustomersIdLeadSourceRoute = createRoute({
  method: 'put',
  path: '/customers/{id}/lead-source',
  tags: ['Customers'],
  summary: 'Create a Lead Source for a customer',
  description: 'Create a Lead Source for a customer.\n',
  operationId: 'PutCustomerLeadSource',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'Lead Source resource.',
      content: { 'application/json': { schema: LeadSourceSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Lead Source was created.',
      content: { 'application/json': { schema: LeadSourceSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const deleteCustomersIdLeadSourceRoute = createRoute({
  method: 'delete',
  path: '/customers/{id}/lead-source',
  tags: ['Customers'],
  summary: 'Delete a Lead Source for a customer',
  description: 'Delete a Lead Source that belongs to a certain customer.\n',
  operationId: 'DeleteCustomerLeadSource',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    204: {
      description: 'Lead Source was deleted.',
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    409: ConflictResponse,
  },
})

export const getCustomersIdTimelineRoute = createRoute({
  method: 'get',
  path: '/customers/{id}/timeline',
  tags: ['Customers Timeline'],
  summary: 'Retrieve a list of customer timeline messages',
  description: 'Retrieve a list of customer timeline messages.\n',
  operationId: 'GetCustomerTimelineCollection',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      filter: CollectionFilterParamsSchema,
      sort: CollectionSortParamsSchema,
      q: CollectionQueryParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of customer timeline messages was retrieved successfully.',
      content: { 'application/json': { schema: z.array(CustomerTimelineSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postCustomersIdTimelineRoute = createRoute({
  method: 'post',
  path: '/customers/{id}/timeline',
  tags: ['Customers Timeline'],
  summary: 'Create a customer Timeline comment or custom defined event',
  description: 'Create a customer Timeline comment or custom defined event.\n',
  operationId: 'PostCustomerTimeline',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'Customer Timeline resource.',
      content: { 'application/json': { schema: CustomerTimelineSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Customer Timeline comment or custom defined event was created.',
      content: { 'application/json': { schema: CustomerTimelineSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getCustomersIdTimelineMessageIdRoute = createRoute({
  method: 'get',
  path: '/customers/{id}/timeline/{messageId}',
  tags: ['Customers Timeline'],
  summary: 'Retrieve a customer Timeline message',
  description: 'Retrieve a customer message with specified identifier string.\n',
  operationId: 'GetCustomerTimeline',
  request: {
    params: z.object({
      id: ResourceIdParamsSchema,
      messageId: z
        .string()
        .openapi({
          param: {
            description: 'The Customer Timeline message ID.',
            in: 'path',
            name: 'messageId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Customer message was retrieved successfully.',
      content: { 'application/json': { schema: CustomerTimelineSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const deleteCustomersIdTimelineMessageIdRoute = createRoute({
  method: 'delete',
  path: '/customers/{id}/timeline/{messageId}',
  tags: ['Customers Timeline'],
  summary: 'Delete a Customer Timeline message',
  description: 'Delete a Customer Timeline message with predefined identifier string.\n',
  operationId: 'DeleteCustomerTimeline',
  request: {
    params: z.object({
      id: ResourceIdParamsSchema,
      messageId: z
        .string()
        .openapi({
          param: {
            description: 'The Customer Timeline message ID.',
            in: 'path',
            name: 'messageId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    204: {
      description: 'Customer Timeline message was deleted.',
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    409: ConflictResponse,
  },
})

export const getCustomersIdUpcomingInvoicesRoute = createRoute({
  method: 'get',
  path: '/customers/{id}/upcoming-invoices',
  tags: ['Invoices'],
  summary: "Retrieve customer's upcoming invoices",
  description:
    'Retrieve a list of upcoming invoices from the subscriptions which belong to. the given customer.\nThe endpoint is temporary before upcoming invoices get a complete integration.\n',
  operationId: 'GetCustomerUpcomingInvoiceCollection',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({ expand: CollectionExpandParamsSchema }),
  },
  responses: {
    200: {
      description: 'Upcoming invoices are retrieved successfully.',
      content: { 'application/json': { schema: z.array(InvoiceSchema) } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const postDigitalWalletsValidationRoute = createRoute({
  method: 'post',
  path: '/digital-wallets/validation',
  tags: ['Payment Tokens'],
  summary: 'Validate a digital wallet session',
  description:
    '[FramePay](https://docs.rebilly.com/docs/developer-docs/framepay/)\nis the recommended way to use when validating a digital wallet session.\n',
  operationId: 'PostDigitalWalletValidation',
  request: {
    body: {
      description: 'Digital wallet validation request.',
      content: { 'application/json': { schema: DigitalWalletValidationSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Digital wallet validation was made.',
      content: { 'application/json': { schema: DigitalWalletValidationSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
  security: [{ PublishableApiKey: [] }, { SecretApiKey: [] }, { JWT: [] }],
})

export const getDisputesRoute = createRoute({
  method: 'get',
  path: '/disputes',
  tags: ['Disputes'],
  summary: 'Retrieve a list of disputes',
  description: 'Retrieve a list of disputes.\n',
  operationId: 'GetDisputeCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      filter: CollectionFilterParamsSchema,
      sort: CollectionSortParamsSchema,
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      q: CollectionQueryParamsSchema,
      expand: CollectionExpandParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of disputes was retrieved successfully.',
      content: { 'application/json': { schema: z.array(DisputeSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postDisputesRoute = createRoute({
  method: 'post',
  path: '/disputes',
  tags: ['Disputes'],
  summary: 'Create a dispute',
  description: 'Create a dispute.\n',
  operationId: 'PostDispute',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: DisputeRequestBody,
  },
  responses: {
    201: {
      description: 'Dispute was created.',
      content: { 'application/json': { schema: DisputeSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getDisputesIdRoute = createRoute({
  method: 'get',
  path: '/disputes/{id}',
  tags: ['Disputes'],
  summary: 'Retrieve a dispute',
  description: 'Retrieve a dispute with specified identifier string.\n',
  operationId: 'GetDispute',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Dispute was retrieved successfully.',
      content: { 'application/json': { schema: DisputeSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const putDisputesIdRoute = createRoute({
  method: 'put',
  path: '/disputes/{id}',
  tags: ['Disputes'],
  summary: 'Create or update a Dispute with predefined ID',
  description: 'Create or update a Dispute with predefined identifier string.\n',
  operationId: 'PutDispute',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: DisputeRequestBody,
  },
  responses: {
    200: {
      description: 'Dispute was updated.',
      content: { 'application/json': { schema: DisputeSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    201: {
      description: 'Dispute was created.',
      content: { 'application/json': { schema: DisputeSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getFilesRoute = createRoute({
  method: 'get',
  path: '/files',
  tags: ['Files'],
  summary: 'Retrieve a list of files',
  description: 'Retrieve a list of files.\n',
  operationId: 'GetFileCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      filter: CollectionFilterParamsSchema,
      q: CollectionQueryParamsSchema,
      expand: CollectionExpandParamsSchema,
      fields: CollectionFieldsParamsSchema,
      sort: CollectionSortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of Files was retrieved successfully.',
      content: { 'application/json': { schema: z.array(FileSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postFilesRoute = createRoute({
  method: 'post',
  path: '/files',
  tags: ['Files'],
  summary: 'Create a file',
  description:
    'Additionally, a file can be sent with:.\n - multipart/form-data POST request: in this case all property names are the same as the JSON ones (`file` is an uploaded file)\n - file body request: the file body is sent as the request body, with the appropriate `Content-Type`. No additional\n properties can be set along the request data\n\nThe following file types only are allowed:\n - jpg\n - png\n - gif\n - pdf\n - mp3\n\n\nIf using a Publishable Api Key, only private files can be created. The files can later on be modified or used using\n a secret API key.\n',
  operationId: 'PostFile',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([FileCreateFromInlineSchema, FileCreateFromUrlSchema]),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'File was created.',
      content: { 'application/json': { schema: FileSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
  security: [{ SecretApiKey: [] }, { JWT: [] }, { PublishableApiKey: [] }],
})

export const getFilesIdRoute = createRoute({
  method: 'get',
  path: '/files/{id}',
  tags: ['Files'],
  summary: 'Retrieve a File Record',
  description: 'Retrieve a File with specified identifier string.\n',
  operationId: 'GetFile',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'File was retrieved successfully.',
      content: { 'application/json': { schema: FileSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const putFilesIdRoute = createRoute({
  method: 'put',
  path: '/files/{id}',
  tags: ['Files'],
  summary: 'Update the File with predefined ID',
  description:
    'Update the File with predefined ID. Note that file can be uploaded with POST. only.\n',
  operationId: 'PutFile',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'File resource.',
      content: { 'application/json': { schema: FileSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'File was updated.',
      content: { 'application/json': { schema: FileSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    422: ValidationErrorResponse,
  },
})

export const deleteFilesIdRoute = createRoute({
  method: 'delete',
  path: '/files/{id}',
  tags: ['Files'],
  summary: 'Delete a File',
  description: 'Delete the File with predefined identifier string.\n',
  operationId: 'DeleteFile',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    204: {
      description: 'File was deleted.',
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const getFilesIdDownloadRoute = createRoute({
  method: 'get',
  path: '/files/{id}/download',
  tags: ['Files'],
  summary: 'Download a file',
  description: 'Download a file.\n',
  operationId: 'GetFileDownload',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({ imageSize: ImageSizeParamsSchema }),
  },
  responses: {
    200: {
      description: 'The file was retrieved successfully.',
      content: { 'application/json': { schema: z.string().openapi({ readOnly: true }) } },
      headers: z.object({
        'Content-Length': {
          description: 'The number of bytes in the file.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of bytes in the file.',
              param: { required: false },
            }),
        },
        'Content-Type': {
          description: 'The MIME type of the file.',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'The MIME type of the file.', param: { required: false } }),
        },
      }),
    },
    302: FoundResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const getFilesIdDownloadExtensionRoute = createRoute({
  method: 'get',
  path: '/files/{id}/download{extension}',
  tags: ['Files'],
  summary: 'Download image in specific format',
  description: 'Download image in specific format. Images are converted server-side.\n',
  operationId: 'GetFileDownloadExtension',
  request: {
    params: z.object({
      id: ResourceIdParamsSchema,
      extension: z
        .enum(['.png', '.jpg', '.gif'])
        .openapi({
          param: {
            description: 'File extension which also indicates the desired file format.',
            in: 'path',
            name: 'extension',
            required: true,
            schema: { enum: ['.png', '.jpg', '.gif'], type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'The file was retrieved successfully.',
      content: { 'application/json': { schema: z.string().openapi({ readOnly: true }) } },
      headers: z.object({
        'Content-Length': {
          description: 'The number of bytes in the file.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of bytes in the file.',
              param: { required: false },
            }),
        },
        'Content-Type': {
          description: 'The MIME type of the file.',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'The MIME type of the file.', param: { required: false } }),
        },
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    422: ValidationErrorResponse,
  },
})

export const getInvoicesRoute = createRoute({
  method: 'get',
  path: '/invoices',
  tags: ['Invoices'],
  summary: 'Retrieve a list of invoices',
  description: 'Retrieve a list of invoices.\n',
  operationId: 'GetInvoiceCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      filter: CollectionFilterParamsSchema,
      sort: CollectionSortParamsSchema,
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      q: CollectionQueryParamsSchema,
      expand: CollectionExpandParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of invoices was retrieved successfully.',
      content: { 'application/json': { schema: z.array(InvoiceSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postInvoicesRoute = createRoute({
  method: 'post',
  path: '/invoices',
  tags: ['Invoices'],
  summary: 'Create an invoice',
  description: 'Create an invoice.\n',
  operationId: 'PostInvoice',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: InvoiceRequestBody,
  },
  responses: {
    201: {
      description: 'Invoice was created.',
      content: { 'application/json': { schema: InvoiceSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getInvoicesIdRoute = createRoute({
  method: 'get',
  path: '/invoices/{id}',
  tags: ['Invoices'],
  summary: 'Retrieve an invoice',
  description: 'Retrieve an invoice with specified identifier string.\n',
  operationId: 'GetInvoice',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({
      'Organization-Id': OrganizationIdParamsSchema,
      Accept: MediaTypeJsonPdfParamsSchema,
    }),
    query: z.object({ expand: CollectionExpandParamsSchema }),
  },
  responses: {
    200: {
      description: 'Invoice was retrieved successfully.',
      content: {
        'application/json': { schema: InvoiceSchema },
        'application/pdf': { schema: InvoiceSchema },
      },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const putInvoicesIdRoute = createRoute({
  method: 'put',
  path: '/invoices/{id}',
  tags: ['Invoices'],
  summary: 'Create or update an invoice with predefined ID',
  description: 'Create or update an invoice with predefined identifier string.\n',
  operationId: 'PutInvoice',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: InvoiceRequestBody,
  },
  responses: {
    200: {
      description: 'Invoice was updated.',
      content: { 'application/json': { schema: InvoiceSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    201: {
      description: 'Invoice was created.',
      content: { 'application/json': { schema: InvoiceSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    422: ValidationErrorResponse,
  },
})

export const postInvoicesIdAbandonRoute = createRoute({
  method: 'post',
  path: '/invoices/{id}/abandon',
  tags: ['Invoices'],
  summary: 'Abandon an invoice',
  description: 'Abandon an invoice with specified identifier string.\n',
  operationId: 'PostInvoiceAbandonment',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    201: {
      description: 'Invoice was abandoned successfully.',
      content: { 'application/json': { schema: InvoiceSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const postInvoicesIdIssueRoute = createRoute({
  method: 'post',
  path: '/invoices/{id}/issue',
  tags: ['Invoices'],
  summary: 'Issue an invoice',
  description: 'Issue an invoice with specified identifier string. It must be in `draft` status.\n',
  operationId: 'PostInvoiceIssuance',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'InvoiceIssue resource.',
      content: { 'application/json': { schema: InvoiceIssueSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Invoice was issued successfully.',
      content: { 'application/json': { schema: InvoiceSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    409: ConflictResponse,
  },
})

export const getInvoicesIdItemsRoute = createRoute({
  method: 'get',
  path: '/invoices/{id}/items',
  tags: ['Invoices'],
  summary: 'Retrieve invoice items',
  description: 'Retrieve an invoice items with specified invoice identifier string.\n',
  operationId: 'GetInvoiceItemCollection',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      expand: CollectionExpandParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Invoice items were retrieved successfully.',
      content: { 'application/json': { schema: z.array(InvoiceItemSchema) } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const postInvoicesIdItemsRoute = createRoute({
  method: 'post',
  path: '/invoices/{id}/items',
  tags: ['Invoices'],
  summary: 'Create an invoice item',
  description: 'Create an invoice item.\n',
  operationId: 'PostInvoiceItem',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'InvoiceItem resource.',
      content: { 'application/json': { schema: InvoiceItemSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'InvoiceItem was created.',
      content: { 'application/json': { schema: InvoiceItemSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    422: ValidationErrorResponse,
  },
})

export const postInvoicesIdRecalculateRoute = createRoute({
  method: 'post',
  path: '/invoices/{id}/recalculate',
  tags: ['Invoices'],
  summary: 'Recalculate an invoice',
  description:
    'Recalculate an invoice with specified identifier string.\nIt will recalculate shipping rates, taxes, discounts. It is useful when coupon was revoked or customer redeemed coupon after invoice was issued and you want to apply it to this invoice.\n',
  operationId: 'PostInvoiceRecalculation',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    201: {
      description: 'Invoice was recalculated successfully.',
      content: { 'application/json': { schema: InvoiceSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    409: ConflictResponse,
  },
})

export const postInvoicesIdReissueRoute = createRoute({
  method: 'post',
  path: '/invoices/{id}/reissue',
  tags: ['Invoices'],
  summary: 'Reissue an invoice',
  description:
    'Reissue an invoice with specified identifier string. It must be issued. (status must be `unpaid` or `past-due`).\n',
  operationId: 'PostInvoiceReissuance',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'InvoiceReissue resource.',
      content: { 'application/json': { schema: InvoiceReissueSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Invoice was reissued successfully.',
      content: { 'application/json': { schema: InvoiceSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    409: ConflictResponse,
  },
})

export const getInvoicesIdTimelineRoute = createRoute({
  method: 'get',
  path: '/invoices/{id}/timeline',
  tags: ['Invoices'],
  summary: 'Retrieve a list of invoice timeline messages',
  description: 'Retrieve a list of invoice timeline messages.\n',
  operationId: 'GetInvoiceTimelineCollection',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      filter: CollectionFilterParamsSchema,
      sort: CollectionSortParamsSchema,
      q: CollectionQueryParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of invoice timeline messages was retrieved successfully.',
      content: { 'application/json': { schema: z.array(InvoiceTimelineSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postInvoicesIdTimelineRoute = createRoute({
  method: 'post',
  path: '/invoices/{id}/timeline',
  tags: ['Invoices'],
  summary: 'Create an invoice Timeline comment',
  description: 'Create an invoice Timeline comment.\n',
  operationId: 'PostInvoiceTimeline',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'Invoice Timeline resource.',
      content: { 'application/json': { schema: InvoiceTimelineSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Invoice Timeline comment was created.',
      content: { 'application/json': { schema: InvoiceTimelineSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getInvoicesIdTimelineMessageIdRoute = createRoute({
  method: 'get',
  path: '/invoices/{id}/timeline/{messageId}',
  tags: ['Invoices'],
  summary: 'Retrieve an Invoice Timeline message',
  description: 'Retrieve a invoice message with specified identifier string.\n',
  operationId: 'GetInvoiceTimeline',
  request: {
    params: z.object({
      id: ResourceIdParamsSchema,
      messageId: z
        .string()
        .openapi({
          param: {
            description: 'The Invoice Timeline message ID.',
            in: 'path',
            name: 'messageId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Invoice message was retrieved successfully.',
      content: { 'application/json': { schema: InvoiceTimelineSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const deleteInvoicesIdTimelineMessageIdRoute = createRoute({
  method: 'delete',
  path: '/invoices/{id}/timeline/{messageId}',
  tags: ['Invoices'],
  summary: 'Delete an Invoice Timeline message',
  description: 'Delete an Invoice Timeline message with predefined identifier string.\n',
  operationId: 'DeleteInvoiceTimeline',
  request: {
    params: z.object({
      id: ResourceIdParamsSchema,
      messageId: z
        .string()
        .openapi({
          param: {
            description: 'The Invoice Timeline message ID.',
            in: 'path',
            name: 'messageId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    204: {
      description: 'Invoice Timeline message was deleted.',
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    409: ConflictResponse,
  },
})

export const postInvoicesIdTransactionRoute = createRoute({
  method: 'post',
  path: '/invoices/{id}/transaction',
  tags: ['Invoices'],
  summary: 'Apply a transaction to an invoice',
  description:
    'Apply a transaction to an invoice. The invoice must be unpaid. The transaction must have a non-zero unused amount (not fully applied to other invoices).\n',
  operationId: 'PostInvoiceTransaction',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'InvoiceTransaction resource.',
      content: { 'application/json': { schema: InvoiceTransactionSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Transaction was applied to invoice successfully.',
      content: { 'application/json': { schema: InvoiceSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    422: ValidationErrorResponse,
  },
})

export const getInvoicesIdTransactionAllocationsRoute = createRoute({
  method: 'get',
  path: '/invoices/{id}/transaction-allocations',
  tags: ['Invoices'],
  summary: 'Get transaction amounts allocated to an invoice',
  description: 'Get the precise amounts from a transaction allocated as invoice payments.',
  operationId: 'GetInvoiceTransactionAllocationCollection',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({ limit: CollectionLimitParamsSchema, offset: CollectionOffsetParamsSchema }),
  },
  responses: {
    200: {
      description: 'List of allocations was retrieved successfully.',
      content: { 'application/json': { schema: z.array(InvoiceTransactionAllocationSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const postInvoicesIdVoidRoute = createRoute({
  method: 'post',
  path: '/invoices/{id}/void',
  tags: ['Invoices'],
  summary: 'Void an invoice',
  description: 'Void an invoice with specified identifier string.\n',
  operationId: 'PostInvoiceVoid',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    201: {
      description: 'Invoice was voided successfully.',
      content: { 'application/json': { schema: InvoiceSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const getKycDocumentsRoute = createRoute({
  method: 'get',
  path: '/kyc-documents',
  tags: ['KYC Documents'],
  summary: 'Retrieve a list of KYC documents',
  description: 'Retrieve a list of KYC documents.\n',
  operationId: 'GetKycDocumentCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      filter: CollectionFilterParamsSchema,
      sort: CollectionSortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of KYC documents was retrieved successfully.',
      content: { 'application/json': { schema: z.array(KycDocument_2Schema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postKycDocumentsRoute = createRoute({
  method: 'post',
  path: '/kyc-documents',
  tags: ['KYC Documents'],
  summary: 'Create a KYC Document',
  description: 'Create a KYC Document.\n',
  operationId: 'PostKycDocument',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'Kyc document resource.',
      content: { 'application/json': { schema: KycDocument_2Schema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Kyc document was created.',
      content: { 'application/json': { schema: KycDocument_2Schema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getKycDocumentsIdRoute = createRoute({
  method: 'get',
  path: '/kyc-documents/{id}',
  tags: ['KYC Documents'],
  summary: 'Retrieve a KYC Document',
  description: 'Retrieve a KYC document with specified identifier string.',
  operationId: 'GetKycDocument',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'KYC document was retrieved successfully.',
      content: { 'application/json': { schema: KycDocument_2Schema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const putKycDocumentsIdRoute = createRoute({
  method: 'put',
  path: '/kyc-documents/{id}',
  tags: ['KYC Documents'],
  summary: 'Create or update a KYC document with predefined ID',
  description: 'Create or update a KYC document with predefined identifier string.',
  operationId: 'PutKycDocument',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'KYC document resource.',
      content: { 'application/json': { schema: KycDocument_2Schema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'KYC document was updated.',
      content: { 'application/json': { schema: KycDocument_2Schema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    201: {
      description: 'KYC document was created.',
      content: { 'application/json': { schema: KycDocument_2Schema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    422: ValidationErrorResponse,
  },
})

export const postKycDocumentsIdAcceptanceRoute = createRoute({
  method: 'post',
  path: '/kyc-documents/{id}/acceptance',
  tags: ['KYC Documents'],
  summary: 'Accept a KYC document',
  description:
    'Marks that status of the document as `accepted`. Updates the review time and reviewer information. Intended to be used for manual overrides.\n',
  operationId: 'PostKycDocumentAcceptance',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    201: {
      description: 'KYC document acceptance was created.',
      content: { 'application/json': { schema: KycDocument_2Schema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const postKycDocumentsIdMatchesRoute = createRoute({
  method: 'post',
  path: '/kyc-documents/{id}/matches',
  tags: ['KYC Documents'],
  summary: "Update a KYC document's documentMatches",
  description:
    "Updates a KYC document's documentMatches. Intended to be used for manual overrides.\n",
  operationId: 'PostKycDocumentMatches',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'Kyc document resource.',
      content: {
        'application/json': { schema: z.union([IdentityMatchesSchema, AddressMatchesSchema]) },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: "KYC document's documentMatches were updated.",
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const postKycDocumentsIdRejectionRoute = createRoute({
  method: 'post',
  path: '/kyc-documents/{id}/rejection',
  tags: ['KYC Documents'],
  summary: 'Reject a KYC document',
  description:
    'Marks that status of the document as `rejected`. Updates the review time and reviewer information. Intended to be used for manual overrides.\n',
  operationId: 'PostKycDocumentRejection',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'KYC document resource.',
      content: { 'application/json': { schema: KycDocumentRejectionSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'KYC document rejection was created.',
      content: { 'application/json': { schema: KycDocument_2Schema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    422: ValidationErrorResponse,
  },
})

export const postKycDocumentsIdReviewRoute = createRoute({
  method: 'post',
  path: '/kyc-documents/{id}/review',
  tags: ['KYC Documents'],
  summary: 'Review a KYC document',
  description:
    'Mark the KYC document as reviewed. Updates the review time and reviewer. information.',
  operationId: 'PostKycDocumentReview',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    201: {
      description: 'KYC document was reviewed.',
      content: { 'application/json': { schema: KycDocument_2Schema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    422: ValidationErrorResponse,
  },
})

export const getKycRequestsRoute = createRoute({
  method: 'get',
  path: '/kyc-requests',
  tags: ['KYC Documents'],
  summary: 'Retrieve a list of KYC requests',
  description: 'Retrieve a list of KYC requests.\n',
  operationId: 'GetKycRequestCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      filter: CollectionFilterParamsSchema,
      sort: CollectionSortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of KYC requests was retrieved successfully.',
      content: { 'application/json': { schema: z.array(KycRequestSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postKycRequestsRoute = createRoute({
  method: 'post',
  path: '/kyc-requests',
  tags: ['KYC Documents'],
  summary: 'Create a KYC Request',
  description: 'Create a KYC Request.\n',
  operationId: 'PostKycRequest',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'Kyc request resource.',
      content: { 'application/json': { schema: KycRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Kyc request was created.',
      content: { 'application/json': { schema: KycRequestSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getKycRequestsIdRoute = createRoute({
  method: 'get',
  path: '/kyc-requests/{id}',
  tags: ['KYC Documents'],
  summary: 'Retrieve a KYC request',
  description: 'Retrieve a KYC request with specified identifier string.',
  operationId: 'GetKycRequest',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'KYC request was retrieved successfully.',
      content: { 'application/json': { schema: KycRequestSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const deleteKycRequestsIdRoute = createRoute({
  method: 'delete',
  path: '/kyc-requests/{id}',
  tags: ['KYC Documents'],
  summary: 'Delete the KYC request',
  description: 'Delete the KYC request with the predefined identifier string.\n',
  operationId: 'DeleteKycRequest',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    204: {
      description: 'The KYC request was deleted.',
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
})

export const patchKycRequestsIdRoute = createRoute({
  method: 'patch',
  path: '/kyc-requests/{id}',
  tags: ['KYC Documents'],
  summary: 'Update a KYC request',
  description: 'Update a KYC request.',
  operationId: 'PatchKycRequest',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: PatchKycRequestRequestBody,
  },
  responses: {
    200: {
      description: 'KYC request was updated.',
      content: { 'application/json': { schema: KycRequestSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    422: ValidationErrorResponse,
  },
})

export const getPasswordTokensRoute = createRoute({
  method: 'get',
  path: '/password-tokens',
  tags: ['Customer Authentication'],
  summary: 'Retrieve a list of tokens',
  description: 'Retrieve a list of tokens.\n',
  operationId: 'GetPasswordTokenCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({ limit: CollectionLimitParamsSchema, offset: CollectionOffsetParamsSchema }),
  },
  responses: {
    200: {
      description: 'A list of Reset Password Tokens was retrieved successfully.',
      content: { 'application/json': { schema: z.array(ResetPasswordTokenSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postPasswordTokensRoute = createRoute({
  method: 'post',
  path: '/password-tokens',
  tags: ['Customer Authentication'],
  summary: 'Create a Reset Password Token',
  description: 'Create a Reset Password Token.\n',
  operationId: 'PostPasswordToken',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'ResetPasswordToken resource.',
      content: { 'application/json': { schema: ResetPasswordTokenSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Reset Password Token was created.',
      content: { 'application/json': { schema: ResetPasswordTokenSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getPasswordTokensIdRoute = createRoute({
  method: 'get',
  path: '/password-tokens/{id}',
  tags: ['Customer Authentication'],
  summary: 'Retrieve a Reset Password Token',
  description: 'Retrieve a Reset Password Token with specified identifier string.\n',
  operationId: 'GetPasswordToken',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'ResetPasswordToken was retrieved successfully.',
      content: { 'application/json': { schema: ResetPasswordTokenSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const deletePasswordTokensIdRoute = createRoute({
  method: 'delete',
  path: '/password-tokens/{id}',
  tags: ['Customer Authentication'],
  summary: 'Delete a Reset Password Token',
  description: 'Delete a Reset Password Token with predefined identifier string.\n',
  operationId: 'DeletePasswordToken',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    204: {
      description: 'ResetPasswordToken was deleted.',
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    409: ConflictResponse,
  },
})

export const getPaymentCardsRoute = createRoute({
  method: 'get',
  path: '/payment-cards',
  tags: ['Payment Cards'],
  summary: 'Retrieve a list of Payment Cards',
  description: 'Retrieve a list of Payments Cards.\n',
  operationId: 'GetPaymentCardCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      filter: CollectionFilterParamsSchema,
      sort: CollectionSortParamsSchema,
      q: CollectionQueryParamsSchema,
      expand: CollectionExpandParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of Payment Card was retrieved successfully.',
      content: { 'application/json': { schema: z.array(PaymentCardSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postPaymentCardsRoute = createRoute({
  method: 'post',
  path: '/payment-cards',
  tags: ['Payment Cards'],
  summary: 'Create a Payment Card',
  description: 'Create a Payment Card.\n',
  operationId: 'PostPaymentCard',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'PaymentCard resource.',
      content: {
        'application/json': {
          schema: z.xor([PaymentCardCreateTokenSchema, PaymentCardCreatePlainSchema]),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Payment Card was updated.',
      content: { 'application/json': { schema: PaymentCardSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    201: {
      description: 'Payment Card was created.',
      content: { 'application/json': { schema: PaymentCardSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getPaymentCardsIdRoute = createRoute({
  method: 'get',
  path: '/payment-cards/{id}',
  tags: ['Payment Cards'],
  summary: 'Retrieve a Payment Card',
  description: 'Retrieve a Payment Card with specified identifier string.\n',
  operationId: 'GetPaymentCard',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Payment card was retrieved successfully.',
      content: { 'application/json': { schema: PaymentCardSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const putPaymentCardsIdRoute = createRoute({
  method: 'put',
  path: '/payment-cards/{id}',
  tags: ['Payment Cards'],
  summary: 'Create a payment card with predefined ID',
  operationId: 'PutPaymentCard',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'Payment card.',
      content: {
        'application/json': {
          schema: z.xor([PaymentCardCreateTokenSchema, PaymentCardCreatePlainSchema]),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Payment card was updated.',
      content: { 'application/json': { schema: PaymentCardSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    201: {
      description: 'Payment card was created.',
      content: { 'application/json': { schema: PaymentCardSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    409: {
      description: 'Payment card already exists and cannot be updated.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: ValidationErrorResponse,
  },
})

export const patchPaymentCardsIdRoute = createRoute({
  method: 'patch',
  path: '/payment-cards/{id}',
  tags: ['Payment Cards'],
  summary: "Update a payment card's values",
  description: "Update any of the payment card's values except for the pan.\n",
  operationId: 'PatchPaymentCard',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'Payment card.',
      content: { 'application/json': { schema: PaymentCardUpdatePlainSchema } },
    },
  },
  responses: {
    200: {
      description: 'Payment card was updated.',
      content: { 'application/json': { schema: PaymentCardSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    422: ValidationErrorResponse,
  },
})

export const postPaymentCardsIdDeactivationRoute = createRoute({
  method: 'post',
  path: '/payment-cards/{id}/deactivation',
  tags: ['Payment Cards'],
  summary: 'Deactivate a Payment Card',
  description: 'Deactivate a Payment Card.\n',
  operationId: 'PostPaymentCardDeactivation',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    201: {
      description: 'Payment Card was deactivated.',
      content: { 'application/json': { schema: PaymentCardSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    409: ConflictResponse,
  },
})

export const getPaymentInstrumentsRoute = createRoute({
  method: 'get',
  path: '/payment-instruments',
  tags: ['Payment Instruments'],
  summary: 'Retrieve a list of payment instruments',
  description: 'Retrieve a list of payment instruments.\n',
  operationId: 'GetPaymentInstrumentCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      filter: CollectionFilterParamsSchema,
      sort: CollectionSortParamsSchema,
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      q: CollectionQueryParamsSchema,
      expand: CollectionExpandParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of payment instruments was retrieved successfully.',
      content: { 'application/json': { schema: z.array(PaymentInstrument_2Schema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postPaymentInstrumentsRoute = createRoute({
  method: 'post',
  path: '/payment-instruments',
  tags: ['Payment Instruments'],
  summary: 'Create a Payment Instrument',
  description:
    'Create a payment instrument.\nIf such payment card or bank account payment instrument already exists then updates it instead.\n',
  operationId: 'PostPaymentInstrument',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: PostPaymentInstrumentRequestBody,
  },
  responses: {
    201: {
      description: 'Payment instrument was created.',
      content: { 'application/json': { schema: PaymentInstrument_2Schema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    303: {
      description: 'Payment instrument was updated.',
      content: { 'application/json': { schema: PaymentInstrument_2Schema } },
      headers: z.object({
        Location: LocationHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getPaymentInstrumentsIdRoute = createRoute({
  method: 'get',
  path: '/payment-instruments/{id}',
  tags: ['Payment Instruments'],
  summary: 'Retrieve a Payment Instrument',
  description: 'Retrieve a payment instrument by ID.\n',
  operationId: 'GetPaymentInstrument',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Payment Instrument was retrieved successfully.',
      content: { 'application/json': { schema: PaymentInstrument_2Schema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const patchPaymentInstrumentsIdRoute = createRoute({
  method: 'patch',
  path: '/payment-instruments/{id}',
  tags: ['Payment Instruments'],
  summary: "Update a Payment Instrument's values",
  description: "Update allowed payment instrument's values.",
  operationId: 'PatchPaymentInstrument',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: PatchPaymentInstrumentRequestBody,
  },
  responses: {
    200: {
      description: 'Payment instrument was updated.',
      content: { 'application/json': { schema: PaymentInstrument_2Schema } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    422: ValidationErrorResponse,
  },
})

export const postPaymentInstrumentsIdDeactivationRoute = createRoute({
  method: 'post',
  path: '/payment-instruments/{id}/deactivation',
  tags: ['Payment Instruments'],
  summary: 'Deactivate a payment instrument',
  description: 'Deactivate a payment instrument.\n',
  operationId: 'PostPaymentInstrumentDeactivation',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    201: {
      description: 'Payment instrument was deactivated.',
      content: { 'application/json': { schema: PaymentInstrument_2Schema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    409: ConflictResponse,
  },
})

export const postPayoutsRoute = createRoute({
  method: 'post',
  path: '/payouts',
  tags: ['Transactions'],
  summary: 'Create a credit transaction',
  description: 'Create a transaction of type `credit`.\n',
  operationId: 'PostPayout',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: PayoutRequestRequestBody,
  },
  responses: {
    201: {
      description: 'Transaction was created.',
      content: { 'application/json': { schema: TransactionSchema } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    409: ConflictResponse,
    422: ValidationErrorResponse,
  },
})

export const getPaypalAccountsRoute = createRoute({
  method: 'get',
  path: '/paypal-accounts',
  tags: ['PayPal Accounts'],
  summary: 'Retrieve a list of PayPal accounts',
  description: 'Retrieve a list of PayPal Accounts.\n',
  operationId: 'GetPayPalAccountCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      filter: CollectionFilterParamsSchema,
      sort: CollectionSortParamsSchema,
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      q: CollectionQueryParamsSchema,
      expand: CollectionExpandParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of PayPal Accounts was retrieved successfully.',
      content: { 'application/json': { schema: z.array(PayPalAccountSchema) } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postPaypalAccountsRoute = createRoute({
  method: 'post',
  path: '/paypal-accounts',
  tags: ['PayPal Accounts'],
  summary: 'Create a PayPal Account',
  description: 'Create a PayPal Account.\n',
  operationId: 'PostPayPalAccount',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'PayPalAccount resource.',
      content: { 'application/json': { schema: PayPalAccountSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'PayPal Account was created.',
      content: { 'application/json': { schema: PayPalAccountSchema } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getPaypalAccountsIdRoute = createRoute({
  method: 'get',
  path: '/paypal-accounts/{id}',
  tags: ['PayPal Accounts'],
  summary: 'Retrieve a PayPal Account',
  description: 'Retrieve a PayPal Account with specified identifier string.\n',
  operationId: 'GetPayPalAccount',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'PayPal Account was retrieved successfully.',
      content: { 'application/json': { schema: PayPalAccountSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const putPaypalAccountsIdRoute = createRoute({
  method: 'put',
  path: '/paypal-accounts/{id}',
  tags: ['PayPal Accounts'],
  summary: 'Create a PayPal account with predefined ID',
  operationId: 'PutPayPalAccount',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'PayPal Account.',
      content: { 'application/json': { schema: PayPalAccountSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'PayPal Account was created.',
      content: { 'application/json': { schema: PayPalAccountSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    409: {
      description: 'PayPal Account exist and cannot be updated.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: ValidationErrorResponse,
  },
})

export const postPaypalAccountsIdDeactivationRoute = createRoute({
  method: 'post',
  path: '/paypal-accounts/{id}/deactivation',
  tags: ['PayPal Accounts'],
  summary: 'Deactivate a PayPal Account',
  description: 'Deactivate a PayPal Account.\n',
  operationId: 'PostPayPalAccountDeactivation',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    201: {
      description: 'PayPal Account was deactivated.',
      content: { 'application/json': { schema: PayPalAccountSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    409: ConflictResponse,
  },
})

export const getPlansRoute = createRoute({
  method: 'get',
  path: '/plans',
  tags: ['Plans'],
  summary: 'Retrieve a list of plans',
  description: 'Retrieve a list of plans.\n',
  operationId: 'GetPlanCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      filter: CollectionFilterParamsSchema,
      sort: CollectionSortParamsSchema,
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      q: CollectionQueryParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of Plans was retrieved successfully.',
      content: { 'application/json': { schema: z.array(PlanSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postPlansRoute = createRoute({
  method: 'post',
  path: '/plans',
  tags: ['Plans'],
  summary: 'Create a plan',
  description: 'Create a plan.\n',
  operationId: 'PostPlan',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: PlanRequestBody,
  },
  responses: {
    201: {
      description: 'Plan was created.',
      content: { 'application/json': { schema: PlanSchema } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getPlansIdRoute = createRoute({
  method: 'get',
  path: '/plans/{id}',
  tags: ['Plans'],
  summary: 'Retrieve a plan',
  description: 'Retrieve a plan with specified identifier string.\n',
  operationId: 'GetPlan',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Plan was retrieved successfully.',
      content: { 'application/json': { schema: PlanSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const putPlansIdRoute = createRoute({
  method: 'put',
  path: '/plans/{id}',
  tags: ['Plans'],
  summary: 'Create or update a Plan with predefined ID',
  description: 'Create or update a Plan with predefined identifier string.\n',
  operationId: 'PutPlan',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: PlanRequestBody,
  },
  responses: {
    200: {
      description: 'Plan was updated.',
      content: { 'application/json': { schema: PlanSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    201: {
      description: 'Plan was created.',
      content: { 'application/json': { schema: PlanSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    422: ValidationErrorResponse,
  },
})

export const deletePlansIdRoute = createRoute({
  method: 'delete',
  path: '/plans/{id}',
  tags: ['Plans'],
  summary: 'Delete a Plan',
  description: 'Delete a Plan with predefined identifier string.\n',
  operationId: 'DeletePlan',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    204: {
      description: 'Plan was deleted.',
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    409: ConflictResponse,
  },
})

export const getProductsRoute = createRoute({
  method: 'get',
  path: '/products',
  tags: ['Products'],
  summary: 'Retrieve a list of products',
  description: 'Retrieve a list of products.\n',
  operationId: 'GetProductCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      filter: CollectionFilterParamsSchema,
      sort: CollectionSortParamsSchema,
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      q: CollectionQueryParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of products was retrieved successfully.',
      content: { 'application/json': { schema: z.array(ProductSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postProductsRoute = createRoute({
  method: 'post',
  path: '/products',
  tags: ['Products'],
  summary: 'Create a Product',
  description: 'Create a Product.\n',
  operationId: 'PostProduct',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: ProductRequestBody,
  },
  responses: {
    201: {
      description: 'Product was created.',
      content: { 'application/json': { schema: ProductSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getProductsIdRoute = createRoute({
  method: 'get',
  path: '/products/{id}',
  tags: ['Products'],
  summary: 'Retrieve a product',
  description: 'Retrieve a product with specified identifier string.\n',
  operationId: 'GetProduct',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Product was retrieved successfully.',
      content: { 'application/json': { schema: ProductSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const putProductsIdRoute = createRoute({
  method: 'put',
  path: '/products/{id}',
  tags: ['Products'],
  summary: 'Create a product with predefined ID',
  description: 'Create a product with predefined identifier string.\n',
  operationId: 'PutProduct',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: ProductRequestBody,
  },
  responses: {
    200: {
      description: 'Product was updated.',
      content: { 'application/json': { schema: ProductSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    201: {
      description: 'Product was created.',
      content: { 'application/json': { schema: ProductSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const deleteProductsIdRoute = createRoute({
  method: 'delete',
  path: '/products/{id}',
  tags: ['Products'],
  summary: 'Delete a product',
  description: 'Delete a product with predefined identifier string.\n',
  operationId: 'DeleteProduct',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    204: {
      description: 'Product was deleted.',
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const postReadyToPayRoute = createRoute({
  method: 'post',
  path: '/ready-to-pay',
  tags: ['Transactions'],
  summary: 'Ready to Pay',
  description:
    'Get available payment methods for a specific transaction or a purchase.\n\nThe payment methods order shown to a customer **SHOULD** be the same as the order in the response.\n\nThe list of available methods is generated from available [Gateway Accounts](https://user-api-docs.rebilly.com/tag/Gateway-Accounts)\nintersected with the last matched [Rules Engine](https://user-api-docs.rebilly.com/tag/Rules#operation/PutEventRule)\n`adjust-ready-to-pay` action on `ready-to-pay-requested` event.\n\nIf there were no actions matched for the specific request – all methods supported by the Gateway Accounts are sent.\n\nTo invert this behavior – place an all-matching rule at the very end of the `ready-to-pay-requested` event in\nRules Engine with an empty `paymentMethods` property of the `adjust-ready-to-pay` action.\n',
  operationId: 'PostReadyToPay',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: { content: { 'application/json': { schema: CoreReadyToPaySchema } } },
  },
  responses: {
    200: {
      description: 'Payment methods retrieved.',
      content: { 'application/json': { schema: ReadyToPayMethodsSchema } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getSearchRoute = createRoute({
  method: 'get',
  path: '/search',
  tags: ['Search'],
  summary: 'Search merchant data',
  description:
    "Search merchant's data to return resources such as customers, invoices, orders, transactions.\n",
  operationId: 'GetSearch',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      sort: CollectionSortParamsSchema,
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The default search. It will search across resources and many fields.',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Results keyed by resource.',
      content: { 'application/json': { schema: z.array(SearchSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const getShippingZonesRoute = createRoute({
  method: 'get',
  path: '/shipping-zones',
  tags: ['Shipping Zones'],
  summary: 'Retrieve a list of shipping zones',
  description: 'Retrieve a list of shipping zones.\n',
  operationId: 'GetShippingZoneCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      filter: CollectionFilterParamsSchema,
      sort: CollectionSortParamsSchema,
      q: CollectionQueryParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of shipping zones was retrieved successfully.',
      content: { 'application/json': { schema: z.array(ShippingZoneSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postShippingZonesRoute = createRoute({
  method: 'post',
  path: '/shipping-zones',
  tags: ['Shipping Zones'],
  summary: 'Create a Shipping Zone',
  description: 'Create a Shipping Zone.\n',
  operationId: 'PostShippingZone',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'Shipping Zone resource.',
      content: { 'application/json': { schema: ShippingZoneSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Shipping Zone was created.',
      content: { 'application/json': { schema: ShippingZoneSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getShippingZonesIdRoute = createRoute({
  method: 'get',
  path: '/shipping-zones/{id}',
  tags: ['Shipping Zones'],
  summary: 'Retrieve a shipping zone',
  description: 'Retrieve a shipping zone with specified identifier string.\n',
  operationId: 'GetShippingZone',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Shipping zone was retrieved successfully.',
      content: { 'application/json': { schema: ShippingZoneSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const putShippingZonesIdRoute = createRoute({
  method: 'put',
  path: '/shipping-zones/{id}',
  tags: ['Shipping Zones'],
  summary: 'Create a shipping zone with predefined ID',
  description: 'Create a shipping zone with predefined identifier string.\n',
  operationId: 'PutShippingZone',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'Shipping zone resource.',
      content: { 'application/json': { schema: ShippingZoneSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Shipping zone was updated.',
      content: { 'application/json': { schema: ShippingZoneSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    201: {
      description: 'Shipping zone was created.',
      content: { 'application/json': { schema: ShippingZoneSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const deleteShippingZonesIdRoute = createRoute({
  method: 'delete',
  path: '/shipping-zones/{id}',
  tags: ['Shipping Zones'],
  summary: 'Delete a shipping zone',
  description: 'Delete a shipping zone with predefined identifier string.\n',
  operationId: 'DeleteShippingZone',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    204: {
      description: 'Shipping zone was deleted.',
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const getSubscriptionCancellationsRoute = createRoute({
  method: 'get',
  path: '/subscription-cancellations',
  tags: ['Orders'],
  summary: 'Retrieve a list of cancellations',
  description: 'Retrieve a list of cancellations for all subscriptions.',
  operationId: 'GetSubscriptionCancellationCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      filter: CollectionFilterParamsSchema,
      sort: CollectionSortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of cancellations was retrieved successfully.',
      content: { 'application/json': { schema: z.array(SubscriptionCancellationSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postSubscriptionCancellationsRoute = createRoute({
  method: 'post',
  path: '/subscription-cancellations',
  tags: ['Orders'],
  summary: 'Cancel an order',
  description: 'Cancel an order or preview the cancellation parameters before that.',
  operationId: 'PostSubscriptionCancellation',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: SubscriptionCancellationRequestBody,
  },
  responses: {
    201: {
      description: 'Cancellation was created, the order is or will be deactivated.',
      content: { 'application/json': { schema: SubscriptionCancellationSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getSubscriptionCancellationsIdRoute = createRoute({
  method: 'get',
  path: '/subscription-cancellations/{id}',
  tags: ['Orders'],
  summary: 'Retrieve an order сancellation',
  description: 'Retrieve an order сancellation with specified identifier string.',
  operationId: 'GetSubscriptionCancellation',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Cancellation was retrieved successfully.',
      content: { 'application/json': { schema: SubscriptionCancellationSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const putSubscriptionCancellationsIdRoute = createRoute({
  method: 'put',
  path: '/subscription-cancellations/{id}',
  tags: ['Orders'],
  summary: 'Cancel an order',
  description: 'Cancel a subscription.',
  operationId: 'PutSubscriptionCancellation',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: SubscriptionCancellationRequestBody,
  },
  responses: {
    200: {
      description: 'Cancellation was updated, the order is or will be deactivated.',
      content: { 'application/json': { schema: SubscriptionCancellationSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    201: {
      description: 'Cancellation was created, the order is or will be deactivated.',
      content: { 'application/json': { schema: SubscriptionCancellationSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const deleteSubscriptionCancellationsIdRoute = createRoute({
  method: 'delete',
  path: '/subscription-cancellations/{id}',
  tags: ['Orders'],
  summary: 'Delete a cancellation',
  description: "Delete an order's cancellation. Only draft can be deleted.",
  operationId: 'DeleteSubscriptionCancellation',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    204: {
      description: 'Cancellaton was deleted.',
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    409: ConflictResponse,
  },
})

export const getSubscriptionReactivationsRoute = createRoute({
  method: 'get',
  path: '/subscription-reactivations',
  tags: ['Orders'],
  summary: 'Retrieve a list of reactivations',
  description: 'Retrieve a list of reactivations for all subscriptions.',
  operationId: 'GetSubscriptionReactivationCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      filter: CollectionFilterParamsSchema,
      sort: CollectionSortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of reactivations was retrieved successfully.',
      content: { 'application/json': { schema: z.array(SubscriptionReactivationSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postSubscriptionReactivationsRoute = createRoute({
  method: 'post',
  path: '/subscription-reactivations',
  tags: ['Orders'],
  summary: 'Reactivate an order',
  description: 'Reactivate a subscription.',
  operationId: 'PostSubscriptionReactivation',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'Reactivation resource.',
      content: { 'application/json': { schema: SubscriptionReactivationSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description:
        'Reactivation was created, the order is active and won\'t be. deactivated.\nIf there was a cancellation with status "confirmed", it is revoked.\n',
      content: { 'application/json': { schema: SubscriptionReactivationSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getSubscriptionReactivationsIdRoute = createRoute({
  method: 'get',
  path: '/subscription-reactivations/{id}',
  tags: ['Orders'],
  summary: 'Retrieve an order reactivation',
  description: 'Retrieve an order reactivation with specified identifier string.',
  operationId: 'GetSubscriptionReactivation',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Reactivation was retrieved successfully.',
      content: { 'application/json': { schema: SubscriptionReactivationSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const getSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/subscriptions',
  tags: ['Orders'],
  summary: 'Retrieve a list of orders',
  description: 'Retrieve a list of orders.\n',
  operationId: 'GetSubscriptionCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      filter: CollectionFilterParamsSchema,
      sort: CollectionSortParamsSchema,
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      q: CollectionQueryParamsSchema,
      expand: SubscriptionExpandParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of subscriptions was retrieved successfully.',
      content: { 'application/json': { schema: z.array(SubscriptionSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/subscriptions',
  tags: ['Orders'],
  summary: 'Create an order',
  description: 'Create an order. Consider using the upsert.\noperation to accomplish this task.\n',
  operationId: 'PostSubscription',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({ expand: SubscriptionExpandParamsSchema }),
    body: SubscriptionRequestBody,
  },
  responses: {
    201: {
      description: 'Order was created.',
      content: { 'application/json': { schema: SubscriptionSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getSubscriptionsIdRoute = createRoute({
  method: 'get',
  path: '/subscriptions/{id}',
  tags: ['Orders'],
  summary: 'Retrieve an order',
  description: 'Retrieve an order with specified identifier string.\n',
  operationId: 'GetSubscription',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({ expand: SubscriptionExpandParamsSchema }),
  },
  responses: {
    200: {
      description: 'Order was retrieved successfully.',
      content: { 'application/json': { schema: SubscriptionSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const putSubscriptionsIdRoute = createRoute({
  method: 'put',
  path: '/subscriptions/{id}',
  tags: ['Orders'],
  summary: 'Upsert an order with predefined ID',
  description: 'Create or update an order with predefined identifier string.\n',
  operationId: 'PutSubscription',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({ expand: SubscriptionExpandParamsSchema }),
    body: SubscriptionRequestBody,
  },
  responses: {
    200: {
      description: 'Order was updated.',
      content: { 'application/json': { schema: SubscriptionSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    201: {
      description: 'Order was created.',
      content: { 'application/json': { schema: SubscriptionSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    422: ValidationErrorResponse,
  },
})

export const postSubscriptionsIdChangeItemsRoute = createRoute({
  method: 'post',
  path: '/subscriptions/{id}/change-items',
  tags: ['Orders'],
  summary: "Change an order's items",
  description:
    "Change an order's items or quantities and designate when and if there should be pro-rata credits given.\n",
  operationId: 'PostSubscriptionItemsChange',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'Change items request.',
      content: { 'application/json': { schema: SubscriptionChangeSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Order was changed.',
      content: { 'application/json': { schema: SubscriptionSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const postSubscriptionsIdInterimInvoiceRoute = createRoute({
  method: 'post',
  path: '/subscriptions/{id}/interim-invoice',
  tags: ['Orders'],
  summary: 'Issue an interim invoice for a subscription order',
  description:
    "Issue an interim invoice for a subscription, typically used in conjunction. with plan changes and pro rata adjustments.\nThis process creates an invoice, adds the subscription's line items to the invoice, and issues the invoice, and applies\npayment to it if a transaction id is supplied.\n",
  operationId: 'PostSubscriptionInterimInvoice',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'Issue an interim invoice.',
      content: { 'application/json': { schema: SubscriptionInvoiceSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Invoice was created.',
      content: { 'application/json': { schema: InvoiceSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getSubscriptionsIdTimelineRoute = createRoute({
  method: 'get',
  path: '/subscriptions/{id}/timeline',
  tags: ['Orders'],
  summary: 'Retrieve a list of order timeline messages',
  description: 'Retrieve a list of order timeline messages.\n',
  operationId: 'GetSubscriptionTimelineCollection',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      filter: CollectionFilterParamsSchema,
      sort: CollectionSortParamsSchema,
      q: CollectionQueryParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of order timeline messages was retrieved successfully.',
      content: { 'application/json': { schema: z.array(OrderTimelineSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
  },
})

export const postSubscriptionsIdTimelineRoute = createRoute({
  method: 'post',
  path: '/subscriptions/{id}/timeline',
  tags: ['Orders'],
  summary: 'Create an order Timeline comment',
  description: 'Create an order Timeline comment.\n',
  operationId: 'PostSubscriptionTimeline',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'Order Timeline resource.',
      content: { 'application/json': { schema: OrderTimelineSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Order Timeline comment was created.',
      content: { 'application/json': { schema: OrderTimelineSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getSubscriptionsIdTimelineMessageIdRoute = createRoute({
  method: 'get',
  path: '/subscriptions/{id}/timeline/{messageId}',
  tags: ['Orders'],
  summary: 'Retrieve an Order Timeline message',
  description: 'Retrieve a order message with specified identifier string.\n',
  operationId: 'GetSubscriptionTimeline',
  request: {
    params: z.object({
      id: ResourceIdParamsSchema,
      messageId: z
        .string()
        .openapi({
          param: {
            description: 'The Order Timeline message ID.',
            in: 'path',
            name: 'messageId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Order message was retrieved successfully.',
      content: { 'application/json': { schema: OrderTimelineSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const deleteSubscriptionsIdTimelineMessageIdRoute = createRoute({
  method: 'delete',
  path: '/subscriptions/{id}/timeline/{messageId}',
  tags: ['Orders'],
  summary: 'Delete an Order Timeline message',
  description: 'Delete an Order Timeline message with predefined identifier string.\n',
  operationId: 'DeleteSubscriptionTimeline',
  request: {
    params: z.object({
      id: ResourceIdParamsSchema,
      messageId: z
        .string()
        .openapi({
          param: {
            description: 'The Order Timeline message ID.',
            in: 'path',
            name: 'messageId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    204: {
      description: 'Order Timeline message was deleted.',
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    409: ConflictResponse,
  },
})

export const getSubscriptionsIdUpcomingInvoicesRoute = createRoute({
  method: 'get',
  path: '/subscriptions/{id}/upcoming-invoices',
  tags: ['Orders'],
  summary: "Retrieve subscription order's upcoming invoice",
  description:
    'Retrieve an upcoming invoice from the specified subscription order.\nThe endpoint is temporary before upcoming invoices get a complete integration.\n',
  operationId: 'GetSubscriptionUpcomingInvoiceCollection',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({ expand: CollectionExpandParamsSchema }),
  },
  responses: {
    200: {
      description: 'Upcoming invoices are retrieved successfully.',
      content: { 'application/json': { schema: z.array(InvoiceSchema) } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const postSubscriptionsIdUpcomingInvoicesInvoiceIdIssueRoute = createRoute({
  method: 'post',
  path: '/subscriptions/{id}/upcoming-invoices/{invoiceId}/issue',
  tags: ['Orders'],
  summary: 'Issue an upcoming invoice for early pay',
  description: 'Issue an upcoming invoice with specified identifier string for early pay.\n',
  operationId: 'PostUpcomingInvoiceIssuance',
  request: {
    params: z.object({
      id: ResourceIdParamsSchema,
      invoiceId: z
        .string()
        .openapi({
          param: {
            description: 'The Upcoming Invoice ID.',
            in: 'path',
            name: 'invoiceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'InvoiceIssue resource.',
      content: { 'application/json': { schema: InvoiceIssueSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Upcoming Invoice was issued successfully.',
      content: { 'application/json': { schema: InvoiceSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    409: ConflictResponse,
  },
})

export const getTagsRoute = createRoute({
  method: 'get',
  path: '/tags',
  tags: ['Tags'],
  summary: 'Retrieve a list of tags',
  description: 'Retrieve a list of tags.\n',
  operationId: 'GetTagCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      filter: CollectionFilterParamsSchema,
      q: CollectionQueryParamsSchema,
      sort: CollectionSortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of tags was retrieved successfully.',
      content: { 'application/json': { schema: z.array(TagSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postTagsRoute = createRoute({
  method: 'post',
  path: '/tags',
  tags: ['Tags'],
  summary: 'Create a tag',
  description: 'Create a tag.\n',
  operationId: 'PostTag',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: TagRequestBody,
  },
  responses: {
    201: {
      description: 'Tag was created.',
      content: { 'application/json': { schema: TagSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    409: ConflictResponse,
    422: ValidationErrorResponse,
  },
})

export const getTagsTagRoute = createRoute({
  method: 'get',
  path: '/tags/{tag}',
  tags: ['Tags'],
  summary: 'Retrieve a tag',
  description: 'Retrieve a tag.\n',
  operationId: 'GetTag',
  request: {
    params: z.object({ tag: TagParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Tag with specified name was retrieved successfully.',
      content: { 'application/json': { schema: TagSchema } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const deleteTagsTagRoute = createRoute({
  method: 'delete',
  path: '/tags/{tag}',
  tags: ['Tags'],
  summary: 'Delete a tag',
  description: "Delete a tag.\nIt's an asynchronous operation.\n",
  operationId: 'DeleteTag',
  request: {
    params: z.object({ tag: TagParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    204: { description: 'Tag was deleted.' },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const patchTagsTagRoute = createRoute({
  method: 'patch',
  path: '/tags/{tag}',
  tags: ['Tags'],
  summary: 'Update a tag',
  description: 'Update a tag.\n',
  operationId: 'PatchTag',
  request: {
    params: z.object({ tag: TagParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: TagRequestBody,
  },
  responses: {
    200: {
      description: 'Tag was updated.',
      content: { 'application/json': { schema: TagSchema } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    409: ConflictResponse,
    422: ValidationErrorResponse,
  },
})

export const postTagsTagCustomersRoute = createRoute({
  method: 'post',
  path: '/tags/{tag}/customers',
  tags: ['Tags'],
  summary: 'Tag a list of customers',
  description:
    "Tag a list of customers.\nIf the customer from the list is already tagged it will be ignored.\nIt's an asynchronous operation.\n",
  operationId: 'PostTagCustomerCollection',
  request: {
    params: z.object({ tag: TagParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              customerIds: z
                .array(z.string())
                .min(1)
                .max(1000)
                .openapi({ description: 'The list of customer IDs.' }),
            })
            .openapi({ required: ['customerIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Customers was tagged.' },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const deleteTagsTagCustomersRoute = createRoute({
  method: 'delete',
  path: '/tags/{tag}/customers',
  tags: ['Tags'],
  summary: 'Untag a list of customers',
  description:
    "Untag a list of customers.\nIf the customer from the list is already untagged it will be ignored.\nIt's an asynchronous operation.\n",
  operationId: 'DeleteTagCustomerCollection',
  request: {
    params: z.object({ tag: TagParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              customerIds: z
                .array(z.string())
                .min(1)
                .max(1000)
                .openapi({ description: 'The list of customer IDs.' }),
            })
            .openapi({ required: ['customerIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Customers was untagged.' },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const postTagsTagCustomersCustomerIdRoute = createRoute({
  method: 'post',
  path: '/tags/{tag}/customers/{customerId}',
  tags: ['Tags'],
  summary: 'Tag a customer',
  description: 'Tag a customer.\n',
  operationId: 'PostTagCustomer',
  request: {
    params: z.object({ tag: TagParamsSchema, customerId: CustomerIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    204: { description: 'Customer was tagged.' },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const deleteTagsTagCustomersCustomerIdRoute = createRoute({
  method: 'delete',
  path: '/tags/{tag}/customers/{customerId}',
  tags: ['Tags'],
  summary: 'Untag a customer',
  description: 'Untag a customer.\n',
  operationId: 'DeleteTagCustomer',
  request: {
    params: z.object({ tag: TagParamsSchema, customerId: CustomerIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    204: { description: 'Customer was untagged.' },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const getTokensRoute = createRoute({
  method: 'get',
  path: '/tokens',
  tags: ['Payment Tokens'],
  summary: 'Retrieve a list of tokens',
  description: 'Retrieve a list of tokens.\n',
  operationId: 'GetTokenCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({ limit: CollectionLimitParamsSchema, offset: CollectionOffsetParamsSchema }),
  },
  responses: {
    200: {
      description: 'A list of tokens was retrieved successfully.',
      content: { 'application/json': { schema: z.array(CompositeTokenSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postTokensRoute = createRoute({
  method: 'post',
  path: '/tokens',
  tags: ['Payment Tokens'],
  summary: 'Create a payment token',
  description:
    '[FramePay](https://docs.rebilly.com/docs/developer-docs/framepay/)\nis the recommended way to\ncreate a payment token because it minimizes\nPCI DSS compliance.  Once a payment token\nis created, it can only be used once.\n\nA payment token expires upon first use\nor within 30 minutes of the token creation\n(whichever comes first).\n',
  operationId: 'PostToken',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'PaymentToken resource.',
      content: { 'application/json': { schema: CompositeTokenSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Token was created.',
      content: { 'application/json': { schema: CompositeTokenSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
  security: [{ PublishableApiKey: [] }, { SecretApiKey: [] }, { JWT: [] }],
})

export const getTokensTokenRoute = createRoute({
  method: 'get',
  path: '/tokens/{token}',
  tags: ['Payment Tokens'],
  summary: 'Retrieve a token',
  description: 'Retrieve a token with specified identifier string.\n',
  operationId: 'GetToken',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'The token identifier string.',
            in: 'path',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Token was retrieved successfully.',
      content: { 'application/json': { schema: CompositeTokenSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
  security: [{ PublishableApiKey: [] }],
})

export const getTransactionsRoute = createRoute({
  method: 'get',
  path: '/transactions',
  tags: ['Transactions'],
  summary: 'Retrieve a list of transactions',
  description: 'Retrieve a list of transactions.\n',
  operationId: 'GetTransactionCollection',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      filter: CollectionFilterParamsSchema,
      q: CollectionQueryParamsSchema,
      sort: CollectionSortParamsSchema,
      expand: CollectionExpandParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of transactions was retrieved successfully.',
      content: { 'application/json': { schema: z.array(TransactionSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const postTransactionsRoute = createRoute({
  method: 'post',
  path: '/transactions',
  tags: ['Transactions'],
  summary: 'Create a transaction',
  description:
    'Create a transaction of type `sale` or `authorize`.\nThis endpoint supports two main styles of transactions:\n  1. A real-time decision and response.\n  2. User approval/interaction is required.\n\nA real-time decision is very familiar.  You send a request, and\ninspect the `result` of the response for `approved` or `declined`.\n\nHowever, many transactions, especially those for alternative\nmethods, require the user to interact with a 3rd party.  You\nmay be able to envision PayPal, for example, the user must\ngive permission to complete the payment (or accept the\nbilling agreement).\n\nEven payment cards may require user approval in the case of\n3D secure authentication.  In the event that approval is\nrequired, you will receive a response back and notice\nthat the `result` is `unknown`.  You will find that the\n`status` is `waiting-approval`. And you will find in the\n`_links` section of the response a link for the `approvalUrl`.\n\nIn this case you would either open the `approvalUrl` in an\niframe or in a pop (better workflow for mobile).\n',
  operationId: 'PostTransaction',
  request: {
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({ expand: CollectionExpandParamsSchema }),
    body: TransactionRequestRequestBody,
  },
  responses: {
    201: {
      description: 'Transaction was created.',
      content: { 'application/json': { schema: TransactionSchema } },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    409: ConflictResponse,
    422: ValidationErrorResponse,
  },
})

export const getTransactionsIdRoute = createRoute({
  method: 'get',
  path: '/transactions/{id}',
  tags: ['Transactions'],
  summary: 'Retrieve a Transaction',
  description: 'Retrieve a Transaction with specified identifier string.\n',
  operationId: 'GetTransaction',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({ expand: CollectionExpandParamsSchema }),
  },
  responses: {
    200: {
      description: 'Transaction was retrieved successfully.',
      content: { 'application/json': { schema: TransactionSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const patchTransactionsIdRoute = createRoute({
  method: 'patch',
  path: '/transactions/{id}',
  tags: ['Transactions'],
  summary: 'Update a transaction',
  description: "Update a transaction's custom fields.\n",
  operationId: 'PatchTransaction',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: PatchTransactionRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Transaction was updated successfully.',
      content: { 'application/json': { schema: TransactionSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const postTransactionsIdQueryRoute = createRoute({
  method: 'post',
  path: '/transactions/{id}/query',
  tags: ['Transactions'],
  summary: 'Query a Transaction',
  description:
    'Query a Transaction with a specified identifier string.\nThe query will contact the gateway account to find the result and amount/currency.\nThe response should be analyzed.  If deemed appropriate, the transaction could be updated using the Transaction Update API.\n',
  operationId: 'PostTransactionQuery',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    201: {
      description: 'Transaction was queried successfully.',
      content: { 'application/json': { schema: TransactionQuerySchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const postTransactionsIdRefundRoute = createRoute({
  method: 'post',
  path: '/transactions/{id}/refund',
  tags: ['Transactions'],
  summary: 'Refund a Transaction',
  description:
    'Refund a Transaction with specified identifier string.\nNote that the refund will be in the same currency as the original transaction.\n',
  operationId: 'PostTransactionRefund',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'Transaction resource.',
      content: { 'application/json': { schema: TransactionRefundSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Transaction was refunded successfully.',
      content: { 'application/json': { schema: TransactionSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const getTransactionsIdTimelineRoute = createRoute({
  method: 'get',
  path: '/transactions/{id}/timeline',
  tags: ['Transactions'],
  summary: 'Retrieve a list of transaction timeline messages',
  description: 'Retrieve a list of transaction timeline messages.\n',
  operationId: 'GetTransactionTimelineCollection',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    query: z.object({
      limit: CollectionLimitParamsSchema,
      offset: CollectionOffsetParamsSchema,
      filter: CollectionFilterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of transaction timeline messages was retrieved successfully.',
      content: { 'application/json': { schema: z.array(TransactionTimelineSchema) } },
      headers: z.object({
        'Pagination-Limit': PaginationLimitHeaderSchema,
        'Pagination-Offset': PaginationOffsetHeaderSchema,
        'Pagination-Total': PaginationTotalHeaderSchema,
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
})

export const postTransactionsIdTimelineRoute = createRoute({
  method: 'post',
  path: '/transactions/{id}/timeline',
  tags: ['Transactions'],
  summary: 'Create a transaction Timeline comment',
  description: 'Create a transaction Timeline comment.\n',
  operationId: 'PostTransactionTimeline',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: {
      description: 'Transaction Timeline resource.',
      content: { 'application/json': { schema: TransactionTimelineSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Transaction Timeline comment was created.',
      content: { 'application/json': { schema: TransactionTimelineSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: ValidationErrorResponse,
  },
})

export const getTransactionsIdTimelineMessageIdRoute = createRoute({
  method: 'get',
  path: '/transactions/{id}/timeline/{messageId}',
  tags: ['Transactions'],
  summary: 'Retrieve a transaction Timeline message',
  description: 'Retrieve a timeline message with specified identifier string.\n',
  operationId: 'GetTransactionTimeline',
  request: {
    params: z.object({
      id: ResourceIdParamsSchema,
      messageId: z
        .string()
        .openapi({
          param: {
            description: 'The Transaction Timeline message ID.',
            in: 'path',
            name: 'messageId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Timeline message was retrieved successfully.',
      content: { 'application/json': { schema: TransactionTimelineSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})

export const deleteTransactionsIdTimelineMessageIdRoute = createRoute({
  method: 'delete',
  path: '/transactions/{id}/timeline/{messageId}',
  tags: ['Transactions'],
  summary: 'Delete a Transaction Timeline message',
  description: 'Delete a Transaction Timeline message with predefined identifier string.\n',
  operationId: 'DeleteTransactionTimeline',
  request: {
    params: z.object({
      id: ResourceIdParamsSchema,
      messageId: z
        .string()
        .openapi({
          param: {
            description: 'The Transaction Timeline message ID.',
            in: 'path',
            name: 'messageId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
  },
  responses: {
    204: {
      description: 'Transaction Timeline message was deleted.',
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    409: ConflictResponse,
  },
})

export const postTransactionsIdUpdateRoute = createRoute({
  method: 'post',
  path: '/transactions/{id}/update',
  tags: ['Transactions'],
  summary: 'Update a Transaction status',
  description:
    'Update a Transaction manually to completed status with given result with optional currency and amount.',
  operationId: 'PostTransactionUpdate',
  request: {
    params: z.object({ id: ResourceIdParamsSchema }),
    headers: z.object({ 'Organization-Id': OrganizationIdParamsSchema }),
    body: { content: { 'application/json': { schema: TransactionUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Transaction was updated.',
      content: { 'application/json': { schema: TransactionSchema } },
      headers: z.object({
        'Rate-Limit-Limit': RateLimitLimitHeaderSchema,
        'Rate-Limit-Remaining': RateLimitRemainingHeaderSchema,
        'Rate-Limit-Reset': RateLimitResetHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
  },
})
