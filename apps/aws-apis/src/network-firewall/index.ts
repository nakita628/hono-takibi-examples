import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetNetworkFirewall20201112AssociateFirewallPolicyHandler,
  XAmzTargetNetworkFirewall20201112AssociateSubnetsHandler,
  XAmzTargetNetworkFirewall20201112CreateFirewallHandler,
  XAmzTargetNetworkFirewall20201112CreateFirewallPolicyHandler,
  XAmzTargetNetworkFirewall20201112CreateRuleGroupHandler,
  XAmzTargetNetworkFirewall20201112CreateTLSInspectionConfigurationHandler,
  XAmzTargetNetworkFirewall20201112DeleteFirewallHandler,
  XAmzTargetNetworkFirewall20201112DeleteFirewallPolicyHandler,
  XAmzTargetNetworkFirewall20201112DeleteResourcePolicyHandler,
  XAmzTargetNetworkFirewall20201112DeleteRuleGroupHandler,
  XAmzTargetNetworkFirewall20201112DeleteTLSInspectionConfigurationHandler,
  XAmzTargetNetworkFirewall20201112DescribeFirewallHandler,
  XAmzTargetNetworkFirewall20201112DescribeFirewallPolicyHandler,
  XAmzTargetNetworkFirewall20201112DescribeLoggingConfigurationHandler,
  XAmzTargetNetworkFirewall20201112DescribeResourcePolicyHandler,
  XAmzTargetNetworkFirewall20201112DescribeRuleGroupHandler,
  XAmzTargetNetworkFirewall20201112DescribeRuleGroupMetadataHandler,
  XAmzTargetNetworkFirewall20201112DescribeTLSInspectionConfigurationHandler,
  XAmzTargetNetworkFirewall20201112DisassociateSubnetsHandler,
  XAmzTargetNetworkFirewall20201112ListFirewallPoliciesHandler,
  XAmzTargetNetworkFirewall20201112ListFirewallsHandler,
  XAmzTargetNetworkFirewall20201112ListRuleGroupsHandler,
  XAmzTargetNetworkFirewall20201112ListTagsForResourceHandler,
  XAmzTargetNetworkFirewall20201112ListTLSInspectionConfigurationsHandler,
  XAmzTargetNetworkFirewall20201112PutResourcePolicyHandler,
  XAmzTargetNetworkFirewall20201112TagResourceHandler,
  XAmzTargetNetworkFirewall20201112UntagResourceHandler,
  XAmzTargetNetworkFirewall20201112UpdateFirewallDeleteProtectionHandler,
  XAmzTargetNetworkFirewall20201112UpdateFirewallDescriptionHandler,
  XAmzTargetNetworkFirewall20201112UpdateFirewallEncryptionConfigurationHandler,
  XAmzTargetNetworkFirewall20201112UpdateFirewallPolicyChangeProtectionHandler,
  XAmzTargetNetworkFirewall20201112UpdateFirewallPolicyHandler,
  XAmzTargetNetworkFirewall20201112UpdateLoggingConfigurationHandler,
  XAmzTargetNetworkFirewall20201112UpdateRuleGroupHandler,
  XAmzTargetNetworkFirewall20201112UpdateSubnetChangeProtectionHandler,
  XAmzTargetNetworkFirewall20201112UpdateTLSInspectionConfigurationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetNetworkFirewall20201112AssociateFirewallPolicyHandler)
  .route('/', XAmzTargetNetworkFirewall20201112AssociateSubnetsHandler)
  .route('/', XAmzTargetNetworkFirewall20201112CreateFirewallHandler)
  .route('/', XAmzTargetNetworkFirewall20201112CreateFirewallPolicyHandler)
  .route('/', XAmzTargetNetworkFirewall20201112CreateRuleGroupHandler)
  .route('/', XAmzTargetNetworkFirewall20201112CreateTLSInspectionConfigurationHandler)
  .route('/', XAmzTargetNetworkFirewall20201112DeleteFirewallHandler)
  .route('/', XAmzTargetNetworkFirewall20201112DeleteFirewallPolicyHandler)
  .route('/', XAmzTargetNetworkFirewall20201112DeleteResourcePolicyHandler)
  .route('/', XAmzTargetNetworkFirewall20201112DeleteRuleGroupHandler)
  .route('/', XAmzTargetNetworkFirewall20201112DeleteTLSInspectionConfigurationHandler)
  .route('/', XAmzTargetNetworkFirewall20201112DescribeFirewallHandler)
  .route('/', XAmzTargetNetworkFirewall20201112DescribeFirewallPolicyHandler)
  .route('/', XAmzTargetNetworkFirewall20201112DescribeLoggingConfigurationHandler)
  .route('/', XAmzTargetNetworkFirewall20201112DescribeResourcePolicyHandler)
  .route('/', XAmzTargetNetworkFirewall20201112DescribeRuleGroupHandler)
  .route('/', XAmzTargetNetworkFirewall20201112DescribeRuleGroupMetadataHandler)
  .route('/', XAmzTargetNetworkFirewall20201112DescribeTLSInspectionConfigurationHandler)
  .route('/', XAmzTargetNetworkFirewall20201112DisassociateSubnetsHandler)
  .route('/', XAmzTargetNetworkFirewall20201112ListFirewallPoliciesHandler)
  .route('/', XAmzTargetNetworkFirewall20201112ListFirewallsHandler)
  .route('/', XAmzTargetNetworkFirewall20201112ListRuleGroupsHandler)
  .route('/', XAmzTargetNetworkFirewall20201112ListTLSInspectionConfigurationsHandler)
  .route('/', XAmzTargetNetworkFirewall20201112ListTagsForResourceHandler)
  .route('/', XAmzTargetNetworkFirewall20201112PutResourcePolicyHandler)
  .route('/', XAmzTargetNetworkFirewall20201112TagResourceHandler)
  .route('/', XAmzTargetNetworkFirewall20201112UntagResourceHandler)
  .route('/', XAmzTargetNetworkFirewall20201112UpdateFirewallDeleteProtectionHandler)
  .route('/', XAmzTargetNetworkFirewall20201112UpdateFirewallDescriptionHandler)
  .route('/', XAmzTargetNetworkFirewall20201112UpdateFirewallEncryptionConfigurationHandler)
  .route('/', XAmzTargetNetworkFirewall20201112UpdateFirewallPolicyHandler)
  .route('/', XAmzTargetNetworkFirewall20201112UpdateFirewallPolicyChangeProtectionHandler)
  .route('/', XAmzTargetNetworkFirewall20201112UpdateLoggingConfigurationHandler)
  .route('/', XAmzTargetNetworkFirewall20201112UpdateRuleGroupHandler)
  .route('/', XAmzTargetNetworkFirewall20201112UpdateSubnetChangeProtectionHandler)
  .route('/', XAmzTargetNetworkFirewall20201112UpdateTLSInspectionConfigurationHandler)

export default app
