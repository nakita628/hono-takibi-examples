import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetWorkMailServiceAssociateDelegateToResourceHandler,
  xAmzTargetWorkMailServiceAssociateMemberToGroupHandler,
  xAmzTargetWorkMailServiceAssumeImpersonationRoleHandler,
  xAmzTargetWorkMailServiceCancelMailboxExportJobHandler,
  xAmzTargetWorkMailServiceCreateAliasHandler,
  xAmzTargetWorkMailServiceCreateAvailabilityConfigurationHandler,
  xAmzTargetWorkMailServiceCreateGroupHandler,
  xAmzTargetWorkMailServiceCreateImpersonationRoleHandler,
  xAmzTargetWorkMailServiceCreateMobileDeviceAccessRuleHandler,
  xAmzTargetWorkMailServiceCreateOrganizationHandler,
  xAmzTargetWorkMailServiceCreateResourceHandler,
  xAmzTargetWorkMailServiceCreateUserHandler,
  xAmzTargetWorkMailServiceDeleteAccessControlRuleHandler,
  xAmzTargetWorkMailServiceDeleteAliasHandler,
  xAmzTargetWorkMailServiceDeleteAvailabilityConfigurationHandler,
  xAmzTargetWorkMailServiceDeleteEmailMonitoringConfigurationHandler,
  xAmzTargetWorkMailServiceDeleteGroupHandler,
  xAmzTargetWorkMailServiceDeleteImpersonationRoleHandler,
  xAmzTargetWorkMailServiceDeleteMailboxPermissionsHandler,
  xAmzTargetWorkMailServiceDeleteMobileDeviceAccessOverrideHandler,
  xAmzTargetWorkMailServiceDeleteMobileDeviceAccessRuleHandler,
  xAmzTargetWorkMailServiceDeleteOrganizationHandler,
  xAmzTargetWorkMailServiceDeleteResourceHandler,
  xAmzTargetWorkMailServiceDeleteRetentionPolicyHandler,
  xAmzTargetWorkMailServiceDeleteUserHandler,
  xAmzTargetWorkMailServiceDeregisterFromWorkMailHandler,
  xAmzTargetWorkMailServiceDeregisterMailDomainHandler,
  xAmzTargetWorkMailServiceDescribeEmailMonitoringConfigurationHandler,
  xAmzTargetWorkMailServiceDescribeGroupHandler,
  xAmzTargetWorkMailServiceDescribeInboundDmarcSettingsHandler,
  xAmzTargetWorkMailServiceDescribeMailboxExportJobHandler,
  xAmzTargetWorkMailServiceDescribeOrganizationHandler,
  xAmzTargetWorkMailServiceDescribeResourceHandler,
  xAmzTargetWorkMailServiceDescribeUserHandler,
  xAmzTargetWorkMailServiceDisassociateDelegateFromResourceHandler,
  xAmzTargetWorkMailServiceDisassociateMemberFromGroupHandler,
  xAmzTargetWorkMailServiceGetAccessControlEffectHandler,
  xAmzTargetWorkMailServiceGetDefaultRetentionPolicyHandler,
  xAmzTargetWorkMailServiceGetImpersonationRoleEffectHandler,
  xAmzTargetWorkMailServiceGetImpersonationRoleHandler,
  xAmzTargetWorkMailServiceGetMailboxDetailsHandler,
  xAmzTargetWorkMailServiceGetMailDomainHandler,
  xAmzTargetWorkMailServiceGetMobileDeviceAccessEffectHandler,
  xAmzTargetWorkMailServiceGetMobileDeviceAccessOverrideHandler,
  xAmzTargetWorkMailServiceListAccessControlRulesHandler,
  xAmzTargetWorkMailServiceListAliasesHandler,
  xAmzTargetWorkMailServiceListAvailabilityConfigurationsHandler,
  xAmzTargetWorkMailServiceListGroupMembersHandler,
  xAmzTargetWorkMailServiceListGroupsHandler,
  xAmzTargetWorkMailServiceListImpersonationRolesHandler,
  xAmzTargetWorkMailServiceListMailboxExportJobsHandler,
  xAmzTargetWorkMailServiceListMailboxPermissionsHandler,
  xAmzTargetWorkMailServiceListMailDomainsHandler,
  xAmzTargetWorkMailServiceListMobileDeviceAccessOverridesHandler,
  xAmzTargetWorkMailServiceListMobileDeviceAccessRulesHandler,
  xAmzTargetWorkMailServiceListOrganizationsHandler,
  xAmzTargetWorkMailServiceListResourceDelegatesHandler,
  xAmzTargetWorkMailServiceListResourcesHandler,
  xAmzTargetWorkMailServiceListTagsForResourceHandler,
  xAmzTargetWorkMailServiceListUsersHandler,
  xAmzTargetWorkMailServicePutAccessControlRuleHandler,
  xAmzTargetWorkMailServicePutEmailMonitoringConfigurationHandler,
  xAmzTargetWorkMailServicePutInboundDmarcSettingsHandler,
  xAmzTargetWorkMailServicePutMailboxPermissionsHandler,
  xAmzTargetWorkMailServicePutMobileDeviceAccessOverrideHandler,
  xAmzTargetWorkMailServicePutRetentionPolicyHandler,
  xAmzTargetWorkMailServiceRegisterMailDomainHandler,
  xAmzTargetWorkMailServiceRegisterToWorkMailHandler,
  xAmzTargetWorkMailServiceResetPasswordHandler,
  xAmzTargetWorkMailServiceStartMailboxExportJobHandler,
  xAmzTargetWorkMailServiceTagResourceHandler,
  xAmzTargetWorkMailServiceTestAvailabilityConfigurationHandler,
  xAmzTargetWorkMailServiceUntagResourceHandler,
  xAmzTargetWorkMailServiceUpdateAvailabilityConfigurationHandler,
  xAmzTargetWorkMailServiceUpdateDefaultMailDomainHandler,
  xAmzTargetWorkMailServiceUpdateImpersonationRoleHandler,
  xAmzTargetWorkMailServiceUpdateMailboxQuotaHandler,
  xAmzTargetWorkMailServiceUpdateMobileDeviceAccessRuleHandler,
  xAmzTargetWorkMailServiceUpdatePrimaryEmailAddressHandler,
  xAmzTargetWorkMailServiceUpdateResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetWorkMailServiceAssociateDelegateToResourceHandler)
  .route('/', xAmzTargetWorkMailServiceAssociateMemberToGroupHandler)
  .route('/', xAmzTargetWorkMailServiceAssumeImpersonationRoleHandler)
  .route('/', xAmzTargetWorkMailServiceCancelMailboxExportJobHandler)
  .route('/', xAmzTargetWorkMailServiceCreateAliasHandler)
  .route('/', xAmzTargetWorkMailServiceCreateAvailabilityConfigurationHandler)
  .route('/', xAmzTargetWorkMailServiceCreateGroupHandler)
  .route('/', xAmzTargetWorkMailServiceCreateImpersonationRoleHandler)
  .route('/', xAmzTargetWorkMailServiceCreateMobileDeviceAccessRuleHandler)
  .route('/', xAmzTargetWorkMailServiceCreateOrganizationHandler)
  .route('/', xAmzTargetWorkMailServiceCreateResourceHandler)
  .route('/', xAmzTargetWorkMailServiceCreateUserHandler)
  .route('/', xAmzTargetWorkMailServiceDeleteAccessControlRuleHandler)
  .route('/', xAmzTargetWorkMailServiceDeleteAliasHandler)
  .route('/', xAmzTargetWorkMailServiceDeleteAvailabilityConfigurationHandler)
  .route('/', xAmzTargetWorkMailServiceDeleteEmailMonitoringConfigurationHandler)
  .route('/', xAmzTargetWorkMailServiceDeleteGroupHandler)
  .route('/', xAmzTargetWorkMailServiceDeleteImpersonationRoleHandler)
  .route('/', xAmzTargetWorkMailServiceDeleteMailboxPermissionsHandler)
  .route('/', xAmzTargetWorkMailServiceDeleteMobileDeviceAccessOverrideHandler)
  .route('/', xAmzTargetWorkMailServiceDeleteMobileDeviceAccessRuleHandler)
  .route('/', xAmzTargetWorkMailServiceDeleteOrganizationHandler)
  .route('/', xAmzTargetWorkMailServiceDeleteResourceHandler)
  .route('/', xAmzTargetWorkMailServiceDeleteRetentionPolicyHandler)
  .route('/', xAmzTargetWorkMailServiceDeleteUserHandler)
  .route('/', xAmzTargetWorkMailServiceDeregisterFromWorkMailHandler)
  .route('/', xAmzTargetWorkMailServiceDeregisterMailDomainHandler)
  .route('/', xAmzTargetWorkMailServiceDescribeEmailMonitoringConfigurationHandler)
  .route('/', xAmzTargetWorkMailServiceDescribeGroupHandler)
  .route('/', xAmzTargetWorkMailServiceDescribeInboundDmarcSettingsHandler)
  .route('/', xAmzTargetWorkMailServiceDescribeMailboxExportJobHandler)
  .route('/', xAmzTargetWorkMailServiceDescribeOrganizationHandler)
  .route('/', xAmzTargetWorkMailServiceDescribeResourceHandler)
  .route('/', xAmzTargetWorkMailServiceDescribeUserHandler)
  .route('/', xAmzTargetWorkMailServiceDisassociateDelegateFromResourceHandler)
  .route('/', xAmzTargetWorkMailServiceDisassociateMemberFromGroupHandler)
  .route('/', xAmzTargetWorkMailServiceGetAccessControlEffectHandler)
  .route('/', xAmzTargetWorkMailServiceGetDefaultRetentionPolicyHandler)
  .route('/', xAmzTargetWorkMailServiceGetImpersonationRoleHandler)
  .route('/', xAmzTargetWorkMailServiceGetImpersonationRoleEffectHandler)
  .route('/', xAmzTargetWorkMailServiceGetMailDomainHandler)
  .route('/', xAmzTargetWorkMailServiceGetMailboxDetailsHandler)
  .route('/', xAmzTargetWorkMailServiceGetMobileDeviceAccessEffectHandler)
  .route('/', xAmzTargetWorkMailServiceGetMobileDeviceAccessOverrideHandler)
  .route('/', xAmzTargetWorkMailServiceListAccessControlRulesHandler)
  .route('/', xAmzTargetWorkMailServiceListAliasesHandler)
  .route('/', xAmzTargetWorkMailServiceListAvailabilityConfigurationsHandler)
  .route('/', xAmzTargetWorkMailServiceListGroupMembersHandler)
  .route('/', xAmzTargetWorkMailServiceListGroupsHandler)
  .route('/', xAmzTargetWorkMailServiceListImpersonationRolesHandler)
  .route('/', xAmzTargetWorkMailServiceListMailDomainsHandler)
  .route('/', xAmzTargetWorkMailServiceListMailboxExportJobsHandler)
  .route('/', xAmzTargetWorkMailServiceListMailboxPermissionsHandler)
  .route('/', xAmzTargetWorkMailServiceListMobileDeviceAccessOverridesHandler)
  .route('/', xAmzTargetWorkMailServiceListMobileDeviceAccessRulesHandler)
  .route('/', xAmzTargetWorkMailServiceListOrganizationsHandler)
  .route('/', xAmzTargetWorkMailServiceListResourceDelegatesHandler)
  .route('/', xAmzTargetWorkMailServiceListResourcesHandler)
  .route('/', xAmzTargetWorkMailServiceListTagsForResourceHandler)
  .route('/', xAmzTargetWorkMailServiceListUsersHandler)
  .route('/', xAmzTargetWorkMailServicePutAccessControlRuleHandler)
  .route('/', xAmzTargetWorkMailServicePutEmailMonitoringConfigurationHandler)
  .route('/', xAmzTargetWorkMailServicePutInboundDmarcSettingsHandler)
  .route('/', xAmzTargetWorkMailServicePutMailboxPermissionsHandler)
  .route('/', xAmzTargetWorkMailServicePutMobileDeviceAccessOverrideHandler)
  .route('/', xAmzTargetWorkMailServicePutRetentionPolicyHandler)
  .route('/', xAmzTargetWorkMailServiceRegisterMailDomainHandler)
  .route('/', xAmzTargetWorkMailServiceRegisterToWorkMailHandler)
  .route('/', xAmzTargetWorkMailServiceResetPasswordHandler)
  .route('/', xAmzTargetWorkMailServiceStartMailboxExportJobHandler)
  .route('/', xAmzTargetWorkMailServiceTagResourceHandler)
  .route('/', xAmzTargetWorkMailServiceTestAvailabilityConfigurationHandler)
  .route('/', xAmzTargetWorkMailServiceUntagResourceHandler)
  .route('/', xAmzTargetWorkMailServiceUpdateAvailabilityConfigurationHandler)
  .route('/', xAmzTargetWorkMailServiceUpdateDefaultMailDomainHandler)
  .route('/', xAmzTargetWorkMailServiceUpdateImpersonationRoleHandler)
  .route('/', xAmzTargetWorkMailServiceUpdateMailboxQuotaHandler)
  .route('/', xAmzTargetWorkMailServiceUpdateMobileDeviceAccessRuleHandler)
  .route('/', xAmzTargetWorkMailServiceUpdatePrimaryEmailAddressHandler)
  .route('/', xAmzTargetWorkMailServiceUpdateResourceHandler)

export default app
