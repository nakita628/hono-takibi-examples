import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAddTagsRoute,
  getActionApplySecurityGroupsToLoadBalancerRoute,
  getActionAttachLoadBalancerToSubnetsRoute,
  getActionConfigureHealthCheckRoute,
  getActionCreateAppCookieStickinessPolicyRoute,
  getActionCreateLBCookieStickinessPolicyRoute,
  getActionCreateLoadBalancerListenersRoute,
  getActionCreateLoadBalancerPolicyRoute,
  getActionCreateLoadBalancerRoute,
  getActionDeleteLoadBalancerListenersRoute,
  getActionDeleteLoadBalancerPolicyRoute,
  getActionDeleteLoadBalancerRoute,
  getActionDeregisterInstancesFromLoadBalancerRoute,
  getActionDescribeAccountLimitsRoute,
  getActionDescribeInstanceHealthRoute,
  getActionDescribeLoadBalancerAttributesRoute,
  getActionDescribeLoadBalancerPoliciesRoute,
  getActionDescribeLoadBalancerPolicyTypesRoute,
  getActionDescribeLoadBalancersRoute,
  getActionDescribeTagsRoute,
  getActionDetachLoadBalancerFromSubnetsRoute,
  getActionDisableAvailabilityZonesForLoadBalancerRoute,
  getActionEnableAvailabilityZonesForLoadBalancerRoute,
  getActionModifyLoadBalancerAttributesRoute,
  getActionRegisterInstancesWithLoadBalancerRoute,
  getActionRemoveTagsRoute,
  getActionSetLoadBalancerListenerSSLCertificateRoute,
  getActionSetLoadBalancerPoliciesForBackendServerRoute,
  getActionSetLoadBalancerPoliciesOfListenerRoute,
  postActionAddTagsRoute,
  postActionApplySecurityGroupsToLoadBalancerRoute,
  postActionAttachLoadBalancerToSubnetsRoute,
  postActionConfigureHealthCheckRoute,
  postActionCreateAppCookieStickinessPolicyRoute,
  postActionCreateLBCookieStickinessPolicyRoute,
  postActionCreateLoadBalancerListenersRoute,
  postActionCreateLoadBalancerPolicyRoute,
  postActionCreateLoadBalancerRoute,
  postActionDeleteLoadBalancerListenersRoute,
  postActionDeleteLoadBalancerPolicyRoute,
  postActionDeleteLoadBalancerRoute,
  postActionDeregisterInstancesFromLoadBalancerRoute,
  postActionDescribeAccountLimitsRoute,
  postActionDescribeInstanceHealthRoute,
  postActionDescribeLoadBalancerAttributesRoute,
  postActionDescribeLoadBalancerPoliciesRoute,
  postActionDescribeLoadBalancerPolicyTypesRoute,
  postActionDescribeLoadBalancersRoute,
  postActionDescribeTagsRoute,
  postActionDetachLoadBalancerFromSubnetsRoute,
  postActionDisableAvailabilityZonesForLoadBalancerRoute,
  postActionEnableAvailabilityZonesForLoadBalancerRoute,
  postActionModifyLoadBalancerAttributesRoute,
  postActionRegisterInstancesWithLoadBalancerRoute,
  postActionRemoveTagsRoute,
  postActionSetLoadBalancerListenerSSLCertificateRoute,
  postActionSetLoadBalancerPoliciesForBackendServerRoute,
  postActionSetLoadBalancerPoliciesOfListenerRoute,
} from './routes'
import {
  getActionAddTagsRouteHandler,
  getActionApplySecurityGroupsToLoadBalancerRouteHandler,
  getActionAttachLoadBalancerToSubnetsRouteHandler,
  getActionConfigureHealthCheckRouteHandler,
  getActionCreateAppCookieStickinessPolicyRouteHandler,
  getActionCreateLBCookieStickinessPolicyRouteHandler,
  getActionCreateLoadBalancerListenersRouteHandler,
  getActionCreateLoadBalancerPolicyRouteHandler,
  getActionCreateLoadBalancerRouteHandler,
  getActionDeleteLoadBalancerListenersRouteHandler,
  getActionDeleteLoadBalancerPolicyRouteHandler,
  getActionDeleteLoadBalancerRouteHandler,
  getActionDeregisterInstancesFromLoadBalancerRouteHandler,
  getActionDescribeAccountLimitsRouteHandler,
  getActionDescribeInstanceHealthRouteHandler,
  getActionDescribeLoadBalancerAttributesRouteHandler,
  getActionDescribeLoadBalancerPoliciesRouteHandler,
  getActionDescribeLoadBalancerPolicyTypesRouteHandler,
  getActionDescribeLoadBalancersRouteHandler,
  getActionDescribeTagsRouteHandler,
  getActionDetachLoadBalancerFromSubnetsRouteHandler,
  getActionDisableAvailabilityZonesForLoadBalancerRouteHandler,
  getActionEnableAvailabilityZonesForLoadBalancerRouteHandler,
  getActionModifyLoadBalancerAttributesRouteHandler,
  getActionRegisterInstancesWithLoadBalancerRouteHandler,
  getActionRemoveTagsRouteHandler,
  getActionSetLoadBalancerListenerSSLCertificateRouteHandler,
  getActionSetLoadBalancerPoliciesForBackendServerRouteHandler,
  getActionSetLoadBalancerPoliciesOfListenerRouteHandler,
  postActionAddTagsRouteHandler,
  postActionApplySecurityGroupsToLoadBalancerRouteHandler,
  postActionAttachLoadBalancerToSubnetsRouteHandler,
  postActionConfigureHealthCheckRouteHandler,
  postActionCreateAppCookieStickinessPolicyRouteHandler,
  postActionCreateLBCookieStickinessPolicyRouteHandler,
  postActionCreateLoadBalancerListenersRouteHandler,
  postActionCreateLoadBalancerPolicyRouteHandler,
  postActionCreateLoadBalancerRouteHandler,
  postActionDeleteLoadBalancerListenersRouteHandler,
  postActionDeleteLoadBalancerPolicyRouteHandler,
  postActionDeleteLoadBalancerRouteHandler,
  postActionDeregisterInstancesFromLoadBalancerRouteHandler,
  postActionDescribeAccountLimitsRouteHandler,
  postActionDescribeInstanceHealthRouteHandler,
  postActionDescribeLoadBalancerAttributesRouteHandler,
  postActionDescribeLoadBalancerPoliciesRouteHandler,
  postActionDescribeLoadBalancerPolicyTypesRouteHandler,
  postActionDescribeLoadBalancersRouteHandler,
  postActionDescribeTagsRouteHandler,
  postActionDetachLoadBalancerFromSubnetsRouteHandler,
  postActionDisableAvailabilityZonesForLoadBalancerRouteHandler,
  postActionEnableAvailabilityZonesForLoadBalancerRouteHandler,
  postActionModifyLoadBalancerAttributesRouteHandler,
  postActionRegisterInstancesWithLoadBalancerRouteHandler,
  postActionRemoveTagsRouteHandler,
  postActionSetLoadBalancerListenerSSLCertificateRouteHandler,
  postActionSetLoadBalancerPoliciesForBackendServerRouteHandler,
  postActionSetLoadBalancerPoliciesOfListenerRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActionAddTagsRoute, getActionAddTagsRouteHandler)
  .openapi(postActionAddTagsRoute, postActionAddTagsRouteHandler)
  .openapi(
    getActionApplySecurityGroupsToLoadBalancerRoute,
    getActionApplySecurityGroupsToLoadBalancerRouteHandler,
  )
  .openapi(
    postActionApplySecurityGroupsToLoadBalancerRoute,
    postActionApplySecurityGroupsToLoadBalancerRouteHandler,
  )
  .openapi(
    getActionAttachLoadBalancerToSubnetsRoute,
    getActionAttachLoadBalancerToSubnetsRouteHandler,
  )
  .openapi(
    postActionAttachLoadBalancerToSubnetsRoute,
    postActionAttachLoadBalancerToSubnetsRouteHandler,
  )
  .openapi(getActionConfigureHealthCheckRoute, getActionConfigureHealthCheckRouteHandler)
  .openapi(postActionConfigureHealthCheckRoute, postActionConfigureHealthCheckRouteHandler)
  .openapi(
    getActionCreateAppCookieStickinessPolicyRoute,
    getActionCreateAppCookieStickinessPolicyRouteHandler,
  )
  .openapi(
    postActionCreateAppCookieStickinessPolicyRoute,
    postActionCreateAppCookieStickinessPolicyRouteHandler,
  )
  .openapi(
    getActionCreateLBCookieStickinessPolicyRoute,
    getActionCreateLBCookieStickinessPolicyRouteHandler,
  )
  .openapi(
    postActionCreateLBCookieStickinessPolicyRoute,
    postActionCreateLBCookieStickinessPolicyRouteHandler,
  )
  .openapi(getActionCreateLoadBalancerRoute, getActionCreateLoadBalancerRouteHandler)
  .openapi(postActionCreateLoadBalancerRoute, postActionCreateLoadBalancerRouteHandler)
  .openapi(
    getActionCreateLoadBalancerListenersRoute,
    getActionCreateLoadBalancerListenersRouteHandler,
  )
  .openapi(
    postActionCreateLoadBalancerListenersRoute,
    postActionCreateLoadBalancerListenersRouteHandler,
  )
  .openapi(getActionCreateLoadBalancerPolicyRoute, getActionCreateLoadBalancerPolicyRouteHandler)
  .openapi(postActionCreateLoadBalancerPolicyRoute, postActionCreateLoadBalancerPolicyRouteHandler)
  .openapi(getActionDeleteLoadBalancerRoute, getActionDeleteLoadBalancerRouteHandler)
  .openapi(postActionDeleteLoadBalancerRoute, postActionDeleteLoadBalancerRouteHandler)
  .openapi(
    getActionDeleteLoadBalancerListenersRoute,
    getActionDeleteLoadBalancerListenersRouteHandler,
  )
  .openapi(
    postActionDeleteLoadBalancerListenersRoute,
    postActionDeleteLoadBalancerListenersRouteHandler,
  )
  .openapi(getActionDeleteLoadBalancerPolicyRoute, getActionDeleteLoadBalancerPolicyRouteHandler)
  .openapi(postActionDeleteLoadBalancerPolicyRoute, postActionDeleteLoadBalancerPolicyRouteHandler)
  .openapi(
    getActionDeregisterInstancesFromLoadBalancerRoute,
    getActionDeregisterInstancesFromLoadBalancerRouteHandler,
  )
  .openapi(
    postActionDeregisterInstancesFromLoadBalancerRoute,
    postActionDeregisterInstancesFromLoadBalancerRouteHandler,
  )
  .openapi(getActionDescribeAccountLimitsRoute, getActionDescribeAccountLimitsRouteHandler)
  .openapi(postActionDescribeAccountLimitsRoute, postActionDescribeAccountLimitsRouteHandler)
  .openapi(getActionDescribeInstanceHealthRoute, getActionDescribeInstanceHealthRouteHandler)
  .openapi(postActionDescribeInstanceHealthRoute, postActionDescribeInstanceHealthRouteHandler)
  .openapi(
    getActionDescribeLoadBalancerAttributesRoute,
    getActionDescribeLoadBalancerAttributesRouteHandler,
  )
  .openapi(
    postActionDescribeLoadBalancerAttributesRoute,
    postActionDescribeLoadBalancerAttributesRouteHandler,
  )
  .openapi(
    getActionDescribeLoadBalancerPoliciesRoute,
    getActionDescribeLoadBalancerPoliciesRouteHandler,
  )
  .openapi(
    postActionDescribeLoadBalancerPoliciesRoute,
    postActionDescribeLoadBalancerPoliciesRouteHandler,
  )
  .openapi(
    getActionDescribeLoadBalancerPolicyTypesRoute,
    getActionDescribeLoadBalancerPolicyTypesRouteHandler,
  )
  .openapi(
    postActionDescribeLoadBalancerPolicyTypesRoute,
    postActionDescribeLoadBalancerPolicyTypesRouteHandler,
  )
  .openapi(getActionDescribeLoadBalancersRoute, getActionDescribeLoadBalancersRouteHandler)
  .openapi(postActionDescribeLoadBalancersRoute, postActionDescribeLoadBalancersRouteHandler)
  .openapi(getActionDescribeTagsRoute, getActionDescribeTagsRouteHandler)
  .openapi(postActionDescribeTagsRoute, postActionDescribeTagsRouteHandler)
  .openapi(
    getActionDetachLoadBalancerFromSubnetsRoute,
    getActionDetachLoadBalancerFromSubnetsRouteHandler,
  )
  .openapi(
    postActionDetachLoadBalancerFromSubnetsRoute,
    postActionDetachLoadBalancerFromSubnetsRouteHandler,
  )
  .openapi(
    getActionDisableAvailabilityZonesForLoadBalancerRoute,
    getActionDisableAvailabilityZonesForLoadBalancerRouteHandler,
  )
  .openapi(
    postActionDisableAvailabilityZonesForLoadBalancerRoute,
    postActionDisableAvailabilityZonesForLoadBalancerRouteHandler,
  )
  .openapi(
    getActionEnableAvailabilityZonesForLoadBalancerRoute,
    getActionEnableAvailabilityZonesForLoadBalancerRouteHandler,
  )
  .openapi(
    postActionEnableAvailabilityZonesForLoadBalancerRoute,
    postActionEnableAvailabilityZonesForLoadBalancerRouteHandler,
  )
  .openapi(
    getActionModifyLoadBalancerAttributesRoute,
    getActionModifyLoadBalancerAttributesRouteHandler,
  )
  .openapi(
    postActionModifyLoadBalancerAttributesRoute,
    postActionModifyLoadBalancerAttributesRouteHandler,
  )
  .openapi(
    getActionRegisterInstancesWithLoadBalancerRoute,
    getActionRegisterInstancesWithLoadBalancerRouteHandler,
  )
  .openapi(
    postActionRegisterInstancesWithLoadBalancerRoute,
    postActionRegisterInstancesWithLoadBalancerRouteHandler,
  )
  .openapi(getActionRemoveTagsRoute, getActionRemoveTagsRouteHandler)
  .openapi(postActionRemoveTagsRoute, postActionRemoveTagsRouteHandler)
  .openapi(
    getActionSetLoadBalancerListenerSSLCertificateRoute,
    getActionSetLoadBalancerListenerSSLCertificateRouteHandler,
  )
  .openapi(
    postActionSetLoadBalancerListenerSSLCertificateRoute,
    postActionSetLoadBalancerListenerSSLCertificateRouteHandler,
  )
  .openapi(
    getActionSetLoadBalancerPoliciesForBackendServerRoute,
    getActionSetLoadBalancerPoliciesForBackendServerRouteHandler,
  )
  .openapi(
    postActionSetLoadBalancerPoliciesForBackendServerRoute,
    postActionSetLoadBalancerPoliciesForBackendServerRouteHandler,
  )
  .openapi(
    getActionSetLoadBalancerPoliciesOfListenerRoute,
    getActionSetLoadBalancerPoliciesOfListenerRouteHandler,
  )
  .openapi(
    postActionSetLoadBalancerPoliciesOfListenerRoute,
    postActionSetLoadBalancerPoliciesOfListenerRouteHandler,
  )

export default app
