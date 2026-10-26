import { createRoute, z } from '@hono/zod-openapi'

const EntryModeSchema = z
  .array(
    z.enum([
      'RFID',
      'Keyed',
      'Manual',
      'File',
      'Scanned',
      'MagStripe',
      'ICC',
      'SynchronousICC',
      'Tapped',
      'Contactless',
      'Mobile',
    ]),
  )
  .openapi('EntryMode')

const TrackFormatSchema = z
  .enum(['ISO', 'JIS-I', 'JIS-II', 'AAMVA', 'CMC-7', 'E-13B'])
  .openapi({
    description:
      'Magnetic track or magnetic ink characters line.\nPossible values:\n* **ISO**\n* **JIS-I**\n* **JIS-II**\n* **AAMVA**\n* **CMC-7**\n* **E-13B**',
  })
  .openapi('TrackFormat')

const TrackDataSchema = z
  .object({
    TrackNumb: z
      .int()
      .min(1)
      .max(3)
      .default(2)
      .exactOptional()
      .openapi({ description: 'Card track number.', 'x-nexo-kind': 'integer' }),
    TrackFormat: TrackFormatSchema.exactOptional().openapi({
      description: 'Card track format.\nPossible values:\n* **AAMVA**\n* **ISO**',
      'x-nexo-default': 'ISO',
    }),
    TrackValue: z
      .string()
      .regex(/^.{1,104}$/)
      .openapi({ description: 'Card track content.', 'x-nexo-min': 1, 'x-nexo-max': 104 }),
  })
  .openapi({
    description:
      'Magnetic track or magnetic ink characters line.\nISO 7813 - ISO 4909.\nGeneric data structure for a card track, used when the magstripe card reader is located on the Sale Terminal, or for magstripe Card Reader device request. The data structure is also used to store the line at the bottom of a bank check.',
    required: ['TrackValue'],
  })
  .openapi('TrackData')

const SensitiveCardDataSchema = z
  .object({
    PAN: z
      .int()
      .min(8)
      .max(28)
      .exactOptional()
      .openapi({ description: 'Primary Account Number.', 'x-nexo-kind': 'digitstring' }),
    CardSeqNumb: z
      .int()
      .min(2)
      .max(3)
      .exactOptional()
      .openapi({
        description: 'Card Sequence Number.\nIf EntryMode is File, Keyed, or Manual.',
        'x-nexo-kind': 'digitstring',
      }),
    ExpiryDate: z
      .int()
      .min(4)
      .max(4)
      .exactOptional()
      .openapi({
        description: 'Date after which the card cannot be used.\nIf EntryMode is File.',
        'x-nexo-kind': 'digitstring',
      }),
    TrackData: z
      .array(TrackDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Magnetic track or magnetic ink characters line.\nIf EntryMode is MagStripe or RFID .',
        'x-nexo-list-min': 0,
        'x-nexo-list-max': 3,
      }),
  })
  .openapi({
    description:
      'This data structure could be CMS protected (EnvelopedData). In this case the data structure SensitiveCardData is replaced by the data structure ProtectedCardData of type ContentInformationType.\nWhen this data is protected, the exact content is unknown by the Sale System, and might include\nall the information which are required by an external backup POI Server to make a batch payment\ntransaction in case of problem with the POI System.\nSensitive information related to the payment card, entered or read\nby the Sale System.',
    required: [],
  })
  .openapi('SensitiveCardData')

const TokenRequestedTypeSchema = z
  .enum(['Transaction', 'Customer'])
  .openapi({
    description:
      'Type of token replacing the PAN of a payment card to identify the payment mean of the customer. It allows, for a merchant, to use a token for a transaction only or for a longer period.\nPossible values:\n* **Transaction**\n* **Customer**',
  })
  .openapi('TokenRequestedType')

const PaymentTokenSchema = z
  .object({
    TokenRequestedType: TokenRequestedTypeSchema.openapi({
      description:
        'Type of token replacing the PAN of a payment card to identify the payment\n mean of the customer. It allows, for a merchant, to use a token for a transaction\n only or for a longer period.\nPossible values:\n* **Customer**\n* **Transaction**',
    }),
    TokenValue: z
      .string()
      .regex(/^.+$/)
      .openapi({
        description:
          'Payment token replacing the PAN of the payment card to identify the payment\n mean of the customer.',
      }),
    ExpiryDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Expiry date and time. Limits the validity of a payment token.' }),
  })
  .openapi({
    description:
      'Surrogate of the PAN (Primary Account Number) of the payment card to\n identify the payment mean of the customer. It allows, for a merchant, to identify\n the customer.',
    required: ['TokenRequestedType', 'TokenValue'],
  })
  .openapi('PaymentToken')

type CardDataType = {
  PaymentBrand?: string
  MaskedPan?: string
  PaymentAccountRef?: string
  EntryMode?: z.infer<typeof EntryModeSchema>
  CardCountryCode?: number
  ProtectedCardData?: string
  SensitiveCardData?: z.infer<typeof SensitiveCardDataSchema>
  PaymentToken?: z.infer<typeof PaymentTokenSchema>
}

const GeographicCoordinatesSchema = z
  .object({
    Latitude: z
      .string()
      .regex(/^.+$/)
      .openapi({
        description: 'Angular distance of a location on the earth south or north of the equator.',
      }),
    Longitude: z
      .string()
      .regex(/^.+$/)
      .openapi({
        description:
          'Angular measurement of the distance of a location on the earth east or west of the Greenwich observatory.',
      }),
  })
  .openapi({ required: ['Latitude', 'Longitude'] })
  .openapi('GeographicCoordinates')

const UTMCoordinatesSchema = z
  .object({
    UTMZone: z
      .string()
      .regex(/^.+$/)
      .openapi({
        description:
          'UTM grid zone combination of the longitude zone (1 to 60) and the latitude band (C to X, excluding I and O).',
      }),
    UTMEastward: z
      .string()
      .regex(/^.+$/)
      .openapi({
        description: 'X-coordinate of the Universal Transverse Mercator coordinate system.',
      }),
    UTMNorthward: z
      .string()
      .regex(/^.+$/)
      .openapi({
        description: 'Y-coordinate of the Universal Transverse Mercator coordinate system.',
      }),
  })
  .openapi({ required: ['UTMZone', 'UTMEastward', 'UTMNorthward'] })
  .openapi('UTMCoordinates')

const GeolocationSchema = z
  .object({
    GeographicCoordinates: GeographicCoordinatesSchema.exactOptional(),
    UTMCoordinates: UTMCoordinatesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Geolocation')

const SensitiveMobileDataSchema = z
  .object({
    MSISDN: z
      .int()
      .openapi({
        description:
          'Mobile Subscriber Integrated Service Digital Network (i.e. mobile phone number of the SIM card). Country, National Destination Code, and Subscriber Number.',
        'x-nexo-kind': 'digitstring',
      }),
    IMSI: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'International Mobile Subscriber Identity. Unique number associated with the mobile phone user, containing the Mobile Country Code (MCC), the Mobile Network Code (MNC), and the Mobile Identification Number (MSIN)',
        'x-nexo-kind': 'digitstring',
      }),
    IMEI: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'International Mobile Equipment Identity. Unique number associated with the mobile phone device.',
        'x-nexo-kind': 'digitstring',
      }),
  })
  .openapi({ required: ['MSISDN'] })
  .openapi('SensitiveMobileData')

type MobileDataType = {
  MobileCountryCode?: number
  MobileNetworkCode?: number
  MaskedMSISDN?: number
  Geolocation?: z.infer<typeof GeolocationSchema>
  ProtectedMobileData?: string
  SensitiveMobileData?: z.infer<typeof SensitiveMobileDataSchema>
}

const SaleCapabilitiesSchema = z
  .array(
    z.enum([
      'CashierStatus',
      'CashierError',
      'CashierDisplay',
      'POIReplication',
      'CashierInput',
      'CustomerAssistance',
      'CustomerDisplay',
      'CustomerError',
      'CustomerInput',
      'PrinterReceipt',
      'PrinterDocument',
      'PrinterVoucher',
      'MagStripe',
      'ICC',
      'EMVContactless',
    ]),
  )
  .openapi({
    description:
      'place holder!\nPossible values:\n* **CashierDisplay**\n* **CashierError**\n* **CashierInput**\n* **CashierStatus**\n* **CustomerAssistance**\n* **CustomerDisplay**\n* **CustomerError**\n* **CustomerInput**\n* **EMVContactless**\n* **ICC**\n* **MagStripe**\n* **POIReplication**\n* **PrinterDocument**\n* **PrinterReceipt**\n* **PrinterVoucher**',
  })
  .openapi('SaleCapabilities')

const CustomerOrderReqSchema = z
  .array(z.enum(['Open', 'Closed', 'Both']))
  .openapi({
    description:
      'List of customer order open, closed or both to be sent in the response messages.\nPossible values:\n* **Both**\n* **Closed**\n* **Open**',
  })
  .openapi('CustomerOrderReq')

const ResultSchema = z
  .enum(['Success', 'Failure', 'Partial'])
  .openapi({ description: '\nPossible values:\n* **Success**\n* **Failure**\n* **Partial**' })
  .openapi('Result')

const ErrorConditionSchema = z
  .enum([
    'Aborted',
    'Busy',
    'Cancel',
    'DeviceOut',
    'InsertedCard',
    'InProgress',
    'LoggedOut',
    'MessageFormat',
    'NotAllowed',
    'NotFound',
    'PaymentRestriction',
    'Refusal',
    'UnavailableDevice',
    'UnavailableService',
    'InvalidCard',
    'UnreachableHost',
    'WrongPIN',
  ])
  .openapi({
    description:
      '\nPossible values:\n* **Aborted**\n* **Busy**\n* **Cancel**\n* **DeviceOut**\n* **InsertedCard**\n* **InProgress**\n* **LoggedOut**\n* **MessageFormat**\n* **NotAllowed**\n* **NotFound**\n* **PaymentRestriction**\n* **Refusal**\n* **UnavailableDevice**\n* **UnavailableService**\n* **InvalidCard**\n* **UnreachableHost**\n* **WrongPIN**',
  })
  .openapi('ErrorCondition')

const GlobalStatusSchema = z
  .enum(['OK', 'Busy', 'Maintenance', 'Unreachable'])
  .openapi({
    description: '\nPossible values:\n* **OK**\n* **Busy**\n* **Maintenance**\n* **Unreachable**',
  })
  .openapi('GlobalStatus')

const PrinterStatusSchema = z
  .enum(['OK', 'PaperLow', 'NoPaper', 'PaperJam', 'OutOfOrder'])
  .openapi({
    description:
      'Indicates if the printer is working and usable.\nPossible values:\n* **OK**\n* **PaperLow**\n* **NoPaper**\n* **PaperJam**\n* **OutOfOrder**',
  })
  .openapi('PrinterStatus')

const DeviceSchema = z
  .enum(['CashierDisplay', 'CustomerDisplay', 'CashierInput', 'CustomerInput'])
  .openapi({
    description:
      '\nPossible values:\n* **CashierDisplay**\n* **CustomerDisplay**\n* **CashierInput**\n* **CustomerInput**',
  })
  .openapi('Device')

const InfoQualifySchema = z
  .enum([
    'Status',
    'Error',
    'Display',
    'Sound',
    'Input',
    'POIReplication',
    'CustomerAssistance',
    'Receipt',
    'Document',
    'Voucher',
  ])
  .openapi({
    description:
      '\nPossible values:\n* **Status**\n* **Error**\n* **Display**\n* **Sound**\n* **Input**\n* **POIReplication**\n* **CustomerAssistance**\n* **Receipt**\n* **Document**\n* **Voucher**',
  })
  .openapi('InfoQualify')

const OutputFormatSchema = z
  .enum(['MessageRef', 'Text', 'XHTML', 'BarCode'])
  .openapi({
    description:
      'Format of the content to display or print. Display or print device function.\nPossible values:\n* **MessageRef**\n* **Text**\n* **XHTML**\n* **BarCode**',
  })
  .openapi('OutputFormat')

const CharacterWidthSchema = z
  .enum(['SingleWidth', 'DoubleWidth'])
  .openapi({ description: '\nPossible values:\n* **SingleWidth**\n* **DoubleWidth**' })
  .openapi('CharacterWidth')

const CharacterHeightSchema = z
  .enum(['SingleHeight', 'DoubleHeight', 'HalfHeight'])
  .openapi({
    description: '\nPossible values:\n* **SingleHeight**\n* **DoubleHeight**\n* **HalfHeight**',
  })
  .openapi('CharacterHeight')

const CharacterStyleSchema = z
  .enum(['Normal', 'Bold', 'Italic', 'Underline'])
  .openapi({
    description: '\nPossible values:\n* **Normal**\n* **Bold**\n* **Italic**\n* **Underline**',
  })
  .openapi('CharacterStyle')

const AlignmentSchema = z
  .enum(['Left', 'Right', 'Centred', 'Justified'])
  .openapi({
    description: '\nPossible values:\n* **Left**\n* **Right**\n* **Centred**\n* **Justified**',
  })
  .openapi('Alignment')

const MenuEntryTagSchema = z
  .enum(['Selectable', 'NonSelectable', 'SubMenu', 'NonSelectableSubMenu'])
  .openapi({
    description:
      'Characteristics related to the selection of a menu entry.\nPossible values:\n* **Selectable**\n* **NonSelectable**\n* **SubMenu**\n* **NonSelectableSubMenu**',
  })
  .openapi('MenuEntryTag')

const TransactionActionSchema = z
  .enum(['StartTransaction', 'AbortTransaction'])
  .openapi({
    description:
      'Action to realise on a transaction. In an `EnableService` request message:\n  - Starts a transaction by a swipe-ahead mechanism, with the services which are enabled.\n  - Aborts a swipe-ahead transaction or started by a `CardAcquisition`, and not followed by a service request from the Sale System to complete the transaction.\nPossible values:\n* **StartTransaction**\n* **AbortTransaction**',
  })
  .openapi('TransactionAction')

const ServicesEnabledSchema = z
  .array(z.enum(['CardAcquisition', 'Payment', 'Loyalty']))
  .openapi({
    description:
      'Services which are enabled before the start-up of a transaction.\nMandatory if `TransactionAction` is `StartTransaction`, absent if not.\nPossible values:\n* **CardAcquisition**\n* **Loyalty**\n* **Payment**',
  })
  .openapi('ServicesEnabled')

const PaymentTypeSchema = z
  .enum([
    'Normal',
    'Refund',
    'OneTimeReservation',
    'FirstReservation',
    'UpdateReservation',
    'Completion',
    'CashAdvance',
    'CashDeposit',
    'Recurring',
    'Instalment',
    'IssuerInstalment',
    'PaidOut',
  ])
  .openapi({
    description:
      '\nPossible values:\n* **Normal**\n* **Refund**\n* **OneTimeReservation**\n* **FirstReservation**\n* **UpdateReservation**\n* **Completion**\n* **CashAdvance**\n* **CashDeposit**\n* **Recurring**\n* **Instalment**\n* **IssuerInstalment**\n* **PaidOut**',
  })
  .openapi('PaymentType')

const PaymentInstrumentTypeSchema = z
  .enum(['Card', 'Check', 'Mobile', 'StoredValue', 'Cash'])
  .openapi({
    description:
      '\nPossible values:\n* **Card**\n* **Check**\n* **Mobile**\n* **StoredValue**\n* **Cash**',
  })
  .openapi('PaymentInstrumentType')

const TypeCodeSchema = z
  .enum(['Personal', 'Company'])
  .openapi({ description: '\nPossible values:\n* **Personal**\n* **Company**' })
  .openapi('TypeCode')

const StoredValueAccountTypeSchema = z
  .enum(['GiftCard', 'PhoneCard', 'Other'])
  .openapi({ description: '\nPossible values:\n* **GiftCard**\n* **PhoneCard**\n* **Other**' })
  .openapi('StoredValueAccountType')

const IdentificationTypeSchema = z
  .enum(['PAN', 'ISOTrack2', 'BarCode', 'AccountNumber', 'PhoneNumber'])
  .openapi({
    description:
      '\nPossible values:\n* **PAN**\n* **ISOTrack2**\n* **BarCode**\n* **AccountNumber**\n* **PhoneNumber**',
  })
  .openapi('IdentificationType')

const IdentificationSupportSchema = z
  .enum(['NoCard', 'LoyaltyCard', 'HybridCard', 'LinkedCard'])
  .openapi({
    description:
      'Support of the loyalty account identification. Allows knowing where and how you have found the loyalty account identification.\nPossible values:\n* **NoCard**\n* **LoyaltyCard**\n* **HybridCard**\n* **LinkedCard**',
  })
  .openapi('IdentificationSupport')

const InstalmentTypeSchema = z
  .enum(['DeferredInstalments', 'EqualInstalments', 'InequalInstalments'])
  .openapi({
    description:
      'Type of instalment transaction. For requesting an instalment payment transaction.\nPossible values:\n* **DeferredInstalments**\n* **EqualInstalments**\n* **InequalInstalments**',
  })
  .openapi('InstalmentType')

const PeriodUnitSchema = z
  .enum(['Daily', 'Weekly', 'Monthly', 'Annual'])
  .openapi({
    description:
      'Type of instalment transaction.\nPossible values:\n* **Daily**\n* **Weekly**\n* **Monthly**\n* **Annual**',
  })
  .openapi('PeriodUnit')

const LoyaltyHandlingSchema = z
  .enum(['Forbidden', 'Processed', 'Allowed', 'Proposed', 'Required'])
  .openapi({
    description:
      '\nPossible values:\n* **Forbidden**\n* **Processed**\n* **Allowed**\n* **Proposed**\n* **Required**',
  })
  .openapi('LoyaltyHandling')

const ForceEntryModeSchema = z
  .array(
    z.enum([
      'RFID',
      'Keyed',
      'Manual',
      'File',
      'Scanned',
      'MagStripe',
      'ICC',
      'SynchronousICC',
      'Tapped',
      'Contactless',
      'CheckReader',
    ]),
  )
  .openapi('ForceEntryMode')

const DocumentQualifierSchema = z
  .enum(['SaleReceipt', 'CashierReceipt', 'CustomerReceipt', 'Document', 'Voucher', 'Journal'])
  .openapi({
    description:
      '\nPossible values:\n* **SaleReceipt**\n* **CashierReceipt**\n* **CustomerReceipt**\n* **Document**\n* **Voucher**\n* **Journal**',
  })
  .openapi('DocumentQualifier')

const AuthenticationMethodSchema = z
  .array(
    z.enum([
      'Bypass',
      'ManualVerification',
      'MerchantAuthentication',
      'OfflinePIN',
      'OnlinePIN',
      'PaperSignature',
      'SecuredChannel',
      'SecureCertificate',
      'SecureNoCertificate',
      'SignatureCapture',
      'UnknownMethod',
    ]),
  )
  .openapi({
    description:
      'Method for customer authentication. Allows the Sale System informed about customer authentication for the payment transaction.\nPossible values:\n* **Bypass**\n* **ManualVerification**\n* **MerchantAuthentication**\n* **OfflinePIN**\n* **OnlinePIN**\n* **PaperSignature**\n* **SecureCertificate**\n* **SecureNoCertificate**\n* **SecuredChannel**\n* **SignatureCapture**\n* **UnknownMethod**',
  })
  .openapi('AuthenticationMethod')

const StoredValueTransactionTypeSchema = z
  .enum(['Reserve', 'Activate', 'Load', 'Unload', 'Reverse', 'Duplicate'])
  .openapi({
    description:
      '\nPossible values:\n* **Reserve**\n* **Activate**\n* **Load**\n* **Unload**\n* **Reverse**\n* **Duplicate**',
  })
  .openapi('StoredValueTransactionType')

const ReversalReasonSchema = z
  .enum(['CustCancel', 'MerchantCancel', 'Malfunction', 'Unable2Compl'])
  .openapi({
    description:
      'Reason of the payment or loyalty reversal.\nPossible values:\n* **CustCancel**\n* **MerchantCancel**\n* **Malfunction**\n* **Unable2Compl**',
  })
  .openapi('ReversalReason')

