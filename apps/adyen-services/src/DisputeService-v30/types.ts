type AcceptDisputeRequest = { disputePspReference: string; merchantAccountCode: string }
type DisputeServiceResult = { errorMessage?: string | undefined; success: boolean }
type AcceptDisputeResponse = { disputeServiceResult: DisputeServiceResult }
type ServiceError = {
  errorCode?: string | undefined
  errorType?: string | undefined
  message?: string | undefined
  pspReference?: string | undefined
  status?: number | undefined
}
type DefendDisputeRequest = {
  defenseReasonCode: string
  disputePspReference: string
  merchantAccountCode: string
}
type DefendDisputeResponse = { disputeServiceResult: DisputeServiceResult }
type DeleteDefenseDocumentRequest = {
  defenseDocumentType: string
  disputePspReference: string
  merchantAccountCode: string
}
type DeleteDefenseDocumentResponse = { disputeServiceResult: DisputeServiceResult }
type DefenseReasonsRequest = { disputePspReference: string; merchantAccountCode: string }
type DefenseDocumentType = {
  available: boolean
  defenseDocumentTypeCode: string
  requirementLevel: string
}
type DefenseReason = {
  defenseDocumentTypes?: DefenseDocumentType[] | undefined
  defenseReasonCode: string
  satisfied: boolean
}
type DefenseReasonsResponse = {
  defenseReasons?: DefenseReason[] | undefined
  disputeServiceResult: DisputeServiceResult
}
type DefenseDocument = { content: string; contentType: string; defenseDocumentTypeCode: string }
type SupplyDefenseDocumentRequest = {
  defenseDocuments: DefenseDocument[]
  disputePspReference: string
  merchantAccountCode: string
}
type SupplyDefenseDocumentResponse = { disputeServiceResult: DisputeServiceResult }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/acceptDispute': {
      $post:
        | {
            input: { json: AcceptDisputeRequest }
            output: AcceptDisputeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AcceptDisputeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AcceptDisputeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AcceptDisputeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AcceptDisputeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: AcceptDisputeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/defendDispute': {
      $post:
        | {
            input: { json: DefendDisputeRequest }
            output: DefendDisputeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DefendDisputeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DefendDisputeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DefendDisputeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DefendDisputeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: DefendDisputeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/deleteDisputeDefenseDocument': {
      $post:
        | {
            input: { json: DeleteDefenseDocumentRequest }
            output: DeleteDefenseDocumentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DeleteDefenseDocumentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DeleteDefenseDocumentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DeleteDefenseDocumentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DeleteDefenseDocumentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: DeleteDefenseDocumentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/retrieveApplicableDefenseReasons': {
      $post:
        | {
            input: { json: DefenseReasonsRequest }
            output: DefenseReasonsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DefenseReasonsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DefenseReasonsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DefenseReasonsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DefenseReasonsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: DefenseReasonsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/supplyDefenseDocument': {
      $post:
        | {
            input: { json: SupplyDefenseDocumentRequest }
            output: SupplyDefenseDocumentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SupplyDefenseDocumentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SupplyDefenseDocumentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SupplyDefenseDocumentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SupplyDefenseDocumentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: SupplyDefenseDocumentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
