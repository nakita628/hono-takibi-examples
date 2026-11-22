import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetRoute53ResolverAssociateFirewallRuleGroupHandler,
  XAmzTargetRoute53ResolverAssociateResolverEndpointIpAddressHandler,
  XAmzTargetRoute53ResolverAssociateResolverQueryLogConfigHandler,
  XAmzTargetRoute53ResolverAssociateResolverRuleHandler,
  XAmzTargetRoute53ResolverCreateFirewallDomainListHandler,
  XAmzTargetRoute53ResolverCreateFirewallRuleGroupHandler,
  XAmzTargetRoute53ResolverCreateFirewallRuleHandler,
  XAmzTargetRoute53ResolverCreateResolverEndpointHandler,
  XAmzTargetRoute53ResolverCreateResolverQueryLogConfigHandler,
  XAmzTargetRoute53ResolverCreateResolverRuleHandler,
  XAmzTargetRoute53ResolverDeleteFirewallDomainListHandler,
  XAmzTargetRoute53ResolverDeleteFirewallRuleGroupHandler,
  XAmzTargetRoute53ResolverDeleteFirewallRuleHandler,
  XAmzTargetRoute53ResolverDeleteResolverEndpointHandler,
  XAmzTargetRoute53ResolverDeleteResolverQueryLogConfigHandler,
  XAmzTargetRoute53ResolverDeleteResolverRuleHandler,
  XAmzTargetRoute53ResolverDisassociateFirewallRuleGroupHandler,
  XAmzTargetRoute53ResolverDisassociateResolverEndpointIpAddressHandler,
  XAmzTargetRoute53ResolverDisassociateResolverQueryLogConfigHandler,
  XAmzTargetRoute53ResolverDisassociateResolverRuleHandler,
  XAmzTargetRoute53ResolverGetFirewallConfigHandler,
  XAmzTargetRoute53ResolverGetFirewallDomainListHandler,
  XAmzTargetRoute53ResolverGetFirewallRuleGroupAssociationHandler,
  XAmzTargetRoute53ResolverGetFirewallRuleGroupHandler,
  XAmzTargetRoute53ResolverGetFirewallRuleGroupPolicyHandler,
  XAmzTargetRoute53ResolverGetResolverConfigHandler,
  XAmzTargetRoute53ResolverGetResolverDnssecConfigHandler,
  XAmzTargetRoute53ResolverGetResolverEndpointHandler,
  XAmzTargetRoute53ResolverGetResolverQueryLogConfigAssociationHandler,
  XAmzTargetRoute53ResolverGetResolverQueryLogConfigHandler,
  XAmzTargetRoute53ResolverGetResolverQueryLogConfigPolicyHandler,
  XAmzTargetRoute53ResolverGetResolverRuleAssociationHandler,
  XAmzTargetRoute53ResolverGetResolverRuleHandler,
  XAmzTargetRoute53ResolverGetResolverRulePolicyHandler,
  XAmzTargetRoute53ResolverImportFirewallDomainsHandler,
  XAmzTargetRoute53ResolverListFirewallConfigsHandler,
  XAmzTargetRoute53ResolverListFirewallDomainListsHandler,
  XAmzTargetRoute53ResolverListFirewallDomainsHandler,
  XAmzTargetRoute53ResolverListFirewallRuleGroupAssociationsHandler,
  XAmzTargetRoute53ResolverListFirewallRuleGroupsHandler,
  XAmzTargetRoute53ResolverListFirewallRulesHandler,
  XAmzTargetRoute53ResolverListResolverConfigsHandler,
  XAmzTargetRoute53ResolverListResolverDnssecConfigsHandler,
  XAmzTargetRoute53ResolverListResolverEndpointIpAddressesHandler,
  XAmzTargetRoute53ResolverListResolverEndpointsHandler,
  XAmzTargetRoute53ResolverListResolverQueryLogConfigAssociationsHandler,
  XAmzTargetRoute53ResolverListResolverQueryLogConfigsHandler,
  XAmzTargetRoute53ResolverListResolverRuleAssociationsHandler,
  XAmzTargetRoute53ResolverListResolverRulesHandler,
  XAmzTargetRoute53ResolverListTagsForResourceHandler,
  XAmzTargetRoute53ResolverPutFirewallRuleGroupPolicyHandler,
  XAmzTargetRoute53ResolverPutResolverQueryLogConfigPolicyHandler,
  XAmzTargetRoute53ResolverPutResolverRulePolicyHandler,
  XAmzTargetRoute53ResolverTagResourceHandler,
  XAmzTargetRoute53ResolverUntagResourceHandler,
  XAmzTargetRoute53ResolverUpdateFirewallConfigHandler,
  XAmzTargetRoute53ResolverUpdateFirewallDomainsHandler,
  XAmzTargetRoute53ResolverUpdateFirewallRuleGroupAssociationHandler,
  XAmzTargetRoute53ResolverUpdateFirewallRuleHandler,
  XAmzTargetRoute53ResolverUpdateResolverConfigHandler,
  XAmzTargetRoute53ResolverUpdateResolverDnssecConfigHandler,
  XAmzTargetRoute53ResolverUpdateResolverEndpointHandler,
  XAmzTargetRoute53ResolverUpdateResolverRuleHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetRoute53ResolverAssociateFirewallRuleGroupHandler)
  .route('/', XAmzTargetRoute53ResolverAssociateResolverEndpointIpAddressHandler)
  .route('/', XAmzTargetRoute53ResolverAssociateResolverQueryLogConfigHandler)
  .route('/', XAmzTargetRoute53ResolverAssociateResolverRuleHandler)
  .route('/', XAmzTargetRoute53ResolverCreateFirewallDomainListHandler)
  .route('/', XAmzTargetRoute53ResolverCreateFirewallRuleHandler)
  .route('/', XAmzTargetRoute53ResolverCreateFirewallRuleGroupHandler)
  .route('/', XAmzTargetRoute53ResolverCreateResolverEndpointHandler)
  .route('/', XAmzTargetRoute53ResolverCreateResolverQueryLogConfigHandler)
  .route('/', XAmzTargetRoute53ResolverCreateResolverRuleHandler)
  .route('/', XAmzTargetRoute53ResolverDeleteFirewallDomainListHandler)
  .route('/', XAmzTargetRoute53ResolverDeleteFirewallRuleHandler)
  .route('/', XAmzTargetRoute53ResolverDeleteFirewallRuleGroupHandler)
  .route('/', XAmzTargetRoute53ResolverDeleteResolverEndpointHandler)
  .route('/', XAmzTargetRoute53ResolverDeleteResolverQueryLogConfigHandler)
  .route('/', XAmzTargetRoute53ResolverDeleteResolverRuleHandler)
  .route('/', XAmzTargetRoute53ResolverDisassociateFirewallRuleGroupHandler)
  .route('/', XAmzTargetRoute53ResolverDisassociateResolverEndpointIpAddressHandler)
  .route('/', XAmzTargetRoute53ResolverDisassociateResolverQueryLogConfigHandler)
  .route('/', XAmzTargetRoute53ResolverDisassociateResolverRuleHandler)
  .route('/', XAmzTargetRoute53ResolverGetFirewallConfigHandler)
  .route('/', XAmzTargetRoute53ResolverGetFirewallDomainListHandler)
  .route('/', XAmzTargetRoute53ResolverGetFirewallRuleGroupHandler)
  .route('/', XAmzTargetRoute53ResolverGetFirewallRuleGroupAssociationHandler)
  .route('/', XAmzTargetRoute53ResolverGetFirewallRuleGroupPolicyHandler)
  .route('/', XAmzTargetRoute53ResolverGetResolverConfigHandler)
  .route('/', XAmzTargetRoute53ResolverGetResolverDnssecConfigHandler)
  .route('/', XAmzTargetRoute53ResolverGetResolverEndpointHandler)
  .route('/', XAmzTargetRoute53ResolverGetResolverQueryLogConfigHandler)
  .route('/', XAmzTargetRoute53ResolverGetResolverQueryLogConfigAssociationHandler)
  .route('/', XAmzTargetRoute53ResolverGetResolverQueryLogConfigPolicyHandler)
  .route('/', XAmzTargetRoute53ResolverGetResolverRuleHandler)
  .route('/', XAmzTargetRoute53ResolverGetResolverRuleAssociationHandler)
  .route('/', XAmzTargetRoute53ResolverGetResolverRulePolicyHandler)
  .route('/', XAmzTargetRoute53ResolverImportFirewallDomainsHandler)
  .route('/', XAmzTargetRoute53ResolverListFirewallConfigsHandler)
  .route('/', XAmzTargetRoute53ResolverListFirewallDomainListsHandler)
  .route('/', XAmzTargetRoute53ResolverListFirewallDomainsHandler)
  .route('/', XAmzTargetRoute53ResolverListFirewallRuleGroupAssociationsHandler)
  .route('/', XAmzTargetRoute53ResolverListFirewallRuleGroupsHandler)
  .route('/', XAmzTargetRoute53ResolverListFirewallRulesHandler)
  .route('/', XAmzTargetRoute53ResolverListResolverConfigsHandler)
  .route('/', XAmzTargetRoute53ResolverListResolverDnssecConfigsHandler)
  .route('/', XAmzTargetRoute53ResolverListResolverEndpointIpAddressesHandler)
  .route('/', XAmzTargetRoute53ResolverListResolverEndpointsHandler)
  .route('/', XAmzTargetRoute53ResolverListResolverQueryLogConfigAssociationsHandler)
  .route('/', XAmzTargetRoute53ResolverListResolverQueryLogConfigsHandler)
  .route('/', XAmzTargetRoute53ResolverListResolverRuleAssociationsHandler)
  .route('/', XAmzTargetRoute53ResolverListResolverRulesHandler)
  .route('/', XAmzTargetRoute53ResolverListTagsForResourceHandler)
  .route('/', XAmzTargetRoute53ResolverPutFirewallRuleGroupPolicyHandler)
  .route('/', XAmzTargetRoute53ResolverPutResolverQueryLogConfigPolicyHandler)
  .route('/', XAmzTargetRoute53ResolverPutResolverRulePolicyHandler)
  .route('/', XAmzTargetRoute53ResolverTagResourceHandler)
  .route('/', XAmzTargetRoute53ResolverUntagResourceHandler)
  .route('/', XAmzTargetRoute53ResolverUpdateFirewallConfigHandler)
  .route('/', XAmzTargetRoute53ResolverUpdateFirewallDomainsHandler)
  .route('/', XAmzTargetRoute53ResolverUpdateFirewallRuleHandler)
  .route('/', XAmzTargetRoute53ResolverUpdateFirewallRuleGroupAssociationHandler)
  .route('/', XAmzTargetRoute53ResolverUpdateResolverConfigHandler)
  .route('/', XAmzTargetRoute53ResolverUpdateResolverDnssecConfigHandler)
  .route('/', XAmzTargetRoute53ResolverUpdateResolverEndpointHandler)
  .route('/', XAmzTargetRoute53ResolverUpdateResolverRuleHandler)

export default app
