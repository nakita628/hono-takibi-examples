import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwswaf20150824CreateByteMatchSetHandler,
  xAmzTargetAwswaf20150824CreateGeoMatchSetHandler,
  xAmzTargetAwswaf20150824CreateIpSetHandler,
  xAmzTargetAwswaf20150824CreateRateBasedRuleHandler,
  xAmzTargetAwswaf20150824CreateRegexMatchSetHandler,
  xAmzTargetAwswaf20150824CreateRegexPatternSetHandler,
  xAmzTargetAwswaf20150824CreateRuleGroupHandler,
  xAmzTargetAwswaf20150824CreateRuleHandler,
  xAmzTargetAwswaf20150824CreateSizeConstraintSetHandler,
  xAmzTargetAwswaf20150824CreateSqlInjectionMatchSetHandler,
  xAmzTargetAwswaf20150824CreateWebAclHandler,
  xAmzTargetAwswaf20150824CreateWebAclMigrationStackHandler,
  xAmzTargetAwswaf20150824CreateXssMatchSetHandler,
  xAmzTargetAwswaf20150824DeleteByteMatchSetHandler,
  xAmzTargetAwswaf20150824DeleteGeoMatchSetHandler,
  xAmzTargetAwswaf20150824DeleteIpSetHandler,
  xAmzTargetAwswaf20150824DeleteLoggingConfigurationHandler,
  xAmzTargetAwswaf20150824DeletePermissionPolicyHandler,
  xAmzTargetAwswaf20150824DeleteRateBasedRuleHandler,
  xAmzTargetAwswaf20150824DeleteRegexMatchSetHandler,
  xAmzTargetAwswaf20150824DeleteRegexPatternSetHandler,
  xAmzTargetAwswaf20150824DeleteRuleGroupHandler,
  xAmzTargetAwswaf20150824DeleteRuleHandler,
  xAmzTargetAwswaf20150824DeleteSizeConstraintSetHandler,
  xAmzTargetAwswaf20150824DeleteSqlInjectionMatchSetHandler,
  xAmzTargetAwswaf20150824DeleteWebAclHandler,
  xAmzTargetAwswaf20150824DeleteXssMatchSetHandler,
  xAmzTargetAwswaf20150824GetByteMatchSetHandler,
  xAmzTargetAwswaf20150824GetChangeTokenHandler,
  xAmzTargetAwswaf20150824GetChangeTokenStatusHandler,
  xAmzTargetAwswaf20150824GetGeoMatchSetHandler,
  xAmzTargetAwswaf20150824GetIpSetHandler,
  xAmzTargetAwswaf20150824GetLoggingConfigurationHandler,
  xAmzTargetAwswaf20150824GetPermissionPolicyHandler,
  xAmzTargetAwswaf20150824GetRateBasedRuleHandler,
  xAmzTargetAwswaf20150824GetRateBasedRuleManagedKeysHandler,
  xAmzTargetAwswaf20150824GetRegexMatchSetHandler,
  xAmzTargetAwswaf20150824GetRegexPatternSetHandler,
  xAmzTargetAwswaf20150824GetRuleGroupHandler,
  xAmzTargetAwswaf20150824GetRuleHandler,
  xAmzTargetAwswaf20150824GetSampledRequestsHandler,
  xAmzTargetAwswaf20150824GetSizeConstraintSetHandler,
  xAmzTargetAwswaf20150824GetSqlInjectionMatchSetHandler,
  xAmzTargetAwswaf20150824GetWebAclHandler,
  xAmzTargetAwswaf20150824GetXssMatchSetHandler,
  xAmzTargetAwswaf20150824ListActivatedRulesInRuleGroupHandler,
  xAmzTargetAwswaf20150824ListByteMatchSetsHandler,
  xAmzTargetAwswaf20150824ListGeoMatchSetsHandler,
  xAmzTargetAwswaf20150824ListIpSetsHandler,
  xAmzTargetAwswaf20150824ListLoggingConfigurationsHandler,
  xAmzTargetAwswaf20150824ListRateBasedRulesHandler,
  xAmzTargetAwswaf20150824ListRegexMatchSetsHandler,
  xAmzTargetAwswaf20150824ListRegexPatternSetsHandler,
  xAmzTargetAwswaf20150824ListRuleGroupsHandler,
  xAmzTargetAwswaf20150824ListRulesHandler,
  xAmzTargetAwswaf20150824ListSizeConstraintSetsHandler,
  xAmzTargetAwswaf20150824ListSqlInjectionMatchSetsHandler,
  xAmzTargetAwswaf20150824ListSubscribedRuleGroupsHandler,
  xAmzTargetAwswaf20150824ListTagsForResourceHandler,
  xAmzTargetAwswaf20150824ListWebAcLsHandler,
  xAmzTargetAwswaf20150824ListXssMatchSetsHandler,
  xAmzTargetAwswaf20150824PutLoggingConfigurationHandler,
  xAmzTargetAwswaf20150824PutPermissionPolicyHandler,
  xAmzTargetAwswaf20150824TagResourceHandler,
  xAmzTargetAwswaf20150824UntagResourceHandler,
  xAmzTargetAwswaf20150824UpdateByteMatchSetHandler,
  xAmzTargetAwswaf20150824UpdateGeoMatchSetHandler,
  xAmzTargetAwswaf20150824UpdateIpSetHandler,
  xAmzTargetAwswaf20150824UpdateRateBasedRuleHandler,
  xAmzTargetAwswaf20150824UpdateRegexMatchSetHandler,
  xAmzTargetAwswaf20150824UpdateRegexPatternSetHandler,
  xAmzTargetAwswaf20150824UpdateRuleGroupHandler,
  xAmzTargetAwswaf20150824UpdateRuleHandler,
  xAmzTargetAwswaf20150824UpdateSizeConstraintSetHandler,
  xAmzTargetAwswaf20150824UpdateSqlInjectionMatchSetHandler,
  xAmzTargetAwswaf20150824UpdateWebAclHandler,
  xAmzTargetAwswaf20150824UpdateXssMatchSetHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwswaf20150824CreateByteMatchSetHandler)
  .route('/', xAmzTargetAwswaf20150824CreateGeoMatchSetHandler)
  .route('/', xAmzTargetAwswaf20150824CreateIpSetHandler)
  .route('/', xAmzTargetAwswaf20150824CreateRateBasedRuleHandler)
  .route('/', xAmzTargetAwswaf20150824CreateRegexMatchSetHandler)
  .route('/', xAmzTargetAwswaf20150824CreateRegexPatternSetHandler)
  .route('/', xAmzTargetAwswaf20150824CreateRuleHandler)
  .route('/', xAmzTargetAwswaf20150824CreateRuleGroupHandler)
  .route('/', xAmzTargetAwswaf20150824CreateSizeConstraintSetHandler)
  .route('/', xAmzTargetAwswaf20150824CreateSqlInjectionMatchSetHandler)
  .route('/', xAmzTargetAwswaf20150824CreateWebAclHandler)
  .route('/', xAmzTargetAwswaf20150824CreateWebAclMigrationStackHandler)
  .route('/', xAmzTargetAwswaf20150824CreateXssMatchSetHandler)
  .route('/', xAmzTargetAwswaf20150824DeleteByteMatchSetHandler)
  .route('/', xAmzTargetAwswaf20150824DeleteGeoMatchSetHandler)
  .route('/', xAmzTargetAwswaf20150824DeleteIpSetHandler)
  .route('/', xAmzTargetAwswaf20150824DeleteLoggingConfigurationHandler)
  .route('/', xAmzTargetAwswaf20150824DeletePermissionPolicyHandler)
  .route('/', xAmzTargetAwswaf20150824DeleteRateBasedRuleHandler)
  .route('/', xAmzTargetAwswaf20150824DeleteRegexMatchSetHandler)
  .route('/', xAmzTargetAwswaf20150824DeleteRegexPatternSetHandler)
  .route('/', xAmzTargetAwswaf20150824DeleteRuleHandler)
  .route('/', xAmzTargetAwswaf20150824DeleteRuleGroupHandler)
  .route('/', xAmzTargetAwswaf20150824DeleteSizeConstraintSetHandler)
  .route('/', xAmzTargetAwswaf20150824DeleteSqlInjectionMatchSetHandler)
  .route('/', xAmzTargetAwswaf20150824DeleteWebAclHandler)
  .route('/', xAmzTargetAwswaf20150824DeleteXssMatchSetHandler)
  .route('/', xAmzTargetAwswaf20150824GetByteMatchSetHandler)
  .route('/', xAmzTargetAwswaf20150824GetChangeTokenHandler)
  .route('/', xAmzTargetAwswaf20150824GetChangeTokenStatusHandler)
  .route('/', xAmzTargetAwswaf20150824GetGeoMatchSetHandler)
  .route('/', xAmzTargetAwswaf20150824GetIpSetHandler)
  .route('/', xAmzTargetAwswaf20150824GetLoggingConfigurationHandler)
  .route('/', xAmzTargetAwswaf20150824GetPermissionPolicyHandler)
  .route('/', xAmzTargetAwswaf20150824GetRateBasedRuleHandler)
  .route('/', xAmzTargetAwswaf20150824GetRateBasedRuleManagedKeysHandler)
  .route('/', xAmzTargetAwswaf20150824GetRegexMatchSetHandler)
  .route('/', xAmzTargetAwswaf20150824GetRegexPatternSetHandler)
  .route('/', xAmzTargetAwswaf20150824GetRuleHandler)
  .route('/', xAmzTargetAwswaf20150824GetRuleGroupHandler)
  .route('/', xAmzTargetAwswaf20150824GetSampledRequestsHandler)
  .route('/', xAmzTargetAwswaf20150824GetSizeConstraintSetHandler)
  .route('/', xAmzTargetAwswaf20150824GetSqlInjectionMatchSetHandler)
  .route('/', xAmzTargetAwswaf20150824GetWebAclHandler)
  .route('/', xAmzTargetAwswaf20150824GetXssMatchSetHandler)
  .route('/', xAmzTargetAwswaf20150824ListActivatedRulesInRuleGroupHandler)
  .route('/', xAmzTargetAwswaf20150824ListByteMatchSetsHandler)
  .route('/', xAmzTargetAwswaf20150824ListGeoMatchSetsHandler)
  .route('/', xAmzTargetAwswaf20150824ListIpSetsHandler)
  .route('/', xAmzTargetAwswaf20150824ListLoggingConfigurationsHandler)
  .route('/', xAmzTargetAwswaf20150824ListRateBasedRulesHandler)
  .route('/', xAmzTargetAwswaf20150824ListRegexMatchSetsHandler)
  .route('/', xAmzTargetAwswaf20150824ListRegexPatternSetsHandler)
  .route('/', xAmzTargetAwswaf20150824ListRuleGroupsHandler)
  .route('/', xAmzTargetAwswaf20150824ListRulesHandler)
  .route('/', xAmzTargetAwswaf20150824ListSizeConstraintSetsHandler)
  .route('/', xAmzTargetAwswaf20150824ListSqlInjectionMatchSetsHandler)
  .route('/', xAmzTargetAwswaf20150824ListSubscribedRuleGroupsHandler)
  .route('/', xAmzTargetAwswaf20150824ListTagsForResourceHandler)
  .route('/', xAmzTargetAwswaf20150824ListWebAcLsHandler)
  .route('/', xAmzTargetAwswaf20150824ListXssMatchSetsHandler)
  .route('/', xAmzTargetAwswaf20150824PutLoggingConfigurationHandler)
  .route('/', xAmzTargetAwswaf20150824PutPermissionPolicyHandler)
  .route('/', xAmzTargetAwswaf20150824TagResourceHandler)
  .route('/', xAmzTargetAwswaf20150824UntagResourceHandler)
  .route('/', xAmzTargetAwswaf20150824UpdateByteMatchSetHandler)
  .route('/', xAmzTargetAwswaf20150824UpdateGeoMatchSetHandler)
  .route('/', xAmzTargetAwswaf20150824UpdateIpSetHandler)
  .route('/', xAmzTargetAwswaf20150824UpdateRateBasedRuleHandler)
  .route('/', xAmzTargetAwswaf20150824UpdateRegexMatchSetHandler)
  .route('/', xAmzTargetAwswaf20150824UpdateRegexPatternSetHandler)
  .route('/', xAmzTargetAwswaf20150824UpdateRuleHandler)
  .route('/', xAmzTargetAwswaf20150824UpdateRuleGroupHandler)
  .route('/', xAmzTargetAwswaf20150824UpdateSizeConstraintSetHandler)
  .route('/', xAmzTargetAwswaf20150824UpdateSqlInjectionMatchSetHandler)
  .route('/', xAmzTargetAwswaf20150824UpdateWebAclHandler)
  .route('/', xAmzTargetAwswaf20150824UpdateXssMatchSetHandler)

export default app
