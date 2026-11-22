type NotificationEventConfiguration = {
  eventType:
    | 'ACCOUNT_CLOSED'
    | 'ACCOUNT_CREATED'
    | 'ACCOUNT_FUNDS_BELOW_THRESHOLD'
    | 'ACCOUNT_HOLDER_CREATED'
    | 'ACCOUNT_HOLDER_LIMIT_REACHED'
    | 'ACCOUNT_HOLDER_MIGRATED'
    | 'ACCOUNT_HOLDER_PAYOUT'
    | 'ACCOUNT_HOLDER_STATUS_CHANGE'
    | 'ACCOUNT_HOLDER_STORE_STATUS_CHANGE'
    | 'ACCOUNT_HOLDER_UPCOMING_DEADLINE'
    | 'ACCOUNT_HOLDER_UPDATED'
    | 'ACCOUNT_HOLDER_VERIFICATION'
    | 'ACCOUNT_UPDATED'
    | 'BENEFICIARY_SETUP'
    | 'COMPENSATE_NEGATIVE_BALANCE'
    | 'DIRECT_DEBIT_INITIATED'
    | 'FUNDS_MIGRATED'
    | 'PAYMENT_FAILURE'
    | 'PENDING_CREDIT'
    | 'REFUND_FUNDS_TRANSFER'
    | 'REPORT_AVAILABLE'
    | 'SCHEDULED_REFUNDS'
    | 'SCORE_SIGNAL_TRIGGERED'
    | 'TRANSFER_FUNDS'
    | 'TRANSFER_NOT_PAIDOUT_TRANSFERS'
  includeMode: 'EXCLUDE' | 'INCLUDE'
}
type NotificationConfigurationDetails = {
  active?: boolean | undefined
  apiVersion?: number | undefined
  description?: string | undefined
  eventConfigs?: NotificationEventConfiguration[] | undefined
  hmacSignatureKey?: string | undefined
  notificationId?: bigint | undefined
  notifyPassword?: string | undefined
  notifyURL?: string | undefined
  notifyUsername?: string | undefined
  sslProtocol?: 'TLSv12' | 'TLSv13' | undefined
}
type CreateNotificationConfigurationRequest = {
  configurationDetails: NotificationConfigurationDetails
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
type GetNotificationConfigurationResponse = {
  configurationDetails: NotificationConfigurationDetails
  invalidFields?: ErrorFieldType[] | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
}
type ServiceError = {
  errorCode?: string | undefined
  errorType?: string | undefined
  message?: string | undefined
  pspReference?: string | undefined
  status?: number | undefined
}
type DeleteNotificationConfigurationRequest = { notificationIds: bigint[] }
type GenericResponse = {
  invalidFields?: ErrorFieldType[] | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
}
type GetNotificationConfigurationRequest = { notificationId: bigint }
type EmptyRequest = {}
type GetNotificationConfigurationListResponse = {
  configurations?: NotificationConfigurationDetails[] | undefined
  invalidFields?: ErrorFieldType[] | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
}
type TestNotificationConfigurationRequest = {
  eventTypes?:
    | (
        | 'ACCOUNT_CLOSED'
        | 'ACCOUNT_CREATED'
        | 'ACCOUNT_FUNDS_BELOW_THRESHOLD'
        | 'ACCOUNT_HOLDER_CREATED'
        | 'ACCOUNT_HOLDER_LIMIT_REACHED'
        | 'ACCOUNT_HOLDER_MIGRATED'
        | 'ACCOUNT_HOLDER_PAYOUT'
        | 'ACCOUNT_HOLDER_STATUS_CHANGE'
        | 'ACCOUNT_HOLDER_STORE_STATUS_CHANGE'
        | 'ACCOUNT_HOLDER_UPCOMING_DEADLINE'
        | 'ACCOUNT_HOLDER_UPDATED'
        | 'ACCOUNT_HOLDER_VERIFICATION'
        | 'ACCOUNT_UPDATED'
        | 'BENEFICIARY_SETUP'
        | 'COMPENSATE_NEGATIVE_BALANCE'
        | 'DIRECT_DEBIT_INITIATED'
        | 'FUNDS_MIGRATED'
        | 'PAYMENT_FAILURE'
        | 'PENDING_CREDIT'
        | 'REFUND_FUNDS_TRANSFER'
        | 'REPORT_AVAILABLE'
        | 'SCHEDULED_REFUNDS'
        | 'SCORE_SIGNAL_TRIGGERED'
        | 'TRANSFER_FUNDS'
        | 'TRANSFER_NOT_PAIDOUT_TRANSFERS'
      )[]
    | undefined
  notificationId: bigint
}
type ExchangeMessage = { messageCode?: string | undefined; messageDescription?: string | undefined }
type TestNotificationConfigurationResponse = {
  errorMessages?: string[] | undefined
  eventTypes?:
    | (
        | 'ACCOUNT_CLOSED'
        | 'ACCOUNT_CREATED'
        | 'ACCOUNT_FUNDS_BELOW_THRESHOLD'
        | 'ACCOUNT_HOLDER_CREATED'
        | 'ACCOUNT_HOLDER_LIMIT_REACHED'
        | 'ACCOUNT_HOLDER_MIGRATED'
        | 'ACCOUNT_HOLDER_PAYOUT'
        | 'ACCOUNT_HOLDER_STATUS_CHANGE'
        | 'ACCOUNT_HOLDER_STORE_STATUS_CHANGE'
        | 'ACCOUNT_HOLDER_UPCOMING_DEADLINE'
        | 'ACCOUNT_HOLDER_UPDATED'
        | 'ACCOUNT_HOLDER_VERIFICATION'
        | 'ACCOUNT_UPDATED'
        | 'BENEFICIARY_SETUP'
        | 'COMPENSATE_NEGATIVE_BALANCE'
        | 'DIRECT_DEBIT_INITIATED'
        | 'FUNDS_MIGRATED'
        | 'PAYMENT_FAILURE'
        | 'PENDING_CREDIT'
        | 'REFUND_FUNDS_TRANSFER'
        | 'REPORT_AVAILABLE'
        | 'SCHEDULED_REFUNDS'
        | 'SCORE_SIGNAL_TRIGGERED'
        | 'TRANSFER_FUNDS'
        | 'TRANSFER_NOT_PAIDOUT_TRANSFERS'
      )[]
    | undefined
  exchangeMessages?: ExchangeMessage[] | undefined
  invalidFields?: ErrorFieldType[] | undefined
  notificationId: bigint
  okMessages?: string[] | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
}
type UpdateNotificationConfigurationRequest = {
  configurationDetails: NotificationConfigurationDetails
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/createNotificationConfiguration': {
      $post:
        | {
            input: { json: CreateNotificationConfigurationRequest }
            output: GetNotificationConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/deleteNotificationConfigurations': {
      $post:
        | {
            input: { json: DeleteNotificationConfigurationRequest }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DeleteNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DeleteNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DeleteNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DeleteNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: DeleteNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getNotificationConfiguration': {
      $post:
        | {
            input: { json: GetNotificationConfigurationRequest }
            output: GetNotificationConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GetNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GetNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: GetNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GetNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: GetNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getNotificationConfigurationList': {
      $post:
        | {
            input: { json: EmptyRequest }
            output: GetNotificationConfigurationListResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: EmptyRequest }; output: ServiceError; outputFormat: 'json'; status: 400 }
        | { input: { json: EmptyRequest }; output: ServiceError; outputFormat: 'json'; status: 401 }
        | { input: { json: EmptyRequest }; output: ServiceError; outputFormat: 'json'; status: 403 }
        | { input: { json: EmptyRequest }; output: ServiceError; outputFormat: 'json'; status: 422 }
        | { input: { json: EmptyRequest }; output: ServiceError; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/testNotificationConfiguration': {
      $post:
        | {
            input: { json: TestNotificationConfigurationRequest }
            output: TestNotificationConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TestNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TestNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TestNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: TestNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: TestNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/updateNotificationConfiguration': {
      $post:
        | {
            input: { json: UpdateNotificationConfigurationRequest }
            output: GetNotificationConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpdateNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UpdateNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UpdateNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: UpdateNotificationConfigurationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