const ReconciliationTypeSchema = z
  .enum([
    'SaleReconciliation',
    'AcquirerSynchronisation',
    'AcquirerReconciliation',
    'PreviousReconciliation',
  ])
  .openapi({
    description:
      '\nPossible values:\n* **SaleReconciliation**\n* **AcquirerSynchronisation**\n* **AcquirerReconciliation**\n* **PreviousReconciliation**',
  })
  .openapi('ReconciliationType')

const TransactionTypeSchema = z
  .enum([
    'Debit',
    'Credit',
    'ReverseDebit',
    'ReverseCredit',
    'OneTimeReservation',
    'CompletedDeffered',
    'FirstReservation',
    'UpdateReservation',
    'CompletedReservation',
    'CashAdvance',
    'IssuerInstalment',
    'Declined',
    'Failed',
    'Award',
    'ReverseAward',
    'Redemption',
    'ReverseRedemption',
    'Rebate',
    'ReverseRebate',
  ])
  .openapi({
    description:
      '\nPossible values:\n* **Debit**\n* **Credit**\n* **ReverseDebit**\n* **ReverseCredit**\n* **OneTimeReservation**\n* **CompletedDeffered**\n* **FirstReservation**\n* **UpdateReservation**\n* **CompletedReservation**\n* **CashAdvance**\n* **IssuerInstalment**\n* **Declined**\n* **Failed**\n* **Award**\n* **ReverseAward**\n* **Redemption**\n* **ReverseRedemption**\n* **Rebate**\n* **ReverseRebate**',
  })
  .openapi('TransactionType')

const TotalDetailsSchema = z
  .array(z.enum(['POIID', 'SaleID', 'OperatorID', 'ShiftNumber', 'TotalsGroupID']))
  .openapi({
    description:
      'Indicates the hierarchical structure of the reconciliation result of the Sale to POI reconciliation.\nRequired to present totals per value of element included in this cluster (POI Terminal, Sale Terminal, Cashier, Shift, TotalsGroupID).\nPossible values:\n* **OperatorID**\n* **POIID**\n* **SaleID**\n* **ShiftNumber**\n* **TotalsGroupID**',
  })
  .openapi('TotalDetails')

const AccountTypeSchema = z
  .enum([
    'Default',
    'Savings',
    'Checking',
    'CreditCard',
    'Universal',
    'Investment',
    'CardTotals',
    'EpurseCard',
  ])
  .openapi({
    description:
      'Type of cardholder account used for the transaction. Allows a cardholder to select the type of account used for the transaction.\nPossible values:\n* **Default**\n* **Savings**\n* **Checking**\n* **CreditCard**\n* **Universal**\n* **Investment**\n* **CardTotals**\n* **EpurseCard**',
  })
  .openapi('AccountType')

const MessageCategorySchema = z
  .enum([
    'Abort',
    'Admin',
    'BalanceInquiry',
    'CardAcquisition',
    'Diagnosis',
    'Display',
    'EnableService',
    'Event',
    'GetTotals',
    'Input',
    'InputUpdate',
    'Login',
    'Logout',
    'Loyalty',
    'Payment',
    'Print',
    'Reconciliation',
    'Reversal',
    'StoredValue',
    'TransactionStatus',
    'None',
  ])
  .openapi({
    description:
      '\nPossible values:\n* **Abort**\n* **Admin**\n* **BalanceInquiry**\n* **CardAcquisition**\n* **Diagnosis**\n* **Display**\n* **EnableService**\n* **Event**\n* **GetTotals**\n* **Input**\n* **InputUpdate**\n* **Login**\n* **Logout**\n* **Loyalty**\n* **Payment**\n* **Print**\n* **Reconciliation**\n* **Reversal**\n* **StoredValue**\n* **TransactionStatus**\n* **None**',
  })
  .openapi('MessageCategory')

const MessageTypeSchema = z
  .enum(['Request', 'Response', 'Notification'])
  .openapi({ description: '\nPossible values:\n* **Request**\n* **Response**\n* **Notification**' })
  .openapi('MessageType')

const MessageClassSchema = z
  .enum(['Service', 'Device', 'Event'])
  .openapi({ description: '\nPossible values:\n* **Service**\n* **Device**\n* **Event**' })
  .openapi('MessageClass')

const EventToNotifySchema = z
  .enum([
    'BeginMaintenance',
    'EndMaintenance',
    'Shutdown',
    'Initialised',
    'OutOfOrder',
    'Completed',
    'Abort',
    'SaleWakeUp',
    'SaleAdmin',
    'CustomerLanguage',
    'KeyPressed',
    'SecurityAlarm',
    'StopAssistance',
    'CardInserted',
    'CardRemoved',
    'Reject',
    'UseAnotherCardForPreauth',
    'ScanBarcodeResult',
  ])
  .openapi({
    description:
      'Event the POI notifies to the Sale System.\nPossible values:\n* **BeginMaintenance**\n* **EndMaintenance**\n* **Shutdown**\n* **Initialised**\n* **OutOfOrder**\n* **Completed**\n* **Abort**\n* **SaleWakeUp**\n* **SaleAdmin**\n* **CustomerLanguage**\n* **KeyPressed**\n* **SecurityAlarm**\n* **StopAssistance**\n* **CardInserted**\n* **CardRemoved**\n* **Reject**\n* **UseAnotherCardForPreauth**\n* **ScanBarcodeResult**',
  })
  .openapi('EventToNotify')

const InputCommandSchema = z
  .enum([
    'GetAnyKey',
    'GetConfirmation',
    'SiteManager',
    'TextString',
    'DigitString',
    'DecimalString',
    'GetFunctionKey',
    'GetMenuEntry',
    'Password',
  ])
  .openapi({
    description:
      '\nPossible values:\n* **GetAnyKey**\n* **GetConfirmation**\n* **SiteManager**\n* **TextString**\n* **DigitString**\n* **DecimalString**\n* **GetFunctionKey**\n* **GetMenuEntry**\n* **Password**',
  })
  .openapi('InputCommand')

const ResponseModeSchema = z
  .enum(['NotRequired', 'Immediate', 'PrintEnd', 'SoundEnd'])
  .openapi({
    description:
      '\nPossible values:\n* **NotRequired**\n* **Immediate**\n* **PrintEnd**\n* **SoundEnd**',
  })
  .openapi('ResponseMode')

const SoundFormatSchema = z
  .enum(['SoundRef', 'MessageRef', 'Text'])
  .openapi({ description: '\nPossible values:\n* **SoundRef**\n* **MessageRef**\n* **Text**' })
  .openapi('SoundFormat')

const SoundActionSchema = z
  .enum(['StartSound', 'StopSound', 'SetDefaultVolume'])
  .openapi({
    description: '\nPossible values:\n* **StartSound**\n* **StopSound**\n* **SetDefaultVolume**',
  })
  .openapi('SoundAction')

const PINFormatSchema = z.enum(['ISO0', 'ISO1', 'ISO2', 'ISO3']).openapi('PINFormat')

const PINRequestTypeSchema = z
  .enum(['PINVerify', 'PINVerifyOnly', 'PINEnter'])
  .openapi({
    description:
      'Type of PIN Service.\nPossible values:\n* **PINVerify**\n* **PINVerifyOnly**\n* **PINEnter**',
  })
  .openapi('PINRequestType')

const SaleToIssuerDataSchema = z
  .object({
    StatementReference: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({ description: 'Label to print on the bank statement.' }),
  })
  .openapi({
    description:
      'Sale information intended for the Issuer.\nThe POI System receives this information and sends it to the Acquirer for the Issuer without any change.',
    required: [],
  })
  .openapi('SaleToIssuerData')

const CardDataSchema: z.ZodType<CardDataType> = z
  .lazy(() =>
    z
      .object({
        PaymentBrand: z
          .string()
          .regex(/^.+$/)
          .exactOptional()
          .openapi({
            description:
              'Type of payment card.\nIf card PAN is readable.\nIndicates the card used to pay in the PaymentResponse. Sent in the CardAcquisitionResponse, to leave the Cashier to choose between several applications in a smartcard, or several brand in a co-branded card. In this case, the CardAcquisitionRequest.ForceCustomerSelectionFlag must contain the value False. Brands are part of the POI and Sale Systems configurations.',
          }),
        MaskedPan: z
          .string()
          .regex(/^.+$/)
          .exactOptional()
          .openapi({
            description:
              'Masked Primary Account Number\nPart of the PAN is replaced by a string of * characters, to identify a customer account or relationship. Presence of this data element, which replace the PAN when SensitiveCardData is protected and replaced by ProtectedCardData. Alternatively the MaskedPAN can be used as a token to identify a customer.',
          }),
        PaymentAccountRef: z
          .string()
          .regex(/^.+$/)
          .exactOptional()
          .openapi({
            description:
              'Reference of the PAN, which identifies the PAN or the card uniquely, named also PAR (Payment Account Reference). This reference may be defined by the card issuer or by a token service provider under the control of the card issuer, and cannot be used for a payment transaction.',
          }),
        EntryMode: EntryModeSchema.exactOptional().openapi({
          description:
            'Entry mode of the payment instrument information. In the Payment, Loyalty or StoredValue Request messages, it informs the POI System the entry mode of the payment instrument information when read by the Sale Terminal. In the Payment, Loyalty or StoredValue Response messages, it informs the Sale System the entry mode of the payment instrument.\nPossible values:\n* **Contactless**\n* **File**\n* **ICC**\n* **Keyed**\n* **MagStripe**\n* **Manual**\n* **Mobile**\n* **RFID**\n* **Scanned**\n* **SynchronousICC**\n* **Tapped**',
        }),
        CardCountryCode: z
          .int()
          .min(3)
          .max(3)
          .exactOptional()
          .openapi({
            description:
              'Country Code attached to the card (3 numerics).\nIf available in the card.',
            'x-nexo-kind': 'digitstring',
          }),
        ProtectedCardData: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Sensitive information related to the payment card, protected by CMS.\nSensitiveCardData protected by CMS EnvelopedData.',
            'x-nexo-kind': 'contentinformation',
          }),
        SensitiveCardData: SensitiveCardDataSchema.exactOptional().openapi({
          description:
            'Sensitive information related to the payment card, entered or read by the Sale System.\nIf structure non empty and unprotected.',
        }),
        PaymentToken: PaymentTokenSchema.exactOptional().openapi({
          description:
            'Surrogate of the PAN (Primary Account Number) of the payment card to identify the payment mean of the customer. It allows, for a merchant, to identify the customer.\nRestriction of product payable by a card.',
        }),
      })
      .openapi({
        description:
          'Information related to the payment card used for the transaction.\nAllows acquisition of the card data by the Sale System before the Payment, CardAcquisition, or BalanceInquiry request to the POI. It can also be sent in the CardAcquisition response, to be processed by the Sale System.',
        required: [],
      }),
  )
  .openapi('CardData')

const TransactionIDTypeSchema = z
  .object({
    TransactionID: z
      .string()
      .regex(/^.+$/)
      .openapi({
        description:
          'Unique identification of a transaction to identify the transaction on\nthe Sale System (e.g. ticket number), or the POI System.',
      }),
    TimeStamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'Date and time of a transaction for the Sale System, the POI System or the Acquirer.\n Ensures the uniqueness of a transaction and indicates the time when the event\n occurs in the EventNotification message.',
      }),
  })
  .openapi({
    description: 'Identification of a transaction for the Sale System or the POI System.',
    required: ['TransactionID', 'TimeStamp'],
  })
  .openapi('TransactionIDType')

const SaleTerminalDataSchema = z
  .object({
    TotalsGroupID: z
      .string()
      .regex(/^.{1,16}$/)
      .exactOptional()
      .openapi({
        description:
          'Identification of a group of transactions on a POI Terminal, having the same Sale features.\nCould be used to group POI for reconciliation or other purpose defined by the Sale System. The default value is assigned by the Login Request.',
        'x-nexo-min': 1,
        'x-nexo-max': 16,
      }),
  })
  .openapi({
    description:
      'Information related to the software and hardware features of the Sale Terminal.\nSent in the Login Request if a Sale Terminal is involved in the login. In other messages, sent when a logical device is out of order (SaleCapabilities) or when other data have changed or were missing in the Login.',
    required: [],
  })
  .openapi('SaleTerminalData')

const SaleDataSchema = z
  .object({
    OperatorID: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({ description: 'Identification of the Cashier or Operator.' }),
    OperatorLanguage: z
      .string()
      .regex(/^[a-z]{2,2}$/)
      .exactOptional()
      .openapi({
        description: 'Language of the Cashier or Operator.\nIf different from the Login.',
      }),
    ShiftNumber: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({ description: 'Shift number.\nIf different from the Login, see Login SaleData.' }),
    SaleTransactionID: TransactionIDTypeSchema.openapi({
      description: 'Identification of a Sale transaction.',
    }),
    SaleReferenceID: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Identification of a Sale global transaction for a sequence of related POI transactions.\nIf payment reservation.',
      }),
    SaleTerminalData: SaleTerminalDataSchema.exactOptional().openapi({
      description:
        'Information related to the software and hardware features of the Sale Terminal.\nIf content is not empty.',
    }),
    TokenRequestedType: TokenRequestedTypeSchema.exactOptional().openapi({
      description:
        'Type of token replacing the PAN of a payment card to identify the payment\n mean of the customer. It allows, for a merchant, to use a token for a transaction\n only or for a longer period.\nPossible values:\n* **Customer**\n* **Transaction**',
    }),
    CustomerOrderID: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({ description: 'Additional and optional identification of a customer order.' }),
    CustomerOrderReq: CustomerOrderReqSchema.exactOptional().openapi({
      description:
        'List of customer order open, closed or both to be sent in the response messages.\nPossible values:\n* **Both**\n* **Closed**\n* **Open**',
    }),
    SaleToPOIData: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description: 'Sale information intended for the POI.\nStored with the transaction.',
      }),
    SaleToAcquirerData: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Sale information intended for the Acquirer.\nSend to the Acquirer if present.',
      }),
    SaleToIssuerData: SaleToIssuerDataSchema.exactOptional().openapi({
      description: 'Sale information intended for the Issuer.\nSend to the Acquirer if present.',
    }),
  })
  .openapi({
    description:
      'Data associated with the Sale System, with a particular value during the processing of the payment by the POI, including the cards acquisition.',
    required: ['SaleTransactionID'],
    'x-nexo-exported': true,
  })
  .openapi('SaleData')

const POIDataSchema = z
  .object({
    POITransactionID: TransactionIDTypeSchema.openapi({
      description: 'Unique identification of a POI transaction for a POI.',
    }),
    POIReconciliationID: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Identification of the reconciliation period between Sale and POI.\nIf Result is Success.',
        'x-nexo-kind': 'digitstring',
      }),
  })
  .openapi({
    description:
      'Data related to the POI System.\nIn the Message Response, identification of the POI transaction.',
    required: ['POITransactionID'],
  })
  .openapi('POIData')

const SaleSoftwareSchema = z
  .object({
    ManufacturerID: z
      .string()
      .regex(/^.+$/)
      .openapi({ description: 'Identification of the Manufacturer.' }),
    ApplicationName: z
      .string()
      .regex(/^.+$/)
      .openapi({ description: 'Name of the software product.' }),
    SoftwareVersion: z
      .string()
      .regex(/^.+$/)
      .openapi({ description: 'Version of the software product.' }),
    CertificationCode: z
      .string()
      .regex(/^.+$/)
      .openapi({
        description: 'Certification code of the software which manages the Sale to POI protocol.',
      }),
  })
  .openapi({
    description:
      'Information related to the software of the Sale System which manages the NEXO Sale to POI protocol.',
    required: ['ManufacturerID', 'ApplicationName', 'SoftwareVersion', 'CertificationCode'],
  })
  .openapi('SaleSoftware')

const POIStatusSchema = z
  .object({
    GlobalStatus: GlobalStatusSchema.openapi({
      description:
        'Global status of a POI Server or POI Terminal.\nPossible values:\n* **Busy**\n* **Maintenance**\n* **OK**\n* **Unreachable**',
    }),
    SecurityOKFlag: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the security module of the POI is working and usable.\nIf security module present.',
      }),
    PEDOKFlag: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the PED is working and usable.\nIf PED present.' }),
    CardReaderOKFlag: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the card readers are working and usable.\nIf card reader device present.',
      }),
    PrinterStatus: PrinterStatusSchema.exactOptional().openapi({
      description:
        'Possible values:\n* **NoPaper**\n* **OK**\n* **OutOfOrder**\n* **PaperJam**\n* **PaperLow**',
    }),
    CommunicationOKFlag: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the communication infrastructure is working and usable.\nIf communication infrastructure present.',
      }),
    FraudPreventionFlag: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates a suspicion of fraud by the POI System.\nCould be set to True by the POI system to notify to the Sale system and the Cashier that a suspicion of fraud had been detected on the POI as an unexpected reboot of the POI.',
      }),
  })
  .openapi({
    description:
      'Indicate the availability of the POI Terminal components. The data element is absent if the component is not part of the POI Terminal.\nState of a POI Terminal.',
    required: ['GlobalStatus'],
  })
  .openapi('POIStatus')

const ResponseSchema = z
  .object({
    Result: ResultSchema.openapi({
      description:
        'Result of the processing of the message.\nPossible values:\n* **Failure**\n* **Partial**\n* **Success**',
    }),
    ErrorCondition: ErrorConditionSchema.exactOptional().openapi({
      description:
        'Condition that has produced an error on the processing of a message request.\nReturned if Result is not Success.\nPossible values:\n* **Aborted**\n* **Busy**\n* **Cancel**\n* **DeviceOut**\n* **InProgress**\n* **InsertedCard**\n* **InvalidCard**\n* **LoggedOut**\n* **MessageFormat**\n* **NotAllowed**\n* **NotFound**\n* **PaymentRestriction**\n* **Refusal**\n* **UnavailableDevice**\n* **UnavailableService**\n* **UnreachableHost**\n* **WrongPIN**',
    }),
    AdditionalResponse: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Additional information related to processing status of a message request.\nIf present, the POI logs it for further examination.',
      }),
  })
  .openapi({
    description:
      'Result of a message request processing.\nIf Result is Success, `ErrorCondition` is absent or not used in the processing of the message. In the other cases, the `ErrorCondition` has to be present and can refine the processing of the message response. `AdditionalResponse` gives more information about the success or the failure of the message request processing, for logging without real time involvements.',
    required: ['Result'],
  })
  .openapi('Response')

const POISoftwareSchema = z
  .object({
    ManufacturerID: z
      .string()
      .regex(/^.+$/)
      .openapi({
        description:
          'Identification of the Manufacturer. Sent in the Login Request (Response) to identify the Sale System (POI System) manufacturer during the session.',
      }),
    ApplicationName: z
      .string()
      .regex(/^.+$/)
      .openapi({
        description:
          'Name of the software product. Sent in the Login Request (Response) to identify the Sale System (POI System) product name during the session.',
      }),
    SoftwareVersion: z
      .string()
      .regex(/^.+$/)
      .openapi({
        description:
          'Version of the software product. Sent in the Login Request (Response) to identify the version of the Sale System (POI System) product software during the session.',
      }),
    CertificationCode: z
      .string()
      .regex(/^.+$/)
      .openapi({
        description:
          'Certification code of the software which manages the Sale to POI protocol. Sent in the Login Request (Response) to get the certification code of the Sale System (POI System) product software. This code can be a software checksum or any number associated with the software.',
      }),
  })
  .openapi({
    description:
      'Information related to the software of the POI System which manages the Sale to POI protocol. In a session allows identifying the product features of a POI System.',
    required: ['ManufacturerID', 'ApplicationName', 'SoftwareVersion', 'CertificationCode'],
  })
  .openapi('POISoftware')

const POISystemDataSchema = z
  .object({
    DateTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'Date and Time. In the response, the POI System gives its date and time to the Sale System.',
      }),
    POISoftware: POISoftwareSchema,
    POIStatus: POIStatusSchema.exactOptional(),
  })
  .openapi({ required: ['DateTime', 'POISoftware'] })
  .openapi('POISystemData')

