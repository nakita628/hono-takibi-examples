import { createRoute, z } from '@hono/zod-openapi'

const AchNotificationOfChangeNotificationRequestDataNocSchema = z
  .strictObject({
    newBankAccountNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'New bank account number.' }),
    newBankAccountType: z
      .enum(['Checking', 'Savings'])
      .exactOptional()
      .openapi({
        description:
          'New bank account type.\n\nPossible values:\n*  **Savings**\n*  **Checking**\n\n',
      }),
    newBranchCode: z.string().exactOptional().openapi({ description: 'New branch code.' }),
    reasonCode: z
      .enum(['C01', 'C02', 'C03', 'C04', 'C05', 'C06', 'C07', 'C09', 'C10', 'C11', 'C12'])
      .openapi({
        description:
          'Notification of Change reason code.\n\nPossible values:\n*  **C01** : Incorrect bank account number.\n*  **C02** : Incorrect transit/routing number.\n*  **C03** : Incorrect transit/routing number and bank account number.\n*  **C04** : Bank account name change.\n*  **C05** : Incorrect payment code.\n*  **C06** : Incorrect bank account number and transit code.\n*  **C07** : Incorrect transit/routing number, bank account number and payment code.\n*  **C09** : Incorrect individual ID number.\n*  **C10** : Incorrect company name.\n*  **C11** : Incorrect company identification.\n*  **C12** : Incorrect company name and company ID.\n\n',
      }),
  })
  .openapi({ required: ['reasonCode'] })
  .openapi('AchNotificationOfChangeNotificationRequestDataNoc')

const AchNotificationOfChangeNotificationRequestDataSchema = z
  .strictObject({
    notificationOfChange: AchNotificationOfChangeNotificationRequestDataNocSchema.openapi({
      description: 'The Notification of Change information.',
    }),
    pspReference: z.string().openapi({ description: 'PSP Reference.' }),
    shopperReference: z.string().openapi({ description: 'Shopper reference.' }),
  })
  .openapi({ required: ['notificationOfChange', 'pspReference', 'shopperReference'] })
  .openapi('AchNotificationOfChangeNotificationRequestData')

const AchNotificationOfChangeNotificationRequestSchema = z
  .strictObject({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp for when the webhook was created.' }),
    data: AchNotificationOfChangeNotificationRequestDataSchema.exactOptional().openapi({
      description: 'Contains details of the update.',
    }),
    environment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    type: z.string().openapi({ description: 'Type of notification.' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version of this webhook type.' }),
  })
  .openapi({ required: ['createdAt', 'type'] })
  .openapi('AchNotificationOfChangeNotificationRequest')

const AmountSchema = z
  .strictObject({
    currency: z
      .string()
      .length(3)
      .openapi({
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the amount.',
      }),
    value: z
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
          'The numeric value of the amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units).',
      }),
  })
  .openapi({ required: ['currency', 'value'] })
  .openapi('Amount')

const AuthorisationAdjustmentAdditionalDataSchema = z
  .strictObject({
    adjustAuthorisationData: z.string().exactOptional(),
    authCode: z.string().exactOptional(),
    bookingDate: z.string().exactOptional(),
    hmacSignature: z.string().exactOptional(),
    merchantAdviceCode: z.string().exactOptional(),
    paymentMethodVariant: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthorisationAdjustmentAdditionalData')

const AuthorisationAdjustmentNotificationRequestItemSchema = z
  .strictObject({
    additionalData: AuthorisationAdjustmentAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('AuthorisationAdjustmentNotificationRequestItem')

const AuthorisationAdjustmentNotificationRequestItemWrapperSchema = z
  .object({
    NotificationRequestItem: AuthorisationAdjustmentNotificationRequestItemSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthorisationAdjustmentNotificationRequestItemWrapper')

const AuthorisationAdjustmentNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(AuthorisationAdjustmentNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('AuthorisationAdjustmentNotificationRequest')

const AuthorisationAdjustmentNotificationRequestItemRecursiveSchema = z
  .strictObject({
    additionalData: AuthorisationAdjustmentAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('AuthorisationAdjustmentNotificationRequestItemRecursive')

const AuthorisationNotificationAdditionalDataSchema = z
  .strictObject({
    'GoPay.gopayAccountId': z
      .string()
      .exactOptional()
      .openapi({
        description: "A GoPay shopper's wallet ID. Used by merchant for Risk and Fraud checks.",
      }),
    PaymentAccountReference: z.string().exactOptional(),
    accountValidation: z.string().exactOptional(),
    acquirerAccountCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The acquirer account code.' }),
    acquirerCode: z.string().exactOptional().openapi({ description: 'The acquirer code.' }),
    acquirerReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The acquirer reference.' }),
    acquirerResponseCode: z.string().exactOptional(),
    'acsRenderingType.acsInterface': z.string().exactOptional(),
    'acsRenderingType.acsUiTemplate': z.string().exactOptional(),
    adjustAuthorisationData: z.string().exactOptional(),
    'airline.<name>': z
      .string()
      .exactOptional()
      .openapi({ description: 'Information related to airlines.' }),
    alias: z.string().exactOptional().openapi({ description: 'Alias for this card.' }),
    aliasType: z.string().exactOptional().openapi({ description: 'Alias type.' }),
    allow3DS2: z.string().exactOptional(),
    'antfinancialosp.timestamp': z.string().exactOptional(),
    'applicationinfo.<name>': z
      .string()
      .exactOptional()
      .openapi({ description: 'Shopper device application info in a dynamic format.' }),
    arn: z
      .string()
      .exactOptional()
      .openapi({ description: 'Acquirer Reference Number of the dispute.' }),
    authCode: z.string().exactOptional(),
    authDateTime: z.string().exactOptional(),
    authenticationType: z
      .string()
      .exactOptional()
      .openapi({ description: '3DS authentication type' }),
    authorisationMid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Authorisation MID of the acquirer.' }),
    authorisedAmountCurrency: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency authorised for a dynamic zero auth request.' }),
    authorisedAmountValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The amount authorised for a dynamic zero auth request.' }),
    avsResult: z
      .string()
      .exactOptional()
      .openapi({ description: 'Address Verification Service result.' }),
    avsResultRaw: z
      .string()
      .exactOptional()
      .openapi({ description: 'Address Verification Service result raw.' }),
    'bankAccount.iban': z.string().exactOptional(),
    'bankAccount.ownerName': z.string().exactOptional(),
    bankAccountNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The bank account number.' }),
    bankLocation: z.string().exactOptional().openapi({ description: 'The bank location.' }),
    bankLocationId: z.string().exactOptional().openapi({ description: 'The bank location ID.' }),
    bankName: z.string().exactOptional().openapi({ description: 'The bank name.' }),
    bankSummary: z.string().exactOptional(),
    bankVerificationResult: z
      .string()
      .exactOptional()
      .openapi({ description: 'The bank verification result.' }),
    bankVerificationResultRaw: z
      .string()
      .exactOptional()
      .openapi({ description: 'The bank verification result raw.' }),
    bic: z.string().exactOptional().openapi({ description: 'Business Identifier Code.' }),
    'billingAddress.city': z.string().exactOptional(),
    'billingAddress.country': z.string().exactOptional(),
    'billingAddress.houseNumberOrName': z.string().exactOptional(),
    'billingAddress.postalCode': z.string().exactOptional(),
    'billingAddress.stateOrProvince': z.string().exactOptional(),
    'billingAddress.street': z.string().exactOptional(),
    binRangeId: z.string().exactOptional(),
    bookingDate: z.string().exactOptional(),
    browserCode: z.string().exactOptional().openapi({ description: 'Browser code.' }),
    captureDelayHours: z
      .string()
      .exactOptional()
      .openapi({ description: 'The amount of delay after authorisation.' }),
    captureMerchantReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The merchant reference of the capture.' }),
    capturePspReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PSP reference of the capture.' }),
    cardBin: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card Bank Identification number.' }),
    cardFunction: z.string().exactOptional(),
    cardIssuerCountryId: z.string().exactOptional(),
    cardIssuingBank: z.string().exactOptional().openapi({ description: 'Card issuing bank.' }),
    cardIssuingCountry: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card issuing country.' }),
    cardIssuingCurrency: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card issuing currency.' }),
    cardPaymentMethod: z.string().exactOptional().openapi({ description: 'Card payment method.' }),
    cardProductId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The card product identifier for the card used in the transaction.',
      }),
    cardSchemeEnhancedDataLevel: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card scheme enhanced data level.' }),
    cardSummary: z.string().exactOptional().openapi({ description: 'Card summary' }),
    cavv: z
      .string()
      .exactOptional()
      .openapi({ description: 'Secure Cardholder Authentication Verification Value.' }),
    cavvAlgorithm: z.string().exactOptional().openapi({ description: 'CAVV algorithm.' }),
    challengeCancel: z
      .string()
      .exactOptional()
      .openapi({ description: 'Information about the 3DS challenge being canceled.' }),
    checkoutSessionId: z.string().exactOptional(),
    coBrandedWith: z.string().exactOptional(),
    countryCode: z.string().exactOptional(),
    currentBalanceCurrency: z.string().exactOptional(),
    currentBalanceValue: z.string().exactOptional(),
    cvcResult: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card Verification Code result.' }),
    cvcResultRaw: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card Verification Code result raw.' }),
    'deliveryAddress.city': z.string().exactOptional(),
    'deliveryAddress.country': z.string().exactOptional(),
    'deliveryAddress.houseNumberOrName': z.string().exactOptional(),
    'deliveryAddress.postalCode': z
      .string()
      .exactOptional()
      .openapi({ description: 'Delivery address: postal code.' }),
    'deliveryAddress.stateOrProvince': z.string().exactOptional(),
    'deliveryAddress.street': z.string().exactOptional(),
    deviceType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of device the request was made from.' }),
    'directdebit_GB.dateOfSignature': z
      .string()
      .exactOptional()
      .openapi({ description: 'Direct debit GB: date of signature.' }),
    'directdebit_GB.mandateId': z
      .string()
      .exactOptional()
      .openapi({ description: 'Direct debit GB: mandate ID.' }),
    'directdebit_GB.sequenceType': z
      .string()
      .exactOptional()
      .openapi({ description: 'Direct debit GB: sequence type.' }),
    'directdebit_GB.serviceUserName': z
      .string()
      .exactOptional()
      .openapi({ description: 'Direct debit GB: service user name.' }),
    'directdebit_GB.serviceUserNumber': z
      .string()
      .exactOptional()
      .openapi({ description: 'Direct debit GB: service user number.' }),
    domesticRefusalReasonRaw: z.string().exactOptional(),
    domesticShopperAdvice: z.string().exactOptional(),
    dsTransID: z.string().exactOptional(),
    eci: z.string().exactOptional().openapi({ description: '3DS: Electronic Commerce Indicator.' }),
    expiryDate: z.string().exactOptional().openapi({ description: 'Expiry date of the card.' }),
    extraCostsCurrency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional cost used in [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification).',
      }),
    extraCostsValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Related additional cost value.' }),
    extraCostsValueGratuity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Gratuity related additional cost value.' }),
    extraCostsValueSurcharge: z
      .string()
      .exactOptional()
      .openapi({ description: 'Surcharge related additional cost value.' }),
    'fraudCheck-<check ID>-<name>': z
      .string()
      .exactOptional()
      .openapi({ description: 'Information on the fraud check in a dynamic format.' }),
    fraudManualReview: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates if the risk check was done manually.' }),
    fraudOffset: z.string().exactOptional().openapi({ description: 'The fraud offset.' }),
    fraudResultType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Result type of the fraud check.' }),
    fraudRiskLevel: z
      .enum(['veryLow', 'low', 'medium', 'high', 'veryHigh'])
      .exactOptional()
      .openapi({
        description:
          'The risk level of the transaction as classified by the [machine learning](https://docs.adyen.com/risk-management/configure-your-risk-profile/machine-learning-rules/) fraud risk rule. The risk level indicates the likelihood that a transaction will result in a fraudulent dispute. Possible values:\n* veryLow\n* low\n* medium\n* high\n* veryHigh\n\n',
      }),
    fundingSource: z.string().exactOptional().openapi({ description: 'Funding source.' }),
    fundsAvailability: z.string().exactOptional(),
    grossCurrency: z
      .string()
      .exactOptional()
      .openapi({ description: 'Chargeback gross currency.' }),
    grossValue: z.string().exactOptional().openapi({ description: 'Chargeback gross value.' }),
    hmacSignature: z.string().exactOptional(),
    iDealConsumerAccountNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Only included for iDeal payments.' }),
    iDealConsumerBIC: z
      .string()
      .exactOptional()
      .openapi({ description: 'Only included for iDeal payments.' }),
    iDealConsumerCity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Only included for iDeal payments.' }),
    iDealConsumerIBAN: z
      .string()
      .exactOptional()
      .openapi({ description: 'Only included for iDeal payments.' }),
    iDealConsumerIban: z
      .string()
      .exactOptional()
      .openapi({ description: 'Only included for iDeal payments.' }),
    iDealConsumerName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Only included for iDeal payments.' }),
    iDealTransactionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Only included for iDeal payments.' }),
    iban: z.string().exactOptional().openapi({ description: 'International Bank Account Number.' }),
    inferredRefusalReason: z.string().exactOptional(),
    'installments.value': z.string().exactOptional(),
    interactionCounter: z
      .string()
      .exactOptional()
      .openapi({ description: '3DS interaction counter.' }),
    isCardCommercial: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates if the card is used for business purposes only.' }),
    issuerBin: z.string().exactOptional(),
    'issuerComments.cardholderName': z
      .string()
      .exactOptional()
      .openapi({ description: 'Card holder name.' }),
    issuerConcentratorName: z.string().exactOptional(),
    issuerCountry: z
      .string()
      .exactOptional()
      .openapi({ description: 'Country of the card issuer.' }),
    'latestCard.bin': z.string().exactOptional(),
    'latestCard.expiryDate': z.string().exactOptional(),
    'latestCard.summary': z.string().exactOptional(),
    liabilityShift: z.string().exactOptional().openapi({ description: 'Risk liability shift.' }),
    mcBankNetReferenceNumber: z.string().exactOptional(),
    mcFinancialNetworkCode: z.string().exactOptional(),
    merchantAdviceCode: z.string().exactOptional(),
    'merchantIntegration.type': z.string().exactOptional(),
    'merchantIntegration.version': z.string().exactOptional(),
    merchantOrderReference: z.string().exactOptional(),
    merchantReference: z.string().exactOptional(),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "A set of key-value pairs provided in the request, prefixed with 'metadata.'. For example, 'metadata.myField: myValue'",
      }),
    modifiedShopperReference: z.string().exactOptional(),
    networkProcessingMode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the processing flow.\n\nPossible values:\n* **sale**: You do not need to separately capture the funds, because capture happens automatically as part of the transaction. \n* **auth**: If you have not [configured automatic capture for the transaction](https://docs.adyen.com/online-payments/capture#types-of-capture), you must manually capture the funds.',
      }),
    'networkToken.available': z.string().exactOptional(),
    'networkToken.bin': z.string().exactOptional(),
    'networkToken.tokenSummary': z.string().exactOptional(),
    networkTxDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The network transaction date for Mastercard transactions processed by Bank of America Merchant Services (BAMS).',
      }),
    networkTxReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The network transaction reference from the scheme, when available.',
      }),
    'nfc.expire': z.string().exactOptional().openapi({ description: 'NFC related.' }),
    'nfc.issue': z.string().exactOptional().openapi({ description: 'NFC related.' }),
    'nfc.pin.provided': z.string().exactOptional().openapi({ description: 'NFC related.' }),
    'nfc.uid': z.string().exactOptional().openapi({ description: 'NFC related.' }),
    oneyRawResponse: z.string().exactOptional(),
    'opi.transToken': z
      .string()
      .exactOptional()
      .openapi({
        description: 'The transaction token to be used in your Oracle Opera integration.',
      }),
    ownerCity: z.string().exactOptional().openapi({ description: 'Owner city.' }),
    ownerName: z.string().exactOptional().openapi({ description: 'Owner name.' }),
    payULatamTrazabilityCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Related to PayU in LATAM.' }),
    paymentLinkId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the Checkout payment link.' }),
    paymentMethod: z.string().exactOptional(),
    paymentMethodVariant: z.string().exactOptional(),
    payoutEligible: z.string().exactOptional(),
    paypalAddressStatus: z.string().exactOptional().openapi({ description: 'Related to PayPal.' }),
    paypalBillingName: z.string().exactOptional().openapi({ description: 'Related to PayPal.' }),
    paypalEmail: z
      .string()
      .exactOptional()
      .openapi({
        description: "The buyer's PayPal account email address.\n\nExample: paypaltest@adyen.com",
      }),
    paypalErrorCode: z.string().exactOptional().openapi({ description: 'Related to PayPal.' }),
    paypalErrorDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Related to PayPal.' }),
    paypalPairingId: z.string().exactOptional().openapi({ description: 'Related to PayPal.' }),
    paypalPayerId: z
      .string()
      .exactOptional()
      .openapi({ description: "The buyer's PayPal ID.\n\nExample: LF5HCWWBRV2KL" }),
    paypalPayerResidenceCountry: z
      .string()
      .exactOptional()
      .openapi({ description: "The buyer's country of residence.\n\nExample: NL" }),
    paypalPayerStatus: z
      .string()
      .exactOptional()
      .openapi({ description: "The status of the buyer's PayPal account.\n\nExample: unverified" }),
    paypalPhone: z.string().exactOptional().openapi({ description: 'Related to PayPal.' }),
    paypalProtectionEligibility: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The eligibility for PayPal Seller Protection for this payment.\n\nExample: Ineligible',
      }),
    paypalRisk: z.string().exactOptional().openapi({ description: 'Related to PayPal.' }),
    platform: z.string().exactOptional(),
    realtimeAccountUpdaterStatus: z
      .string()
      .exactOptional()
      .openapi({ description: 'Real time Account Update status.' }),
    'receipt.retrievalReferenceNumber': z.string().exactOptional(),
    'receipt.systemTraceAuditNumber': z.string().exactOptional(),
    'recurring.contractTypes': z.string().exactOptional(),
    'recurring.firstPspReference': z.string().exactOptional(),
    'recurring.recurringDetailReference': z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The new tokenization.storedPaymentMethodId field replaces this field.\nThe `recurringDetailReference` returned in the `/payments` response when you stored the shopper's payment details.",
      }),
    'recurring.shopperReference': z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The new tokenization.shopperReferencefield replaces this field.\nThe shopper reference you set when you made the request to store the shopper's payment details.",
      }),
    recurringProcessingModel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The recurring processing model the request was flagged with.' }),
    redirectUrl: z.string().exactOptional(),
    referred: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the payment is referred, this field is set to true.\n\nThis field is unavailable if the payment is referred and is usually not returned with ecommerce transactions.\n\nExample: true',
      }),
    refusalReasonRaw: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Raw refusal reason received from the acquirer, where available.\n\nExample: AUTHORISED',
      }),
    'retry.rescueScheduled': z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates if an auto rescue for a payment is scheduled.' }),
    returnUrl: z.string().exactOptional(),
    riskExperimentReference: z.string().exactOptional(),
    riskProfile: z.string().exactOptional().openapi({ description: 'Related to Risk.' }),
    riskProfileReference: z.string().exactOptional().openapi({ description: 'Related to Risk.' }),
    'riskdata.<name>': z
      .string()
      .exactOptional()
      .openapi({ description: 'Risk data in a dynamic format.' }),
    scaExemptionRequested: z.string().exactOptional(),
    'sepadirectdebit.dateOfSignature': z.string().exactOptional(),
    'sepadirectdebit.mandateId': z.string().exactOptional(),
    'sepadirectdebit.sequenceType': z.string().exactOptional(),
    shopperCountry: z.string().exactOptional().openapi({ description: 'Country of the shopper.' }),
    shopperEmail: z.string().exactOptional().openapi({ description: 'Email of the shopper.' }),
    shopperIP: z.string().exactOptional().openapi({ description: 'IP of the shopper.' }),
    shopperInteraction: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The shopper interaction type of the payment request.\n\nExample: Ecommerce',
      }),
    shopperLocale: z
      .string()
      .exactOptional()
      .openapi({ description: 'The locale of the shopper.' }),
    shopperName: z.string().exactOptional(),
    shopperReference: z.string().exactOptional(),
    shopperSocialSecurityNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The social security number of the shopper.' }),
    shopperStatement: z
      .string()
      .exactOptional()
      .openapi({ description: "The text to be shown on the shopper's bank statement." }),
    shopperTelephone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The telephone number of the shopper.' }),
    store: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier of the store processing the transaction.' }),
    'swish.payerAlias': z
      .string()
      .exactOptional()
      .openapi({ description: "A Swish shopper's telephone number." }),
    tenderReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'Tender reference. For point-of-sale integrations only.' }),
    terminalId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Terminal ID. For point-of-sale integrations only.' }),
    threeDAuthenticated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A Boolean value indicating whether 3DS authentication was completed on this payment.\n\nExample: true',
      }),
    threeDAuthenticatedResponse: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The raw 3DS authentication result from the card issuer.\n\nExample: N',
      }),
    threeDOffered: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A Boolean value indicating whether 3DS was offered for this payment.\n\nExample: true',
      }),
    threeDOfferedResponse: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The raw enrollment result from the 3DS directory services of the card schemes.\n\nExample: Y',
      }),
    threeDSVersion: z.string().exactOptional().openapi({ description: 'The 3D Secure 2 version.' }),
    tokenTxVariant: z
      .string()
      .exactOptional()
      .openapi({ description: 'Payment method variant of the token/wallet payment method.' }),
    'tokenization.shopperReference': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reference for the shopper that you sent when tokenizing the payment details.',
      }),
    'tokenization.store.operationType': z
      .enum(['created', 'updated', 'alreadyExisting'])
      .exactOptional()
      .openapi({
        description:
          'The operation performed on the token. Possible values:\n\n* **created**: the token has been created.\n* **updated**: the existing token has been updated.\n* **alreadyExisting**: the details have already been stored.\n',
      }),
    'tokenization.storedPaymentMethodId': z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reference that uniquely identifies tokenized payment details.',
      }),
    totalFraudScore: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total fraud score from risk.' }),
    transactionId: z.string().exactOptional(),
    transactionLinkId: z.string().exactOptional(),
    'txScreening.appliedRule': z.string().exactOptional(),
    'txScreening.checkSum': z.string().exactOptional(),
    'txScreening.resolution': z.string().exactOptional(),
    untokenisedCardSummary: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card summary without tokenization.' }),
    visaTransactionId: z.string().exactOptional(),
    xid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The 3DS transaction ID of the 3DS session sent in notifications. The value is Base64-encoded and is returned for transactions with directoryResponse 'N' or 'Y'. \n\nExample: ODgxNDc2MDg2MDExODk5MAAAAAA=",
      }),
  })
  .openapi({ required: [] })
  .openapi('AuthorisationNotificationAdditionalData')

