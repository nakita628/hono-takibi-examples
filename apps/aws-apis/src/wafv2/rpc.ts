import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSWAF20190729AssociateWebACL(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.AssociateWebACL']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.AssociateWebACL'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729CheckCapacity(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CheckCapacity']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.CheckCapacity'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729CreateAPIKey(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateAPIKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.CreateAPIKey'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729CreateIPSet(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateIPSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.CreateIPSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729CreateRegexPatternSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateRegexPatternSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.CreateRegexPatternSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729CreateRuleGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateRuleGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.CreateRuleGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729CreateWebACL(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.CreateWebACL']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.CreateWebACL'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729DeleteFirewallManagerRuleGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteFirewallManagerRuleGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.DeleteFirewallManagerRuleGroups'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729DeleteIPSet(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteIPSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.DeleteIPSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729DeleteLoggingConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteLoggingConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.DeleteLoggingConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729DeletePermissionPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeletePermissionPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.DeletePermissionPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729DeleteRegexPatternSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteRegexPatternSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.DeleteRegexPatternSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729DeleteRuleGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729DeleteWebACL(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.DeleteWebACL']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.DeleteWebACL'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729DescribeManagedRuleGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.DescribeManagedRuleGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.DescribeManagedRuleGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729DisassociateWebACL(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.DisassociateWebACL']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.DisassociateWebACL'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729GenerateMobileSdkReleaseUrl(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.GenerateMobileSdkReleaseUrl']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.GenerateMobileSdkReleaseUrl'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729GetDecryptedAPIKey(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetDecryptedAPIKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.GetDecryptedAPIKey'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729GetIPSet(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetIPSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSWAF_20190729.GetIPSet'].$post(args, options))
}

export async function postXAmzTargetAWSWAF20190729GetLoggingConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetLoggingConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.GetLoggingConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729GetManagedRuleSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetManagedRuleSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.GetManagedRuleSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729GetMobileSdkRelease(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetMobileSdkRelease']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.GetMobileSdkRelease'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729GetPermissionPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetPermissionPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.GetPermissionPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729GetRateBasedStatementManagedKeys(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetRateBasedStatementManagedKeys']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.GetRateBasedStatementManagedKeys'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729GetRegexPatternSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729GetRuleGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetRuleGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.GetRuleGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729GetSampledRequests(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetSampledRequests']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.GetSampledRequests'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729GetWebACL(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.GetWebACL']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSWAF_20190729.GetWebACL'].$post(args, options))
}

export async function postXAmzTargetAWSWAF20190729GetWebACLForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.GetWebACLForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.GetWebACLForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729ListAPIKeys(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListAPIKeys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.ListAPIKeys'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupVersions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroupVersions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroupVersions'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSWAF20190729ListAvailableManagedRuleGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroups'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729ListIPSets(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListIPSets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.ListIPSets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729ListLoggingConfigurations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListLoggingConfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.ListLoggingConfigurations'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729ListManagedRuleSets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListManagedRuleSets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.ListManagedRuleSets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729ListMobileSdkReleases(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListMobileSdkReleases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.ListMobileSdkReleases'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729ListRegexPatternSets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListRegexPatternSets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.ListRegexPatternSets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729ListResourcesForWebACL(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListResourcesForWebACL']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.ListResourcesForWebACL'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729ListRuleGroups(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListRuleGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.ListRuleGroups'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729ListWebACLs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.ListWebACLs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.ListWebACLs'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729PutLoggingConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.PutLoggingConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.PutLoggingConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729PutManagedRuleSetVersions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.PutManagedRuleSetVersions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.PutManagedRuleSetVersions'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729PutPermissionPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.PutPermissionPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.PutPermissionPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729TagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729UntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729UpdateIPSet(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateIPSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.UpdateIPSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729UpdateManagedRuleSetVersionExpiryDate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSWAF20190729UpdateRegexPatternSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateRegexPatternSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.UpdateRegexPatternSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729UpdateRuleGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20190729UpdateWebACL(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20190729.UpdateWebACL']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20190729.UpdateWebACL'].$post(args, options),
  )
}
