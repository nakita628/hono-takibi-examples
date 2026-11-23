import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGovApiRoute,
  getGovCommitRoute,
  getGovMembersProposalsProposalIdActionsRoute,
  getGovMembersProposalsProposalIdBallotsMemberIdRoute,
  getGovMembersProposalsProposalIdRoute,
  getGovMembersProposalsRoute,
  getGovMembersStateDigestsMemberIdRoute,
  getGovReceiptCoseRoute,
  getGovReceiptRoute,
  getGovRecoveryEncryptedSharesMemberIdRoute,
  getGovServiceConstitutionRoute,
  getGovServiceInfoRoute,
  getGovServiceJavascriptAppRoute,
  getGovServiceJavascriptModulesModuleNameRoute,
  getGovServiceJavascriptModulesRoute,
  getGovServiceJoinPolicyRoute,
  getGovServiceJwkRoute,
  getGovServiceMembersMemberIdRoute,
  getGovServiceMembersRoute,
  getGovServiceNodesNodeIdRoute,
  getGovServiceNodesRoute,
  getGovServiceTransactionsCommitRoute,
  getGovServiceTransactionsTransactionIdRoute,
  getGovServiceUsersRoute,
  getGovServiceUsersUserIdRoute,
  getGovTxRoute,
  postGovMembersProposalsCreateRoute,
  postGovMembersProposalsProposalIdBallotsMemberIdSubmitRoute,
  postGovMembersProposalsProposalIdWithdrawRoute,
  postGovMembersStateDigestsMemberIdAckRoute,
  postGovMembersStateDigestsMemberIdUpdateRoute,
  postGovRecoveryMembersMemberIdRecoverRoute,
} from './routes'
import {
  getGovApiRouteHandler,
  getGovCommitRouteHandler,
  getGovMembersProposalsProposalIdActionsRouteHandler,
  getGovMembersProposalsProposalIdBallotsMemberIdRouteHandler,
  getGovMembersProposalsProposalIdRouteHandler,
  getGovMembersProposalsRouteHandler,
  getGovMembersStateDigestsMemberIdRouteHandler,
  getGovReceiptCoseRouteHandler,
  getGovReceiptRouteHandler,
  getGovRecoveryEncryptedSharesMemberIdRouteHandler,
  getGovServiceConstitutionRouteHandler,
  getGovServiceInfoRouteHandler,
  getGovServiceJavascriptAppRouteHandler,
  getGovServiceJavascriptModulesModuleNameRouteHandler,
  getGovServiceJavascriptModulesRouteHandler,
  getGovServiceJoinPolicyRouteHandler,
  getGovServiceJwkRouteHandler,
  getGovServiceMembersMemberIdRouteHandler,
  getGovServiceMembersRouteHandler,
  getGovServiceNodesNodeIdRouteHandler,
  getGovServiceNodesRouteHandler,
  getGovServiceTransactionsCommitRouteHandler,
  getGovServiceTransactionsTransactionIdRouteHandler,
  getGovServiceUsersRouteHandler,
  getGovServiceUsersUserIdRouteHandler,
  getGovTxRouteHandler,
  postGovMembersProposalsCreateRouteHandler,
  postGovMembersProposalsProposalIdBallotsMemberIdSubmitRouteHandler,
  postGovMembersProposalsProposalIdWithdrawRouteHandler,
  postGovMembersStateDigestsMemberIdAckRouteHandler,
  postGovMembersStateDigestsMemberIdUpdateRouteHandler,
  postGovRecoveryMembersMemberIdRecoverRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getGovApiRoute, getGovApiRouteHandler)
  .openapi(getGovCommitRoute, getGovCommitRouteHandler)
  .openapi(getGovMembersProposalsRoute, getGovMembersProposalsRouteHandler)
  .openapi(getGovMembersProposalsProposalIdRoute, getGovMembersProposalsProposalIdRouteHandler)
  .openapi(
    getGovMembersProposalsProposalIdActionsRoute,
    getGovMembersProposalsProposalIdActionsRouteHandler,
  )
  .openapi(
    getGovMembersProposalsProposalIdBallotsMemberIdRoute,
    getGovMembersProposalsProposalIdBallotsMemberIdRouteHandler,
  )
  .openapi(
    postGovMembersProposalsProposalIdBallotsMemberIdSubmitRoute,
    postGovMembersProposalsProposalIdBallotsMemberIdSubmitRouteHandler,
  )
  .openapi(
    postGovMembersProposalsProposalIdWithdrawRoute,
    postGovMembersProposalsProposalIdWithdrawRouteHandler,
  )
  .openapi(postGovMembersProposalsCreateRoute, postGovMembersProposalsCreateRouteHandler)
  .openapi(getGovMembersStateDigestsMemberIdRoute, getGovMembersStateDigestsMemberIdRouteHandler)
  .openapi(
    postGovMembersStateDigestsMemberIdAckRoute,
    postGovMembersStateDigestsMemberIdAckRouteHandler,
  )
  .openapi(
    postGovMembersStateDigestsMemberIdUpdateRoute,
    postGovMembersStateDigestsMemberIdUpdateRouteHandler,
  )
  .openapi(getGovReceiptRoute, getGovReceiptRouteHandler)
  .openapi(getGovReceiptCoseRoute, getGovReceiptCoseRouteHandler)
  .openapi(
    getGovRecoveryEncryptedSharesMemberIdRoute,
    getGovRecoveryEncryptedSharesMemberIdRouteHandler,
  )
  .openapi(
    postGovRecoveryMembersMemberIdRecoverRoute,
    postGovRecoveryMembersMemberIdRecoverRouteHandler,
  )
  .openapi(getGovServiceConstitutionRoute, getGovServiceConstitutionRouteHandler)
  .openapi(getGovServiceInfoRoute, getGovServiceInfoRouteHandler)
  .openapi(getGovServiceJavascriptAppRoute, getGovServiceJavascriptAppRouteHandler)
  .openapi(getGovServiceJavascriptModulesRoute, getGovServiceJavascriptModulesRouteHandler)
  .openapi(
    getGovServiceJavascriptModulesModuleNameRoute,
    getGovServiceJavascriptModulesModuleNameRouteHandler,
  )
  .openapi(getGovServiceJoinPolicyRoute, getGovServiceJoinPolicyRouteHandler)
  .openapi(getGovServiceJwkRoute, getGovServiceJwkRouteHandler)
  .openapi(getGovServiceMembersRoute, getGovServiceMembersRouteHandler)
  .openapi(getGovServiceMembersMemberIdRoute, getGovServiceMembersMemberIdRouteHandler)
  .openapi(getGovServiceNodesRoute, getGovServiceNodesRouteHandler)
  .openapi(getGovServiceNodesNodeIdRoute, getGovServiceNodesNodeIdRouteHandler)
  .openapi(getGovServiceTransactionsCommitRoute, getGovServiceTransactionsCommitRouteHandler)
  .openapi(
    getGovServiceTransactionsTransactionIdRoute,
    getGovServiceTransactionsTransactionIdRouteHandler,
  )
  .openapi(getGovServiceUsersRoute, getGovServiceUsersRouteHandler)
  .openapi(getGovServiceUsersUserIdRoute, getGovServiceUsersUserIdRouteHandler)
  .openapi(getGovTxRoute, getGovTxRouteHandler)

export default app
