import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSWAF20150824CreateByteMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateByteMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.CreateByteMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824CreateGeoMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateGeoMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.CreateGeoMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824CreateIPSet(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateIPSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.CreateIPSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824CreateRateBasedRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRateBasedRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.CreateRateBasedRule'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824CreateRegexMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRegexMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.CreateRegexMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824CreateRegexPatternSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRegexPatternSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.CreateRegexPatternSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824CreateRule(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.CreateRule'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824CreateRuleGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateRuleGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.CreateRuleGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824CreateSizeConstraintSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateSizeConstraintSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.CreateSizeConstraintSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824CreateSqlInjectionMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateSqlInjectionMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.CreateSqlInjectionMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824CreateWebACL(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateWebACL']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.CreateWebACL'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824CreateWebACLMigrationStack(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateWebACLMigrationStack']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.CreateWebACLMigrationStack'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824CreateXssMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.CreateXssMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.CreateXssMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824DeleteByteMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteByteMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.DeleteByteMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824DeleteGeoMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteGeoMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.DeleteGeoMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824DeleteIPSet(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteIPSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.DeleteIPSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824DeleteLoggingConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteLoggingConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.DeleteLoggingConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824DeletePermissionPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeletePermissionPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.DeletePermissionPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824DeleteRateBasedRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRateBasedRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.DeleteRateBasedRule'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824DeleteRegexMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRegexMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.DeleteRegexMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824DeleteRegexPatternSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRegexPatternSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.DeleteRegexPatternSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824DeleteRule(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.DeleteRule'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824DeleteRuleGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteRuleGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.DeleteRuleGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824DeleteSizeConstraintSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteSizeConstraintSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.DeleteSizeConstraintSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824DeleteSqlInjectionMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteSqlInjectionMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.DeleteSqlInjectionMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824DeleteWebACL(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteWebACL']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.DeleteWebACL'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824DeleteXssMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.DeleteXssMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.DeleteXssMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824GetByteMatchSet(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetByteMatchSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.GetByteMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824GetChangeToken(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetChangeToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.GetChangeToken'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824GetChangeTokenStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetChangeTokenStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.GetChangeTokenStatus'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824GetGeoMatchSet(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetGeoMatchSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.GetGeoMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824GetIPSet(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetIPSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSWAF_20150824.GetIPSet'].$post(args, options))
}

export async function postXAmzTargetAWSWAF20150824GetLoggingConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetLoggingConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.GetLoggingConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824GetPermissionPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetPermissionPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.GetPermissionPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824GetRateBasedRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRule'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824GetRateBasedRuleManagedKeys(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRuleManagedKeys']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.GetRateBasedRuleManagedKeys'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824GetRegexMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRegexMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.GetRegexMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824GetRegexPatternSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRegexPatternSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.GetRegexPatternSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824GetRule(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSWAF_20150824.GetRule'].$post(args, options))
}

export async function postXAmzTargetAWSWAF20150824GetRuleGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetRuleGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.GetRuleGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824GetSampledRequests(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSampledRequests']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.GetSampledRequests'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824GetSizeConstraintSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSizeConstraintSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.GetSizeConstraintSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824GetSqlInjectionMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.GetSqlInjectionMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.GetSqlInjectionMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824GetWebACL(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetWebACL']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSWAF_20150824.GetWebACL'].$post(args, options))
}

export async function postXAmzTargetAWSWAF20150824GetXssMatchSet(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.GetXssMatchSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.GetXssMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824ListActivatedRulesInRuleGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListActivatedRulesInRuleGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.ListActivatedRulesInRuleGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824ListByteMatchSets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListByteMatchSets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.ListByteMatchSets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824ListGeoMatchSets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListGeoMatchSets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.ListGeoMatchSets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824ListIPSets(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListIPSets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.ListIPSets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824ListLoggingConfigurations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListLoggingConfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.ListLoggingConfigurations'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824ListRateBasedRules(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRateBasedRules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.ListRateBasedRules'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824ListRegexMatchSets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRegexMatchSets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.ListRegexMatchSets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824ListRegexPatternSets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRegexPatternSets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.ListRegexPatternSets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824ListRuleGroups(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRuleGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.ListRuleGroups'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824ListRules(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListRules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSWAF_20150824.ListRules'].$post(args, options))
}

export async function postXAmzTargetAWSWAF20150824ListSizeConstraintSets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSizeConstraintSets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.ListSizeConstraintSets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824ListSqlInjectionMatchSets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSqlInjectionMatchSets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.ListSqlInjectionMatchSets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824ListSubscribedRuleGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListSubscribedRuleGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.ListSubscribedRuleGroups'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824ListWebACLs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.ListWebACLs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.ListWebACLs'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824ListXssMatchSets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.ListXssMatchSets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.ListXssMatchSets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824PutLoggingConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.PutLoggingConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.PutLoggingConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824PutPermissionPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.PutPermissionPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.PutPermissionPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824TagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824UntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824UpdateByteMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateByteMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.UpdateByteMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824UpdateGeoMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateGeoMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.UpdateGeoMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824UpdateIPSet(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateIPSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.UpdateIPSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824UpdateRateBasedRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRateBasedRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.UpdateRateBasedRule'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824UpdateRegexMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRegexMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.UpdateRegexMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824UpdateRegexPatternSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRegexPatternSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.UpdateRegexPatternSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824UpdateRule(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.UpdateRule'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824UpdateRuleGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateRuleGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.UpdateRuleGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824UpdateSizeConstraintSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateSizeConstraintSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.UpdateSizeConstraintSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824UpdateSqlInjectionMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateSqlInjectionMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.UpdateSqlInjectionMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824UpdateWebACL(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateWebACL']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.UpdateWebACL'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAF20150824UpdateXssMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_20150824.UpdateXssMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_20150824.UpdateXssMatchSet'].$post(args, options),
  )
}
