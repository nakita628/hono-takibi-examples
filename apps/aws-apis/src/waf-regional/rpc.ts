import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSWAFRegional20161128AssociateWebACL(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.AssociateWebACL']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.AssociateWebACL'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128CreateByteMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateByteMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateByteMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128CreateGeoMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateGeoMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateGeoMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128CreateIPSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateIPSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateIPSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128CreateRateBasedRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRateBasedRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRateBasedRule'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128CreateRegexMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128CreateRegexPatternSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexPatternSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRegexPatternSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128CreateRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRule'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128CreateRuleGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRuleGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateRuleGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128CreateSizeConstraintSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSizeConstraintSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSizeConstraintSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128CreateSqlInjectionMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128CreateWebACL(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACL']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACL'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128CreateWebACLMigrationStack(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACLMigrationStack']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateWebACLMigrationStack'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128CreateXssMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.CreateXssMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.CreateXssMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128DeleteByteMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteByteMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteByteMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128DeleteGeoMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteGeoMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteGeoMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128DeleteIPSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteIPSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteIPSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128DeleteLoggingConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteLoggingConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteLoggingConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128DeletePermissionPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeletePermissionPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.DeletePermissionPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128DeleteRateBasedRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRateBasedRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRateBasedRule'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128DeleteRegexMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128DeleteRegexPatternSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexPatternSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRegexPatternSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128DeleteRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRule'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128DeleteRuleGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRuleGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteRuleGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128DeleteSizeConstraintSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSizeConstraintSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSizeConstraintSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128DeleteSqlInjectionMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128DeleteWebACL(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteWebACL']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteWebACL'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128DeleteXssMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteXssMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.DeleteXssMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128DisassociateWebACL(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.DisassociateWebACL']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.DisassociateWebACL'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128GetByteMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetByteMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.GetByteMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128GetChangeToken(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeToken']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeToken'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128GetChangeTokenStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeTokenStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.GetChangeTokenStatus'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128GetGeoMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetGeoMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.GetGeoMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128GetIPSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetIPSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.GetIPSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128GetLoggingConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetLoggingConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.GetLoggingConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128GetPermissionPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetPermissionPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.GetPermissionPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128GetRateBasedRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRule'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128GetRateBasedRuleManagedKeys(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128GetRegexMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128GetRegexPatternSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexPatternSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.GetRegexPatternSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128GetRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.GetRule'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128GetRuleGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetRuleGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.GetRuleGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128GetSampledRequests(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSampledRequests']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.GetSampledRequests'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128GetSizeConstraintSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSizeConstraintSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.GetSizeConstraintSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128GetSqlInjectionMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetSqlInjectionMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.GetSqlInjectionMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128GetWebACL(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACL']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACL'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128GetWebACLForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACLForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.GetWebACLForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128GetXssMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.GetXssMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.GetXssMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128ListActivatedRulesInRuleGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128ListByteMatchSets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListByteMatchSets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.ListByteMatchSets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128ListGeoMatchSets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListGeoMatchSets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.ListGeoMatchSets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128ListIPSets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListIPSets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.ListIPSets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128ListLoggingConfigurations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListLoggingConfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.ListLoggingConfigurations'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128ListRateBasedRules(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRateBasedRules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.ListRateBasedRules'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128ListRegexMatchSets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexMatchSets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexMatchSets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128ListRegexPatternSets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexPatternSets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.ListRegexPatternSets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128ListResourcesForWebACL(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListResourcesForWebACL']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.ListResourcesForWebACL'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128ListRuleGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRuleGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.ListRuleGroups'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128ListRules(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListRules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.ListRules'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128ListSizeConstraintSets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSizeConstraintSets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.ListSizeConstraintSets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128ListSqlInjectionMatchSets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSqlInjectionMatchSets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.ListSqlInjectionMatchSets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128ListSubscribedRuleGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListSubscribedRuleGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.ListSubscribedRuleGroups'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128ListWebACLs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListWebACLs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.ListWebACLs'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128ListXssMatchSets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.ListXssMatchSets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.ListXssMatchSets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128PutLoggingConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.PutLoggingConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.PutLoggingConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128PutPermissionPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.PutPermissionPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.PutPermissionPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128TagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128UntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128UpdateByteMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateByteMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateByteMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128UpdateGeoMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateGeoMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateGeoMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128UpdateIPSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateIPSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateIPSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128UpdateRateBasedRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRateBasedRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRateBasedRule'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128UpdateRegexMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexMatchSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128UpdateRegexPatternSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexPatternSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRegexPatternSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128UpdateRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRule'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128UpdateRuleGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRuleGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateRuleGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128UpdateSizeConstraintSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSizeConstraintSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSizeConstraintSet'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128UpdateSqlInjectionMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128UpdateWebACL(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateWebACL']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateWebACL'].$post(args, options),
  )
}

export async function postXAmzTargetAWSWAFRegional20161128UpdateXssMatchSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateXssMatchSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSWAF_Regional_20161128.UpdateXssMatchSet'].$post(args, options),
  )
}
