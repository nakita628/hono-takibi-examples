import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function patchWorkloadsWorkloadIdAssociateLenses(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['associateLenses']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workloads[':WorkloadId'].associateLenses.$patch(args, options))
}

export async function getLensesLensAliasShares(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['shares']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lenses[':LensAlias'].shares.$get(args, options))
}

export async function postLensesLensAliasShares(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['shares']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lenses[':LensAlias'].shares.$post(args, options))
}

export async function postLensesLensAliasVersions(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lenses[':LensAlias'].versions.$post(args, options))
}

export async function postWorkloadsWorkloadIdMilestones(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['milestones']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workloads[':WorkloadId'].milestones.$post(args, options))
}

export async function postWorkloads(
  args: InferRequestType<typeof client.workloads.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workloads.$post(args, options))
}

export async function getWorkloadsWorkloadIdShares(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['shares']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workloads[':WorkloadId'].shares.$get(args, options))
}

export async function postWorkloadsWorkloadIdShares(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['shares']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workloads[':WorkloadId'].shares.$post(args, options))
}

export async function deleteLensesLensAliasClientRequestTokenLensStatus(
  args: InferRequestType<
    (typeof client.lenses)[':LensAlias#ClientRequestToken&LensStatus']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lenses[':LensAlias#ClientRequestToken&LensStatus'].$delete(args, options),
  )
}

export async function deleteLensesLensAliasSharesShareIdClientRequestToken(
  args: InferRequestType<
    (typeof client.lenses)[':LensAlias']['shares'][':ShareId#ClientRequestToken']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lenses[':LensAlias'].shares[':ShareId#ClientRequestToken'].$delete(args, options),
  )
}

export async function deleteWorkloadsWorkloadIdClientRequestToken(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId#ClientRequestToken']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workloads[':WorkloadId#ClientRequestToken'].$delete(args, options),
  )
}

export async function deleteWorkloadsWorkloadIdSharesShareIdClientRequestToken(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['shares'][':ShareId#ClientRequestToken']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workloads[':WorkloadId'].shares[':ShareId#ClientRequestToken'].$delete(args, options),
  )
}

export async function patchWorkloadsWorkloadIdDisassociateLenses(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['disassociateLenses']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workloads[':WorkloadId'].disassociateLenses.$patch(args, options),
  )
}

export async function getLensesLensAliasExport(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lenses[':LensAlias'].export.$get(args, options))
}

export async function getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionId(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workloads[':WorkloadId'].lensReviews[':LensAlias'].answers[':QuestionId'].$get(
      args,
      options,
    ),
  )
}

export async function patchWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionId(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workloads[':WorkloadId'].lensReviews[':LensAlias'].answers[':QuestionId'].$patch(
      args,
      options,
    ),
  )
}

export async function getConsolidatedReportFormat(
  args: InferRequestType<(typeof client)['consolidatedReport#Format']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['consolidatedReport#Format'].$get(args, options))
}

export async function getLensesLensAlias(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lenses[':LensAlias'].$get(args, options))
}

export async function getWorkloadsWorkloadIdLensReviewsLensAlias(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workloads[':WorkloadId'].lensReviews[':LensAlias'].$get(args, options),
  )
}

export async function patchWorkloadsWorkloadIdLensReviewsLensAlias(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workloads[':WorkloadId'].lensReviews[':LensAlias'].$patch(args, options),
  )
}

export async function getWorkloadsWorkloadIdLensReviewsLensAliasReport(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['report']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workloads[':WorkloadId'].lensReviews[':LensAlias'].report.$get(args, options),
  )
}

export async function getLensesLensAliasVersionDifference(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['versionDifference']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lenses[':LensAlias'].versionDifference.$get(args, options))
}

export async function getWorkloadsWorkloadIdMilestonesMilestoneNumber(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['milestones'][':MilestoneNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workloads[':WorkloadId'].milestones[':MilestoneNumber'].$get(args, options),
  )
}

export async function getWorkloadsWorkloadId(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workloads[':WorkloadId'].$get(args, options))
}

export async function patchWorkloadsWorkloadId(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workloads[':WorkloadId'].$patch(args, options))
}

export async function putImportLens(
  args: InferRequestType<typeof client.importLens.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.importLens.$put(args, options))
}

export async function getWorkloadsWorkloadIdLensReviewsLensAliasAnswers(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workloads[':WorkloadId'].lensReviews[':LensAlias'].answers.$get(args, options),
  )
}

export async function postWorkloadsWorkloadIdChecks(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['checks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workloads[':WorkloadId'].checks.$post(args, options))
}

export async function postWorkloadsWorkloadIdCheckSummaries(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['checkSummaries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workloads[':WorkloadId'].checkSummaries.$post(args, options))
}

export async function getWorkloadsWorkloadIdLensReviewsLensAliasImprovements(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['improvements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workloads[':WorkloadId'].lensReviews[':LensAlias'].improvements.$get(args, options),
  )
}

export async function getWorkloadsWorkloadIdLensReviews(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['lensReviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workloads[':WorkloadId'].lensReviews.$get(args, options))
}

export async function getLenses(
  args: InferRequestType<typeof client.lenses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lenses.$get(args, options))
}

export async function postWorkloadsWorkloadIdMilestonesSummaries(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['milestonesSummaries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workloads[':WorkloadId'].milestonesSummaries.$post(args, options),
  )
}

export async function postNotifications(
  args: InferRequestType<typeof client.notifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.$post(args, options))
}

export async function getShareInvitations(
  args: InferRequestType<typeof client.shareInvitations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shareInvitations.$get(args, options))
}

export async function getTagsWorkloadArn(
  args: InferRequestType<(typeof client.tags)[':WorkloadArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':WorkloadArn'].$get(args, options))
}

export async function postTagsWorkloadArn(
  args: InferRequestType<(typeof client.tags)[':WorkloadArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':WorkloadArn'].$post(args, options))
}

export async function postWorkloadsSummaries(
  args: InferRequestType<typeof client.workloadsSummaries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workloadsSummaries.$post(args, options))
}

export async function deleteTagsWorkloadArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':WorkloadArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':WorkloadArn#tagKeys'].$delete(args, options))
}

export async function patchGlobalSettings(
  args: InferRequestType<(typeof client)['global-settings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['global-settings'].$patch(args, options))
}

export async function patchShareInvitationsShareInvitationId(
  args: InferRequestType<(typeof client.shareInvitations)[':ShareInvitationId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shareInvitations[':ShareInvitationId'].$patch(args, options))
}

export async function patchWorkloadsWorkloadIdSharesShareId(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['shares'][':ShareId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workloads[':WorkloadId'].shares[':ShareId'].$patch(args, options),
  )
}

export async function putWorkloadsWorkloadIdLensReviewsLensAliasUpgrade(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['upgrade']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workloads[':WorkloadId'].lensReviews[':LensAlias'].upgrade.$put(args, options),
  )
}