const OutputTextSchema = z
  .object({
    Text: z
      .string()
      .openapi({
        description: 'Content of text message to display, print or play.',
        'x-nexo-kind': 'unicode',
      }),
    CharacterSet: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Character height of the text string to display or print. Absence of this data element means the characters have normal height.',
        'x-nexo-kind': 'integer',
      }),
    StartRow: z
      .int()
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({
        description: 'Row where the text string has to be displayed or printed.',
        'x-nexo-kind': 'integer',
      }),
    StartColumn: z
      .int()
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({
        description: 'Column where the text string has to be displayed or printed.',
        'x-nexo-kind': 'integer',
      }),
    CharacterWidth: CharacterWidthSchema.exactOptional().openapi({
      description:
        'Character width of the text string to display or print. Absence of this data element means the characters have normal width.\nPossible values:\n* **DoubleWidth**\n* **SingleWidth**',
    }),
    CharacterHeight: CharacterHeightSchema.exactOptional().openapi({
      description:
        'Character height of the text string to display or print. Absence of this data element means the characters have normal height.\nPossible values:\n* **DoubleHeight**\n* **HalfHeight**\n* **SingleHeight**',
    }),
    CharacterStyle: CharacterStyleSchema.exactOptional().openapi({
      description:
        'Typographic style of the sequence of characters to display or print. Absence of this data element means the characters have normal style.\nPossible values:\n* **Bold**\n* **Italic**\n* **Normal**\n* **Underline**',
    }),
    Alignment: AlignmentSchema.exactOptional().openapi({
      description:
        'Alignment of the text string on the display line or print line. Absence of this data element means the characters have normal alignment.\nPossible values:\n* **Centred**\n* **Justified**\n* **Left**\n* **Right**',
    }),
    EndOfLineFlag: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Indicates if the text is at the end of a line. Allows the display or the print of a new line and a carry-over return characters after the formatted text.',
      }),
  })
  .openapi({
    description:
      'Content of text message to display or print.\nIt conveys information related to the content of the text message and its format. All the data elements related to the format of the text to display or print are parameters valid for the whole text content.',
    required: ['Text'],
  })
  .openapi('OutputText')

const PredefinedContentSchema = z
  .object({
    ReferenceID: z
      .string()
      .regex(/^.+$/)
      .openapi({ description: 'Identification of a predefined message to display or print.' }),
    Language: z
      .string()
      .regex(/^[a-z]{2,2}$/)
      .exactOptional()
      .openapi({ description: 'Identification of a language.' }),
  })
  .openapi({
    description:
      'Reference of a predefined message to display or print.\nIt conveys information related to the predefined message.',
    required: ['ReferenceID'],
  })
  .openapi('PredefinedContent')

const OutputBarcodeSchema = z
  .object({
    BarcodeValue: z
      .string()
      .regex(/^.+$/)
      .openapi({
        description: 'Value with a Barcode coding. The barcode value to display or print.',
      }),
  })
  .openapi({ required: ['BarcodeValue'] })
  .openapi('OutputBarcode')

const OutputContentSchema = z
  .object({
    OutputFormat: OutputFormatSchema.openapi({
      description:
        'Format of the content to display or print.\nPossible values:\n* **BarCode**\n* **MessageRef**\n* **Text**\n* **XHTML**',
    }),
    PredefinedContent: PredefinedContentSchema.exactOptional().openapi({
      description:
        'Reference of a predefined message to display or print.\nMandatory, if `OutputFormat` is MessageRef, not allowed otherwise.',
    }),
    OutputText: z
      .array(OutputTextSchema)
      .exactOptional()
      .openapi({
        description:
          'Content of text message to display or print.\nMandatory, if `OutputFormat` is Text, not allowed otherwise. One instance of `OutputText` per shared format.',
      }),
    OutputXHTML: z
      .string()
      .regex(/^.{0,262144}$/)
      .exactOptional()
      .openapi({
        description:
          'XHTML document body containing the message to display or print.\nMandatory if `OutputFormat` is XHTML, not allowed otherwise.',
        'x-nexo-min': 0,
        'x-nexo-max': 262144,
      }),
    OutputBarcode: OutputBarcodeSchema.exactOptional().openapi({
      description:
        'Barcode content to display or print.\nMandatory if `OutputFormat` is Barcode, not allowed otherwise.',
    }),
  })
  .openapi({
    description:
      'Content to display or print.\nThis is a sequence of elements if they have different formats.',
    required: ['OutputFormat'],
  })
  .openapi('OutputContent')

const MenuEntrySchema = z
  .object({
    MenuEntryTag: MenuEntryTagSchema.exactOptional().openapi({
      description:
        'Characteristics related to the selection of a menu entry.\nPossible values:\n* **NonSelectable**\n* **NonSelectableSubMenu**\n* **Selectable**\n* **SubMenu**',
      'x-nexo-default': 'Selectable',
    }),
    DefaultSelectedFlag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Selection of a menu entry to be displayed. In Input request message, it allows selection of one or several menu entries before any user action.',
      }),
    OutputFormat: OutputFormatSchema.openapi({
      description: 'Possible values:\n* **BarCode**\n* **MessageRef**\n* **Text**\n* **XHTML**',
    }),
    PredefinedContent: PredefinedContentSchema.exactOptional(),
    OutputText: z
      .array(OutputTextSchema)
      .exactOptional()
      .openapi({
        description:
          'Content of text message to display or print. It conveys Information related to the content of the text message and its format. All the data elements related to the format of the text to display or print are parameters valid for the whole Text content.',
      }),
    OutputXHTML: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({ description: 'XHTML document body containing the message to display or print.' }),
  })
  .openapi({
    description:
      'An entry of the menu to present to the Cashier.\nIt conveys message text and parameters of the menu entry. This output data could be only provided for an input command, in order to choose an entry of the menu.',
    required: ['OutputFormat'],
  })
  .openapi('MenuEntry')

const DisplayOutputSchema = z
  .object({
    ResponseRequiredFlag: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Indicates if the message response is required.' }),
    MinimumDisplayTime: z
      .int()
      .min(0)
      .max(999)
      .default(0)
      .exactOptional()
      .openapi({
        description: 'Number of seconds the message has to be displayed.',
        'x-nexo-kind': 'integer',
      }),
    Device: DeviceSchema.openapi({
      description:
        'Logical device located on a Sale Terminal or a POI Terminal, in terms of class of information to output (display, print, or store), or input (keyboard) for the Cashier or the Customer.\nPossible values:\n* **CashierDisplay**\n* **CashierInput**\n* **CustomerDisplay**\n* **CustomerInput**',
    }),
    InfoQualify: InfoQualifySchema.openapi({
      description:
        'Qualification of the information to sent to an output logical device, to display or print to the Cashier or the Customer. Allows the manager of the device, Sale or POI Terminal, to send the information to a particular physical device or to present the information accordingly.\nPossible values:\n* **CustomerAssistance**\n* **Display**\n* **Document**\n* **Error**\n* **Input**\n* **POIReplication**\n* **Receipt**\n* **Sound**\n* **Status**\n* **Voucher**',
    }),
    OutputContent: OutputContentSchema.openapi({ description: 'Content to display or print.' }),
    MenuEntry: z
      .array(MenuEntrySchema)
      .exactOptional()
      .openapi({
        description:
          'An entry of the menu to present to the Cashier. It conveys the message text and parameters of the menu entry. This output data could be only provided for an input command, in order to choose an entryof the menu.',
      }),
    OutputSignature: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Vendor-specific signature of the text message to display or print.\nIf protection has to be provided to the vendor on the text to display or print.',
      }),
  })
  .openapi({
    description:
      'Information to display and how to process it.\nContains a complete display operation for a Display or an Input Device type. For the Input Devices, Diagnosis and `EnableService`, `ResponseRequiredFlag`, and `MinimumDisplayTime` shall be absent.',
    required: ['Device', 'InfoQualify', 'OutputContent'],
  })
  .openapi('DisplayOutput')

const LoyaltyAccountIDSchema = z
  .object({
    EntryMode: EntryModeSchema.openapi({
      description:
        'Entry mode of the payment instrument information. In the Payment, Loyalty or StoredValue Request messages, it informs the POI System the entry mode of the payment instrument information when read by the Sale Terminal. In the Payment, Loyalty or StoredValue Response messages, it informs the Sale System the entry mode of the payment instrument.\nPossible values:\n* **Contactless**\n* **File**\n* **ICC**\n* **Keyed**\n* **MagStripe**\n* **Manual**\n* **Mobile**\n* **RFID**\n* **Scanned**\n* **SynchronousICC**\n* **Tapped**',
    }),
    IdentificationType: IdentificationTypeSchema.openapi({
      description:
        'Type of account identification. In a request message, it informs the POI System the type of the account or card identification, when provided by the Sale Terminal. (e.g. because the card information is a barcode read by the Cashier on a scanner device). In a response message, it informs the Sale System the type of the account or card identification.\nPossible values:\n* **AccountNumber**\n* **BarCode**\n* **ISOTrack2**\n* **PAN**\n* **PhoneNumber**',
    }),
    IdentificationSupport: IdentificationSupportSchema.exactOptional().openapi({
      description:
        'Support of the loyalty account identification. Allows knowing where and how you have found the loyalty account identification.\nPossible values:\n* **HybridCard**\n* **LinkedCard**\n* **LoyaltyCard**\n* **NoCard**',
    }),
    LoyaltyID: z
      .string()
      .openapi({
        description: 'Loyalty account identification conforming to the IdentificationType.',
        'x-nexo-kind': 'unicode',
      }),
  })
  .openapi({
    description:
      'Identification of a Loyalty account.\nIn the Payment Request message, it allows to identify the loyalty account by the Sale Terminal instead of the POI Terminal (e.g. because the account identification is a bar-code read by the Cashier on a scanner device).',
    required: ['EntryMode', 'IdentificationType', 'LoyaltyID'],
  })
  .openapi('LoyaltyAccountID')

const LoyaltyDataSchema = z
  .object({
    CardAcquisitionReference: TransactionIDTypeSchema.exactOptional().openapi({
      description:
        'Reference to the last CardAcquisition, to use the same card.\nIf the loyalty account ID comes from a previous CardAcquisition.',
    }),
    LoyaltyAccountID: LoyaltyAccountIDSchema.exactOptional().openapi({
      description:
        'Identification of a Loyalty account.\nIf loyalty identification of the loyalty account is realised by the Sale System.',
    }),
  })
  .openapi({
    description:
      'In the Payment, Loyalty or Balance Inquiry Request message, it allows the Sale Terminal to send the identification of the loyalty account or an awarded amount or an amount to redeem to the loyalty account.\nData related to a Loyalty program or account.',
    required: [],
  })
  .openapi('LoyaltyData')

const CheckDataSchema = z
  .object({
    BankID: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({ description: 'Identification of the bank.\nMandatory if TrackData absent.' }),
    AccountNumber: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description: 'Identification of the customer account.\nMandatory if TrackData absent.',
      }),
    CheckNumber: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description: 'Identification of the bank check.\nMandatory if TrackData absent.',
      }),
    TrackData: TrackDataSchema.exactOptional().openapi({
      description:
        'Magnetic track or magnetic ink characters line.\nMandatory if CheckNumber absent.',
    }),
    CheckCardNumber: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({ description: 'Check guarantee card number.\nIf provided by the customer.' }),
    TypeCode: TypeCodeSchema.exactOptional().openapi({
      description: 'Type of bank check.\nPossible values:\n* **Company**\n* **Personal**',
      'x-nexo-default': 'Personal',
    }),
    Country: z
      .string()
      .regex(/^[A-Z]{3,3}$/)
      .exactOptional()
      .openapi({
        description: 'Country of the bank check.\nAbsent if country of the Sale system.',
        'x-nexo-kind': 'isocountry3a',
      }),
  })
  .openapi({
    description:
      'Information related to the paper check used for the transaction.\nAllows the check information to be provided by the Sale System before requesting the payment, or stored by the Sale System after processing of the payment.',
    required: [],
  })
  .openapi('CheckData')

const MobileDataSchema: z.ZodType<MobileDataType> = z
  .lazy(() =>
    z
      .object({
        MobileCountryCode: z
          .int()
          .min(3)
          .max(3)
          .exactOptional()
          .openapi({
            description: 'Identifies the country of a mobile phone operator.\nIf data available.',
            'x-nexo-kind': 'digitstring',
          }),
        MobileNetworkCode: z
          .int()
          .min(2)
          .max(3)
          .exactOptional()
          .openapi({
            description:
              'Identifies the mobile phone operator inside a country.\nIf data available.',
            'x-nexo-kind': 'digitstring',
          }),
        MaskedMSISDN: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'Masked Mobile Subscriber Integrated Service Digital Network.\nIf data available.',
            'x-nexo-kind': 'digitstring',
          }),
        Geolocation: GeolocationSchema.exactOptional().openapi({
          description:
            'Geographic location specified by geographic or UTM coordinates.\nIf data available.',
        }),
        ProtectedMobileData: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Sensitive information related to the mobile phone, protected by CMS.\nSensitiveMobileData.',
            'x-nexo-kind': 'contentinformation',
          }),
        SensitiveMobileData: SensitiveMobileDataSchema.exactOptional().openapi({
          description:
            'Sensitive information related to the mobile phone.\nIf unprotected mobile data.',
        }),
      })
      .openapi({
        description:
          'Mobile phone is used as a payment instrument for the transaction.\nInformation related to the mobile for the payment transaction.',
        required: [],
      }),
  )
  .openapi('MobileData')

const InstalmentSchema = z
  .object({
    InstalmentType: InstalmentTypeSchema.exactOptional().openapi({
      description:
        'Type of instalment transaction. For requesting an instalment payment transaction.\nPossible values:\n* **DeferredInstalments**\n* **EqualInstalments**\n* **InequalInstalments**',
    }),
    SequenceNumber: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Sequence number of the instalment. For an instalment payment transaction, number of the payment, from 1 to TotalNbOfPayments.',
        'x-nexo-kind': 'integer',
      }),
    PlanID: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({ description: 'Identification of an instalment plan.' }),
    Period: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Period of time with defined unit of time. A period between 2 payment instalments.',
        'x-nexo-kind': 'integer',
      }),
    PeriodUnit: PeriodUnitSchema.exactOptional().openapi({
      description:
        'Type of instalment transaction.\nPossible values:\n* **Annual**\n* **Daily**\n* **Monthly**\n* **Weekly**',
    }),
    FirstPaymentDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'First date of a payment. For instalment, the date of the first payments, if not immediate.',
      }),
    TotalNbOfPayments: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Total number of payments. For instalment, the number of payments, including the first one.',
        'x-nexo-kind': 'integer',
      }),
    CumulativeAmount: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({
        description: 'Sum of a collection of amounts. Total amount of the payment instalments.',
        'x-nexo-kind': 'simpleamount',
      }),
    FirstAmount: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({
        description: 'First amount of the payment instalments.',
        'x-nexo-kind': 'simpleamount',
      }),
    Charges: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({
        description: 'Charges related to a transaction. Charge related to the payment instalments.',
        'x-nexo-kind': 'simpleamount',
      }),
  })
  .openapi({ required: [] })
  .openapi('Instalment')

const StoredValueAccountIDSchema = z
  .object({
    StoredValueAccountType: StoredValueAccountTypeSchema.openapi({
      description:
        'Type of stored value account. Allows the distinction of the stored value instrument to access the stored value account.\nPossible values:\n* **GiftCard**\n* **Other**\n* **PhoneCard**',
    }),
    StoredValueProvider: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Identification of the provider of the stored value account load/reload. When the ProductCode is not sufficient to identify the provider host which delivers the load or reload of the stored value account (for example if it contains the identification of the application.)',
      }),
    OwnerName: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({ description: 'Name of the owner of a stored value account.' }),
    ExpiryDate: z
      .int()
      .min(4)
      .max(4)
      .exactOptional()
      .openapi({
        description:
          'Date after which the card cannot be used. If EMV expiry date is present, it overrides Track2 information. Format is MMYY.',
        'x-nexo-kind': 'digitstring',
      }),
    EntryMode: EntryModeSchema.openapi({
      description:
        'Entry mode of the payment instrument information. In the Payment, Loyalty, or StoredValue Request messages, it informs the POI System the entry mode of the payment instrument information when read by the Sale Terminal. (e.g. because the payment instrument information are a barcode read by the Cashier on a scanner device).\nPossible values:\n* **Contactless**\n* **File**\n* **ICC**\n* **Keyed**\n* **MagStripe**\n* **Manual**\n* **Mobile**\n* **RFID**\n* **Scanned**\n* **SynchronousICC**\n* **Tapped**',
    }),
    IdentificationType: IdentificationTypeSchema.openapi({
      description:
        'Type of account identification. In a request message, it informs the POI System the type of the account or card identification, when provided by the Sale Terminal. (e.g. because the card information is a barcode read by the Cashier on a scanner device). In a response message, it informs the Sale System the type of the account or card identification.\nPossible values:\n* **AccountNumber**\n* **BarCode**\n* **ISOTrack2**\n* **PAN**\n* **PhoneNumber**',
    }),
    StoredValueID: z
      .string()
      .regex(/^.+$/)
      .openapi({
        description:
          'Stored value account identification. The identification of the stored value account conforming to the IdentificationType.',
      }),
  })
  .openapi({
    description:
      'Identification of the stored value account or the stored value card and the associated product sold by the Sale System for stored value requests.',
    required: ['StoredValueAccountType', 'EntryMode', 'IdentificationType', 'StoredValueID'],
  })
  .openapi('StoredValueAccountID')

const PaymentInstrumentDataSchema = z
  .object({
    PaymentInstrumentType: PaymentInstrumentTypeSchema.openapi({
      description:
        'Type of payment instrument.\nPossible values:\n* **Card**\n* **Cash**\n* **Check**\n* **Mobile**\n* **StoredValue**',
    }),
    ProtectedCardData: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Sensitive information related to the payment card, protected by CMS.\nSensitiveCardData protected by CMS EnvelopedData.',
        'x-nexo-kind': 'contentinformation',
      }),
    CardData: CardDataSchema.exactOptional().openapi({
      description:
        'Information related to the payment card used for the transaction.\nIf PaymentInstrumentType is Card.',
    }),
    CheckData: CheckDataSchema.exactOptional().openapi({
      description:
        'Information related to the paper check used for the transaction.\nIf PaymentInstrumentType is Check.',
    }),
    MobileData: MobileDataSchema.exactOptional().openapi({
      description:
        'Information related to the mobile for the payment transaction.\nIf PaymentInstrumentType is Mobile.',
    }),
    StoredValueAccountID: StoredValueAccountIDSchema.exactOptional(),
  })
  .openapi({
    description:
      'Data related to the instrument of payment for the transaction.\nSent in the result of the payment transaction. For a card, it could also be sent in the `CardAcquisition` response, to be processed by the Sale System.',
    required: ['PaymentInstrumentType'],
  })
  .openapi('PaymentInstrumentData')

const OriginalPOITransactionSchema = z
  .object({
    SaleID: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({ description: 'Identification of a Sale System for the NEXO SaletoPOI protocol.' }),
    POIID: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Identification of a payment terminal for the NEXO SaletoPOI protocol.\nIf original transaction is coming from another POI.',
      }),
    POITransactionID: TransactionIDTypeSchema.exactOptional().openapi({
      description:
        'Unique identification of a POI transaction for a POI.\nAbsent if SaleReferenceID is sufficient to identify the transaction.',
    }),
    ReuseCardDataFlag: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description: 'Indicates if the card data has to be retrieved from a previous transaction.',
      }),
    ApprovalCode: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description: 'Code assigned to a transaction approval by the Acquirer.\nIf referral.',
      }),
    AcquirerID: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Identification of the Acquirer.\nRestrict to the Acquirer if present.',
        'x-nexo-kind': 'digitstring',
      }),
    AmountValue: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({ description: 'Value of an amount.', 'x-nexo-kind': 'simpleamount' }),
    HostTransactionID: TransactionIDTypeSchema.exactOptional().openapi({
      description:
        'Identification of the transaction by the host in charge of the stored value transaction.\nIf POITransactionID not present.',
    }),
  })
  .openapi({
    description:
      'Identification of a previous POI transaction.\nIn the Payment Request message, it allows using the card of a previous CardAcquisition or Payment request.',
    required: [],
  })
  .openapi('OriginalPOITransaction')

