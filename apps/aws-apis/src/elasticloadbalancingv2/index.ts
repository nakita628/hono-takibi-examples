import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAddListenerCertificatesRoute,
  getActionAddTagsRoute,
  getActionCreateListenerRoute,
  getActionCreateLoadBalancerRoute,
  getActionCreateRuleRoute,
  getActionCreateTargetGroupRoute,
  getActionDeleteListenerRoute,
  getActionDeleteLoadBalancerRoute,
  getActionDeleteRuleRoute,
  getActionDeleteTargetGroupRoute,
  getActionDeregisterTargetsRoute,
  getActionDescribeAccountLimitsRoute,
  getActionDescribeListenerCertificatesRoute,
  getActionDescribeListenersRoute,
  getActionDescribeLoadBalancerAttributesRoute,
  getActionDescribeLoadBalancersRoute,
  getActionDescribeRulesRoute,
  getActionDescribeSSLPoliciesRoute,
  getActionDescribeTagsRoute,
  getActionDescribeTargetGroupAttributesRoute,
  getActionDescribeTargetGroupsRoute,
  getActionDescribeTargetHealthRoute,
  getActionModifyListenerRoute,
  getActionModifyLoadBalancerAttributesRoute,
  getActionModifyRuleRoute,
  getActionModifyTargetGroupAttributesRoute,
  getActionModifyTargetGroupRoute,
  getActionRegisterTargetsRoute,
  getActionRemoveListenerCertificatesRoute,
  getActionRemoveTagsRoute,
  getActionSetIpAddressTypeRoute,
  getActionSetRulePrioritiesRoute,
  getActionSetSecurityGroupsRoute,
  getActionSetSubnetsRoute,
  postActionAddListenerCertificatesRoute,
  postActionAddTagsRoute,
  postActionCreateListenerRoute,
  postActionCreateLoadBalancerRoute,
  postActionCreateRuleRoute,
  postActionCreateTargetGroupRoute,
  postActionDeleteListenerRoute,
  postActionDeleteLoadBalancerRoute,
  postActionDeleteRuleRoute,
  postActionDeleteTargetGroupRoute,
  postActionDeregisterTargetsRoute,
  postActionDescribeAccountLimitsRoute,
  postActionDescribeListenerCertificatesRoute,
  postActionDescribeListenersRoute,
  postActionDescribeLoadBalancerAttributesRoute,
  postActionDescribeLoadBalancersRoute,
  postActionDescribeRulesRoute,
  postActionDescribeSSLPoliciesRoute,
  postActionDescribeTagsRoute,
  postActionDescribeTargetGroupAttributesRoute,
  postActionDescribeTargetGroupsRoute,
  postActionDescribeTargetHealthRoute,
  postActionModifyListenerRoute,
  postActionModifyLoadBalancerAttributesRoute,
  postActionModifyRuleRoute,
  postActionModifyTargetGroupAttributesRoute,
  postActionModifyTargetGroupRoute,
  postActionRegisterTargetsRoute,
  postActionRemoveListenerCertificatesRoute,
  postActionRemoveTagsRoute,
  postActionSetIpAddressTypeRoute,
  postActionSetRulePrioritiesRoute,
  postActionSetSecurityGroupsRoute,
  postActionSetSubnetsRoute,
} from './routes'
import {
  getActionAddListenerCertificatesRouteHandler,
  getActionAddTagsRouteHandler,
  getActionCreateListenerRouteHandler,
  getActionCreateLoadBalancerRouteHandler,
  getActionCreateRuleRouteHandler,
  getActionCreateTargetGroupRouteHandler,
  getActionDeleteListenerRouteHandler,
  getActionDeleteLoadBalancerRouteHandler,
  getActionDeleteRuleRouteHandler,
  getActionDeleteTargetGroupRouteHandler,
  getActionDeregisterTargetsRouteHandler,
  getActionDescribeAccountLimitsRouteHandler,
  getActionDescribeListenerCertificatesRouteHandler,
  getActionDescribeListenersRouteHandler,
  getActionDescribeLoadBalancerAttributesRouteHandler,
  getActionDescribeLoadBalancersRouteHandler,
  getActionDescribeRulesRouteHandler,
  getActionDescribeSSLPoliciesRouteHandler,
  getActionDescribeTagsRouteHandler,
  getActionDescribeTargetGroupAttributesRouteHandler,
  getActionDescribeTargetGroupsRouteHandler,
  getActionDescribeTargetHealthRouteHandler,
  getActionModifyListenerRouteHandler,
  getActionModifyLoadBalancerAttributesRouteHandler,
  getActionModifyRuleRouteHandler,
  getActionModifyTargetGroupAttributesRouteHandler,
  getActionModifyTargetGroupRouteHandler,
  getActionRegisterTargetsRouteHandler,
  getActionRemoveListenerCertificatesRouteHandler,
  getActionRemoveTagsRouteHandler,
  getActionSetIpAddressTypeRouteHandler,
  getActionSetRulePrioritiesRouteHandler,
  getActionSetSecurityGroupsRouteHandler,
  getActionSetSubnetsRouteHandler,
  postActionAddListenerCertificatesRouteHandler,
  postActionAddTagsRouteHandler,
  postActionCreateListenerRouteHandler,
  postActionCreateLoadBalancerRouteHandler,
  postActionCreateRuleRouteHandler,
  postActionCreateTargetGroupRouteHandler,
  postActionDeleteListenerRouteHandler,
  postActionDeleteLoadBalancerRouteHandler,
  postActionDeleteRuleRouteHandler,
  postActionDeleteTargetGroupRouteHandler,
  postActionDeregisterTargetsRouteHandler,
  postActionDescribeAccountLimitsRouteHandler,
  postActionDescribeListenerCertificatesRouteHandler,
  postActionDescribeListenersRouteHandler,
  postActionDescribeLoadBalancerAttributesRouteHandler,
  postActionDescribeLoadBalancersRouteHandler,
  postActionDescribeRulesRouteHandler,
  postActionDescribeSSLPoliciesRouteHandler,
  postActionDescribeTagsRouteHandler,
  postActionDescribeTargetGroupAttributesRouteHandler,
  postActionDescribeTargetGroupsRouteHandler,
  postActionDescribeTargetHealthRouteHandler,
  postActionModifyListenerRouteHandler,
  postActionModifyLoadBalancerAttributesRouteHandler,
  postActionModifyRuleRouteHandler,
  postActionModifyTargetGroupAttributesRouteHandler,
  postActionModifyTargetGroupRouteHandler,
  postActionRegisterTargetsRouteHandler,
  postActionRemoveListenerCertificatesRouteHandler,
  postActionRemoveTagsRouteHandler,
  postActionSetIpAddressTypeRouteHandler,
  postActionSetRulePrioritiesRouteHandler,
  postActionSetSecurityGroupsRouteHandler,
  postActionSetSubnetsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActionAddListenerCertificatesRoute, getActionAddListenerCertificatesRouteHandler)
  .openapi(postActionAddListenerCertificatesRoute, postActionAddListenerCertificatesRouteHandler)
  .openapi(getActionAddTagsRoute, getActionAddTagsRouteHandler)
  .openapi(postActionAddTagsRoute, postActionAddTagsRouteHandler)
  .openapi(getActionCreateListenerRoute, getActionCreateListenerRouteHandler)
  .openapi(postActionCreateListenerRoute, postActionCreateListenerRouteHandler)
  .openapi(getActionCreateLoadBalancerRoute, getActionCreateLoadBalancerRouteHandler)
  .openapi(postActionCreateLoadBalancerRoute, postActionCreateLoadBalancerRouteHandler)
  .openapi(getActionCreateRuleRoute, getActionCreateRuleRouteHandler)
  .openapi(postActionCreateRuleRoute, postActionCreateRuleRouteHandler)
  .openapi(getActionCreateTargetGroupRoute, getActionCreateTargetGroupRouteHandler)
  .openapi(postActionCreateTargetGroupRoute, postActionCreateTargetGroupRouteHandler)
  .openapi(getActionDeleteListenerRoute, getActionDeleteListenerRouteHandler)
  .openapi(postActionDeleteListenerRoute, postActionDeleteListenerRouteHandler)
  .openapi(getActionDeleteLoadBalancerRoute, getActionDeleteLoadBalancerRouteHandler)
  .openapi(postActionDeleteLoadBalancerRoute, postActionDeleteLoadBalancerRouteHandler)
  .openapi(getActionDeleteRuleRoute, getActionDeleteRuleRouteHandler)
  .openapi(postActionDeleteRuleRoute, postActionDeleteRuleRouteHandler)
  .openapi(getActionDeleteTargetGroupRoute, getActionDeleteTargetGroupRouteHandler)
  .openapi(postActionDeleteTargetGroupRoute, postActionDeleteTargetGroupRouteHandler)
  .openapi(getActionDeregisterTargetsRoute, getActionDeregisterTargetsRouteHandler)
  .openapi(postActionDeregisterTargetsRoute, postActionDeregisterTargetsRouteHandler)
  .openapi(getActionDescribeAccountLimitsRoute, getActionDescribeAccountLimitsRouteHandler)
  .openapi(postActionDescribeAccountLimitsRoute, postActionDescribeAccountLimitsRouteHandler)
  .openapi(
    getActionDescribeListenerCertificatesRoute,
    getActionDescribeListenerCertificatesRouteHandler,
  )
  .openapi(
    postActionDescribeListenerCertificatesRoute,
    postActionDescribeListenerCertificatesRouteHandler,
  )
  .openapi(getActionDescribeListenersRoute, getActionDescribeListenersRouteHandler)
  .openapi(postActionDescribeListenersRoute, postActionDescribeListenersRouteHandler)
  .openapi(
    getActionDescribeLoadBalancerAttributesRoute,
    getActionDescribeLoadBalancerAttributesRouteHandler,
  )
  .openapi(
    postActionDescribeLoadBalancerAttributesRoute,
    postActionDescribeLoadBalancerAttributesRouteHandler,
  )
  .openapi(getActionDescribeLoadBalancersRoute, getActionDescribeLoadBalancersRouteHandler)
  .openapi(postActionDescribeLoadBalancersRoute, postActionDescribeLoadBalancersRouteHandler)
  .openapi(getActionDescribeRulesRoute, getActionDescribeRulesRouteHandler)
  .openapi(postActionDescribeRulesRoute, postActionDescribeRulesRouteHandler)
  .openapi(getActionDescribeSSLPoliciesRoute, getActionDescribeSSLPoliciesRouteHandler)
  .openapi(postActionDescribeSSLPoliciesRoute, postActionDescribeSSLPoliciesRouteHandler)
  .openapi(getActionDescribeTagsRoute, getActionDescribeTagsRouteHandler)
  .openapi(postActionDescribeTagsRoute, postActionDescribeTagsRouteHandler)
  .openapi(
    getActionDescribeTargetGroupAttributesRoute,
    getActionDescribeTargetGroupAttributesRouteHandler,
  )
  .openapi(
    postActionDescribeTargetGroupAttributesRoute,
    postActionDescribeTargetGroupAttributesRouteHandler,
  )
  .openapi(getActionDescribeTargetGroupsRoute, getActionDescribeTargetGroupsRouteHandler)
  .openapi(postActionDescribeTargetGroupsRoute, postActionDescribeTargetGroupsRouteHandler)
  .openapi(getActionDescribeTargetHealthRoute, getActionDescribeTargetHealthRouteHandler)
  .openapi(postActionDescribeTargetHealthRoute, postActionDescribeTargetHealthRouteHandler)
  .openapi(getActionModifyListenerRoute, getActionModifyListenerRouteHandler)
  .openapi(postActionModifyListenerRoute, postActionModifyListenerRouteHandler)
  .openapi(
    getActionModifyLoadBalancerAttributesRoute,
    getActionModifyLoadBalancerAttributesRouteHandler,
  )
  .openapi(
    postActionModifyLoadBalancerAttributesRoute,
    postActionModifyLoadBalancerAttributesRouteHandler,
  )
  .openapi(getActionModifyRuleRoute, getActionModifyRuleRouteHandler)
  .openapi(postActionModifyRuleRoute, postActionModifyRuleRouteHandler)
  .openapi(getActionModifyTargetGroupRoute, getActionModifyTargetGroupRouteHandler)
  .openapi(postActionModifyTargetGroupRoute, postActionModifyTargetGroupRouteHandler)
  .openapi(
    getActionModifyTargetGroupAttributesRoute,
    getActionModifyTargetGroupAttributesRouteHandler,
  )
  .openapi(
    postActionModifyTargetGroupAttributesRoute,
    postActionModifyTargetGroupAttributesRouteHandler,
  )
  .openapi(getActionRegisterTargetsRoute, getActionRegisterTargetsRouteHandler)
  .openapi(postActionRegisterTargetsRoute, postActionRegisterTargetsRouteHandler)
  .openapi(
    getActionRemoveListenerCertificatesRoute,
    getActionRemoveListenerCertificatesRouteHandler,
  )
  .openapi(
    postActionRemoveListenerCertificatesRoute,
    postActionRemoveListenerCertificatesRouteHandler,
  )
  .openapi(getActionRemoveTagsRoute, getActionRemoveTagsRouteHandler)
  .openapi(postActionRemoveTagsRoute, postActionRemoveTagsRouteHandler)
  .openapi(getActionSetIpAddressTypeRoute, getActionSetIpAddressTypeRouteHandler)
  .openapi(postActionSetIpAddressTypeRoute, postActionSetIpAddressTypeRouteHandler)
  .openapi(getActionSetRulePrioritiesRoute, getActionSetRulePrioritiesRouteHandler)
  .openapi(postActionSetRulePrioritiesRoute, postActionSetRulePrioritiesRouteHandler)
  .openapi(getActionSetSecurityGroupsRoute, getActionSetSecurityGroupsRouteHandler)
  .openapi(postActionSetSecurityGroupsRoute, postActionSetSecurityGroupsRouteHandler)
  .openapi(getActionSetSubnetsRoute, getActionSetSubnetsRouteHandler)
  .openapi(postActionSetSubnetsRoute, postActionSetSubnetsRouteHandler)

export default app
