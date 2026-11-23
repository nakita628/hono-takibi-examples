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
} from './routes'
import {
  deleteV4NameReplyRouteHandler,
  deleteV4NameRouteHandler,
  deleteV4ParentAnswersDeleteRouteHandler,
  getV4AccountsRouteHandler,
  getV4AttributesRouteHandler,
  getV4CategoriesBatchGetRouteHandler,
  getV4CategoriesRouteHandler,
  getV4ChainsSearchRouteHandler,
  getV4NameGetGoogleUpdatedRouteHandler,
  getV4NameGoogleUpdatedRouteHandler,
  getV4NameRecommendGoogleLocationsRouteHandler,
  getV4NameRouteHandler,
  getV4ParentAdminsRouteHandler,
  getV4ParentAnswersRouteHandler,
  getV4ParentInsuranceNetworksRouteHandler,
  getV4ParentInvitationsRouteHandler,
  getV4ParentLocalPostsRouteHandler,
  getV4ParentLocationsRouteHandler,
  getV4ParentMediaCustomersRouteHandler,
  getV4ParentMediaRouteHandler,
  getV4ParentQuestionsRouteHandler,
  getV4ParentReviewsRouteHandler,
  getV4ParentVerificationsRouteHandler,
  patchV4NameRouteHandler,
  postV4AccountsRouteHandler,
  postV4GoogleLocationsSearchRouteHandler,
  postV4NameAcceptRouteHandler,
  postV4NameAssociateRouteHandler,
  postV4NameClearAssociationRouteHandler,
  postV4NameCompleteRouteHandler,
  postV4NameDeclineRouteHandler,
  postV4NameFetchVerificationOptionsRouteHandler,
  postV4NameFindMatchesRouteHandler,
  postV4NameGenerateAccountNumberRouteHandler,
  postV4NameLocalPostsReportInsightsRouteHandler,
  postV4NameLocationsBatchGetReviewsRouteHandler,
  postV4NameLocationsBatchGetRouteHandler,
  postV4NameLocationsReportInsightsRouteHandler,
  postV4NameReportRouteHandler,
  postV4NameTransferRouteHandler,
  postV4NameVerifyRouteHandler,
  postV4ParentAdminsRouteHandler,
  postV4ParentAnswersUpsertRouteHandler,
  postV4ParentLocalPostsRouteHandler,
  postV4ParentLocationsRouteHandler,
  postV4ParentMediaRouteHandler,
  postV4ParentMediaStartUploadRouteHandler,
  postV4ParentQuestionsRouteHandler,
  putV4NameReplyRouteHandler,
  putV4NameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV4AccountsRoute, getV4AccountsRouteHandler)
  .openapi(postV4AccountsRoute, postV4AccountsRouteHandler)
  .openapi(getV4AttributesRoute, getV4AttributesRouteHandler)
  .openapi(getV4CategoriesRoute, getV4CategoriesRouteHandler)
  .openapi(getV4CategoriesBatchGetRoute, getV4CategoriesBatchGetRouteHandler)
  .openapi(getV4ChainsSearchRoute, getV4ChainsSearchRouteHandler)
  .openapi(postV4GoogleLocationsSearchRoute, postV4GoogleLocationsSearchRouteHandler)
  .openapi(deleteV4NameRoute, deleteV4NameRouteHandler)
  .openapi(getV4NameRoute, getV4NameRouteHandler)
  .openapi(patchV4NameRoute, patchV4NameRouteHandler)
  .openapi(putV4NameRoute, putV4NameRouteHandler)
  .openapi(postV4NameLocalPostsReportInsightsRoute, postV4NameLocalPostsReportInsightsRouteHandler)
  .openapi(postV4NameLocationsBatchGetRoute, postV4NameLocationsBatchGetRouteHandler)
  .openapi(postV4NameLocationsBatchGetReviewsRoute, postV4NameLocationsBatchGetReviewsRouteHandler)
  .openapi(postV4NameLocationsReportInsightsRoute, postV4NameLocationsReportInsightsRouteHandler)
  .openapi(deleteV4NameReplyRoute, deleteV4NameReplyRouteHandler)
  .openapi(putV4NameReplyRoute, putV4NameReplyRouteHandler)
  .openapi(postV4NameAcceptRoute, postV4NameAcceptRouteHandler)
  .openapi(postV4NameAssociateRoute, postV4NameAssociateRouteHandler)
  .openapi(postV4NameClearAssociationRoute, postV4NameClearAssociationRouteHandler)
  .openapi(postV4NameCompleteRoute, postV4NameCompleteRouteHandler)
  .openapi(postV4NameDeclineRoute, postV4NameDeclineRouteHandler)
  .openapi(postV4NameFetchVerificationOptionsRoute, postV4NameFetchVerificationOptionsRouteHandler)
  .openapi(postV4NameFindMatchesRoute, postV4NameFindMatchesRouteHandler)
  .openapi(postV4NameGenerateAccountNumberRoute, postV4NameGenerateAccountNumberRouteHandler)
  .openapi(getV4NameGetGoogleUpdatedRoute, getV4NameGetGoogleUpdatedRouteHandler)
  .openapi(getV4NameGoogleUpdatedRoute, getV4NameGoogleUpdatedRouteHandler)
  .openapi(getV4NameRecommendGoogleLocationsRoute, getV4NameRecommendGoogleLocationsRouteHandler)
  .openapi(postV4NameReportRoute, postV4NameReportRouteHandler)
  .openapi(postV4NameTransferRoute, postV4NameTransferRouteHandler)
  .openapi(postV4NameVerifyRoute, postV4NameVerifyRouteHandler)
  .openapi(getV4ParentAdminsRoute, getV4ParentAdminsRouteHandler)
  .openapi(postV4ParentAdminsRoute, postV4ParentAdminsRouteHandler)
  .openapi(getV4ParentAnswersRoute, getV4ParentAnswersRouteHandler)
  .openapi(deleteV4ParentAnswersDeleteRoute, deleteV4ParentAnswersDeleteRouteHandler)
  .openapi(postV4ParentAnswersUpsertRoute, postV4ParentAnswersUpsertRouteHandler)
  .openapi(getV4ParentInsuranceNetworksRoute, getV4ParentInsuranceNetworksRouteHandler)
  .openapi(getV4ParentInvitationsRoute, getV4ParentInvitationsRouteHandler)
  .openapi(getV4ParentLocalPostsRoute, getV4ParentLocalPostsRouteHandler)
  .openapi(postV4ParentLocalPostsRoute, postV4ParentLocalPostsRouteHandler)
  .openapi(getV4ParentLocationsRoute, getV4ParentLocationsRouteHandler)
  .openapi(postV4ParentLocationsRoute, postV4ParentLocationsRouteHandler)
  .openapi(getV4ParentMediaRoute, getV4ParentMediaRouteHandler)
  .openapi(postV4ParentMediaRoute, postV4ParentMediaRouteHandler)
  .openapi(getV4ParentMediaCustomersRoute, getV4ParentMediaCustomersRouteHandler)
  .openapi(postV4ParentMediaStartUploadRoute, postV4ParentMediaStartUploadRouteHandler)
  .openapi(getV4ParentQuestionsRoute, getV4ParentQuestionsRouteHandler)
  .openapi(postV4ParentQuestionsRoute, postV4ParentQuestionsRouteHandler)
  .openapi(getV4ParentReviewsRoute, getV4ParentReviewsRouteHandler)
  .openapi(getV4ParentVerificationsRoute, getV4ParentVerificationsRouteHandler)

export default app
