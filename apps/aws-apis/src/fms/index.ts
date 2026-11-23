import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsfms20180101AssociateAdminAccountHandler,
  xAmzTargetAwsfms20180101AssociateThirdPartyFirewallHandler,
  xAmzTargetAwsfms20180101BatchAssociateResourceHandler,
  xAmzTargetAwsfms20180101BatchDisassociateResourceHandler,
  xAmzTargetAwsfms20180101DeleteAppsListHandler,
  xAmzTargetAwsfms20180101DeleteNotificationChannelHandler,
  xAmzTargetAwsfms20180101DeletePolicyHandler,
  xAmzTargetAwsfms20180101DeleteProtocolsListHandler,
  xAmzTargetAwsfms20180101DeleteResourceSetHandler,
  xAmzTargetAwsfms20180101DisassociateAdminAccountHandler,
  xAmzTargetAwsfms20180101DisassociateThirdPartyFirewallHandler,
  xAmzTargetAwsfms20180101GetAdminAccountHandler,
  xAmzTargetAwsfms20180101GetAdminScopeHandler,
  xAmzTargetAwsfms20180101GetAppsListHandler,
  xAmzTargetAwsfms20180101GetComplianceDetailHandler,
  xAmzTargetAwsfms20180101GetNotificationChannelHandler,
  xAmzTargetAwsfms20180101GetPolicyHandler,
  xAmzTargetAwsfms20180101GetProtectionStatusHandler,
  xAmzTargetAwsfms20180101GetProtocolsListHandler,
  xAmzTargetAwsfms20180101GetResourceSetHandler,
  xAmzTargetAwsfms20180101GetThirdPartyFirewallAssociationStatusHandler,
  xAmzTargetAwsfms20180101GetViolationDetailsHandler,
  xAmzTargetAwsfms20180101ListAdminAccountsForOrganizationHandler,
  xAmzTargetAwsfms20180101ListAdminsManagingAccountHandler,
  xAmzTargetAwsfms20180101ListAppsListsHandler,
  xAmzTargetAwsfms20180101ListComplianceStatusHandler,
  xAmzTargetAwsfms20180101ListDiscoveredResourcesHandler,
  xAmzTargetAwsfms20180101ListMemberAccountsHandler,
  xAmzTargetAwsfms20180101ListPoliciesHandler,
  xAmzTargetAwsfms20180101ListProtocolsListsHandler,
  xAmzTargetAwsfms20180101ListResourceSetResourcesHandler,
  xAmzTargetAwsfms20180101ListResourceSetsHandler,
  xAmzTargetAwsfms20180101ListTagsForResourceHandler,
  xAmzTargetAwsfms20180101ListThirdPartyFirewallFirewallPoliciesHandler,
  xAmzTargetAwsfms20180101PutAdminAccountHandler,
  xAmzTargetAwsfms20180101PutAppsListHandler,
  xAmzTargetAwsfms20180101PutNotificationChannelHandler,
  xAmzTargetAwsfms20180101PutPolicyHandler,
  xAmzTargetAwsfms20180101PutProtocolsListHandler,
  xAmzTargetAwsfms20180101PutResourceSetHandler,
  xAmzTargetAwsfms20180101TagResourceHandler,
  xAmzTargetAwsfms20180101UntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsfms20180101AssociateAdminAccountHandler)
  .route('/', xAmzTargetAwsfms20180101AssociateThirdPartyFirewallHandler)
  .route('/', xAmzTargetAwsfms20180101BatchAssociateResourceHandler)
  .route('/', xAmzTargetAwsfms20180101BatchDisassociateResourceHandler)
  .route('/', xAmzTargetAwsfms20180101DeleteAppsListHandler)
  .route('/', xAmzTargetAwsfms20180101DeleteNotificationChannelHandler)
  .route('/', xAmzTargetAwsfms20180101DeletePolicyHandler)
  .route('/', xAmzTargetAwsfms20180101DeleteProtocolsListHandler)
  .route('/', xAmzTargetAwsfms20180101DeleteResourceSetHandler)
  .route('/', xAmzTargetAwsfms20180101DisassociateAdminAccountHandler)
  .route('/', xAmzTargetAwsfms20180101DisassociateThirdPartyFirewallHandler)
  .route('/', xAmzTargetAwsfms20180101GetAdminAccountHandler)
  .route('/', xAmzTargetAwsfms20180101GetAdminScopeHandler)
  .route('/', xAmzTargetAwsfms20180101GetAppsListHandler)
  .route('/', xAmzTargetAwsfms20180101GetComplianceDetailHandler)
  .route('/', xAmzTargetAwsfms20180101GetNotificationChannelHandler)
  .route('/', xAmzTargetAwsfms20180101GetPolicyHandler)
  .route('/', xAmzTargetAwsfms20180101GetProtectionStatusHandler)
  .route('/', xAmzTargetAwsfms20180101GetProtocolsListHandler)
  .route('/', xAmzTargetAwsfms20180101GetResourceSetHandler)
  .route('/', xAmzTargetAwsfms20180101GetThirdPartyFirewallAssociationStatusHandler)
  .route('/', xAmzTargetAwsfms20180101GetViolationDetailsHandler)
  .route('/', xAmzTargetAwsfms20180101ListAdminAccountsForOrganizationHandler)
  .route('/', xAmzTargetAwsfms20180101ListAdminsManagingAccountHandler)
  .route('/', xAmzTargetAwsfms20180101ListAppsListsHandler)
  .route('/', xAmzTargetAwsfms20180101ListComplianceStatusHandler)
  .route('/', xAmzTargetAwsfms20180101ListDiscoveredResourcesHandler)
  .route('/', xAmzTargetAwsfms20180101ListMemberAccountsHandler)
  .route('/', xAmzTargetAwsfms20180101ListPoliciesHandler)
  .route('/', xAmzTargetAwsfms20180101ListProtocolsListsHandler)
  .route('/', xAmzTargetAwsfms20180101ListResourceSetResourcesHandler)
  .route('/', xAmzTargetAwsfms20180101ListResourceSetsHandler)
  .route('/', xAmzTargetAwsfms20180101ListTagsForResourceHandler)
  .route('/', xAmzTargetAwsfms20180101ListThirdPartyFirewallFirewallPoliciesHandler)
  .route('/', xAmzTargetAwsfms20180101PutAdminAccountHandler)
  .route('/', xAmzTargetAwsfms20180101PutAppsListHandler)
  .route('/', xAmzTargetAwsfms20180101PutNotificationChannelHandler)
  .route('/', xAmzTargetAwsfms20180101PutPolicyHandler)
  .route('/', xAmzTargetAwsfms20180101PutProtocolsListHandler)
  .route('/', xAmzTargetAwsfms20180101PutResourceSetHandler)
  .route('/', xAmzTargetAwsfms20180101TagResourceHandler)
  .route('/', xAmzTargetAwsfms20180101UntagResourceHandler)

export default app
