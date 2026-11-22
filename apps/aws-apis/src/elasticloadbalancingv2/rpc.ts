import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActionAddListenerCertificates(
  args: InferRequestType<(typeof client)['#Action=AddListenerCertificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AddListenerCertificates'].$get(args, options))
}

export async function postActionAddListenerCertificates(
  args: InferRequestType<(typeof client)['#Action=AddListenerCertificates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AddListenerCertificates'].$post(args, options))
}

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

export async function getActionCreateListener(
  args: InferRequestType<(typeof client)['#Action=CreateListener']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateListener'].$get(args, options))
}

export async function postActionCreateListener(
  args: InferRequestType<(typeof client)['#Action=CreateListener']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateListener'].$post(args, options))
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

export async function getActionCreateRule(
  args: InferRequestType<(typeof client)['#Action=CreateRule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateRule'].$get(args, options))
}

export async function postActionCreateRule(
  args: InferRequestType<(typeof client)['#Action=CreateRule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateRule'].$post(args, options))
}

export async function getActionCreateTargetGroup(
  args: InferRequestType<(typeof client)['#Action=CreateTargetGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTargetGroup'].$get(args, options))
}

export async function postActionCreateTargetGroup(
  args: InferRequestType<(typeof client)['#Action=CreateTargetGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTargetGroup'].$post(args, options))
}

export async function getActionDeleteListener(
  args: InferRequestType<(typeof client)['#Action=DeleteListener']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteListener'].$get(args, options))
}

export async function postActionDeleteListener(
  args: InferRequestType<(typeof client)['#Action=DeleteListener']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteListener'].$post(args, options))
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

export async function getActionDeleteRule(
  args: InferRequestType<(typeof client)['#Action=DeleteRule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteRule'].$get(args, options))
}

export async function postActionDeleteRule(
  args: InferRequestType<(typeof client)['#Action=DeleteRule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteRule'].$post(args, options))
}

export async function getActionDeleteTargetGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteTargetGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTargetGroup'].$get(args, options))
}

export async function postActionDeleteTargetGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteTargetGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTargetGroup'].$post(args, options))
}

export async function getActionDeregisterTargets(
  args: InferRequestType<(typeof client)['#Action=DeregisterTargets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeregisterTargets'].$get(args, options))
}

export async function postActionDeregisterTargets(
  args: InferRequestType<(typeof client)['#Action=DeregisterTargets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeregisterTargets'].$post(args, options))
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

export async function getActionDescribeListenerCertificates(
  args: InferRequestType<(typeof client)['#Action=DescribeListenerCertificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeListenerCertificates'].$get(args, options))
}

export async function postActionDescribeListenerCertificates(
  args: InferRequestType<(typeof client)['#Action=DescribeListenerCertificates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeListenerCertificates'].$post(args, options))
}

export async function getActionDescribeListeners(
  args: InferRequestType<(typeof client)['#Action=DescribeListeners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeListeners'].$get(args, options))
}

export async function postActionDescribeListeners(
  args: InferRequestType<(typeof client)['#Action=DescribeListeners']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeListeners'].$post(args, options))
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

export async function getActionDescribeRules(
  args: InferRequestType<(typeof client)['#Action=DescribeRules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeRules'].$get(args, options))
}

export async function postActionDescribeRules(
  args: InferRequestType<(typeof client)['#Action=DescribeRules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeRules'].$post(args, options))
}

export async function getActionDescribeSSLPolicies(
  args: InferRequestType<(typeof client)['#Action=DescribeSSLPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSSLPolicies'].$get(args, options))
}

export async function postActionDescribeSSLPolicies(
  args: InferRequestType<(typeof client)['#Action=DescribeSSLPolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeSSLPolicies'].$post(args, options))
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

export async function getActionDescribeTargetGroupAttributes(
  args: InferRequestType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTargetGroupAttributes'].$get(args, options))
}

