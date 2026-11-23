type SaleSoftware = {
  ManufacturerID: string
  ApplicationName: string
  SoftwareVersion: string
  CertificationCode: string
}
type SaleTerminalData = { TotalsGroupID?: string | undefined }
type TokenRequestedType = 'Transaction' | 'Customer'
type CustomerOrderReq = ('Open' | 'Closed' | 'Both')[]
type LoginRequest = {
  DateTime: string
  SaleSoftware: SaleSoftware
  SaleTerminalData?: SaleTerminalData | undefined
  TrainingModeFlag?: boolean | undefined
  OperatorLanguage: string
  OperatorID?: string | undefined
  ShiftNumber?: string | undefined
  TokenRequestedType?: TokenRequestedType | undefined
  CustomerOrderReq?: CustomerOrderReq | undefined
  POISerialNumber?: string | undefined
}
type Result = 'Success' | 'Failure' | 'Partial'
type ErrorCondition =
  | 'Aborted'
  | 'Busy'
  | 'Cancel'
  | 'DeviceOut'
  | 'InsertedCard'
  | 'InProgress'
  | 'LoggedOut'
  | 'MessageFormat'
  | 'NotAllowed'
  | 'NotFound'
  | 'PaymentRestriction'
  | 'Refusal'
  | 'UnavailableDevice'
  | 'UnavailableService'
  | 'InvalidCard'
  | 'UnreachableHost'
  | 'WrongPIN'
type Response = {
  Result: Result
  ErrorCondition?: ErrorCondition | undefined
  AdditionalResponse?: string | undefined
}
type POISoftware = {
  ManufacturerID: string
  ApplicationName: string
  SoftwareVersion: string
  CertificationCode: string
}
type GlobalStatus = 'OK' | 'Busy' | 'Maintenance' | 'Unreachable'
type PrinterStatus = 'OK' | 'PaperLow' | 'NoPaper' | 'PaperJam' | 'OutOfOrder'
type POIStatus = {
  GlobalStatus: GlobalStatus
  SecurityOKFlag?: boolean | undefined
  PEDOKFlag?: boolean | undefined
  CardReaderOKFlag?: boolean | undefined
  PrinterStatus?: PrinterStatus | undefined
  CommunicationOKFlag?: boolean | undefined
  FraudPreventionFlag?: boolean | undefined
}
type POISystemData = {
  DateTime: string
  POISoftware: POISoftware
  POIStatus?: POIStatus | undefined
}
type LoginResponse = {
  Response: Response
  POISystemData?: POISystemData | undefined
  TokenRequestStatus?: boolean | undefined
}
type LogoutRequest = { MaintenanceAllowed?: boolean | undefined }
type LogoutResponse = { Response: Response }
type TransactionAction = 'StartTransaction' | 'AbortTransaction'
type ServicesEnabled = ('CardAcquisition' | 'Payment' | 'Loyalty')[]
type Device = 'CashierDisplay' | 'CustomerDisplay' | 'CashierInput' | 'CustomerInput'
type InfoQualify =
  | 'Status'
  | 'Error'
  | 'Display'
  | 'Sound'
  | 'Input'
  | 'POIReplication'
  | 'CustomerAssistance'
  | 'Receipt'
  | 'Document'
  | 'Voucher'
