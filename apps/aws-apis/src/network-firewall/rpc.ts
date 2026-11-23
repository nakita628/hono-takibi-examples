import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetNetworkFirewall20201112AssociateFirewallPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.AssociateFirewallPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.AssociateFirewallPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112AssociateSubnets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.AssociateSubnets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.AssociateSubnets'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112CreateFirewall(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewall']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewall'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112CreateFirewallPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewallPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.CreateFirewallPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112CreateRuleGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateRuleGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.CreateRuleGroup'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112CreateTLSInspectionConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.CreateTLSInspectionConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.CreateTLSInspectionConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetNetworkFirewall20201112DeleteFirewall(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewall']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewall'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112DeleteFirewallPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewallPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewallPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112DeleteResourcePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteResourcePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.DeleteResourcePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112DeleteRuleGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteRuleGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.DeleteRuleGroup'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112DeleteTLSInspectionConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DeleteTLSInspectionConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.DeleteTLSInspectionConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetNetworkFirewall20201112DescribeFirewall(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewall']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewall'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112DescribeFirewallPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewallPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewallPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112DescribeLoggingConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeLoggingConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.DescribeLoggingConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetNetworkFirewall20201112DescribeResourcePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeResourcePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.DescribeResourcePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112DescribeRuleGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroup'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112DescribeRuleGroupMetadata(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroupMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroupMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112DescribeTLSInspectionConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DescribeTLSInspectionConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.DescribeTLSInspectionConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetNetworkFirewall20201112DisassociateSubnets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.DisassociateSubnets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.DisassociateSubnets'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112ListFirewallPolicies(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListFirewallPolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.ListFirewallPolicies'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112ListFirewalls(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListFirewalls']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.ListFirewalls'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112ListRuleGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListRuleGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.ListRuleGroups'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112ListTLSInspectionConfigurations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListTLSInspectionConfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.ListTLSInspectionConfigurations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetNetworkFirewall20201112ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112PutResourcePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.PutResourcePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.PutResourcePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112TagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112UntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112UpdateFirewallDeleteProtection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDeleteProtection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDeleteProtection'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetNetworkFirewall20201112UpdateFirewallDescription(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDescription']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDescription'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112UpdateFirewallEncryptionConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetNetworkFirewall20201112UpdateFirewallPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112UpdateFirewallPolicyChangeProtection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetNetworkFirewall20201112UpdateLoggingConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateLoggingConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.UpdateLoggingConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetNetworkFirewall20201112UpdateRuleGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateRuleGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.UpdateRuleGroup'].$post(args, options),
  )
}

export async function postXAmzTargetNetworkFirewall20201112UpdateSubnetChangeProtection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateSubnetChangeProtection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.UpdateSubnetChangeProtection'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetNetworkFirewall20201112UpdateTLSInspectionConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=NetworkFirewall_20201112.UpdateTLSInspectionConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=NetworkFirewall_20201112.UpdateTLSInspectionConfiguration'].$post(
      args,
      options,
    ),
  )
}