const TransactionConditionsSchema = z
  .object({
    AllowedPaymentBrand: z
      .array(
        z
          .string()
          .regex(/^.+$/)
          .openapi({
            description:
              'Payment brands accepted for this transaction.\nCard payment brands allowed by the Sale System for the payment transaction.\nRestrict brand if data sent.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Payment brands accepted for this transaction.\nCard payment brands allowed by the Sale System for the payment transaction.\nRestrict brand if data sent.',
      }),
    AcquirerID: z
      .array(
        z
          .int()
          .openapi({
            description: 'Identification of the Acquirer.\nRestrict to these Acquirer if present.',
            'x-nexo-kind': 'digitstring',
          }),
      )
      .exactOptional()
      .openapi({
        description: 'Identification of the Acquirer.\nRestrict to these Acquirer if present.',
      }),
    DebitPreferredFlag: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The preferred type of payment is a debit transaction rather than a credit transaction.',
      }),
    AllowedLoyaltyBrand: z
      .array(
        z
          .string()
          .regex(/^.+$/)
          .openapi({
            description:
              'Loyalty brands or programs allowed by the Sale System for the loyalty transaction.\nRestrict brand if data sent.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Loyalty brands or programs allowed by the Sale System for the loyalty transaction.\nRestrict brand if data sent.',
      }),
    LoyaltyHandling: LoyaltyHandlingSchema.exactOptional().openapi({
      description:
        'Type of Loyalty processing requested by the Sale System.\nPossible values:\n* **Allowed**\n* **Forbidden**\n* **Processed**\n* **Proposed**\n* **Required**',
      'x-nexo-default': 'Forbidden',
    }),
    CustomerLanguage: z
      .string()
      .regex(/^[a-z]{2,2}$/)
      .exactOptional()
      .openapi({
        description:
          'The language used on the terminal screen or in text printed by the terminal.\nTypical use case is setting the language on unattended terminals. Format: two-character [ISO 639:2023](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) format.',
      }),
    ForceOnlineFlag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates if the Cashier requires POI forces online access to the Acquirer.\nGo online if data sent.',
      }),
    ForceEntryMode: ForceEntryModeSchema.exactOptional().openapi({
      description:
        'Payment instrument entry mode requested by the Sale System.\nRestrict entry mode if sent.\nPossible values:\n* **CheckReader**\n* **Contactless**\n* **File**\n* **ICC**\n* **Keyed**\n* **MagStripe**\n* **Manual**\n* **RFID**\n* **Scanned**\n* **SynchronousICC**\n* **Tapped**',
    }),
    MerchantCategoryCode: z
      .string()
      .regex(/^.{3,4}$/)
      .exactOptional()
      .openapi({
        description:
          'The code which identifies the category of the transaction (MCC).\nThe payment implies a specific MCC.',
        'x-nexo-min': 3,
        'x-nexo-max': 4,
      }),
  })
  .openapi({ description: 'Conditions on which the transaction must be processed.', required: [] })
  .openapi('TransactionConditions')

const PaymentDataSchema = z
  .object({
    PaymentType: PaymentTypeSchema.exactOptional().openapi({
      description:
        'Type of payment transaction. Elements requested by the Sale System that are related to the payment only.\nPossible values:\n* **CashAdvance**\n* **CashDeposit**\n* **Completion**\n* **FirstReservation**\n* **Instalment**\n* **IssuerInstalment**\n* **Normal**\n* **OneTimeReservation**\n* **PaidOut**\n* **Recurring**\n* **Refund**\n* **UpdateReservation**',
      'x-nexo-default': 'Normal',
    }),
    SplitPaymentFlag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates if the payment of the Sale transaction is split. Allows the POI to decline payment means that cannot accept split payment.',
      }),
    RequestedValidityDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Requested validity date for the reservation. Allows a specific period for the reservation according to the need of the Merchant for the first reservation and the reservation updates as well.',
      }),
    CardAcquisitionReference: TransactionIDTypeSchema.exactOptional(),
    Instalment: InstalmentSchema.exactOptional().openapi({
      description:
        'Information related an instalment transaction. To request an instalment to the issuer, or to make individual instalments of a payment transaction.',
    }),
    PaymentInstrumentData: PaymentInstrumentDataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaymentData')

const AmountsReqSchema = z
  .object({
    Currency: z
      .string()
      .regex(/^[A-Z]{3,3}$/)
      .openapi({ description: 'Currency of a monetary amount.', 'x-nexo-kind': 'isocurrency3a' }),
    RequestedAmount: z
      .number()
      .min(0)
      .max(99999999.999999)
      .openapi({
        description: 'Amount requested by the Sale for the payment.',
        'x-nexo-kind': 'simpleamount',
      }),
    CashBackAmount: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({
        description: 'The cash-back part of the amount requested by the Sale for the payment.',
        'x-nexo-kind': 'simpleamount',
      }),
    TipAmount: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({
        description:
          'Amount paid for a tip. Allow the printing of the tip on the receipt, and to qualify the tip part of the amount.',
        'x-nexo-kind': 'simpleamount',
      }),
    PaidAmount: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({
        description:
          'Amount already paid in case of split payment. Depending on the context, a split payment is either a split amount, or a split basket (required by some payment means as fleet cards). The PaidAmount is present when the split payment is a split\n     of the amount. Split of the basket involves two Sale Transactions, and does not have to be recognised by\n     the POI.',
        'x-nexo-kind': 'simpleamount',
      }),
    MinimumAmountToDeliver: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({
        description:
          'Minimum amount the Sale System is allowed to deliver for this payment. For the OneTimeReservation, when the maximum amount is unknown, the Sale System indicates the minimum amount it allows.',
        'x-nexo-kind': 'simpleamount',
      }),
    MaximumCashBackAmount: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({
        description:
          'Maximum amount which could be requested for cash-back to the Sale System. Allows the Cashier\n   to limit the amount value of cash-back to deliver to the Customer.',
        'x-nexo-kind': 'simpleamount',
      }),
    MinimumSplitAmount: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({
        description:
          'Minimum amount of a split, which could be requested by a Customer.Allows the Merchant to limit the number of split requested by the Customer.',
        'x-nexo-kind': 'simpleamount',
      }),
  })
  .openapi({
    description: 'Various amounts related to the payment request from the Sale System.',
    required: ['Currency', 'RequestedAmount'],
  })
  .openapi('AmountsReq')

const PaymentTransactionSchema = z
  .object({
    AmountsReq: AmountsReqSchema.openapi({
      description: 'Various amounts related to the payment request from the Sale System.',
    }),
    OriginalPOITransaction: OriginalPOITransactionSchema.exactOptional(),
    TransactionConditions: TransactionConditionsSchema.exactOptional(),
  })
  .openapi({ required: ['AmountsReq'] })
  .openapi('PaymentTransaction')

const ConvertedAmountSchema = z
  .object({
    AmountValue: z
      .number()
      .min(0)
      .max(99999999.999999)
      .openapi({ description: 'Value of an amount.', 'x-nexo-kind': 'simpleamount' }),
    Currency: z
      .string()
      .regex(/^[A-Z]{3,3}$/)
      .openapi({ description: 'Currency of a monetary amount.', 'x-nexo-kind': 'isocurrency3a' }),
  })
  .openapi({ required: ['AmountValue', 'Currency'] })
  .openapi('ConvertedAmount')

const CurrencyConversionSchema = z
  .object({
    CustomerApprovedFlag: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Notify if the customer has approved something. Indicates if the customer has accepted a currency conversion.',
      }),
    ConvertedAmount: ConvertedAmountSchema.openapi({
      description: 'Amount after a currency conversion.',
    }),
    Rate: z
      .number()
      .exactOptional()
      .openapi({ description: 'Rate of currency conversion.', 'x-nexo-kind': 'decimal' }),
    Markup: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Markup of a currency conversion amount as a percentage.',
        'x-nexo-kind': 'decimal',
      }),
    Commission: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({
        description: 'Commission for a currency conversion.',
        'x-nexo-kind': 'simpleamount',
      }),
    Declaration: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Declaration to present to the customer or the cashier for validation.\nIf a declaration has to be presented to the customer.',
      }),
  })
  .openapi({
    description:
      'Information related to a currency conversion.\nA currency conversion occurred in the payment, and the merchant needs to know information related to this conversion (e.g. to print on the sale receipt).',
    required: ['ConvertedAmount'],
  })
  .openapi('CurrencyConversion')

const PointSchema = z
  .object({
    X: z
      .string()
      .openapi({
        description: 'The hexadecimal value of the coordinates of a point on the abscissa.',
        'x-nexo-kind': 'hexstring',
        'x-nexo-min': 1,
        'x-nexo-max': 4,
      }),
    Y: z
      .string()
      .openapi({
        description: 'The hexadecimal value of the coordinates of a point on the ordinate.',
        'x-nexo-kind': 'hexstring',
        'x-nexo-min': 1,
        'x-nexo-max': 4,
      }),
  })
  .openapi({ required: ['X', 'Y'] })
  .openapi('Point')

const LoyaltyAccountSchema = z
  .object({
    LoyaltyAccountID: LoyaltyAccountIDSchema.openapi({
      description: 'Identification of a Loyalty account.',
    }),
    LoyaltyBrand: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({ description: 'Identification of a Loyalty brand.\nIf a card is analysed.' }),
  })
  .openapi({
    description:
      'This data structure conveys the identification of the account and the associated loyalty brand.\nData related to a loyalty account processed in the transaction.',
    required: ['LoyaltyAccountID'],
  })
  .openapi('LoyaltyAccount')

const LoyaltyAcquirerDataSchema = z
  .object({
    LoyaltyAcquirerID: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({ description: 'Identification of the loyalty Acquirer.' }),
    ApprovalCode: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Code assigned to a transaction approval by the Acquirer. Could be an identifier of the approved transaction for the Acquirer. This data element is conditional for the Loyalty Acquirers. Used in the PaymentRequest request for a referral.',
      }),
    LoyaltyTransactionID: TransactionIDTypeSchema.exactOptional(),
    HostReconciliationID: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Identifier of a reconciliation period with a payment or loyalty host. Allows the assignment of a transaction to the Acquirer reconciliation (or batch).',
      }),
  })
  .openapi({ required: [] })
  .openapi('LoyaltyAcquirerData')

const LoyaltyResultSchema = z
  .object({
    LoyaltyAccount: LoyaltyAccountSchema.openapi({
      description: 'Data related to a loyalty account processed in the transaction.',
    }),
    CurrentBalance: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({
        description: 'Balance of an account.\nIf known (provided by the card or an external host).',
        'x-nexo-kind': 'simpleamount',
      }),
    LoyaltyAcquirerData: LoyaltyAcquirerDataSchema.exactOptional().openapi({
      description:
        'Data related to the loyalty Acquirer during a loyalty transaction.\nIf content not empty.',
    }),
  })
  .openapi({
    description:
      'Data related to the result of a processed loyalty transaction.\nIn the Message Response, the result of each loyalty brand transaction.',
    required: ['LoyaltyAccount'],
  })
  .openapi('LoyaltyResult')

const PaymentReceiptSchema = z
  .object({
    DocumentQualifier: DocumentQualifierSchema.openapi({
      description:
        'Qualification of the document to print to the Cashier or the Customer.\nSaleReceipt or CashierReceipt.\nPossible values:\n* **CashierReceipt**\n* **CustomerReceipt**\n* **Document**\n* **Journal**\n* **SaleReceipt**\n* **Voucher**',
    }),
    IntegratedPrintFlag: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Type of the print integrated to other prints.' }),
    RequiredSignatureFlag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicate that the cardholder payment receipt requires a physical signature by the Customer.',
      }),
    OutputContent: OutputContentSchema.openapi({ description: 'Content to display or print.' }),
  })
  .openapi({
    description:
      'Customer or Merchant payment receipt.\nIf the payment receipts are printed by the Sale system and the POI or the Sale does not implement the Print exchange (Basic profile).',
    required: ['DocumentQualifier', 'OutputContent'],
  })
  .openapi('PaymentReceipt')

const PaymentAcquirerDataSchema = z
  .object({
    AcquirerID: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Identification of the Acquirer.\nIdentification of the Acquirer when the POI System is multi-acquirer.',
        'x-nexo-kind': 'digitstring',
      }),
    MerchantID: z
      .string()
      .regex(/^.+$/)
      .openapi({ description: 'Identification of the Merchant for the Acquirer.' }),
    AcquirerPOIID: z
      .string()
      .regex(/^.+$/)
      .openapi({ description: 'Identification of the POI for the payment Acquirer.' }),
    AcquirerTransactionID: TransactionIDTypeSchema.exactOptional().openapi({
      description:
        'Identification of the Transaction for the Acquirer.\nIf provided by the Acquirer.',
    }),
    ApprovalCode: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description: 'Code assigned to a transaction approval by the Acquirer.\nIf available.',
      }),
    HostReconciliationID: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Identifier of a reconciliation period with a payment or loyalty host. Allows the assignment of a transaction to the Acquirer reconciliation (or batch).',
      }),
  })
  .openapi({
    description: 'Data related to the response from the payment Acquirer.',
    required: ['MerchantID', 'AcquirerPOIID'],
  })
  .openapi('PaymentAcquirerData')

const AreaSizeSchema = z
  .object({
    X: z
      .string()
      .openapi({
        description:
          'Abscissa of a point coordinates. The hexadecimal value in text of the abscissa of the coordinates of a point. Leading zero can be removed (e.g. 3BC, 0, and 1287).',
        'x-nexo-kind': 'hexstring',
        'x-nexo-min': 1,
        'x-nexo-max': 4,
      }),
    Y: z
      .string()
      .openapi({
        description:
          'Ordinate of a point coordinates. The hexadecimal value in text of the ordinate of the coordinates of a point. Leading zero can be removed (e.g. 3BC, 0, and 1287).',
        'x-nexo-kind': 'hexstring',
        'x-nexo-min': 1,
        'x-nexo-max': 4,
      }),
  })
  .openapi({ required: ['X', 'Y'] })
  .openapi('AreaSize')

const CapturedSignatureSchema = z
  .object({
    AreaSize: AreaSizeSchema.exactOptional().openapi({
      description:
        'Size of an area. Contain the size of the pad area where the signature is written, given with the maximum abscissa and ordinate values (X and Y). The maximum value is FFFF.',
    }),
    SignaturePoint: z
      .array(PointSchema)
      .exactOptional()
      .openapi({
        description:
          'Coordinates of a point where the pen changes direction or lift. Contain the Coordinates of a point of the written signature where the pen changes direction or lift where (X and Y). When the signer lifts the pen, both X and Y have the value FFFF.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CapturedSignature')

const AmountsRespSchema = z
  .object({
    Currency: z
      .string()
      .regex(/^[A-Z]{3,3}$/)
      .exactOptional()
      .openapi({ description: 'Currency of a monetary amount.', 'x-nexo-kind': 'isocurrency3a' }),
    AuthorizedAmount: z
      .number()
      .min(0)
      .max(99999999.999999)
      .openapi({
        description: 'Amount requested by the Sale for the payment.',
        'x-nexo-kind': 'simpleamount',
      }),
    TotalRebatesAmount: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({
        description:
          'Sum of rebates in amount (total amount or line item amount) for all the loyalty programs.',
        'x-nexo-kind': 'simpleamount',
      }),
    TotalFeesAmount: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({ description: 'Total amount of financial fees.', 'x-nexo-kind': 'simpleamount' }),
    CashBackAmount: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({
        description: 'The cash-back part of the amount requested by the Sale for the payment.',
        'x-nexo-kind': 'simpleamount',
      }),
    TipAmount: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({
        description:
          'Amount paid for a tip. Allow the printing of the tip on the receipt, and to qualify the tip part of the amount.',
        'x-nexo-kind': 'simpleamount',
      }),
  })
  .openapi({ required: ['AuthorizedAmount'] })
  .openapi('AmountsResp')

const PaymentResultSchema = z
  .object({
    PaymentType: PaymentTypeSchema.exactOptional().openapi({
      description:
        'Type of payment transaction. Elements requested by the Sale System that are related to the payment only.\nPossible values:\n* **CashAdvance**\n* **CashDeposit**\n* **Completion**\n* **FirstReservation**\n* **Instalment**\n* **IssuerInstalment**\n* **Normal**\n* **OneTimeReservation**\n* **PaidOut**\n* **Recurring**\n* **Refund**\n* **UpdateReservation**',
      'x-nexo-default': 'Normal',
    }),
    PaymentInstrumentData: PaymentInstrumentDataSchema.exactOptional(),
    AmountsResp: AmountsRespSchema.exactOptional().openapi({
      description:
        'Various amounts related to the payment response from the POI System. Amounts approved by the POI and the Acquirer for the payment and loyalty transaction, containing:\n  * The authorised amount to be paid.\n  * The amount of the rebates.\n  * The amount of financial fees.\n  * The cash back part of the requested amount for a payment with cash back.\n  * The tip part of the requested amount for a payment with tip.',
    }),
    Instalment: InstalmentSchema.exactOptional().openapi({
      description:
        'Information related an instalment transaction. To request an instalment to the issuer, or to make individual instalments of a payment transaction.',
    }),
    CurrencyConversion: z
      .array(CurrencyConversionSchema)
      .exactOptional()
      .openapi({
        description:
          'Information related to a currency conversion. A currency conversion occurred in the payment, and the merchant needs to know information related to this conversion (e.g. to print on the sale receipt).',
      }),
    MerchantOverrideFlag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates that the Merchant forced the result of the payment to successful. Allows the Sale System to be sure that the payment has been forced.',
      }),
    CapturedSignature: CapturedSignatureSchema.exactOptional().openapi({
      description:
        'Numeric value of a handwritten signature. Contains the value of a handwritten signature, e.g. the signature of a cardholder on the merchant payment receipt. Only one format of the signature is allowed:\n  * The size of the pad area where the signature is written, given with the maximum abscissa and ordinate values.\n  * The sequence of coordinates where the pen changes direction or lift.',
    }),
    ProtectedSignature: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Numeric value of a handwritten signature. Contains the value of a handwritten signature, e.g. the signature of a cardholder on the merchant payment receipt. The format before encryption is the encoded data structure CapturedSignature. The data structure before encryption includes the start and end tags for an XML encoding, the identifier and length bytes for an ASN.1 encoding, and the complete member ProtectedSignature for a JSON encoding.',
        'x-nexo-kind': 'contentinformation',
      }),
    CustomerLanguage: z
      .string()
      .regex(/^[a-z]{2,2}$/)
      .exactOptional()
      .openapi({
        description:
          'The language of the customer that was used on the terminal screen or in text printed by the terminal. Format: two-character [ISO 639:2023](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) format.',
      }),
    OnlineFlag: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Indicate that the payment transaction processing has required the approval of a host. Allows the Sale System to know if the payment was online or offline.',
      }),
    AuthenticationMethod: AuthenticationMethodSchema.exactOptional().openapi({
      description:
        'Method for customer authentication. Allows the Sale System informed about customer authentication for the payment transaction.\nPossible values:\n* **Bypass**\n* **ManualVerification**\n* **MerchantAuthentication**\n* **OfflinePIN**\n* **OnlinePIN**\n* **PaperSignature**\n* **SecureCertificate**\n* **SecureNoCertificate**\n* **SecuredChannel**\n* **SignatureCapture**\n* **UnknownMethod**',
    }),
    ValidityDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'End of the validity period for the reservation, for the first reservation, and the reservation updates as well.',
      }),
    PaymentAcquirerData: PaymentAcquirerDataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaymentResult')