type OutputFormat = 'MessageRef' | 'Text' | 'XHTML' | 'BarCode'
type PredefinedContent = { ReferenceID: string; Language?: string | undefined }
type CharacterWidth = 'SingleWidth' | 'DoubleWidth'
type CharacterHeight = 'SingleHeight' | 'DoubleHeight' | 'HalfHeight'
type CharacterStyle = 'Normal' | 'Bold' | 'Italic' | 'Underline'
type Alignment = 'Left' | 'Right' | 'Centred' | 'Justified'
type OutputText = {
  Text: string
  CharacterSet?: number | undefined
  StartRow?: number | undefined
  StartColumn?: number | undefined
  CharacterWidth?: CharacterWidth | undefined
  CharacterHeight?: CharacterHeight | undefined
  CharacterStyle?: CharacterStyle | undefined
  Alignment?: Alignment | undefined
  EndOfLineFlag?: boolean | undefined
}
type OutputBarcode = { BarcodeValue: string }
type OutputContent = {
  OutputFormat: OutputFormat
  PredefinedContent?: PredefinedContent | undefined
  OutputText?: OutputText[] | undefined
  OutputXHTML?: string | undefined
  OutputBarcode?: OutputBarcode | undefined
}
type MenuEntryTag = 'Selectable' | 'NonSelectable' | 'SubMenu' | 'NonSelectableSubMenu'
type MenuEntry = {
  MenuEntryTag?: MenuEntryTag | undefined
  DefaultSelectedFlag?: boolean | undefined
  OutputFormat: OutputFormat
  PredefinedContent?: PredefinedContent | undefined
  OutputText?: OutputText[] | undefined
  OutputXHTML?: string | undefined
}
type DisplayOutput = {
  ResponseRequiredFlag?: boolean | undefined
  MinimumDisplayTime?: number | undefined
  Device: Device
  InfoQualify: InfoQualify
  OutputContent: OutputContent
  MenuEntry?: MenuEntry[] | undefined
  OutputSignature?: string | undefined
}
type EnableServiceRequest = {
  TransactionAction: TransactionAction
  ServicesEnabled?: ServicesEnabled | undefined
  DisplayOutput?: DisplayOutput | undefined
}
type EnableServiceResponse = { Response: Response }
type AdminRequest = { ServiceIdentification?: string | undefined }
type AdminResponse = { Response: Response }
type TransactionIDType = { TransactionID: string; TimeStamp: string }
type SaleToIssuerData = { StatementReference?: string | undefined }
type SaleData = {
  OperatorID?: string | undefined
  OperatorLanguage?: string | undefined
  ShiftNumber?: string | undefined
  SaleTransactionID: TransactionIDType
  SaleReferenceID?: string | undefined
  SaleTerminalData?: SaleTerminalData | undefined
  TokenRequestedType?: TokenRequestedType | undefined
  CustomerOrderID?: string | undefined
  CustomerOrderReq?: CustomerOrderReq | undefined
  SaleToPOIData?: string | undefined
  SaleToAcquirerData?: string | undefined
  SaleToIssuerData?: SaleToIssuerData | undefined
}
type AmountsReq = {
  Currency: string
  RequestedAmount: number
  CashBackAmount?: number | undefined
  TipAmount?: number | undefined
  PaidAmount?: number | undefined
  MinimumAmountToDeliver?: number | undefined
  MaximumCashBackAmount?: number | undefined
  MinimumSplitAmount?: number | undefined
}
type OriginalPOITransaction = {
  SaleID?: string | undefined
  POIID?: string | undefined
  POITransactionID?: TransactionIDType | undefined
  ReuseCardDataFlag?: boolean | undefined
  ApprovalCode?: string | undefined
  AcquirerID?: string | undefined
  AmountValue?: number | undefined
  HostTransactionID?: TransactionIDType | undefined
}
type LoyaltyHandling = 'Forbidden' | 'Processed' | 'Allowed' | 'Proposed' | 'Required'
type ForceEntryMode = (
  | 'RFID'
  | 'Keyed'
  | 'Manual'
  | 'File'
  | 'Scanned'
  | 'MagStripe'
  | 'ICC'
  | 'SynchronousICC'
  | 'Tapped'
  | 'Contactless'
  | 'CheckReader'
)[]
type TransactionConditions = {
  AllowedPaymentBrand?: string[] | undefined
  AcquirerID?: string[] | undefined
  DebitPreferredFlag?: boolean | undefined
  AllowedLoyaltyBrand?: string[] | undefined
  LoyaltyHandling?: LoyaltyHandling | undefined
  CustomerLanguage?: string | undefined
  ForceOnlineFlag?: boolean | undefined
  ForceEntryMode?: ForceEntryMode | undefined
  MerchantCategoryCode?: string | undefined
}
type PaymentTransaction = {
  AmountsReq: AmountsReq
  OriginalPOITransaction?: OriginalPOITransaction | undefined
  TransactionConditions?: TransactionConditions | undefined
}
type PaymentType =
  | 'Normal'
  | 'Refund'
  | 'OneTimeReservation'
  | 'FirstReservation'
  | 'UpdateReservation'
  | 'Completion'
  | 'CashAdvance'
  | 'CashDeposit'
  | 'Recurring'
  | 'Instalment'
  | 'IssuerInstalment'
  | 'PaidOut'