const AuthorisationNotificationRequestItemSchema = z
  .strictObject({
    additionalData: AuthorisationNotificationAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .literal('AUTHORISATION')
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    operations: z
      .array(z.enum(['CAPTURE', 'CANCEL', 'REFUND']))
      .exactOptional()
      .openapi({
        description:
          'The possible follow-up actions for the payment. For example, an authorized payment that has been captured can only have the refund action as a follow-up.\n\nPossible values:\n\n * **CAPTURE**: The funds for the authorized payment can be captured.\n\n * **CANCEL**: The authorized payment can be cancelled.\n\n * **REFUND**: The payment can be refunded.\n\nThe list can be empty, for example for a payment that was declined.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `true` and `paymentMethod` = `visa`, `mc`, or `amex` then this field contains the following details: \nAuthorisation code, last 4 digits of the card, card expiry date. \n In case of failure, this contains information about the authorisation failure',
        example: '874574:1935:11/2012',
      }),
    success: z
      .string()
      .openapi({
        description:
          'If `true`: The payment request was successful. \n If `false`: The payment request failed. \n Check the `reason` field for failure information.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('AuthorisationNotificationRequestItem')

const AuthorisationNotificationRequestItemWrapperSchema = z
  .object({ NotificationRequestItem: AuthorisationNotificationRequestItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AuthorisationNotificationRequestItemWrapper')

const AuthorisationNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(AuthorisationNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('AuthorisationNotificationRequest')

const AuthorisationNotificationRequestItemRecursiveSchema = z
  .strictObject({
    additionalData: AuthorisationNotificationAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .literal('AUTHORISATION')
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    operations: z
      .array(z.enum(['CAPTURE', 'CANCEL', 'REFUND']))
      .exactOptional()
      .openapi({
        description:
          'The possible follow-up actions for the payment. For example, an authorized payment that has been captured can only have the refund action as a follow-up.\n\nPossible values:\n\n * **CAPTURE**: The funds for the authorized payment can be captured.\n\n * **CANCEL**: The authorized payment can be cancelled.\n\n * **REFUND**: The payment can be refunded.\n\nThe list can be empty, for example for a payment that was declined.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `true` and `paymentMethod` = `visa`, `mc`, or `amex` then this field contains the following details: \nAuthorisation code, last 4 digits of the card, card expiry date. \n In case of failure, this contains information about the authorisation failure',
        example: '874574:1935:11/2012',
      }),
    success: z
      .string()
      .openapi({
        description:
          'If `true`: The payment request was successful. \n If `false`: The payment request failed. \n Check the `reason` field for failure information.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('AuthorisationNotificationRequestItemRecursive')

const AutoRescueAdditionalDataSchema = z
  .strictObject({
    bookingDate: z.string().exactOptional(),
    hmacSignature: z.string().exactOptional(),
    merchantOrderReference: z.string().exactOptional(),
    paymentMethodVariant: z.string().exactOptional(),
    'retry.rescueReference': z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AutoRescueAdditionalData')

const AutoRescueNotificationRequestItemSchema = z
  .strictObject({
    additionalData: AutoRescueAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('AutoRescueNotificationRequestItem')

const AutoRescueNotificationRequestItemWrapperSchema = z
  .object({ NotificationRequestItem: AutoRescueNotificationRequestItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AutoRescueNotificationRequestItemWrapper')

const AutoRescueNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(AutoRescueNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('AutoRescueNotificationRequest')

const AutoRescueNotificationRequestItemRecursiveSchema = z
  .strictObject({
    additionalData: AutoRescueAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('AutoRescueNotificationRequestItemRecursive')

const BaseModificationAdditionalDataSchema = z
  .strictObject({
    bookingDate: z.string().exactOptional(),
    hmacSignature: z.string().exactOptional(),
    paymentMethodVariant: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BaseModificationAdditionalData')

const CancelOrRefundAdditionalDataSchema = z
  .strictObject({
    acquirerErrorCode: z.string().exactOptional(),
    acquirerErrorDescription: z.string().exactOptional(),
    acquirerReference: z.string().exactOptional(),
    'acsRenderingType.acsInterface': z.string().exactOptional(),
    'acsRenderingType.acsUiTemplate': z.string().exactOptional(),
    arn: z.string().exactOptional(),
    authCode: z.string().exactOptional(),
    authenticationType: z.string().exactOptional(),
    bookingDate: z.string().exactOptional(),
    checkoutSessionId: z.string().exactOptional(),
    coBrandedWith: z.string().exactOptional(),
    hmacSignature: z.string().exactOptional(),
    interactionCounter: z.string().exactOptional(),
    merchantOrderReference: z.string().exactOptional(),
    'modification.action': z.string().exactOptional(),
    originalMerchantReference: z.string().exactOptional(),
    paymentLinkId: z.string().exactOptional(),
    paymentMethodVariant: z.string().exactOptional(),
    shopperCountry: z.string().exactOptional(),
    store: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CancelOrRefundAdditionalData')

const CancelOrRefundNotificationRequestItemSchema = z
  .strictObject({
    additionalData: CancelOrRefundAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('CancelOrRefundNotificationRequestItem')

const CancelOrRefundNotificationRequestItemWrapperSchema = z
  .object({ NotificationRequestItem: CancelOrRefundNotificationRequestItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CancelOrRefundNotificationRequestItemWrapper')

const CancelOrRefundNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(CancelOrRefundNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('CancelOrRefundNotificationRequest')

const CancelOrRefundNotificationRequestItemRecursiveSchema = z
  .strictObject({
    additionalData: CancelOrRefundAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('CancelOrRefundNotificationRequestItemRecursive')

const CancellationAdditionalDataSchema = z
  .strictObject({
    PaymentAccountReference: z.string().exactOptional(),
    accountValidation: z.string().exactOptional(),
    acquirerAccountCode: z.string().exactOptional(),
    acquirerCode: z.string().exactOptional(),
    acquirerReference: z.string().exactOptional(),
    'acsRenderingType.acsInterface': z.string().exactOptional(),
    'acsRenderingType.acsUiTemplate': z.string().exactOptional(),
    alias: z.string().exactOptional(),
    aliasType: z.string().exactOptional(),
    arn: z.string().exactOptional(),
    authCode: z.string().exactOptional(),
    authenticationType: z.string().exactOptional(),
    authorisationMid: z.string().exactOptional(),
    avsResult: z.string().exactOptional(),
    avsResultRaw: z.string().exactOptional(),
    bankAccountNumber: z.string().exactOptional(),
    bankLocationId: z.string().exactOptional(),
    bankName: z.string().exactOptional(),
    bic: z.string().exactOptional(),
    'billingAddress.city': z.string().exactOptional(),
    'billingAddress.country': z.string().exactOptional(),
    'billingAddress.houseNumberOrName': z.string().exactOptional(),
    'billingAddress.postalCode': z.string().exactOptional(),
    'billingAddress.stateOrProvince': z.string().exactOptional(),
    'billingAddress.street': z.string().exactOptional(),
    bookingDate: z.string().exactOptional(),
    cardBin: z.string().exactOptional(),
    cardHolderName: z.string().exactOptional(),
    cardIssuingBank: z.string().exactOptional(),
    cardIssuingCountry: z.string().exactOptional(),
    cardIssuingCurrency: z.string().exactOptional(),
    cardPaymentMethod: z.string().exactOptional(),
    cardSchemeEnhancedDataLevel: z.string().exactOptional(),
    cardSummary: z.string().exactOptional(),
    cavv: z.string().exactOptional(),
    cavvAlgorithm: z.string().exactOptional(),
    checkoutSessionId: z.string().exactOptional(),
    coBrandedWith: z.string().exactOptional(),
    countryCode: z.string().exactOptional(),
    cvcResult: z.string().exactOptional(),
    cvcResultRaw: z.string().exactOptional(),
    'deliveryAddress.city': z.string().exactOptional(),
    'deliveryAddress.country': z.string().exactOptional(),
    'deliveryAddress.houseNumberOrName': z.string().exactOptional(),
    'deliveryAddress.stateOrProvince': z.string().exactOptional(),
    'deliveryAddress.street': z.string().exactOptional(),
    eci: z.string().exactOptional(),
    expiryDate: z.string().exactOptional(),
    'fraudCheck-<check ID>-<name>': z
      .string()
      .exactOptional()
      .openapi({ description: 'Information on the fraud check in a dynamic format.' }),
    fraudManualReview: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates if the risk check was done manually.' }),
    fraudOffset: z.string().exactOptional().openapi({ description: 'The fraud offset.' }),
    fraudResultType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Result type of the fraud check.' }),
    fraudRiskLevel: z
      .enum(['veryLow', 'low', 'medium', 'high', 'veryHigh'])
      .exactOptional()
      .openapi({
        description:
          'The risk level of the transaction as classified by the [machine learning](https://docs.adyen.com/risk-management/configure-your-risk-profile/machine-learning-rules/) fraud risk rule. The risk level indicates the likelihood that a transaction will result in a fraudulent dispute. Possible values:\n* veryLow\n* low\n* medium\n* high\n* veryHigh\n\n',
      }),
    hmacSignature: z.string().exactOptional(),
    interactionCounter: z.string().exactOptional(),
    merchantOrderReference: z.string().exactOptional(),
    paymentLinkId: z.string().exactOptional(),
    paymentMethodVariant: z.string().exactOptional(),
    'riskdata.<name>': z
      .string()
      .exactOptional()
      .openapi({ description: 'Risk data in a dynamic format.' }),
    shopperCountry: z.string().exactOptional(),
    shopperSocialSecurityNumber: z.string().exactOptional(),
    store: z.string().exactOptional(),
    totalFraudScore: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total fraud score from risk.' }),
  })
  .openapi({ required: [] })
  .openapi('CancellationAdditionalData')

const CancellationNotificationRequestItemSchema = z
  .strictObject({
    additionalData: CancellationAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('CancellationNotificationRequestItem')

const CancellationNotificationRequestItemWrapperSchema = z
  .object({ NotificationRequestItem: CancellationNotificationRequestItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CancellationNotificationRequestItemWrapper')

const CancellationNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(CancellationNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('CancellationNotificationRequest')

const CancellationNotificationRequestItemRecursiveSchema = z
  .strictObject({
    additionalData: CancellationAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('CancellationNotificationRequestItemRecursive')

const CaptureAdditionalDataSchema = z
  .strictObject({
    acquirerReference: z.string().exactOptional(),
    'acsRenderingType.acsInterface': z.string().exactOptional(),
    'acsRenderingType.acsUiTemplate': z.string().exactOptional(),
    arn: z.string().exactOptional(),
    authenticationType: z.string().exactOptional(),
    bookingDate: z.string().exactOptional(),
    checkoutSessionId: z.string().exactOptional(),
    coBrandedWith: z.string().exactOptional(),
    hmacSignature: z.string().exactOptional(),
    interactionCounter: z.string().exactOptional(),
    merchantOrderReference: z.string().exactOptional(),
    paymentLinkId: z.string().exactOptional(),
    paymentMethodVariant: z.string().exactOptional(),
    'riskdata.<name>': z
      .string()
      .exactOptional()
      .openapi({ description: 'Risk data in a dynamic format.' }),
    shopperCountry: z.string().exactOptional(),
    store: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CaptureAdditionalData')

const CaptureNotificationRequestItemSchema = z
  .strictObject({
    additionalData: CaptureAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('CaptureNotificationRequestItem')

const CaptureNotificationRequestItemWrapperSchema = z
  .object({ NotificationRequestItem: CaptureNotificationRequestItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CaptureNotificationRequestItemWrapper')

const CaptureNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(CaptureNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('CaptureNotificationRequest')

const CaptureNotificationRequestItemRecursiveSchema = z
  .strictObject({
    additionalData: CaptureAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('CaptureNotificationRequestItemRecursive')

const DisputesNotificationAdditionalDataSchema = z
  .strictObject({
    InvoiceCreditorAccount: z.string().exactOptional(),
    arn: z
      .string()
      .exactOptional()
      .openapi({ description: 'Acquirer Reference Number of the dispute.' }),
    autoDefended: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates if the dispute was automatically defended.' }),
    captureMerchantReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The merchant reference of the capture.' }),
    capturePspReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PSP reference of the capture.' }),
    chargebackReasonCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [reason code](https://docs.adyen.com/risk-management/understanding-disputes/dispute-reason-codes/?tab=chargeback_0_1) for the chargeback.',
      }),
    chargebackSchemeCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The card scheme for the chargeback.' }),
    defendable: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates if you can defend the dispute.' }),
    defensePeriodEndsAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When the defense period ends. Format: [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format with time zone offset: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.',
      }),
    disputeStatus: z
      .enum([
        'Unresponded',
        'Responded',
        'Expired',
        'Undefended',
        'Accepted',
        'Pending',
        'Lost',
        'Won',
      ])
      .exactOptional()
      .openapi({
        description:
          'More information about the [stage the dispute is in](https://docs.adyen.com/risk-management/disputes-api/dispute-notifications/). This parameter is not returned for disputed payments processed in Brazil.',
      }),
    grossCurrency: z
      .string()
      .exactOptional()
      .openapi({ description: 'Chargeback gross currency.' }),
    grossValue: z.string().exactOptional().openapi({ description: 'Chargeback gross value.' }),
    hmacSignature: z.string().exactOptional(),
    modificationMerchantReferences: z.string().exactOptional(),
    nofReasonCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [reason code](https://docs.adyen.com/risk-management/understanding-disputes/dispute-reason-codes/?tab=notification_of_fraud_2_3) for the Notification of Fraud (NOF).',
      }),
    nofSchemeCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The card scheme for the Notification of Fraud (NOF).' }),
    paymentMethodVariant: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Adyen [sub-variant of the payment method](https://docs.adyen.com/development-resources/paymentmethodvariant) used for the payment request.',
      }),
    rfiReasonCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [reason code](https://docs.adyen.com/risk-management/understanding-disputes/dispute-reason-codes/?tab=request_for_information_1_2) for the Request for Information (RFI).',
      }),
    rfiSchemeCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The card scheme for the Request for Information (RFI).' }),
    shopperReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID that uniquely identifies the shopper. This is the same as the `shopperReference` used in the initial payment.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DisputesNotificationAdditionalData')

const DisputesNotificationRequestItemSchema = z
  .strictObject({
    additionalData: DisputesNotificationAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('DisputesNotificationRequestItem')

const DisputesNotificationRequestItemWrapperSchema = z
  .object({ NotificationRequestItem: DisputesNotificationRequestItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DisputesNotificationRequestItemWrapper')

const ChargebackNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(DisputesNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('ChargebackNotificationRequest')

const ChargebackReversedNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(DisputesNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('ChargebackReversedNotificationRequest')

const DirectDebitNoticeOfChangeNotificationRequestDataNocSchema = z
  .strictObject({
    newBankAccountNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The corrected bank account number provided by the receiving bank.',
        example: '123456789',
      }),
    newBankAccountType: z
      .enum(['Checking', 'Savings'])
      .exactOptional()
      .openapi({
        description:
          'The corrected bank account type provided by the receiving bank. This field is specific to ACH Direct Debit transactions.\n\nPossible values:\n*  **Savings**\n*  **Checking**\n\n',
        example: 'Checking',
      }),
    newBankLocationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The corrected bank location ID provided by the receiving bank. This field is specific to EFT PAD transactions.',
        example: '004001234',
      }),
    newBranchCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The corrected bank routing number provided by the receiving bank. This field is specific to ACH Direct Debit transactions.',
        example: '987654321',
      }),
    reasonCode: z
      .enum(['C01', 'C02', 'C03', 'C04', 'C05', 'C06', 'C07', 'C09', 'C10', 'C11', 'C12'])
      .exactOptional()
      .openapi({
        description:
          'A standard code from the ACH network that specifies the reason for a Notice of Change (e.g., an incorrect account number). This field is specific to ACH Direct Debit transactions.\n\nPossible values:\n*  **C01** : Incorrect bank account number.\n*  **C02** : Incorrect transit/routing number.\n*  **C03** : Incorrect transit/routing number and bank account number.\n*  **C04** : Bank account name change.\n*  **C05** : Incorrect payment code.\n*  **C06** : Incorrect bank account number and transit code.\n*  **C07** : Incorrect transit/routing number, bank account number and payment code.\n*  **C09** : Incorrect individual ID number.\n*  **C10** : Incorrect company name.\n*  **C11** : Incorrect company identification.\n*  **C12** : Incorrect company name and company ID.\n\n',
        example: 'C01',
      }),
  })
  .openapi({ required: [] })
  .openapi('DirectDebitNoticeOfChangeNotificationRequestDataNoc')

const DirectDebitNotificationOfChangeNotificationRequestDataSchema = z
  .strictObject({
    notificationOfChange: DirectDebitNoticeOfChangeNotificationRequestDataNocSchema.openapi({
      description: 'The Notification of Change information.',
    }),
    pspReference: z.string().openapi({ description: 'PSP Reference.' }),
    shopperReference: z.string().openapi({ description: 'Shopper reference.' }),
  })
  .openapi({ required: ['notificationOfChange', 'pspReference', 'shopperReference'] })
  .openapi('DirectDebitNotificationOfChangeNotificationRequestData')

const DirectDebitNoticeOfChangeNotificationRequestSchema = z
  .strictObject({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp indicating when the webhook was created.',
        example: '2025-07-08T10:00:00Z',
      }),
    data: DirectDebitNotificationOfChangeNotificationRequestDataSchema.exactOptional().openapi({
      description: 'Contains the details of the bank account update.',
    }),
    environment: z
      .enum(['live', 'test', 'beta'])
      .exactOptional()
      .openapi({
        description: 'The environment from which the webhook originated.',
        example: 'live',
      }),
    type: z
      .enum(['ach.notificationOfChange', 'eft.notificationOfChange'])
      .openapi({ description: 'The type of notification.', example: 'ach.notificationOfChange' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version of this webhook type.', example: '1' }),
  })
  .openapi({ required: ['createdAt', 'type'] })
  .openapi('DirectDebitNoticeOfChangeNotificationRequest')

const DisputeDefensePeriodEndedNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(DisputesNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('DisputeDefensePeriodEndedNotificationRequest')

const DisputesNotificationRequestItemRecursiveSchema = z
  .strictObject({
    additionalData: DisputesNotificationAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('DisputesNotificationRequestItemRecursive')

const ExpireNotificationRequestItemSchema = z
  .strictObject({
    additionalData: BaseModificationAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({ description: 'The amount that was originally authorised.' }),
    eventCode: z
      .literal('EXPIRE')
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z.string().openapi({ description: 'Always `true`.' }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('ExpireNotificationRequestItem')

const ExpireNotificationRequestItemWrapperSchema = z
  .object({ NotificationRequestItem: ExpireNotificationRequestItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ExpireNotificationRequestItemWrapper')

const ExpireNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(ExpireNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('ExpireNotificationRequest')

const ExpireNotificationRequestItemRecursiveSchema = z
  .strictObject({
    additionalData: BaseModificationAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({ description: 'The amount that was originally authorised.' }),
    eventCode: z
      .literal('EXPIRE')
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z.string().openapi({ description: 'Always `true`.' }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('ExpireNotificationRequestItemRecursive')

const GenericNotificationRequestItemRecursiveSchema = z
  .strictObject({
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('GenericNotificationRequestItemRecursive')

const GenericNotificationRequestItemSchema = z
  .strictObject({
    additionalData: GenericNotificationRequestItemRecursiveSchema.exactOptional().openapi({
      description: 'A generic container for extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('GenericNotificationRequestItem')

const GenericNotificationRequestItemWrapperSchema = z
  .object({ NotificationRequestItem: GenericNotificationRequestItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('GenericNotificationRequestItemWrapper')

const InformationSuppliedNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(DisputesNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('InformationSuppliedNotificationRequest')

const IssuerCommentsNotificationAdditionalDataSchema = z
  .strictObject({
    InvoiceCreditorAccount: z.string().exactOptional(),
    arn: z
      .string()
      .exactOptional()
      .openapi({ description: 'Acquirer Reference Number of the dispute.' }),
    autoDefended: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates if the dispute was automatically defended.' }),
    captureMerchantReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The merchant reference of the capture.' }),
    capturePspReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PSP reference of the capture.' }),
    chargebackReasonCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [reason code](https://docs.adyen.com/risk-management/understanding-disputes/dispute-reason-codes/?tab=chargeback_0_1) for the chargeback.',
      }),
    chargebackSchemeCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The card scheme for the chargeback.' }),
    defendable: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates if you can defend the dispute.' }),
    defensePeriodEndsAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When the defense period ends. Format: [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format with time zone offset: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.',
      }),
    disputeStatus: z
      .enum([
        'Unresponded',
        'Responded',
        'Expired',
        'Undefended',
        'Accepted',
        'Pending',
        'Lost',
        'Won',
      ])
      .exactOptional()
      .openapi({
        description:
          'More information about the [stage the dispute is in](https://docs.adyen.com/risk-management/disputes-api/dispute-notifications/). This parameter is not returned for disputed payments processed in Brazil.',
      }),
    grossCurrency: z
      .string()
      .exactOptional()
      .openapi({ description: 'Chargeback gross currency.' }),
    grossValue: z.string().exactOptional().openapi({ description: 'Chargeback gross value.' }),
    hmacSignature: z.string().exactOptional(),
    'issuerComments.attemptedReturnDate': z.string().exactOptional(),
    'issuerComments.cancellationDate': z.string().exactOptional(),
    'issuerComments.cancellationMethod': z.string().exactOptional(),
    'issuerComments.chReceivedOrExpectedMerchandise': z.string().exactOptional(),
    'issuerComments.creditVoucherOrTransactionReceiptDate': z.string().exactOptional(),
    'issuerComments.damagedOrDefectiveOrderInfo': z.string().exactOptional(),
    'issuerComments.dateOfService': z.string().exactOptional(),
    'issuerComments.descCounterfeitMerchandise': z.string().exactOptional(),
    'issuerComments.disputeAmountChangeReason': z.string().exactOptional(),
    'issuerComments.expectedReceiptDateTime': z.string().exactOptional(),
    'issuerComments.explanation': z.string().exactOptional(),
    'issuerComments.explanationOfCreditPresented': z.string().exactOptional(),
    'issuerComments.howChAttemptReturnAndDispOfMerchandise': z.string().exactOptional(),
    'issuerComments.howMerchandiseOrServiceMisrepresented': z.string().exactOptional(),
    'issuerComments.howTermsOfContractNotHonoredByMerchant': z.string().exactOptional(),
    'issuerComments.merchandiseOrServices': z.string().exactOptional(),
    'issuerComments.merchandiseServiceReceivedDate': z.string().exactOptional(),
    'issuerComments.merchandiseWasCounterfeitDate': z.string().exactOptional(),
    'issuerComments.note': z.string().exactOptional(),
    'issuerComments.orderDetailsNotAsDescribed': z.string().exactOptional(),
    'issuerComments.purchasedInfo': z.string().exactOptional(),
    'issuerComments.purchasedInfoAndQualityIssue': z.string().exactOptional(),
    'issuerComments.returnMethod': z.string().exactOptional(),
    'issuerComments.returnedMerchandiseReceivedDate': z.string().exactOptional(),
    'issuerComments.serviceReceivedDate': z.string().exactOptional(),
    'issuerComments.type': z.string().exactOptional(),
    'issuerComments.whatWasNotReceived': z.string().exactOptional(),
    'issuerComments.whatWasOrdered': z.string().exactOptional(),
    'issuerComments.whatWasPurchased': z.string().exactOptional(),
    'issuerComments.whereIsMerchandiseLocated': z.string().exactOptional(),
    modificationMerchantReferences: z.string().exactOptional(),
    nofReasonCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [reason code](https://docs.adyen.com/risk-management/understanding-disputes/dispute-reason-codes/?tab=notification_of_fraud_2_3) for the Notification of Fraud (NOF).',
      }),
    nofSchemeCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The card scheme for the Notification of Fraud (NOF).' }),
    paymentMethodVariant: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Adyen [sub-variant of the payment method](https://docs.adyen.com/development-resources/paymentmethodvariant) used for the payment request.',
      }),
    rfiReasonCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [reason code](https://docs.adyen.com/risk-management/understanding-disputes/dispute-reason-codes/?tab=request_for_information_1_2) for the Request for Information (RFI).',
      }),
    rfiSchemeCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The card scheme for the Request for Information (RFI).' }),
    shopperReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID that uniquely identifies the shopper. This is the same as the `shopperReference` used in the initial payment.',
      }),
  })
  .openapi({ required: [] })
  .openapi('IssuerCommentsNotificationAdditionalData')

const IssuerCommentsNotificationRequestItemSchema = z
  .strictObject({
    additionalData: IssuerCommentsNotificationAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('IssuerCommentsNotificationRequestItem')

const IssuerCommentsNotificationRequestItemWrapperSchema = z
  .object({ NotificationRequestItem: IssuerCommentsNotificationRequestItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('IssuerCommentsNotificationRequestItemWrapper')

const IssuerCommentsNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(IssuerCommentsNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('IssuerCommentsNotificationRequest')

const IssuerCommentsNotificationRequestItemRecursiveSchema = z
  .strictObject({
    additionalData: IssuerCommentsNotificationAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('IssuerCommentsNotificationRequestItemRecursive')

const IssuerResponseTimeframeExpiredNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(IssuerCommentsNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('IssuerResponseTimeframeExpiredNotificationRequest')

const ModificationNotificationRequestItemSchema = z
  .strictObject({
    additionalData: BaseModificationAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('ModificationNotificationRequestItem')

const ModificationNotificationRequestItemWrapperSchema = z
  .object({ NotificationRequestItem: ModificationNotificationRequestItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ModificationNotificationRequestItemWrapper')

const ModificationNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(ModificationNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('ModificationNotificationRequest')

const ModificationNotificationRequestItemRecursiveSchema = z
  .strictObject({
    additionalData: BaseModificationAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('ModificationNotificationRequestItemRecursive')

const NotificationAdditionalDataSchema = z
  .strictObject({
    PaymentAccountReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reference of the payment account.' }),
    acquirerAccountCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The acquirer account code.' }),
    acquirerCode: z.string().exactOptional().openapi({ description: 'The acquirer code.' }),
    acquirerReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The acquirer reference.' }),
    'acsRenderingType.acsInterface': z
      .string()
      .exactOptional()
      .openapi({ description: 'ACS interface. Related to 3DS.' }),
    'acsRenderingType.acsUiTemplate': z
      .string()
      .exactOptional()
      .openapi({ description: 'ACS UI template.' }),
    alias: z.string().exactOptional().openapi({ description: 'Alias for this card.' }),
    aliasType: z.string().exactOptional().openapi({ description: 'Alias type.' }),
    arn: z
      .string()
      .exactOptional()
      .openapi({ description: 'Acquirer Reference Number of the dispute.' }),
    authCode: z.string().exactOptional().openapi({ description: 'Authcode of the scheme.' }),
    authenticationType: z
      .string()
      .exactOptional()
      .openapi({ description: '3DS authentication type' }),
    authorisationMid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Authorisation MID of the acquirer.' }),
    authorisedAmountCurrency: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency authorised for a dynamic zero auth request.' }),
    authorisedAmountValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The amount authorised for a dynamic zero auth request.' }),
    avsResult: z
      .string()
      .exactOptional()
      .openapi({ description: 'Address Verification Service result.' }),
    avsResultRaw: z
      .string()
      .exactOptional()
      .openapi({ description: 'Address Verification Service result raw.' }),
    bankAccountNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The bank account number.' }),
    bankLocation: z.string().exactOptional().openapi({ description: 'The bank location.' }),
    bankLocationId: z.string().exactOptional().openapi({ description: 'The bank location ID.' }),
    bankName: z.string().exactOptional().openapi({ description: 'The bank name.' }),
    bankVerificationResult: z
      .string()
      .exactOptional()
      .openapi({ description: 'The bank verification result.' }),
    bankVerificationResultRaw: z
      .string()
      .exactOptional()
      .openapi({ description: 'The bank verification result raw.' }),
    bic: z.string().exactOptional().openapi({ description: 'Business Identifier Code.' }),
    'billingAddress.city': z
      .string()
      .exactOptional()
      .openapi({ description: 'BillingAddress: county.' }),
    'billingAddress.houseNumberOrName': z
      .string()
      .exactOptional()
      .openapi({ description: 'BillingAddress: house number or name.' }),
    'billingAddress.postalCode': z
      .string()
      .exactOptional()
      .openapi({ description: 'BillingAddress: postal code.' }),
    'billingAddress.stateOrProvince': z
      .string()
      .exactOptional()
      .openapi({ description: 'BillingAddress: state or province' }),
    'billingAddress.street': z
      .string()
      .exactOptional()
      .openapi({ description: 'BillingAddress: street' }),
    browserCode: z.string().exactOptional().openapi({ description: 'Browser code.' }),
    captureDelayHours: z
      .string()
      .exactOptional()
      .openapi({ description: 'The amount of delay after authorisation.' }),
    captureMerchantReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The merchant reference of the capture.' }),
    capturePspReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PSP reference of the capture.' }),
    cardBin: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card Bank Identification number.' }),
    cardIssuingBank: z.string().exactOptional().openapi({ description: 'Card issuing bank.' }),
    cardIssuingCountry: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card issuing country.' }),
    cardIssuingCurrency: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card issuing currency.' }),
    cardPaymentMethod: z.string().exactOptional().openapi({ description: 'Card payment method.' }),
    cardSchemeEnhancedDataLevel: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card scheme enhanced data level.' }),
    cardSummary: z.string().exactOptional().openapi({ description: 'Card summary' }),
    cavv: z
      .string()
      .exactOptional()
      .openapi({ description: 'Secure Cardholder Authentication Verification Value.' }),
    cavvAlgorithm: z.string().exactOptional().openapi({ description: 'CAVV algorithm.' }),
    challengeCancel: z
      .string()
      .exactOptional()
      .openapi({ description: 'Information about the 3DS challenge being canceled.' }),
    checkoutSessionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the Checkout Session.' }),
    cvcResult: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card Verification Code result.' }),
    cvcResultRaw: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card Verification Code result raw.' }),
    'deliveryAddress.city': z
      .string()
      .exactOptional()
      .openapi({ description: 'Delivery address: city.' }),
    'deliveryAddress.country': z
      .string()
      .exactOptional()
      .openapi({ description: 'Delivery address: country.' }),
    'deliveryAddress.houseNumberOrName': z
      .string()
      .exactOptional()
      .openapi({ description: 'Delivery address: house number or name.' }),
    'deliveryAddress.postalCode': z
      .string()
      .exactOptional()
      .openapi({ description: 'Delivery address: postal code.' }),
    'deliveryAddress.stateOrProvince': z
      .string()
      .exactOptional()
      .openapi({ description: 'Delivery address: state or province.' }),
    'deliveryAddress.street': z
      .string()
      .exactOptional()
      .openapi({ description: 'Delivery address: street.' }),
    deviceType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of device the request was made from.' }),
    'directdebit_GB.dateOfSignature': z
      .string()
      .exactOptional()
      .openapi({ description: 'Direct debit GB: date of signature.' }),
    'directdebit_GB.mandateId': z
      .string()
      .exactOptional()
      .openapi({ description: 'Direct debit GB: mandate ID.' }),
    'directdebit_GB.sequenceType': z
      .string()
      .exactOptional()
      .openapi({ description: 'Direct debit GB: sequence type.' }),
    'directdebit_GB.serviceUserName': z
      .string()
      .exactOptional()
      .openapi({ description: 'Direct debit GB: service user name.' }),
    'directdebit_GB.serviceUserNumber': z
      .string()
      .exactOptional()
      .openapi({ description: 'Direct debit GB: service user number.' }),
    eci: z.string().exactOptional().openapi({ description: '3DS: Electronic Commerce Indicator.' }),
    expiryDate: z.string().exactOptional().openapi({ description: 'Expiry date of the card.' }),
    extraCostsCurrency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional cost used in [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification).',
      }),
    extraCostsValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Related additional cost value.' }),
    extraCostsValueGratuity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Gratuity related additional cost value.' }),
    extraCostsValueSurcharge: z
      .string()
      .exactOptional()
      .openapi({ description: 'Surcharge related additional cost value.' }),
    'fraudCheck-<check ID>-<name>': z
      .string()
      .exactOptional()
      .openapi({ description: 'Information on the fraud check in a dynamic format.' }),
    fraudManualReview: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates if the risk check was done manually.' }),
    fraudOffset: z.string().exactOptional().openapi({ description: 'The fraud offset.' }),
    fraudResultType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Result type of the fraud check.' }),
    fraudRiskLevel: z
      .enum(['veryLow', 'low', 'medium', 'high', 'veryHigh'])
      .exactOptional()
      .openapi({
        description:
          'The risk level of the transaction as classified by the [machine learning](https://docs.adyen.com/risk-management/configure-your-risk-profile/machine-learning-rules/) fraud risk rule. The risk level indicates the likelihood that a transaction will result in a fraudulent dispute. Possible values:\n* veryLow\n* low\n* medium\n* high\n* veryHigh\n\n',
      }),
    fundingSource: z.string().exactOptional().openapi({ description: 'Funding source.' }),
    grossCurrency: z
      .string()
      .exactOptional()
      .openapi({ description: 'Chargeback gross currency.' }),
    grossValue: z.string().exactOptional().openapi({ description: 'Chargeback gross value.' }),
    iban: z.string().exactOptional().openapi({ description: 'International Bank Account Number.' }),
    'installments.value': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of installments that the payment amount should be charged with.\n\nExample: 5\n> Only relevant for card payments in countries that support installments.',
      }),
    interactionCounter: z
      .string()
      .exactOptional()
      .openapi({ description: '3DS interaction counter.' }),
    'issuerComments.cardholderName': z
      .string()
      .exactOptional()
      .openapi({ description: 'Card holder name.' }),
    issuerCountry: z
      .string()
      .exactOptional()
      .openapi({ description: 'Country of the card issuer.' }),
    'latestCard.bin': z
      .string()
      .exactOptional()
      .openapi({ description: 'Recurring: Latest card BIN.' }),
    'latestCard.expiryDate': z
      .string()
      .exactOptional()
      .openapi({ description: 'Recurring: Latest card expiry date.' }),
    'latestCard.summary': z
      .string()
      .exactOptional()
      .openapi({ description: 'Recurring: Latest card summary.' }),
    liabilityShift: z.string().exactOptional().openapi({ description: 'Risk liability shift.' }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "A set of key-value pairs provided in the request, prefixed with 'metadata.'. For example, 'metadata.myField: myValue'",
      }),
    networkProcessingMode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the processing flow.\n\nPossible values:\n* **sale**: You do not need to separately capture the funds, because capture happens automatically as part of the transaction. \n* **auth**: If you have not [configured automatic capture for the transaction](https://docs.adyen.com/online-payments/capture#types-of-capture), you must manually capture the funds.',
      }),
    'networkToken.available': z
      .string()
      .exactOptional()
      .openapi({ description: 'Recurring related.' }),
    'networkToken.bin': z.string().exactOptional().openapi({ description: 'Recurring related.' }),
    'networkToken.tokenSummary': z
      .string()
      .exactOptional()
      .openapi({ description: 'Recurring related.' }),
    networkTxDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The network transaction date for Mastercard transactions processed by Bank of America Merchant Services (BAMS).',
      }),
    networkTxReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The network transaction reference from the scheme, when available.',
      }),
    'nfc.expire': z.string().exactOptional().openapi({ description: 'NFC related.' }),
    'nfc.issue': z.string().exactOptional().openapi({ description: 'NFC related.' }),
    'nfc.pin.provided': z.string().exactOptional().openapi({ description: 'NFC related.' }),
    'nfc.uid': z.string().exactOptional().openapi({ description: 'NFC related.' }),
    'opi.transToken': z
      .string()
      .exactOptional()
      .openapi({ description: 'Trans token related to Oracle Opera.' }),
    ownerCity: z.string().exactOptional().openapi({ description: 'Owner city.' }),
    ownerName: z.string().exactOptional().openapi({ description: 'Owner name.' }),
    payULatamTrazabilityCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Related to PayU in LATAM.' }),
    paymentLinkId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the Checkout payment link.' }),
    realtimeAccountUpdaterStatus: z
      .string()
      .exactOptional()
      .openapi({ description: 'Real time Account Update status.' }),
    'recurring.contractTypes': z
      .string()
      .exactOptional()
      .openapi({ description: 'Recurring contract types.' }),
    'recurring.firstPspReference': z
      .string()
      .exactOptional()
      .openapi({ description: 'Recurring first PSP reference.' }),
    'recurring.recurringDetailReference': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [token for stored payment details](https://docs.adyen.com/online-payments/tokenization/create-and-use-tokens/) to make recurring payments.',
      }),
    referred: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the payment is referred, this field is set to true.\n\nThis field is unavailable if the payment is referred and is usually not returned with ecommerce transactions.\n\nExample: true',
      }),
    refusalReasonRaw: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Raw refusal reason received from the acquirer, where available.\n\nExample: AUTHORISED',
      }),
    'retry.rescueScheduled': z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates if an auto rescue for a payment is scheduled.' }),
    riskProfile: z.string().exactOptional().openapi({ description: 'Related to Risk.' }),
    riskProfileReference: z.string().exactOptional().openapi({ description: 'Related to Risk.' }),
    shopperCountry: z.string().exactOptional().openapi({ description: 'Country of the shopper.' }),
    shopperEmail: z.string().exactOptional().openapi({ description: 'Email of the shopper.' }),
    shopperIP: z.string().exactOptional().openapi({ description: 'IP of the shopper.' }),
    shopperInteraction: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The shopper interaction type of the payment request.\n\nExample: Ecommerce',
      }),
    shopperLocale: z
      .string()
      .exactOptional()
      .openapi({ description: 'The locale of the shopper.' }),
    shopperSocialSecurityNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The social security number of the shopper.' }),
    shopperStatement: z
      .string()
      .exactOptional()
      .openapi({ description: "The text to be shown on the shopper's bank statement." }),
    shopperTelephone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The telephone number of the shopper.' }),
    store: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier of the store processing the transaction.' }),
    tenderReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'Tender reference. For point-of-sale integrations only.' }),
    terminalId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Terminal ID. For point-of-sale integrations only.' }),
    threeDAuthenticated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A Boolean value indicating whether 3DS authentication was completed on this payment.\n\nExample: true',
      }),
    threeDAuthenticatedResponse: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The raw 3DS authentication result from the card issuer.\n\nExample: N',
      }),
    threeDOffered: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A Boolean value indicating whether 3DS was offered for this payment.\n\nExample: true',
      }),
    threeDOfferedResponse: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The raw enrollment result from the 3DS directory services of the card schemes.\n\nExample: Y',
      }),
    threeDSVersion: z.string().exactOptional().openapi({ description: 'The 3D Secure 2 version.' }),
    tokenTxVariant: z
      .string()
      .exactOptional()
      .openapi({ description: 'Payment method variant of the token/wallet payment method.' }),
    totalFraudScore: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total fraud score from risk.' }),
    untokenisedCardSummary: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card summary without tokenization.' }),
    xid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The 3DS transaction ID of the 3DS session sent in notifications. The value is Base64-encoded and is returned for transactions with directoryResponse 'N' or 'Y'. \n\nExample: ODgxNDc2MDg2MDExODk5MAAAAAA=",
      }),
  })
  .openapi({ required: [] })
  .openapi('NotificationAdditionalData')

const NotificationOfChargebackNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(DisputesNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('NotificationOfChargebackNotificationRequest')

const NotificationOfFraudNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(DisputesNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('NotificationOfFraudNotificationRequest')

const NotificationRequestItemSchema = z
  .strictObject({
    additionalData: NotificationAdditionalDataSchema.exactOptional().openapi({
      description: 'A generic container for extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('NotificationRequestItem')

const NotificationRequestItemWrapperSchema = z
  .object({ NotificationRequestItem: NotificationRequestItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('NotificationRequestItemWrapper')

const NotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(NotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('NotificationRequest')

const NotificationRequestItemRecursiveSchema = z
  .strictObject({
    additionalData: NotificationAdditionalDataSchema.exactOptional().openapi({
      description: 'A generic container for extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('NotificationRequestItemRecursive')

const PaidoutReversedNotificationRequestItemSchema = z
  .strictObject({
    additionalData: NotificationAdditionalDataSchema.exactOptional().openapi({
      description: 'A generic container for extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .literal('PAIDOUT_REVERSED')
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({ description: "The PSP reference for the Capture's PSP reference." }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains the bank statement description if present, else it contains `PaidOutReversed`.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('PaidoutReversedNotificationRequestItem')

const PaidoutReversedNotificationRequestItemWrapperSchema = z
  .object({ NotificationRequestItem: PaidoutReversedNotificationRequestItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PaidoutReversedNotificationRequestItemWrapper')

const PaidoutReversedNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(PaidoutReversedNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('PaidoutReversedNotificationRequest')

const PaidoutReversedNotificationRequestItemRecursiveSchema = z
  .strictObject({
    additionalData: NotificationAdditionalDataSchema.exactOptional().openapi({
      description: 'A generic container for extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .literal('PAIDOUT_REVERSED')
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({ description: "The PSP reference for the Capture's PSP reference." }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains the bank statement description if present, else it contains `PaidOutReversed`.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('PaidoutReversedNotificationRequestItemRecursive')

const PayoutAdditionalDataSchema = z
  .strictObject({
    authCode: z.string().exactOptional(),
    bookingDate: z.string().exactOptional(),
    cardBin: z.string().exactOptional(),
    cardHolderName: z.string().exactOptional(),
    cardSummary: z.string().exactOptional(),
    expiryDate: z.string().exactOptional(),
    fundingSource: z.string().exactOptional(),
    hmacSignature: z.string().exactOptional(),
    paymentMethodVariant: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PayoutAdditionalData')

const PayoutNotificationRequestItemSchema = z
  .strictObject({
    additionalData: PayoutAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('PayoutNotificationRequestItem')

const PayoutNotificationRequestItemWrapperSchema = z
  .object({ NotificationRequestItem: PayoutNotificationRequestItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PayoutNotificationRequestItemWrapper')

const PayoutNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(PayoutNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('PayoutNotificationRequest')

const PayoutNotificationRequestItemRecursiveSchema = z
  .strictObject({
    additionalData: PayoutAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('PayoutNotificationRequestItemRecursive')

const PrearbitrationAcceptedNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(DisputesNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('PrearbitrationAcceptedNotificationRequest')

const PrearbitrationDeclineNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(DisputesNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('PrearbitrationDeclineNotificationRequest')

const PrearbitrationIssuerWithdrawnNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(DisputesNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('PrearbitrationIssuerWithdrawnNotificationRequest')

const PrearbitrationLostNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(DisputesNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('PrearbitrationLostNotificationRequest')

const PrearbitrationOpenNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(DisputesNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('PrearbitrationOpenNotificationRequest')

const PrearbitrationSchemeArbitrationNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(DisputesNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('PrearbitrationSchemeArbitrationNotificationRequest')

const PrearbitrationWonNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(DisputesNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('PrearbitrationWonNotificationRequest')

const RecurringContractNotificationAdditionalDataSchema = z
  .strictObject({
    'GoPay.gopayAccountId': z
      .string()
      .exactOptional()
      .openapi({
        description: "A GoPay shopper's wallet ID. Used by merchant for Risk and Fraud checks.",
      }),
    PaymentAccountReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reference of the payment account.' }),
    acquirerAccountCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The acquirer account code.' }),
    acquirerCode: z.string().exactOptional().openapi({ description: 'The acquirer code.' }),
    acquirerReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The acquirer reference.' }),
    'acsRenderingType.acsInterface': z
      .string()
      .exactOptional()
      .openapi({ description: 'ACS interface. Related to 3DS.' }),
    'acsRenderingType.acsUiTemplate': z
      .string()
      .exactOptional()
      .openapi({ description: 'ACS UI template.' }),
    alias: z.string().exactOptional().openapi({ description: 'Alias for this card.' }),
    aliasType: z.string().exactOptional().openapi({ description: 'Alias type.' }),
    arn: z
      .string()
      .exactOptional()
      .openapi({ description: 'Acquirer Reference Number of the dispute.' }),
    authCode: z.string().exactOptional().openapi({ description: 'Authcode of the scheme.' }),
    authenticationType: z
      .string()
      .exactOptional()
      .openapi({ description: '3DS authentication type' }),
    authorisationMid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Authorisation MID of the acquirer.' }),
    authorisedAmountCurrency: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency authorised for a dynamic zero auth request.' }),
    authorisedAmountValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The amount authorised for a dynamic zero auth request.' }),
    avsResult: z
      .string()
      .exactOptional()
      .openapi({ description: 'Address Verification Service result.' }),
    avsResultRaw: z
      .string()
      .exactOptional()
      .openapi({ description: 'Address Verification Service result raw.' }),
    bankAccountNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The bank account number.' }),
    bankLocation: z.string().exactOptional().openapi({ description: 'The bank location.' }),
    bankLocationId: z.string().exactOptional().openapi({ description: 'The bank location ID.' }),
    bankName: z.string().exactOptional().openapi({ description: 'The bank name.' }),
    bankVerificationResult: z
      .string()
      .exactOptional()
      .openapi({ description: 'The bank verification result.' }),
    bankVerificationResultRaw: z
      .string()
      .exactOptional()
      .openapi({ description: 'The bank verification result raw.' }),
    bic: z.string().exactOptional().openapi({ description: 'Business Identifier Code.' }),
    'billingAddress.city': z
      .string()
      .exactOptional()
      .openapi({ description: 'BillingAddress: county.' }),
    'billingAddress.houseNumberOrName': z
      .string()
      .exactOptional()
      .openapi({ description: 'BillingAddress: house number or name.' }),
    'billingAddress.postalCode': z
      .string()
      .exactOptional()
      .openapi({ description: 'BillingAddress: postal code.' }),
    'billingAddress.stateOrProvince': z
      .string()
      .exactOptional()
      .openapi({ description: 'BillingAddress: state or province' }),
    'billingAddress.street': z
      .string()
      .exactOptional()
      .openapi({ description: 'BillingAddress: street' }),
    browserCode: z.string().exactOptional().openapi({ description: 'Browser code.' }),
    captureDelayHours: z
      .string()
      .exactOptional()
      .openapi({ description: 'The amount of delay after authorisation.' }),
    captureMerchantReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The merchant reference of the capture.' }),
    capturePspReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PSP reference of the capture.' }),
    cardBin: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card Bank Identification number.' }),
    cardIssuingBank: z.string().exactOptional().openapi({ description: 'Card issuing bank.' }),
    cardIssuingCountry: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card issuing country.' }),
    cardIssuingCurrency: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card issuing currency.' }),
    cardPaymentMethod: z.string().exactOptional().openapi({ description: 'Card payment method.' }),
    cardSchemeEnhancedDataLevel: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card scheme enhanced data level.' }),
    cardSummary: z.string().exactOptional().openapi({ description: 'Card summary' }),
    cavv: z
      .string()
      .exactOptional()
      .openapi({ description: 'Secure Cardholder Authentication Verification Value.' }),
    cavvAlgorithm: z.string().exactOptional().openapi({ description: 'CAVV algorithm.' }),
    challengeCancel: z
      .string()
      .exactOptional()
      .openapi({ description: 'Information about the 3DS challenge being canceled.' }),
    checkoutSessionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the Checkout Session.' }),
    cvcResult: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card Verification Code result.' }),
    cvcResultRaw: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card Verification Code result raw.' }),
    'deliveryAddress.city': z
      .string()
      .exactOptional()
      .openapi({ description: 'Delivery address: city.' }),
    'deliveryAddress.country': z
      .string()
      .exactOptional()
      .openapi({ description: 'Delivery address: country.' }),
    'deliveryAddress.houseNumberOrName': z
      .string()
      .exactOptional()
      .openapi({ description: 'Delivery address: house number or name.' }),
    'deliveryAddress.postalCode': z
      .string()
      .exactOptional()
      .openapi({ description: 'Delivery address: postal code.' }),
    'deliveryAddress.stateOrProvince': z
      .string()
      .exactOptional()
      .openapi({ description: 'Delivery address: state or province.' }),
    'deliveryAddress.street': z
      .string()
      .exactOptional()
      .openapi({ description: 'Delivery address: street.' }),
    deviceType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of device the request was made from.' }),
    'directdebit_GB.dateOfSignature': z
      .string()
      .exactOptional()
      .openapi({ description: 'Direct debit GB: date of signature.' }),
    'directdebit_GB.mandateId': z
      .string()
      .exactOptional()
      .openapi({ description: 'Direct debit GB: mandate ID.' }),
    'directdebit_GB.sequenceType': z
      .string()
      .exactOptional()
      .openapi({ description: 'Direct debit GB: sequence type.' }),
    'directdebit_GB.serviceUserName': z
      .string()
      .exactOptional()
      .openapi({ description: 'Direct debit GB: service user name.' }),
    'directdebit_GB.serviceUserNumber': z
      .string()
      .exactOptional()
      .openapi({ description: 'Direct debit GB: service user number.' }),
    eci: z.string().exactOptional().openapi({ description: '3DS: Electronic Commerce Indicator.' }),
    expiryDate: z.string().exactOptional().openapi({ description: 'Expiry date of the card.' }),
    extraCostsCurrency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional cost used in [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification).',
      }),
    extraCostsValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Related additional cost value.' }),
    extraCostsValueGratuity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Gratuity related additional cost value.' }),
    extraCostsValueSurcharge: z
      .string()
      .exactOptional()
      .openapi({ description: 'Surcharge related additional cost value.' }),
    'fraudCheck-<check ID>-<name>': z
      .string()
      .exactOptional()
      .openapi({ description: 'Information on the fraud check in a dynamic format.' }),
    fraudManualReview: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates if the risk check was done manually.' }),
    fraudOffset: z.string().exactOptional().openapi({ description: 'The fraud offset.' }),
    fraudResultType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Result type of the fraud check.' }),
    fraudRiskLevel: z
      .enum(['veryLow', 'low', 'medium', 'high', 'veryHigh'])
      .exactOptional()
      .openapi({
        description:
          'The risk level of the transaction as classified by the [machine learning](https://docs.adyen.com/risk-management/configure-your-risk-profile/machine-learning-rules/) fraud risk rule. The risk level indicates the likelihood that a transaction will result in a fraudulent dispute. Possible values:\n* veryLow\n* low\n* medium\n* high\n* veryHigh\n\n',
      }),
    fundingSource: z.string().exactOptional().openapi({ description: 'Funding source.' }),
    grossCurrency: z
      .string()
      .exactOptional()
      .openapi({ description: 'Chargeback gross currency.' }),
    grossValue: z.string().exactOptional().openapi({ description: 'Chargeback gross value.' }),
    iban: z.string().exactOptional().openapi({ description: 'International Bank Account Number.' }),
    'installments.value': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of installments that the payment amount should be charged with.\n\nExample: 5\n> Only relevant for card payments in countries that support installments.',
      }),
    interactionCounter: z
      .string()
      .exactOptional()
      .openapi({ description: '3DS interaction counter.' }),
    'issuerComments.cardholderName': z
      .string()
      .exactOptional()
      .openapi({ description: 'Card holder name.' }),
    issuerCountry: z
      .string()
      .exactOptional()
      .openapi({ description: 'Country of the card issuer.' }),
    'latestCard.bin': z
      .string()
      .exactOptional()
      .openapi({ description: 'Recurring: Latest card BIN.' }),
    'latestCard.expiryDate': z
      .string()
      .exactOptional()
      .openapi({ description: 'Recurring: Latest card expiry date.' }),
    'latestCard.summary': z
      .string()
      .exactOptional()
      .openapi({ description: 'Recurring: Latest card summary.' }),
    liabilityShift: z.string().exactOptional().openapi({ description: 'Risk liability shift.' }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "A set of key-value pairs provided in the request, prefixed with 'metadata.'. For example, 'metadata.myField: myValue'",
      }),
    networkProcessingMode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the processing flow.\n\nPossible values:\n* **sale**: You do not need to separately capture the funds, because capture happens automatically as part of the transaction. \n* **auth**: If you have not [configured automatic capture for the transaction](https://docs.adyen.com/online-payments/capture#types-of-capture), you must manually capture the funds.',
      }),
    'networkToken.available': z
      .string()
      .exactOptional()
      .openapi({ description: 'Recurring related.' }),
    'networkToken.bin': z.string().exactOptional().openapi({ description: 'Recurring related.' }),
    'networkToken.tokenSummary': z
      .string()
      .exactOptional()
      .openapi({ description: 'Recurring related.' }),
    networkTxDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The network transaction date for Mastercard transactions processed by Bank of America Merchant Services (BAMS).',
      }),
    networkTxReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The network transaction reference from the scheme, when available.',
      }),
    'nfc.expire': z.string().exactOptional().openapi({ description: 'NFC related.' }),
    'nfc.issue': z.string().exactOptional().openapi({ description: 'NFC related.' }),
    'nfc.pin.provided': z.string().exactOptional().openapi({ description: 'NFC related.' }),
    'nfc.uid': z.string().exactOptional().openapi({ description: 'NFC related.' }),
    'opi.transToken': z
      .string()
      .exactOptional()
      .openapi({ description: 'Trans token related to Oracle Opera.' }),
    ownerCity: z.string().exactOptional().openapi({ description: 'Owner city.' }),
    ownerName: z.string().exactOptional().openapi({ description: 'Owner name.' }),
    payULatamTrazabilityCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Related to PayU in LATAM.' }),
    paymentLinkId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the Checkout payment link.' }),
    realtimeAccountUpdaterStatus: z
      .string()
      .exactOptional()
      .openapi({ description: 'Real time Account Update status.' }),
    'recurring.contractTypes': z
      .string()
      .exactOptional()
      .openapi({ description: 'Recurring contract types.' }),
    'recurring.firstPspReference': z
      .string()
      .exactOptional()
      .openapi({ description: 'Recurring first PSP reference.' }),
    'recurring.recurringDetailReference': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [token for stored payment details](https://docs.adyen.com/online-payments/tokenization/create-and-use-tokens/) to make recurring payments.',
      }),
    referred: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the payment is referred, this field is set to true.\n\nThis field is unavailable if the payment is referred and is usually not returned with ecommerce transactions.\n\nExample: true',
      }),
    refusalReasonRaw: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Raw refusal reason received from the acquirer, where available.\n\nExample: AUTHORISED',
      }),
    'retry.rescueScheduled': z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates if an auto rescue for a payment is scheduled.' }),
    riskProfile: z.string().exactOptional().openapi({ description: 'Related to Risk.' }),
    riskProfileReference: z.string().exactOptional().openapi({ description: 'Related to Risk.' }),
    shopperCountry: z.string().exactOptional().openapi({ description: 'Country of the shopper.' }),
    shopperEmail: z.string().exactOptional().openapi({ description: 'Email of the shopper.' }),
    shopperIP: z.string().exactOptional().openapi({ description: 'IP of the shopper.' }),
    shopperInteraction: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The shopper interaction type of the payment request.\n\nExample: Ecommerce',
      }),
    shopperLocale: z
      .string()
      .exactOptional()
      .openapi({ description: 'The locale of the shopper.' }),
    shopperReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID that uniquely identifies the shopper. The `shopperReference` is the same as the `shopperReference` used in the initial payment.',
      }),
    shopperSocialSecurityNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The social security number of the shopper.' }),
    shopperStatement: z
      .string()
      .exactOptional()
      .openapi({ description: "The text to be shown on the shopper's bank statement." }),
    shopperTelephone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The telephone number of the shopper.' }),
    store: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier of the store processing the transaction.' }),
    tenderReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'Tender reference. For point-of-sale integrations only.' }),
    terminalId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Terminal ID. For point-of-sale integrations only.' }),
    threeDAuthenticated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A Boolean value indicating whether 3DS authentication was completed on this payment.\n\nExample: true',
      }),
    threeDAuthenticatedResponse: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The raw 3DS authentication result from the card issuer.\n\nExample: N',
      }),
    threeDOffered: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A Boolean value indicating whether 3DS was offered for this payment.\n\nExample: true',
      }),
    threeDOfferedResponse: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The raw enrollment result from the 3DS directory services of the card schemes.\n\nExample: Y',
      }),
    threeDSVersion: z.string().exactOptional().openapi({ description: 'The 3D Secure 2 version.' }),
    tokenTxVariant: z
      .string()
      .exactOptional()
      .openapi({ description: 'Payment method variant of the token/wallet payment method.' }),
    totalFraudScore: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total fraud score from risk.' }),
    untokenisedCardSummary: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card summary without tokenization.' }),
    xid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The 3DS transaction ID of the 3DS session sent in notifications. The value is Base64-encoded and is returned for transactions with directoryResponse 'N' or 'Y'. \n\nExample: ODgxNDc2MDg2MDExODk5MAAAAAA=",
      }),
  })
  .openapi({ required: [] })
  .openapi('RecurringContractNotificationAdditionalData')

const RecurringContractNotificationRequestItemSchema = z
  .strictObject({
    additionalData: RecurringContractNotificationAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .literal('RECURRING_CONTRACT')
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalPsp: z.string().openapi({ description: 'The `pspReference` of the initial payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          'The [token for stored payment details](https://docs.adyen.com/online-payments/tokenization/create-and-use-tokens/) to make recurring payments. This is the same as the `recurringDetailReference`.',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'originalPsp',
      'pspReference',
      'success',
    ],
  })
  .openapi('RecurringContractNotificationRequestItem')

const RecurringContractNotificationRequestItemWrapperSchema = z
  .object({
    NotificationRequestItem: RecurringContractNotificationRequestItemSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RecurringContractNotificationRequestItemWrapper')

const RecurringContractNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(RecurringContractNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('RecurringContractNotificationRequest')

const RecurringContractNotificationRequestItemRecursiveSchema = z
  .strictObject({
    additionalData: RecurringContractNotificationAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .literal('RECURRING_CONTRACT')
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalPsp: z.string().openapi({ description: 'The `pspReference` of the initial payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          'The [token for stored payment details](https://docs.adyen.com/online-payments/tokenization/create-and-use-tokens/) to make recurring payments. This is the same as the `recurringDetailReference`.',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'originalPsp',
      'pspReference',
      'success',
    ],
  })
  .openapi('RecurringContractNotificationRequestItemRecursive')

const RefundAdditionalDataSchema = z
  .strictObject({
    acquirerErrorCode: z.string().exactOptional(),
    acquirerErrorDescription: z.string().exactOptional(),
    acquirerReference: z.string().exactOptional(),
    'acsRenderingType.acsInterface': z.string().exactOptional(),
    'acsRenderingType.acsUiTemplate': z.string().exactOptional(),
    arn: z.string().exactOptional(),
    authenticationType: z.string().exactOptional(),
    bookingDate: z.string().exactOptional(),
    checkoutSessionId: z.string().exactOptional(),
    coBrandedWith: z.string().exactOptional(),
    hmacSignature: z.string().exactOptional(),
    interactionCounter: z.string().exactOptional(),
    merchantOrderReference: z.string().exactOptional(),
    networkTxDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The network transaction date for Mastercard transactions processed by Bank of America Merchant Services (BAMS).',
      }),
    networkTxReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The network transaction reference from the scheme, when available.',
      }),
    paymentLinkId: z.string().exactOptional(),
    paymentMethodVariant: z.string().exactOptional(),
    shopperCountry: z.string().exactOptional(),
    store: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RefundAdditionalData')

const RefundFailedAdditionalDataSchema = z
  .strictObject({
    acquirerErrorCode: z.string().exactOptional(),
    bookingDate: z.string().exactOptional(),
    coBrandedWith: z.string().exactOptional(),
    hmacSignature: z.string().exactOptional(),
    paymentMethodVariant: z.string().exactOptional(),
    refusalReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Adyen-mapped [refusal reason](https://docs.adyen.com/development-resources/refusal-reasons).\n\nExample: **Refused**',
      }),
    refusalReasonCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Adyen code that maps to the [refusal reason](https://docs.adyen.com/development-resources/refusal-reasons).\n\nExample: **2**',
      }),
    refusalReasonRaw: z
      .string()
      .exactOptional()
      .openapi({ description: 'The raw refusal reason from the acquirer, where available.' }),
    shopperCountry: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RefundFailedAdditionalData')

const RefundCaptureFailedNotificationRequestItemSchema = z
  .strictObject({
    additionalData: RefundFailedAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('RefundCaptureFailedNotificationRequestItem')

const RefundCaptureFailedNotificationRequestItemWrapperSchema = z
  .object({
    NotificationRequestItem: RefundCaptureFailedNotificationRequestItemSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RefundCaptureFailedNotificationRequestItemWrapper')

const RefundCaptureFailedNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(RefundCaptureFailedNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('RefundCaptureFailedNotificationRequest')

const RefundCaptureFailedNotificationRequestItemRecursiveSchema = z
  .strictObject({
    additionalData: RefundFailedAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('RefundCaptureFailedNotificationRequestItemRecursive')

const SettlementReversalAdditionalDataSchema = z
  .strictObject({
    bookingDate: z.string().exactOptional(),
    expectedValueDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The expected value date of the settlement. Format: yyyy-MM-dd. To receive this field in the webhook, you must enable **Include Settlement Reference** in the additional settings when you [configure the webhook in your Customer Area](https://docs.adyen.com/development-resources/webhooks/configure-and-manage#set-up-webhooks-in-your-customer-area). This setting also enables the `settlementReference` field.',
      }),
    hmacSignature: z.string().exactOptional(),
    paymentMethodVariant: z.string().exactOptional(),
    settlementReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reference of the original settlement. To receive this field in the webhook, you must enable **Include Settlement Reference** in the additional settings when you [configure the webhook in your Customer Area](https://docs.adyen.com/development-resources/webhooks/configure-and-manage#set-up-webhooks-in-your-customer-area). This setting also enables the `expectedValueDate` field.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SettlementReversalAdditionalData')

const RefundNotClearedNotificationRequestItemSchema = z
  .strictObject({
    additionalData: SettlementReversalAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .literal('REFUND_NOT_CLEARED')
      .openapi({ description: 'The type of event for which you receive the webhook.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request reference assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'originalReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('RefundNotClearedNotificationRequestItem')

const RefundNotClearedNotificationRequestItemWrapperSchema = z
  .object({
    NotificationRequestItem: RefundNotClearedNotificationRequestItemSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RefundNotClearedNotificationRequestItemWrapper')

const RefundNotClearedNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(RefundNotClearedNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('RefundNotClearedNotificationRequest')

const RefundNotClearedNotificationRequestItemRecursiveSchema = z
  .strictObject({
    additionalData: SettlementReversalAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .literal('REFUND_NOT_CLEARED')
      .openapi({ description: 'The type of event for which you receive the webhook.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request reference assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'originalReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('RefundNotClearedNotificationRequestItemRecursive')

const RefundNotificationRequestItemSchema = z
  .strictObject({
    additionalData: RefundAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('RefundNotificationRequestItem')

const RefundNotificationRequestItemWrapperSchema = z
  .object({ NotificationRequestItem: RefundNotificationRequestItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('RefundNotificationRequestItemWrapper')

const RefundNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(RefundNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('RefundNotificationRequest')

const RefundNotificationRequestItemRecursiveSchema = z
  .strictObject({
    additionalData: RefundAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('RefundNotificationRequestItemRecursive')

const RefundWithDataAdditionalDataSchema = z
  .strictObject({
    PaymentAccountReference: z.string().exactOptional(),
    acquirerAccountCode: z.string().exactOptional(),
    acquirerCode: z.string().exactOptional(),
    acquirerReference: z.string().exactOptional(),
    'acsRenderingType.acsInterface': z.string().exactOptional(),
    'acsRenderingType.acsUiTemplate': z.string().exactOptional(),
    alias: z.string().exactOptional(),
    aliasType: z.string().exactOptional(),
    arn: z.string().exactOptional(),
    authCode: z.string().exactOptional(),
    authenticationType: z.string().exactOptional(),
    authorisationMid: z.string().exactOptional(),
    avsResult: z.string().exactOptional(),
    bookingDate: z.string().exactOptional(),
    cardBin: z.string().exactOptional(),
    cardHolderName: z.string().exactOptional(),
    cardIssuingBank: z.string().exactOptional(),
    cardIssuingCountry: z.string().exactOptional(),
    cardIssuingCurrency: z.string().exactOptional(),
    cardPaymentMethod: z.string().exactOptional(),
    cardSummary: z.string().exactOptional(),
    cavv: z.string().exactOptional(),
    cavvAlgorithm: z.string().exactOptional(),
    checkoutSessionId: z.string().exactOptional(),
    coBrandedWith: z.string().exactOptional(),
    cvcResult: z.string().exactOptional(),
    eci: z.string().exactOptional(),
    expiryDate: z.string().exactOptional(),
    fundingSource: z.string().exactOptional(),
    hmacSignature: z.string().exactOptional(),
    interactionCounter: z.string().exactOptional(),
    isCardCommercial: z.string().exactOptional(),
    issuerCountry: z.string().exactOptional(),
    liabilityShift: z.string().exactOptional(),
    merchantOrderReference: z.string().exactOptional(),
    networkTxDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The network transaction date for Mastercard transactions processed by Bank of America Merchant Services (BAMS).',
      }),
    networkTxReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The network transaction reference from the scheme, when available.',
      }),
    paymentLinkId: z.string().exactOptional(),
    paymentMethodVariant: z.string().exactOptional(),
    refusalReasonRaw: z.string().exactOptional(),
    shopperCountry: z.string().exactOptional(),
    shopperIP: z.string().exactOptional(),
    shopperInteraction: z.string().exactOptional(),
    store: z.string().exactOptional(),
    tenderReference: z.string().exactOptional(),
    terminalId: z.string().exactOptional(),
    threeDAuthenticated: z.string().exactOptional(),
    threeDAuthenticatedResponse: z.string().exactOptional(),
    threeDOffered: z.string().exactOptional(),
    threeDOfferedResponse: z.string().exactOptional(),
    xid: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RefundWithDataAdditionalData')

const RefundWithDataNotificationRequestItemSchema = z
  .strictObject({
    additionalData: RefundWithDataAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('RefundWithDataNotificationRequestItem')

const RefundWithDataNotificationRequestItemWrapperSchema = z
  .object({ NotificationRequestItem: RefundWithDataNotificationRequestItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('RefundWithDataNotificationRequestItemWrapper')

const RefundWithDataNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(RefundWithDataNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('RefundWithDataNotificationRequest')

const RefundWithDataNotificationRequestItemRecursiveSchema = z
  .strictObject({
    additionalData: RefundWithDataAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .enum([
        'AUTHENTICATION',
        'AUTHORISATION',
        'AUTHORISATION_ADJUSTMENT',
        'AUTORESCUE',
        'CANCELLATION',
        'CANCEL_AUTORESCUE',
        'CANCEL_OR_REFUND',
        'CAPTURE',
        'CAPTURE_FAILED',
        'CHARGEBACK',
        'CHARGEBACK_REVERSED',
        'DISPUTE_DEFENSE_PERIOD_ENDED',
        'EXPIRE',
        'HANDLED_EXTERNALLY',
        'INFORMATION_SUPPLIED',
        'ISSUER_COMMENTS',
        'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
        'MANUAL_REVIEW_ACCEPT',
        'MANUAL_REVIEW_REJECT',
        'NOTIFICATION_OF_CHARGEBACK',
        'NOTIFICATION_OF_FRAUD',
        'OFFER_CLOSED',
        'ORDER_CLOSED',
        'ORDER_OPENED',
        'PAYOUT_DECLINE',
        'PAYOUT_EXPIRE',
        'PAYOUT_THIRDPARTY',
        'POSTPONED_REFUND',
        'PREARBITRATION_LOST',
        'PREARBITRATION_OPEN',
        'PREARBITRATION_WON',
        'RECURRING_CONTRACT',
        'REFUND',
        'REFUNDED_REVERSED',
        'REFUND_FAILED',
        'REFUND_NOT_CLEARED',
        'REFUND_WITH_DATA',
        'REQUEST_FOR_INFORMATION',
        'REVERSAL',
        'SECOND_CHARGEBACK',
        'SETTLED_REVERSED',
        'TECHNICAL_CANCEL',
        'VOID_PENDING_REFUND',
      ])
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('RefundWithDataNotificationRequestItemRecursive')

const ReportAdditionalDataSchema = z
  .strictObject({ hmacSignature: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ReportAdditionalData')

const ReportAvailableNotificationRequestItemSchema = z
  .strictObject({
    additionalData: ReportAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .literal('REPORT_AVAILABLE')
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z.string().openapi({ description: 'Contains the file name of the report.' }),
    reason: z
      .string()
      .openapi({
        description: 'Contains the download URL where you can obtain a copy of the report.',
      }),
    success: z.string().openapi({ description: 'Always `true`.' }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'reason',
      'success',
    ],
  })
  .openapi('ReportAvailableNotificationRequestItem')

const ReportAvailableNotificationRequestItemWrapperSchema = z
  .object({ NotificationRequestItem: ReportAvailableNotificationRequestItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ReportAvailableNotificationRequestItemWrapper')

const ReportAvailableNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(ReportAvailableNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('ReportAvailableNotificationRequest')

const ReportAvailableNotificationRequestItemRecursiveSchema = z
  .strictObject({
    additionalData: ReportAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .literal('REPORT_AVAILABLE')
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z.string().openapi({ description: 'Contains the file name of the report.' }),
    reason: z
      .string()
      .openapi({
        description: 'Contains the download URL where you can obtain a copy of the report.',
      }),
    success: z.string().openapi({ description: 'Always `true`.' }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'reason',
      'success',
    ],
  })
  .openapi('ReportAvailableNotificationRequestItemRecursive')

const RequestForInformationNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(DisputesNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('RequestForInformationNotificationRequest')

const ReversalAdditionalDataSchema = z
  .strictObject({
    acquirerReference: z.string().exactOptional(),
    'acsRenderingType.acsInterface': z.string().exactOptional(),
    'acsRenderingType.acsUiTemplate': z.string().exactOptional(),
    arn: z.string().exactOptional(),
    authenticationType: z.string().exactOptional(),
    bookingDate: z.string().exactOptional(),
    cancellableUntil: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The UTC date and time until which the refund can still be cancelled. Format: ISO 8601, for example **2024-05-21T14:32:00Z**. Only present while the refund is actually being held.',
      }),
    checkoutSessionId: z.string().exactOptional(),
    coBrandedWith: z.string().exactOptional(),
    hmacSignature: z.string().exactOptional(),
    interactionCounter: z.string().exactOptional(),
    merchantOrderReference: z.string().exactOptional(),
    'modification.action': z
      .enum(['cancel', 'refund', 'cancelRefund'])
      .exactOptional()
      .openapi({ description: 'The operation the reversal resolved to.' }),
    'modification.status': z
      .enum(['authorised', 'submitted', 'cancelled', 'refused', 'error', 'failed'])
      .exactOptional()
      .openapi({ description: 'The status of the operation the reversal resolved to.' }),
    paymentLinkId: z.string().exactOptional(),
    paymentMethodVariant: z.string().exactOptional(),
    refundPspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The PSP reference of the refund targeted by a reversal cancellation.',
      }),
    shopperCountry: z.string().exactOptional(),
    store: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReversalAdditionalData')

const ReversalNotificationRequestItemSchema = z
  .strictObject({
    additionalData: ReversalAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .literal('REVERSAL')
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('ReversalNotificationRequestItem')

const ReversalNotificationRequestItemWrapperSchema = z
  .object({ NotificationRequestItem: ReversalNotificationRequestItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ReversalNotificationRequestItemWrapper')

const ReversalNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(ReversalNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('ReversalNotificationRequest')

const ReversalNotificationRequestItemRecursiveSchema = z
  .strictObject({
    additionalData: ReversalAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .literal('REVERSAL')
      .openapi({ description: 'The type of event the notification item is for.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('ReversalNotificationRequestItemRecursive')

const SchemeArbitrationLostNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(DisputesNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('SchemeArbitrationLostNotificationRequest')

const SchemeArbitrationWonNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(DisputesNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('SchemeArbitrationWonNotificationRequest')

const SecondChargebackNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(DisputesNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('SecondChargebackNotificationRequest')

const SettledReversedNotificationRequestItemSchema = z
  .strictObject({
    additionalData: SettlementReversalAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .literal('SETTLED_REVERSED')
      .openapi({ description: 'The type of event for which you receive the webhook.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request reference assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'originalReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('SettledReversedNotificationRequestItem')

const SettledReversedNotificationRequestItemWrapperSchema = z
  .object({ NotificationRequestItem: SettledReversedNotificationRequestItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('SettledReversedNotificationRequestItemWrapper')

const SettledReversedNotificationRequestSchema = z
  .strictObject({
    live: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informs about the origin of the notification. The value is **true** when originating from the live environment, **false** for the test environment.',
      }),
    notificationItems: z
      .array(SettledReversedNotificationRequestItemWrapperSchema)
      .exactOptional()
      .openapi({ description: 'A container object for the details included in the notification.' }),
  })
  .openapi({ required: [] })
  .openapi('SettledReversedNotificationRequest')

const SettledReversedNotificationRequestItemRecursiveSchema = z
  .strictObject({
    additionalData: SettlementReversalAdditionalDataSchema.exactOptional().openapi({
      description: 'This object is a generic container that can hold extra fields.',
    }),
    amount: AmountSchema.openapi({
      description:
        'The payment amount. For HTTP POST notifications, currency and value are returned as URL parameters.',
    }),
    eventCode: z
      .literal('SETTLED_REVERSED')
      .openapi({ description: 'The type of event for which you receive the webhook.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when the event was generated. Format: ISO 8601; yyyy-MM-DDThh:mm:ssTZD',
        example: '2021-07-17T13:42:40+01:00',
      }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier used in the transaction the notification item is for.',
      }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    originalReference: z
      .string()
      .openapi({
        description:
          'For modifications, this field corresponds to the payment request reference assigned to the original payment.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method used in the transaction.',
        example: 'visa, mc, iDeal',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction or request. This value is globally unique. Use it when communicating with us about this request.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `success` = `false`, then this includes a short message with an explanation for the refusal.',
      }),
    success: z
      .string()
      .openapi({
        description:
          'Informs about the outcome of the event (`eventCode`) the notification is for. \nIf `true`: the event was executed successfully. \nIf `false`: the event was not executed successfully.',
      }),
  })
  .openapi({
    required: [
      'amount',
      'eventCode',
      'eventDate',
      'merchantAccountCode',
      'merchantReference',
      'originalReference',
      'pspReference',
      'success',
    ],
  })
  .openapi('SettledReversedNotificationRequestItemRecursive')

const PostACHNOTIFICATIONOFCHANGEAchNotificationOfChangeExample = {
  summary: 'ACH_NOTIFICATION_OF_CHANGE example',
  value: {
    type: 'ach.notificationOfChange',
    version: '1',
    createdAt: '2021-01-01T01:00:00+01:00',
    environment: 'test',
    data: {
      pspReference: 'QFQTPCQ8HXSKGK82',
      shopperReference: 'YOUR_SHOPPER_REFERENCE',
      notificationOfChange: {
        reasonCode: 'C07',
        newBankAccountNumber: '987654321',
        newBranchCode: '12345',
        newBankAccountType: 'Checking',
      },
    },
  },
}

const PostAUTHORISATIONAuthorisationExample = {
  summary: 'AUTHORISATION example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            'tokenization.shopperReference': 'YOUR_SHOPPER_REFERENCE',
            'tokenization.storedPaymentMethodId': 'M5N7TQ4TG5PFWR50',
            'tokenization.store.operationType': 'created',
          },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'AUTHORISATION',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          paymentMethod: 'ach',
          operations: ['CANCEL', 'CAPTURE', 'REFUND'],
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: 'null',
          success: 'true',
        },
      },
    ],
  },
}

const PostAUTHORISATIONADJUSTMENTAuthorisationAdjustmentExample = {
  summary: 'AUTHORISATION_ADJUSTMENT example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'AUTHORISATION_ADJUSTMENT',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          originalReference: '9913140798220028',
          paymentMethod: 'visa',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: '',
          success: 'true',
        },
      },
    ],
  },
}

const PostAUTORESCUEAutorescueExample = {
  summary: 'AUTORESCUE example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            'retry.rescueReference': '8826173525728789',
            merchantOrderReference: '8826173525728789',
            hmacSignature: 'b0ea55c2fe60d4d1d605e9c385e0e7...',
          },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'AUTORESCUE',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          originalReference: '9913140798220028',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: '',
          success: 'true',
        },
      },
    ],
  },
}

const PostCANCELLATIONCancellationExample = {
  summary: 'CANCELLATION example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'CANCELLATION',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          originalReference: '9913140798220028',
          paymentMethod: 'visa',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: '',
          success: 'true',
        },
      },
    ],
  },
}

const PostCANCELAUTORESCUECancelAutorescueExample = {
  summary: 'CANCEL_AUTORESCUE example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: { hmacSignature: 'b0ea55c2fe60d4d1d605e9c385e0e7...' },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'CANCEL_AUTORESCUE',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          originalReference: '9913140798220028',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: 'No AutoRescue process for retry.rescueReference 8826173525728789',
          success: 'false',
        },
      },
    ],
  },
}

const PostCANCELORREFUNDCancelOrRefundExample = {
  summary: 'CANCEL_OR_REFUND example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: { 'modification.action': 'cancel' },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'CANCEL_OR_REFUND',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          originalReference: '9913140798220028',
          paymentMethod: 'visa',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: '',
          success: 'true',
        },
      },
    ],
  },
}

const PostCAPTURECaptureExample = {
  summary: 'CAPTURE example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'CAPTURE',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          originalReference: '9913140798220028',
          paymentMethod: 'visa',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: '',
          success: 'true',
        },
      },
    ],
  },
}

const PostCAPTUREFAILEDCaptureFailedExample = {
  summary: 'CAPTURE_FAILED example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            paymentMethodVariant: 'facilypay_3x',
            hmacSignature: 'b0ea55c2fe60d4d1d605e9c385e0e7...',
            shopperCountry: 'NL',
          },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'CAPTURE_FAILED',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          originalReference: '9913140798220028',
          paymentMethod: 'facilypay_3x',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: 'Capture Failed',
          success: 'true',
        },
      },
    ],
  },
}

const PostCHARGEBACKChargebackExample = {
  summary: 'CHARGEBACK example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            captureMerchantReference: 'shopperReferenceTest',
            chargebackReasonCode: ' 4853',
            InvoiceCreditorAccount: 'Creditor.AdyenInvoiceService',
            grossCurrency: 'EUR',
            hmacSignature: 'b0ea55c2fe60d4d1d605e9c385e0e7...',
            defensePeriodEndsAt: '2021-07-31T03:03:07+02:00',
            defendable: 'true',
            grossValue: '2000',
            modificationMerchantReferences: 'shopperReferenceTest',
            chargebackSchemeCode: 'mc',
            capturePspReference: '8636172945333378',
            paymentMethodVariant: 'mc',
            shopperReference: 'YOUR_SHOPPER_REFERENCE',
          },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'CHARGEBACK',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          originalReference: '9913140798220028',
          paymentMethod: 'mc',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: 'Payment.TxId=300000000524534724 dispute',
          success: 'true',
        },
      },
    ],
  },
}

const PostCHARGEBACKREVERSEDChargebackReversedExample = {
  summary: 'CHARGEBACK_REVERSED example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: { hmacSignature: 'b0ea55c2fe60d4d1d605e9c385e0e7...' },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'CHARGEBACK_REVERSED',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          paymentMethod: 'mc',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: 'Fraudulent Processing of Transactions',
          success: 'true',
        },
      },
    ],
  },
}

const PostDIRECTDEBITNOTICEOFCHANGENOTIFICATIONAchNoticeOfChangeExample = {
  summary: 'DIRECT_DEBIT_NOTICE_OF_CHANGE_NOTIFICATION ACH Direct Debit example',
  value: {
    type: 'ach.notificationOfChange',
    version: '1',
    createdAt: '2021-01-01T01:00:00+01:00',
    environment: 'test',
    data: {
      pspReference: 'QFQTPCQ8HXSKGK82',
      shopperReference: 'YOUR_SHOPPER_REFERENCE',
      notificationOfChange: {
        reasonCode: 'C07',
        newBankAccountNumber: '012345678901',
        newBranchCode: '021000021',
        newBankAccountType: 'Checking',
      },
    },
  },
}

const PostDIRECTDEBITNOTICEOFCHANGENOTIFICATIONEftNoticeOfChangeExample = {
  summary: 'DIRECT_DEBIT_NOTICE_OF_CHANGE_NOTIFICATION EFT PAD example',
  value: {
    type: 'eft.notificationOfChange',
    version: '1',
    createdAt: '2021-01-01T01:00:00+01:00',
    environment: 'test',
    data: {
      pspReference: 'QFQTPCQ8HXSKGK82',
      shopperReference: 'YOUR_SHOPPER_REFERENCE',
      notificationOfChange: { newBankAccountNumber: '1234567', newBankLocationId: '00123004' },
    },
  },
}

const PostDISPUTEDEFENSEPERIODENDEDDisputeDefensePeriodEndedExample = {
  summary: 'DISPUTE_DEFENSE_PERIOD_ENDED example',
  value: {
    live: 'true',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            chargebackReasonCode: '10.4',
            modificationMerchantReferences: '',
            chargebackSchemeCode: 'visa',
            disputeStatus: 'Lost',
          },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'DISPUTE_DEFENSE_PERIOD_ENDED',
          eventDate: '2024-11-11T01:30:57+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_REFERENCE',
          originalReference: '9914444444444444',
          paymentMethod: 'visa',
          pspReference: '9915555555555555',
          reason: 'Other Fraud-Card Absent Environment',
          success: 'true',
        },
      },
    ],
  },
}

const PostEXPIREExpireExample = {
  summary: 'EXPIRE example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'EXPIRE',
          eventDate: '2024-02-09T11:19:48+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: '',
          success: 'true',
        },
      },
    ],
  },
}

const PostINFORMATIONSUPPLIEDInformationSuppliedExample = {
  summary: 'INFORMATION_SUPPLIED example',
  value: {
    live: 'true',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            chargebackReasonCode: '13.3',
            chargebackSchemeCode: 'visa',
            disputeStatus: 'Pending',
          },
          amount: { currency: 'USD', value: 10000 },
          eventCode: 'INFORMATION_SUPPLIED',
          eventDate: '2025-05-17T09:35:14+02:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          originalReference: '9914444444444444',
          merchantReference: 'YOUR_REFERENCE',
          paymentMethod: 'visa',
          pspReference: '9915555555555555',
          reason: 'Not as Described or Defective Merchandise/Services',
          success: 'true',
        },
      },
    ],
  },
}

const PostISSUERCOMMENTSIssuerCommentsExample = {
  summary: 'ISSUER_COMMENTS example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            chargebackReasonCode: '13.3',
            chargebackSchemeCode: 'visa',
            'issuerComments.type': 'chargeback',
            'issuerComments.disputeAmountChangeReason': 'some_text',
            'issuerComments.cancellationMethod': 'some_text',
            'issuerComments.orderDetailsNotAsDescribed': 'some_text',
            'issuerComments.explanation': 'some_text',
            'issuerComments.damagedOrDefectiveOrderInfo': 'some_text',
            'issuerComments.howChAttemptReturnAndDispOfMerchandise': 'some_text',
            'issuerComments.whatWasNotReceived': 'some_text',
            'issuerComments.cancellationDate': 'date_of_cancellation',
          },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'ISSUER_COMMENTS',
          eventDate: '2025-05-17T09:35:14+02:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          originalReference: '9914444444444444',
          merchantReference: 'YOUR_REFERENCE',
          paymentMethod: 'visa',
          pspReference: '9915555555555555',
          reason: 'Not as Described or Defective Merchandise/Services',
          success: 'true',
        },
      },
    ],
  },
}

const PostISSUERRESPONSETIMEFRAMEEXPIREDIssuerResponseTimeframeExpiredExample = {
  summary: 'ISSUER_RESPONSE_TIMEFRAME_EXPIRED example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            chargebackReasonCode: '13.1',
            chargebackSchemeCode: 'visa',
            modificationMerchantReferences: '',
            disputeStatus: 'Won',
          },
          amount: { currency: 'USD', value: 10000 },
          eventCode: 'ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
          eventDate: '2021-05-19T09:35:14+02:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          originalReference: '9914444444444444',
          merchantReference: 'YOUR_REFERENCE',
          paymentMethod: 'visa',
          pspReference: '9915555555555555',
          reason: 'Merchandise/Services Not Received',
          success: 'true',
        },
      },
    ],
  },
}

const PostMANUALREVIEWACCEPTManualReviewAcceptExample = {
  summary: 'MANUAL_REVIEW_ACCEPT example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            hmacSignature: 'b0ea55c2fe60d4d1d605e9c385e0e7...',
            paymentMethodVariant: 'scheme',
          },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'MANUAL_REVIEW_ACCEPT',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          originalReference: '9913140798220028',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: 'expire',
          success: 'true',
        },
      },
    ],
  },
}

const PostMANUALREVIEWREJECTManualReviewRejectExample = {
  summary: 'MANUAL_REVIEW_REJECT example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            hmacSignature: 'b0ea55c2fe60d4d1d605e9c385e0e7...',
            paymentMethodVariant: 'visa',
          },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'MANUAL_REVIEW_REJECT',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          originalReference: '9913140798220028',
          paymentMethod: 'visa',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: 'expire',
          success: 'true',
        },
      },
    ],
  },
}

const PostNOTIFICATIONOFCHARGEBACKNotificationOfChargebackExample = {
  summary: 'NOTIFICATION_OF_CHARGEBACK example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            captureMerchantReference: 'shopperReferenceTest',
            chargebackReasonCode: ' 4853',
            grossCurrency: 'EUR',
            hmacSignature: 'b0ea55c2fe60d4d1d605e9c385e0e7...',
            defensePeriodEndsAt: '2021-07-31T03:03:08+02:00',
            defendable: 'false',
            grossValue: '2000',
            modificationMerchantReferences: 'YourModificationReference,shopperReferenceTest',
            chargebackSchemeCode: 'mc',
            capturePspReference: '8536173024791891',
            autoDefended: 'true',
            paymentMethodVariant: 'mc',
          },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'NOTIFICATION_OF_CHARGEBACK',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          originalReference: '9913140798220028',
          paymentMethod: 'mc',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: 'Payment.TxId=300000000524659113 dispute (automatically defended)',
          success: 'true',
        },
      },
    ],
  },
}

const PostNOTIFICATIONOFFRAUDNotificationOfFraudExample = {
  summary: 'NOTIFICATION_OF_FRAUD example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            nofReasonCode: '6',
            hmacSignature: 'b0ea55c2fe60d4d1d605e9c385e0e7...',
            modificationMerchantReferences: 'shopperReferenceTest',
            nofSchemeCode: 'visa',
          },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'NOTIFICATION_OF_FRAUD',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          originalReference: '9913140798220028',
          paymentMethod: 'visa',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: 'Fraudulent Use of Account Number',
          success: 'true',
        },
      },
    ],
  },
}

const PostOFFERCLOSEDOfferClosedExample = {
  summary: 'OFFER_CLOSED example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            hmacSignature: 'b0ea55c2fe60d4d1d605e9c385e0e7...',
            paymentMethodVariant: 'ideal',
          },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'OFFER_CLOSED',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          paymentMethod: 'ideal',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: '',
          success: 'true',
        },
      },
    ],
  },
}

const PostORDERCLOSEDOrderClosedExample = {
  summary: 'ORDER_CLOSED example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            'order-1-pspReference': '861617275047284E',
            'order-1-paymentAmount': 'EUR 10.00',
            'order-1-success': 'true',
            'order-1-paymentMethod': 'ideal',
          },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'ORDER_CLOSED',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: '',
          success: 'false',
        },
      },
    ],
  },
}

const PostORDEROPENEDOrderOpenedExample = {
  summary: 'ORDER_OPENED example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'ORDER_OPENED',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: '',
          success: 'true',
        },
      },
    ],
  },
}

const PostPAIDOUTREVERSEDPaidoutReversedExample = {
  summary: 'PAIDOUT_REVERSED example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'PAIDOUT_REVERSED',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          originalReference: '9913140798220028',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: '',
          success: 'true',
        },
      },
    ],
  },
}

const PostPAYOUTDECLINEPayoutDeclineExample = {
  summary: 'PAYOUT_DECLINE example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            hmacSignature: 'b0ea55c2fe60d4d1d605e9c385e0e7...',
            paymentMethodVariant: 'bankTransfer_IBAN',
          },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'PAYOUT_DECLINE',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          originalReference: '9913140798220028',
          paymentMethod: 'bankTransfer_IBAN',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: '',
          success: 'true',
        },
      },
    ],
  },
}

const PostPAYOUTEXPIREPayoutExpireExample = {
  summary: 'PAYOUT_EXPIRE example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'PAYOUT_EXPIRE',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          originalReference: '9913140798220028',
          paymentMethod: 'bankTransfer_IBAN',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: '',
          success: 'true',
        },
      },
    ],
  },
}