const CardAcquisitionTransactionSchema = z
  .object({
    AllowedPaymentBrand: z
      .array(
        z
          .string()
          .regex(/^.+$/)
          .openapi({
            description:
              'Card payment brands allowed by the Sale System for the payment transaction.',
          }),
      )
      .exactOptional()
      .openapi({
        description: 'Card payment brands allowed by the Sale System for the payment transaction.',
      }),
    AllowedLoyaltyBrand: z
      .array(
        z
          .string()
          .regex(/^.+$/)
          .openapi({
            description:
              'Loyalty brands or programs allowed by the Sale System for the loyalty transaction.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Loyalty brands or programs allowed by the Sale System for the loyalty transaction.',
      }),
    LoyaltyHandling: LoyaltyHandlingSchema.exactOptional().openapi({
      description:
        'Type of Loyalty processing requested by the Sale System. An way to specify what the POI has to handle concerning the loyalty.\nPossible values:\n* **Allowed**\n* **Forbidden**\n* **Processed**\n* **Proposed**\n* **Required**',
    }),
    CustomerLanguage: z
      .string()
      .regex(/^[a-z]{2,2}$/)
      .exactOptional()
      .openapi({
        description:
          'The language used on the terminal screen or in text printed by the terminal.\n  Typical use case is setting the language on unattended terminals. Format: two-character [ISO 639:2023](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) format.',
      }),
    ForceEntryMode: ForceEntryModeSchema.exactOptional().openapi({
      description:
        'Payment instrument entry mode requested by the Sale System. Avoid retry on an out of order card reading device, when the sale system knows that some card entry modes on the POI do not work.\nPossible values:\n* **CheckReader**\n* **Contactless**\n* **File**\n* **ICC**\n* **Keyed**\n* **MagStripe**\n* **Manual**\n* **RFID**\n* **Scanned**\n* **SynchronousICC**\n* **Tapped**',
    }),
    ForceCustomerSelectionFlag: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the Customer realises the selection of the card application.',
      }),
    TotalAmount: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({
        description:
          'Amount of a transaction. In the Card Acquisition Request message, it allows the processing of a contactless card.',
        'x-nexo-kind': 'simpleamount',
      }),
    PaymentType: PaymentTypeSchema.exactOptional().openapi({
      description:
        'Type of payment transaction. Elements requested by the Sale System that are related to the payment only.\nPossible values:\n* **CashAdvance**\n* **CashDeposit**\n* **Completion**\n* **FirstReservation**\n* **Instalment**\n* **IssuerInstalment**\n* **Normal**\n* **OneTimeReservation**\n* **PaidOut**\n* **Recurring**\n* **Refund**\n* **UpdateReservation**',
    }),
    CashBackFlag: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Cash back has been requested with the payment transaction. Allows choice of the Customer language when the POI displays messages or print text to Merchant interface.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CardAcquisitionTransaction')

const StoredValueDataSchema = z
  .object({
    StoredValueProvider: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Identification of the provider of the stored value account load/reload.\nIf more than one provider to manage on the POI, and StoredValueAccountID absent.',
      }),
    StoredValueTransactionType: StoredValueTransactionTypeSchema.openapi({
      description:
        'Identification of operation to proceed on the stored value account or the stored value card.\nPossible values:\n* **Activate**\n* **Duplicate**\n* **Load**\n* **Reserve**\n* **Reverse**\n* **Unload**',
    }),
    StoredValueAccountID: StoredValueAccountIDSchema.exactOptional().openapi({
      description:
        'Identification of the stored value account or the stored value card.\nIf the identification of the Stored Value account or card has been made by the Sale System before the request.',
    }),
    OriginalPOITransaction: OriginalPOITransactionSchema.exactOptional().openapi({
      description:
        'Identification of a previous POI transaction.\nIf StoredValueTransactionType is Reverse or Duplicate.',
    }),
    ProductCode: z
      .int()
      .min(1)
      .max(20)
      .exactOptional()
      .openapi({
        description: 'Product code of item purchased with the transaction.',
        'x-nexo-kind': 'digitstring',
      }),
    EanUpc: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Standard product code of item purchased with the transaction.',
        'x-nexo-kind': 'digitstring',
      }),
    ItemAmount: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({ description: 'Total amount of the item line.', 'x-nexo-kind': 'simpleamount' }),
    Currency: z
      .string()
      .regex(/^[A-Z]{3,3}$/)
      .exactOptional()
      .openapi({ description: 'Currency of a monetary amount.', 'x-nexo-kind': 'isocurrency3a' }),
  })
  .openapi({
    description:
      'It contains: - the identification of the stored value accounts or the stored value cards, if provided by the Sale System, and - the associated products sold by the Sale System.\nData related to the stored value card.',
    required: ['StoredValueTransactionType'],
  })
  .openapi('StoredValueData')

const StoredValueAccountStatusSchema = z
  .object({
    StoredValueAccountID: StoredValueAccountIDSchema,
    CurrentBalance: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({ description: 'If relevant and known.', 'x-nexo-kind': 'simpleamount' }),
  })
  .openapi({ required: ['StoredValueAccountID'] })
  .openapi('StoredValueAccountStatus')

const StoredValueResultSchema = z
  .object({
    StoredValueTransactionType: StoredValueTransactionTypeSchema.openapi({
      description:
        'Identification of operation to proceed on the stored value account or the stored value card.\nCopy.\nPossible values:\n* **Activate**\n* **Duplicate**\n* **Load**\n* **Reserve**\n* **Reverse**\n* **Unload**',
    }),
    ProductCode: z
      .int()
      .min(1)
      .max(20)
      .exactOptional()
      .openapi({
        description: 'Product code of item purchased with the transaction.\nCopy.',
        'x-nexo-kind': 'digitstring',
      }),
    EanUpc: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Standard product code of item purchased with the transaction.\nCopy.',
        'x-nexo-kind': 'digitstring',
      }),
    ItemAmount: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({ description: 'Total amount of the item line.', 'x-nexo-kind': 'simpleamount' }),
    Currency: z
      .string()
      .regex(/^[A-Z]{3,3}$/)
      .exactOptional()
      .openapi({
        description: 'Currency of a monetary amount.\nCopy.',
        'x-nexo-kind': 'isocurrency3a',
      }),
    StoredValueAccountStatus: StoredValueAccountStatusSchema.exactOptional().openapi({
      description: 'Data related to the result of the stored value card transaction.',
    }),
    HostTransactionID: TransactionIDTypeSchema.exactOptional().openapi({
      description:
        'Identification of the transaction by the host in charge of the stored value transaction.\nIf provided by the Host.',
    }),
  })
  .openapi({
    description:
      'For each stored value card loaded or reloaded, in the StoredValue response message.\nResult of loading/reloading a stored value card.',
    required: ['StoredValueTransactionType'],
  })
  .openapi('StoredValueResult')

const MessageHeaderSchema = z
  .object({
    ProtocolVersion: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({ description: 'If MessageCategory is Login or Diagnosis.' }),
    MessageClass: MessageClassSchema.openapi({
      description:
        'Class of the message.\nPossible values:\n* **Device**\n* **Event**\n* **Service**',
    }),
    MessageCategory: MessageCategorySchema.openapi({
      description:
        'Category of message.\nPossible values:\n* **Abort**\n* **Admin**\n* **BalanceInquiry**\n* **Batch**\n* **CardAcquisition**\n* **CardReaderInit**\n* **CardReaderPowerOff**\n* **Diagnosis**\n* **Display**\n* **EnableService**\n* **Event**\n* **GetTotals**\n* **Input**\n* **InputUpdate**\n* **Login**\n* **Logout**\n* **Loyalty**\n* **None**\n* **PIN**\n* **Payment**\n* **Print**\n* **Reconciliation**\n* **Reversal**\n* **Sound**\n* **StoredValue**\n* **TransactionStatus**\n* **Transmit**',
    }),
    MessageType: MessageTypeSchema.openapi({
      description:
        'Type of message of the Sale to POI protocol.\nPossible values:\n* **Notification**\n* **Request**\n* **Response**',
    }),
    ServiceID: z
      .string()
      .regex(/^.{1,10}$/)
      .exactOptional()
      .openapi({
        description:
          'Identification of a message pair, which processes a transaction.\nRequired if Service or Event MessageClass message or if Device MessageClass and request from POI or response from Sale.',
        'x-nexo-min': 1,
        'x-nexo-max': 10,
      }),
    DeviceID: z
      .string()
      .regex(/^.{1,10}$/)
      .exactOptional()
      .openapi({
        description: 'Identification of a device message pair.\nIf Device MessageClass.',
        'x-nexo-min': 1,
        'x-nexo-max': 10,
      }),
    SaleID: z
      .string()
      .regex(/^.+$/)
      .openapi({
        description:
          'Identification of a Sale System or a Sale Terminal for the Sale to POI protocol.',
      }),
    POIID: z
      .string()
      .regex(/^.+$/)
      .openapi({
        description:
          'Identification of a POI System or a POI Terminal for the Sale to POI protocol.',
      }),
  })
  .openapi({
    description:
      'Message header of the Sale to POI protocol message.\nIt conveys Information related to the Sale to POI protocol management.',
    required: ['MessageClass', 'MessageCategory', 'MessageType', 'SaleID', 'POIID'],
    'x-nexo-exported': true,
  })
  .openapi('MessageHeader')

const MessageReferenceSchema = z
  .object({
    MessageCategory: MessageCategorySchema.exactOptional().openapi({
      description:
        'Category of message.\nCardAcquisition, Display, Input, Loyalty, Payment, Print, CardReaderInit, CardReaderPowerOff.\nPossible values:\n* **Abort**\n* **Admin**\n* **BalanceInquiry**\n* **Batch**\n* **CardAcquisition**\n* **CardReaderInit**\n* **CardReaderPowerOff**\n* **Diagnosis**\n* **Display**\n* **EnableService**\n* **Event**\n* **GetTotals**\n* **Input**\n* **InputUpdate**\n* **Login**\n* **Logout**\n* **Loyalty**\n* **None**\n* **PIN**\n* **Payment**\n* **Print**\n* **Reconciliation**\n* **Reversal**\n* **Sound**\n* **StoredValue**\n* **TransactionStatus**\n* **Transmit**',
    }),
    ServiceID: z
      .string()
      .regex(/^.{1,10}$/)
      .exactOptional()
      .openapi({
        description: 'Identification of a message pair, which processes a transaction.',
        'x-nexo-min': 1,
        'x-nexo-max': 10,
      }),
    DeviceID: z
      .string()
      .regex(/^.{1,10}$/)
      .exactOptional()
      .openapi({
        description: 'Identification of a device message pair.',
        'x-nexo-min': 1,
        'x-nexo-max': 10,
      }),
    SaleID: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Identification of a Sale System or a Sale Terminal for the Sale to POI protocol.\ndefault MessageHeader.SaleID.',
      }),
    POIID: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Identification of a POI System or a POI Terminal for the Sale to POI protocol.\nDefault `MessageHeader.POIID`.',
      }),
  })
  .openapi({
    description:
      'Identification of a previous POI transaction.\nTo abort a transaction in progress or to request the status of a transaction from which no response has been received. It identifies the message header of the message request to abort or request the status.',
    required: [],
  })
  .openapi('MessageReference')

const AbortRequestSchema = z
  .object({
    MessageReference: MessageReferenceSchema.openapi({
      description: 'Identification of a previous POI transaction.',
    }),
    AbortReason: z
      .string()
      .regex(/^.+$/)
      .openapi({ description: 'Reason of aborting a transaction.' }),
    DisplayOutput: DisplayOutputSchema.exactOptional().openapi({
      description:
        'Information to display and the way to process the display.\nTo display an abort message to the Customer.',
    }),
  })
  .openapi({
    description:
      'Body of the Abort Request message.\nIt conveys Information requested for identification of the message request carrying the transaction to abort. A message to display on the CustomerError Device could be sent by the Sale System (DisplayOutput).',
    required: ['MessageReference', 'AbortReason'],
    'x-nexo-kind': 'request',
  })
  .openapi('AbortRequest')

const PaymentAccountReqSchema = z
  .object({
    AccountType: AccountTypeSchema.exactOptional().openapi({
      description:
        'Type of cardholder account used for the transaction. Allows a cardholder to select the type of account used for the transaction.\nPossible values:\n* **CardTotals**\n* **Checking**\n* **CreditCard**\n* **Default**\n* **EpurseCard**\n* **Investment**\n* **Savings**\n* **Universal**',
    }),
    CardAcquisitionReference: TransactionIDTypeSchema.exactOptional(),
    PaymentInstrumentData: PaymentInstrumentDataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaymentAccountReq')

const LoyaltyAccountReqSchema = z
  .object({
    CardAcquisitionReference: TransactionIDTypeSchema.exactOptional(),
    LoyaltyAccountID: LoyaltyAccountIDSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LoyaltyAccountReq')

const BalanceInquiryRequestSchema = z
  .object({
    PaymentAccountReq: PaymentAccountReqSchema.exactOptional().openapi({
      description: 'Data related to the account pointed by the payment card.',
    }),
    LoyaltyAccountReq: LoyaltyAccountReqSchema.exactOptional().openapi({
      description: 'Data related to a requested Loyalty program or account.',
    }),
  })
  .openapi({
    description:
      'It conveys Information related to the account for which a Balance Inquiry is requested.\nContent of the Balance Inquiry Request message.',
    'x-nexo-kind': 'request',
    required: [],
  })
  .openapi('BalanceInquiryRequest')

const CardAcquisitionRequestSchema = z
  .object({
    SaleData: SaleDataSchema.openapi({ description: 'Data related to the Sale System.' }),
    CardAcquisitionTransaction: CardAcquisitionTransactionSchema.openapi({
      description: 'Data related to the payment and loyalty card acquisition.',
    }),
  })
  .openapi({
    description:
      'It conveys Information related to the payment and loyalty cards to read and analyse. This message pair is usually followed by a message pair (e.g. payment or loyalty) which refers to this Card Acquisition message pair.\nContent of the Card Acquisition Request message.',
    required: ['SaleData', 'CardAcquisitionTransaction'],
    'x-nexo-kind': 'request',
  })
  .openapi('CardAcquisitionRequest')

const AdminRequestSchema = z
  .object({
    ServiceIdentification: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({ description: 'Identification of the administrative service to process.' }),
  })
  .openapi({
    description: 'Empty.\nContent of the Custom Admin Request message.',
    'x-nexo-kind': 'request',
    required: [],
  })
  .openapi('AdminRequest')

const DiagnosisRequestSchema = z
  .object({
    POIID: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Identification of a POI System or a POI Terminal for the Sale to POI protocol.\nMessageHeader.POIID.',
      }),
    HostDiagnosisFlag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Indicates if Host Diagnosis are required.' }),
    AcquirerID: z
      .array(
        z
          .int()
          .openapi({
            description:
              'Identification of the Acquirer.\nPresent if requesting the diagnosis of these hosts only.',
            'x-nexo-kind': 'digitstring',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Identification of the Acquirer.\nPresent if requesting the diagnosis of these hosts only.',
      }),
  })
  .openapi({
    description:
      'It conveys Information related to the target POI for which the diagnosis is requested.\nContent of the Diagnosis Request message.',
    'x-nexo-kind': 'request',
    required: [],
  })
  .openapi('DiagnosisRequest')

const DisplayRequestSchema = z
  .object({
    DisplayOutput: z
      .array(DisplayOutputSchema)
      .openapi({
        description:
          'Information to display and the way to process the display.\nComplete display content for output devices. At most one DisplayOutput per Device/ InfoQualify pair.',
      }),
  })
  .openapi({
    description:
      'It conveys the data to display and the way to process the display. It contains the complete content to display. It might contain an operation (the DisplayOutput element) per Display Device type.\nContent of the Display Request message.',
    required: ['DisplayOutput'],
    'x-nexo-kind': 'request',
  })
  .openapi('DisplayRequest')

const EnableServiceRequestSchema = z
  .object({
    TransactionAction: TransactionActionSchema.openapi({
      description:
        'Action to realise on a transaction. In an `EnableService` request message:\n  - Starts a transaction by a swipe-ahead mechanism, with the services which are enabled.\n  - Aborts a swipe-ahead transaction or started by a `CardAcquisition`, and not followed by a service request from the Sale System to complete the transaction.\nPossible values:\n* **AbortTransaction**\n* **StartTransaction**',
    }),
    ServicesEnabled: ServicesEnabledSchema.exactOptional().openapi({
      description:
        'Services which are enabled before the start-up of a transaction.\nMandatory if `TransactionAction` is `StartTransaction`, absent if not.\nPossible values:\n* **CardAcquisition**\n* **Loyalty**\n* **Payment**',
    }),
    DisplayOutput: DisplayOutputSchema.exactOptional().openapi({
      description: 'Information to display and the way to process the display.',
    }),
  })
  .openapi({
    description:
      'It conveys the services that will be enabled for the POI Terminal without the request of the Sale System, and a possible invitation for the Customer to start the services.\nContent of the Enable Service Request message.',
    required: ['TransactionAction'],
    'x-nexo-kind': 'request',
  })
  .openapi('EnableServiceRequest')

const EventNotificationSchema = z
  .object({
    TimeStamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'Date and time of a transaction for the Sale System, the POI System or the Acquirer.',
      }),
    EventToNotify: EventToNotifySchema.openapi({
      description:
        'Event the POI notifies to the Sale System.\nPossible values:\n* **Abort**\n* **BeginMaintenance**\n* **CardInserted**\n* **CardRemoved**\n* **Completed**\n* **CustomerLanguage**\n* **EndMaintenance**\n* **Initialised**\n* **KeyPressed**\n* **OutOfOrder**\n* **Reject**\n* **SaleAdmin**\n* **SaleWakeUp**\n* **ScanBarcodeResult**\n* **SecurityAlarm**\n* **Shutdown**\n* **StopAssistance**\n* **UseAnotherCardForPreauth**',
    }),
    EventDetails: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Information about the event the POI notifies to the Sale System.\nIf present, the Sale logs it for further examination.',
      }),
    RejectedMessage: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Message request rejected by the receiver.\nMandatory if EventToNotify is Reject, absent in other cases.',
      }),
    MaintenanceRequiredFlag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Indicates if the occurred event requires maintenance call or action.',
      }),
    DisplayOutput: z
      .array(DisplayOutputSchema)
      .exactOptional()
      .openapi({
        description:
          'Information to display and the way to process the display.\nTo display an event message.',
      }),
  })
  .openapi({
    description:
      'Content of the EventNotification message.\nIt conveys Information related to the event, and possible action (maintenance, message to display).',
    required: ['TimeStamp', 'EventToNotify'],
    'x-nexo-kind': 'request',
  })
  .openapi('EventNotification')

const TotalFilterSchema = z
  .object({
    POIID: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Identification of a POI System or a POI Terminal for the Sale to POI protocol.',
      }),
    SaleID: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Identification of a Sale System or a Sale Terminal for the Sale to POI protocol.',
      }),
    OperatorID: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({ description: 'Identification of the Cashier or Operator.' }),
    ShiftNumber: z.string().regex(/^.+$/).exactOptional().openapi({ description: 'Shift number.' }),
    TotalsGroupID: z
      .string()
      .regex(/^.{1,16}$/)
      .exactOptional()
      .openapi({
        description:
          'Sent if totals in the response have to be computed only for this particular value of TotalsGroupID.',
        'x-nexo-min': 1,
        'x-nexo-max': 16,
      }),
  })
  .openapi({ required: [] })
  .openapi('TotalFilter')

const GetTotalsRequestSchema = z
  .object({
    TotalDetails: TotalDetailsSchema.exactOptional().openapi({
      description:
        'Indicates the hierarchical structure of the reconciliation result of the Sale to POI reconciliation.\nRequired to present totals per value of element included in this cluster (POI Terminal, Sale Terminal, Cashier, Shift, TotalsGroupID).\nPossible values:\n* **OperatorID**\n* **POIID**\n* **SaleID**\n* **ShiftNumber**\n* **TotalsGroupID**',
    }),
    TotalFilter: TotalFilterSchema.exactOptional().openapi({
      description:
        'Filter to compute the totals.\nUsed for the Get Totals, to request totals for a (or a combination of) particular value of the POI Terminal, Sale Terminal, Cashier, Shift, or TotalsGroupID.',
    }),
  })
  .openapi({
    description:
      'It conveys information from the Sale System related to the scope and the format of the totals to be computed by the POI System.\nContent of the Get Totals Request message.',
    'x-nexo-kind': 'request',
    required: [],
  })
  .openapi('GetTotalsRequest')