type InstalmentType = 'DeferredInstalments' | 'EqualInstalments' | 'InequalInstalments'
type PeriodUnit = 'Daily' | 'Weekly' | 'Monthly' | 'Annual'
type Instalment = {
  InstalmentType?: InstalmentType | undefined
  SequenceNumber?: number | undefined
  PlanID?: string | undefined
  Period?: number | undefined
  PeriodUnit?: PeriodUnit | undefined
  FirstPaymentDate?: string | undefined
  TotalNbOfPayments?: number | undefined
  CumulativeAmount?: number | undefined
  FirstAmount?: number | undefined
  Charges?: number | undefined
}
type PaymentInstrumentType = 'Card' | 'Check' | 'Mobile' | 'StoredValue' | 'Cash'
type EntryMode = (
  | 'RFID'
  | 'Keyed'
  | 'Manual'
  | 'File'
  | 'Scanned'
  | 'MagStripe'
  | 'ICC'
  | 'SynchronousICC'
  | 'Tapped'
  | 'Contactless'
  | 'Mobile'
)[]
type TrackFormat = 'ISO' | 'JIS-I' | 'JIS-II' | 'AAMVA' | 'CMC-7' | 'E-13B'
type TrackData = {
  TrackNumb?: number | undefined
  TrackFormat?: TrackFormat | undefined
  TrackValue: string
}
type SensitiveCardData = {
  PAN?: string | undefined
  CardSeqNumb?: string | undefined
  ExpiryDate?: string | undefined
  TrackData?: TrackData[] | undefined
}
type PaymentToken = {
  TokenRequestedType: TokenRequestedType
  TokenValue: string
  ExpiryDateTime?: string | undefined
}
type CardData = {
  PaymentBrand?: string | undefined
  MaskedPan?: string | undefined
  PaymentAccountRef?: string | undefined
  EntryMode?: EntryMode | undefined
  CardCountryCode?: string | undefined
  ProtectedCardData?: string | undefined
  SensitiveCardData?: SensitiveCardData | undefined
  PaymentToken?: PaymentToken | undefined
}
type TypeCode = 'Personal' | 'Company'
type CheckData = {
  BankID?: string | undefined
  AccountNumber?: string | undefined
  CheckNumber?: string | undefined
  TrackData?: TrackData | undefined
  CheckCardNumber?: string | undefined
  TypeCode?: TypeCode | undefined
  Country?: string | undefined
}
type GeographicCoordinates = { Latitude: string; Longitude: string }
type UTMCoordinates = { UTMZone: string; UTMEastward: string; UTMNorthward: string }
type Geolocation = {
  GeographicCoordinates?: GeographicCoordinates | undefined
  UTMCoordinates?: UTMCoordinates | undefined
}
type SensitiveMobileData = { MSISDN: string; IMSI?: string | undefined; IMEI?: string | undefined }
type MobileData = {
  MobileCountryCode?: string | undefined
  MobileNetworkCode?: string | undefined
  MaskedMSISDN?: string | undefined
  Geolocation?: Geolocation | undefined
  ProtectedMobileData?: string | undefined
  SensitiveMobileData?: SensitiveMobileData | undefined
}
type StoredValueAccountType = 'GiftCard' | 'PhoneCard' | 'Other'
type IdentificationType = 'PAN' | 'ISOTrack2' | 'BarCode' | 'AccountNumber' | 'PhoneNumber'
type StoredValueAccountID = {
  StoredValueAccountType: StoredValueAccountType
  StoredValueProvider?: string | undefined
  OwnerName?: string | undefined
  ExpiryDate?: string | undefined
  EntryMode: EntryMode
  IdentificationType: IdentificationType
  StoredValueID: string
}
type PaymentInstrumentData = {
  PaymentInstrumentType: PaymentInstrumentType
  ProtectedCardData?: string | undefined
  CardData?: CardData | undefined
  CheckData?: CheckData | undefined
  MobileData?: MobileData | undefined
  StoredValueAccountID?: StoredValueAccountID | undefined
}
type PaymentData = {
  PaymentType?: PaymentType | undefined
  SplitPaymentFlag?: boolean | undefined
  RequestedValidityDate?: string | undefined
  CardAcquisitionReference?: TransactionIDType | undefined
  Instalment?: Instalment | undefined
  PaymentInstrumentData?: PaymentInstrumentData | undefined
}
type IdentificationSupport = 'NoCard' | 'LoyaltyCard' | 'HybridCard' | 'LinkedCard'
type LoyaltyAccountID = {
  EntryMode: EntryMode
  IdentificationType: IdentificationType
  IdentificationSupport?: IdentificationSupport | undefined
  LoyaltyID: string
}
type LoyaltyData = {
  CardAcquisitionReference?: TransactionIDType | undefined
  LoyaltyAccountID?: LoyaltyAccountID | undefined
}
type PaymentRequest = {
  SaleData: SaleData
  PaymentTransaction: PaymentTransaction
  PaymentData?: PaymentData | undefined
  LoyaltyData?: LoyaltyData[] | undefined
}
type POIData = { POITransactionID: TransactionIDType; POIReconciliationID?: string | undefined }
type AmountsResp = {
  Currency?: string | undefined
  AuthorizedAmount: number
  TotalRebatesAmount?: number | undefined
  TotalFeesAmount?: number | undefined
  CashBackAmount?: number | undefined
  TipAmount?: number | undefined
}
type ConvertedAmount = { AmountValue: number; Currency: string }
type CurrencyConversion = {
  CustomerApprovedFlag?: boolean | undefined
  ConvertedAmount: ConvertedAmount
  Rate?: number | undefined
  Markup?: number | undefined
  Commission?: number | undefined
  Declaration?: string | undefined
}
type AreaSize = { X: string; Y: string }
type Point = { X: string; Y: string }
type CapturedSignature = { AreaSize?: AreaSize | undefined; SignaturePoint?: Point[] | undefined }
type AuthenticationMethod = (
  | 'Bypass'
  | 'ManualVerification'
  | 'MerchantAuthentication'
  | 'OfflinePIN'
  | 'OnlinePIN'
  | 'PaperSignature'
  | 'SecuredChannel'
  | 'SecureCertificate'
  | 'SecureNoCertificate'
  | 'SignatureCapture'
  | 'UnknownMethod'
)[]
type PaymentAcquirerData = {
  AcquirerID?: string | undefined
  MerchantID: string
  AcquirerPOIID: string
  AcquirerTransactionID?: TransactionIDType | undefined
  ApprovalCode?: string | undefined
  HostReconciliationID?: string | undefined
}
type PaymentResult = {
  PaymentType?: PaymentType | undefined
  PaymentInstrumentData?: PaymentInstrumentData | undefined
  AmountsResp?: AmountsResp | undefined
  Instalment?: Instalment | undefined
  CurrencyConversion?: CurrencyConversion[] | undefined
  MerchantOverrideFlag?: boolean | undefined
  CapturedSignature?: CapturedSignature | undefined
  ProtectedSignature?: string | undefined
  CustomerLanguage?: string | undefined
  OnlineFlag?: boolean | undefined
  AuthenticationMethod?: AuthenticationMethod | undefined
  ValidityDate?: string | undefined
  PaymentAcquirerData?: PaymentAcquirerData | undefined
}
type LoyaltyAccount = { LoyaltyAccountID: LoyaltyAccountID; LoyaltyBrand?: string | undefined }
type LoyaltyAcquirerData = {
  LoyaltyAcquirerID?: string | undefined
  ApprovalCode?: string | undefined
  LoyaltyTransactionID?: TransactionIDType | undefined
  HostReconciliationID?: string | undefined
}
type LoyaltyResult = {
  LoyaltyAccount: LoyaltyAccount
  CurrentBalance?: number | undefined
  LoyaltyAcquirerData?: LoyaltyAcquirerData | undefined
}
type DocumentQualifier =
  | 'SaleReceipt'
  | 'CashierReceipt'
  | 'CustomerReceipt'
  | 'Document'
  | 'Voucher'
  | 'Journal'