const PostPAYOUTTHIRDPARTYPayoutThirdpartyExample = {
  summary: 'PAYOUT_THIRDPARTY example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            expiryDate: '03/2030',
            paymentMethodVariant: 'visa',
            cardSummary: '1111',
            hmacSignature: 'b0ea55c2fe60d4d1d605e9c385e0e7...',
          },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'PAYOUT_THIRDPARTY',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          paymentMethod: 'visa',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: 'Approved',
          success: 'true',
        },
      },
    ],
  },
}

const PostPOSTPONEDREFUNDPostponedRefundExample = {
  summary: 'POSTPONED_REFUND example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: { hmacSignature: 'b0ea55c2fe60d4d1d605e9c385e0e7...' },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'POSTPONED_REFUND',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          originalReference: '9913140798220028',
          paymentMethod: 'directdebit_NL',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: '',
          success: 'true',
        },
      },
    ],
  },
}

const PostPREARBITRATIONLOSTPrearbitrationLostExample = {
  summary: 'PREARBITRATION_LOST example',
  value: {
    live: 'true',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            'metadata.type': 'web_pay',
            'metadata.link_id': '111111',
            arn: 'ACQUIRER_REFERENCE_NUMBER',
            'metadata.company': 'abc',
          },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'PREARBITRATION_LOST',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          paymentMethod: 'visa',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: 'Other Fraud-Card Absent Environment',
          success: 'true',
        },
      },
    ],
  },
}

