import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGovApi(
  args: InferRequestType<typeof client.gov.api.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.api.$get(args, options))
}

export async function getGovCommit(
  args: InferRequestType<typeof client.gov.commit.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.commit.$get(args, options))
}

export async function getGovMembersProposals(
  args: InferRequestType<typeof client.gov.members.proposals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.members.proposals.$get(args, options))
}

export async function getGovMembersProposalsProposalId(
  args: InferRequestType<(typeof client.gov.members.proposals)[':proposalId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.members.proposals[':proposalId'].$get(args, options))
}

export async function getGovMembersProposalsProposalIdActions(
  args: InferRequestType<(typeof client.gov.members.proposals)[':proposalId']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gov.members.proposals[':proposalId'].actions.$get(args, options),
  )
}

export async function getGovMembersProposalsProposalIdBallotsMemberId(
  args: InferRequestType<
    (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gov.members.proposals[':proposalId'].ballots[':memberId'].$get(args, options),
  )
}

export async function postGovMembersProposalsProposalIdBallotsMemberIdSubmit(
  args: InferRequestType<
    (typeof client.gov.members.proposals)[':proposalId']['ballots'][':memberId:submit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gov.members.proposals[':proposalId'].ballots[':memberId:submit'].$post(args, options),
  )
}

export async function postGovMembersProposalsProposalIdWithdraw(
  args: InferRequestType<(typeof client.gov.members.proposals)[':proposalId:withdraw']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gov.members.proposals[':proposalId:withdraw'].$post(args, options),
  )
}

export async function postGovMembersProposalsCreate(
  args: InferRequestType<(typeof client.gov.members)['proposals:create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.members['proposals:create'].$post(args, options))
}

export async function getGovMembersStateDigestsMemberId(
  args: InferRequestType<(typeof client.gov.members)['state-digests'][':memberId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.members['state-digests'][':memberId'].$get(args, options))
}

export async function postGovMembersStateDigestsMemberIdAck(
  args: InferRequestType<(typeof client.gov.members)['state-digests'][':memberId:ack']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gov.members['state-digests'][':memberId:ack'].$post(args, options),
  )
}

export async function postGovMembersStateDigestsMemberIdUpdate(
  args: InferRequestType<(typeof client.gov.members)['state-digests'][':memberId:update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gov.members['state-digests'][':memberId:update'].$post(args, options),
  )
}

export async function getGovReceipt(
  args: InferRequestType<typeof client.gov.receipt.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.receipt.$get(args, options))
}

export async function getGovReceiptCose(
  args: InferRequestType<typeof client.gov.receipt.cose.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.receipt.cose.$get(args, options))
}

export async function getGovRecoveryEncryptedSharesMemberId(
  args: InferRequestType<(typeof client.gov.recovery)['encrypted-shares'][':memberId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gov.recovery['encrypted-shares'][':memberId'].$get(args, options),
  )
}

export async function postGovRecoveryMembersMemberIdRecover(
  args: InferRequestType<(typeof client.gov.recovery.members)[':memberId:recover']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.recovery.members[':memberId:recover'].$post(args, options))
}

export async function getGovServiceConstitution(
  args: InferRequestType<typeof client.gov.service.constitution.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.service.constitution.$get(args, options))
}

export async function getGovServiceInfo(
  args: InferRequestType<typeof client.gov.service.info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.service.info.$get(args, options))
}

export async function getGovServiceJavascriptApp(
  args: InferRequestType<(typeof client.gov.service)['javascript-app']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.service['javascript-app'].$get(args, options))
}

export async function getGovServiceJavascriptModules(
  args: InferRequestType<(typeof client.gov.service)['javascript-modules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.service['javascript-modules'].$get(args, options))
}

export async function getGovServiceJavascriptModulesModuleName(
  args: InferRequestType<(typeof client.gov.service)['javascript-modules'][':moduleName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gov.service['javascript-modules'][':moduleName'].$get(args, options),
  )
}

export async function getGovServiceJoinPolicy(
  args: InferRequestType<(typeof client.gov.service)['join-policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.service['join-policy'].$get(args, options))
}

export async function getGovServiceJwk(
  args: InferRequestType<typeof client.gov.service.jwk.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.service.jwk.$get(args, options))
}

export async function getGovServiceMembers(
  args: InferRequestType<typeof client.gov.service.members.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.service.members.$get(args, options))
}

export async function getGovServiceMembersMemberId(
  args: InferRequestType<(typeof client.gov.service.members)[':memberId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.service.members[':memberId'].$get(args, options))
}

export async function getGovServiceNodes(
  args: InferRequestType<typeof client.gov.service.nodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.service.nodes.$get(args, options))
}

export async function getGovServiceNodesNodeId(
  args: InferRequestType<(typeof client.gov.service.nodes)[':nodeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.service.nodes[':nodeId'].$get(args, options))
}

export async function getGovServiceTransactionsCommit(
  args: InferRequestType<typeof client.gov.service.transactions.commit.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.service.transactions.commit.$get(args, options))
}

export async function getGovServiceTransactionsTransactionId(
  args: InferRequestType<(typeof client.gov.service.transactions)[':transactionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.service.transactions[':transactionId'].$get(args, options))
}

export async function getGovServiceUsers(
  args: InferRequestType<typeof client.gov.service.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.service.users.$get(args, options))
}

export async function getGovServiceUsersUserId(
  args: InferRequestType<(typeof client.gov.service.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.service.users[':userId'].$get(args, options))
}

export async function getGovTx(
  args: InferRequestType<typeof client.gov.tx.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gov.tx.$get(args, options))
}
