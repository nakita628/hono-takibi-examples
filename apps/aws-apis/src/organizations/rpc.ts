import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSOrganizationsV20161128AcceptHandshake(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128AttachPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128CancelHandshake(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128CloseAccount(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CloseAccount']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.CloseAccount'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128CreateAccount(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateAccount']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.CreateAccount'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128CreateGovCloudAccount(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128CreateOrganization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128CreateOrganizationalUnit(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128CreatePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128DeclineHandshake(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128DeleteOrganization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128DeleteOrganizationalUnit(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128DeletePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128DeleteResourcePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeleteResourcePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.DeleteResourcePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128DeregisterDelegatedAdministrator(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128DescribeAccount(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128DescribeCreateAccountStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128DescribeEffectivePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128DescribeHandshake(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128DescribeOrganization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128DescribeOrganizationalUnit(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128DescribePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128DescribeResourcePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DescribeResourcePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.DescribeResourcePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128DetachPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128DisableAWSServiceAccess(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128DisablePolicyType(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128EnableAWSServiceAccess(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128EnableAllFeatures(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128EnablePolicyType(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128InviteAccountToOrganization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128LeaveOrganization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128ListAWSServiceAccessForOrganization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128ListAccounts(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAccounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.ListAccounts'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128ListAccountsForParent(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128ListChildren(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListChildren']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.ListChildren'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128ListCreateAccountStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128ListDelegatedAdministrators(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128ListDelegatedServicesForAccount(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128ListHandshakesForAccount(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128ListHandshakesForOrganization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128ListOrganizationalUnitsForParent(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128ListParents(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListParents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.ListParents'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128ListPolicies(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListPolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.ListPolicies'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128ListPoliciesForTarget(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128ListRoots(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListRoots']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.ListRoots'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128ListTargetsForPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128MoveAccount(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.MoveAccount']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.MoveAccount'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128PutResourcePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.PutResourcePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.PutResourcePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128RegisterDelegatedAdministrator(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128RemoveAccountFromOrganization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128TagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128UntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128UpdateOrganizationalUnit(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit'].$post(args, options),
  )
}

export async function postXAmzTargetAWSOrganizationsV20161128UpdatePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy'].$post(args, options),
  )
}