const PostPREARBITRATIONWONPrearbitrationWonExample = {
  summary: 'PREARBITRATION_WON example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'PREARBITRATION_WON',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          paymentMethod: 'bankTransfer_IBAN',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: '',
          success: 'true',
        },
      },
    ],
  },
}

const PostRECURRINGCONTRACTRecurringContractExample = {
  summary: 'RECURRING_CONTRACT example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            'recurring.shopperReference': 'YOUR_SHOPPER_REFERENCE',
            'recurring.recurringDetailReference': 'M5N7TQ4TG5PFWR50',
            hmacSignature: 'YOUR_HMAC_SIGNATURE',
            shopperReference: 'YOUR_SHOPPER_REFERENCE',
            checkoutSessionId: '******************',
          },
          amount: { currency: 'USD', value: 0 },
          eventCode: 'RECURRING_CONTRACT',
          eventDate: '2023-06-20T16:09:48+02:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_PAYMENT_REFERENCE',
          originalReference: 'INITIAL_PAYMENT_PSP_REFERENCE',
          originalPsp: 'PSP_REFERENCE',
          paymentMethod: 'ideal',
          pspReference: 'M5N7TQ4TG5PFWR50',
          reason: '',
          success: 'true',
        },
      },
    ],
  },
}

const PostREFUNDRefundExample = {
  summary: 'REFUND example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'REFUND',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          originalReference: '9913140798220028',
          paymentMethod: 'visa',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: "Transaction hasn't been captured, refund not possible",
          success: 'false',
        },
      },
    ],
  },
}

