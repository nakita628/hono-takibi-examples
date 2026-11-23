import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetWorkMailServiceAssociateDelegateToResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.AssociateDelegateToResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.AssociateDelegateToResource'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceAssociateMemberToGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.AssociateMemberToGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.AssociateMemberToGroup'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceAssumeImpersonationRole(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.AssumeImpersonationRole']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.AssumeImpersonationRole'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceCancelMailboxExportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.CancelMailboxExportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.CancelMailboxExportJob'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceCreateAlias(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.CreateAlias']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.CreateAlias'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceCreateAvailabilityConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.CreateAvailabilityConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.CreateAvailabilityConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceCreateGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.CreateGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.CreateGroup'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceCreateImpersonationRole(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.CreateImpersonationRole']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.CreateImpersonationRole'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceCreateMobileDeviceAccessRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.CreateMobileDeviceAccessRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.CreateMobileDeviceAccessRule'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceCreateOrganization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.CreateOrganization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.CreateOrganization'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceCreateResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.CreateResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.CreateResource'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceCreateUser(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.CreateUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.CreateUser'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceDeleteAccessControlRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.DeleteAccessControlRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DeleteAccessControlRule'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceDeleteAlias(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteAlias']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DeleteAlias'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceDeleteAvailabilityConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.DeleteAvailabilityConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DeleteAvailabilityConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceDeleteEmailMonitoringConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.DeleteEmailMonitoringConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DeleteEmailMonitoringConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceDeleteGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DeleteGroup'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceDeleteImpersonationRole(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.DeleteImpersonationRole']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DeleteImpersonationRole'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceDeleteMailboxPermissions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.DeleteMailboxPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DeleteMailboxPermissions'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceDeleteMobileDeviceAccessOverride(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessOverride']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessOverride'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceDeleteMobileDeviceAccessRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessRule'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceDeleteOrganization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.DeleteOrganization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DeleteOrganization'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceDeleteResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DeleteResource'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceDeleteRetentionPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.DeleteRetentionPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DeleteRetentionPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceDeleteUser(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DeleteUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DeleteUser'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceDeregisterFromWorkMail(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.DeregisterFromWorkMail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DeregisterFromWorkMail'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceDeregisterMailDomain(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.DeregisterMailDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DeregisterMailDomain'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceDescribeEmailMonitoringConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.DescribeEmailMonitoringConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DescribeEmailMonitoringConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetWorkMailServiceDescribeGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DescribeGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DescribeGroup'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceDescribeInboundDmarcSettings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.DescribeInboundDmarcSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DescribeInboundDmarcSettings'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceDescribeMailboxExportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.DescribeMailboxExportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DescribeMailboxExportJob'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceDescribeOrganization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.DescribeOrganization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DescribeOrganization'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceDescribeResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.DescribeResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DescribeResource'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceDescribeUser(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.DescribeUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DescribeUser'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceDisassociateDelegateFromResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceDisassociateMemberFromGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceGetAccessControlEffect(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.GetAccessControlEffect']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.GetAccessControlEffect'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceGetDefaultRetentionPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceGetImpersonationRole(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.GetImpersonationRole']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.GetImpersonationRole'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceGetImpersonationRoleEffect(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.GetImpersonationRoleEffect']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.GetImpersonationRoleEffect'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceGetMailDomain(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.GetMailDomain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.GetMailDomain'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceGetMailboxDetails(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.GetMailboxDetails']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.GetMailboxDetails'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceGetMobileDeviceAccessEffect(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.GetMobileDeviceAccessEffect']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.GetMobileDeviceAccessEffect'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceGetMobileDeviceAccessOverride(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.GetMobileDeviceAccessOverride']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.GetMobileDeviceAccessOverride'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceListAccessControlRules(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.ListAccessControlRules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.ListAccessControlRules'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceListAliases(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListAliases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.ListAliases'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceListAvailabilityConfigurations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.ListAvailabilityConfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.ListAvailabilityConfigurations'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceListGroupMembers(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.ListGroupMembers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.ListGroupMembers'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceListGroups(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.ListGroups'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceListImpersonationRoles(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.ListImpersonationRoles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.ListImpersonationRoles'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceListMailDomains(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListMailDomains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.ListMailDomains'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceListMailboxExportJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.ListMailboxExportJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.ListMailboxExportJobs'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceListMailboxPermissions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.ListMailboxPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.ListMailboxPermissions'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceListMobileDeviceAccessOverrides(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.ListMobileDeviceAccessOverrides']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.ListMobileDeviceAccessOverrides'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceListMobileDeviceAccessRules(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.ListMobileDeviceAccessRules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.ListMobileDeviceAccessRules'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceListOrganizations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.ListOrganizations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.ListOrganizations'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceListResourceDelegates(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.ListResourceDelegates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.ListResourceDelegates'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceListResources(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListResources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.ListResources'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceListUsers(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ListUsers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=WorkMailService.ListUsers'].$post(args, options))
}

export async function postXAmzTargetWorkMailServicePutAccessControlRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.PutAccessControlRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.PutAccessControlRule'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServicePutEmailMonitoringConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.PutEmailMonitoringConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.PutEmailMonitoringConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServicePutInboundDmarcSettings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.PutInboundDmarcSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.PutInboundDmarcSettings'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServicePutMailboxPermissions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.PutMailboxPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.PutMailboxPermissions'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServicePutMobileDeviceAccessOverride(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.PutMobileDeviceAccessOverride']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.PutMobileDeviceAccessOverride'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServicePutRetentionPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.PutRetentionPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.PutRetentionPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceRegisterMailDomain(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.RegisterMailDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.RegisterMailDomain'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceRegisterToWorkMail(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.RegisterToWorkMail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.RegisterToWorkMail'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceResetPassword(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.ResetPassword']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.ResetPassword'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceStartMailboxExportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.StartMailboxExportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.StartMailboxExportJob'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceTestAvailabilityConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.TestAvailabilityConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.TestAvailabilityConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceUntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceUpdateAvailabilityConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.UpdateAvailabilityConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.UpdateAvailabilityConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceUpdateDefaultMailDomain(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.UpdateDefaultMailDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.UpdateDefaultMailDomain'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceUpdateImpersonationRole(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.UpdateImpersonationRole']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.UpdateImpersonationRole'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceUpdateMailboxQuota(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.UpdateMailboxQuota']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.UpdateMailboxQuota'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceUpdateMobileDeviceAccessRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.UpdateMobileDeviceAccessRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.UpdateMobileDeviceAccessRule'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceUpdatePrimaryEmailAddress(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress'].$post(args, options),
  )
}

export async function postXAmzTargetWorkMailServiceUpdateResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkMailService.UpdateResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkMailService.UpdateResource'].$post(args, options),
  )
}
