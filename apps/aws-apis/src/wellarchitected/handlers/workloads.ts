import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWorkloadsWorkloadIdClientRequestTokenRoute,
  deleteWorkloadsWorkloadIdSharesShareIdClientRequestTokenRoute,
  getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdRoute,
  getWorkloadsWorkloadIdLensReviewsLensAliasAnswersRoute,
  getWorkloadsWorkloadIdLensReviewsLensAliasImprovementsRoute,
  getWorkloadsWorkloadIdLensReviewsLensAliasReportRoute,
  getWorkloadsWorkloadIdLensReviewsLensAliasRoute,
  getWorkloadsWorkloadIdLensReviewsRoute,
  getWorkloadsWorkloadIdMilestonesMilestoneNumberRoute,
  getWorkloadsWorkloadIdRoute,
  getWorkloadsWorkloadIdSharesRoute,
  patchWorkloadsWorkloadIdAssociateLensesRoute,
  patchWorkloadsWorkloadIdDisassociateLensesRoute,
  patchWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdRoute,
  patchWorkloadsWorkloadIdLensReviewsLensAliasRoute,
  patchWorkloadsWorkloadIdRoute,
  patchWorkloadsWorkloadIdSharesShareIdRoute,
  postWorkloadsRoute,
  postWorkloadsWorkloadIdChecksRoute,
  postWorkloadsWorkloadIdCheckSummariesRoute,
  postWorkloadsWorkloadIdMilestonesRoute,
  postWorkloadsWorkloadIdMilestonesSummariesRoute,
  postWorkloadsWorkloadIdSharesRoute,
  putWorkloadsWorkloadIdLensReviewsLensAliasUpgradeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workloadsHandler = app
  .openapi(patchWorkloadsWorkloadIdAssociateLensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkloadsWorkloadIdMilestonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkloadsWorkloadIdSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkloadsWorkloadIdSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkloadsWorkloadIdClientRequestTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkloadsWorkloadIdSharesShareIdClientRequestTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWorkloadsWorkloadIdDisassociateLensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkloadsWorkloadIdLensReviewsLensAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWorkloadsWorkloadIdLensReviewsLensAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkloadsWorkloadIdLensReviewsLensAliasReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkloadsWorkloadIdMilestonesMilestoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkloadsWorkloadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWorkloadsWorkloadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkloadsWorkloadIdLensReviewsLensAliasAnswersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkloadsWorkloadIdChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkloadsWorkloadIdCheckSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkloadsWorkloadIdLensReviewsLensAliasImprovementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkloadsWorkloadIdLensReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkloadsWorkloadIdMilestonesSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWorkloadsWorkloadIdSharesShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkloadsWorkloadIdLensReviewsLensAliasUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
