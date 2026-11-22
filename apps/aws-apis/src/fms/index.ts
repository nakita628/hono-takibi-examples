import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSFMS20180101AssociateAdminAccountHandler,
  XAmzTargetAWSFMS20180101AssociateThirdPartyFirewallHandler,
  XAmzTargetAWSFMS20180101BatchAssociateResourceHandler,
  XAmzTargetAWSFMS20180101BatchDisassociateResourceHandler,
  XAmzTargetAWSFMS20180101DeleteAppsListHandler,
  XAmzTargetAWSFMS20180101DeleteNotificationChannelHandler,
  XAmzTargetAWSFMS20180101DeletePolicyHandler,
  XAmzTargetAWSFMS20180101DeleteProtocolsListHandler,
  XAmzTargetAWSFMS20180101DeleteResourceSetHandler,
  XAmzTargetAWSFMS20180101DisassociateAdminAccountHandler,
  XAmzTargetAWSFMS20180101DisassociateThirdPartyFirewallHandler,
  XAmzTargetAWSFMS20180101GetAdminAccountHandler,
  XAmzTargetAWSFMS20180101GetAdminScopeHandler,
  XAmzTargetAWSFMS20180101GetAppsListHandler,
  XAmzTargetAWSFMS20180101GetComplianceDetailHandler,
  XAmzTargetAWSFMS20180101GetNotificationChannelHandler,
  XAmzTargetAWSFMS20180101GetPolicyHandler,
  XAmzTargetAWSFMS20180101GetProtectionStatusHandler,
  XAmzTargetAWSFMS20180101GetProtocolsListHandler,
  XAmzTargetAWSFMS20180101GetResourceSetHandler,
  XAmzTargetAWSFMS20180101GetThirdPartyFirewallAssociationStatusHandler,
  XAmzTargetAWSFMS20180101GetViolationDetailsHandler,
  XAmzTargetAWSFMS20180101ListAdminAccountsForOrganizationHandler,
  XAmzTargetAWSFMS20180101ListAdminsManagingAccountHandler,
  XAmzTargetAWSFMS20180101ListAppsListsHandler,
  XAmzTargetAWSFMS20180101ListComplianceStatusHandler,
  XAmzTargetAWSFMS20180101ListDiscoveredResourcesHandler,
  XAmzTargetAWSFMS20180101ListMemberAccountsHandler,
  XAmzTargetAWSFMS20180101ListPoliciesHandler,
  XAmzTargetAWSFMS20180101ListProtocolsListsHandler,
  XAmzTargetAWSFMS20180101ListResourceSetResourcesHandler,
  XAmzTargetAWSFMS20180101ListResourceSetsHandler,
  XAmzTargetAWSFMS20180101ListTagsForResourceHandler,
  XAmzTargetAWSFMS20180101ListThirdPartyFirewallFirewallPoliciesHandler,
  XAmzTargetAWSFMS20180101PutAdminAccountHandler,
  XAmzTargetAWSFMS20180101PutAppsListHandler,
  XAmzTargetAWSFMS20180101PutNotificationChannelHandler,
  XAmzTargetAWSFMS20180101PutPolicyHandler,
  XAmzTargetAWSFMS20180101PutProtocolsListHandler,
  XAmzTargetAWSFMS20180101PutResourceSetHandler,
  XAmzTargetAWSFMS20180101TagResourceHandler,
  XAmzTargetAWSFMS20180101UntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSFMS20180101AssociateAdminAccountHandler)
  .route('/', XAmzTargetAWSFMS20180101AssociateThirdPartyFirewallHandler)
  .route('/', XAmzTargetAWSFMS20180101BatchAssociateResourceHandler)
  .route('/', XAmzTargetAWSFMS20180101BatchDisassociateResourceHandler)
  .route('/', XAmzTargetAWSFMS20180101DeleteAppsListHandler)
  .route('/', XAmzTargetAWSFMS20180101DeleteNotificationChannelHandler)
  .route('/', XAmzTargetAWSFMS20180101DeletePolicyHandler)
  .route('/', XAmzTargetAWSFMS20180101DeleteProtocolsListHandler)
  .route('/', XAmzTargetAWSFMS20180101DeleteResourceSetHandler)
  .route('/', XAmzTargetAWSFMS20180101DisassociateAdminAccountHandler)
  .route('/', XAmzTargetAWSFMS20180101DisassociateThirdPartyFirewallHandler)
  .route('/', XAmzTargetAWSFMS20180101GetAdminAccountHandler)
  .route('/', XAmzTargetAWSFMS20180101GetAdminScopeHandler)
  .route('/', XAmzTargetAWSFMS20180101GetAppsListHandler)
  .route('/', XAmzTargetAWSFMS20180101GetComplianceDetailHandler)
  .route('/', XAmzTargetAWSFMS20180101GetNotificationChannelHandler)
  .route('/', XAmzTargetAWSFMS20180101GetPolicyHandler)
  .route('/', XAmzTargetAWSFMS20180101GetProtectionStatusHandler)
  .route('/', XAmzTargetAWSFMS20180101GetProtocolsListHandler)
  .route('/', XAmzTargetAWSFMS20180101GetResourceSetHandler)
  .route('/', XAmzTargetAWSFMS20180101GetThirdPartyFirewallAssociationStatusHandler)
  .route('/', XAmzTargetAWSFMS20180101GetViolationDetailsHandler)
  .route('/', XAmzTargetAWSFMS20180101ListAdminAccountsForOrganizationHandler)
  .route('/', XAmzTargetAWSFMS20180101ListAdminsManagingAccountHandler)
  .route('/', XAmzTargetAWSFMS20180101ListAppsListsHandler)
  .route('/', XAmzTargetAWSFMS20180101ListComplianceStatusHandler)
  .route('/', XAmzTargetAWSFMS20180101ListDiscoveredResourcesHandler)
  .route('/', XAmzTargetAWSFMS20180101ListMemberAccountsHandler)
  .route('/', XAmzTargetAWSFMS20180101ListPoliciesHandler)
  .route('/', XAmzTargetAWSFMS20180101ListProtocolsListsHandler)
  .route('/', XAmzTargetAWSFMS20180101ListResourceSetResourcesHandler)
  .route('/', XAmzTargetAWSFMS20180101ListResourceSetsHandler)
  .route('/', XAmzTargetAWSFMS20180101ListTagsForResourceHandler)
  .route('/', XAmzTargetAWSFMS20180101ListThirdPartyFirewallFirewallPoliciesHandler)
  .route('/', XAmzTargetAWSFMS20180101PutAdminAccountHandler)
  .route('/', XAmzTargetAWSFMS20180101PutAppsListHandler)
  .route('/', XAmzTargetAWSFMS20180101PutNotificationChannelHandler)
  .route('/', XAmzTargetAWSFMS20180101PutPolicyHandler)
  .route('/', XAmzTargetAWSFMS20180101PutProtocolsListHandler)
  .route('/', XAmzTargetAWSFMS20180101PutResourceSetHandler)
  .route('/', XAmzTargetAWSFMS20180101TagResourceHandler)
  .route('/', XAmzTargetAWSFMS20180101UntagResourceHandler)

export default app
