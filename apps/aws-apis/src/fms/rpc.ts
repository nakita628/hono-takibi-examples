import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSFMS20180101AssociateAdminAccount(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101AssociateThirdPartyFirewall(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.AssociateThirdPartyFirewall']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.AssociateThirdPartyFirewall'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101BatchAssociateResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.BatchAssociateResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.BatchAssociateResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101BatchDisassociateResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.BatchDisassociateResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.BatchDisassociateResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101DeleteAppsList(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteAppsList']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.DeleteAppsList'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101DeleteNotificationChannel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101DeletePolicy(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.DeletePolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.DeletePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101DeleteProtocolsList(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteProtocolsList']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.DeleteProtocolsList'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101DeleteResourceSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.DeleteResourceSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.DeleteResourceSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101DisassociateAdminAccount(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101DisassociateThirdPartyFirewall(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.DisassociateThirdPartyFirewall']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.DisassociateThirdPartyFirewall'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101GetAdminAccount(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAdminAccount']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.GetAdminAccount'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101GetAdminScope(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAdminScope']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.GetAdminScope'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101GetAppsList(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetAppsList']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.GetAppsList'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101GetComplianceDetail(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetComplianceDetail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.GetComplianceDetail'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101GetNotificationChannel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetNotificationChannel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.GetNotificationChannel'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101GetPolicy(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSFMS_20180101.GetPolicy'].$post(args, options))
}

export async function postXAmzTargetAWSFMS20180101GetProtectionStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetProtectionStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.GetProtectionStatus'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101GetProtocolsList(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetProtocolsList']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.GetProtocolsList'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101GetResourceSet(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.GetResourceSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.GetResourceSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101GetThirdPartyFirewallAssociationStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSFMS20180101GetViolationDetails(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.GetViolationDetails']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.GetViolationDetails'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101ListAdminAccountsForOrganization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAdminAccountsForOrganization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.ListAdminAccountsForOrganization'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101ListAdminsManagingAccount(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAdminsManagingAccount']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.ListAdminsManagingAccount'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101ListAppsLists(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.ListAppsLists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.ListAppsLists'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101ListComplianceStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListComplianceStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.ListComplianceStatus'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101ListDiscoveredResources(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListDiscoveredResources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.ListDiscoveredResources'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101ListMemberAccounts(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListMemberAccounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.ListMemberAccounts'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101ListPolicies(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.ListPolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.ListPolicies'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101ListProtocolsLists(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListProtocolsLists']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.ListProtocolsLists'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101ListResourceSetResources(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListResourceSetResources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.ListResourceSetResources'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101ListResourceSets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListResourceSets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.ListResourceSets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101ListThirdPartyFirewallFirewallPolicies(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSFMS20180101PutAdminAccount(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutAdminAccount']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.PutAdminAccount'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101PutAppsList(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutAppsList']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.PutAppsList'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101PutNotificationChannel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.PutNotificationChannel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.PutNotificationChannel'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101PutPolicy(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSFMS_20180101.PutPolicy'].$post(args, options))
}

export async function postXAmzTargetAWSFMS20180101PutProtocolsList(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSFMS_20180101.PutProtocolsList']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.PutProtocolsList'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101PutResourceSet(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.PutResourceSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.PutResourceSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101TagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSFMS20180101UntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSFMS_20180101.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSFMS_20180101.UntagResource'].$post(args, options),
  )
}
