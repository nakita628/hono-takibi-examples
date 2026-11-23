import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetNetworkFirewall20201112AssociateFirewallPolicyHandler,
  xAmzTargetNetworkFirewall20201112AssociateSubnetsHandler,
  xAmzTargetNetworkFirewall20201112CreateFirewallHandler,
  xAmzTargetNetworkFirewall20201112CreateFirewallPolicyHandler,
  xAmzTargetNetworkFirewall20201112CreateRuleGroupHandler,
  xAmzTargetNetworkFirewall20201112CreateTlsInspectionConfigurationHandler,
  xAmzTargetNetworkFirewall20201112DeleteFirewallHandler,
  xAmzTargetNetworkFirewall20201112DeleteFirewallPolicyHandler,
  xAmzTargetNetworkFirewall20201112DeleteResourcePolicyHandler,
  xAmzTargetNetworkFirewall20201112DeleteRuleGroupHandler,
  xAmzTargetNetworkFirewall20201112DeleteTlsInspectionConfigurationHandler,
  xAmzTargetNetworkFirewall20201112DescribeFirewallHandler,
  xAmzTargetNetworkFirewall20201112DescribeFirewallPolicyHandler,
  xAmzTargetNetworkFirewall20201112DescribeLoggingConfigurationHandler,
  xAmzTargetNetworkFirewall20201112DescribeResourcePolicyHandler,
  xAmzTargetNetworkFirewall20201112DescribeRuleGroupHandler,
  xAmzTargetNetworkFirewall20201112DescribeRuleGroupMetadataHandler,
  xAmzTargetNetworkFirewall20201112DescribeTlsInspectionConfigurationHandler,
  xAmzTargetNetworkFirewall20201112DisassociateSubnetsHandler,
  xAmzTargetNetworkFirewall20201112ListFirewallPoliciesHandler,
  xAmzTargetNetworkFirewall20201112ListFirewallsHandler,
  xAmzTargetNetworkFirewall20201112ListRuleGroupsHandler,
  xAmzTargetNetworkFirewall20201112ListTagsForResourceHandler,
  xAmzTargetNetworkFirewall20201112ListTlsInspectionConfigurationsHandler,
  xAmzTargetNetworkFirewall20201112PutResourcePolicyHandler,
  xAmzTargetNetworkFirewall20201112TagResourceHandler,
  xAmzTargetNetworkFirewall20201112UntagResourceHandler,
  xAmzTargetNetworkFirewall20201112UpdateFirewallDeleteProtectionHandler,
  xAmzTargetNetworkFirewall20201112UpdateFirewallDescriptionHandler,
  xAmzTargetNetworkFirewall20201112UpdateFirewallEncryptionConfigurationHandler,
  xAmzTargetNetworkFirewall20201112UpdateFirewallPolicyChangeProtectionHandler,
  xAmzTargetNetworkFirewall20201112UpdateFirewallPolicyHandler,
  xAmzTargetNetworkFirewall20201112UpdateLoggingConfigurationHandler,
  xAmzTargetNetworkFirewall20201112UpdateRuleGroupHandler,
  xAmzTargetNetworkFirewall20201112UpdateSubnetChangeProtectionHandler,
  xAmzTargetNetworkFirewall20201112UpdateTlsInspectionConfigurationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetNetworkFirewall20201112AssociateFirewallPolicyHandler)
  .route('/', xAmzTargetNetworkFirewall20201112AssociateSubnetsHandler)
  .route('/', xAmzTargetNetworkFirewall20201112CreateFirewallHandler)
  .route('/', xAmzTargetNetworkFirewall20201112CreateFirewallPolicyHandler)
  .route('/', xAmzTargetNetworkFirewall20201112CreateRuleGroupHandler)
  .route('/', xAmzTargetNetworkFirewall20201112CreateTlsInspectionConfigurationHandler)
  .route('/', xAmzTargetNetworkFirewall20201112DeleteFirewallHandler)
  .route('/', xAmzTargetNetworkFirewall20201112DeleteFirewallPolicyHandler)
  .route('/', xAmzTargetNetworkFirewall20201112DeleteResourcePolicyHandler)
  .route('/', xAmzTargetNetworkFirewall20201112DeleteRuleGroupHandler)
  .route('/', xAmzTargetNetworkFirewall20201112DeleteTlsInspectionConfigurationHandler)
  .route('/', xAmzTargetNetworkFirewall20201112DescribeFirewallHandler)
  .route('/', xAmzTargetNetworkFirewall20201112DescribeFirewallPolicyHandler)
  .route('/', xAmzTargetNetworkFirewall20201112DescribeLoggingConfigurationHandler)
  .route('/', xAmzTargetNetworkFirewall20201112DescribeResourcePolicyHandler)
  .route('/', xAmzTargetNetworkFirewall20201112DescribeRuleGroupHandler)
  .route('/', xAmzTargetNetworkFirewall20201112DescribeRuleGroupMetadataHandler)
  .route('/', xAmzTargetNetworkFirewall20201112DescribeTlsInspectionConfigurationHandler)
  .route('/', xAmzTargetNetworkFirewall20201112DisassociateSubnetsHandler)
  .route('/', xAmzTargetNetworkFirewall20201112ListFirewallPoliciesHandler)
  .route('/', xAmzTargetNetworkFirewall20201112ListFirewallsHandler)
  .route('/', xAmzTargetNetworkFirewall20201112ListRuleGroupsHandler)
  .route('/', xAmzTargetNetworkFirewall20201112ListTlsInspectionConfigurationsHandler)
  .route('/', xAmzTargetNetworkFirewall20201112ListTagsForResourceHandler)
  .route('/', xAmzTargetNetworkFirewall20201112PutResourcePolicyHandler)
  .route('/', xAmzTargetNetworkFirewall20201112TagResourceHandler)
  .route('/', xAmzTargetNetworkFirewall20201112UntagResourceHandler)
  .route('/', xAmzTargetNetworkFirewall20201112UpdateFirewallDeleteProtectionHandler)
  .route('/', xAmzTargetNetworkFirewall20201112UpdateFirewallDescriptionHandler)
  .route('/', xAmzTargetNetworkFirewall20201112UpdateFirewallEncryptionConfigurationHandler)
  .route('/', xAmzTargetNetworkFirewall20201112UpdateFirewallPolicyHandler)
  .route('/', xAmzTargetNetworkFirewall20201112UpdateFirewallPolicyChangeProtectionHandler)
  .route('/', xAmzTargetNetworkFirewall20201112UpdateLoggingConfigurationHandler)
  .route('/', xAmzTargetNetworkFirewall20201112UpdateRuleGroupHandler)
  .route('/', xAmzTargetNetworkFirewall20201112UpdateSubnetChangeProtectionHandler)
  .route('/', xAmzTargetNetworkFirewall20201112UpdateTlsInspectionConfigurationHandler)

export default app
