import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActionAddTags(
  args: InferRequestType<(typeof client)['#Action=AddTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AddTags'].$get(args, options))
}

export async function postActionAddTags(
  args: InferRequestType<(typeof client)['#Action=AddTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AddTags'].$post(args, options))
}

export async function getActionApplySecurityGroupsToLoadBalancer(
  args: InferRequestType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ApplySecurityGroupsToLoadBalancer'].$get(args, options),
  )
}

export async function postActionApplySecurityGroupsToLoadBalancer(
  args: InferRequestType<(typeof client)['#Action=ApplySecurityGroupsToLoadBalancer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ApplySecurityGroupsToLoadBalancer'].$post(args, options),
  )
}

export async function getActionAttachLoadBalancerToSubnets(
  args: InferRequestType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachLoadBalancerToSubnets'].$get(args, options))
}

export async function postActionAttachLoadBalancerToSubnets(
  args: InferRequestType<(typeof client)['#Action=AttachLoadBalancerToSubnets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachLoadBalancerToSubnets'].$post(args, options))
}

export async function getActionConfigureHealthCheck(
  args: InferRequestType<(typeof client)['#Action=ConfigureHealthCheck']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ConfigureHealthCheck'].$get(args, options))
}

export async function postActionConfigureHealthCheck(
  args: InferRequestType<(typeof client)['#Action=ConfigureHealthCheck']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ConfigureHealthCheck'].$post(args, options))
}

export async function getActionCreateAppCookieStickinessPolicy(
  args: InferRequestType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateAppCookieStickinessPolicy'].$get(args, options))
}

export async function postActionCreateAppCookieStickinessPolicy(
  args: InferRequestType<(typeof client)['#Action=CreateAppCookieStickinessPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateAppCookieStickinessPolicy'].$post(args, options))
}

export async function getActionCreateLBCookieStickinessPolicy(
  args: InferRequestType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateLBCookieStickinessPolicy'].$get(args, options))
}

export async function postActionCreateLBCookieStickinessPolicy(
  args: InferRequestType<(typeof client)['#Action=CreateLBCookieStickinessPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateLBCookieStickinessPolicy'].$post(args, options))
}

export async function getActionCreateLoadBalancer(
  args: InferRequestType<(typeof client)['#Action=CreateLoadBalancer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateLoadBalancer'].$get(args, options))
}

export async function postActionCreateLoadBalancer(
  args: InferRequestType<(typeof client)['#Action=CreateLoadBalancer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateLoadBalancer'].$post(args, options))
}

export async function getActionCreateLoadBalancerListeners(
  args: InferRequestType<(typeof client)['#Action=CreateLoadBalancerListeners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateLoadBalancerListeners'].$get(args, options))
}

export async function postActionCreateLoadBalancerListeners(
  args: InferRequestType<(typeof client)['#Action=CreateLoadBalancerListeners']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateLoadBalancerListeners'].$post(args, options))
}

export async function getActionCreateLoadBalancerPolicy(
  args: InferRequestType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateLoadBalancerPolicy'].$get(args, options))
}

export async function postActionCreateLoadBalancerPolicy(
  args: InferRequestType<(typeof client)['#Action=CreateLoadBalancerPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateLoadBalancerPolicy'].$post(args, options))
}

export async function getActionDeleteLoadBalancer(
  args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteLoadBalancer'].$get(args, options))
}

export async function postActionDeleteLoadBalancer(
  args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteLoadBalancer'].$post(args, options))
}

export async function getActionDeleteLoadBalancerListeners(
  args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteLoadBalancerListeners'].$get(args, options))
}

export async function postActionDeleteLoadBalancerListeners(
  args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancerListeners']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteLoadBalancerListeners'].$post(args, options))
}

export async function getActionDeleteLoadBalancerPolicy(
  args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteLoadBalancerPolicy'].$get(args, options))
}

export async function postActionDeleteLoadBalancerPolicy(
  args: InferRequestType<(typeof client)['#Action=DeleteLoadBalancerPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteLoadBalancerPolicy'].$post(args, options))
}

export async function getActionDeregisterInstancesFromLoadBalancer(
  args: InferRequestType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeregisterInstancesFromLoadBalancer'].$get(args, options),
  )
}

export async function postActionDeregisterInstancesFromLoadBalancer(
  args: InferRequestType<(typeof client)['#Action=DeregisterInstancesFromLoadBalancer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeregisterInstancesFromLoadBalancer'].$post(args, options),
  )
}

export async function getActionDescribeAccountLimits(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAccountLimits'].$get(args, options))
}

export async function postActionDescribeAccountLimits(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAccountLimits'].$post(args, options))
}

export async function getActionDescribeInstanceHealth(
  args: InferRequestType<(typeof client)['#Action=DescribeInstanceHealth']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeInstanceHealth'].$get(args, options))
}

export async function postActionDescribeInstanceHealth(
  args: InferRequestType<(typeof client)['#Action=DescribeInstanceHealth']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeInstanceHealth'].$post(args, options))
}