const InputDataSchema = z
  .object({
    Device: DeviceSchema.openapi({
      description:
        'Logical device located on a Sale Terminal or a POI Terminal, regarding the class of information to output (display, print or store), or input (keyboard) for the Cashier or the Customer.\nPossible values:\n* **CashierDisplay**\n* **CashierInput**\n* **CustomerDisplay**\n* **CustomerInput**',
    }),
    InfoQualify: InfoQualifySchema.openapi({
      description:
        'Qualification of the information to send to an output logical device, to display or print to the Cashier or the Customer.\nPossible values:\n* **CustomerAssistance**\n* **Display**\n* **Document**\n* **Error**\n* **Input**\n* **POIReplication**\n* **Receipt**\n* **Sound**\n* **Status**\n* **Voucher**',
    }),
    InputCommand: InputCommandSchema.openapi({
      description:
        'Type of requested input. Can be: **GetConfirmation**, **TextString**, **DigitString**, **DecimalString** or **GetMenuEntry**.\nPossible values:\n* **DecimalString**\n* **DigitString**\n* **GetAnyKey**\n* **GetConfirmation**\n* **GetFunctionKey**\n* **GetMenuEntry**\n* **Password**\n* **SiteManager**\n* **TextString**',
    }),
    NotifyCardInputFlag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Request Notification of the card entered in the POI card reader.' }),
    MaxInputTime: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Maximum input time in seconds. Limits the time to answer to an Input request message.',
        'x-nexo-kind': 'integer',
      }),
    ImmediateResponseFlag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates whether to request an Immediate response to the message without waiting for the completion of the command.',
      }),
    MinLength: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Minimum length of an entered string, or minimum number of entries that can be selected in a menu.',
        'x-nexo-kind': 'integer',
      }),
    MaxLength: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Maximum length of an entered string, or maximum number of entries that can be selected in a menu.',
        'x-nexo-kind': 'integer',
      }),
    MaxDecimalLength: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Maximum input length of the decimal part (without decimal point).',
        'x-nexo-kind': 'integer',
      }),
    WaitUserValidationFlag: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Indicates that the user must confirm the entered characters, when the maximum allowed length is reached. During the processing of an Input command `TextString`, `DigitString` or `DecimalString` with `MaxLength` or `MaxDecimalLength` present in the request.',
      }),
    DefaultInputString: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Default string value for an input command. On the `TextString`, `DigitString` and `DecimalString` input commands: default string displayed on the input field before entering the string. In `GetConfirmation` input command: **Y** for yes, **N** for no.',
      }),
    DefaultLayoutString: z.string().regex(/^.+$/).exactOptional(),
    StringMask: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'String mask to get information requiring a specific format. For the processing of an Input command `TextString`, `DigitString` or `DecimalString`. Some information as date or plate number required to be entered with a certain format.',
      }),
    FromRightToLeftFlag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates if the entered character has to be displayed from the right to the left of the display field.',
      }),
    MaskCharactersFlag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates to mask the characters entered by the user (i.e. replacing in the display of the input, the entered character by a standard character as *).',
      }),
    BeepKeyFlag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates, when the user press a key, if a beep has to be generated (value True).',
      }),
    GlobalCorrectionFlag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates, when the user presses the Correct function key in an input entry, if all the entered characters are removed (value True) or only the last entered character if any (value False).',
      }),
    DisableCancelFlag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Indicates if the Cancel function key has to be deactivated (value True).',
      }),
    DisableCorrectFlag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates if the Correct function key has to be deactivated (value True). During the processing of an Input command `GetConfirmation`, `SiteManager`, or `GetMenuEntry`.',
      }),
    DisableValidFlag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates if the Valid function key has to be deactivated (value True). During the processing of an Input command `GetConfirmation`, `SiteManager`, or `GetMenuEntry`.',
      }),
    MenuBackFlag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If it has the value True, it indicates that the Back function key (respectively Home function key) may be used to go back to the immediate upper level of the menu. If it has the value False, it indicates that the current menu level has no parent menu.',
      }),
  })
  .openapi({ required: ['Device', 'InfoQualify', 'InputCommand'] })
  .openapi('InputData')

const InputRequestSchema = z
  .object({
    DisplayOutput: DisplayOutputSchema.exactOptional().openapi({
      description: 'Information to display and the way to process the display.',
    }),
    InputData: InputDataSchema.openapi({
      description:
        'Information related to an Input request. It conveys the target input logical device, the type of input command, and possible minimum and maximum length of the input. In addition, if the requestor might require to receive an Event Notification if a card is inserted in a card reader, with the `NotifyCardInputFlag`.',
    }),
  })
  .openapi({
    description:
      'Content of the `InputRequest` message. It conveys the data to display and how to process it. In addition to the display on the Input Device, it might contain an operation (the `DisplayOutput` element) per Display Device type.',
    required: ['InputData'],
    'x-nexo-kind': 'request',
  })
  .openapi('InputRequest')

const InputUpdateSchema = z
  .object({
    MessageReference: MessageReferenceSchema,
    OutputContent: OutputContentSchema,
    MenuEntry: z.array(MenuEntrySchema).exactOptional(),
    OutputSignature: z.string().regex(/^.+$/).exactOptional(),
    MinLength: z.int().exactOptional().openapi({ 'x-nexo-kind': 'integer' }),
    MaxLength: z.int().exactOptional().openapi({ 'x-nexo-kind': 'integer' }),
    MaxDecimalLength: z.int().exactOptional().openapi({ 'x-nexo-kind': 'integer' }),
  })
  .openapi({
    description:
      'Definition: Content of the Input Update message. : It conveys\nupdate of the display of an Input request in progress.',
    required: ['MessageReference', 'OutputContent'],
  })
  .openapi('InputUpdate')

const LoginRequestSchema = z
  .object({
    DateTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'Date and Time. In the Login request message, the Sale System gives its date and time to the POI System. In the Login response, the POI System gives its date and time to the Sale System.',
      }),
    SaleSoftware: SaleSoftwareSchema.openapi({
      description:
        'Information related to the software of the Sale System which manages the Sale to POI protocol.',
    }),
    SaleTerminalData: SaleTerminalDataSchema.exactOptional().openapi({
      description:
        'Information related to the software and hardware feature of the Sale Terminal.\nPresent if the login involve a Sale Terminal.',
    }),
    TrainingModeFlag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Training mode.\nThis flag indicates to the POI that the entire session will be not used to make real transaction, but is used for test of system or operator training.',
      }),
    OperatorLanguage: z
      .string()
      .regex(/^[a-z]{2,2}$/)
      .openapi({
        description:
          'Language of the Cashier or Operator.\nDefault value for Device type displays.',
      }),
    OperatorID: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Identification of the Cashier or Operator.\nFour conditions to send it:\n* The Sale System wants the POI to log it in the transaction log.\n* Because of reconciliation with total on OperatorID.\n* Because the POI needs it.\n* Acquirer or issuer need it.',
      }),
    ShiftNumber: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({ description: 'Shift number.\nSame as OperatorID.' }),
    TokenRequestedType: TokenRequestedTypeSchema.exactOptional().openapi({
      description:
        'Type of token replacing the PAN of a payment card to identify the payment\n mean of the customer. It allows, for a merchant, to use a token for a transaction\n only or for a longer period.\nPossible values:\n* **Customer**\n* **Transaction**',
    }),
    CustomerOrderReq: CustomerOrderReqSchema.exactOptional().openapi({
      description:
        'List of customer order open, closed or both to be sent in the response messages.\nPossible values:\n* **Both**\n* **Closed**\n* **Open**',
    }),
    POISerialNumber: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Serial number of a POI Terminal.\nIf the login involve a POI Terminal and not the first Login to the POI System.',
      }),
  })
  .openapi({
    description:
      'It conveys information related to the session (period between a Login and the following Logout) to process.\nContent of the `LoginRequest` message.',
    required: ['DateTime', 'SaleSoftware', 'OperatorLanguage'],
    'x-nexo-kind': 'request',
  })
  .openapi('LoginRequest')

const LogoutRequestSchema = z
  .object({
    MaintenanceAllowed: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates that the POI terminal is able to or has to go to maintenance. Sent in the Logout Request to express that after closing the session, the POI may go to maintenance.',
      }),
  })
  .openapi({
    description: 'Empty.\nContent of the Logout Request message.',
    'x-nexo-kind': 'request',
    required: [],
  })
  .openapi('LogoutRequest')

const PaymentRequestSchema = z
  .object({
    SaleData: SaleDataSchema.openapi({ description: 'Data related to the Sale System.' }),
    PaymentTransaction: PaymentTransactionSchema.openapi({
      description: 'Data related to the payment and loyalty transaction.',
    }),
    PaymentData: PaymentDataSchema.exactOptional().openapi({
      description: 'Data related to the payment transaction.\nIf one data element is present.',
    }),
    LoyaltyData: z
      .array(LoyaltyDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Data related to a Loyalty program or account.\nLoyalty cards used with the payment transaction and read by the Sale System.',
      }),
  })
  .openapi({
    description:
      'Request sent to terminal to initiate payment.\nIt conveys Information related to the Payment transaction to process.\nContent of the `PaymentRequest` message.',
    required: ['SaleData', 'PaymentTransaction'],
    'x-nexo-kind': 'request',
  })
  .openapi('PaymentRequest')

const PrintOutputSchema = z
  .object({
    DocumentQualifier: DocumentQualifierSchema.openapi({
      description:
        'Qualification of the document to print to the Cashier or the Customer. Allows the manager of the printer, Sale or POI Terminal, to send information to a physical printer or to use the paper type accordingly.\nPossible values:\n* **CashierReceipt**\n* **CustomerReceipt**\n* **Document**\n* **Journal**\n* **SaleReceipt**\n* **Voucher**',
    }),
    ResponseMode: ResponseModeSchema.openapi({
      description:
        'Message response awaited by the initiator of the Request. Allows various types and synchronisation of requests for Print or Sound.\nPossible values:\n* **Immediate**\n* **NotRequired**\n* **PrintEnd**\n* **SoundEnd**',
    }),
    IntegratedPrintFlag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Type of the print integrated in other prints. Allows a separated printing (paper cut if available), or integration with the sale receipt or other print. If the printing is integrated, the response is always immediate, even if the `ResponseMode` is set to `PrintEnd`.',
      }),
    RequiredSignatureFlag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates that the cardholder payment receipt requires a physical signature by the Customer.',
      }),
    OutputContent: OutputContentSchema.openapi({
      description:
        'Content to display or print. This is a sequence of elements if they have different formats.',
    }),
  })
  .openapi({ required: ['DocumentQualifier', 'ResponseMode', 'OutputContent'] })
  .openapi('PrintOutput')

const PrintRequestSchema = z
  .object({
    PrintOutput: PrintOutputSchema.openapi({
      description: 'Information to print and how to process it.',
    }),
  })
  .openapi({
    description:
      'Content of the Print Request message.\nIt conveys the complete data to print and how to process the print.',
    required: ['PrintOutput'],
    'x-nexo-kind': 'request',
  })
  .openapi('PrintRequest')

const CardReaderAPDURequestSchema = z
  .object({
    APDUClass: z
      .string()
      .regex(/^.{1,1}$/)
      .openapi({
        description:
          'Class field of the APDU command (CLA). APDU request for Card Reader device request. For specific card like synchronous card, a private value should be used in accordance to ISO 7816- 4 (private range D0-FE).',
        'x-nexo-min': 1,
        'x-nexo-max': 1,
      }),
    APDUInstruction: z
      .string()
      .regex(/^.{1,1}$/)
      .openapi({
        description: 'Instruction field of the APDU command (INS).',
        'x-nexo-min': 1,
        'x-nexo-max': 1,
      }),
    APDUPar1: z
      .string()
      .regex(/^.{1,1}$/)
      .openapi({
        description: 'Parameter 1 field of the APDU command (P1).',
        'x-nexo-min': 1,
        'x-nexo-max': 1,
      }),
    APDUPar2: z
      .string()
      .regex(/^.{1,1}$/)
      .openapi({
        description: 'Parameter 2 field of the APDU command(P2).',
        'x-nexo-min': 1,
        'x-nexo-max': 1,
      }),
    APDUData: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({ description: 'Data field of the APDU command (Lc + Data).' }),
    APDUExpectedLength: z
      .string()
      .regex(/^.{1,1}$/)
      .exactOptional()
      .openapi({
        description: 'Expected length of the data field of the APDU response to the command (Le).',
        'x-nexo-min': 1,
        'x-nexo-max': 1,
      }),
  })
  .openapi({
    description:
      'It contains the APDU request to send to the chip of the card, and a possible invitation message to display on the CashierInterface or the CustomerInterface.\nContent of the Card Reader APDU Request message.',
    required: ['APDUClass', 'APDUInstruction', 'APDUPar1', 'APDUPar2'],
  })
  .openapi('CardReaderAPDURequest')

const ReconciliationRequestSchema = z
  .object({
    ReconciliationType: ReconciliationTypeSchema.openapi({
      description:
        'Type of Reconciliation requested by the Sale to the POI.\nPossible values:\n* **AcquirerReconciliation**\n* **AcquirerSynchronisation**\n* **PreviousReconciliation**\n* **SaleReconciliation**',
    }),
    AcquirerID: z
      .array(
        z
          .int()
          .openapi({
            description:
              'Identification of the Acquirer.\nCould be present only if ReconciliationType is AcquirerReconciliation or AcquirerSynchronisation.',
            'x-nexo-kind': 'digitstring',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Identification of the Acquirer.\nCould be present only if ReconciliationType is AcquirerReconciliation or AcquirerSynchronisation.',
      }),
    POIReconciliationID: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Identification of the reconciliation period between Sale and POI.\nAbsent if ReconciliationType is not PreviousReconciliation.',
        'x-nexo-kind': 'digitstring',
      }),
  })
  .openapi({
    description:
      'Content of the Reconciliation Request message.\nIt conveys Information related to the Reconciliation requested by the Sale System.',
    required: ['ReconciliationType'],
    'x-nexo-kind': 'request',
  })
  .openapi('ReconciliationRequest')

const ReversalRequestSchema = z
  .object({
    SaleData: SaleDataSchema.exactOptional(),
    OriginalPOITransaction: OriginalPOITransactionSchema.openapi({
      description: 'Identification of a previous POI transaction.',
    }),
    ReversedAmount: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({
        description:
          'Amount of the payment or loyalty to reverse.\nReversedAmount is implicitly equal to the AuthorizedAmount if absent.',
        'x-nexo-kind': 'simpleamount',
      }),
    ReversalReason: ReversalReasonSchema.openapi({
      description:
        'Reason of the payment or loyalty reversal.\nPossible values:\n* **CustCancel**\n* **Malfunction**\n* **MerchantCancel**\n* **Unable2Compl**',
    }),
  })
  .openapi({
    description:
      'It conveys Information related to the reversal of a previous payment or a loyalty transaction.\nContent of the Reversal Request message.',
    required: ['OriginalPOITransaction', 'ReversalReason'],
    'x-nexo-kind': 'request',
  })
  .openapi('ReversalRequest')

const StoredValueRequestSchema = z
  .object({
    SaleData: SaleDataSchema.openapi({ description: 'Data related to the Sale System.' }),
    StoredValueData: z
      .array(StoredValueDataSchema)
      .openapi({
        description: 'Data related to the stored value card.',
        'x-nexo-list-min': 1,
        'x-nexo-list-max': 100,
      }),
  })
  .openapi({
    description:
      'It conveys Information related to the Stored Value transaction to process.\nContent of the Stored Value Request message.',
    required: ['SaleData', 'StoredValueData'],
    'x-nexo-kind': 'request',
  })
  .openapi('StoredValueRequest')

const TransactionStatusRequestSchema = z
  .object({
    MessageReference: MessageReferenceSchema.exactOptional().openapi({
      description:
        'Identification of a previous POI transaction.\nPresent if it contains any data.',
    }),
    ReceiptReprintFlag: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Request to reprint the POI receipt(s). Allows reprinting a receipt with a `TransactionStatus` message',
      }),
    DocumentQualifier: z
      .array(DocumentQualifierSchema)
      .exactOptional()
      .openapi({
        description:
          'Qualification of the document to print to the Cashier or the Customer. Allows the manager of the printer, Sale or POI Terminal, to send the information to a particular physical printer or to use the paper type accordingly.\nPossible values:\n* **CashierReceipt**\n* **CustomerReceipt**\n* **Document**\n* **Journal**\n* **SaleReceipt**\n* **Voucher**',
        'x-nexo-list-min': 0,
        'x-nexo-list-max': 2,
      }),
  })
  .openapi({
    description:
      'Content of the TransactionStatus Request message.\nIt conveys Information requested for status of the last or current Payment, Loyalty or Reversal transaction.',
    'x-nexo-kind': 'request',
    required: [],
  })
  .openapi('TransactionStatusRequest')

const SaleToPOIRequestSchema = z
  .object({
    MessageHeader: MessageHeaderSchema,
    AbortRequest: AbortRequestSchema.exactOptional().openapi({
      description: 'Content of the Abort Request message.',
    }),
    BalanceInquiryRequest: BalanceInquiryRequestSchema.exactOptional().openapi({
      description: 'Content of the Balance Inquiry Request message.',
    }),
    CardAcquisitionRequest: CardAcquisitionRequestSchema.exactOptional().openapi({
      description: 'Content of the Card Acquisition Request message.',
    }),
    AdminRequest: AdminRequestSchema.exactOptional().openapi({
      description: 'Content of the Admin Request message.',
    }),
    DiagnosisRequest: DiagnosisRequestSchema.exactOptional().openapi({
      description: 'Content of the Diagnosis Request message.',
    }),
    DisplayRequest: DisplayRequestSchema.exactOptional().openapi({
      description: 'Content of the Display Request message.',
    }),
    EnableServiceRequest: EnableServiceRequestSchema.exactOptional().openapi({
      description: 'Content of the Enable Service Request message.',
    }),
    EventNotification: EventNotificationSchema.exactOptional().openapi({
      description: 'Content of the EventNotification message.',
    }),
    GetTotalsRequest: GetTotalsRequestSchema.exactOptional().openapi({
      description: 'Content of the Get Totals Request message.',
    }),
    InputRequest: InputRequestSchema.exactOptional().openapi({
      description: 'Content of the Input Request message.',
    }),
    InputUpdate: InputUpdateSchema.exactOptional().openapi({
      description: 'Content of the Input Update message.',
    }),
    LoginRequest: LoginRequestSchema.exactOptional().openapi({
      description: 'Content of the Login Request message.',
    }),
    LogoutRequest: LogoutRequestSchema.exactOptional().openapi({
      description: 'Content of the Logout Request message.',
    }),
    PaymentRequest: PaymentRequestSchema.exactOptional().openapi({
      description: 'Content of the Payment Request message.',
    }),
    PrintRequest: PrintRequestSchema.exactOptional().openapi({
      description: 'Content of the Print Request message.',
    }),
    CardReaderAPDURequest: CardReaderAPDURequestSchema.exactOptional().openapi({
      description: 'Content of the Card Reader APDU Request message.',
    }),
    ReconciliationRequest: ReconciliationRequestSchema.exactOptional().openapi({
      description: 'Content of the Reconciliation Request message.',
    }),
    ReversalRequest: ReversalRequestSchema.exactOptional().openapi({
      description: 'Content of the Reversal Request message.',
    }),
    StoredValueRequest: StoredValueRequestSchema.exactOptional().openapi({
      description: 'Content of the Stored Value Request message.',
    }),
    TransactionStatusRequest: TransactionStatusRequestSchema.exactOptional().openapi({
      description: 'Content of the TransactionStatus Request message.',
    }),
  })
  .openapi({
    description:
      'The SaleToPOIRequest message pair is a container for the request message content. It contains a MessageHeader and a message body.',
    required: ['MessageHeader'],
  })
  .openapi('SaleToPOIRequest')

