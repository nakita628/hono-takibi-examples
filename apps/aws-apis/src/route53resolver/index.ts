import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetRoute53ResolverAssociateFirewallRuleGroupHandler,
  xAmzTargetRoute53ResolverAssociateResolverEndpointIpAddressHandler,
  xAmzTargetRoute53ResolverAssociateResolverQueryLogConfigHandler,
  xAmzTargetRoute53ResolverAssociateResolverRuleHandler,
  xAmzTargetRoute53ResolverCreateFirewallDomainListHandler,
  xAmzTargetRoute53ResolverCreateFirewallRuleGroupHandler,
  xAmzTargetRoute53ResolverCreateFirewallRuleHandler,
  xAmzTargetRoute53ResolverCreateResolverEndpointHandler,
  xAmzTargetRoute53ResolverCreateResolverQueryLogConfigHandler,
  xAmzTargetRoute53ResolverCreateResolverRuleHandler,
  xAmzTargetRoute53ResolverDeleteFirewallDomainListHandler,
  xAmzTargetRoute53ResolverDeleteFirewallRuleGroupHandler,
  xAmzTargetRoute53ResolverDeleteFirewallRuleHandler,
  xAmzTargetRoute53ResolverDeleteResolverEndpointHandler,
  xAmzTargetRoute53ResolverDeleteResolverQueryLogConfigHandler,
  xAmzTargetRoute53ResolverDeleteResolverRuleHandler,
  xAmzTargetRoute53ResolverDisassociateFirewallRuleGroupHandler,
  xAmzTargetRoute53ResolverDisassociateResolverEndpointIpAddressHandler,
  xAmzTargetRoute53ResolverDisassociateResolverQueryLogConfigHandler,
  xAmzTargetRoute53ResolverDisassociateResolverRuleHandler,
  xAmzTargetRoute53ResolverGetFirewallConfigHandler,
  xAmzTargetRoute53ResolverGetFirewallDomainListHandler,
  xAmzTargetRoute53ResolverGetFirewallRuleGroupAssociationHandler,
  xAmzTargetRoute53ResolverGetFirewallRuleGroupHandler,
  xAmzTargetRoute53ResolverGetFirewallRuleGroupPolicyHandler,
  xAmzTargetRoute53ResolverGetResolverConfigHandler,
  xAmzTargetRoute53ResolverGetResolverDnssecConfigHandler,
  xAmzTargetRoute53ResolverGetResolverEndpointHandler,
  xAmzTargetRoute53ResolverGetResolverQueryLogConfigAssociationHandler,
  xAmzTargetRoute53ResolverGetResolverQueryLogConfigHandler,
  xAmzTargetRoute53ResolverGetResolverQueryLogConfigPolicyHandler,
  xAmzTargetRoute53ResolverGetResolverRuleAssociationHandler,
  xAmzTargetRoute53ResolverGetResolverRuleHandler,
  xAmzTargetRoute53ResolverGetResolverRulePolicyHandler,
  xAmzTargetRoute53ResolverImportFirewallDomainsHandler,
  xAmzTargetRoute53ResolverListFirewallConfigsHandler,
  xAmzTargetRoute53ResolverListFirewallDomainListsHandler,
  xAmzTargetRoute53ResolverListFirewallDomainsHandler,
  xAmzTargetRoute53ResolverListFirewallRuleGroupAssociationsHandler,
  xAmzTargetRoute53ResolverListFirewallRuleGroupsHandler,
  xAmzTargetRoute53ResolverListFirewallRulesHandler,
  xAmzTargetRoute53ResolverListResolverConfigsHandler,
  xAmzTargetRoute53ResolverListResolverDnssecConfigsHandler,
  xAmzTargetRoute53ResolverListResolverEndpointIpAddressesHandler,
  xAmzTargetRoute53ResolverListResolverEndpointsHandler,
  xAmzTargetRoute53ResolverListResolverQueryLogConfigAssociationsHandler,
  xAmzTargetRoute53ResolverListResolverQueryLogConfigsHandler,
  xAmzTargetRoute53ResolverListResolverRuleAssociationsHandler,
  xAmzTargetRoute53ResolverListResolverRulesHandler,
  xAmzTargetRoute53ResolverListTagsForResourceHandler,
  xAmzTargetRoute53ResolverPutFirewallRuleGroupPolicyHandler,
  xAmzTargetRoute53ResolverPutResolverQueryLogConfigPolicyHandler,
  xAmzTargetRoute53ResolverPutResolverRulePolicyHandler,
  xAmzTargetRoute53ResolverTagResourceHandler,
  xAmzTargetRoute53ResolverUntagResourceHandler,
  xAmzTargetRoute53ResolverUpdateFirewallConfigHandler,
  xAmzTargetRoute53ResolverUpdateFirewallDomainsHandler,
  xAmzTargetRoute53ResolverUpdateFirewallRuleGroupAssociationHandler,
  xAmzTargetRoute53ResolverUpdateFirewallRuleHandler,
  xAmzTargetRoute53ResolverUpdateResolverConfigHandler,
  xAmzTargetRoute53ResolverUpdateResolverDnssecConfigHandler,
  xAmzTargetRoute53ResolverUpdateResolverEndpointHandler,
  xAmzTargetRoute53ResolverUpdateResolverRuleHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetRoute53ResolverAssociateFirewallRuleGroupHandler)
  .route('/', xAmzTargetRoute53ResolverAssociateResolverEndpointIpAddressHandler)
  .route('/', xAmzTargetRoute53ResolverAssociateResolverQueryLogConfigHandler)
  .route('/', xAmzTargetRoute53ResolverAssociateResolverRuleHandler)
  .route('/', xAmzTargetRoute53ResolverCreateFirewallDomainListHandler)
  .route('/', xAmzTargetRoute53ResolverCreateFirewallRuleHandler)
  .route('/', xAmzTargetRoute53ResolverCreateFirewallRuleGroupHandler)
  .route('/', xAmzTargetRoute53ResolverCreateResolverEndpointHandler)
  .route('/', xAmzTargetRoute53ResolverCreateResolverQueryLogConfigHandler)
  .route('/', xAmzTargetRoute53ResolverCreateResolverRuleHandler)
  .route('/', xAmzTargetRoute53ResolverDeleteFirewallDomainListHandler)
  .route('/', xAmzTargetRoute53ResolverDeleteFirewallRuleHandler)
  .route('/', xAmzTargetRoute53ResolverDeleteFirewallRuleGroupHandler)
  .route('/', xAmzTargetRoute53ResolverDeleteResolverEndpointHandler)
  .route('/', xAmzTargetRoute53ResolverDeleteResolverQueryLogConfigHandler)
  .route('/', xAmzTargetRoute53ResolverDeleteResolverRuleHandler)
  .route('/', xAmzTargetRoute53ResolverDisassociateFirewallRuleGroupHandler)
  .route('/', xAmzTargetRoute53ResolverDisassociateResolverEndpointIpAddressHandler)
  .route('/', xAmzTargetRoute53ResolverDisassociateResolverQueryLogConfigHandler)
  .route('/', xAmzTargetRoute53ResolverDisassociateResolverRuleHandler)
  .route('/', xAmzTargetRoute53ResolverGetFirewallConfigHandler)
  .route('/', xAmzTargetRoute53ResolverGetFirewallDomainListHandler)
  .route('/', xAmzTargetRoute53ResolverGetFirewallRuleGroupHandler)
  .route('/', xAmzTargetRoute53ResolverGetFirewallRuleGroupAssociationHandler)
  .route('/', xAmzTargetRoute53ResolverGetFirewallRuleGroupPolicyHandler)
  .route('/', xAmzTargetRoute53ResolverGetResolverConfigHandler)
  .route('/', xAmzTargetRoute53ResolverGetResolverDnssecConfigHandler)
  .route('/', xAmzTargetRoute53ResolverGetResolverEndpointHandler)
  .route('/', xAmzTargetRoute53ResolverGetResolverQueryLogConfigHandler)
  .route('/', xAmzTargetRoute53ResolverGetResolverQueryLogConfigAssociationHandler)
  .route('/', xAmzTargetRoute53ResolverGetResolverQueryLogConfigPolicyHandler)
  .route('/', xAmzTargetRoute53ResolverGetResolverRuleHandler)
  .route('/', xAmzTargetRoute53ResolverGetResolverRuleAssociationHandler)
  .route('/', xAmzTargetRoute53ResolverGetResolverRulePolicyHandler)
  .route('/', xAmzTargetRoute53ResolverImportFirewallDomainsHandler)
  .route('/', xAmzTargetRoute53ResolverListFirewallConfigsHandler)
  .route('/', xAmzTargetRoute53ResolverListFirewallDomainListsHandler)
  .route('/', xAmzTargetRoute53ResolverListFirewallDomainsHandler)
  .route('/', xAmzTargetRoute53ResolverListFirewallRuleGroupAssociationsHandler)
  .route('/', xAmzTargetRoute53ResolverListFirewallRuleGroupsHandler)
  .route('/', xAmzTargetRoute53ResolverListFirewallRulesHandler)
  .route('/', xAmzTargetRoute53ResolverListResolverConfigsHandler)
  .route('/', xAmzTargetRoute53ResolverListResolverDnssecConfigsHandler)
  .route('/', xAmzTargetRoute53ResolverListResolverEndpointIpAddressesHandler)
  .route('/', xAmzTargetRoute53ResolverListResolverEndpointsHandler)
  .route('/', xAmzTargetRoute53ResolverListResolverQueryLogConfigAssociationsHandler)
  .route('/', xAmzTargetRoute53ResolverListResolverQueryLogConfigsHandler)
  .route('/', xAmzTargetRoute53ResolverListResolverRuleAssociationsHandler)
  .route('/', xAmzTargetRoute53ResolverListResolverRulesHandler)
  .route('/', xAmzTargetRoute53ResolverListTagsForResourceHandler)
  .route('/', xAmzTargetRoute53ResolverPutFirewallRuleGroupPolicyHandler)
  .route('/', xAmzTargetRoute53ResolverPutResolverQueryLogConfigPolicyHandler)
  .route('/', xAmzTargetRoute53ResolverPutResolverRulePolicyHandler)
  .route('/', xAmzTargetRoute53ResolverTagResourceHandler)
  .route('/', xAmzTargetRoute53ResolverUntagResourceHandler)
  .route('/', xAmzTargetRoute53ResolverUpdateFirewallConfigHandler)
  .route('/', xAmzTargetRoute53ResolverUpdateFirewallDomainsHandler)
  .route('/', xAmzTargetRoute53ResolverUpdateFirewallRuleHandler)
  .route('/', xAmzTargetRoute53ResolverUpdateFirewallRuleGroupAssociationHandler)
  .route('/', xAmzTargetRoute53ResolverUpdateResolverConfigHandler)
  .route('/', xAmzTargetRoute53ResolverUpdateResolverDnssecConfigHandler)
  .route('/', xAmzTargetRoute53ResolverUpdateResolverEndpointHandler)
  .route('/', xAmzTargetRoute53ResolverUpdateResolverRuleHandler)

export default app
