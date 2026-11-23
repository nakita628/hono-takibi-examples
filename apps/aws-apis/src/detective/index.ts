import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsResourceArnTagKeysRoute,
  getTagsResourceArnRoute,
  postGraphDatasourcesGetRoute,
  postGraphDatasourcesListRoute,
  postGraphDatasourcesUpdateRoute,
  postGraphMemberMonitoringstateRoute,
  postGraphMembersGetRoute,
  postGraphMembersListRoute,
  postGraphMembersRemovalRoute,
  postGraphMembersRoute,
  postGraphRemovalRoute,
  postGraphRoute,
  postGraphsListRoute,
  postInvitationRemovalRoute,
  postInvitationsListRoute,
  postMembershipDatasourcesGetRoute,
  postMembershipRemovalRoute,
  postOrgsAdminAccountslistRoute,
  postOrgsDescribeOrganizationConfigurationRoute,
  postOrgsDisableAdminAccountRoute,
  postOrgsEnableAdminAccountRoute,
  postOrgsUpdateOrganizationConfigurationRoute,
  postTagsResourceArnRoute,
  putInvitationRoute,
} from './routes'
import {
  deleteTagsResourceArnTagKeysRouteHandler,
  getTagsResourceArnRouteHandler,
  postGraphDatasourcesGetRouteHandler,
  postGraphDatasourcesListRouteHandler,
  postGraphDatasourcesUpdateRouteHandler,
  postGraphMemberMonitoringstateRouteHandler,
  postGraphMembersGetRouteHandler,
  postGraphMembersListRouteHandler,
  postGraphMembersRemovalRouteHandler,
  postGraphMembersRouteHandler,
  postGraphRemovalRouteHandler,
  postGraphRouteHandler,
  postGraphsListRouteHandler,
  postInvitationRemovalRouteHandler,
  postInvitationsListRouteHandler,
  postMembershipDatasourcesGetRouteHandler,
  postMembershipRemovalRouteHandler,
  postOrgsAdminAccountslistRouteHandler,
  postOrgsDescribeOrganizationConfigurationRouteHandler,
  postOrgsDisableAdminAccountRouteHandler,
  postOrgsEnableAdminAccountRouteHandler,
  postOrgsUpdateOrganizationConfigurationRouteHandler,
  postTagsResourceArnRouteHandler,
  putInvitationRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(putInvitationRoute, putInvitationRouteHandler)
  .openapi(postGraphDatasourcesGetRoute, postGraphDatasourcesGetRouteHandler)
  .openapi(postMembershipDatasourcesGetRoute, postMembershipDatasourcesGetRouteHandler)
  .openapi(postGraphRoute, postGraphRouteHandler)
  .openapi(postGraphMembersRoute, postGraphMembersRouteHandler)
  .openapi(postGraphRemovalRoute, postGraphRemovalRouteHandler)
  .openapi(postGraphMembersRemovalRoute, postGraphMembersRemovalRouteHandler)
  .openapi(
    postOrgsDescribeOrganizationConfigurationRoute,
    postOrgsDescribeOrganizationConfigurationRouteHandler,
  )
  .openapi(postOrgsDisableAdminAccountRoute, postOrgsDisableAdminAccountRouteHandler)
  .openapi(postMembershipRemovalRoute, postMembershipRemovalRouteHandler)
  .openapi(postOrgsEnableAdminAccountRoute, postOrgsEnableAdminAccountRouteHandler)
  .openapi(postGraphMembersGetRoute, postGraphMembersGetRouteHandler)
  .openapi(postGraphDatasourcesListRoute, postGraphDatasourcesListRouteHandler)
  .openapi(postGraphsListRoute, postGraphsListRouteHandler)
  .openapi(postInvitationsListRoute, postInvitationsListRouteHandler)
  .openapi(postGraphMembersListRoute, postGraphMembersListRouteHandler)
  .openapi(postOrgsAdminAccountslistRoute, postOrgsAdminAccountslistRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(postInvitationRemovalRoute, postInvitationRemovalRouteHandler)
  .openapi(postGraphMemberMonitoringstateRoute, postGraphMemberMonitoringstateRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(postGraphDatasourcesUpdateRoute, postGraphDatasourcesUpdateRouteHandler)
  .openapi(
    postOrgsUpdateOrganizationConfigurationRoute,
    postOrgsUpdateOrganizationConfigurationRouteHandler,
  )

export default app
