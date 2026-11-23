import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsRoute,
  deleteActionTargetsActionTargetArnRoute,
  deleteFindingAggregatorDeleteFindingAggregatorArnRoute,
  deleteInsightsInsightArnRoute,
  deleteProductSubscriptionsProductSubscriptionArnRoute,
  deleteTagsResourceArnTagKeysRoute,
  getAccountsRoute,
  getAdministratorRoute,
  getAssociationsSecurityControlIdRoute,
  getFindingAggregatorGetFindingAggregatorArnRoute,
  getFindingAggregatorListRoute,
  getInsightsResultsInsightArnRoute,
  getInvitationsCountRoute,
  getInvitationsRoute,
  getMasterRoute,
  getMembersRoute,
  getOrganizationAdminRoute,
  getOrganizationConfigurationRoute,
  getProductsRoute,
  getProductSubscriptionsRoute,
  getSecurityControlsDefinitionsRoute,
  getStandardsControlsStandardsSubscriptionArnRoute,
  getStandardsRoute,
  getTagsResourceArnRoute,
  patchAccountsRoute,
  patchActionTargetsActionTargetArnRoute,
  patchAssociationsRoute,
  patchFindingAggregatorUpdateRoute,
  patchFindingsBatchupdateRoute,
  patchFindingsRoute,
  patchInsightsInsightArnRoute,
  patchStandardsControlStandardsControlArnRoute,
  postAccountsRoute,
  postActionTargetsGetRoute,
  postActionTargetsRoute,
  postAdministratorDisassociateRoute,
  postAdministratorRoute,
  postAssociationsBatchGetRoute,
  postFindingAggregatorCreateRoute,
  postFindingsImportRoute,
  postFindingsRoute,
  postInsightsGetRoute,
  postInsightsRoute,
  postInvitationsDeclineRoute,
  postInvitationsDeleteRoute,
  postMasterDisassociateRoute,
  postMasterRoute,
  postMembersDeleteRoute,
  postMembersDisassociateRoute,
  postMembersGetRoute,
  postMembersInviteRoute,
  postMembersRoute,
  postOrganizationAdminDisableRoute,
  postOrganizationAdminEnableRoute,
  postOrganizationConfigurationRoute,
  postProductSubscriptionsRoute,
  postSecurityControlsBatchGetRoute,
  postStandardsDeregisterRoute,
  postStandardsGetRoute,
  postStandardsRegisterRoute,
  postTagsResourceArnRoute,
} from './routes'
import {
  deleteAccountsRouteHandler,
  deleteActionTargetsActionTargetArnRouteHandler,
  deleteFindingAggregatorDeleteFindingAggregatorArnRouteHandler,
  deleteInsightsInsightArnRouteHandler,
  deleteProductSubscriptionsProductSubscriptionArnRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getAccountsRouteHandler,
  getAdministratorRouteHandler,
  getAssociationsSecurityControlIdRouteHandler,
  getFindingAggregatorGetFindingAggregatorArnRouteHandler,
  getFindingAggregatorListRouteHandler,
  getInsightsResultsInsightArnRouteHandler,
  getInvitationsCountRouteHandler,
  getInvitationsRouteHandler,
  getMasterRouteHandler,
  getMembersRouteHandler,
  getOrganizationAdminRouteHandler,
  getOrganizationConfigurationRouteHandler,
  getProductsRouteHandler,
  getProductSubscriptionsRouteHandler,
  getSecurityControlsDefinitionsRouteHandler,
  getStandardsControlsStandardsSubscriptionArnRouteHandler,
  getStandardsRouteHandler,
  getTagsResourceArnRouteHandler,
  patchAccountsRouteHandler,
  patchActionTargetsActionTargetArnRouteHandler,
  patchAssociationsRouteHandler,
  patchFindingAggregatorUpdateRouteHandler,
  patchFindingsBatchupdateRouteHandler,
  patchFindingsRouteHandler,
  patchInsightsInsightArnRouteHandler,
  patchStandardsControlStandardsControlArnRouteHandler,
  postAccountsRouteHandler,
  postActionTargetsGetRouteHandler,
  postActionTargetsRouteHandler,
  postAdministratorDisassociateRouteHandler,
  postAdministratorRouteHandler,
  postAssociationsBatchGetRouteHandler,
  postFindingAggregatorCreateRouteHandler,
  postFindingsImportRouteHandler,
  postFindingsRouteHandler,
  postInsightsGetRouteHandler,
  postInsightsRouteHandler,
  postInvitationsDeclineRouteHandler,
  postInvitationsDeleteRouteHandler,
  postMasterDisassociateRouteHandler,
  postMasterRouteHandler,
  postMembersDeleteRouteHandler,
  postMembersDisassociateRouteHandler,
  postMembersGetRouteHandler,
  postMembersInviteRouteHandler,
  postMembersRouteHandler,
  postOrganizationAdminDisableRouteHandler,
  postOrganizationAdminEnableRouteHandler,
  postOrganizationConfigurationRouteHandler,
  postProductSubscriptionsRouteHandler,
  postSecurityControlsBatchGetRouteHandler,
  postStandardsDeregisterRouteHandler,
  postStandardsGetRouteHandler,
  postStandardsRegisterRouteHandler,
  postTagsResourceArnRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAdministratorRoute, postAdministratorRouteHandler)
  .openapi(getAdministratorRoute, getAdministratorRouteHandler)
  .openapi(postMasterRoute, postMasterRouteHandler)
  .openapi(getMasterRoute, getMasterRouteHandler)
  .openapi(postStandardsDeregisterRoute, postStandardsDeregisterRouteHandler)
  .openapi(postStandardsRegisterRoute, postStandardsRegisterRouteHandler)
  .openapi(postSecurityControlsBatchGetRoute, postSecurityControlsBatchGetRouteHandler)
  .openapi(postAssociationsBatchGetRoute, postAssociationsBatchGetRouteHandler)
  .openapi(postFindingsImportRoute, postFindingsImportRouteHandler)
  .openapi(patchFindingsBatchupdateRoute, patchFindingsBatchupdateRouteHandler)
  .openapi(patchAssociationsRoute, patchAssociationsRouteHandler)
  .openapi(postActionTargetsRoute, postActionTargetsRouteHandler)
  .openapi(postFindingAggregatorCreateRoute, postFindingAggregatorCreateRouteHandler)
  .openapi(postInsightsRoute, postInsightsRouteHandler)
  .openapi(postMembersRoute, postMembersRouteHandler)
  .openapi(getMembersRoute, getMembersRouteHandler)
  .openapi(postInvitationsDeclineRoute, postInvitationsDeclineRouteHandler)
  .openapi(deleteActionTargetsActionTargetArnRoute, deleteActionTargetsActionTargetArnRouteHandler)
  .openapi(patchActionTargetsActionTargetArnRoute, patchActionTargetsActionTargetArnRouteHandler)
  .openapi(
    deleteFindingAggregatorDeleteFindingAggregatorArnRoute,
    deleteFindingAggregatorDeleteFindingAggregatorArnRouteHandler,
  )
  .openapi(deleteInsightsInsightArnRoute, deleteInsightsInsightArnRouteHandler)
  .openapi(patchInsightsInsightArnRoute, patchInsightsInsightArnRouteHandler)
  .openapi(postInvitationsDeleteRoute, postInvitationsDeleteRouteHandler)
  .openapi(postMembersDeleteRoute, postMembersDeleteRouteHandler)
  .openapi(postActionTargetsGetRoute, postActionTargetsGetRouteHandler)
  .openapi(getAccountsRoute, getAccountsRouteHandler)
  .openapi(deleteAccountsRoute, deleteAccountsRouteHandler)
  .openapi(postAccountsRoute, postAccountsRouteHandler)
  .openapi(patchAccountsRoute, patchAccountsRouteHandler)
  .openapi(getOrganizationConfigurationRoute, getOrganizationConfigurationRouteHandler)
  .openapi(postOrganizationConfigurationRoute, postOrganizationConfigurationRouteHandler)
  .openapi(getProductsRoute, getProductsRouteHandler)
  .openapi(getStandardsRoute, getStandardsRouteHandler)
  .openapi(
    getStandardsControlsStandardsSubscriptionArnRoute,
    getStandardsControlsStandardsSubscriptionArnRouteHandler,
  )
  .openapi(
    deleteProductSubscriptionsProductSubscriptionArnRoute,
    deleteProductSubscriptionsProductSubscriptionArnRouteHandler,
  )
  .openapi(postOrganizationAdminDisableRoute, postOrganizationAdminDisableRouteHandler)
  .openapi(postAdministratorDisassociateRoute, postAdministratorDisassociateRouteHandler)
  .openapi(postMasterDisassociateRoute, postMasterDisassociateRouteHandler)
  .openapi(postMembersDisassociateRoute, postMembersDisassociateRouteHandler)
  .openapi(postProductSubscriptionsRoute, postProductSubscriptionsRouteHandler)
  .openapi(getProductSubscriptionsRoute, getProductSubscriptionsRouteHandler)
  .openapi(postOrganizationAdminEnableRoute, postOrganizationAdminEnableRouteHandler)
  .openapi(postStandardsGetRoute, postStandardsGetRouteHandler)
  .openapi(
    getFindingAggregatorGetFindingAggregatorArnRoute,
    getFindingAggregatorGetFindingAggregatorArnRouteHandler,
  )
  .openapi(postFindingsRoute, postFindingsRouteHandler)
  .openapi(patchFindingsRoute, patchFindingsRouteHandler)
  .openapi(getInsightsResultsInsightArnRoute, getInsightsResultsInsightArnRouteHandler)
  .openapi(postInsightsGetRoute, postInsightsGetRouteHandler)
  .openapi(getInvitationsCountRoute, getInvitationsCountRouteHandler)
  .openapi(postMembersGetRoute, postMembersGetRouteHandler)
  .openapi(postMembersInviteRoute, postMembersInviteRouteHandler)
  .openapi(getFindingAggregatorListRoute, getFindingAggregatorListRouteHandler)
  .openapi(getInvitationsRoute, getInvitationsRouteHandler)
  .openapi(getOrganizationAdminRoute, getOrganizationAdminRouteHandler)
  .openapi(getSecurityControlsDefinitionsRoute, getSecurityControlsDefinitionsRouteHandler)
  .openapi(getAssociationsSecurityControlIdRoute, getAssociationsSecurityControlIdRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(patchFindingAggregatorUpdateRoute, patchFindingAggregatorUpdateRouteHandler)
  .openapi(
    patchStandardsControlStandardsControlArnRoute,
    patchStandardsControlStandardsControlArnRouteHandler,
  )

export default app
