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
} from '../routes'

const app = new OpenAPIHono()

export const govHandler = app
  .openapi(getGovApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovCommitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovMembersProposalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovMembersProposalsProposalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovMembersProposalsProposalIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovMembersProposalsProposalIdBallotsMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGovMembersProposalsProposalIdBallotsMemberIdSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGovMembersProposalsProposalIdWithdrawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGovMembersProposalsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovMembersStateDigestsMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGovMembersStateDigestsMemberIdAckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGovMembersStateDigestsMemberIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovReceiptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovReceiptCoseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovRecoveryEncryptedSharesMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGovRecoveryMembersMemberIdRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovServiceConstitutionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovServiceInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovServiceJavascriptAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovServiceJavascriptModulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovServiceJavascriptModulesModuleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovServiceJoinPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovServiceJwkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovServiceMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovServiceMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovServiceNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovServiceNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovServiceTransactionsCommitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovServiceTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovServiceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovServiceUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGovTxRoute, (c) => {
    throw new Error('Not implemented')
  })