type PaymentReceipt = {
  DocumentQualifier: DocumentQualifier
  IntegratedPrintFlag?: boolean | undefined
  RequiredSignatureFlag?: boolean | undefined
  OutputContent: OutputContent
}
type PaymentResponse = {
  Response: Response
  SaleData: SaleData
  POIData: POIData
  PaymentResult?: PaymentResult | undefined
  LoyaltyResult?: LoyaltyResult[] | undefined
  PaymentReceipt?: PaymentReceipt[] | undefined
}
type CardAcquisitionTransaction = {
  AllowedPaymentBrand?: string[] | undefined
  AllowedLoyaltyBrand?: string[] | undefined
  LoyaltyHandling?: LoyaltyHandling | undefined
  CustomerLanguage?: string | undefined
  ForceEntryMode?: ForceEntryMode | undefined
  ForceCustomerSelectionFlag?: boolean | undefined
  TotalAmount?: number | undefined
  PaymentType?: PaymentType | undefined
  CashBackFlag?: boolean | undefined
}
type CardAcquisitionRequest = {
  SaleData: SaleData
  CardAcquisitionTransaction: CardAcquisitionTransaction
}
type CardAcquisitionResponse = {
  Response: Response
  SaleData: SaleData
  POIData: POIData
  PaymentBrand?: string[] | undefined
  PaymentInstrumentData?: PaymentInstrumentData | undefined
  LoyaltyAccount?: LoyaltyAccount[] | undefined
}
type StoredValueTransactionType =
  | 'Reserve'
  | 'Activate'
  | 'Load'
  | 'Unload'
  | 'Reverse'
  | 'Duplicate'
