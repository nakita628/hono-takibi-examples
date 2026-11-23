type AccountHolderBalanceRequest = { accountHolderCode: string }
type Amount = { currency: string; value: bigint }
type DetailBalance = {
  balance?: Amount[] | undefined
  onHoldBalance?: Amount[] | undefined
  pendingBalance?: Amount[] | undefined
}
type AccountDetailBalance = {
  accountCode?: string | undefined
  detailBalance?: DetailBalance | undefined
}
type FieldType = {
  field?: string | undefined
  fieldName?:
    | 'accountCode'
    | 'accountHolderCode'
    | 'accountHolderDetails'
    | 'accountNumber'
    | 'accountStateType'
    | 'accountStatus'
    | 'accountType'
    | 'address'
    | 'balanceAccount'
    | 'balanceAccountActive'
    | 'balanceAccountCode'
    | 'balanceAccountId'
    | 'bankAccount'
    | 'bankAccountCode'
    | 'bankAccountName'
    | 'bankAccountUUID'
    | 'bankBicSwift'
    | 'bankCity'
    | 'bankCode'
    | 'bankName'
    | 'bankStatement'
    | 'branchCode'
    | 'businessContact'
    | 'cardToken'
    | 'checkCode'
    | 'city'
    | 'companyRegistration'
    | 'constitutionalDocument'
    | 'controller'
    | 'country'
    | 'countryCode'
    | 'currency'
    | 'currencyCode'
    | 'dateOfBirth'
    | 'description'
    | 'destinationAccountCode'
    | 'document'
    | 'documentContent'
    | 'documentExpirationDate'
    | 'documentIssuerCountry'
    | 'documentIssuerState'
    | 'documentName'
    | 'documentNumber'
    | 'documentType'
    | 'doingBusinessAs'
    | 'drivingLicence'
    | 'drivingLicenceBack'
    | 'drivingLicenceFront'
    | 'drivingLicense'
    | 'email'
    | 'firstName'
    | 'formType'
    | 'fullPhoneNumber'
    | 'gender'
    | 'hopWebserviceUser'
    | 'houseNumberOrName'
    | 'iban'
    | 'idCard'
    | 'idCardBack'
    | 'idCardFront'
    | 'idNumber'
    | 'identityDocument'
    | 'individualDetails'
    | 'infix'
    | 'jobTitle'
    | 'lastName'
    | 'lastReviewDate'
    | 'legalArrangement'
    | 'legalArrangementCode'
    | 'legalArrangementEntity'
    | 'legalArrangementEntityCode'
    | 'legalArrangementLegalForm'
    | 'legalArrangementMember'
    | 'legalArrangementMembers'
    | 'legalArrangementName'
    | 'legalArrangementReference'
    | 'legalArrangementRegistrationNumber'
    | 'legalArrangementTaxNumber'
    | 'legalArrangementType'
    | 'legalBusinessName'
    | 'legalEntity'
    | 'legalEntityType'
    | 'linkedViasVirtualAccount'
    | 'logo'
    | 'merchantAccount'
    | 'merchantCategoryCode'
    | 'merchantHouseNumber'
    | 'merchantReference'
    | 'microDeposit'
    | 'name'
    | 'nationality'
    | 'originalReference'
    | 'ownerCity'
    | 'ownerCountryCode'
    | 'ownerDateOfBirth'
    | 'ownerHouseNumberOrName'
    | 'ownerName'
    | 'ownerPostalCode'
    | 'ownerState'
    | 'ownerStreet'
    | 'passport'
    | 'passportNumber'
    | 'payoutMethod'
    | 'payoutMethodCode'
    | 'payoutSchedule'
    | 'pciSelfAssessment'
    | 'personalData'
    | 'phoneCountryCode'
    | 'phoneNumber'
    | 'postalCode'
    | 'primaryCurrency'
    | 'reason'
    | 'registrationNumber'
    | 'returnUrl'
    | 'schedule'
    | 'shareholder'
    | 'shareholderCode'
    | 'shareholderCodeAndSignatoryCode'
    | 'shareholderCodeOrSignatoryCode'
    | 'shareholderType'
    | 'shareholderTypes'
    | 'shopperInteraction'
    | 'signatory'
    | 'signatoryCode'
    | 'socialSecurityNumber'
    | 'sourceAccountCode'
    | 'splitAccount'
    | 'splitConfigurationUUID'
    | 'splitCurrency'
    | 'splitValue'
    | 'splits'
    | 'stateOrProvince'
    | 'status'
    | 'stockExchange'
    | 'stockNumber'
    | 'stockTicker'
    | 'store'
    | 'storeDetail'
    | 'storeName'
    | 'storeReference'
    | 'street'
    | 'taxId'
    | 'tier'
    | 'tierNumber'
    | 'transferCode'
    | 'ultimateParentCompany'
    | 'ultimateParentCompanyAddressDetails'
    | 'ultimateParentCompanyAddressDetailsCountry'
    | 'ultimateParentCompanyBusinessDetails'
    | 'ultimateParentCompanyBusinessDetailsLegalBusinessName'
    | 'ultimateParentCompanyBusinessDetailsRegistrationNumber'
    | 'ultimateParentCompanyCode'
    | 'ultimateParentCompanyStockExchange'
    | 'ultimateParentCompanyStockNumber'
    | 'ultimateParentCompanyStockNumberOrStockTicker'
    | 'ultimateParentCompanyStockTicker'
    | 'unknown'
    | 'value'
    | 'verificationType'
    | 'virtualAccount'
    | 'visaNumber'
    | 'webAddress'
    | 'year'
    | undefined
  shareholderCode?: string | undefined
}
type ErrorFieldType = {
  errorCode?: number | undefined
  errorDescription?: string | undefined
  fieldType?: FieldType | undefined
}
type AccountHolderBalanceResponse = {
  balancePerAccount?: AccountDetailBalance[] | undefined
  invalidFields?: ErrorFieldType[] | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
  totalBalance?: DetailBalance | undefined
}
type ServiceError = {
  errorCode?: string | undefined
  errorType?: string | undefined
  message?: string | undefined
  pspReference?: string | undefined
  status?: number | undefined
}
type TransactionListForAccount = { accountCode: string; page: number }
type AccountHolderTransactionListRequest = {
  accountHolderCode: string
  transactionListsPerAccount?: TransactionListForAccount[] | undefined
  transactionStatuses?:
    | (
        | 'BalanceNotPaidOutTransfer'
        | 'BalancePlatformFundTransfer'
        | 'BalancePlatformSweep'
        | 'BalancePlatformSweepReturned'
        | 'Chargeback'
        | 'ChargebackCorrection'
        | 'ChargebackCorrectionReceived'
        | 'ChargebackReceived'
        | 'ChargebackReversed'
        | 'ChargebackReversedCorrection'
        | 'ChargebackReversedCorrectionReceived'
        | 'ChargebackReversedReceived'
        | 'Converted'
        | 'CreditClosed'
        | 'CreditFailed'
        | 'CreditReversed'
        | 'CreditReversedReceived'
        | 'CreditSuspended'
        | 'Credited'
        | 'DebitFailed'
        | 'DebitReversedReceived'
        | 'Debited'
        | 'DebitedReversed'
        | 'DepositCorrectionCredited'
        | 'DepositCorrectionDebited'
        | 'DepositCorrectionReceived'
        | 'Fee'
        | 'FeeReceived'
        | 'FundTransfer'
        | 'FundTransferReversed'
        | 'InvoiceDeductionCredited'
        | 'InvoiceDeductionDebited'
        | 'InvoiceDeductionReceived'
        | 'ManualCorrected'
        | 'ManualCorrectionCredited'
        | 'ManualCorrectionDebited'
        | 'MerchantPayin'
        | 'MerchantPayinReceived'
        | 'MerchantPayinReversed'
        | 'Payout'
        | 'PayoutReversed'
        | 'PendingCredit'
        | 'PendingDebit'
        | 'PendingFundTransfer'
        | 'ReCredited'
        | 'ReCreditedReceived'
        | 'SecondChargeback'
        | 'SecondChargebackCorrection'
        | 'SecondChargebackCorrectionReceived'
        | 'SecondChargebackReceived'
      )[]
    | undefined
}
type BankAccountDetail = {
  accountNumber?: string | undefined
  accountType?: string | undefined
  bankAccountName?: string | undefined
  bankAccountReference?: string | undefined
  bankAccountUUID?: string | undefined
  bankBicSwift?: string | undefined
  bankCity?: string | undefined
  bankCode?: string | undefined
  bankName?: string | undefined
  branchCode?: string | undefined
  checkCode?: string | undefined
  countryCode?: string | undefined
  currencyCode?: string | undefined
  iban?: string | undefined
  ownerCity?: string | undefined
  ownerCountryCode?: string | undefined
  ownerDateOfBirth?: string | undefined
  ownerHouseNumberOrName?: string | undefined
  ownerName?: string | undefined
  ownerNationality?: string | undefined
  ownerPostalCode?: string | undefined
  ownerState?: string | undefined
  ownerStreet?: string | undefined
  primaryAccount?: boolean | undefined
  taxId?: string | undefined
  urlForVerification?: string | undefined
}
type Transaction = {
  amount?: Amount | undefined
  bankAccountDetail?: BankAccountDetail | undefined
  captureMerchantReference?: string | undefined
  capturePspReference?: string | undefined
  creationDate?: string | undefined
  description?: string | undefined
  destinationAccountCode?: string | undefined
  disputePspReference?: string | undefined
  disputeReasonCode?: string | undefined
  merchantReference?: string | undefined
  paymentPspReference?: string | undefined
  payoutPspReference?: string | undefined
  pspReference?: string | undefined
  sourceAccountCode?: string | undefined
  transactionStatus?:
    | 'BalanceNotPaidOutTransfer'
    | 'BalancePlatformFundTransfer'
    | 'BalancePlatformSweep'
    | 'BalancePlatformSweepReturned'
    | 'Chargeback'
    | 'ChargebackCorrection'
    | 'ChargebackCorrectionReceived'
    | 'ChargebackReceived'
    | 'ChargebackReversed'
    | 'ChargebackReversedCorrection'
    | 'ChargebackReversedCorrectionReceived'
    | 'ChargebackReversedReceived'
    | 'Converted'
    | 'CreditClosed'
    | 'CreditFailed'
    | 'CreditReversed'
    | 'CreditReversedReceived'
    | 'CreditSuspended'
    | 'Credited'
    | 'DebitFailed'
    | 'DebitReversedReceived'
    | 'Debited'
    | 'DebitedReversed'
    | 'DepositCorrectionCredited'
    | 'DepositCorrectionDebited'
    | 'DepositCorrectionReceived'
    | 'Fee'
    | 'FeeReceived'
    | 'FundTransfer'
    | 'FundTransferReversed'
    | 'InvoiceDeductionCredited'
    | 'InvoiceDeductionDebited'
    | 'InvoiceDeductionReceived'
    | 'ManualCorrected'
    | 'ManualCorrectionCredited'
    | 'ManualCorrectionDebited'
    | 'MerchantPayin'
    | 'MerchantPayinReceived'
    | 'MerchantPayinReversed'
    | 'Payout'
    | 'PayoutReversed'
    | 'PendingCredit'
    | 'PendingDebit'
    | 'PendingFundTransfer'
    | 'ReCredited'
    | 'ReCreditedReceived'
    | 'SecondChargeback'
    | 'SecondChargebackCorrection'
    | 'SecondChargebackCorrectionReceived'
    | 'SecondChargebackReceived'
    | undefined
  transferCode?: string | undefined
}
type AccountTransactionList = {
  accountCode?: string | undefined
  hasNextPage?: boolean | undefined
  transactions?: Transaction[] | undefined
}
type AccountHolderTransactionListResponse = {
  accountTransactionLists?: AccountTransactionList[] | undefined
  invalidFields?: ErrorFieldType[] | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
}
type SplitAmount = { currency?: string | undefined; value: bigint }
type Split = {
  account?: string | undefined
  amount?: SplitAmount | undefined
  description?: string | undefined
  reference?: string | undefined
  type:
    | 'AcquiringFees'
    | 'AdyenCommission'
    | 'AdyenFees'
    | 'AdyenMarkup'
    | 'BalanceAccount'
    | 'Commission'
    | 'Default'
    | 'Interchange'
    | 'MarketPlace'
    | 'PaymentFee'
    | 'Remainder'
    | 'SchemeFee'
    | 'Surcharge'
    | 'Tip'
    | 'VAT'
}
type DebitAccountHolderRequest = {
  accountHolderCode: string
  amount: Amount
  bankAccountUUID: string
  description?: string | undefined
  merchantAccount: string
  splits: Split[]
}
type DebitAccountHolderResponse = {
  accountHolderCode?: string | undefined
  bankAccountUUID?: string | undefined
  invalidFields?: ErrorFieldType[] | undefined
  merchantReferences?: string[] | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
}
type PayoutAccountHolderRequest = {
  accountCode: string
  accountHolderCode: string
  amount?: Amount | undefined
  bankAccountUUID?: string | undefined
  description?: string | undefined
  merchantReference?: string | undefined
  payoutMethodCode?: string | undefined
  payoutSpeed?: 'INSTANT' | 'SAME_DAY' | 'STANDARD' | undefined
}
type PayoutAccountHolderResponse = {
  bankAccountUUID?: string | undefined
  invalidFields?: ErrorFieldType[] | undefined
  merchantReference?: string | undefined
  payoutSpeed?: 'INSTANT' | 'SAME_DAY' | 'STANDARD' | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
}
type RefundFundsTransferRequest = {
  amount: Amount
  merchantReference?: string | undefined
  originalReference: string
}
type RefundFundsTransferResponse = {
  invalidFields?: ErrorFieldType[] | undefined
  merchantReference?: string | undefined
  message?: string | undefined
  originalReference?: string | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
}
type RefundNotPaidOutTransfersRequest = { accountCode: string; accountHolderCode: string }
type RefundNotPaidOutTransfersResponse = {
  invalidFields?: ErrorFieldType[] | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
}
type SetupBeneficiaryRequest = {
  destinationAccountCode: string
  merchantReference?: string | undefined
  sourceAccountCode: string
}
type SetupBeneficiaryResponse = {
  invalidFields?: ErrorFieldType[] | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
}
type TransferFundsRequest = {
  amount: Amount
  destinationAccountCode: string
  merchantReference?: string | undefined
  sourceAccountCode: string
  transferCode: string
}
type TransferFundsResponse = {
  invalidFields?: ErrorFieldType[] | undefined
  merchantReference?: string | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accountHolderBalance': {
      $post:
        | {
            input: { json: AccountHolderBalanceRequest }
            output: AccountHolderBalanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AccountHolderBalanceRequest }
            output: AccountHolderBalanceResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: AccountHolderBalanceRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AccountHolderBalanceRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AccountHolderBalanceRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AccountHolderBalanceRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: AccountHolderBalanceRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accountHolderTransactionList': {
      $post:
        | {
            input: { json: AccountHolderTransactionListRequest }
            output: AccountHolderTransactionListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AccountHolderTransactionListRequest }
            output: AccountHolderTransactionListResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: AccountHolderTransactionListRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AccountHolderTransactionListRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AccountHolderTransactionListRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AccountHolderTransactionListRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: AccountHolderTransactionListRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/debitAccountHolder': {
      $post:
        | {
            input: { json: DebitAccountHolderRequest }
            output: DebitAccountHolderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DebitAccountHolderRequest }
            output: DebitAccountHolderResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: DebitAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DebitAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DebitAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DebitAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: DebitAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/payoutAccountHolder': {
      $post:
        | {
            input: { json: PayoutAccountHolderRequest }
            output: PayoutAccountHolderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PayoutAccountHolderRequest }
            output: PayoutAccountHolderResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: PayoutAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PayoutAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PayoutAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PayoutAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: PayoutAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/refundFundsTransfer': {
      $post:
        | {
            input: { json: RefundFundsTransferRequest }
            output: RefundFundsTransferResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RefundFundsTransferRequest }
            output: RefundFundsTransferResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: RefundFundsTransferRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RefundFundsTransferRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RefundFundsTransferRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: RefundFundsTransferRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: RefundFundsTransferRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/refundNotPaidOutTransfers': {
      $post:
        | {
            input: { json: RefundNotPaidOutTransfersRequest }
            output: RefundNotPaidOutTransfersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RefundNotPaidOutTransfersRequest }
            output: RefundNotPaidOutTransfersResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: RefundNotPaidOutTransfersRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RefundNotPaidOutTransfersRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RefundNotPaidOutTransfersRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: RefundNotPaidOutTransfersRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: RefundNotPaidOutTransfersRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/setupBeneficiary': {
      $post:
        | {
            input: { json: SetupBeneficiaryRequest }
            output: SetupBeneficiaryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SetupBeneficiaryRequest }
            output: SetupBeneficiaryResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: SetupBeneficiaryRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SetupBeneficiaryRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SetupBeneficiaryRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SetupBeneficiaryRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: SetupBeneficiaryRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/transferFunds': {
      $post:
        | {
            input: { json: TransferFundsRequest }
            output: TransferFundsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferFundsRequest }
            output: TransferFundsResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: TransferFundsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TransferFundsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TransferFundsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: TransferFundsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: TransferFundsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