const PostREFUNDEDREVERSEDRefundedReversedExample = {
  summary: 'REFUNDED_REVERSED example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'REFUNDED_REVERSED',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          originalReference: '9913140798220028',
          paymentMethod: 'mc',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: 'test_AUTHORISATION_1',
          success: 'true',
        },
      },
    ],
  },
}

const PostREFUNDFAILEDRefundFailedExample = {
  summary: 'REFUND_FAILED example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            hmacSignature: 'b0ea55c2fe60d4d1d605e9c385e0e7...',
            paymentMethodVariant: 'blik',
          },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'REFUND_FAILED',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          originalReference: '9913140798220028',
          paymentMethod: 'blik',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: 'Refund Failed',
          success: 'true',
        },
      },
    ],
  },
}

const PostREFUNDNOTCLEAREDRefundNotClearedExample = {
  summary: 'REFUND_NOT_CLEARED example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            settlementReference: 'OBK5EUCZL6BDL3RW',
            expectedValueDate: '2026-08-20',
          },
          amount: { currency: 'USD', value: 10000 },
          eventCode: 'REFUND_NOT_CLEARED',
          eventDate: '2026-07-20T21:40:59+02:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          originalReference: 'ZTRB7QZPHD4Z8F75',
          paymentMethod: 'visa',
          pspReference: 'VND3Q7F9F3PNXT75',
          reason: '',
          success: 'true',
        },
      },
    ],
  },
}

