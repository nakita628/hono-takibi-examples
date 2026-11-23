import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionAddListenerCertificatesHandler,
  actionAddTagsHandler,
  actionCreateListenerHandler,
  actionCreateLoadBalancerHandler,
  actionCreateRuleHandler,
  actionCreateTargetGroupHandler,
  actionDeleteListenerHandler,
  actionDeleteLoadBalancerHandler,
  actionDeleteRuleHandler,
  actionDeleteTargetGroupHandler,
  actionDeregisterTargetsHandler,
  actionDescribeAccountLimitsHandler,
  actionDescribeListenerCertificatesHandler,
  actionDescribeListenersHandler,
  actionDescribeLoadBalancerAttributesHandler,
  actionDescribeLoadBalancersHandler,
  actionDescribeRulesHandler,
  actionDescribeSslPoliciesHandler,
  actionDescribeTagsHandler,
  actionDescribeTargetGroupAttributesHandler,
  actionDescribeTargetGroupsHandler,
  actionDescribeTargetHealthHandler,
  actionModifyListenerHandler,
  actionModifyLoadBalancerAttributesHandler,
  actionModifyRuleHandler,
  actionModifyTargetGroupAttributesHandler,
  actionModifyTargetGroupHandler,
  actionRegisterTargetsHandler,
  actionRemoveListenerCertificatesHandler,
  actionRemoveTagsHandler,
  actionSetIpAddressTypeHandler,
  actionSetRulePrioritiesHandler,
  actionSetSecurityGroupsHandler,
  actionSetSubnetsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionAddListenerCertificatesHandler)
  .route('/', actionAddTagsHandler)
  .route('/', actionCreateListenerHandler)
  .route('/', actionCreateLoadBalancerHandler)
  .route('/', actionCreateRuleHandler)
  .route('/', actionCreateTargetGroupHandler)
  .route('/', actionDeleteListenerHandler)
  .route('/', actionDeleteLoadBalancerHandler)
  .route('/', actionDeleteRuleHandler)
  .route('/', actionDeleteTargetGroupHandler)
  .route('/', actionDeregisterTargetsHandler)
  .route('/', actionDescribeAccountLimitsHandler)
  .route('/', actionDescribeListenerCertificatesHandler)
  .route('/', actionDescribeListenersHandler)
  .route('/', actionDescribeLoadBalancerAttributesHandler)
  .route('/', actionDescribeLoadBalancersHandler)
  .route('/', actionDescribeRulesHandler)
  .route('/', actionDescribeSslPoliciesHandler)
  .route('/', actionDescribeTagsHandler)
  .route('/', actionDescribeTargetGroupAttributesHandler)
  .route('/', actionDescribeTargetGroupsHandler)
  .route('/', actionDescribeTargetHealthHandler)
  .route('/', actionModifyListenerHandler)
  .route('/', actionModifyLoadBalancerAttributesHandler)
  .route('/', actionModifyRuleHandler)
  .route('/', actionModifyTargetGroupHandler)
  .route('/', actionModifyTargetGroupAttributesHandler)
  .route('/', actionRegisterTargetsHandler)
  .route('/', actionRemoveListenerCertificatesHandler)
  .route('/', actionRemoveTagsHandler)
  .route('/', actionSetIpAddressTypeHandler)
  .route('/', actionSetRulePrioritiesHandler)
  .route('/', actionSetSecurityGroupsHandler)
  .route('/', actionSetSubnetsHandler)

export default app
