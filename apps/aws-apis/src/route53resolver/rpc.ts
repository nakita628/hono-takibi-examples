import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetRoute53ResolverAssociateFirewallRuleGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.AssociateFirewallRuleGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.AssociateFirewallRuleGroup'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverAssociateResolverEndpointIpAddress(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverAssociateResolverQueryLogConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverQueryLogConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.AssociateResolverQueryLogConfig'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverAssociateResolverRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.AssociateResolverRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.AssociateResolverRule'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverCreateFirewallDomainList(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallDomainList']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.CreateFirewallDomainList'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverCreateFirewallRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.CreateFirewallRule'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverCreateFirewallRuleGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.CreateFirewallRuleGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.CreateFirewallRuleGroup'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverCreateResolverEndpoint(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverEndpoint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.CreateResolverEndpoint'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverCreateResolverQueryLogConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverQueryLogConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.CreateResolverQueryLogConfig'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverCreateResolverRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.CreateResolverRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.CreateResolverRule'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverDeleteFirewallDomainList(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallDomainList']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.DeleteFirewallDomainList'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverDeleteFirewallRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.DeleteFirewallRule'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverDeleteFirewallRuleGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.DeleteFirewallRuleGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.DeleteFirewallRuleGroup'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverDeleteResolverEndpoint(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverDeleteResolverQueryLogConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverQueryLogConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.DeleteResolverQueryLogConfig'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverDeleteResolverRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.DeleteResolverRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.DeleteResolverRule'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverDisassociateFirewallRuleGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateFirewallRuleGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.DisassociateFirewallRuleGroup'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverDisassociateResolverEndpointIpAddress(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetRoute53ResolverDisassociateResolverQueryLogConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverQueryLogConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.DisassociateResolverQueryLogConfig'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverDisassociateResolverRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.DisassociateResolverRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.DisassociateResolverRule'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverGetFirewallConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.GetFirewallConfig'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverGetFirewallDomainList(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallDomainList']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.GetFirewallDomainList'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverGetFirewallRuleGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroup'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverGetFirewallRuleGroupAssociation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupAssociation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupAssociation'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverGetFirewallRuleGroupPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverGetResolverConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.GetResolverConfig'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverGetResolverDnssecConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverDnssecConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.GetResolverDnssecConfig'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverGetResolverEndpoint(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverEndpoint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.GetResolverEndpoint'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverGetResolverQueryLogConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfig'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverGetResolverQueryLogConfigAssociation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigAssociation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigAssociation'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetRoute53ResolverGetResolverQueryLogConfigPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverGetResolverRule(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.GetResolverRule'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverGetResolverRuleAssociation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverGetResolverRulePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.GetResolverRulePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.GetResolverRulePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverImportFirewallDomains(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.ImportFirewallDomains']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.ImportFirewallDomains'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverListFirewallConfigs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallConfigs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.ListFirewallConfigs'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverListFirewallDomainLists(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallDomainLists']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.ListFirewallDomainLists'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverListFirewallDomains(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallDomains']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.ListFirewallDomains'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverListFirewallRuleGroupAssociations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroupAssociations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroupAssociations'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverListFirewallRuleGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.ListFirewallRuleGroups'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverListFirewallRules(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.ListFirewallRules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.ListFirewallRules'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverListResolverConfigs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverConfigs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.ListResolverConfigs'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverListResolverDnssecConfigs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverDnssecConfigs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.ListResolverDnssecConfigs'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverListResolverEndpointIpAddresses(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverListResolverEndpoints(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverEndpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.ListResolverEndpoints'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverListResolverQueryLogConfigAssociations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigAssociations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigAssociations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetRoute53ResolverListResolverQueryLogConfigs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigs'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverListResolverRuleAssociations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverListResolverRules(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.ListResolverRules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.ListResolverRules'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverPutFirewallRuleGroupPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.PutFirewallRuleGroupPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.PutFirewallRuleGroupPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverPutResolverQueryLogConfigPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.PutResolverQueryLogConfigPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.PutResolverQueryLogConfigPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverPutResolverRulePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.PutResolverRulePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.PutResolverRulePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverUntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Route53Resolver.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverUpdateFirewallConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.UpdateFirewallConfig'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverUpdateFirewallDomains(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallDomains']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.UpdateFirewallDomains'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverUpdateFirewallRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.UpdateFirewallRule'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverUpdateFirewallRuleGroupAssociation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.UpdateFirewallRuleGroupAssociation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.UpdateFirewallRuleGroupAssociation'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverUpdateResolverConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.UpdateResolverConfig'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverUpdateResolverDnssecConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverDnssecConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.UpdateResolverDnssecConfig'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverUpdateResolverEndpoint(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53ResolverUpdateResolverRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Resolver.UpdateResolverRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Resolver.UpdateResolverRule'].$post(args, options),
  )
}
