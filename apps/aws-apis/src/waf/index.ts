import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSWAF20150824CreateByteMatchSetHandler,
  XAmzTargetAWSWAF20150824CreateGeoMatchSetHandler,
  XAmzTargetAWSWAF20150824CreateIPSetHandler,
  XAmzTargetAWSWAF20150824CreateRateBasedRuleHandler,
  XAmzTargetAWSWAF20150824CreateRegexMatchSetHandler,
  XAmzTargetAWSWAF20150824CreateRegexPatternSetHandler,
  XAmzTargetAWSWAF20150824CreateRuleGroupHandler,
  XAmzTargetAWSWAF20150824CreateRuleHandler,
  XAmzTargetAWSWAF20150824CreateSizeConstraintSetHandler,
  XAmzTargetAWSWAF20150824CreateSqlInjectionMatchSetHandler,
  XAmzTargetAWSWAF20150824CreateWebACLHandler,
  XAmzTargetAWSWAF20150824CreateWebACLMigrationStackHandler,
  XAmzTargetAWSWAF20150824CreateXssMatchSetHandler,
  XAmzTargetAWSWAF20150824DeleteByteMatchSetHandler,
  XAmzTargetAWSWAF20150824DeleteGeoMatchSetHandler,
  XAmzTargetAWSWAF20150824DeleteIPSetHandler,
  XAmzTargetAWSWAF20150824DeleteLoggingConfigurationHandler,
  XAmzTargetAWSWAF20150824DeletePermissionPolicyHandler,
  XAmzTargetAWSWAF20150824DeleteRateBasedRuleHandler,
  XAmzTargetAWSWAF20150824DeleteRegexMatchSetHandler,
  XAmzTargetAWSWAF20150824DeleteRegexPatternSetHandler,
  XAmzTargetAWSWAF20150824DeleteRuleGroupHandler,
  XAmzTargetAWSWAF20150824DeleteRuleHandler,
  XAmzTargetAWSWAF20150824DeleteSizeConstraintSetHandler,
  XAmzTargetAWSWAF20150824DeleteSqlInjectionMatchSetHandler,
  XAmzTargetAWSWAF20150824DeleteWebACLHandler,
  XAmzTargetAWSWAF20150824DeleteXssMatchSetHandler,
  XAmzTargetAWSWAF20150824GetByteMatchSetHandler,
  XAmzTargetAWSWAF20150824GetChangeTokenHandler,
  XAmzTargetAWSWAF20150824GetChangeTokenStatusHandler,
  XAmzTargetAWSWAF20150824GetGeoMatchSetHandler,
  XAmzTargetAWSWAF20150824GetIPSetHandler,
  XAmzTargetAWSWAF20150824GetLoggingConfigurationHandler,
  XAmzTargetAWSWAF20150824GetPermissionPolicyHandler,
  XAmzTargetAWSWAF20150824GetRateBasedRuleHandler,
  XAmzTargetAWSWAF20150824GetRateBasedRuleManagedKeysHandler,
  XAmzTargetAWSWAF20150824GetRegexMatchSetHandler,
  XAmzTargetAWSWAF20150824GetRegexPatternSetHandler,
  XAmzTargetAWSWAF20150824GetRuleGroupHandler,
  XAmzTargetAWSWAF20150824GetRuleHandler,
  XAmzTargetAWSWAF20150824GetSampledRequestsHandler,
  XAmzTargetAWSWAF20150824GetSizeConstraintSetHandler,
  XAmzTargetAWSWAF20150824GetSqlInjectionMatchSetHandler,
  XAmzTargetAWSWAF20150824GetWebACLHandler,
  XAmzTargetAWSWAF20150824GetXssMatchSetHandler,
  XAmzTargetAWSWAF20150824ListActivatedRulesInRuleGroupHandler,
  XAmzTargetAWSWAF20150824ListByteMatchSetsHandler,
  XAmzTargetAWSWAF20150824ListGeoMatchSetsHandler,
  XAmzTargetAWSWAF20150824ListIPSetsHandler,
  XAmzTargetAWSWAF20150824ListLoggingConfigurationsHandler,
  XAmzTargetAWSWAF20150824ListRateBasedRulesHandler,
  XAmzTargetAWSWAF20150824ListRegexMatchSetsHandler,
  XAmzTargetAWSWAF20150824ListRegexPatternSetsHandler,
  XAmzTargetAWSWAF20150824ListRuleGroupsHandler,
  XAmzTargetAWSWAF20150824ListRulesHandler,
  XAmzTargetAWSWAF20150824ListSizeConstraintSetsHandler,
  XAmzTargetAWSWAF20150824ListSqlInjectionMatchSetsHandler,
  XAmzTargetAWSWAF20150824ListSubscribedRuleGroupsHandler,
  XAmzTargetAWSWAF20150824ListTagsForResourceHandler,
  XAmzTargetAWSWAF20150824ListWebACLsHandler,
  XAmzTargetAWSWAF20150824ListXssMatchSetsHandler,
  XAmzTargetAWSWAF20150824PutLoggingConfigurationHandler,
  XAmzTargetAWSWAF20150824PutPermissionPolicyHandler,
  XAmzTargetAWSWAF20150824TagResourceHandler,
  XAmzTargetAWSWAF20150824UntagResourceHandler,
  XAmzTargetAWSWAF20150824UpdateByteMatchSetHandler,
  XAmzTargetAWSWAF20150824UpdateGeoMatchSetHandler,
  XAmzTargetAWSWAF20150824UpdateIPSetHandler,
  XAmzTargetAWSWAF20150824UpdateRateBasedRuleHandler,
  XAmzTargetAWSWAF20150824UpdateRegexMatchSetHandler,
  XAmzTargetAWSWAF20150824UpdateRegexPatternSetHandler,
  XAmzTargetAWSWAF20150824UpdateRuleGroupHandler,
  XAmzTargetAWSWAF20150824UpdateRuleHandler,
  XAmzTargetAWSWAF20150824UpdateSizeConstraintSetHandler,
  XAmzTargetAWSWAF20150824UpdateSqlInjectionMatchSetHandler,
  XAmzTargetAWSWAF20150824UpdateWebACLHandler,
  XAmzTargetAWSWAF20150824UpdateXssMatchSetHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSWAF20150824CreateByteMatchSetHandler)
  .route('/', XAmzTargetAWSWAF20150824CreateGeoMatchSetHandler)
  .route('/', XAmzTargetAWSWAF20150824CreateIPSetHandler)
  .route('/', XAmzTargetAWSWAF20150824CreateRateBasedRuleHandler)
  .route('/', XAmzTargetAWSWAF20150824CreateRegexMatchSetHandler)
  .route('/', XAmzTargetAWSWAF20150824CreateRegexPatternSetHandler)
  .route('/', XAmzTargetAWSWAF20150824CreateRuleHandler)
  .route('/', XAmzTargetAWSWAF20150824CreateRuleGroupHandler)
  .route('/', XAmzTargetAWSWAF20150824CreateSizeConstraintSetHandler)
  .route('/', XAmzTargetAWSWAF20150824CreateSqlInjectionMatchSetHandler)
  .route('/', XAmzTargetAWSWAF20150824CreateWebACLHandler)
  .route('/', XAmzTargetAWSWAF20150824CreateWebACLMigrationStackHandler)
  .route('/', XAmzTargetAWSWAF20150824CreateXssMatchSetHandler)
  .route('/', XAmzTargetAWSWAF20150824DeleteByteMatchSetHandler)
  .route('/', XAmzTargetAWSWAF20150824DeleteGeoMatchSetHandler)
  .route('/', XAmzTargetAWSWAF20150824DeleteIPSetHandler)
  .route('/', XAmzTargetAWSWAF20150824DeleteLoggingConfigurationHandler)
  .route('/', XAmzTargetAWSWAF20150824DeletePermissionPolicyHandler)
  .route('/', XAmzTargetAWSWAF20150824DeleteRateBasedRuleHandler)
  .route('/', XAmzTargetAWSWAF20150824DeleteRegexMatchSetHandler)
  .route('/', XAmzTargetAWSWAF20150824DeleteRegexPatternSetHandler)
  .route('/', XAmzTargetAWSWAF20150824DeleteRuleHandler)
  .route('/', XAmzTargetAWSWAF20150824DeleteRuleGroupHandler)
  .route('/', XAmzTargetAWSWAF20150824DeleteSizeConstraintSetHandler)
  .route('/', XAmzTargetAWSWAF20150824DeleteSqlInjectionMatchSetHandler)
  .route('/', XAmzTargetAWSWAF20150824DeleteWebACLHandler)
  .route('/', XAmzTargetAWSWAF20150824DeleteXssMatchSetHandler)
  .route('/', XAmzTargetAWSWAF20150824GetByteMatchSetHandler)
  .route('/', XAmzTargetAWSWAF20150824GetChangeTokenHandler)
  .route('/', XAmzTargetAWSWAF20150824GetChangeTokenStatusHandler)
  .route('/', XAmzTargetAWSWAF20150824GetGeoMatchSetHandler)
  .route('/', XAmzTargetAWSWAF20150824GetIPSetHandler)
  .route('/', XAmzTargetAWSWAF20150824GetLoggingConfigurationHandler)
  .route('/', XAmzTargetAWSWAF20150824GetPermissionPolicyHandler)
  .route('/', XAmzTargetAWSWAF20150824GetRateBasedRuleHandler)
  .route('/', XAmzTargetAWSWAF20150824GetRateBasedRuleManagedKeysHandler)
  .route('/', XAmzTargetAWSWAF20150824GetRegexMatchSetHandler)
  .route('/', XAmzTargetAWSWAF20150824GetRegexPatternSetHandler)
  .route('/', XAmzTargetAWSWAF20150824GetRuleHandler)
  .route('/', XAmzTargetAWSWAF20150824GetRuleGroupHandler)
  .route('/', XAmzTargetAWSWAF20150824GetSampledRequestsHandler)
  .route('/', XAmzTargetAWSWAF20150824GetSizeConstraintSetHandler)
  .route('/', XAmzTargetAWSWAF20150824GetSqlInjectionMatchSetHandler)
  .route('/', XAmzTargetAWSWAF20150824GetWebACLHandler)
  .route('/', XAmzTargetAWSWAF20150824GetXssMatchSetHandler)
  .route('/', XAmzTargetAWSWAF20150824ListActivatedRulesInRuleGroupHandler)
  .route('/', XAmzTargetAWSWAF20150824ListByteMatchSetsHandler)
  .route('/', XAmzTargetAWSWAF20150824ListGeoMatchSetsHandler)
  .route('/', XAmzTargetAWSWAF20150824ListIPSetsHandler)
  .route('/', XAmzTargetAWSWAF20150824ListLoggingConfigurationsHandler)
  .route('/', XAmzTargetAWSWAF20150824ListRateBasedRulesHandler)
  .route('/', XAmzTargetAWSWAF20150824ListRegexMatchSetsHandler)
  .route('/', XAmzTargetAWSWAF20150824ListRegexPatternSetsHandler)
  .route('/', XAmzTargetAWSWAF20150824ListRuleGroupsHandler)
  .route('/', XAmzTargetAWSWAF20150824ListRulesHandler)
  .route('/', XAmzTargetAWSWAF20150824ListSizeConstraintSetsHandler)
  .route('/', XAmzTargetAWSWAF20150824ListSqlInjectionMatchSetsHandler)
  .route('/', XAmzTargetAWSWAF20150824ListSubscribedRuleGroupsHandler)
  .route('/', XAmzTargetAWSWAF20150824ListTagsForResourceHandler)
  .route('/', XAmzTargetAWSWAF20150824ListWebACLsHandler)
  .route('/', XAmzTargetAWSWAF20150824ListXssMatchSetsHandler)
  .route('/', XAmzTargetAWSWAF20150824PutLoggingConfigurationHandler)
  .route('/', XAmzTargetAWSWAF20150824PutPermissionPolicyHandler)
  .route('/', XAmzTargetAWSWAF20150824TagResourceHandler)
  .route('/', XAmzTargetAWSWAF20150824UntagResourceHandler)
  .route('/', XAmzTargetAWSWAF20150824UpdateByteMatchSetHandler)
  .route('/', XAmzTargetAWSWAF20150824UpdateGeoMatchSetHandler)
  .route('/', XAmzTargetAWSWAF20150824UpdateIPSetHandler)
  .route('/', XAmzTargetAWSWAF20150824UpdateRateBasedRuleHandler)
  .route('/', XAmzTargetAWSWAF20150824UpdateRegexMatchSetHandler)
  .route('/', XAmzTargetAWSWAF20150824UpdateRegexPatternSetHandler)
  .route('/', XAmzTargetAWSWAF20150824UpdateRuleHandler)
  .route('/', XAmzTargetAWSWAF20150824UpdateRuleGroupHandler)
  .route('/', XAmzTargetAWSWAF20150824UpdateSizeConstraintSetHandler)
  .route('/', XAmzTargetAWSWAF20150824UpdateSqlInjectionMatchSetHandler)
  .route('/', XAmzTargetAWSWAF20150824UpdateWebACLHandler)
  .route('/', XAmzTargetAWSWAF20150824UpdateXssMatchSetHandler)

export default app
