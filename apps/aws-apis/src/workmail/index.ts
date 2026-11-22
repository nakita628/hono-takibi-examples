import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetWorkMailServiceAssociateDelegateToResourceHandler,
  XAmzTargetWorkMailServiceAssociateMemberToGroupHandler,
  XAmzTargetWorkMailServiceAssumeImpersonationRoleHandler,
  XAmzTargetWorkMailServiceCancelMailboxExportJobHandler,
  XAmzTargetWorkMailServiceCreateAliasHandler,
  XAmzTargetWorkMailServiceCreateAvailabilityConfigurationHandler,
  XAmzTargetWorkMailServiceCreateGroupHandler,
  XAmzTargetWorkMailServiceCreateImpersonationRoleHandler,
  XAmzTargetWorkMailServiceCreateMobileDeviceAccessRuleHandler,
  XAmzTargetWorkMailServiceCreateOrganizationHandler,
  XAmzTargetWorkMailServiceCreateResourceHandler,
  XAmzTargetWorkMailServiceCreateUserHandler,
  XAmzTargetWorkMailServiceDeleteAccessControlRuleHandler,
  XAmzTargetWorkMailServiceDeleteAliasHandler,
  XAmzTargetWorkMailServiceDeleteAvailabilityConfigurationHandler,
  XAmzTargetWorkMailServiceDeleteEmailMonitoringConfigurationHandler,
  XAmzTargetWorkMailServiceDeleteGroupHandler,
  XAmzTargetWorkMailServiceDeleteImpersonationRoleHandler,
  XAmzTargetWorkMailServiceDeleteMailboxPermissionsHandler,
  XAmzTargetWorkMailServiceDeleteMobileDeviceAccessOverrideHandler,
  XAmzTargetWorkMailServiceDeleteMobileDeviceAccessRuleHandler,
  XAmzTargetWorkMailServiceDeleteOrganizationHandler,
  XAmzTargetWorkMailServiceDeleteResourceHandler,
  XAmzTargetWorkMailServiceDeleteRetentionPolicyHandler,
  XAmzTargetWorkMailServiceDeleteUserHandler,
  XAmzTargetWorkMailServiceDeregisterFromWorkMailHandler,
  XAmzTargetWorkMailServiceDeregisterMailDomainHandler,
  XAmzTargetWorkMailServiceDescribeEmailMonitoringConfigurationHandler,
  XAmzTargetWorkMailServiceDescribeGroupHandler,
  XAmzTargetWorkMailServiceDescribeInboundDmarcSettingsHandler,
  XAmzTargetWorkMailServiceDescribeMailboxExportJobHandler,
  XAmzTargetWorkMailServiceDescribeOrganizationHandler,
  XAmzTargetWorkMailServiceDescribeResourceHandler,
  XAmzTargetWorkMailServiceDescribeUserHandler,
  XAmzTargetWorkMailServiceDisassociateDelegateFromResourceHandler,
  XAmzTargetWorkMailServiceDisassociateMemberFromGroupHandler,
  XAmzTargetWorkMailServiceGetAccessControlEffectHandler,
  XAmzTargetWorkMailServiceGetDefaultRetentionPolicyHandler,
  XAmzTargetWorkMailServiceGetImpersonationRoleEffectHandler,
  XAmzTargetWorkMailServiceGetImpersonationRoleHandler,
  XAmzTargetWorkMailServiceGetMailboxDetailsHandler,
  XAmzTargetWorkMailServiceGetMailDomainHandler,
  XAmzTargetWorkMailServiceGetMobileDeviceAccessEffectHandler,
  XAmzTargetWorkMailServiceGetMobileDeviceAccessOverrideHandler,
  XAmzTargetWorkMailServiceListAccessControlRulesHandler,
  XAmzTargetWorkMailServiceListAliasesHandler,
  XAmzTargetWorkMailServiceListAvailabilityConfigurationsHandler,
  XAmzTargetWorkMailServiceListGroupMembersHandler,
  XAmzTargetWorkMailServiceListGroupsHandler,
  XAmzTargetWorkMailServiceListImpersonationRolesHandler,
  XAmzTargetWorkMailServiceListMailboxExportJobsHandler,
  XAmzTargetWorkMailServiceListMailboxPermissionsHandler,
  XAmzTargetWorkMailServiceListMailDomainsHandler,
  XAmzTargetWorkMailServiceListMobileDeviceAccessOverridesHandler,
  XAmzTargetWorkMailServiceListMobileDeviceAccessRulesHandler,
  XAmzTargetWorkMailServiceListOrganizationsHandler,
  XAmzTargetWorkMailServiceListResourceDelegatesHandler,
  XAmzTargetWorkMailServiceListResourcesHandler,
  XAmzTargetWorkMailServiceListTagsForResourceHandler,
  XAmzTargetWorkMailServiceListUsersHandler,
  XAmzTargetWorkMailServicePutAccessControlRuleHandler,
  XAmzTargetWorkMailServicePutEmailMonitoringConfigurationHandler,
  XAmzTargetWorkMailServicePutInboundDmarcSettingsHandler,
  XAmzTargetWorkMailServicePutMailboxPermissionsHandler,
  XAmzTargetWorkMailServicePutMobileDeviceAccessOverrideHandler,
  XAmzTargetWorkMailServicePutRetentionPolicyHandler,
  XAmzTargetWorkMailServiceRegisterMailDomainHandler,
  XAmzTargetWorkMailServiceRegisterToWorkMailHandler,
  XAmzTargetWorkMailServiceResetPasswordHandler,
  XAmzTargetWorkMailServiceStartMailboxExportJobHandler,
  XAmzTargetWorkMailServiceTagResourceHandler,
  XAmzTargetWorkMailServiceTestAvailabilityConfigurationHandler,
  XAmzTargetWorkMailServiceUntagResourceHandler,
  XAmzTargetWorkMailServiceUpdateAvailabilityConfigurationHandler,
  XAmzTargetWorkMailServiceUpdateDefaultMailDomainHandler,
  XAmzTargetWorkMailServiceUpdateImpersonationRoleHandler,
  XAmzTargetWorkMailServiceUpdateMailboxQuotaHandler,
  XAmzTargetWorkMailServiceUpdateMobileDeviceAccessRuleHandler,
  XAmzTargetWorkMailServiceUpdatePrimaryEmailAddressHandler,
  XAmzTargetWorkMailServiceUpdateResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetWorkMailServiceAssociateDelegateToResourceHandler)
  .route('/', XAmzTargetWorkMailServiceAssociateMemberToGroupHandler)
  .route('/', XAmzTargetWorkMailServiceAssumeImpersonationRoleHandler)
  .route('/', XAmzTargetWorkMailServiceCancelMailboxExportJobHandler)
  .route('/', XAmzTargetWorkMailServiceCreateAliasHandler)
  .route('/', XAmzTargetWorkMailServiceCreateAvailabilityConfigurationHandler)
  .route('/', XAmzTargetWorkMailServiceCreateGroupHandler)
  .route('/', XAmzTargetWorkMailServiceCreateImpersonationRoleHandler)
  .route('/', XAmzTargetWorkMailServiceCreateMobileDeviceAccessRuleHandler)
  .route('/', XAmzTargetWorkMailServiceCreateOrganizationHandler)
  .route('/', XAmzTargetWorkMailServiceCreateResourceHandler)
  .route('/', XAmzTargetWorkMailServiceCreateUserHandler)
  .route('/', XAmzTargetWorkMailServiceDeleteAccessControlRuleHandler)
  .route('/', XAmzTargetWorkMailServiceDeleteAliasHandler)
  .route('/', XAmzTargetWorkMailServiceDeleteAvailabilityConfigurationHandler)
  .route('/', XAmzTargetWorkMailServiceDeleteEmailMonitoringConfigurationHandler)
  .route('/', XAmzTargetWorkMailServiceDeleteGroupHandler)
  .route('/', XAmzTargetWorkMailServiceDeleteImpersonationRoleHandler)
  .route('/', XAmzTargetWorkMailServiceDeleteMailboxPermissionsHandler)
  .route('/', XAmzTargetWorkMailServiceDeleteMobileDeviceAccessOverrideHandler)
  .route('/', XAmzTargetWorkMailServiceDeleteMobileDeviceAccessRuleHandler)
  .route('/', XAmzTargetWorkMailServiceDeleteOrganizationHandler)
  .route('/', XAmzTargetWorkMailServiceDeleteResourceHandler)
  .route('/', XAmzTargetWorkMailServiceDeleteRetentionPolicyHandler)
  .route('/', XAmzTargetWorkMailServiceDeleteUserHandler)
  .route('/', XAmzTargetWorkMailServiceDeregisterFromWorkMailHandler)
  .route('/', XAmzTargetWorkMailServiceDeregisterMailDomainHandler)
  .route('/', XAmzTargetWorkMailServiceDescribeEmailMonitoringConfigurationHandler)
  .route('/', XAmzTargetWorkMailServiceDescribeGroupHandler)
  .route('/', XAmzTargetWorkMailServiceDescribeInboundDmarcSettingsHandler)
  .route('/', XAmzTargetWorkMailServiceDescribeMailboxExportJobHandler)
  .route('/', XAmzTargetWorkMailServiceDescribeOrganizationHandler)
  .route('/', XAmzTargetWorkMailServiceDescribeResourceHandler)
  .route('/', XAmzTargetWorkMailServiceDescribeUserHandler)
  .route('/', XAmzTargetWorkMailServiceDisassociateDelegateFromResourceHandler)
  .route('/', XAmzTargetWorkMailServiceDisassociateMemberFromGroupHandler)
  .route('/', XAmzTargetWorkMailServiceGetAccessControlEffectHandler)
  .route('/', XAmzTargetWorkMailServiceGetDefaultRetentionPolicyHandler)
  .route('/', XAmzTargetWorkMailServiceGetImpersonationRoleHandler)
  .route('/', XAmzTargetWorkMailServiceGetImpersonationRoleEffectHandler)
  .route('/', XAmzTargetWorkMailServiceGetMailDomainHandler)
  .route('/', XAmzTargetWorkMailServiceGetMailboxDetailsHandler)
  .route('/', XAmzTargetWorkMailServiceGetMobileDeviceAccessEffectHandler)
  .route('/', XAmzTargetWorkMailServiceGetMobileDeviceAccessOverrideHandler)
  .route('/', XAmzTargetWorkMailServiceListAccessControlRulesHandler)
  .route('/', XAmzTargetWorkMailServiceListAliasesHandler)
  .route('/', XAmzTargetWorkMailServiceListAvailabilityConfigurationsHandler)
  .route('/', XAmzTargetWorkMailServiceListGroupMembersHandler)
  .route('/', XAmzTargetWorkMailServiceListGroupsHandler)
  .route('/', XAmzTargetWorkMailServiceListImpersonationRolesHandler)
  .route('/', XAmzTargetWorkMailServiceListMailDomainsHandler)
  .route('/', XAmzTargetWorkMailServiceListMailboxExportJobsHandler)
  .route('/', XAmzTargetWorkMailServiceListMailboxPermissionsHandler)
  .route('/', XAmzTargetWorkMailServiceListMobileDeviceAccessOverridesHandler)
  .route('/', XAmzTargetWorkMailServiceListMobileDeviceAccessRulesHandler)
  .route('/', XAmzTargetWorkMailServiceListOrganizationsHandler)
  .route('/', XAmzTargetWorkMailServiceListResourceDelegatesHandler)
  .route('/', XAmzTargetWorkMailServiceListResourcesHandler)
  .route('/', XAmzTargetWorkMailServiceListTagsForResourceHandler)
  .route('/', XAmzTargetWorkMailServiceListUsersHandler)
  .route('/', XAmzTargetWorkMailServicePutAccessControlRuleHandler)
  .route('/', XAmzTargetWorkMailServicePutEmailMonitoringConfigurationHandler)
  .route('/', XAmzTargetWorkMailServicePutInboundDmarcSettingsHandler)
  .route('/', XAmzTargetWorkMailServicePutMailboxPermissionsHandler)
  .route('/', XAmzTargetWorkMailServicePutMobileDeviceAccessOverrideHandler)
  .route('/', XAmzTargetWorkMailServicePutRetentionPolicyHandler)
  .route('/', XAmzTargetWorkMailServiceRegisterMailDomainHandler)
  .route('/', XAmzTargetWorkMailServiceRegisterToWorkMailHandler)
  .route('/', XAmzTargetWorkMailServiceResetPasswordHandler)
  .route('/', XAmzTargetWorkMailServiceStartMailboxExportJobHandler)
  .route('/', XAmzTargetWorkMailServiceTagResourceHandler)
  .route('/', XAmzTargetWorkMailServiceTestAvailabilityConfigurationHandler)
  .route('/', XAmzTargetWorkMailServiceUntagResourceHandler)
  .route('/', XAmzTargetWorkMailServiceUpdateAvailabilityConfigurationHandler)
  .route('/', XAmzTargetWorkMailServiceUpdateDefaultMailDomainHandler)
  .route('/', XAmzTargetWorkMailServiceUpdateImpersonationRoleHandler)
  .route('/', XAmzTargetWorkMailServiceUpdateMailboxQuotaHandler)
  .route('/', XAmzTargetWorkMailServiceUpdateMobileDeviceAccessRuleHandler)
  .route('/', XAmzTargetWorkMailServiceUpdatePrimaryEmailAddressHandler)
  .route('/', XAmzTargetWorkMailServiceUpdateResourceHandler)

export default app