export async function postActionDescribeTargetGroupAttributes(
  args: InferRequestType<(typeof client)['#Action=DescribeTargetGroupAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTargetGroupAttributes'].$post(args, options))
}

export async function getActionDescribeTargetGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeTargetGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTargetGroups'].$get(args, options))
}

export async function postActionDescribeTargetGroups(
  args: InferRequestType<(typeof client)['#Action=DescribeTargetGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTargetGroups'].$post(args, options))
}

export async function getActionDescribeTargetHealth(
  args: InferRequestType<(typeof client)['#Action=DescribeTargetHealth']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTargetHealth'].$get(args, options))
}

export async function postActionDescribeTargetHealth(
  args: InferRequestType<(typeof client)['#Action=DescribeTargetHealth']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTargetHealth'].$post(args, options))
}

export async function getActionModifyListener(
  args: InferRequestType<(typeof client)['#Action=ModifyListener']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyListener'].$get(args, options))
}

export async function postActionModifyListener(
  args: InferRequestType<(typeof client)['#Action=ModifyListener']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyListener'].$post(args, options))
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

export async function getActionModifyRule(
  args: InferRequestType<(typeof client)['#Action=ModifyRule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyRule'].$get(args, options))
}

export async function postActionModifyRule(
  args: InferRequestType<(typeof client)['#Action=ModifyRule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyRule'].$post(args, options))
}

export async function getActionModifyTargetGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyTargetGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyTargetGroup'].$get(args, options))
}

export async function postActionModifyTargetGroup(
  args: InferRequestType<(typeof client)['#Action=ModifyTargetGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyTargetGroup'].$post(args, options))
}

export async function getActionModifyTargetGroupAttributes(
  args: InferRequestType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyTargetGroupAttributes'].$get(args, options))
}

export async function postActionModifyTargetGroupAttributes(
  args: InferRequestType<(typeof client)['#Action=ModifyTargetGroupAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ModifyTargetGroupAttributes'].$post(args, options))
}

export async function getActionRegisterTargets(
  args: InferRequestType<(typeof client)['#Action=RegisterTargets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RegisterTargets'].$get(args, options))
}

export async function postActionRegisterTargets(
  args: InferRequestType<(typeof client)['#Action=RegisterTargets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RegisterTargets'].$post(args, options))
}

export async function getActionRemoveListenerCertificates(
  args: InferRequestType<(typeof client)['#Action=RemoveListenerCertificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RemoveListenerCertificates'].$get(args, options))
}

export async function postActionRemoveListenerCertificates(
  args: InferRequestType<(typeof client)['#Action=RemoveListenerCertificates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RemoveListenerCertificates'].$post(args, options))
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

export async function getActionSetIpAddressType(
  args: InferRequestType<(typeof client)['#Action=SetIpAddressType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetIpAddressType'].$get(args, options))
}

export async function postActionSetIpAddressType(
  args: InferRequestType<(typeof client)['#Action=SetIpAddressType']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetIpAddressType'].$post(args, options))
}

export async function getActionSetRulePriorities(
  args: InferRequestType<(typeof client)['#Action=SetRulePriorities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetRulePriorities'].$get(args, options))
}

export async function postActionSetRulePriorities(
  args: InferRequestType<(typeof client)['#Action=SetRulePriorities']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetRulePriorities'].$post(args, options))
}

export async function getActionSetSecurityGroups(
  args: InferRequestType<(typeof client)['#Action=SetSecurityGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetSecurityGroups'].$get(args, options))
}

export async function postActionSetSecurityGroups(
  args: InferRequestType<(typeof client)['#Action=SetSecurityGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetSecurityGroups'].$post(args, options))
}

export async function getActionSetSubnets(
  args: InferRequestType<(typeof client)['#Action=SetSubnets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetSubnets'].$get(args, options))
}

export async function postActionSetSubnets(
  args: InferRequestType<(typeof client)['#Action=SetSubnets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetSubnets'].$post(args, options))
}