const TerminalAPIRequestSchema = z
  .object({ SaleToPOIRequest: SaleToPOIRequestSchema })
  .openapi({
    description: 'The request payload of the Adyen Terminal API.',
    required: ['SaleToPOIRequest'],
  })
  .openapi('TerminalAPIRequest')

const PaymentAccountStatusSchema = z
  .object({
    PaymentInstrumentData: PaymentInstrumentDataSchema.exactOptional(),
    CurrentBalance: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({
        description: 'Balance of an account after processing of the transaction.',
        'x-nexo-kind': 'simpleamount',
      }),
    Currency: z
      .string()
      .regex(/^[A-Z]{3,3}$/)
      .exactOptional()
      .openapi({ description: 'Currency of a monetary amount.', 'x-nexo-kind': 'isocurrency3a' }),
    PaymentAcquirerData: PaymentAcquirerDataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaymentAccountStatus')

const BalanceInquiryResponseSchema = z
  .object({
    Response: ResponseSchema.openapi({ description: 'Result of a message request processing.' }),
    PaymentAccountStatus: PaymentAccountStatusSchema.exactOptional().openapi({
      description:
        'Data related to the result of a Balance Inquiry request.\nIf BalanceInquiryRequest. PaymentAccount present.',
    }),
    PaymentReceipt: z.array(PaymentReceiptSchema).exactOptional(),
  })
  .openapi({
    description:
      'Content of the Balance Inquiry Response message.\nIt conveys the balance and the identification of the associated payment, loyalty or stored value account.',
    required: ['Response'],
    'x-nexo-kind': 'response',
  })
  .openapi('BalanceInquiryResponse')

const CardAcquisitionResponseSchema = z
  .object({
    Response: ResponseSchema.openapi({ description: 'Result of a message request processing.' }),
    SaleData: SaleDataSchema.openapi({ description: 'Data related to the Sale System.' }),
    POIData: POIDataSchema.openapi({ description: 'Data related to the POI System.' }),
    PaymentBrand: z
      .array(
        z
          .string()
          .regex(/^.+$/)
          .openapi({
            description:
              'Type of payment card.\nBrands available for payment by the card and not chosen by the Customer.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Type of payment card.\nBrands available for payment by the card and not chosen by the Customer.',
      }),
    PaymentInstrumentData: PaymentInstrumentDataSchema.exactOptional().openapi({
      description:
        'Data related to the instrument of payment for the transaction.\nIf this type of payment card is configured to send information if the CardAcquisition response.',
    }),
    LoyaltyAccount: z
      .array(LoyaltyAccountSchema)
      .exactOptional()
      .openapi({ description: 'Data related to the loyalty System.' }),
  })
  .openapi({
    description:
      'It conveys Information related to the payment and loyalty cards read and processed by the POI System and entered by the Customer.\nContent of the Card Acquisition Response message.',
    required: ['Response', 'SaleData', 'POIData'],
    'x-nexo-kind': 'response',
  })
  .openapi('CardAcquisitionResponse')

const AdminResponseSchema = z
  .object({
    Response: ResponseSchema.openapi({ description: 'Result of a message request processing.' }),
  })
  .openapi({
    description:
      'It conveys the result of the Custom Admin.\nContent of the Custom Admin Response message.',
    required: ['Response'],
    'x-nexo-kind': 'response',
  })
  .openapi('AdminResponse')

const HostStatusSchema = z
  .object({
    AcquirerID: z
      .int()
      .openapi({ description: 'Identification of the Acquirer.', 'x-nexo-kind': 'digitstring' }),
    IsReachableFlag: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Indicate if a Host is reachable.' }),
  })
  .openapi({
    description: 'Indicate the reachability of the host by the POI Terminal.\nState of a Host.',
    required: ['AcquirerID'],
  })
  .openapi('HostStatus')

const DiagnosisResponseSchema = z
  .object({
    Response: ResponseSchema.openapi({ description: 'Result of a message request processing.' }),
    POIStatus: POIStatusSchema.exactOptional().openapi({
      description: 'State of a POI Terminal.\nIf `Response.Result` is Success.',
    }),
    HostStatus: z
      .array(HostStatusSchema)
      .exactOptional()
      .openapi({ description: 'State of a Host.' }),
  })
  .openapi({
    description:
      'It conveys the result of the requested diagnosis and a possible message to display on a logical device.\nContent of the Diagnosis Response message.',
    required: ['Response'],
    'x-nexo-kind': 'response',
  })
  .openapi('DiagnosisResponse')

const OutputResultSchema = z
  .object({
    Device: DeviceSchema.openapi({
      description:
        'Logical device located on a Sale Terminal or a POI Terminal, in term of class of information to output (display, print or store), or input (keyboard) for the Cashier or the Customer.\nCopy.\nPossible values:\n* **CashierDisplay**\n* **CashierInput**\n* **CustomerDisplay**\n* **CustomerInput**',
    }),
    InfoQualify: InfoQualifySchema.openapi({
      description:
        'Qualification of the information to sent to an output logical device, to display or print to the Cashier or the Customer.\nCopy.\nPossible values:\n* **CustomerAssistance**\n* **Display**\n* **Document**\n* **Error**\n* **Input**\n* **POIReplication**\n* **Receipt**\n* **Sound**\n* **Status**\n* **Voucher**',
    }),
    Response: ResponseSchema.openapi({ description: 'Result of a message request processing.' }),
  })
  .openapi({
    description:
      'In the message response, it contains the result of the output, if required in the message request.\nInformation related to the result the output (display, print, input).',
    required: ['Device', 'InfoQualify', 'Response'],
  })
  .openapi('OutputResult')

const DisplayResponseSchema = z
  .object({
    OutputResult: z
      .array(OutputResultSchema)
      .openapi({
        description:
          'Information related to the result the output (display, print, input).\nOne per DisplayOutput item of the request, and in the same order.',
      }),
  })
  .openapi({
    description:
      'It conveys the result of the display, parallel to the message request, except if response not required and absent.\nContent of the Display Response message.',
    required: ['OutputResult'],
    'x-nexo-kind': 'response',
  })
  .openapi('DisplayResponse')

const EnableServiceResponseSchema = z
  .object({
    Response: ResponseSchema.openapi({ description: 'Result of a message request processing.' }),
  })
  .openapi({
    description:
      'It conveys the result of the Enable Service processing.\nContent of the Enable Service Response message.',
    required: ['Response'],
    'x-nexo-kind': 'response',
  })
  .openapi('EnableServiceResponse')

const PaymentTotalsSchema = z
  .object({
    TransactionType: TransactionTypeSchema.openapi({
      description:
        'Type of transaction for which totals are grouped.\nDebit, Credit, ReverseDebit, ReverseCredit, OneTimeReservation, CompletedDeffered, FirstReservation, UpdateReservation, CompletedReservation, CashAdvance.\nPossible values:\n* **Award**\n* **CashAdvance**\n* **CompletedDeffered**\n* **CompletedReservation**\n* **Credit**\n* **Debit**\n* **Declined**\n* **Failed**\n* **FirstReservation**\n* **IssuerInstalment**\n* **OneTimeReservation**\n* **Rebate**\n* **Redemption**\n* **ReverseAward**\n* **ReverseCredit**\n* **ReverseDebit**\n* **ReverseRebate**\n* **ReverseRedemption**\n* **UpdateReservation**',
    }),
    TransactionCount: z
      .int()
      .openapi({
        description: 'Number of processed transaction during the period.',
        'x-nexo-kind': 'integer',
      }),
    TransactionAmount: z
      .number()
      .min(0)
      .max(99999999.999999)
      .openapi({
        description: 'Sum of amount of processed transaction during the period.',
        'x-nexo-kind': 'simpleamount',
      }),
  })
  .openapi({
    description: 'Totals of the payment transaction during the reconciliation period.',
    required: ['TransactionType', 'TransactionCount', 'TransactionAmount'],
  })
  .openapi('PaymentTotals')

const TransactionTotalsSchema = z
  .object({
    PaymentInstrumentType: PaymentInstrumentTypeSchema.openapi({
      description:
        'Type of payment instrument.\nPossible values:\n* **Card**\n* **Cash**\n* **Check**\n* **Mobile**\n* **StoredValue**',
    }),
    AcquirerID: z
      .int()
      .exactOptional()
      .openapi({ description: 'Identification of the Acquirer.', 'x-nexo-kind': 'digitstring' }),
    HostReconciliationID: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description: 'Identifier of a reconciliation period with a payment or loyalty host.',
      }),
    CardBrand: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Type of payment or loyalty card.\nIf configured to present totals per card brand, and Response.Result is Success.',
      }),
    POIID: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Identification of a POI System or a POI Terminal for the Sale to POI protocol.\nSent if requested in the message request.',
      }),
    SaleID: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Identification of a Sale System or a Sale Terminal for the Sale to POI protocol.\nSent if requested in the message request.',
      }),
    OperatorID: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({
        description:
          'Identification of the Cashier or Operator.\nSent if requested in the message request.',
      }),
    ShiftNumber: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({ description: 'Shift number.\nSent if requested in the message request.' }),
    TotalsGroupID: z
      .string()
      .regex(/^.{1,16}$/)
      .exactOptional()
      .openapi({
        description:
          'Identification of a group of transaction on a POI Terminal, having the same Sale features.\nSent if requested in the message request.',
        'x-nexo-min': 1,
        'x-nexo-max': 16,
      }),
    PaymentCurrency: z
      .string()
      .regex(/^[A-Z]{3,3}$/)
      .exactOptional()
      .openapi({ description: 'Currency of a monetary amount.', 'x-nexo-kind': 'isocurrency3a' }),
    PaymentTotals: z
      .array(PaymentTotalsSchema)
      .exactOptional()
      .openapi({
        description:
          'Totals of the payment transaction during the reconciliation period.\nIf both `TransactionCount` and `TransactionAmount` are not equal to zero.',
        'x-nexo-list-min': 0,
        'x-nexo-list-max': 10,
      }),
  })
  .openapi({
    description:
      'If Result is Success, contains all the totals, classified as required by the Sale in the message request. At least, transaction totals are provided per Acquirer, Acquirer Settlement, and Card Brand.\nResult of the Sale to POI Reconciliation processing.',
    required: ['PaymentInstrumentType'],
  })
  .openapi('TransactionTotals')

const GetTotalsResponseSchema = z
  .object({
    Response: ResponseSchema.openapi({ description: 'Result of a message request processing.' }),
    POIReconciliationID: z
      .int()
      .openapi({
        description: 'Identification of the reconciliation period between Sale and POI.',
        'x-nexo-kind': 'digitstring',
      }),
    TransactionTotals: z
      .array(TransactionTotalsSchema)
      .exactOptional()
      .openapi({
        description:
          'Result of the Sale to POI Reconciliation processing.\nIf `Response.Result` is Success.',
      }),
  })
  .openapi({
    description:
      'Content of the Reconciliation Response message.\nIt conveys Information related to the Reconciliation transaction processed by the POI System.',
    required: ['Response', 'POIReconciliationID'],
    'x-nexo-kind': 'response',
  })
  .openapi('GetTotalsResponse')

const InputSchema = z
  .object({
    InputCommand: InputCommandSchema.openapi({
      description:
        'Type of requested input. Can be: **GetConfirmation**, **TextString**, **DigitString**, **DecimalString** or **GetMenuEntry**.\nPossible values:\n* **DecimalString**\n* **DigitString**\n* **GetAnyKey**\n* **GetConfirmation**\n* **GetFunctionKey**\n* **GetMenuEntry**\n* **Password**\n* **SiteManager**\n* **TextString**',
    }),
    ConfirmedFlag: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates te response of the user from the `GetConfirmation` input command.',
      }),
    FunctionKey: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The number of the function key which is typed by the Customer on the POI or the Cashier on the Sale Terminal.',
        'x-nexo-kind': 'digitstring',
      }),
    TextInput: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text typed by the Customer on the POI or by the Cashier on the Sale Terminal.',
        'x-nexo-kind': 'unicode',
      }),
    DigitInput: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The digits typed by the Customer on the POI or by the Cashier on the Sale Terminal.',
        'x-nexo-kind': 'digitstring',
      }),
    Password: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text password typed by the Customer on the POI or by the Cashier on the Sale Terminal.',
        'x-nexo-kind': 'contentinformation',
      }),
    MenuEntryNumber: z
      .array(
        z
          .int()
          .openapi({
            description:
              'The index of the menu item (from 1 to n) which is selected by the Cashier on the Sale Terminal. The value -1 indicates that the immediate upper level of the menu is requested. The value 0 indicates that the root of the menu is requested.',
            'x-nexo-kind': 'integer',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The index of the menu item (from 1 to n) which is selected by the Cashier on the Sale Terminal. The value -1 indicates that the immediate upper level of the menu is requested. The value 0 indicates that the root of the menu is requested.',
      }),
  })
  .openapi({ required: ['InputCommand'] })
  .openapi('Input')

const InputResultSchema = z
  .object({
    Device: DeviceSchema.openapi({
      description:
        'Logical device located on a Sale Terminal or a POI Terminal, in terms of class of information to output (display, print or store), or input (keyboard) for the Cashier or the Customer.\nPossible values:\n* **CashierDisplay**\n* **CashierInput**\n* **CustomerDisplay**\n* **CustomerInput**',
    }),
    InfoQualify: InfoQualifySchema.openapi({
      description:
        'Qualification of the information to send to an output logical device, to display or print to the Cashier or the Customer.\nPossible values:\n* **CustomerAssistance**\n* **Display**\n* **Document**\n* **Error**\n* **Input**\n* **POIReplication**\n* **Receipt**\n* **Sound**\n* **Status**\n* **Voucher**',
    }),
    Response: ResponseSchema,
    Input: InputSchema.exactOptional().openapi({
      description: 'Data entered by the user, related to the input command.',
    }),
  })
  .openapi({ required: ['Device', 'InfoQualify', 'Response'] })
  .openapi('InputResult')

const InputResponseSchema = z
  .object({
    OutputResult: OutputResultSchema.exactOptional().openapi({
      description:
        'Information related to the result the output (display, print, input).\nIf DisplayOutput present in the request.',
    }),
    InputResult: InputResultSchema.openapi({
      description: 'Contains the result and the content of the input.',
    }),
  })
  .openapi({
    description:
      'It conveys the result of the input or the result of the outputs, parallel to the message request, except if response not required and absent.\nContent of the Input Response message.',
    required: ['InputResult'],
    'x-nexo-kind': 'response',
  })
  .openapi('InputResponse')

const LoginResponseSchema = z
  .object({
    Response: ResponseSchema.openapi({ description: 'Result of a message request processing.' }),
    POISystemData: POISystemDataSchema.exactOptional().openapi({
      description:
        'Information related to the POI System.\nReturned if the response result is Success.',
    }),
    TokenRequestStatus: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If token is managed by the POI, the status of the token request.' }),
  })
  .openapi({
    description:
      'It conveys Information related to the Login to process.\nContent of the Login Response message.',
    required: ['Response'],
    'x-nexo-kind': 'response',
  })
  .openapi('LoginResponse')

const LogoutResponseSchema = z
  .object({
    Response: ResponseSchema.openapi({ description: 'Result of a message request processing.' }),
  })
  .openapi({
    description: 'It conveys the result of the Logout.\nContent of the Logout Response message.',
    required: ['Response'],
    'x-nexo-kind': 'response',
  })
  .openapi('LogoutResponse')

const LoyaltyResponseSchema = z
  .object({
    Response: ResponseSchema.openapi({ description: 'Result of a message request processing.' }),
    SaleData: SaleDataSchema.openapi({ description: 'Data related to the Sale System.' }),
    POIData: POIDataSchema.openapi({ description: 'Data related to the POI System.' }),
    LoyaltyResult: z
      .array(LoyaltyResultSchema)
      .exactOptional()
      .openapi({
        description:
          'Data related to the result of a processed loyalty transaction.\nIf loyalty account identified.',
      }),
    PaymentReceipt: z.array(PaymentReceiptSchema).exactOptional(),
  })
  .openapi({
    description:
      'It conveys Information related to the Loyalty transaction processed by the POI System.\nContent of the Loyalty Response message.',
    required: ['Response', 'SaleData', 'POIData'],
    'x-nexo-kind': 'response',
  })
  .openapi('LoyaltyResponse')

const PaymentResponseSchema = z
  .object({
    Response: ResponseSchema.openapi({ description: 'Result of a message request processing.' }),
    SaleData: SaleDataSchema.openapi({ description: 'Data related to the Sale System.\nCopy.' }),
    POIData: POIDataSchema.openapi({ description: 'Data related to the POI System.' }),
    PaymentResult: PaymentResultSchema.exactOptional().openapi({
      description:
        'Data related to the result of a processed payment transaction.\nIf one data element is present.',
    }),
    LoyaltyResult: z
      .array(LoyaltyResultSchema)
      .exactOptional()
      .openapi({
        description:
          'Data related to the result of a processed loyalty transaction.\nLoyalty cards used with the payment transaction.',
      }),
    PaymentReceipt: z
      .array(PaymentReceiptSchema)
      .exactOptional()
      .openapi({
        description:
          'Customer or Merchant payment receipt. If the payment receipts are printed by the Sale system and the POI or the Sale does not implement the Print exchange (Basic profile).',
      }),
  })
  .openapi({
    description:
      'It conveys Information related to the Payment transaction processed by the POI System.\nContent of the Payment Response message.',
    required: ['Response', 'SaleData', 'POIData'],
    'x-nexo-kind': 'response',
  })
  .openapi('PaymentResponse')

const PrintResponseSchema = z
  .object({
    DocumentQualifier: DocumentQualifierSchema.openapi({
      description:
        'Qualification of the document to print to the Cashier or the Customer. Allows the manager of the printer, Sale or POI Terminal, to send information to a physical printer or to use the paper type accordingly.\nPossible values:\n* **CashierReceipt**\n* **CustomerReceipt**\n* **Document**\n* **Journal**\n* **SaleReceipt**\n* **Voucher**',
    }),
    Response: ResponseSchema.openapi({ description: 'Result of a message request processing.' }),
  })
  .openapi({
    description:
      'It conveys the result of the print, parallel to the message request, except if response not required and absent.\nContent of the Print Response message.',
    required: ['DocumentQualifier', 'Response'],
    'x-nexo-kind': 'response',
  })
  .openapi('PrintResponse')

const CardReaderAPDUResponseSchema = z
  .object({
    Response: ResponseSchema.openapi({ description: 'Result of a message request processing.' }),
    APDUData: z
      .string()
      .regex(/^.+$/)
      .exactOptional()
      .openapi({ description: 'Data field of the APDU command (Lc + Data).' }),
    CardStatusWords: z
      .string()
      .regex(/^.{2,2}$/)
      .openapi({
        description: 'Status of a smartcard response to a command (SW1-SW2).',
        'x-nexo-min': 2,
        'x-nexo-max': 2,
      }),
  })
  .openapi({
    description:
      'Content of the Card Reader APDU Response message.\nIt contains the result of the requested service, APDU response sent by the chip of the card in response to the APDU request.',
    required: ['Response', 'CardStatusWords'],
    'x-nexo-kind': 'response',
  })
  .openapi('CardReaderAPDUResponse')

const ReconciliationResponseSchema = z
  .object({
    Response: ResponseSchema.openapi({ description: 'Result of a message request processing.' }),
    ReconciliationType: ReconciliationTypeSchema.openapi({
      description:
        'Type of Reconciliation requested by the Sale to the POI.\nPossible values:\n* **AcquirerReconciliation**\n* **AcquirerSynchronisation**\n* **PreviousReconciliation**\n* **SaleReconciliation**',
    }),
    POIReconciliationID: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Identification of the reconciliation period between Sale and POI.\nAbsent if ReconciliationType is `AcquirerReconciliation`.',
        'x-nexo-kind': 'digitstring',
      }),
    TransactionTotals: z
      .array(TransactionTotalsSchema)
      .exactOptional()
      .openapi({
        description:
          'Result of the Sale to POI Reconciliation processing.\nIf `Response.Result` is Success.',
      }),
  })
  .openapi({
    description:
      'It conveys Information related to the Reconciliation transaction processed by the POI System.\nContent of the Reconciliation Response message.',
    required: ['Response', 'ReconciliationType'],
    'x-nexo-kind': 'response',
  })
  .openapi('ReconciliationResponse')