const PostREFUNDWITHDATARefundWithDataExample = {
  summary: 'REFUND_WITH_DATA example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'REFUND_WITH_DATA',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MODIFICATION_REFERENCE',
          originalReference: '9913140798220028',
          paymentMethod: 'mc',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: '',
          success: 'true',
        },
      },
    ],
  },
}

const PostREPORTAVAILABLEReportAvailableExample = {
  summary: 'REPORT_AVAILABLE example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: { hmacSignature: 'b0ea55c2fe60d4d1d605e9c385e0e7...' },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'REPORT_AVAILABLE',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: '',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: 'URL_TO_DOWNLOAD_REPORT',
          success: 'true',
        },
      },
    ],
  },
}

const PostREQUESTFORINFORMATIONRequestForInformationExample = {
  summary: 'REQUEST_FOR_INFORMATION example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            hmacSignature: 'b0ea55c2fe60d4d1d605e9c385e0e7...',
            modificationMerchantReferences: '9123140123220028',
          },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'REQUEST_FOR_INFORMATION',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          originalReference: '9913140798220028',
          paymentMethod: 'mc',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: '',
          success: 'true',
        },
      },
    ],
  },
}

const PostSECONDCHARGEBACKSecondChargebackExample = {
  summary: 'SECOND_CHARGEBACK example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            chargebackReasonCode: '502',
            modificationMerchantReferences: 'shopperReferenceTest',
            chargebackSchemeCode: 'jcb',
          },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'SECOND_CHARGEBACK',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          paymentMethod: 'jcb',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: '502:Cardmember Dispute',
          success: 'true',
        },
      },
    ],
  },
}

