import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwswafRegional20161128AssociateWebAclHandler,
  xAmzTargetAwswafRegional20161128CreateByteMatchSetHandler,
  xAmzTargetAwswafRegional20161128CreateGeoMatchSetHandler,
  xAmzTargetAwswafRegional20161128CreateIpSetHandler,
  xAmzTargetAwswafRegional20161128CreateRateBasedRuleHandler,
  xAmzTargetAwswafRegional20161128CreateRegexMatchSetHandler,
  xAmzTargetAwswafRegional20161128CreateRegexPatternSetHandler,
  xAmzTargetAwswafRegional20161128CreateRuleGroupHandler,
  xAmzTargetAwswafRegional20161128CreateRuleHandler,
  xAmzTargetAwswafRegional20161128CreateSizeConstraintSetHandler,
  xAmzTargetAwswafRegional20161128CreateSqlInjectionMatchSetHandler,
  xAmzTargetAwswafRegional20161128CreateWebAclHandler,
  xAmzTargetAwswafRegional20161128CreateWebAclMigrationStackHandler,
  xAmzTargetAwswafRegional20161128CreateXssMatchSetHandler,
  xAmzTargetAwswafRegional20161128DeleteByteMatchSetHandler,
  xAmzTargetAwswafRegional20161128DeleteGeoMatchSetHandler,
  xAmzTargetAwswafRegional20161128DeleteIpSetHandler,
  xAmzTargetAwswafRegional20161128DeleteLoggingConfigurationHandler,
  xAmzTargetAwswafRegional20161128DeletePermissionPolicyHandler,
  xAmzTargetAwswafRegional20161128DeleteRateBasedRuleHandler,
  xAmzTargetAwswafRegional20161128DeleteRegexMatchSetHandler,
  xAmzTargetAwswafRegional20161128DeleteRegexPatternSetHandler,
  xAmzTargetAwswafRegional20161128DeleteRuleGroupHandler,
  xAmzTargetAwswafRegional20161128DeleteRuleHandler,
  xAmzTargetAwswafRegional20161128DeleteSizeConstraintSetHandler,
  xAmzTargetAwswafRegional20161128DeleteSqlInjectionMatchSetHandler,
  xAmzTargetAwswafRegional20161128DeleteWebAclHandler,
  xAmzTargetAwswafRegional20161128DeleteXssMatchSetHandler,
  xAmzTargetAwswafRegional20161128DisassociateWebAclHandler,
  xAmzTargetAwswafRegional20161128GetByteMatchSetHandler,
  xAmzTargetAwswafRegional20161128GetChangeTokenHandler,
  xAmzTargetAwswafRegional20161128GetChangeTokenStatusHandler,
  xAmzTargetAwswafRegional20161128GetGeoMatchSetHandler,
  xAmzTargetAwswafRegional20161128GetIpSetHandler,
  xAmzTargetAwswafRegional20161128GetLoggingConfigurationHandler,
  xAmzTargetAwswafRegional20161128GetPermissionPolicyHandler,
  xAmzTargetAwswafRegional20161128GetRateBasedRuleHandler,
  xAmzTargetAwswafRegional20161128GetRateBasedRuleManagedKeysHandler,
  xAmzTargetAwswafRegional20161128GetRegexMatchSetHandler,
  xAmzTargetAwswafRegional20161128GetRegexPatternSetHandler,
  xAmzTargetAwswafRegional20161128GetRuleGroupHandler,
  xAmzTargetAwswafRegional20161128GetRuleHandler,
  xAmzTargetAwswafRegional20161128GetSampledRequestsHandler,
  xAmzTargetAwswafRegional20161128GetSizeConstraintSetHandler,
  xAmzTargetAwswafRegional20161128GetSqlInjectionMatchSetHandler,
  xAmzTargetAwswafRegional20161128GetWebAclForResourceHandler,
  xAmzTargetAwswafRegional20161128GetWebAclHandler,
  xAmzTargetAwswafRegional20161128GetXssMatchSetHandler,
  xAmzTargetAwswafRegional20161128ListActivatedRulesInRuleGroupHandler,
  xAmzTargetAwswafRegional20161128ListByteMatchSetsHandler,
  xAmzTargetAwswafRegional20161128ListGeoMatchSetsHandler,
  xAmzTargetAwswafRegional20161128ListIpSetsHandler,
  xAmzTargetAwswafRegional20161128ListLoggingConfigurationsHandler,
  xAmzTargetAwswafRegional20161128ListRateBasedRulesHandler,
  xAmzTargetAwswafRegional20161128ListRegexMatchSetsHandler,
  xAmzTargetAwswafRegional20161128ListRegexPatternSetsHandler,
  xAmzTargetAwswafRegional20161128ListResourcesForWebAclHandler,
  xAmzTargetAwswafRegional20161128ListRuleGroupsHandler,
  xAmzTargetAwswafRegional20161128ListRulesHandler,
  xAmzTargetAwswafRegional20161128ListSizeConstraintSetsHandler,
  xAmzTargetAwswafRegional20161128ListSqlInjectionMatchSetsHandler,
  xAmzTargetAwswafRegional20161128ListSubscribedRuleGroupsHandler,
  xAmzTargetAwswafRegional20161128ListTagsForResourceHandler,
  xAmzTargetAwswafRegional20161128ListWebAcLsHandler,
  xAmzTargetAwswafRegional20161128ListXssMatchSetsHandler,
  xAmzTargetAwswafRegional20161128PutLoggingConfigurationHandler,
  xAmzTargetAwswafRegional20161128PutPermissionPolicyHandler,
  xAmzTargetAwswafRegional20161128TagResourceHandler,
  xAmzTargetAwswafRegional20161128UntagResourceHandler,
  xAmzTargetAwswafRegional20161128UpdateByteMatchSetHandler,
  xAmzTargetAwswafRegional20161128UpdateGeoMatchSetHandler,
  xAmzTargetAwswafRegional20161128UpdateIpSetHandler,
  xAmzTargetAwswafRegional20161128UpdateRateBasedRuleHandler,
  xAmzTargetAwswafRegional20161128UpdateRegexMatchSetHandler,
  xAmzTargetAwswafRegional20161128UpdateRegexPatternSetHandler,
  xAmzTargetAwswafRegional20161128UpdateRuleGroupHandler,
  xAmzTargetAwswafRegional20161128UpdateRuleHandler,
  xAmzTargetAwswafRegional20161128UpdateSizeConstraintSetHandler,
  xAmzTargetAwswafRegional20161128UpdateSqlInjectionMatchSetHandler,
  xAmzTargetAwswafRegional20161128UpdateWebAclHandler,
  xAmzTargetAwswafRegional20161128UpdateXssMatchSetHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwswafRegional20161128AssociateWebAclHandler)
  .route('/', xAmzTargetAwswafRegional20161128CreateByteMatchSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128CreateGeoMatchSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128CreateIpSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128CreateRateBasedRuleHandler)
  .route('/', xAmzTargetAwswafRegional20161128CreateRegexMatchSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128CreateRegexPatternSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128CreateRuleHandler)
  .route('/', xAmzTargetAwswafRegional20161128CreateRuleGroupHandler)
  .route('/', xAmzTargetAwswafRegional20161128CreateSizeConstraintSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128CreateSqlInjectionMatchSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128CreateWebAclHandler)
  .route('/', xAmzTargetAwswafRegional20161128CreateWebAclMigrationStackHandler)
  .route('/', xAmzTargetAwswafRegional20161128CreateXssMatchSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128DeleteByteMatchSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128DeleteGeoMatchSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128DeleteIpSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128DeleteLoggingConfigurationHandler)
  .route('/', xAmzTargetAwswafRegional20161128DeletePermissionPolicyHandler)
  .route('/', xAmzTargetAwswafRegional20161128DeleteRateBasedRuleHandler)
  .route('/', xAmzTargetAwswafRegional20161128DeleteRegexMatchSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128DeleteRegexPatternSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128DeleteRuleHandler)
  .route('/', xAmzTargetAwswafRegional20161128DeleteRuleGroupHandler)
  .route('/', xAmzTargetAwswafRegional20161128DeleteSizeConstraintSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128DeleteSqlInjectionMatchSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128DeleteWebAclHandler)
  .route('/', xAmzTargetAwswafRegional20161128DeleteXssMatchSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128DisassociateWebAclHandler)
  .route('/', xAmzTargetAwswafRegional20161128GetByteMatchSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128GetChangeTokenHandler)
  .route('/', xAmzTargetAwswafRegional20161128GetChangeTokenStatusHandler)
  .route('/', xAmzTargetAwswafRegional20161128GetGeoMatchSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128GetIpSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128GetLoggingConfigurationHandler)
  .route('/', xAmzTargetAwswafRegional20161128GetPermissionPolicyHandler)
  .route('/', xAmzTargetAwswafRegional20161128GetRateBasedRuleHandler)
  .route('/', xAmzTargetAwswafRegional20161128GetRateBasedRuleManagedKeysHandler)
  .route('/', xAmzTargetAwswafRegional20161128GetRegexMatchSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128GetRegexPatternSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128GetRuleHandler)
  .route('/', xAmzTargetAwswafRegional20161128GetRuleGroupHandler)
  .route('/', xAmzTargetAwswafRegional20161128GetSampledRequestsHandler)
  .route('/', xAmzTargetAwswafRegional20161128GetSizeConstraintSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128GetSqlInjectionMatchSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128GetWebAclHandler)
  .route('/', xAmzTargetAwswafRegional20161128GetWebAclForResourceHandler)
  .route('/', xAmzTargetAwswafRegional20161128GetXssMatchSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128ListActivatedRulesInRuleGroupHandler)
  .route('/', xAmzTargetAwswafRegional20161128ListByteMatchSetsHandler)
  .route('/', xAmzTargetAwswafRegional20161128ListGeoMatchSetsHandler)
  .route('/', xAmzTargetAwswafRegional20161128ListIpSetsHandler)
  .route('/', xAmzTargetAwswafRegional20161128ListLoggingConfigurationsHandler)
  .route('/', xAmzTargetAwswafRegional20161128ListRateBasedRulesHandler)
  .route('/', xAmzTargetAwswafRegional20161128ListRegexMatchSetsHandler)
  .route('/', xAmzTargetAwswafRegional20161128ListRegexPatternSetsHandler)
  .route('/', xAmzTargetAwswafRegional20161128ListResourcesForWebAclHandler)
  .route('/', xAmzTargetAwswafRegional20161128ListRuleGroupsHandler)
  .route('/', xAmzTargetAwswafRegional20161128ListRulesHandler)
  .route('/', xAmzTargetAwswafRegional20161128ListSizeConstraintSetsHandler)
  .route('/', xAmzTargetAwswafRegional20161128ListSqlInjectionMatchSetsHandler)
  .route('/', xAmzTargetAwswafRegional20161128ListSubscribedRuleGroupsHandler)
  .route('/', xAmzTargetAwswafRegional20161128ListTagsForResourceHandler)
  .route('/', xAmzTargetAwswafRegional20161128ListWebAcLsHandler)
  .route('/', xAmzTargetAwswafRegional20161128ListXssMatchSetsHandler)
  .route('/', xAmzTargetAwswafRegional20161128PutLoggingConfigurationHandler)
  .route('/', xAmzTargetAwswafRegional20161128PutPermissionPolicyHandler)
  .route('/', xAmzTargetAwswafRegional20161128TagResourceHandler)
  .route('/', xAmzTargetAwswafRegional20161128UntagResourceHandler)
  .route('/', xAmzTargetAwswafRegional20161128UpdateByteMatchSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128UpdateGeoMatchSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128UpdateIpSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128UpdateRateBasedRuleHandler)
  .route('/', xAmzTargetAwswafRegional20161128UpdateRegexMatchSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128UpdateRegexPatternSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128UpdateRuleHandler)
  .route('/', xAmzTargetAwswafRegional20161128UpdateRuleGroupHandler)
  .route('/', xAmzTargetAwswafRegional20161128UpdateSizeConstraintSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128UpdateSqlInjectionMatchSetHandler)
  .route('/', xAmzTargetAwswafRegional20161128UpdateWebAclHandler)
  .route('/', xAmzTargetAwswafRegional20161128UpdateXssMatchSetHandler)

export default app