const ReversalResponseSchema = z
  .object({
    Response: ResponseSchema.openapi({ description: 'Result of a message request processing.' }),
    POIData: POIDataSchema.exactOptional().openapi({
      description: 'Data related to the POI System.\nIf Result is Success.',
    }),
    OriginalPOITransaction: OriginalPOITransactionSchema.exactOptional(),
    ReversedAmount: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({
        description: 'Amount of the payment or loyalty to reverse.\nCopy.',
        'x-nexo-kind': 'simpleamount',
      }),
    PaymentReceipt: z.array(PaymentReceiptSchema).exactOptional(),
  })
  .openapi({
    description:
      'It conveys Information related to the reversal processed by the POI System.\nContent of the Reversal Response message.',
    required: ['Response'],
    'x-nexo-kind': 'response',
  })
  .openapi('ReversalResponse')

const StoredValueResponseSchema = z
  .object({
    Response: ResponseSchema.openapi({ description: 'Result of a message request processing.' }),
    SaleData: SaleDataSchema.openapi({ description: 'Data related to the Sale System.' }),
    POIData: POIDataSchema.openapi({ description: 'Data related to the POI System.' }),
    StoredValueResult: z
      .array(StoredValueResultSchema)
      .exactOptional()
      .openapi({
        description:
          'Result of loading/reloading a stored value card.\nIf StoredValueResponse.Result is Success or Partial, one entry per StoredValueRequest.StoredValueData loaded or activated.',
      }),
    PaymentReceipt: z.array(PaymentReceiptSchema).exactOptional(),
  })
  .openapi({
    description:
      'It conveys Information related to the Stored Value transaction processed by the POI System.\nContent of the Stored Value Response message.',
    required: ['Response', 'SaleData', 'POIData'],
    'x-nexo-kind': 'response',
  })
  .openapi('StoredValueResponse')

const RepeatedResponseMessageBodySchema = z
  .object({
    LoyaltyResponse: LoyaltyResponseSchema.exactOptional(),
    PaymentResponse: PaymentResponseSchema.exactOptional(),
    ReversalResponse: ReversalResponseSchema.exactOptional(),
    StoredValueResponse: StoredValueResponseSchema.exactOptional(),
    CardAcquisitionResponse: CardAcquisitionResponseSchema.exactOptional(),
    CardReaderAPDUResponse: CardReaderAPDUResponseSchema.exactOptional(),
  })
  .openapi({ 'x-nexo-exported': true, required: [] })
  .openapi('RepeatedResponseMessageBody')

const RepeatedMessageResponseSchema = z
  .object({
    MessageHeader: MessageHeaderSchema,
    RepeatedResponseMessageBody: RepeatedResponseMessageBodySchema,
  })
  .openapi({ required: ['MessageHeader', 'RepeatedResponseMessageBody'] })
  .openapi('RepeatedMessageResponse')

const TransactionStatusResponseSchema = z
  .object({
    Response: ResponseSchema.openapi({ description: 'Result of a message request processing.' }),
    MessageReference: MessageReferenceSchema.exactOptional().openapi({
      description:
        'Identification of a previous POI transaction.\nIf `Response.Result` is Success.',
    }),
    RepeatedMessageResponse: RepeatedMessageResponseSchema.exactOptional().openapi({
      description:
        'Content of the requested Message Response.\nIf Result is Success (process completed).',
    }),
  })
  .openapi({
    description:
      'Content of the TransactionStatus Response message.\nIt conveys Information related to the status of the last or current Payment, Loyalty or Reversal transaction.',
    required: ['Response'],
    'x-nexo-kind': 'response',
  })
  .openapi('TransactionStatusResponse')

const SaleToPOIResponseSchema = z
  .object({
    MessageHeader: MessageHeaderSchema,
    BalanceInquiryResponse: BalanceInquiryResponseSchema.exactOptional().openapi({
      description: 'Content of the Balance Inquiry Response message.',
    }),
    CardAcquisitionResponse: CardAcquisitionResponseSchema.exactOptional().openapi({
      description: 'Content of the Card Acquisition Response message.',
    }),
    AdminResponse: AdminResponseSchema.exactOptional().openapi({
      description: 'Content of the Admin Response message.',
    }),
    DiagnosisResponse: DiagnosisResponseSchema.exactOptional().openapi({
      description: 'Content of the Diagnosis Response message.',
    }),
    DisplayResponse: DisplayResponseSchema.exactOptional().openapi({
      description: 'Content of the Display Response message.',
    }),
    EnableServiceResponse: EnableServiceResponseSchema.exactOptional().openapi({
      description: 'Content of the Enable Service Response message.',
    }),
    GetTotalsResponse: GetTotalsResponseSchema.exactOptional().openapi({
      description: 'Content of the Get Totals Response message.',
    }),
    InputResponse: InputResponseSchema.exactOptional().openapi({
      description: 'Content of the Input Response message.',
    }),
    LoginResponse: LoginResponseSchema.exactOptional().openapi({
      description: 'Content of the Login Response message.',
    }),
    LogoutResponse: LogoutResponseSchema.exactOptional().openapi({
      description: 'Content of the Logout Response message.',
    }),
    LoyaltyResponse: LoyaltyResponseSchema.exactOptional().openapi({
      description: 'Content of the Loyalty Response message.',
    }),
    PaymentResponse: PaymentResponseSchema.exactOptional().openapi({
      description: 'Content of the Payment Response message.',
    }),
    PrintResponse: PrintResponseSchema.exactOptional().openapi({
      description: 'Content of the Print Response message.',
    }),
    CardReaderAPDUResponse: CardReaderAPDUResponseSchema.exactOptional().openapi({
      description: 'Content of the Card Reader APDU Response message.',
    }),
    ReconciliationResponse: ReconciliationResponseSchema.exactOptional().openapi({
      description: 'Content of the Reconciliation Response message.',
    }),
    ReversalResponse: ReversalResponseSchema.exactOptional().openapi({
      description: 'Content of the Reversal Response message.',
    }),
    StoredValueResponse: StoredValueResponseSchema.exactOptional().openapi({
      description: 'Content of the Stored Value Response message.',
    }),
    TransactionStatusResponse: TransactionStatusResponseSchema.exactOptional().openapi({
      description: 'Content of the TransactionStatus Response message.',
    }),
  })
  .openapi({
    description:
      'The SaleToPOIResponse message pair is a container for the response message content. It contains a MessageHeader and a message body.',
    required: ['MessageHeader'],
  })
  .openapi('SaleToPOIResponse')

const TerminalAPIResponseSchema = z
  .object({ SaleToPOIResponse: SaleToPOIResponseSchema })
  .openapi({
    description: 'The response payload of the Adyen Terminal API.',
    required: ['SaleToPOIResponse'],
  })
  .openapi('TerminalAPIResponse')

const PerformedTransactionSchema = z
  .object({
    Response: ResponseSchema,
    SaleData: SaleDataSchema.exactOptional(),
    POIData: POIDataSchema.exactOptional(),
    PaymentResult: PaymentResultSchema.exactOptional(),
    LoyaltyResult: z.array(LoyaltyResultSchema).exactOptional(),
    ReversedAmount: z
      .number()
      .min(0)
      .max(99999999.999999)
      .exactOptional()
      .openapi({ 'x-nexo-kind': 'simpleamount' }),
  })
  .openapi({ required: ['Response'] })
  .openapi('PerformedTransaction')

const SoundContentSchema = z
  .object({
    SoundFormat: SoundFormatSchema.openapi({
      description: 'Possible values:\n* **MessageRef**\n* **SoundRef**\n* **Text**',
    }),
    Language: z
      .string()
      .regex(/^[a-z]{2,2}$/)
      .exactOptional(),
    ReferenceID: z.string().regex(/^.+$/).exactOptional(),
    Text: z.string().regex(/^.+$/).exactOptional(),
  })
  .openapi({ required: ['SoundFormat'] })
  .openapi('SoundContent')

const CardHolderPINSchema = z
  .object({
    EncrPINBlock: z.string().openapi({ 'x-nexo-kind': 'contentinformation' }),
    PINFormat: PINFormatSchema.openapi({
      description: 'Possible values:\n* **ISO0**\n* **ISO1**\n* **ISO2**\n* **ISO3**',
    }),
    AdditionalInput: z.string().regex(/^.+$/).exactOptional(),
  })
  .openapi({ required: ['EncrPINBlock', 'PINFormat'] })
  .openapi('CardHolderPIN')

const ICCResetDataSchema = z
  .object({
    ATRValue: z
      .string()
      .regex(/^.{1,100}$/)
      .exactOptional()
      .openapi({ 'x-nexo-min': 1, 'x-nexo-max': 100 }),
    CardStatusWords: z
      .string()
      .regex(/^.{2,2}$/)
      .exactOptional()
      .openapi({ 'x-nexo-min': 2, 'x-nexo-max': 2 }),
  })
  .openapi({ required: [] })
  .openapi('ICCResetData')

const SecurityTrailerSchema = z
  .object({
    AdyenCryptoVersion: z.int().openapi({ 'x-nexo-kind': 'integer' }),
    KeyIdentifier: z.string().regex(/^.+$/),
    KeyVersion: z.int().openapi({ 'x-nexo-kind': 'integer' }),
    Nonce: z.string().regex(/^.+$/),
    Hmac: z.string().regex(/^.+$/),
  })
  .openapi({
    description:
      'It contains information related to the security of the message.\nSecurityTrailer as used by Adyen.',
    required: ['AdyenCryptoVersion', 'KeyIdentifier', 'KeyVersion', 'Nonce', 'Hmac'],
    'x-nexo-exported': true,
  })
  .openapi('SecurityTrailer')

const AbortResponseSchema = z
  .object({})
  .openapi({
    description:
      'A successful `AbortRequest` returns a response with a **200 OK** HTTP status code and no body.',
    'x-nexo-kind': 'response',
  })
  .openapi('AbortResponse')

const ApiKeyAuthSecurityScheme = { in: 'header', name: 'X-API-Key', type: 'apiKey' }

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const postLoginRoute = createRoute({
  method: 'post',
  path: '/login',
  summary: 'Login Request',
  description:
    'It conveys information related to the session (period between a Login and the following Logout) to process.\nContent of the `LoginRequest` message.',
  request: { body: { content: { 'application/json': { schema: LoginRequestSchema } } } },
  responses: {
    200: {
      description:
        'It conveys Information related to the Login to process.\nContent of the Login Response message.',
      content: { 'application/json': { schema: LoginResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postLogoutRoute = createRoute({
  method: 'post',
  path: '/logout',
  summary: 'Logout Request',
  description: 'Empty.\nContent of the Logout Request message.',
  request: { body: { content: { 'application/json': { schema: LogoutRequestSchema } } } },
  responses: {
    200: {
      description: 'It conveys the result of the Logout.\nContent of the Logout Response message.',
      content: { 'application/json': { schema: LogoutResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postEnableserviceRoute = createRoute({
  method: 'post',
  path: '/enableservice',
  summary: 'EnableService Request',
  description:
    'It conveys the services that will be enabled for the POI Terminal without the request of the Sale System, and a possible invitation for the Customer to start the services.\nContent of the Enable Service Request message.',
  request: { body: { content: { 'application/json': { schema: EnableServiceRequestSchema } } } },
  responses: {
    200: {
      description:
        'It conveys the result of the Enable Service processing.\nContent of the Enable Service Response message.',
      content: { 'application/json': { schema: EnableServiceResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postAdminRoute = createRoute({
  method: 'post',
  path: '/admin',
  summary: 'Admin Request',
  description: 'Empty.\nContent of the Custom Admin Request message.',
  request: { body: { content: { 'application/json': { schema: AdminRequestSchema } } } },
  responses: {
    200: {
      description:
        'It conveys the result of the Custom Admin.\nContent of the Custom Admin Response message.',
      content: { 'application/json': { schema: AdminResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postPaymentRoute = createRoute({
  method: 'post',
  path: '/payment',
  summary: 'Payment Request',
  description:
    'Request sent to terminal to initiate payment.\nIt conveys Information related to the Payment transaction to process.\nContent of the `PaymentRequest` message.',
  request: { body: { content: { 'application/json': { schema: PaymentRequestSchema } } } },
  responses: {
    200: {
      description:
        'It conveys Information related to the Payment transaction processed by the POI System.\nContent of the Payment Response message.',
      content: { 'application/json': { schema: PaymentResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postCardacquisitionRoute = createRoute({
  method: 'post',
  path: '/cardacquisition',
  summary: 'CardAcquisition Request',
  description:
    'It conveys Information related to the payment and loyalty cards to read and analyse. This message pair is usually followed by a message pair (e.g. payment or loyalty) which refers to this Card Acquisition message pair.\nContent of the Card Acquisition Request message.',
  request: { body: { content: { 'application/json': { schema: CardAcquisitionRequestSchema } } } },
  responses: {
    200: {
      description:
        'It conveys Information related to the payment and loyalty cards read and processed by the POI System and entered by the Customer.\nContent of the Card Acquisition Response message.',
      content: { 'application/json': { schema: CardAcquisitionResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postStoredvalueRoute = createRoute({
  method: 'post',
  path: '/storedvalue',
  summary: 'StoredValue Request',
  description:
    'It conveys Information related to the Stored Value transaction to process.\nContent of the Stored Value Request message.',
  request: { body: { content: { 'application/json': { schema: StoredValueRequestSchema } } } },
  responses: {
    200: {
      description:
        'It conveys Information related to the Stored Value transaction processed by the POI System.\nContent of the Stored Value Response message.',
      content: { 'application/json': { schema: StoredValueResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postReversalRoute = createRoute({
  method: 'post',
  path: '/reversal',
  summary: 'Reversal Request',
  description:
    'It conveys Information related to the reversal of a previous payment or a loyalty transaction.\nContent of the Reversal Request message.',
  request: { body: { content: { 'application/json': { schema: ReversalRequestSchema } } } },
  responses: {
    200: {
      description:
        'It conveys Information related to the reversal processed by the POI System.\nContent of the Reversal Response message.',
      content: { 'application/json': { schema: ReversalResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postReconciliationRoute = createRoute({
  method: 'post',
  path: '/reconciliation',
  summary: 'Reconciliation Request',
  description:
    'Content of the Reconciliation Request message.\nIt conveys Information related to the Reconciliation requested by the Sale System.',
  request: { body: { content: { 'application/json': { schema: ReconciliationRequestSchema } } } },
  responses: {
    200: {
      description:
        'It conveys Information related to the Reconciliation transaction processed by the POI System.\nContent of the Reconciliation Response message.',
      content: { 'application/json': { schema: ReconciliationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postGettotalsRoute = createRoute({
  method: 'post',
  path: '/gettotals',
  summary: 'GetTotals Request',
  description:
    'It conveys information from the Sale System related to the scope and the format of the totals to be computed by the POI System.\nContent of the Get Totals Request message.',
  request: { body: { content: { 'application/json': { schema: GetTotalsRequestSchema } } } },
  responses: {
    200: {
      description:
        'Content of the Reconciliation Response message.\nIt conveys Information related to the Reconciliation transaction processed by the POI System.',
      content: { 'application/json': { schema: GetTotalsResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postBalanceinquiryRoute = createRoute({
  method: 'post',
  path: '/balanceinquiry',
  summary: 'BalanceInquiry Request',
  description:
    'It conveys Information related to the account for which a Balance Inquiry is requested.\nContent of the Balance Inquiry Request message.',
  request: { body: { content: { 'application/json': { schema: BalanceInquiryRequestSchema } } } },
  responses: {
    200: {
      description:
        'Content of the Balance Inquiry Response message.\nIt conveys the balance and the identification of the associated payment, loyalty or stored value account.',
      content: { 'application/json': { schema: BalanceInquiryResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postTransactionstatusRoute = createRoute({
  method: 'post',
  path: '/transactionstatus',
  summary: 'TransactionStatus Request',
  description:
    'Content of the TransactionStatus Request message.\nIt conveys Information requested for status of the last or current Payment, Loyalty or Reversal transaction.',
  request: {
    body: { content: { 'application/json': { schema: TransactionStatusRequestSchema } } },
  },
  responses: {
    200: {
      description:
        'Content of the TransactionStatus Response message.\nIt conveys Information related to the status of the last or current Payment, Loyalty or Reversal transaction.',
      content: { 'application/json': { schema: TransactionStatusResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postAbortRoute = createRoute({
  method: 'post',
  path: '/abort',
  summary: 'Abort Request',
  description:
    'Body of the Abort Request message.\nIt conveys Information requested for identification of the message request carrying the transaction to abort. A message to display on the CustomerError Device could be sent by the Sale System (DisplayOutput).',
  request: { body: { content: { 'application/json': { schema: AbortRequestSchema } } } },
  responses: {
    200: {
      description:
        'A successful `AbortRequest` returns a response with a **200 OK** HTTP status code and no body.',
      content: { 'application/json': { schema: AbortResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postDiagnosisRoute = createRoute({
  method: 'post',
  path: '/diagnosis',
  summary: 'Diagnosis Request',
  description:
    'It conveys Information related to the target POI for which the diagnosis is requested.\nContent of the Diagnosis Request message.',
  request: { body: { content: { 'application/json': { schema: DiagnosisRequestSchema } } } },
  responses: {
    200: {
      description:
        'It conveys the result of the requested diagnosis and a possible message to display on a logical device.\nContent of the Diagnosis Response message.',
      content: { 'application/json': { schema: DiagnosisResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postDisplayRoute = createRoute({
  method: 'post',
  path: '/display',
  summary: 'Display Request',
  description:
    'It conveys the data to display and the way to process the display. It contains the complete content to display. It might contain an operation (the DisplayOutput element) per Display Device type.\nContent of the Display Request message.',
  request: { body: { content: { 'application/json': { schema: DisplayRequestSchema } } } },
  responses: {
    200: {
      description:
        'It conveys the result of the display, parallel to the message request, except if response not required and absent.\nContent of the Display Response message.',
      content: { 'application/json': { schema: DisplayResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postInputRoute = createRoute({
  method: 'post',
  path: '/input',
  summary: 'Input Request',
  description:
    'Content of the `InputRequest` message. It conveys the data to display and how to process it. In addition to the display on the Input Device, it might contain an operation (the `DisplayOutput` element) per Display Device type.',
  request: { body: { content: { 'application/json': { schema: InputRequestSchema } } } },
  responses: {
    200: {
      description:
        'It conveys the result of the input or the result of the outputs, parallel to the message request, except if response not required and absent.\nContent of the Input Response message.',
      content: { 'application/json': { schema: InputResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postPrintRoute = createRoute({
  method: 'post',
  path: '/print',
  summary: 'Print Request',
  description:
    'Content of the Print Request message.\nIt conveys the complete data to print and how to process the print.',
  request: { body: { content: { 'application/json': { schema: PrintRequestSchema } } } },
  responses: {
    200: {
      description:
        'It conveys the result of the print, parallel to the message request, except if response not required and absent.\nContent of the Print Response message.',
      content: { 'application/json': { schema: PrintResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postCardreaderapduRoute = createRoute({
  method: 'post',
  path: '/cardreaderapdu',
  summary: 'CardReaderAPDU Request',
  description:
    'It contains the APDU request to send to the chip of the card, and a possible invitation message to display on the CashierInterface or the CustomerInterface.\nContent of the Card Reader APDU Request message.',
  request: { body: { content: { 'application/json': { schema: CardReaderAPDURequestSchema } } } },
  responses: {
    200: {
      description:
        'Content of the Card Reader APDU Response message.\nIt contains the result of the requested service, APDU response sent by the chip of the card in response to the APDU request.',
      content: { 'application/json': { schema: CardReaderAPDUResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})