export async function getActionDescribeLoadBalancerAttributes(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLoadBalancerAttributes'].$get(args, options))
}

export async function postActionDescribeLoadBalancerAttributes(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLoadBalancerAttributes'].$post(args, options))
}

export async function getActionDescribeLoadBalancerPolicies(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLoadBalancerPolicies'].$get(args, options))
}

export async function postActionDescribeLoadBalancerPolicies(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLoadBalancerPolicies'].$post(args, options))
}

export async function getActionDescribeLoadBalancerPolicyTypes(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLoadBalancerPolicyTypes'].$get(args, options))
}

export async function postActionDescribeLoadBalancerPolicyTypes(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancerPolicyTypes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLoadBalancerPolicyTypes'].$post(args, options))
}

export async function getActionDescribeLoadBalancers(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLoadBalancers'].$get(args, options))
}

export async function postActionDescribeLoadBalancers(
  args: InferRequestType<(typeof client)['#Action=DescribeLoadBalancers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeLoadBalancers'].$post(args, options))
}

export async function getActionDescribeTags(
  args: InferRequestType<(typeof client)['#Action=DescribeTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTags'].$get(args, options))
}

export async function postActionDescribeTags(
  args: InferRequestType<(typeof client)['#Action=DescribeTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTags'].$post(args, options))
}

export async function getActionDetachLoadBalancerFromSubnets(
  args: InferRequestType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachLoadBalancerFromSubnets'].$get(args, options))
}

export async function postActionDetachLoadBalancerFromSubnets(
  args: InferRequestType<(typeof client)['#Action=DetachLoadBalancerFromSubnets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachLoadBalancerFromSubnets'].$post(args, options))
}

export async function getActionDisableAvailabilityZonesForLoadBalancer(
  args: InferRequestType<
    (typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisableAvailabilityZonesForLoadBalancer'].$get(args, options),
  )
}

export async function postActionDisableAvailabilityZonesForLoadBalancer(
  args: InferRequestType<
    (typeof client)['#Action=DisableAvailabilityZonesForLoadBalancer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisableAvailabilityZonesForLoadBalancer'].$post(args, options),
  )
}

export async function getActionEnableAvailabilityZonesForLoadBalancer(
  args: InferRequestType<(typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=EnableAvailabilityZonesForLoadBalancer'].$get(args, options),
  )
}

export async function postActionEnableAvailabilityZonesForLoadBalancer(
  args: InferRequestType<
    (typeof client)['#Action=EnableAvailabilityZonesForLoadBalancer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=EnableAvailabilityZonesForLoadBalancer'].$post(args, options),
  )
}

export async function getActionModifyLoadBalancerAttributes(
  args: InferRequestType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyLoadBalancerAttributes'].$get(args, options))
}

export async function postActionModifyLoadBalancerAttributes(
  args: InferRequestType<(typeof client)['#Action=ModifyLoadBalancerAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyLoadBalancerAttributes'].$post(args, options))
}

export async function getActionRegisterInstancesWithLoadBalancer(
  args: InferRequestType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=RegisterInstancesWithLoadBalancer'].$get(args, options),
  )
}

export async function postActionRegisterInstancesWithLoadBalancer(
  args: InferRequestType<(typeof client)['#Action=RegisterInstancesWithLoadBalancer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=RegisterInstancesWithLoadBalancer'].$post(args, options),
  )
}

export async function getActionRemoveTags(
  args: InferRequestType<(typeof client)['#Action=RemoveTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RemoveTags'].$get(args, options))
}

export async function postActionRemoveTags(
  args: InferRequestType<(typeof client)['#Action=RemoveTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RemoveTags'].$post(args, options))
}

export async function getActionSetLoadBalancerListenerSSLCertificate(
  args: InferRequestType<(typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=SetLoadBalancerListenerSSLCertificate'].$get(args, options),
  )
}

export async function postActionSetLoadBalancerListenerSSLCertificate(
  args: InferRequestType<(typeof client)['#Action=SetLoadBalancerListenerSSLCertificate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=SetLoadBalancerListenerSSLCertificate'].$post(args, options),
  )
}

export async function getActionSetLoadBalancerPoliciesForBackendServer(
  args: InferRequestType<
    (typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=SetLoadBalancerPoliciesForBackendServer'].$get(args, options),
  )
}

export async function postActionSetLoadBalancerPoliciesForBackendServer(
  args: InferRequestType<
    (typeof client)['#Action=SetLoadBalancerPoliciesForBackendServer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=SetLoadBalancerPoliciesForBackendServer'].$post(args, options),
  )
}

export async function getActionSetLoadBalancerPoliciesOfListener(
  args: InferRequestType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=SetLoadBalancerPoliciesOfListener'].$get(args, options),
  )
}

export async function postActionSetLoadBalancerPoliciesOfListener(
  args: InferRequestType<(typeof client)['#Action=SetLoadBalancerPoliciesOfListener']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=SetLoadBalancerPoliciesOfListener'].$post(args, options),
  )
}
