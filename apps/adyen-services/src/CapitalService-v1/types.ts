type FinancingType = 'hardwareFinancing' | 'businessFinancing'
type Amount = { currency: string; value: bigint }
type RepaymentTerm = { estimatedDays: number; maximumDays?: number | undefined }
type DynamicOfferRepayment = { term: RepaymentTerm }
type DynamicOffer = {
  accountHolderId: string
  contractType: 'cashAdvance' | 'loan'
  expiresAt: string
  financingType: FinancingType
  id: string
  maximumAmount: Amount
  minimumAmount: Amount
  repayment: DynamicOfferRepayment
  startsAt: string
}
type GetDynamicOffersResponse = { dynamicOffers: DynamicOffer[] }
type InvalidField = { message: string; name: string; value: string }
type DefaultErrorResponseEntity = {
  detail?: string | undefined
  errorCode?: string | undefined
  instance?: string | undefined
  invalidFields?: InvalidField[] | undefined
  requestId?: string | undefined
  status?: number | undefined
  title?: string | undefined
  type?: string | undefined
}
type CalculateGrantOfferRequest = { amount: Amount }
type GrantOfferFee = { amount: Amount; aprBasisPoints?: number | undefined }
type ThresholdRepayment = { amount: Amount }
type Repayment = {
  basisPoints: number
  term?: RepaymentTerm | undefined
  threshold?: ThresholdRepayment | undefined
}
type CalculatedGrantOffer = {
  accountHolderId: string
  amount: Amount
  contractType: 'cashAdvance' | 'loan'
  expiresAt: string
  fee: GrantOfferFee
  repayment: Repayment
  startsAt: string
}
type CreateGrantOfferRequest = { amount: Amount }
type GrantOffer = {
  accountHolderId: string
  amount?: Amount | undefined
  contractType?: 'cashAdvance' | 'loan' | undefined
  expiresAt?: string | undefined
  fee?: GrantOfferFee | undefined
  id?: string | undefined
  repayment?: Repayment | undefined
  startsAt?: string | undefined
}
type Balance = { currency: string; fee: bigint; principal: bigint; total: bigint }
type GrantLimit = { amount?: Amount | undefined }
type GrantAccount = {
  balances?: Balance[] | undefined
  fundingBalanceAccountId?: string | undefined
  id?: string | undefined
  limits?: GrantLimit[] | undefined
}
type GrantOffers = { grantOffers: GrantOffer[] }
type GrantCounterparty = {
  accountHolderId?: string | undefined
  balanceAccountId?: string | undefined
  transferInstrumentId?: string | undefined
}
type Action = { actionCode: string; resolved: boolean }
type Status = {
  actions?: Action[] | undefined
  code:
    | 'Pending'
    | 'Active'
    | 'Repaid'
    | 'WrittenOff'
    | 'Failed'
    | 'Revoked'
    | 'Requested'
    | 'Reviewing'
    | 'Approved'
    | 'Rejected'
    | 'Cancelled'
}
type Grant = {
  balances: Balance
  counterparty?: GrantCounterparty | undefined
  grantAccountId: string
  grantOfferId: string
  id: string
  status: Status
}
type Grants = { grants: Grant[] }
type GrantInfoCounterparty = {
  balanceAccountId?: string | undefined
  transferInstrumentId?: string | undefined
}
type GrantInfo = {
  counterparty?: GrantInfoCounterparty | undefined
  grantAccountId: string
  grantOfferId: string
}
type Fee = { amount: Amount }
type BankAccountIdentification = { type?: string | undefined }
type FundsCollectionType = 'UnscheduledRepayment' | 'Revocation'
type FundsCollection = {
  accountIdentification?: BankAccountIdentification | undefined
  fundsCollectionType?: FundsCollectionType | undefined
}
type DisbursementRepayment = { basisPoints: number; updateDescription: string }
type Disbursement = {
  accountHolderId: string
  amount: Amount
  balanceAccountId: string
  balances: Balance
  fee: Fee
  fundsCollections?: FundsCollection[] | undefined
  grantId: string
  id: string
  repayment: DisbursementRepayment
}
type Disbursements = { disbursements: Disbursement[] }
type DisbursementRepaymentInfoUpdate = {
  basisPoints?: number | undefined
  updateDescription?: string | undefined
}
type DisbursementInfoUpdate = { repayment?: DisbursementRepaymentInfoUpdate | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/dynamicOffers': {
      $get:
        | {
            input: { query: { accountHolderId: string; financingType?: FinancingType | undefined } }
            output: GetDynamicOffersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { accountHolderId: string; financingType?: FinancingType | undefined } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/dynamicOffers/:id/calculate': {
      $post:
        | {
            input: { param: { id: string } } & { json: CalculateGrantOfferRequest }
            output: CalculatedGrantOffer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: CalculateGrantOfferRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/dynamicOffers/:id/grantOffer': {
      $post:
        | {
            input: { param: { id: string } } & { json: CreateGrantOfferRequest }
            output: GrantOffer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: CreateGrantOfferRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/grantAccounts/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: GrantAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/grantOffers': {
      $get:
        | {
            input: { query: { accountHolderId: string } }
            output: GrantOffers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { accountHolderId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { accountHolderId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/grantOffers/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: GrantOffer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/grants': {
      $get:
        | {
            input: { query: { counterpartyAccountHolderId: string } }
            output: Grants
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { counterpartyAccountHolderId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { counterpartyAccountHolderId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
      $post:
        | { input: { json: GrantInfo }; output: Grant; outputFormat: 'json'; status: 200 }
        | {
            input: { json: GrantInfo }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/grants/:grantId': {
      $get:
        | {
            input: { param: { grantId: string } }
            output: Grant
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { grantId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { grantId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/grants/:grantId/disbursements': {
      $get:
        | {
            input: { param: { grantId: string } }
            output: Disbursements
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { grantId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { grantId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/grants/:grantId/disbursements/:disbursementId': {
      $get:
        | {
            input: { param: { grantId: string; disbursementId: string } }
            output: Disbursement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { grantId: string; disbursementId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { grantId: string; disbursementId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { grantId: string; disbursementId: string } } & {
              json: DisbursementInfoUpdate
            }
            output: Disbursement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { grantId: string; disbursementId: string } } & {
              json: DisbursementInfoUpdate
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { grantId: string; disbursementId: string } } & {
              json: DisbursementInfoUpdate
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  },
  '/'
>
export default routes