type StoredValueData = {
  StoredValueProvider?: string | undefined
  StoredValueTransactionType: StoredValueTransactionType
  StoredValueAccountID?: StoredValueAccountID | undefined
  OriginalPOITransaction?: OriginalPOITransaction | undefined
  ProductCode?: string | undefined
  EanUpc?: string | undefined
  ItemAmount?: number | undefined
  Currency?: string | undefined
}
type StoredValueRequest = { SaleData: SaleData; StoredValueData: StoredValueData[] }
type StoredValueAccountStatus = {
  StoredValueAccountID: StoredValueAccountID
  CurrentBalance?: number | undefined
}
type StoredValueResult = {
  StoredValueTransactionType: StoredValueTransactionType
  ProductCode?: string | undefined
  EanUpc?: string | undefined
  ItemAmount?: number | undefined
  Currency?: string | undefined
  StoredValueAccountStatus?: StoredValueAccountStatus | undefined
  HostTransactionID?: TransactionIDType | undefined
}
type StoredValueResponse = {
  Response: Response
  SaleData: SaleData
  POIData: POIData
  StoredValueResult?: StoredValueResult[] | undefined
  PaymentReceipt?: PaymentReceipt[] | undefined
}
type ReversalReason = 'CustCancel' | 'MerchantCancel' | 'Malfunction' | 'Unable2Compl'
type ReversalRequest = {
  SaleData?: SaleData | undefined
  OriginalPOITransaction: OriginalPOITransaction
  ReversedAmount?: number | undefined
  ReversalReason: ReversalReason
}
type ReversalResponse = {
  Response: Response
  POIData?: POIData | undefined
  OriginalPOITransaction?: OriginalPOITransaction | undefined
  ReversedAmount?: number | undefined
  PaymentReceipt?: PaymentReceipt[] | undefined
}
type ReconciliationType =
  | 'SaleReconciliation'
  | 'AcquirerSynchronisation'
  | 'AcquirerReconciliation'
  | 'PreviousReconciliation'
