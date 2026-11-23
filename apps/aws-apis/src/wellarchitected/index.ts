import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLensesLensAliasClientRequestTokenLensStatusRoute,
  deleteLensesLensAliasSharesShareIdClientRequestTokenRoute,
  deleteTagsWorkloadArnTagKeysRoute,
  deleteWorkloadsWorkloadIdClientRequestTokenRoute,
  deleteWorkloadsWorkloadIdSharesShareIdClientRequestTokenRoute,
  getConsolidatedReportFormatRoute,
  getLensesLensAliasExportRoute,
  getLensesLensAliasRoute,
  getLensesLensAliasSharesRoute,
  getLensesLensAliasVersionDifferenceRoute,
  getLensesRoute,
  getShareInvitationsRoute,
  getTagsWorkloadArnRoute,
  getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdRoute,
  getWorkloadsWorkloadIdLensReviewsLensAliasAnswersRoute,
  getWorkloadsWorkloadIdLensReviewsLensAliasImprovementsRoute,
  getWorkloadsWorkloadIdLensReviewsLensAliasReportRoute,
  getWorkloadsWorkloadIdLensReviewsLensAliasRoute,
  getWorkloadsWorkloadIdLensReviewsRoute,
  getWorkloadsWorkloadIdMilestonesMilestoneNumberRoute,
  getWorkloadsWorkloadIdRoute,
  getWorkloadsWorkloadIdSharesRoute,
  patchGlobalSettingsRoute,
  patchShareInvitationsShareInvitationIdRoute,
  patchWorkloadsWorkloadIdAssociateLensesRoute,
  patchWorkloadsWorkloadIdDisassociateLensesRoute,
  patchWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdRoute,
  patchWorkloadsWorkloadIdLensReviewsLensAliasRoute,
  patchWorkloadsWorkloadIdRoute,
  patchWorkloadsWorkloadIdSharesShareIdRoute,
  postLensesLensAliasSharesRoute,
  postLensesLensAliasVersionsRoute,
  postNotificationsRoute,
  postTagsWorkloadArnRoute,
  postWorkloadsRoute,
  postWorkloadsSummariesRoute,
  postWorkloadsWorkloadIdChecksRoute,
  postWorkloadsWorkloadIdCheckSummariesRoute,
  postWorkloadsWorkloadIdMilestonesRoute,
  postWorkloadsWorkloadIdMilestonesSummariesRoute,
  postWorkloadsWorkloadIdSharesRoute,
  putImportLensRoute,
  putWorkloadsWorkloadIdLensReviewsLensAliasUpgradeRoute,
} from './routes'
import {
  deleteLensesLensAliasClientRequestTokenLensStatusRouteHandler,
  deleteLensesLensAliasSharesShareIdClientRequestTokenRouteHandler,
  deleteTagsWorkloadArnTagKeysRouteHandler,
  deleteWorkloadsWorkloadIdClientRequestTokenRouteHandler,
  deleteWorkloadsWorkloadIdSharesShareIdClientRequestTokenRouteHandler,
  getConsolidatedReportFormatRouteHandler,
  getLensesLensAliasExportRouteHandler,
  getLensesLensAliasRouteHandler,
  getLensesLensAliasSharesRouteHandler,
  getLensesLensAliasVersionDifferenceRouteHandler,
  getLensesRouteHandler,
  getShareInvitationsRouteHandler,
  getTagsWorkloadArnRouteHandler,
  getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdRouteHandler,
  getWorkloadsWorkloadIdLensReviewsLensAliasAnswersRouteHandler,
  getWorkloadsWorkloadIdLensReviewsLensAliasImprovementsRouteHandler,
  getWorkloadsWorkloadIdLensReviewsLensAliasReportRouteHandler,
  getWorkloadsWorkloadIdLensReviewsLensAliasRouteHandler,
  getWorkloadsWorkloadIdLensReviewsRouteHandler,
  getWorkloadsWorkloadIdMilestonesMilestoneNumberRouteHandler,
  getWorkloadsWorkloadIdRouteHandler,
  getWorkloadsWorkloadIdSharesRouteHandler,
  patchGlobalSettingsRouteHandler,
  patchShareInvitationsShareInvitationIdRouteHandler,
  patchWorkloadsWorkloadIdAssociateLensesRouteHandler,
  patchWorkloadsWorkloadIdDisassociateLensesRouteHandler,
  patchWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdRouteHandler,
  patchWorkloadsWorkloadIdLensReviewsLensAliasRouteHandler,
  patchWorkloadsWorkloadIdRouteHandler,
  patchWorkloadsWorkloadIdSharesShareIdRouteHandler,
  postLensesLensAliasSharesRouteHandler,
  postLensesLensAliasVersionsRouteHandler,
  postNotificationsRouteHandler,
  postTagsWorkloadArnRouteHandler,
  postWorkloadsRouteHandler,
  postWorkloadsSummariesRouteHandler,
  postWorkloadsWorkloadIdChecksRouteHandler,
  postWorkloadsWorkloadIdCheckSummariesRouteHandler,
  postWorkloadsWorkloadIdMilestonesRouteHandler,
  postWorkloadsWorkloadIdMilestonesSummariesRouteHandler,
  postWorkloadsWorkloadIdSharesRouteHandler,
  putImportLensRouteHandler,
  putWorkloadsWorkloadIdLensReviewsLensAliasUpgradeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    patchWorkloadsWorkloadIdAssociateLensesRoute,
    patchWorkloadsWorkloadIdAssociateLensesRouteHandler,
  )
  .openapi(postLensesLensAliasSharesRoute, postLensesLensAliasSharesRouteHandler)
  .openapi(getLensesLensAliasSharesRoute, getLensesLensAliasSharesRouteHandler)
  .openapi(postLensesLensAliasVersionsRoute, postLensesLensAliasVersionsRouteHandler)
  .openapi(postWorkloadsWorkloadIdMilestonesRoute, postWorkloadsWorkloadIdMilestonesRouteHandler)
  .openapi(postWorkloadsRoute, postWorkloadsRouteHandler)
  .openapi(postWorkloadsWorkloadIdSharesRoute, postWorkloadsWorkloadIdSharesRouteHandler)
  .openapi(getWorkloadsWorkloadIdSharesRoute, getWorkloadsWorkloadIdSharesRouteHandler)
  .openapi(
    deleteLensesLensAliasClientRequestTokenLensStatusRoute,
    deleteLensesLensAliasClientRequestTokenLensStatusRouteHandler,
  )
  .openapi(
    deleteLensesLensAliasSharesShareIdClientRequestTokenRoute,
    deleteLensesLensAliasSharesShareIdClientRequestTokenRouteHandler,
  )
  .openapi(
    deleteWorkloadsWorkloadIdClientRequestTokenRoute,
    deleteWorkloadsWorkloadIdClientRequestTokenRouteHandler,
  )
  .openapi(
    deleteWorkloadsWorkloadIdSharesShareIdClientRequestTokenRoute,
    deleteWorkloadsWorkloadIdSharesShareIdClientRequestTokenRouteHandler,
  )
  .openapi(
    patchWorkloadsWorkloadIdDisassociateLensesRoute,
    patchWorkloadsWorkloadIdDisassociateLensesRouteHandler,
  )
  .openapi(getLensesLensAliasExportRoute, getLensesLensAliasExportRouteHandler)
  .openapi(
    getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdRoute,
    getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdRouteHandler,
  )
  .openapi(
    patchWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdRoute,
    patchWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdRouteHandler,
  )
  .openapi(getConsolidatedReportFormatRoute, getConsolidatedReportFormatRouteHandler)
  .openapi(getLensesLensAliasRoute, getLensesLensAliasRouteHandler)
  .openapi(
    getWorkloadsWorkloadIdLensReviewsLensAliasRoute,
    getWorkloadsWorkloadIdLensReviewsLensAliasRouteHandler,
  )
  .openapi(
    patchWorkloadsWorkloadIdLensReviewsLensAliasRoute,
    patchWorkloadsWorkloadIdLensReviewsLensAliasRouteHandler,
  )
  .openapi(
    getWorkloadsWorkloadIdLensReviewsLensAliasReportRoute,
    getWorkloadsWorkloadIdLensReviewsLensAliasReportRouteHandler,
  )
  .openapi(
    getLensesLensAliasVersionDifferenceRoute,
    getLensesLensAliasVersionDifferenceRouteHandler,
  )
  .openapi(
    getWorkloadsWorkloadIdMilestonesMilestoneNumberRoute,
    getWorkloadsWorkloadIdMilestonesMilestoneNumberRouteHandler,
  )
  .openapi(getWorkloadsWorkloadIdRoute, getWorkloadsWorkloadIdRouteHandler)
  .openapi(patchWorkloadsWorkloadIdRoute, patchWorkloadsWorkloadIdRouteHandler)
  .openapi(putImportLensRoute, putImportLensRouteHandler)
  .openapi(
    getWorkloadsWorkloadIdLensReviewsLensAliasAnswersRoute,
    getWorkloadsWorkloadIdLensReviewsLensAliasAnswersRouteHandler,
  )
  .openapi(postWorkloadsWorkloadIdChecksRoute, postWorkloadsWorkloadIdChecksRouteHandler)
  .openapi(
    postWorkloadsWorkloadIdCheckSummariesRoute,
    postWorkloadsWorkloadIdCheckSummariesRouteHandler,
  )
  .openapi(
    getWorkloadsWorkloadIdLensReviewsLensAliasImprovementsRoute,
    getWorkloadsWorkloadIdLensReviewsLensAliasImprovementsRouteHandler,
  )
  .openapi(getWorkloadsWorkloadIdLensReviewsRoute, getWorkloadsWorkloadIdLensReviewsRouteHandler)
  .openapi(getLensesRoute, getLensesRouteHandler)
  .openapi(
    postWorkloadsWorkloadIdMilestonesSummariesRoute,
    postWorkloadsWorkloadIdMilestonesSummariesRouteHandler,
  )
  .openapi(postNotificationsRoute, postNotificationsRouteHandler)
  .openapi(getShareInvitationsRoute, getShareInvitationsRouteHandler)
  .openapi(getTagsWorkloadArnRoute, getTagsWorkloadArnRouteHandler)
  .openapi(postTagsWorkloadArnRoute, postTagsWorkloadArnRouteHandler)
  .openapi(postWorkloadsSummariesRoute, postWorkloadsSummariesRouteHandler)
  .openapi(deleteTagsWorkloadArnTagKeysRoute, deleteTagsWorkloadArnTagKeysRouteHandler)
  .openapi(patchGlobalSettingsRoute, patchGlobalSettingsRouteHandler)
  .openapi(
    patchShareInvitationsShareInvitationIdRoute,
    patchShareInvitationsShareInvitationIdRouteHandler,
  )
  .openapi(
    patchWorkloadsWorkloadIdSharesShareIdRoute,
    patchWorkloadsWorkloadIdSharesShareIdRouteHandler,
  )
  .openapi(
    putWorkloadsWorkloadIdLensReviewsLensAliasUpgradeRoute,
    putWorkloadsWorkloadIdLensReviewsLensAliasUpgradeRouteHandler,
  )

export default app
