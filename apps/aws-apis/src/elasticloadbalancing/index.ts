import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionAddTagsHandler,
  actionApplySecurityGroupsToLoadBalancerHandler,
  actionAttachLoadBalancerToSubnetsHandler,
  actionConfigureHealthCheckHandler,
  actionCreateAppCookieStickinessPolicyHandler,
  actionCreateLbCookieStickinessPolicyHandler,
  actionCreateLoadBalancerHandler,
  actionCreateLoadBalancerListenersHandler,
  actionCreateLoadBalancerPolicyHandler,
  actionDeleteLoadBalancerHandler,
  actionDeleteLoadBalancerListenersHandler,
  actionDeleteLoadBalancerPolicyHandler,
  actionDeregisterInstancesFromLoadBalancerHandler,
  actionDescribeAccountLimitsHandler,
  actionDescribeInstanceHealthHandler,
  actionDescribeLoadBalancerAttributesHandler,
  actionDescribeLoadBalancerPoliciesHandler,
  actionDescribeLoadBalancerPolicyTypesHandler,
  actionDescribeLoadBalancersHandler,
  actionDescribeTagsHandler,
  actionDetachLoadBalancerFromSubnetsHandler,
  actionDisableAvailabilityZonesForLoadBalancerHandler,
  actionEnableAvailabilityZonesForLoadBalancerHandler,
  actionModifyLoadBalancerAttributesHandler,
  actionRegisterInstancesWithLoadBalancerHandler,
  actionRemoveTagsHandler,
  actionSetLoadBalancerListenerSslCertificateHandler,
  actionSetLoadBalancerPoliciesForBackendServerHandler,
  actionSetLoadBalancerPoliciesOfListenerHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionAddTagsHandler)
  .route('/', actionApplySecurityGroupsToLoadBalancerHandler)
  .route('/', actionAttachLoadBalancerToSubnetsHandler)
  .route('/', actionConfigureHealthCheckHandler)
  .route('/', actionCreateAppCookieStickinessPolicyHandler)
  .route('/', actionCreateLbCookieStickinessPolicyHandler)
  .route('/', actionCreateLoadBalancerHandler)
  .route('/', actionCreateLoadBalancerListenersHandler)
  .route('/', actionCreateLoadBalancerPolicyHandler)
  .route('/', actionDeleteLoadBalancerHandler)
  .route('/', actionDeleteLoadBalancerListenersHandler)
  .route('/', actionDeleteLoadBalancerPolicyHandler)
  .route('/', actionDeregisterInstancesFromLoadBalancerHandler)
  .route('/', actionDescribeAccountLimitsHandler)
  .route('/', actionDescribeInstanceHealthHandler)
  .route('/', actionDescribeLoadBalancerAttributesHandler)
  .route('/', actionDescribeLoadBalancerPoliciesHandler)
  .route('/', actionDescribeLoadBalancerPolicyTypesHandler)
  .route('/', actionDescribeLoadBalancersHandler)
  .route('/', actionDescribeTagsHandler)
  .route('/', actionDetachLoadBalancerFromSubnetsHandler)
  .route('/', actionDisableAvailabilityZonesForLoadBalancerHandler)
  .route('/', actionEnableAvailabilityZonesForLoadBalancerHandler)
  .route('/', actionModifyLoadBalancerAttributesHandler)
  .route('/', actionRegisterInstancesWithLoadBalancerHandler)
  .route('/', actionRemoveTagsHandler)
  .route('/', actionSetLoadBalancerListenerSslCertificateHandler)
  .route('/', actionSetLoadBalancerPoliciesForBackendServerHandler)
  .route('/', actionSetLoadBalancerPoliciesOfListenerHandler)

export default app