type ReconciliationRequest = {
  ReconciliationType: ReconciliationType
  AcquirerID?: string[] | undefined
  POIReconciliationID?: string | undefined
}
type TransactionType =
  | 'Debit'
  | 'Credit'
  | 'ReverseDebit'
  | 'ReverseCredit'
  | 'OneTimeReservation'
  | 'CompletedDeffered'
  | 'FirstReservation'
  | 'UpdateReservation'
  | 'CompletedReservation'
  | 'CashAdvance'
  | 'IssuerInstalment'
  | 'Declined'
  | 'Failed'
  | 'Award'
  | 'ReverseAward'
  | 'Redemption'
  | 'ReverseRedemption'
  | 'Rebate'
  | 'ReverseRebate'
type PaymentTotals = {
  TransactionType: TransactionType
  TransactionCount: number
  TransactionAmount: number
}
type TransactionTotals = {
  PaymentInstrumentType: PaymentInstrumentType
  AcquirerID?: string | undefined
  HostReconciliationID?: string | undefined
  CardBrand?: string | undefined
  POIID?: string | undefined
  SaleID?: string | undefined
  OperatorID?: string | undefined
  ShiftNumber?: string | undefined
  TotalsGroupID?: string | undefined
  PaymentCurrency?: string | undefined
  PaymentTotals?: PaymentTotals[] | undefined
}
type ReconciliationResponse = {
  Response: Response
  ReconciliationType: ReconciliationType
  POIReconciliationID?: string | undefined
  TransactionTotals?: TransactionTotals[] | undefined
}
type TotalDetails = ('POIID' | 'SaleID' | 'OperatorID' | 'ShiftNumber' | 'TotalsGroupID')[]
type TotalFilter = {
  POIID?: string | undefined
  SaleID?: string | undefined
  OperatorID?: string | undefined
  ShiftNumber?: string | undefined
  TotalsGroupID?: string | undefined
}
type GetTotalsRequest = {
  TotalDetails?: TotalDetails | undefined
  TotalFilter?: TotalFilter | undefined
}
type GetTotalsResponse = {
  Response: Response
  POIReconciliationID: string
  TransactionTotals?: TransactionTotals[] | undefined
}
type AccountType =
  | 'Default'
  | 'Savings'
  | 'Checking'
  | 'CreditCard'
  | 'Universal'
  | 'Investment'
  | 'CardTotals'
  | 'EpurseCard'
