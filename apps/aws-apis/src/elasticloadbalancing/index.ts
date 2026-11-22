import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ActionAddTagsHandler,
  ActionApplySecurityGroupsToLoadBalancerHandler,
  ActionAttachLoadBalancerToSubnetsHandler,
  ActionConfigureHealthCheckHandler,
  ActionCreateAppCookieStickinessPolicyHandler,
  ActionCreateLBCookieStickinessPolicyHandler,
  ActionCreateLoadBalancerHandler,
  ActionCreateLoadBalancerListenersHandler,
  ActionCreateLoadBalancerPolicyHandler,
  ActionDeleteLoadBalancerHandler,
  ActionDeleteLoadBalancerListenersHandler,
  ActionDeleteLoadBalancerPolicyHandler,
  ActionDeregisterInstancesFromLoadBalancerHandler,
  ActionDescribeAccountLimitsHandler,
  ActionDescribeInstanceHealthHandler,
  ActionDescribeLoadBalancerAttributesHandler,
  ActionDescribeLoadBalancerPoliciesHandler,
  ActionDescribeLoadBalancerPolicyTypesHandler,
  ActionDescribeLoadBalancersHandler,
  ActionDescribeTagsHandler,
  ActionDetachLoadBalancerFromSubnetsHandler,
  ActionDisableAvailabilityZonesForLoadBalancerHandler,
  ActionEnableAvailabilityZonesForLoadBalancerHandler,
  ActionModifyLoadBalancerAttributesHandler,
  ActionRegisterInstancesWithLoadBalancerHandler,
  ActionRemoveTagsHandler,
  ActionSetLoadBalancerListenerSSLCertificateHandler,
  ActionSetLoadBalancerPoliciesForBackendServerHandler,
  ActionSetLoadBalancerPoliciesOfListenerHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ActionAddTagsHandler)
  .route('/', ActionApplySecurityGroupsToLoadBalancerHandler)
  .route('/', ActionAttachLoadBalancerToSubnetsHandler)
  .route('/', ActionConfigureHealthCheckHandler)
  .route('/', ActionCreateAppCookieStickinessPolicyHandler)
  .route('/', ActionCreateLBCookieStickinessPolicyHandler)
  .route('/', ActionCreateLoadBalancerHandler)
  .route('/', ActionCreateLoadBalancerListenersHandler)
  .route('/', ActionCreateLoadBalancerPolicyHandler)
  .route('/', ActionDeleteLoadBalancerHandler)
  .route('/', ActionDeleteLoadBalancerListenersHandler)
  .route('/', ActionDeleteLoadBalancerPolicyHandler)
  .route('/', ActionDeregisterInstancesFromLoadBalancerHandler)
  .route('/', ActionDescribeAccountLimitsHandler)
  .route('/', ActionDescribeInstanceHealthHandler)
  .route('/', ActionDescribeLoadBalancerAttributesHandler)
  .route('/', ActionDescribeLoadBalancerPoliciesHandler)
  .route('/', ActionDescribeLoadBalancerPolicyTypesHandler)
  .route('/', ActionDescribeLoadBalancersHandler)
  .route('/', ActionDescribeTagsHandler)
  .route('/', ActionDetachLoadBalancerFromSubnetsHandler)
  .route('/', ActionDisableAvailabilityZonesForLoadBalancerHandler)
  .route('/', ActionEnableAvailabilityZonesForLoadBalancerHandler)
  .route('/', ActionModifyLoadBalancerAttributesHandler)
  .route('/', ActionRegisterInstancesWithLoadBalancerHandler)
  .route('/', ActionRemoveTagsHandler)
  .route('/', ActionSetLoadBalancerListenerSSLCertificateHandler)
  .route('/', ActionSetLoadBalancerPoliciesForBackendServerHandler)
  .route('/', ActionSetLoadBalancerPoliciesOfListenerHandler)

export default app