const PostSETTLEDREVERSEDSettledReversedExample = {
  summary: 'SETTLED_REVERSED example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            settlementReference: 'OBK5EUCZL6BDL3RW',
            expectedValueDate: '2026-08-20',
          },
          amount: { currency: 'USD', value: 10000 },
          eventCode: 'SETTLED_REVERSED',
          eventDate: '2026-07-20T21:40:59+02:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          originalReference: 'ZTRB7QZPHD4Z8F75',
          paymentMethod: 'visa',
          pspReference: 'VND3Q7F9F3PNXT75',
          reason: '',
          success: 'true',
        },
      },
    ],
  },
}

const PostTECHNICALCANCELTechnicalCancelExample = {
  summary: 'TECHNICAL_CANCEL example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: { paymentMethodVariant: 'visa' },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'TECHNICAL_CANCEL',
          eventDate: '2018-07-18T22:35:14+02:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_ORIGINAL_REFERENCE',
          originalReference: '8313547924770610',
          paymentMethod: 'visa',
          pspReference: '8515208516304269',
          reason: '',
          success: 'true',
        },
      },
    ],
  },
}

const PostVOIDPENDINGREFUNDVoidPendingRefundExample = {
  summary: 'VOID_PENDING_REFUND example',
  value: {
    live: 'false',
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: { paymentMethodVariant: 'mc' },
          amount: { currency: 'EUR', value: 1000 },
          eventCode: 'VOID_PENDING_REFUND',
          eventDate: '2021-01-01T01:00:00+01:00',
          merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
          merchantReference: 'YOUR_MERCHANT_REFERENCE',
          originalReference: '9913140798220028',
          paymentMethod: 'mc',
          pspReference: 'QFQTPCQ8HXSKGK82',
          reason: '',
          success: 'true',
        },
      },
    ],
  },
}

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const aCHNOTIFICATIONOFCHANGEPostWebhook = {
  method: 'post',
  path: '//ACH_NOTIFICATION_OF_CHANGE',
  tags: ['Other webhooks'],
  summary: 'ACH Notification of Change',
  description:
    'An ACH Notification of Change was processed regarding changed bank account details.',
  operationId: 'post-ACH_NOTIFICATION_OF_CHANGE',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AchNotificationOfChangeNotificationRequestSchema,
          examples: {
            ach_notification_of_change: PostACHNOTIFICATIONOFCHANGEAchNotificationOfChangeExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  deprecated: true,
  security: [{ BasicAuth: [] }],
}

export const aUTHORISATIONPostWebhook = {
  method: 'post',
  path: '//AUTHORISATION',
  tags: ['Standard'],
  summary: 'Result of authorisation request',
  description:
    'The result of the [authorisation request](https://docs.adyen.com/api-explorer/#/Payment/latest/post/authorise).',
  operationId: 'post-AUTHORISATION',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AuthorisationNotificationRequestSchema,
          examples: { authorisation: PostAUTHORISATIONAuthorisationExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const aUTHORISATIONADJUSTMENTPostWebhook = {
  method: 'post',
  path: '//AUTHORISATION_ADJUSTMENT',
  tags: ['Standard'],
  summary: 'Result of payment authorisation adjustment request',
  description:
    'The result of the request to [adjust the authorised amount](https://docs.adyen.com/online-payments/adjust-authorisation) sent through the [/adjustAuthorisation](https://docs.adyen.com/api-explorer/#/Payment/latest/post/adjustAuthorisation) endpoint.',
  operationId: 'post-AUTHORISATION_ADJUSTMENT',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AuthorisationAdjustmentNotificationRequestSchema,
          examples: {
            authorisation_adjustment: PostAUTHORISATIONADJUSTMENTAuthorisationAdjustmentExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const aUTORESCUEPostWebhook = {
  method: 'post',
  path: '//AUTORESCUE',
  tags: ['Additional configuration'],
  summary: 'Auto Rescue process ended',
  description:
    'The [Auto Rescue process](https://docs.adyen.com/online-payments/auto-rescue#rescue-process-ended) ended.',
  operationId: 'post-AUTORESCUE',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AutoRescueNotificationRequestSchema,
          examples: { autorescue: PostAUTORESCUEAutorescueExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const cANCELLATIONPostWebhook = {
  method: 'post',
  path: '//CANCELLATION',
  tags: ['Standard'],
  summary: 'Result of cancel request',
  description:
    'The result of the request to [cancel a payment](https://docs.adyen.com/online-payments/cancel).',
  operationId: 'post-CANCELLATION',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CancellationNotificationRequestSchema,
          examples: { cancellation: PostCANCELLATIONCancellationExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const cANCELAUTORESCUEPostWebhook = {
  method: 'post',
  path: '//CANCEL_AUTORESCUE',
  tags: ['Additional configuration'],
  summary: 'Auto Rescue process canceled',
  description:
    'The [Auto Rescue process](https://docs.adyen.com/online-payments/auto-rescue) was canceled.',
  operationId: 'post-CANCEL_AUTORESCUE',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AutoRescueNotificationRequestSchema,
          examples: { cancel_autorescue: PostCANCELAUTORESCUECancelAutorescueExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const cANCELORREFUNDPostWebhook = {
  method: 'post',
  path: '//CANCEL_OR_REFUND',
  tags: ['Standard'],
  summary: 'Result of cancel or refund request',
  description:
    'The result of the request to [cancel or refund a payment](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/cancel-or-refund).',
  operationId: 'post-CANCEL_OR_REFUND',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CancelOrRefundNotificationRequestSchema,
          examples: { cancel_or_refund: PostCANCELORREFUNDCancelOrRefundExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const cAPTUREPostWebhook = {
  method: 'post',
  path: '//CAPTURE',
  tags: ['Standard'],
  summary: 'Result of capture request',
  description:
    'The result of the request to [capture a payment](https://docs.adyen.com/online-payments/capture).',
  operationId: 'post-CAPTURE',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CaptureNotificationRequestSchema,
          examples: { capture: PostCAPTURECaptureExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const cAPTUREFAILEDPostWebhook = {
  method: 'post',
  path: '//CAPTURE_FAILED',
  tags: ['Standard'],
  summary: 'Capture request failed due to scheme rejection',
  description:
    'The capture request [failed due to rejection by the card scheme](https://docs.adyen.com/online-payments/capture#failed-capture).',
  operationId: 'post-CAPTURE_FAILED',
  request: {
    body: {
      content: {
        'application/json': {
          schema: RefundCaptureFailedNotificationRequestSchema,
          examples: { capture_failed: PostCAPTUREFAILEDCaptureFailedExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const cHARGEBACKPostWebhook = {
  method: 'post',
  path: '//CHARGEBACK',
  tags: ['Dispute'],
  summary: 'Payment charged back',
  description:
    'The payment was [charged back](https://docs.adyen.com/risk-management/disputes-api/dispute-notifications#chargeback), and the funds were deducted from your account.',
  operationId: 'post-CHARGEBACK',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ChargebackNotificationRequestSchema,
          examples: { chargeback: PostCHARGEBACKChargebackExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const cHARGEBACKREVERSEDPostWebhook = {
  method: 'post',
  path: '//CHARGEBACK_REVERSED',
  tags: ['Dispute'],
  summary: 'Chargeback successfully defended',
  description:
    'The chargeback was successfully [defended](https://docs.adyen.com/risk-management/understanding-disputes/defense-requirements) towards the issuing bank. This stage is not final. If the issuing bank presents a second chargeback, you can still lose the chargeback case.',
  operationId: 'post-CHARGEBACK_REVERSED',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ChargebackReversedNotificationRequestSchema,
          examples: { chargeback_reversed: PostCHARGEBACKREVERSEDChargebackReversedExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const dIRECTDEBITNOTICEOFCHANGENOTIFICATIONPostWebhook = {
  method: 'post',
  path: '//DIRECT_DEBIT_NOTICE_OF_CHANGE_NOTIFICATION',
  tags: ['Other webhooks'],
  summary: 'Direct Debit Notice of Change Notification',
  description:
    'A Notice of Change (NOC) was processed for an update to bank account details. This applies to both ACH Direct Debit and EFT PAD transactions.',
  operationId: 'post-DIRECT_DEBIT_NOTICE_OF_CHANGE_NOTIFICATION',
  request: {
    body: {
      content: {
        'application/json': {
          schema: DirectDebitNoticeOfChangeNotificationRequestSchema,
          examples: {
            ach_notice_of_change: PostDIRECTDEBITNOTICEOFCHANGENOTIFICATIONAchNoticeOfChangeExample,
            eft_notice_of_change: PostDIRECTDEBITNOTICEOFCHANGENOTIFICATIONEftNoticeOfChangeExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const dISPUTEDEFENSEPERIODENDEDPostWebhook = {
  method: 'post',
  path: '//DISPUTE_DEFENSE_PERIOD_ENDED',
  tags: ['Dispute'],
  summary: 'Dispute defense period ended',
  description:
    'You have not defended the dispute within the timeframe, or the defense period ended because you accepted liability for the chargeback and will not defend the dispute.',
  operationId: 'post-DISPUTE_DEFENSE_PERIOD_ENDED',
  request: {
    body: {
      content: {
        'application/json': {
          schema: DisputeDefensePeriodEndedNotificationRequestSchema,
          examples: {
            dispute_defense_period_ended:
              PostDISPUTEDEFENSEPERIODENDEDDisputeDefensePeriodEndedExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const eXPIREPostWebhook = {
  method: 'post',
  path: '//EXPIRE',
  tags: ['Standard'],
  summary: 'Authorisation expired',
  description: 'The remaining uncaptured amount expired',
  operationId: 'post-EXPIRE',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ExpireNotificationRequestSchema,
          examples: { expire: PostEXPIREExpireExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const iNFORMATIONSUPPLIEDPostWebhook = {
  method: 'post',
  path: '//INFORMATION_SUPPLIED',
  tags: ['Dispute'],
  summary: 'Defense documents uploaded or dispute auto-defended',
  description:
    'You have successfully uploaded your dispute defense documents, or Adyen has auto-defended the dispute.',
  operationId: 'post-INFORMATION_SUPPLIED',
  request: {
    body: {
      content: {
        'application/json': {
          schema: InformationSuppliedNotificationRequestSchema,
          examples: { information_supplied: PostINFORMATIONSUPPLIEDInformationSuppliedExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const iSSUERCOMMENTSPostWebhook = {
  method: 'post',
  path: '//ISSUER_COMMENTS',
  tags: ['Dispute'],
  summary: 'Issuer included comments',
  description:
    'The issuer included [free-text comments](https://docs.adyen.com/risk-management/disputes-api/dispute-notifications/issuer-comments) with relevant information about the dispute process, such as why the issuer decided to initiate or continue the dispute. You can receive issuer comments for chargebacks and pre-arbitration cases.',
  operationId: 'post-ISSUER_COMMENTS',
  request: {
    body: {
      content: {
        'application/json': {
          schema: IssuerCommentsNotificationRequestSchema,
          examples: { issuer_comments: PostISSUERCOMMENTSIssuerCommentsExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const iSSUERRESPONSETIMEFRAMEEXPIREDPostWebhook = {
  method: 'post',
  path: '//ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
  tags: ['Dispute'],
  summary: 'Issuer accepted defense or did not respond',
  description:
    'The issuer accepted your [defense of the dispute](https://docs.adyen.com/risk-management/manage-disputes/#defending-disputes) or [did not respond in time](https://docs.adyen.com/risk-management/understanding-disputes/dispute-timeframes/).',
  operationId: 'post-ISSUER_RESPONSE_TIMEFRAME_EXPIRED',
  request: {
    body: {
      content: {
        'application/json': {
          schema: IssuerResponseTimeframeExpiredNotificationRequestSchema,
          examples: {
            issuer_response_timeframe_expired:
              PostISSUERRESPONSETIMEFRAMEEXPIREDIssuerResponseTimeframeExpiredExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const mANUALREVIEWACCEPTPostWebhook = {
  method: 'post',
  path: '//MANUAL_REVIEW_ACCEPT',
  tags: ['Additional configuration'],
  summary: 'Manual review accepted',
  description:
    'The [manual review](https://docs.adyen.com/risk-management/case-management) was accepted.',
  operationId: 'post-MANUAL_REVIEW_ACCEPT',
  request: {
    body: {
      content: {
        'application/json': {
          schema: NotificationRequestSchema,
          examples: { manual_review_accept: PostMANUALREVIEWACCEPTManualReviewAcceptExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const mANUALREVIEWREJECTPostWebhook = {
  method: 'post',
  path: '//MANUAL_REVIEW_REJECT',
  tags: ['Additional configuration'],
  summary: 'Manual review rejected',
  description:
    'The [manual review](https://docs.adyen.com/risk-management/case-management) was rejected.',
  operationId: 'post-MANUAL_REVIEW_REJECT',
  request: {
    body: {
      content: {
        'application/json': {
          schema: NotificationRequestSchema,
          examples: { manual_review_reject: PostMANUALREVIEWREJECTManualReviewRejectExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const nOTIFICATIONOFCHARGEBACKPostWebhook = {
  method: 'post',
  path: '//NOTIFICATION_OF_CHARGEBACK',
  tags: ['Dispute'],
  summary: 'Dispute process opened',
  description:
    'The [dispute process](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process) was opened. You should investigate the dispute and [supply the defense documents](https://docs.adyen.com/risk-management/disputes-api#supply-dispute-defense-documents).',
  operationId: 'post-NOTIFICATION_OF_CHARGEBACK',
  request: {
    body: {
      content: {
        'application/json': {
          schema: NotificationOfChargebackNotificationRequestSchema,
          examples: {
            notification_of_chargeback: PostNOTIFICATIONOFCHARGEBACKNotificationOfChargebackExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const nOTIFICATIONOFFRAUDPostWebhook = {
  method: 'post',
  path: '//NOTIFICATION_OF_FRAUD',
  tags: ['Dispute'],
  summary: 'Issuer sent fraud alert notification',
  description:
    'The issuer sent a [fraud alert notification](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process) to schemes and to processors. Visa calls them TC40 and Mastercard calls them System to Avoid Fraud Effectively (SAFE). These are informational notifications from Adyen, providing you the opportunity to take action, such as blocking a shopper or issuing a refund before a chargeback happens.',
  operationId: 'post-NOTIFICATION_OF_FRAUD',
  request: {
    body: {
      content: {
        'application/json': {
          schema: NotificationOfFraudNotificationRequestSchema,
          examples: { notification_of_fraud: PostNOTIFICATIONOFFRAUDNotificationOfFraudExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const oFFERCLOSEDPostWebhook = {
  method: 'post',
  path: '//OFFER_CLOSED',
  tags: ['Additional configuration'],
  summary: 'Offer expired',
  description:
    'The offer expired, for example, because the shopper abandoned the session. For cards, offers expire after 12 hours by default.',
  operationId: 'post-OFFER_CLOSED',
  request: {
    body: {
      content: {
        'application/json': {
          schema: NotificationRequestSchema,
          examples: { offer_closed: PostOFFERCLOSEDOfferClosedExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const oRDERCLOSEDPostWebhook = {
  method: 'post',
  path: '//ORDER_CLOSED',
  tags: ['Standard'],
  summary: 'Result of last partial payment for order',
  description:
    'The result of the last [partial payment](https://docs.adyen.com/online-payments/partial-payments) for the order.',
  operationId: 'post-ORDER_CLOSED',
  request: {
    body: {
      content: {
        'application/json': {
          schema: NotificationRequestSchema,
          examples: { order_closed: PostORDERCLOSEDOrderClosedExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const oRDEROPENEDPostWebhook = {
  method: 'post',
  path: '//ORDER_OPENED',
  tags: ['Standard'],
  summary: 'First partial payment request for order',
  description:
    'The first [partial payment](https://docs.adyen.com/online-payments/partial-payments) was made, and the order was created.',
  operationId: 'post-ORDER_OPENED',
  request: {
    body: {
      content: {
        'application/json': {
          schema: NotificationRequestSchema,
          examples: { order_opened: PostORDEROPENEDOrderOpenedExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const pAIDOUTREVERSEDPostWebhook = {
  method: 'post',
  path: '//PAIDOUT_REVERSED',
  tags: ['Payout (deprecated)'],
  summary: 'Financial institution rejected payout',
  description:
    '> This webhook is **deprecated** and no longer supports new integrations. Do one of the following:\n>- If you are building a new integration, use the [Transfer Webhooks](https://docs.adyen.com/api-explorer/transfer-webhooks/latest/overview) instead.\n> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.\n>\n> With the Transfers API, you can:\n> - Handle multiple payout use cases with a single API.\n> - Use new payout functionalities, such as instant payouts to bank accounts.\n> - Receive webhooks with more details and defined transfer states.\n>\n> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.\n\n\nThe financial institution [rejected the payout](https://docs.adyen.com/online-payments/online-payouts/payout-webhook). We will return the funds back to your account. \nThe reason field contains the bank statement description if present.',
  operationId: 'post-PAIDOUT_REVERSED',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaidoutReversedNotificationRequestSchema,
          examples: { paidout_reversed: PostPAIDOUTREVERSEDPaidoutReversedExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const pAYOUTDECLINEPostWebhook = {
  method: 'post',
  path: '//PAYOUT_DECLINE',
  tags: ['Payout (deprecated)'],
  summary: 'Payout declined',
  description:
    '> This webhook is **deprecated** and no longer supports new integrations. Do one of the following:\n>- If you are building a new integration, use the [Transfer Webhooks](https://docs.adyen.com/api-explorer/transfer-webhooks/latest/overview) instead.\n[Transfer Webhooks](https://docs.adyen.com/api-explorer/transfer-webhooks/latest/overview) instead.\n> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.\n>\n> With the Transfers API, you can:\n> - Handle multiple payout use cases with a single API.\n> - Use new payout functionalities, such as instant payouts to bank accounts.\n> - Receive webhooks with more details and defined transfer states.\n>\n> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.\n\n\nThe [payout was declined](https://docs.adyen.com/online-payments/online-payouts/confirm-or-decline-payout).',
  operationId: 'post-PAYOUT_DECLINE',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PayoutNotificationRequestSchema,
          examples: { payout_decline: PostPAYOUTDECLINEPayoutDeclineExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const pAYOUTEXPIREPostWebhook = {
  method: 'post',
  path: '//PAYOUT_EXPIRE',
  tags: ['Payout (deprecated)'],
  summary: 'Payout expired',
  description:
    '> This webhook is **deprecated** and no longer supports new integrations. Do one of the following:\n>- If you are building a new integration, use the [Transfer Webhooks](https://docs.adyen.com/api-explorer/transfer-webhooks/latest/overview) instead.\n[Transfer Webhooks](https://docs.adyen.com/api-explorer/transfer-webhooks/latest/overview) instead.\n> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.\n>\n> With the Transfers API, you can:\n> - Handle multiple payout use cases with a single API.\n> - Use new payout functionalities, such as instant payouts to bank accounts.\n> - Receive webhooks with more details and defined transfer states.\n>\n> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.\n\n\nThe [payout expired](https://docs.adyen.com/online-payments/online-payouts/payout-webhook/#payouts-to-bank-accounts-or-wallets).',
  operationId: 'post-PAYOUT_EXPIRE',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PayoutNotificationRequestSchema,
          examples: { payout_expire: PostPAYOUTEXPIREPayoutExpireExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const pAYOUTTHIRDPARTYPostWebhook = {
  method: 'post',
  path: '//PAYOUT_THIRDPARTY',
  tags: ['Payout (deprecated)'],
  summary: 'Result of payout request',
  description:
    '> This webhook is **deprecated** and no longer supports new integrations. Do one of the following:\n>- If you are building a new integration, use the [Transfer Webhooks](https://docs.adyen.com/api-explorer/transfer-webhooks/latest/overview) instead.\n[Transfer Webhooks](https://docs.adyen.com/api-explorer/transfer-webhooks/latest/overview) instead.\n> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.\n>\n> With the Transfers API, you can:\n> - Handle multiple payout use cases with a single API.\n> - Use new payout functionalities, such as instant payouts to bank accounts.\n> - Receive webhooks with more details and defined transfer states.\n>\n> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.\n\n\nThe result of the [payout request](https://docs.adyen.com/online-payments/online-payouts).',
  operationId: 'post-PAYOUT_THIRDPARTY',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PayoutNotificationRequestSchema,
          examples: { payout_thirdparty: PostPAYOUTTHIRDPARTYPayoutThirdpartyExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const pOSTPONEDREFUNDPostWebhook = {
  method: 'post',
  path: '//POSTPONED_REFUND',
  tags: ['Additional configuration'],
  summary: 'Refund postponed until after payment capture',
  description:
    'The refund was postponed until after [payment capture](https://docs.adyen.com/online-payments/capture). To enable this notification, contact our [Support Team](https://www.adyen.help/hc/en-us/requests/new).',
  operationId: 'post-POSTPONED_REFUND',
  request: {
    body: {
      content: {
        'application/json': {
          schema: NotificationRequestSchema,
          examples: { postponed_refund: PostPOSTPONEDREFUNDPostponedRefundExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const pREARBITRATIONACCEPTEDPostWebhook = {
  method: 'post',
  path: '//PREARBITRATION_ACCEPTED',
  tags: ['Dispute'],
  summary: 'The pre-arbitration case was accepted',
  description:
    'The [pre-arbitration](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process) case was accepted.',
  operationId: 'post-PREARBITRATION_ACCEPTED',
  request: {
    body: {
      content: { 'application/json': { schema: PrearbitrationAcceptedNotificationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const pREARBITRATIONDECLINEDPostWebhook = {
  method: 'post',
  path: '//PREARBITRATION_DECLINED',
  tags: ['Dispute'],
  summary: 'The pre-arbitration case was declined',
  description:
    'The [pre-arbitration](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process) case was declined.',
  operationId: 'post-PREARBITRATION_DECLINED',
  request: {
    body: {
      content: { 'application/json': { schema: PrearbitrationDeclineNotificationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const pREARBITRATIONISSUERWITHDRAWNPostWebhook = {
  method: 'post',
  path: '//PREARBITRATION_ISSUER_WITHDRAWN',
  tags: ['Dispute'],
  summary: 'The pre-arbitration case was withdrawn by the issuer',
  description:
    'The [pre-arbitration](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process) case was withdrawn by the issuer.',
  operationId: 'post-PREARBITRATION_ISSUER_WITHDRAWN',
  request: {
    body: {
      content: {
        'application/json': { schema: PrearbitrationIssuerWithdrawnNotificationRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const pREARBITRATIONLOSTPostWebhook = {
  method: 'post',
  path: '//PREARBITRATION_LOST',
  tags: ['Dispute'],
  summary: "Cardholder's bank declined pre-arbitration case",
  description:
    "The cardholder's bank declined the [pre-arbitration](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process) case.",
  operationId: 'post-PREARBITRATION_LOST',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PrearbitrationLostNotificationRequestSchema,
          examples: { prearbitration_lost: PostPREARBITRATIONLOSTPrearbitrationLostExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const pREARBITRATIONOPENPostWebhook = {
  method: 'post',
  path: '//PREARBITRATION_OPEN',
  tags: ['Dispute'],
  summary: "Cardholder's bank opened the pre-arbitration case",
  description:
    "The cardholder's bank opened the [pre-arbitration](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process) case.",
  operationId: 'post-PREARBITRATION_OPEN',
  request: {
    body: {
      content: { 'application/json': { schema: PrearbitrationOpenNotificationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const pREARBITRATIONWONPostWebhook = {
  method: 'post',
  path: '//PREARBITRATION_WON',
  tags: ['Dispute'],
  summary: "Cardholder's bank accepted pre-arbitration case",
  description:
    "The cardholder's bank accepted the [pre-arbitration](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process) case.",
  operationId: 'post-PREARBITRATION_WON',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PrearbitrationWonNotificationRequestSchema,
          examples: { prearbitration_won: PostPREARBITRATIONWONPrearbitrationWonExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const rECURRINGCONTRACTPostWebhook = {
  method: 'post',
  path: '//RECURRING_CONTRACT',
  tags: ['Additional configuration'],
  summary: 'Recurring contract created',
  description:
    'A recurring contract has been created. [Enable this webhook](https://docs.adyen.com/development-resources/webhooks/webhook-types#non-default-event-codes) in your Customer Area.',
  operationId: 'post-RECURRING_CONTRACT',
  request: {
    body: {
      content: {
        'application/json': {
          schema: RecurringContractNotificationRequestSchema,
          examples: { recurring_contract: PostRECURRINGCONTRACTRecurringContractExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const rEFUNDPostWebhook = {
  method: 'post',
  path: '//REFUND',
  tags: ['Standard'],
  summary: 'Result of refund request',
  description:
    'The result of the request to [refund a payment](https://docs.adyen.com/online-payments/refund).',
  operationId: 'post-REFUND',
  request: {
    body: {
      content: {
        'application/json': {
          schema: RefundNotificationRequestSchema,
          examples: { refund: PostREFUNDRefundExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const rEFUNDEDREVERSEDPostWebhook = {
  method: 'post',
  path: '//REFUNDED_REVERSED',
  tags: ['Standard'],
  summary: 'Refunded amount reversed',
  description:
    'The refunded amount was [reversed](https://docs.adyen.com/online-payments/refund#refunded-reversed) and returned to your bank account.',
  operationId: 'post-REFUNDED_REVERSED',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ModificationNotificationRequestSchema,
          examples: { refunded_reversed: PostREFUNDEDREVERSEDRefundedReversedExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const rEFUNDFAILEDPostWebhook = {
  method: 'post',
  path: '//REFUND_FAILED',
  tags: ['Standard'],
  summary: 'Refund failed due to scheme rejection',
  description:
    'The refund [failed due to rejection by the card scheme](https://docs.adyen.com/online-payments/refund#refund-failed).',
  operationId: 'post-REFUND_FAILED',
  request: {
    body: {
      content: {
        'application/json': {
          schema: RefundCaptureFailedNotificationRequestSchema,
          examples: { refund_failed: PostREFUNDFAILEDRefundFailedExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const rEFUNDNOTCLEAREDPostWebhook = {
  method: 'post',
  path: '//REFUND_NOT_CLEARED',
  tags: ['Standard'],
  summary: 'Refund failed to clear',
  description:
    "A refund hasn't been settled because the acquirer hasn't processed the refund 30 days after initiation. However, the customer has received the funds. This webhook is available for all payment methods for merchants on Sales Day Payout. [Enable this webhook](https://docs.adyen.com/development-resources/webhooks/webhook-types#non-default-event-codes) in your Customer Area.",
  operationId: 'post-REFUND_NOT_CLEARED',
  request: {
    body: {
      content: {
        'application/json': {
          schema: RefundNotClearedNotificationRequestSchema,
          examples: { refund_not_cleared: PostREFUNDNOTCLEAREDRefundNotClearedExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const rEFUNDWITHDATAPostWebhook = {
  method: 'post',
  path: '//REFUND_WITH_DATA',
  tags: ['Standard'],
  summary: 'Result of refund request with data',
  description:
    'The result of the request to [refund with data](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/refund#unreferenced-refund).',
  operationId: 'post-REFUND_WITH_DATA',
  request: {
    body: {
      content: {
        'application/json': {
          schema: RefundWithDataNotificationRequestSchema,
          examples: { refund_with_data: PostREFUNDWITHDATARefundWithDataExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const rEPORTAVAILABLEPostWebhook = {
  method: 'post',
  path: '//REPORT_AVAILABLE',
  tags: ['Standard'],
  summary: 'Report available',
  description: 'The report is generated and ready to be downloaded.',
  operationId: 'post-REPORT_AVAILABLE',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ReportAvailableNotificationRequestSchema,
          examples: { report_available: PostREPORTAVAILABLEReportAvailableExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const rEQUESTFORINFORMATIONPostWebhook = {
  method: 'post',
  path: '//REQUEST_FOR_INFORMATION',
  tags: ['Dispute'],
  summary: 'Issuer opened Request for Information (RFI)',
  description:
    'The issuer opened a [Request for Information (RFI)](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process). You should [supply defense documents](https://docs.adyen.com/risk-management/disputes-api#supply-dispute-defense-documents) to help shopper understand the charge.',
  operationId: 'post-REQUEST_FOR_INFORMATION',
  request: {
    body: {
      content: {
        'application/json': {
          schema: RequestForInformationNotificationRequestSchema,
          examples: {
            request_for_information: PostREQUESTFORINFORMATIONRequestForInformationExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const rEVERSALPostWebhook = {
  method: 'post',
  path: '//REVERSAL',
  tags: ['Standard'],
  summary: 'Result of reversal request',
  description:
    'The result of a reversal request. The `modification.action` field indicates whether the original payment was cancelled or refunded, or an authorised refund was cancelled.',
  operationId: 'post-REVERSAL',
  request: {
    body: { content: { 'application/json': { schema: ReversalNotificationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const sCHEMEARBITRATIONPostWebhook = {
  method: 'post',
  path: '//SCHEME_ARBITRATION',
  tags: ['Dispute'],
  summary: 'The pre-arbitration case was escalated to scheme arbitration by the issuer',
  description:
    'The [pre-arbitration](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process) case was escalated by the issuer.',
  operationId: 'post-SCHEME_ARBITRATION',
  request: {
    body: {
      content: {
        'application/json': { schema: PrearbitrationSchemeArbitrationNotificationRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const sCHEMEARBITRATIONLOSTPostWebhook = {
  method: 'post',
  path: '//SCHEME_ARBITRATION_LOST',
  tags: ['Dispute'],
  summary: 'The scheme has ruled in favor of the issuer.',
  description:
    'The pre-arbitration case was escalated to [scheme arbitration](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process), and the case was lost. The payment scheme has ruled that you are liable for the dispute.',
  operationId: 'post-SCHEME_ARBITRATION_LOST',
  request: {
    body: {
      content: { 'application/json': { schema: SchemeArbitrationLostNotificationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const sCHEMEARBITRATIONWONPostWebhook = {
  method: 'post',
  path: '//SCHEME_ARBITRATION_WON',
  tags: ['Dispute'],
  summary: 'The scheme has ruled in your favor.',
  description:
    'The pre-arbitration case was escalated to [scheme arbitration](https://docs.adyen.com/risk-management/understanding-disputes/dispute-process-and-flow#dispute-process), and the case was won. The payment scheme has ruled that the issuer is liable for the dispute. The dispute is closed.',
  operationId: 'post-SCHEME_ARBITRATION_WON',
  request: {
    body: {
      content: { 'application/json': { schema: SchemeArbitrationWonNotificationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const sECONDCHARGEBACKPostWebhook = {
  method: 'post',
  path: '//SECOND_CHARGEBACK',
  tags: ['Dispute'],
  summary: 'Issuing bank declined chargeback defense',
  description:
    'The issuing bank declined the material submitted during [defense of the original chargeback](https://docs.adyen.com/risk-management/understanding-disputes/defense-requirements). The disputed amount is deducted from your account.',
  operationId: 'post-SECOND_CHARGEBACK',
  request: {
    body: {
      content: {
        'application/json': {
          schema: SecondChargebackNotificationRequestSchema,
          examples: { second_chargeback: PostSECONDCHARGEBACKSecondChargebackExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const sETTLEDREVERSEDPostWebhook = {
  method: 'post',
  path: '//SETTLED_REVERSED',
  tags: ['Standard'],
  summary: 'Capture settlement reversed',
  description:
    "A debit that reverses a **settled** transaction for which Adyen hasn't received the funds from the card scheme or payment method within 30 days of capture. This webhook is available for all payment methods for merchants on Sales Day Payout. [Enable this webhook](https://docs.adyen.com/development-resources/webhooks/webhook-types#non-default-event-codes) in your Customer Area.",
  operationId: 'post-SETTLED_REVERSED',
  request: {
    body: {
      content: {
        'application/json': {
          schema: SettledReversedNotificationRequestSchema,
          examples: { settled_reversed: PostSETTLEDREVERSEDSettledReversedExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const tECHNICALCANCELPostWebhook = {
  method: 'post',
  path: '//TECHNICAL_CANCEL',
  tags: ['Standard'],
  summary: 'Result of technical cancel request',
  description:
    'The result of the [technical cancel](https://docs.adyen.com/online-payments/cancel#technical-cancel-webhook) request.',
  operationId: 'post-TECHNICAL_CANCEL',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ModificationNotificationRequestSchema,
          examples: { technical_cancel: PostTECHNICALCANCELTechnicalCancelExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}

export const vOIDPENDINGREFUNDPostWebhook = {
  method: 'post',
  path: '//VOID_PENDING_REFUND',
  tags: ['Standard'],
  summary: 'Result of request to cancel POS refund',
  description:
    'The result of the request to [cancel a POS refund](https://docs.adyen.com/point-of-sale/refund-payment/cancel-a-pos-refund-request).',
  operationId: 'post-VOID_PENDING_REFUND',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ModificationNotificationRequestSchema,
          examples: { void_pending_refund: PostVOIDPENDINGREFUNDVoidPendingRefundExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}