type PaymentAccountReq = {
  AccountType?: AccountType | undefined
  CardAcquisitionReference?: TransactionIDType | undefined
  PaymentInstrumentData?: PaymentInstrumentData | undefined
}
type LoyaltyAccountReq = {
  CardAcquisitionReference?: TransactionIDType | undefined
  LoyaltyAccountID?: LoyaltyAccountID | undefined
}
type BalanceInquiryRequest = {
  PaymentAccountReq?: PaymentAccountReq | undefined
  LoyaltyAccountReq?: LoyaltyAccountReq | undefined
}
type PaymentAccountStatus = {
  PaymentInstrumentData?: PaymentInstrumentData | undefined
  CurrentBalance?: number | undefined
  Currency?: string | undefined
  PaymentAcquirerData?: PaymentAcquirerData | undefined
}
type BalanceInquiryResponse = {
  Response: Response
  PaymentAccountStatus?: PaymentAccountStatus | undefined
  PaymentReceipt?: PaymentReceipt[] | undefined
}
type MessageCategory =
  | 'Abort'
  | 'Admin'
  | 'BalanceInquiry'
  | 'CardAcquisition'
  | 'Diagnosis'
  | 'Display'
  | 'EnableService'
  | 'Event'
  | 'GetTotals'
  | 'Input'
  | 'InputUpdate'
  | 'Login'
  | 'Logout'
  | 'Loyalty'
  | 'Payment'
  | 'Print'
  | 'Reconciliation'
  | 'Reversal'
  | 'StoredValue'
  | 'TransactionStatus'
  | 'None'
type MessageReference = {
  MessageCategory?: MessageCategory | undefined
  ServiceID?: string | undefined
  DeviceID?: string | undefined
  SaleID?: string | undefined
  POIID?: string | undefined
}
type TransactionStatusRequest = {
  MessageReference?: MessageReference | undefined
  ReceiptReprintFlag?: boolean | undefined
  DocumentQualifier?: DocumentQualifier[] | undefined
}
type MessageClass = 'Service' | 'Device' | 'Event'
type MessageType = 'Request' | 'Response' | 'Notification'
type MessageHeader = {
  ProtocolVersion?: string | undefined
  MessageClass: MessageClass
  MessageCategory: MessageCategory
  MessageType: MessageType
  ServiceID?: string | undefined
  DeviceID?: string | undefined
  SaleID: string
  POIID: string
}
type LoyaltyResponse = {
  Response: Response
  SaleData: SaleData
  POIData: POIData
  LoyaltyResult?: LoyaltyResult[] | undefined
  PaymentReceipt?: PaymentReceipt[] | undefined
}
type CardReaderAPDUResponse = {
  Response: Response
  APDUData?: string | undefined
  CardStatusWords: string
}
type RepeatedResponseMessageBody = {
  LoyaltyResponse?: LoyaltyResponse | undefined
  PaymentResponse?: PaymentResponse | undefined
  ReversalResponse?: ReversalResponse | undefined
  StoredValueResponse?: StoredValueResponse | undefined
  CardAcquisitionResponse?: CardAcquisitionResponse | undefined
  CardReaderAPDUResponse?: CardReaderAPDUResponse | undefined
}
type RepeatedMessageResponse = {
  MessageHeader: MessageHeader
  RepeatedResponseMessageBody: RepeatedResponseMessageBody
}
type TransactionStatusResponse = {
  Response: Response
  MessageReference?: MessageReference | undefined
  RepeatedMessageResponse?: RepeatedMessageResponse | undefined
}
type AbortRequest = {
  MessageReference: MessageReference
  AbortReason: string
  DisplayOutput?: DisplayOutput | undefined
}
type AbortResponse = { [x: string]: unknown }
type DiagnosisRequest = {
  POIID?: string | undefined
  HostDiagnosisFlag?: boolean | undefined
  AcquirerID?: string[] | undefined
}
type HostStatus = { AcquirerID: string; IsReachableFlag?: boolean | undefined }
type DiagnosisResponse = {
  Response: Response
  POIStatus?: POIStatus | undefined
  HostStatus?: HostStatus[] | undefined
}
type DisplayRequest = { DisplayOutput: DisplayOutput[] }
type OutputResult = { Device: Device; InfoQualify: InfoQualify; Response: Response }
type DisplayResponse = { OutputResult: OutputResult[] }
type InputCommand =
  | 'GetAnyKey'
  | 'GetConfirmation'
  | 'SiteManager'
  | 'TextString'
  | 'DigitString'
  | 'DecimalString'
  | 'GetFunctionKey'
  | 'GetMenuEntry'
  | 'Password'
