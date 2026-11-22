import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ActionAddListenerCertificatesHandler,
  ActionAddTagsHandler,
  ActionCreateListenerHandler,
  ActionCreateLoadBalancerHandler,
  ActionCreateRuleHandler,
  ActionCreateTargetGroupHandler,
  ActionDeleteListenerHandler,
  ActionDeleteLoadBalancerHandler,
  ActionDeleteRuleHandler,
  ActionDeleteTargetGroupHandler,
  ActionDeregisterTargetsHandler,
  ActionDescribeAccountLimitsHandler,
  ActionDescribeListenerCertificatesHandler,
  ActionDescribeListenersHandler,
  ActionDescribeLoadBalancerAttributesHandler,
  ActionDescribeLoadBalancersHandler,
  ActionDescribeRulesHandler,
  ActionDescribeSSLPoliciesHandler,
  ActionDescribeTagsHandler,
  ActionDescribeTargetGroupAttributesHandler,
  ActionDescribeTargetGroupsHandler,
  ActionDescribeTargetHealthHandler,
  ActionModifyListenerHandler,
  ActionModifyLoadBalancerAttributesHandler,
  ActionModifyRuleHandler,
  ActionModifyTargetGroupAttributesHandler,
  ActionModifyTargetGroupHandler,
  ActionRegisterTargetsHandler,
  ActionRemoveListenerCertificatesHandler,
  ActionRemoveTagsHandler,
  ActionSetIpAddressTypeHandler,
  ActionSetRulePrioritiesHandler,
  ActionSetSecurityGroupsHandler,
  ActionSetSubnetsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ActionAddListenerCertificatesHandler)
  .route('/', ActionAddTagsHandler)
  .route('/', ActionCreateListenerHandler)
  .route('/', ActionCreateLoadBalancerHandler)
  .route('/', ActionCreateRuleHandler)
  .route('/', ActionCreateTargetGroupHandler)
  .route('/', ActionDeleteListenerHandler)
  .route('/', ActionDeleteLoadBalancerHandler)
  .route('/', ActionDeleteRuleHandler)
  .route('/', ActionDeleteTargetGroupHandler)
  .route('/', ActionDeregisterTargetsHandler)
  .route('/', ActionDescribeAccountLimitsHandler)
  .route('/', ActionDescribeListenerCertificatesHandler)
  .route('/', ActionDescribeListenersHandler)
  .route('/', ActionDescribeLoadBalancerAttributesHandler)
  .route('/', ActionDescribeLoadBalancersHandler)
  .route('/', ActionDescribeRulesHandler)
  .route('/', ActionDescribeSSLPoliciesHandler)
  .route('/', ActionDescribeTagsHandler)
  .route('/', ActionDescribeTargetGroupAttributesHandler)
  .route('/', ActionDescribeTargetGroupsHandler)
  .route('/', ActionDescribeTargetHealthHandler)
  .route('/', ActionModifyListenerHandler)
  .route('/', ActionModifyLoadBalancerAttributesHandler)
  .route('/', ActionModifyRuleHandler)
  .route('/', ActionModifyTargetGroupHandler)
  .route('/', ActionModifyTargetGroupAttributesHandler)
  .route('/', ActionRegisterTargetsHandler)
  .route('/', ActionRemoveListenerCertificatesHandler)
  .route('/', ActionRemoveTagsHandler)
  .route('/', ActionSetIpAddressTypeHandler)
  .route('/', ActionSetRulePrioritiesHandler)
  .route('/', ActionSetSecurityGroupsHandler)
  .route('/', ActionSetSubnetsHandler)

export default app
