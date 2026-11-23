import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV4NameReplyRoute,
  deleteV4NameRoute,
  deleteV4ParentAnswersDeleteRoute,
  getV4AccountsRoute,
  getV4AttributesRoute,
  getV4CategoriesBatchGetRoute,
  getV4CategoriesRoute,
  getV4ChainsSearchRoute,
  getV4NameGetGoogleUpdatedRoute,
  getV4NameGoogleUpdatedRoute,
  getV4NameRecommendGoogleLocationsRoute,
  getV4NameRoute,
  getV4ParentAdminsRoute,
  getV4ParentAnswersRoute,
  getV4ParentInsuranceNetworksRoute,
  getV4ParentInvitationsRoute,
  getV4ParentLocalPostsRoute,
  getV4ParentLocationsRoute,
  getV4ParentMediaCustomersRoute,
  getV4ParentMediaRoute,
  getV4ParentQuestionsRoute,
  getV4ParentReviewsRoute,
  getV4ParentVerificationsRoute,
  patchV4NameRoute,
  postV4AccountsRoute,
  postV4GoogleLocationsSearchRoute,
  postV4NameAcceptRoute,
  postV4NameAssociateRoute,
  postV4NameClearAssociationRoute,
  postV4NameCompleteRoute,
  postV4NameDeclineRoute,
  postV4NameFetchVerificationOptionsRoute,
  postV4NameFindMatchesRoute,
  postV4NameGenerateAccountNumberRoute,
  postV4NameLocalPostsReportInsightsRoute,
  postV4NameLocationsBatchGetReviewsRoute,
  postV4NameLocationsBatchGetRoute,
  postV4NameLocationsReportInsightsRoute,
  postV4NameReportRoute,
  postV4NameTransferRoute,
  postV4NameVerifyRoute,
  postV4ParentAdminsRoute,
  postV4ParentAnswersUpsertRoute,
  postV4ParentLocalPostsRoute,
  postV4ParentLocationsRoute,
  postV4ParentMediaRoute,
  postV4ParentMediaStartUploadRoute,
  postV4ParentQuestionsRoute,
  putV4NameReplyRoute,
  putV4NameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v4Handler = app
  .openapi(getV4AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4AttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4CategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4CategoriesBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ChainsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4GoogleLocationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV4NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NameLocalPostsReportInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NameLocationsBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NameLocationsBatchGetReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NameLocationsReportInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4NameReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NameReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NameAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NameAssociateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NameClearAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NameCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NameDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NameFetchVerificationOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NameFindMatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NameGenerateAccountNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NameGetGoogleUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NameGoogleUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NameRecommendGoogleLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NameReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NameTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NameVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ParentAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4ParentAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ParentAnswersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4ParentAnswersDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4ParentAnswersUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ParentInsuranceNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ParentInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ParentLocalPostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4ParentLocalPostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ParentLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4ParentLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ParentMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4ParentMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ParentMediaCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4ParentMediaStartUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ParentQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4ParentQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ParentReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ParentVerificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