type InputData = {
  Device: Device
  InfoQualify: InfoQualify
  InputCommand: InputCommand
  NotifyCardInputFlag?: boolean | undefined
  MaxInputTime?: number | undefined
  ImmediateResponseFlag?: boolean | undefined
  MinLength?: number | undefined
  MaxLength?: number | undefined
  MaxDecimalLength?: number | undefined
  WaitUserValidationFlag?: boolean | undefined
  DefaultInputString?: string | undefined
  DefaultLayoutString?: string | undefined
  StringMask?: string | undefined
  FromRightToLeftFlag?: boolean | undefined
  MaskCharactersFlag?: boolean | undefined
  BeepKeyFlag?: boolean | undefined
  GlobalCorrectionFlag?: boolean | undefined
  DisableCancelFlag?: boolean | undefined
  DisableCorrectFlag?: boolean | undefined
  DisableValidFlag?: boolean | undefined
  MenuBackFlag?: boolean | undefined
}
type InputRequest = { DisplayOutput?: DisplayOutput | undefined; InputData: InputData }
type Input = {
  InputCommand: InputCommand
  ConfirmedFlag?: boolean | undefined
  FunctionKey?: string | undefined
  TextInput?: string | undefined
  DigitInput?: string | undefined
  Password?: string | undefined
  MenuEntryNumber?: number[] | undefined
}
type InputResult = {
  Device: Device
  InfoQualify: InfoQualify
  Response: Response
  Input?: Input | undefined
}
type InputResponse = { OutputResult?: OutputResult | undefined; InputResult: InputResult }
type ResponseMode = 'NotRequired' | 'Immediate' | 'PrintEnd' | 'SoundEnd'
type PrintOutput = {
  DocumentQualifier: DocumentQualifier
  ResponseMode: ResponseMode
  IntegratedPrintFlag?: boolean | undefined
  RequiredSignatureFlag?: boolean | undefined
  OutputContent: OutputContent
}
type PrintRequest = { PrintOutput: PrintOutput }
type PrintResponse = { DocumentQualifier: DocumentQualifier; Response: Response }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/login': {
      $post: {
        input: { json: LoginRequest }
        output: LoginResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/logout': {
      $post: {
        input: { json: LogoutRequest }
        output: LogoutResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/enableservice': {
      $post: {
        input: { json: EnableServiceRequest }
        output: EnableServiceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin': {
      $post: {
        input: { json: AdminRequest }
        output: AdminResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/payment': {
      $post: {
        input: { json: PaymentRequest }
        output: PaymentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cardacquisition': {
      $post: {
        input: { json: CardAcquisitionRequest }
        output: CardAcquisitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/storedvalue': {
      $post: {
        input: { json: StoredValueRequest }
        output: StoredValueResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reversal': {
      $post: {
        input: { json: ReversalRequest }
        output: ReversalResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reconciliation': {
      $post: {
        input: { json: ReconciliationRequest }
        output: ReconciliationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gettotals': {
      $post: {
        input: { json: GetTotalsRequest }
        output: GetTotalsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/balanceinquiry': {
      $post: {
        input: { json: BalanceInquiryRequest }
        output: BalanceInquiryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/transactionstatus': {
      $post: {
        input: { json: TransactionStatusRequest }
        output: TransactionStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/abort': {
      $post: {
        input: { json: AbortRequest }
        output: AbortResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/diagnosis': {
      $post: {
        input: { json: DiagnosisRequest }
        output: DiagnosisResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/display': {
      $post: {
        input: { json: DisplayRequest }
        output: DisplayResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/input': {
      $post: {
        input: { json: InputRequest }
        output: InputResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/print': {
      $post: {
        input: { json: PrintRequest }
        output: PrintResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
