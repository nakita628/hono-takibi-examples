type OBExternalPermissions1Code =
  | 'ReadAccountsBasic'
  | 'ReadAccountsDetail'
  | 'ReadBalances'
  | 'ReadBeneficiariesBasic'
  | 'ReadBeneficiariesDetail'
  | 'ReadDirectDebits'
  | 'ReadOffers'
  | 'ReadPAN'
  | 'ReadParty'
  | 'ReadPartyPSU'
  | 'ReadProducts'
  | 'ReadScheduledPaymentsBasic'
  | 'ReadScheduledPaymentsDetail'
  | 'ReadStandingOrdersBasic'
  | 'ReadStandingOrdersDetail'
  | 'ReadStatementsBasic'
  | 'ReadStatementsDetail'
  | 'ReadTransactionsBasic'
  | 'ReadTransactionsCredits'
  | 'ReadTransactionsDebits'
  | 'ReadTransactionsDetail'
type OBReadData1 = {
  ExpirationDateTime?: (string | null) | undefined
  Permissions: OBExternalPermissions1Code[]
  TransactionFromDateTime?: (string | null) | undefined
  TransactionToDateTime?: (string | null) | undefined
}
type OBRisk2 = {}
type OBReadConsent1 = { Data: OBReadData1; Risk: OBRisk2 }
type OBExternalRequestStatus1Code = 'Authorised' | 'AwaitingAuthorisation' | 'Rejected' | 'Revoked'
type OBReadDataConsentResponse1 = {
  ConsentId: string
  CreationDateTime: string
  ExpirationDateTime?: (string | null) | undefined
  Permissions: OBExternalPermissions1Code[]
  Status: OBExternalRequestStatus1Code
  StatusUpdateDateTime: string
  TransactionFromDateTime?: (string | null) | undefined
  TransactionToDateTime?: (string | null) | undefined
}
type Links = {
  First?: (string | null) | undefined
  Last?: (string | null) | undefined
  Next?: (string | null) | undefined
  Prev?: (string | null) | undefined
  Self: string
}
type Meta = {
  FirstAvailableDateTime?: (string | null) | undefined
  LastAvailableDateTime?: (string | null) | undefined
  TotalPages?: (number | null) | undefined
}
type OBReadConsentResponse1 = {
  Data: OBReadDataConsentResponse1
  Links: Links
  Meta: Meta
  Risk: OBRisk2
}
type ErrorCode =
  | 'UK.OBIE.Field.Expected'
  | 'UK.OBIE.Field.Invalid'
  | 'UK.OBIE.Field.InvalidDate'
  | 'UK.OBIE.Field.Missing'
  | 'UK.OBIE.Field.Unexpected'
  | 'UK.OBIE.Header.Invalid'
  | 'UK.OBIE.Header.Missing'
  | 'UK.OBIE.Resource.ConsentMismatch'
  | 'UK.OBIE.Resource.InvalidConsentStatus'
  | 'UK.OBIE.Resource.InvalidFormat'
  | 'UK.OBIE.Resource.NotFound'
  | 'UK.OBIE.Rules.AfterCutOffDateTime'
  | 'UK.OBIE.Rules.DuplicateReference'
  | 'UK.OBIE.Signature.Invalid'
  | 'UK.OBIE.Signature.InvalidClaim'
  | 'UK.OBIE.Signature.MissingClaim'
  | 'UK.OBIE.Signature.Malformed'
  | 'UK.OBIE.Signature.Missing'
  | 'UK.OBIE.Signature.Unexpected'
  | 'UK.OBIE.Unsupported.AccountIdentifier'
  | 'UK.OBIE.Unsupported.AccountSecondaryIdentifier'
  | 'UK.OBIE.Unsupported.Currency'
  | 'UK.OBIE.Unsupported.EventType'
  | 'UK.OBIE.Unsupported.Frequency'
  | 'UK.OBIE.Unsupported.LocalInstrument'
  | 'UK.OBIE.Unsupported.Scheme'
  | 'UK.OBIE.Reauthenticate'
  | 'UK.OBIE.Rules.ResourceAlreadyExists'
  | 'UK.OBIE.UnexpectedError'
