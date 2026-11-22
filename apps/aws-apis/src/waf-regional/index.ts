import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSWAFRegional20161128AssociateWebACLHandler,
  XAmzTargetAWSWAFRegional20161128CreateByteMatchSetHandler,
  XAmzTargetAWSWAFRegional20161128CreateGeoMatchSetHandler,
  XAmzTargetAWSWAFRegional20161128CreateIPSetHandler,
  XAmzTargetAWSWAFRegional20161128CreateRateBasedRuleHandler,
  XAmzTargetAWSWAFRegional20161128CreateRegexMatchSetHandler,
  XAmzTargetAWSWAFRegional20161128CreateRegexPatternSetHandler,
  XAmzTargetAWSWAFRegional20161128CreateRuleGroupHandler,
  XAmzTargetAWSWAFRegional20161128CreateRuleHandler,
  XAmzTargetAWSWAFRegional20161128CreateSizeConstraintSetHandler,
  XAmzTargetAWSWAFRegional20161128CreateSqlInjectionMatchSetHandler,
  XAmzTargetAWSWAFRegional20161128CreateWebACLHandler,
  XAmzTargetAWSWAFRegional20161128CreateWebACLMigrationStackHandler,
  XAmzTargetAWSWAFRegional20161128CreateXssMatchSetHandler,
  XAmzTargetAWSWAFRegional20161128DeleteByteMatchSetHandler,
  XAmzTargetAWSWAFRegional20161128DeleteGeoMatchSetHandler,
  XAmzTargetAWSWAFRegional20161128DeleteIPSetHandler,
  XAmzTargetAWSWAFRegional20161128DeleteLoggingConfigurationHandler,
  XAmzTargetAWSWAFRegional20161128DeletePermissionPolicyHandler,
  XAmzTargetAWSWAFRegional20161128DeleteRateBasedRuleHandler,
  XAmzTargetAWSWAFRegional20161128DeleteRegexMatchSetHandler,
  XAmzTargetAWSWAFRegional20161128DeleteRegexPatternSetHandler,
  XAmzTargetAWSWAFRegional20161128DeleteRuleGroupHandler,
  XAmzTargetAWSWAFRegional20161128DeleteRuleHandler,
  XAmzTargetAWSWAFRegional20161128DeleteSizeConstraintSetHandler,
  XAmzTargetAWSWAFRegional20161128DeleteSqlInjectionMatchSetHandler,
  XAmzTargetAWSWAFRegional20161128DeleteWebACLHandler,
  XAmzTargetAWSWAFRegional20161128DeleteXssMatchSetHandler,
  XAmzTargetAWSWAFRegional20161128DisassociateWebACLHandler,
  XAmzTargetAWSWAFRegional20161128GetByteMatchSetHandler,
  XAmzTargetAWSWAFRegional20161128GetChangeTokenHandler,
  XAmzTargetAWSWAFRegional20161128GetChangeTokenStatusHandler,
  XAmzTargetAWSWAFRegional20161128GetGeoMatchSetHandler,
  XAmzTargetAWSWAFRegional20161128GetIPSetHandler,
  XAmzTargetAWSWAFRegional20161128GetLoggingConfigurationHandler,
  XAmzTargetAWSWAFRegional20161128GetPermissionPolicyHandler,
  XAmzTargetAWSWAFRegional20161128GetRateBasedRuleHandler,
  XAmzTargetAWSWAFRegional20161128GetRateBasedRuleManagedKeysHandler,
  XAmzTargetAWSWAFRegional20161128GetRegexMatchSetHandler,
  XAmzTargetAWSWAFRegional20161128GetRegexPatternSetHandler,
  XAmzTargetAWSWAFRegional20161128GetRuleGroupHandler,
  XAmzTargetAWSWAFRegional20161128GetRuleHandler,
  XAmzTargetAWSWAFRegional20161128GetSampledRequestsHandler,
  XAmzTargetAWSWAFRegional20161128GetSizeConstraintSetHandler,
  XAmzTargetAWSWAFRegional20161128GetSqlInjectionMatchSetHandler,
  XAmzTargetAWSWAFRegional20161128GetWebACLForResourceHandler,
  XAmzTargetAWSWAFRegional20161128GetWebACLHandler,
  XAmzTargetAWSWAFRegional20161128GetXssMatchSetHandler,
  XAmzTargetAWSWAFRegional20161128ListActivatedRulesInRuleGroupHandler,
  XAmzTargetAWSWAFRegional20161128ListByteMatchSetsHandler,
  XAmzTargetAWSWAFRegional20161128ListGeoMatchSetsHandler,
  XAmzTargetAWSWAFRegional20161128ListIPSetsHandler,
  XAmzTargetAWSWAFRegional20161128ListLoggingConfigurationsHandler,
  XAmzTargetAWSWAFRegional20161128ListRateBasedRulesHandler,
  XAmzTargetAWSWAFRegional20161128ListRegexMatchSetsHandler,
  XAmzTargetAWSWAFRegional20161128ListRegexPatternSetsHandler,
  XAmzTargetAWSWAFRegional20161128ListResourcesForWebACLHandler,
  XAmzTargetAWSWAFRegional20161128ListRuleGroupsHandler,
  XAmzTargetAWSWAFRegional20161128ListRulesHandler,
  XAmzTargetAWSWAFRegional20161128ListSizeConstraintSetsHandler,
  XAmzTargetAWSWAFRegional20161128ListSqlInjectionMatchSetsHandler,
  XAmzTargetAWSWAFRegional20161128ListSubscribedRuleGroupsHandler,
  XAmzTargetAWSWAFRegional20161128ListTagsForResourceHandler,
  XAmzTargetAWSWAFRegional20161128ListWebACLsHandler,
  XAmzTargetAWSWAFRegional20161128ListXssMatchSetsHandler,
  XAmzTargetAWSWAFRegional20161128PutLoggingConfigurationHandler,
  XAmzTargetAWSWAFRegional20161128PutPermissionPolicyHandler,
  XAmzTargetAWSWAFRegional20161128TagResourceHandler,
  XAmzTargetAWSWAFRegional20161128UntagResourceHandler,
  XAmzTargetAWSWAFRegional20161128UpdateByteMatchSetHandler,
  XAmzTargetAWSWAFRegional20161128UpdateGeoMatchSetHandler,
  XAmzTargetAWSWAFRegional20161128UpdateIPSetHandler,
  XAmzTargetAWSWAFRegional20161128UpdateRateBasedRuleHandler,
  XAmzTargetAWSWAFRegional20161128UpdateRegexMatchSetHandler,
  XAmzTargetAWSWAFRegional20161128UpdateRegexPatternSetHandler,
  XAmzTargetAWSWAFRegional20161128UpdateRuleGroupHandler,
  XAmzTargetAWSWAFRegional20161128UpdateRuleHandler,
  XAmzTargetAWSWAFRegional20161128UpdateSizeConstraintSetHandler,
  XAmzTargetAWSWAFRegional20161128UpdateSqlInjectionMatchSetHandler,
  XAmzTargetAWSWAFRegional20161128UpdateWebACLHandler,
  XAmzTargetAWSWAFRegional20161128UpdateXssMatchSetHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSWAFRegional20161128AssociateWebACLHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128CreateByteMatchSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128CreateGeoMatchSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128CreateIPSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128CreateRateBasedRuleHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128CreateRegexMatchSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128CreateRegexPatternSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128CreateRuleHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128CreateRuleGroupHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128CreateSizeConstraintSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128CreateSqlInjectionMatchSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128CreateWebACLHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128CreateWebACLMigrationStackHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128CreateXssMatchSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128DeleteByteMatchSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128DeleteGeoMatchSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128DeleteIPSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128DeleteLoggingConfigurationHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128DeletePermissionPolicyHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128DeleteRateBasedRuleHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128DeleteRegexMatchSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128DeleteRegexPatternSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128DeleteRuleHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128DeleteRuleGroupHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128DeleteSizeConstraintSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128DeleteSqlInjectionMatchSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128DeleteWebACLHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128DeleteXssMatchSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128DisassociateWebACLHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128GetByteMatchSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128GetChangeTokenHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128GetChangeTokenStatusHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128GetGeoMatchSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128GetIPSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128GetLoggingConfigurationHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128GetPermissionPolicyHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128GetRateBasedRuleHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128GetRateBasedRuleManagedKeysHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128GetRegexMatchSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128GetRegexPatternSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128GetRuleHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128GetRuleGroupHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128GetSampledRequestsHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128GetSizeConstraintSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128GetSqlInjectionMatchSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128GetWebACLHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128GetWebACLForResourceHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128GetXssMatchSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128ListActivatedRulesInRuleGroupHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128ListByteMatchSetsHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128ListGeoMatchSetsHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128ListIPSetsHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128ListLoggingConfigurationsHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128ListRateBasedRulesHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128ListRegexMatchSetsHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128ListRegexPatternSetsHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128ListResourcesForWebACLHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128ListRuleGroupsHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128ListRulesHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128ListSizeConstraintSetsHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128ListSqlInjectionMatchSetsHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128ListSubscribedRuleGroupsHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128ListTagsForResourceHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128ListWebACLsHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128ListXssMatchSetsHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128PutLoggingConfigurationHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128PutPermissionPolicyHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128TagResourceHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128UntagResourceHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128UpdateByteMatchSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128UpdateGeoMatchSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128UpdateIPSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128UpdateRateBasedRuleHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128UpdateRegexMatchSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128UpdateRegexPatternSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128UpdateRuleHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128UpdateRuleGroupHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128UpdateSizeConstraintSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128UpdateSqlInjectionMatchSetHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128UpdateWebACLHandler)
  .route('/', XAmzTargetAWSWAFRegional20161128UpdateXssMatchSetHandler)

export default app
