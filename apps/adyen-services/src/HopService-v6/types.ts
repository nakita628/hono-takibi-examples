type CollectInformation = {
  bankDetails?: boolean | undefined
  businessDetails?: boolean | undefined
  individualDetails?: boolean | undefined
  legalArrangementDetails?: boolean | undefined
  pciQuestionnaire?: boolean | undefined
  shareholderDetails?: boolean | undefined
}
type ShowPages = {
  bankDetailsSummaryPage?: boolean | undefined
  bankVerificationPage?: boolean | undefined
  businessDetailsSummaryPage?: boolean | undefined
  checksOverviewPage?: boolean | undefined
  individualDetailsSummaryPage?: boolean | undefined
  legalArrangementsDetailsSummaryPage?: boolean | undefined
  manualBankAccountPage?: boolean | undefined
  shareholderDetailsSummaryPage?: boolean | undefined
  welcomePage?: boolean | undefined
}
type GetOnboardingUrlRequest = {
  accountHolderCode: string
  collectInformation?: CollectInformation | undefined
  editMode?: boolean | undefined
  mobileOAuthCallbackUrl?: string | undefined
  platformName?: string | undefined
  returnUrl?: string | undefined
  shopperLocale?: string | undefined
  showPages?: ShowPages | undefined
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
type GetOnboardingUrlResponse = {
  invalidFields?: ErrorFieldType[] | undefined
  pspReference?: string | undefined
  redirectUrl?: string | undefined
  resultCode?: string | undefined
}
type ServiceError = {
  errorCode?: string | undefined
  errorType?: string | undefined
  message?: string | undefined
  pspReference?: string | undefined
  status?: number | undefined
}
type GetPciUrlRequest = { accountHolderCode: string; returnUrl?: string | undefined }
type GetPciUrlResponse = {
  invalidFields?: ErrorFieldType[] | undefined
  pspReference?: string | undefined
  redirectUrl?: string | undefined
  resultCode?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/getOnboardingUrl': {
      $post:
        | {
            input: { json: GetOnboardingUrlRequest }
            output: GetOnboardingUrlResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GetOnboardingUrlRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GetOnboardingUrlRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: GetOnboardingUrlRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GetOnboardingUrlRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: GetOnboardingUrlRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getPciQuestionnaireUrl': {
      $post:
        | {
            input: { json: GetPciUrlRequest }
            output: GetPciUrlResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GetPciUrlRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GetPciUrlRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: GetPciUrlRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GetPciUrlRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: GetPciUrlRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
