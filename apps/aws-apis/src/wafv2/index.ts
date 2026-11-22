import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSWAF20190729AssociateWebACLHandler,
  XAmzTargetAWSWAF20190729CheckCapacityHandler,
  XAmzTargetAWSWAF20190729CreateAPIKeyHandler,
  XAmzTargetAWSWAF20190729CreateIPSetHandler,
  XAmzTargetAWSWAF20190729CreateRegexPatternSetHandler,
  XAmzTargetAWSWAF20190729CreateRuleGroupHandler,
  XAmzTargetAWSWAF20190729CreateWebACLHandler,
  XAmzTargetAWSWAF20190729DeleteFirewallManagerRuleGroupsHandler,
  XAmzTargetAWSWAF20190729DeleteIPSetHandler,
  XAmzTargetAWSWAF20190729DeleteLoggingConfigurationHandler,
  XAmzTargetAWSWAF20190729DeletePermissionPolicyHandler,
  XAmzTargetAWSWAF20190729DeleteRegexPatternSetHandler,
  XAmzTargetAWSWAF20190729DeleteRuleGroupHandler,
  XAmzTargetAWSWAF20190729DeleteWebACLHandler,
  XAmzTargetAWSWAF20190729DescribeManagedRuleGroupHandler,
  XAmzTargetAWSWAF20190729DisassociateWebACLHandler,
  XAmzTargetAWSWAF20190729GenerateMobileSdkReleaseUrlHandler,
  XAmzTargetAWSWAF20190729GetDecryptedAPIKeyHandler,
  XAmzTargetAWSWAF20190729GetIPSetHandler,
  XAmzTargetAWSWAF20190729GetLoggingConfigurationHandler,
  XAmzTargetAWSWAF20190729GetManagedRuleSetHandler,
  XAmzTargetAWSWAF20190729GetMobileSdkReleaseHandler,
  XAmzTargetAWSWAF20190729GetPermissionPolicyHandler,
  XAmzTargetAWSWAF20190729GetRateBasedStatementManagedKeysHandler,
  XAmzTargetAWSWAF20190729GetRegexPatternSetHandler,
  XAmzTargetAWSWAF20190729GetRuleGroupHandler,
  XAmzTargetAWSWAF20190729GetSampledRequestsHandler,
  XAmzTargetAWSWAF20190729GetWebACLForResourceHandler,
  XAmzTargetAWSWAF20190729GetWebACLHandler,
  XAmzTargetAWSWAF20190729ListAPIKeysHandler,
  XAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupsHandler,
  XAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupVersionsHandler,
  XAmzTargetAWSWAF20190729ListIPSetsHandler,
  XAmzTargetAWSWAF20190729ListLoggingConfigurationsHandler,
  XAmzTargetAWSWAF20190729ListManagedRuleSetsHandler,
  XAmzTargetAWSWAF20190729ListMobileSdkReleasesHandler,
  XAmzTargetAWSWAF20190729ListRegexPatternSetsHandler,
  XAmzTargetAWSWAF20190729ListResourcesForWebACLHandler,
  XAmzTargetAWSWAF20190729ListRuleGroupsHandler,
  XAmzTargetAWSWAF20190729ListTagsForResourceHandler,
  XAmzTargetAWSWAF20190729ListWebACLsHandler,
  XAmzTargetAWSWAF20190729PutLoggingConfigurationHandler,
  XAmzTargetAWSWAF20190729PutManagedRuleSetVersionsHandler,
  XAmzTargetAWSWAF20190729PutPermissionPolicyHandler,
  XAmzTargetAWSWAF20190729TagResourceHandler,
  XAmzTargetAWSWAF20190729UntagResourceHandler,
  XAmzTargetAWSWAF20190729UpdateIPSetHandler,
  XAmzTargetAWSWAF20190729UpdateManagedRuleSetVersionExpiryDateHandler,
  XAmzTargetAWSWAF20190729UpdateRegexPatternSetHandler,
  XAmzTargetAWSWAF20190729UpdateRuleGroupHandler,
  XAmzTargetAWSWAF20190729UpdateWebACLHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSWAF20190729AssociateWebACLHandler)
  .route('/', XAmzTargetAWSWAF20190729CheckCapacityHandler)
  .route('/', XAmzTargetAWSWAF20190729CreateAPIKeyHandler)
  .route('/', XAmzTargetAWSWAF20190729CreateIPSetHandler)
  .route('/', XAmzTargetAWSWAF20190729CreateRegexPatternSetHandler)
  .route('/', XAmzTargetAWSWAF20190729CreateRuleGroupHandler)
  .route('/', XAmzTargetAWSWAF20190729CreateWebACLHandler)
  .route('/', XAmzTargetAWSWAF20190729DeleteFirewallManagerRuleGroupsHandler)
  .route('/', XAmzTargetAWSWAF20190729DeleteIPSetHandler)
  .route('/', XAmzTargetAWSWAF20190729DeleteLoggingConfigurationHandler)
  .route('/', XAmzTargetAWSWAF20190729DeletePermissionPolicyHandler)
  .route('/', XAmzTargetAWSWAF20190729DeleteRegexPatternSetHandler)
  .route('/', XAmzTargetAWSWAF20190729DeleteRuleGroupHandler)
  .route('/', XAmzTargetAWSWAF20190729DeleteWebACLHandler)
  .route('/', XAmzTargetAWSWAF20190729DescribeManagedRuleGroupHandler)
  .route('/', XAmzTargetAWSWAF20190729DisassociateWebACLHandler)
  .route('/', XAmzTargetAWSWAF20190729GenerateMobileSdkReleaseUrlHandler)
  .route('/', XAmzTargetAWSWAF20190729GetDecryptedAPIKeyHandler)
  .route('/', XAmzTargetAWSWAF20190729GetIPSetHandler)
  .route('/', XAmzTargetAWSWAF20190729GetLoggingConfigurationHandler)
  .route('/', XAmzTargetAWSWAF20190729GetManagedRuleSetHandler)
  .route('/', XAmzTargetAWSWAF20190729GetMobileSdkReleaseHandler)
  .route('/', XAmzTargetAWSWAF20190729GetPermissionPolicyHandler)
  .route('/', XAmzTargetAWSWAF20190729GetRateBasedStatementManagedKeysHandler)
  .route('/', XAmzTargetAWSWAF20190729GetRegexPatternSetHandler)
  .route('/', XAmzTargetAWSWAF20190729GetRuleGroupHandler)
  .route('/', XAmzTargetAWSWAF20190729GetSampledRequestsHandler)
  .route('/', XAmzTargetAWSWAF20190729GetWebACLHandler)
  .route('/', XAmzTargetAWSWAF20190729GetWebACLForResourceHandler)
  .route('/', XAmzTargetAWSWAF20190729ListAPIKeysHandler)
  .route('/', XAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupVersionsHandler)
  .route('/', XAmzTargetAWSWAF20190729ListAvailableManagedRuleGroupsHandler)
  .route('/', XAmzTargetAWSWAF20190729ListIPSetsHandler)
  .route('/', XAmzTargetAWSWAF20190729ListLoggingConfigurationsHandler)
  .route('/', XAmzTargetAWSWAF20190729ListManagedRuleSetsHandler)
  .route('/', XAmzTargetAWSWAF20190729ListMobileSdkReleasesHandler)
  .route('/', XAmzTargetAWSWAF20190729ListRegexPatternSetsHandler)
  .route('/', XAmzTargetAWSWAF20190729ListResourcesForWebACLHandler)
  .route('/', XAmzTargetAWSWAF20190729ListRuleGroupsHandler)
  .route('/', XAmzTargetAWSWAF20190729ListTagsForResourceHandler)
  .route('/', XAmzTargetAWSWAF20190729ListWebACLsHandler)
  .route('/', XAmzTargetAWSWAF20190729PutLoggingConfigurationHandler)
  .route('/', XAmzTargetAWSWAF20190729PutManagedRuleSetVersionsHandler)
  .route('/', XAmzTargetAWSWAF20190729PutPermissionPolicyHandler)
  .route('/', XAmzTargetAWSWAF20190729TagResourceHandler)
  .route('/', XAmzTargetAWSWAF20190729UntagResourceHandler)
  .route('/', XAmzTargetAWSWAF20190729UpdateIPSetHandler)
  .route('/', XAmzTargetAWSWAF20190729UpdateManagedRuleSetVersionExpiryDateHandler)
  .route('/', XAmzTargetAWSWAF20190729UpdateRegexPatternSetHandler)
  .route('/', XAmzTargetAWSWAF20190729UpdateRuleGroupHandler)
  .route('/', XAmzTargetAWSWAF20190729UpdateWebACLHandler)

export default app
