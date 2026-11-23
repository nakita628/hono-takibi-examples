import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwswaf20190729AssociateWebAclHandler,
  xAmzTargetAwswaf20190729CheckCapacityHandler,
  xAmzTargetAwswaf20190729CreateApiKeyHandler,
  xAmzTargetAwswaf20190729CreateIpSetHandler,
  xAmzTargetAwswaf20190729CreateRegexPatternSetHandler,
  xAmzTargetAwswaf20190729CreateRuleGroupHandler,
  xAmzTargetAwswaf20190729CreateWebAclHandler,
  xAmzTargetAwswaf20190729DeleteFirewallManagerRuleGroupsHandler,
  xAmzTargetAwswaf20190729DeleteIpSetHandler,
  xAmzTargetAwswaf20190729DeleteLoggingConfigurationHandler,
  xAmzTargetAwswaf20190729DeletePermissionPolicyHandler,
  xAmzTargetAwswaf20190729DeleteRegexPatternSetHandler,
  xAmzTargetAwswaf20190729DeleteRuleGroupHandler,
  xAmzTargetAwswaf20190729DeleteWebAclHandler,
  xAmzTargetAwswaf20190729DescribeManagedRuleGroupHandler,
  xAmzTargetAwswaf20190729DisassociateWebAclHandler,
  xAmzTargetAwswaf20190729GenerateMobileSdkReleaseUrlHandler,
  xAmzTargetAwswaf20190729GetDecryptedApiKeyHandler,
  xAmzTargetAwswaf20190729GetIpSetHandler,
  xAmzTargetAwswaf20190729GetLoggingConfigurationHandler,
  xAmzTargetAwswaf20190729GetManagedRuleSetHandler,
  xAmzTargetAwswaf20190729GetMobileSdkReleaseHandler,
  xAmzTargetAwswaf20190729GetPermissionPolicyHandler,
  xAmzTargetAwswaf20190729GetRateBasedStatementManagedKeysHandler,
  xAmzTargetAwswaf20190729GetRegexPatternSetHandler,
  xAmzTargetAwswaf20190729GetRuleGroupHandler,
  xAmzTargetAwswaf20190729GetSampledRequestsHandler,
  xAmzTargetAwswaf20190729GetWebAclForResourceHandler,
  xAmzTargetAwswaf20190729GetWebAclHandler,
  xAmzTargetAwswaf20190729ListApiKeysHandler,
  xAmzTargetAwswaf20190729ListAvailableManagedRuleGroupsHandler,
  xAmzTargetAwswaf20190729ListAvailableManagedRuleGroupVersionsHandler,
  xAmzTargetAwswaf20190729ListIpSetsHandler,
  xAmzTargetAwswaf20190729ListLoggingConfigurationsHandler,
  xAmzTargetAwswaf20190729ListManagedRuleSetsHandler,
  xAmzTargetAwswaf20190729ListMobileSdkReleasesHandler,
  xAmzTargetAwswaf20190729ListRegexPatternSetsHandler,
  xAmzTargetAwswaf20190729ListResourcesForWebAclHandler,
  xAmzTargetAwswaf20190729ListRuleGroupsHandler,
  xAmzTargetAwswaf20190729ListTagsForResourceHandler,
  xAmzTargetAwswaf20190729ListWebAcLsHandler,
  xAmzTargetAwswaf20190729PutLoggingConfigurationHandler,
  xAmzTargetAwswaf20190729PutManagedRuleSetVersionsHandler,
  xAmzTargetAwswaf20190729PutPermissionPolicyHandler,
  xAmzTargetAwswaf20190729TagResourceHandler,
  xAmzTargetAwswaf20190729UntagResourceHandler,
  xAmzTargetAwswaf20190729UpdateIpSetHandler,
  xAmzTargetAwswaf20190729UpdateManagedRuleSetVersionExpiryDateHandler,
  xAmzTargetAwswaf20190729UpdateRegexPatternSetHandler,
  xAmzTargetAwswaf20190729UpdateRuleGroupHandler,
  xAmzTargetAwswaf20190729UpdateWebAclHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwswaf20190729AssociateWebAclHandler)
  .route('/', xAmzTargetAwswaf20190729CheckCapacityHandler)
  .route('/', xAmzTargetAwswaf20190729CreateApiKeyHandler)
  .route('/', xAmzTargetAwswaf20190729CreateIpSetHandler)
  .route('/', xAmzTargetAwswaf20190729CreateRegexPatternSetHandler)
  .route('/', xAmzTargetAwswaf20190729CreateRuleGroupHandler)
  .route('/', xAmzTargetAwswaf20190729CreateWebAclHandler)
  .route('/', xAmzTargetAwswaf20190729DeleteFirewallManagerRuleGroupsHandler)
  .route('/', xAmzTargetAwswaf20190729DeleteIpSetHandler)
  .route('/', xAmzTargetAwswaf20190729DeleteLoggingConfigurationHandler)
  .route('/', xAmzTargetAwswaf20190729DeletePermissionPolicyHandler)
  .route('/', xAmzTargetAwswaf20190729DeleteRegexPatternSetHandler)
  .route('/', xAmzTargetAwswaf20190729DeleteRuleGroupHandler)
  .route('/', xAmzTargetAwswaf20190729DeleteWebAclHandler)
  .route('/', xAmzTargetAwswaf20190729DescribeManagedRuleGroupHandler)
  .route('/', xAmzTargetAwswaf20190729DisassociateWebAclHandler)
  .route('/', xAmzTargetAwswaf20190729GenerateMobileSdkReleaseUrlHandler)
  .route('/', xAmzTargetAwswaf20190729GetDecryptedApiKeyHandler)
  .route('/', xAmzTargetAwswaf20190729GetIpSetHandler)
  .route('/', xAmzTargetAwswaf20190729GetLoggingConfigurationHandler)
  .route('/', xAmzTargetAwswaf20190729GetManagedRuleSetHandler)
  .route('/', xAmzTargetAwswaf20190729GetMobileSdkReleaseHandler)
  .route('/', xAmzTargetAwswaf20190729GetPermissionPolicyHandler)
  .route('/', xAmzTargetAwswaf20190729GetRateBasedStatementManagedKeysHandler)
  .route('/', xAmzTargetAwswaf20190729GetRegexPatternSetHandler)
  .route('/', xAmzTargetAwswaf20190729GetRuleGroupHandler)
  .route('/', xAmzTargetAwswaf20190729GetSampledRequestsHandler)
  .route('/', xAmzTargetAwswaf20190729GetWebAclHandler)
  .route('/', xAmzTargetAwswaf20190729GetWebAclForResourceHandler)
  .route('/', xAmzTargetAwswaf20190729ListApiKeysHandler)
  .route('/', xAmzTargetAwswaf20190729ListAvailableManagedRuleGroupVersionsHandler)
  .route('/', xAmzTargetAwswaf20190729ListAvailableManagedRuleGroupsHandler)
  .route('/', xAmzTargetAwswaf20190729ListIpSetsHandler)
  .route('/', xAmzTargetAwswaf20190729ListLoggingConfigurationsHandler)
  .route('/', xAmzTargetAwswaf20190729ListManagedRuleSetsHandler)
  .route('/', xAmzTargetAwswaf20190729ListMobileSdkReleasesHandler)
  .route('/', xAmzTargetAwswaf20190729ListRegexPatternSetsHandler)
  .route('/', xAmzTargetAwswaf20190729ListResourcesForWebAclHandler)
  .route('/', xAmzTargetAwswaf20190729ListRuleGroupsHandler)
  .route('/', xAmzTargetAwswaf20190729ListTagsForResourceHandler)
  .route('/', xAmzTargetAwswaf20190729ListWebAcLsHandler)
  .route('/', xAmzTargetAwswaf20190729PutLoggingConfigurationHandler)
  .route('/', xAmzTargetAwswaf20190729PutManagedRuleSetVersionsHandler)
  .route('/', xAmzTargetAwswaf20190729PutPermissionPolicyHandler)
  .route('/', xAmzTargetAwswaf20190729TagResourceHandler)
  .route('/', xAmzTargetAwswaf20190729UntagResourceHandler)
  .route('/', xAmzTargetAwswaf20190729UpdateIpSetHandler)
  .route('/', xAmzTargetAwswaf20190729UpdateManagedRuleSetVersionExpiryDateHandler)
  .route('/', xAmzTargetAwswaf20190729UpdateRegexPatternSetHandler)
  .route('/', xAmzTargetAwswaf20190729UpdateRuleGroupHandler)
  .route('/', xAmzTargetAwswaf20190729UpdateWebAclHandler)

export default app