type OBError1 = { ErrorCode: ErrorCode; Message: string; Path?: (string | null) | undefined }
type OBErrorResponse1 = {
  Code: string
  Errors: OBError1[]
  Id?: (string | null) | undefined
  Message: string
}
type OBCashAccount5 = {
  Identification: string
  Name?: (string | null) | undefined
  SchemeName: string
  SecondaryIdentification?: (string | null) | undefined
}
type OBExternalAccountSubType1Code =
  | 'ChargeCard'
  | 'CreditCard'
  | 'CurrentAccount'
  | 'EMoney'
  | 'Loan'
  | 'Mortgage'
  | 'PrePaidCard'
  | 'Savings'
type OBExternalAccountType1Code = 'Business' | 'Personal'
type OBBranchAndFinancialInstitutionIdentification5 = { Identification: string; SchemeName: string }
type OBAccount6 = {
  Account?: (OBCashAccount5[] | null) | undefined
  AccountId: string
  AccountSubType: OBExternalAccountSubType1Code
  AccountType: OBExternalAccountType1Code
  Currency: string
  Description?: (string | null) | undefined
  Nickname?: (string | null) | undefined
  OpeningDate?: (string | null) | undefined
  Servicer?: OBBranchAndFinancialInstitutionIdentification5 | undefined
}
type OBReadDataAccount5 = { Account?: (OBAccount6[] | null) | undefined }
type OBReadAccount5 = {
  Data: OBReadDataAccount5
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBActiveOrHistoricCurrencyAndAmount = { Amount: string; Currency: string }
type OBCreditDebitCode = 'Credit' | 'Debit'
type OBExternalLimitType1Code = 'Available' | 'Credit' | 'Emergency' | 'Pre-Agreed' | 'Temporary'
type OBCreditLine1 = {
  Amount?: OBActiveOrHistoricCurrencyAndAmount | undefined
  Included: boolean
  Type?: OBExternalLimitType1Code | undefined
}
type OBBalanceType1Code =
  | 'ClosingAvailable'
  | 'ClosingBooked'
  | 'ClosingCleared'
  | 'Expected'
  | 'ForwardAvailable'
  | 'Information'
  | 'InterimAvailable'
  | 'InterimBooked'
  | 'InterimCleared'
  | 'OpeningAvailable'
  | 'OpeningBooked'
  | 'OpeningCleared'
  | 'PreviouslyClosedBooked'
type OBCashBalance1 = {
  AccountId: string
  Amount: OBActiveOrHistoricCurrencyAndAmount
  CreditDebitIndicator: OBCreditDebitCode
  CreditLine?: (OBCreditLine1[] | null) | undefined
  DateTime: string
  Type: OBBalanceType1Code
}
type OBReadDataBalance1 = { Balance: OBCashBalance1[] }
type OBReadBalance1 = { Data: OBReadDataBalance1; Links: Links; Meta: Meta }
type OBBeneficiaryType1Code = 'Trusted' | 'Ordinary'
type OBBeneficiary5 = {
  AccountId?: (string | null) | undefined
  BeneficiaryType?: OBBeneficiaryType1Code | undefined
  CreditorAccount?: OBCashAccount5 | undefined
}
type OBReadDataBeneficiary5 = { Beneficiary?: (OBBeneficiary5[] | null) | undefined }
type OBReadBeneficiary5 = {
  Data: OBReadDataBeneficiary5
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBParty2 = { Name?: (string | null) | undefined; PartyId: string }
type OBReadDataParty3 = { Party?: (OBParty2[] | null) | undefined }
type OBReadParty3 = { Data: OBReadDataParty3; Links?: Links | undefined; Meta?: Meta | undefined }
type OBReadDataParty2 = { Party?: OBParty2 | undefined }
type OBReadParty2 = { Data: OBReadDataParty2; Links?: Links | undefined; Meta?: Meta | undefined }
type OBExternalScheduleType1Code = 'Arrival' | 'Execution'
type OBScheduledPayment3 = {
  AccountId: string
  CreditorAccount?: OBCashAccount5 | undefined
  DebtorReference?: (string | null) | undefined
  InstructedAmount: OBActiveOrHistoricCurrencyAndAmount
  Reference?: (string | null) | undefined
  ScheduledPaymentDateTime: string
  ScheduledPaymentId?: (string | null) | undefined
  ScheduledType: OBExternalScheduleType1Code
}
type OBReadDataScheduledPayment3 = { ScheduledPayment?: (OBScheduledPayment3[] | null) | undefined }
type OBReadScheduledPayment3 = {
  Data: OBReadDataScheduledPayment3
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBExternalStandingOrderStatus1Code = 'Active' | 'Inactive'
type OBStandingOrder5 = {
  AccountId: string
  CreditorAccount?: OBCashAccount5 | undefined
  FinalPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount | undefined
  FinalPaymentDateTime?: (string | null) | undefined
  FirstPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount | undefined
  FirstPaymentDateTime?: (string | null) | undefined
  Frequency: string
  LastPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount | undefined
  LastPaymentDateTime?: (string | null) | undefined
  NextPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount | undefined
  NextPaymentDateTime?: (string | null) | undefined
  Reference?: (string | null) | undefined
  StandingOrderId?: (string | null) | undefined
  StandingOrderStatusCode?: OBExternalStandingOrderStatus1Code | undefined
}
type OBReadDataStandingOrder5 = { StandingOrder?: (OBStandingOrder5[] | null) | undefined }
type OBReadStandingOrder6 = {
  Data: OBReadDataStandingOrder5
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBExternalStatementType1Code =
  | 'AccountClosure'
  | 'AccountOpening'
  | 'Annual'
  | 'Interim'
  | 'RegularPeriodic'
type OBStatement2 = {
  AccountId: string
  CreationDateTime: string
  EndDateTime: string
  StartDateTime: string
  StatementId?: (string | null) | undefined
  StatementReference?: (string | null) | undefined
  Type: OBExternalStatementType1Code
}
type OBReadDataStatement2 = { Statement?: (OBStatement2[] | null) | undefined }
type OBReadStatement2 = {
  Data: OBReadDataStatement2
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBTransactionCashBalance = {
  Amount: OBActiveOrHistoricCurrencyAndAmount
  CreditDebitIndicator: OBCreditDebitCode
  Type: OBBalanceType1Code
}
type OBCashAccount6 = {
  Identification?: (string | null) | undefined
  Name?: (string | null) | undefined
  SchemeName?: (string | null) | undefined
}
type ProprietaryBankTransactionCodeStructure1 = {
  Code: string
  Issuer?: (string | null) | undefined
}
type OBEntryStatus1Code = 'Booked' | 'Pending'
type OBTransaction6 = {
  AccountId: string
  Amount: OBActiveOrHistoricCurrencyAndAmount
  Balance?: OBTransactionCashBalance | undefined
  BookingDateTime: string
  CreditDebitIndicator: OBCreditDebitCode
  CreditorAccount?: OBCashAccount6 | undefined
  DebtorAccount?: OBCashAccount6 | undefined
  ProprietaryBankTransactionCode?: ProprietaryBankTransactionCodeStructure1 | undefined
  Status: OBEntryStatus1Code
  TransactionInformation?: (string | null) | undefined
  TransactionReference?: (string | null) | undefined
  ValueDateTime?: (string | null) | undefined
}
type OBReadDataTransaction6 = { Transaction?: (OBTransaction6[] | null) | undefined }
type OBReadTransaction6 = {
  Data: OBReadDataTransaction6
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type SandboxRequest = { sandboxId: string }
type SandboxBeneficiary = { name?: (string | null) | undefined }
type SandboxBankAccountInfo = {
  accountSubType: string
  accountType: string
  alias?: (string | null) | undefined
  availableBalance?: (number | null) | undefined
  currency: string
  description?: (string | null) | undefined
  iban: string
  ledgerBalance?: (number | null) | undefined
  openingDate?: (string | null) | undefined
  overdraftLimit?: (number | null) | undefined
}
type SandboxParty = { id?: (string | null) | undefined; name?: (string | null) | undefined }
type SandboxScheduledPayment = {
  amount?: number | undefined
  description?: (string | null) | undefined
  executionDate?: (string | null) | undefined
  senderReference?: (string | null) | undefined
}
type SandboxStandingOrder = {
  amount?: number | undefined
  description?: (string | null) | undefined
  finalPaymentDate?: (string | null) | undefined
  firstPaymentDate?: (string | null) | undefined
  frequency: string
  lastPaymentDate?: (string | null) | undefined
  nextPaymentDate?: (string | null) | undefined
  status?: (string | null) | undefined
}
type SandboxStatement = {
  month?: number | undefined
  number?: (string | null) | undefined
  year?: number | undefined
}
type SandboxTransaction = {
  accountingBalance?: number | undefined
  amount?: number | undefined
  bookingDateTime?: string | undefined
  creditDebit?: (string | null) | undefined
  currency?: (string | null) | undefined
  description?: (string | null) | undefined
  reference?: (string | null) | undefined
  relatedAccount?: (string | null) | undefined
  relatedName?: (string | null) | undefined
  transactionCode?: (string | null) | undefined
  valueDateTime?: (string | null) | undefined
}
type SandboxBankAccount = {
  beneficiaries?: (SandboxBeneficiary[] | null) | undefined
  info?: SandboxBankAccountInfo | undefined
  party?: SandboxParty | undefined
  scheduledPayments?: (SandboxScheduledPayment[] | null) | undefined
  standingOrders?: (SandboxStandingOrder[] | null) | undefined
  statements?: (SandboxStatement[] | null) | undefined
  transactions?: (SandboxTransaction[] | null) | undefined
}
type SandboxCardInfo = {
  availableBalance?: (number | null) | undefined
  creditLimit?: (number | null) | undefined
  description?: (string | null) | undefined
  expiration: string
  holderName: string
  ledgerBalance?: (number | null) | undefined
  number: string
  subType?: (string | null) | undefined
  type?: (string | null) | undefined
}
type SandboxCard = {
  info?: SandboxCardInfo | undefined
  party?: SandboxParty | undefined
  statements?: (SandboxStatement[] | null) | undefined
  transactions?: (SandboxTransaction[] | null) | undefined
}
type SandboxRetryCacheEntry = {
  cacheKey?: (string | null) | undefined
  count?: number | undefined
  expirationTimestamp?: string | undefined
}
type SandboxUser = {
  accounts?: (SandboxBankAccount[] | null) | undefined
  cards?: (SandboxCard[] | null) | undefined
  retryCacheEntries?: (SandboxRetryCacheEntry[] | null) | undefined
  userId?: (string | null) | undefined
}
type Sandbox = { sandboxId: string; users?: (SandboxUser[] | null) | undefined }
type ErrorResponse = { errorMessage?: (string | null) | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account-access-consents': {
      $post:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            } & { json: OBReadConsent1 }
            output: OBReadConsentResponse1
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            } & { json: OBReadConsent1 }
            output: OBReadConsentResponse1
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            } & { json: OBReadConsent1 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            } & { json: OBReadConsent1 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            } & { json: OBReadConsent1 }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            } & { json: OBReadConsent1 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            } & { json: OBReadConsent1 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            } & { json: OBReadConsent1 }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            } & { json: OBReadConsent1 }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            } & { json: OBReadConsent1 }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            } & { json: OBReadConsent1 }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            } & { json: OBReadConsent1 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            } & { json: OBReadConsent1 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/account-access-consents/:consentId': {
      $delete:
        | {
            input: { param: { consentId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { consentId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { consentId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { consentId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { consentId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { consentId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { consentId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { consentId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { consentId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { consentId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { consentId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: { param: { consentId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadConsentResponse1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { consentId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadConsentResponse1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { consentId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { consentId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { consentId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { consentId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { consentId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { consentId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { consentId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { consentId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { consentId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { consentId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/accounts': {
      $get:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadAccount5
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadAccount5
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/accounts/:accountId': {
      $get:
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadAccount5
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadAccount5
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/accounts/:accountId/balances': {
      $get:
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadBalance1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadBalance1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/accounts/:accountId/beneficiaries': {
      $get:
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadBeneficiary5
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadBeneficiary5
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/accounts/:accountId/parties': {
      $get:
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadParty3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadParty3
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/accounts/:accountId/party': {
      $get:
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadParty2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadParty2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/accounts/:accountId/scheduled-payments': {
      $get:
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadScheduledPayment3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadScheduledPayment3
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/accounts/:accountId/standing-orders': {
      $get:
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadStandingOrder6
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadStandingOrder6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/accounts/:accountId/statements': {
      $get:
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromStatementDateTime?: (string | null) | undefined
                toStatementDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadStatement2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromStatementDateTime?: (string | null) | undefined
                toStatementDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadStatement2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromStatementDateTime?: (string | null) | undefined
                toStatementDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromStatementDateTime?: (string | null) | undefined
                toStatementDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromStatementDateTime?: (string | null) | undefined
                toStatementDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromStatementDateTime?: (string | null) | undefined
                toStatementDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromStatementDateTime?: (string | null) | undefined
                toStatementDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromStatementDateTime?: (string | null) | undefined
                toStatementDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromStatementDateTime?: (string | null) | undefined
                toStatementDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromStatementDateTime?: (string | null) | undefined
                toStatementDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromStatementDateTime?: (string | null) | undefined
                toStatementDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromStatementDateTime?: (string | null) | undefined
                toStatementDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/accounts/:accountId/statements/:statementId': {
      $get:
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadStatement2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadStatement2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/accounts/:accountId/statements/:statementId/file': {
      $get:
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/accounts/:accountId/statements/:statementId/transactions': {
      $get:
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadTransaction6
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadTransaction6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string | null; statementId: string | null } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/accounts/:accountId/transactions': {
      $get:
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromBookingDateTime?: (string | null) | undefined
                toBookingDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadTransaction6
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromBookingDateTime?: (string | null) | undefined
                toBookingDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadTransaction6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromBookingDateTime?: (string | null) | undefined
                toBookingDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromBookingDateTime?: (string | null) | undefined
                toBookingDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromBookingDateTime?: (string | null) | undefined
                toBookingDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromBookingDateTime?: (string | null) | undefined
                toBookingDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromBookingDateTime?: (string | null) | undefined
                toBookingDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromBookingDateTime?: (string | null) | undefined
                toBookingDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromBookingDateTime?: (string | null) | undefined
                toBookingDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromBookingDateTime?: (string | null) | undefined
                toBookingDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromBookingDateTime?: (string | null) | undefined
                toBookingDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string | null } } & {
              query: {
                fromBookingDateTime?: (string | null) | undefined
                toBookingDateTime?: (string | null) | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/party': {
      $get:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadParty2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBReadParty2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                'x-customer-user-agent'?: string | undefined
                'sandbox-id': string
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/sandbox': {
      $post:
        | { input: { json: SandboxRequest }; output: Sandbox; outputFormat: 'json'; status: 201 }
        | { input: { json: SandboxRequest }; output: Sandbox; outputFormat: 'text'; status: 201 }
        | {
            input: { json: SandboxRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SandboxRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | { input: { json: SandboxRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: SandboxRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: SandboxRequest }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: SandboxRequest }; output: {}; outputFormat: string; status: 405 }
        | { input: { json: SandboxRequest }; output: {}; outputFormat: string; status: 406 }
        | { input: { json: SandboxRequest }; output: {}; outputFormat: string; status: 415 }
        | {
            input: { json: SandboxRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: SandboxRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
      $put:
        | { input: { json: Sandbox }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: Sandbox }; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: { json: Sandbox }; output: ErrorResponse; outputFormat: 'text'; status: 400 }
        | { input: { json: Sandbox }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: Sandbox }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: Sandbox }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: Sandbox }; output: {}; outputFormat: string; status: 405 }
        | { input: { json: Sandbox }; output: {}; outputFormat: string; status: 406 }
        | { input: { json: Sandbox }; output: {}; outputFormat: string; status: 415 }
        | { input: { json: Sandbox }; output: ErrorResponse; outputFormat: 'json'; status: 500 }
        | { input: { json: Sandbox }; output: ErrorResponse; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/sandbox/:sandboxId': {
      $delete:
        | {
            input: { param: { sandboxId: string | null } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sandboxId: string | null } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxId: string | null } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sandboxId: string | null } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { sandboxId: string | null } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { sandboxId: string | null } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { sandboxId: string | null } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { sandboxId: string | null } }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { sandboxId: string | null } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxId: string | null } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: { param: { sandboxId: string | null } }
            output: Sandbox
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxId: string | null } }
            output: Sandbox
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sandboxId: string | null } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxId: string | null } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { sandboxId: string | null } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { sandboxId: string | null } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { sandboxId: string | null } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { sandboxId: string | null } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { sandboxId: string | null } }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { sandboxId: string | null } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxId: string | null } }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  },
  '/'
>
export default routes
