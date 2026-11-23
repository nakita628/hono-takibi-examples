import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdentityAliasIdIdRoute,
  deleteIdentityEntityAliasIdIdRoute,
  deleteIdentityEntityIdIdRoute,
  deleteIdentityEntityNameNameRoute,
  deleteIdentityGroupAliasIdIdRoute,
  deleteIdentityGroupIdIdRoute,
  deleteIdentityGroupNameNameRoute,
  deleteIdentityMfaLoginEnforcementNameRoute,
  deleteIdentityMfaMethodDuoMethodIdRoute,
  deleteIdentityMfaMethodOktaMethodIdRoute,
  deleteIdentityMfaMethodPingidMethodIdRoute,
  deleteIdentityMfaMethodTotpMethodIdRoute,
  deleteIdentityOidcAssignmentNameRoute,
  deleteIdentityOidcClientNameRoute,
  deleteIdentityOidcKeyNameRoute,
  deleteIdentityOidcProviderNameRoute,
  deleteIdentityOidcRoleNameRoute,
  deleteIdentityOidcScopeNameRoute,
  deleteIdentityPersonaIdIdRoute,
  getIdentityAliasIdIdRoute,
  getIdentityAliasIdIndexRoute,
  getIdentityEntityAliasIdIdRoute,
  getIdentityEntityAliasIdIndexRoute,
  getIdentityEntityIdIdRoute,
  getIdentityEntityIdIndexRoute,
  getIdentityEntityNameIndexRoute,
  getIdentityEntityNameNameRoute,
  getIdentityGroupAliasIdIdRoute,
  getIdentityGroupAliasIdIndexRoute,
  getIdentityGroupIdIdRoute,
  getIdentityGroupIdIndexRoute,
  getIdentityGroupNameIndexRoute,
  getIdentityGroupNameNameRoute,
  getIdentityMfaLoginEnforcementIndexRoute,
  getIdentityMfaLoginEnforcementNameRoute,
  getIdentityMfaMethodDuoIndexRoute,
  getIdentityMfaMethodDuoMethodIdRoute,
  getIdentityMfaMethodIndexRoute,
  getIdentityMfaMethodMethodIdRoute,
  getIdentityMfaMethodOktaIndexRoute,
  getIdentityMfaMethodOktaMethodIdRoute,
  getIdentityMfaMethodPingidIndexRoute,
  getIdentityMfaMethodPingidMethodIdRoute,
  getIdentityMfaMethodTotpIndexRoute,
  getIdentityMfaMethodTotpMethodIdRoute,
  getIdentityOidcAssignmentIndexRoute,
  getIdentityOidcAssignmentNameRoute,
  getIdentityOidcClientIndexRoute,
  getIdentityOidcClientNameRoute,
  getIdentityOidcConfigRoute,
  getIdentityOidcKeyIndexRoute,
  getIdentityOidcKeyNameRoute,
  getIdentityOidcProviderIndexRoute,
  getIdentityOidcProviderNameAuthorizeRoute,
  getIdentityOidcProviderNameRoute,
  getIdentityOidcProviderNameUserinfoRoute,
  getIdentityOidcProviderNameWellKnownKeysRoute,
  getIdentityOidcProviderNameWellKnownOpenidConfigurationRoute,
  getIdentityOidcRoleIndexRoute,
  getIdentityOidcRoleNameRoute,
  getIdentityOidcScopeIndexRoute,
  getIdentityOidcScopeNameRoute,
  getIdentityOidcTokenNameRoute,
  getIdentityOidcWellKnownKeysRoute,
  getIdentityOidcWellKnownOpenidConfigurationRoute,
  getIdentityPersonaIdIdRoute,
  getIdentityPersonaIdIndexRoute,
  postIdentityAliasIdIdRoute,
  postIdentityAliasRoute,
  postIdentityEntityAliasIdIdRoute,
  postIdentityEntityAliasRoute,
  postIdentityEntityBatchDeleteRoute,
  postIdentityEntityIdIdRoute,
  postIdentityEntityMergeRoute,
  postIdentityEntityNameNameRoute,
  postIdentityEntityRoute,
  postIdentityGroupAliasIdIdRoute,
  postIdentityGroupAliasRoute,
  postIdentityGroupIdIdRoute,
  postIdentityGroupNameNameRoute,
  postIdentityGroupRoute,
  postIdentityLookupEntityRoute,
  postIdentityLookupGroupRoute,
  postIdentityMfaLoginEnforcementNameRoute,
  postIdentityMfaMethodDuoMethodIdRoute,
  postIdentityMfaMethodDuoRoute,
  postIdentityMfaMethodOktaMethodIdRoute,
  postIdentityMfaMethodOktaRoute,
  postIdentityMfaMethodPingidMethodIdRoute,
  postIdentityMfaMethodPingidRoute,
  postIdentityMfaMethodTotpAdminDestroyRoute,
  postIdentityMfaMethodTotpAdminGenerateRoute,
  postIdentityMfaMethodTotpGenerateRoute,
  postIdentityMfaMethodTotpMethodIdRoute,
  postIdentityMfaMethodTotpRoute,
  postIdentityOidcAssignmentNameRoute,
  postIdentityOidcClientNameRoute,
  postIdentityOidcConfigRoute,
  postIdentityOidcIntrospectRoute,
  postIdentityOidcKeyNameRotateRoute,
  postIdentityOidcKeyNameRoute,
  postIdentityOidcProviderNameAuthorizeRoute,
  postIdentityOidcProviderNameRoute,
  postIdentityOidcProviderNameTokenRoute,
  postIdentityOidcProviderNameUserinfoRoute,
  postIdentityOidcRoleNameRoute,
  postIdentityOidcScopeNameRoute,
  postIdentityPersonaIdIdRoute,
  postIdentityPersonaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityHandler = app
  .openapi(postIdentityAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityAliasIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityAliasIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityAliasIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityAliasIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityEntityAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityEntityAliasIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityEntityAliasIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityEntityAliasIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityEntityAliasIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityEntityBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityEntityIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityEntityIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityEntityIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityEntityIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityEntityMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityEntityNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityEntityNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityEntityNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityEntityNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGroupAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGroupAliasIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGroupAliasIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGroupAliasIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityGroupAliasIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGroupIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGroupIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGroupIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityGroupIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGroupNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGroupNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGroupNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityGroupNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityLookupEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityLookupGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityMfaLoginEnforcementIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityMfaLoginEnforcementNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityMfaLoginEnforcementNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityMfaLoginEnforcementNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityMfaMethodIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityMfaMethodDuoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityMfaMethodDuoIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityMfaMethodDuoMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityMfaMethodDuoMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityMfaMethodDuoMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityMfaMethodOktaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityMfaMethodOktaIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityMfaMethodOktaMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityMfaMethodOktaMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityMfaMethodOktaMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityMfaMethodPingidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityMfaMethodPingidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityMfaMethodPingidMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityMfaMethodPingidMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityMfaMethodPingidMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityMfaMethodTotpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityMfaMethodTotpIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityMfaMethodTotpAdminDestroyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityMfaMethodTotpAdminGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityMfaMethodTotpGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityMfaMethodTotpMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityMfaMethodTotpMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityMfaMethodTotpMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityMfaMethodMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityOidcWellKnownKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityOidcWellKnownOpenidConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityOidcAssignmentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityOidcAssignmentNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityOidcAssignmentNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityOidcAssignmentNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityOidcClientIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityOidcClientNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityOidcClientNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityOidcClientNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityOidcConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityOidcConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityOidcIntrospectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityOidcKeyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityOidcKeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityOidcKeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityOidcKeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityOidcKeyNameRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityOidcProviderIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityOidcProviderNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityOidcProviderNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityOidcProviderNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityOidcProviderNameWellKnownKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityOidcProviderNameWellKnownOpenidConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityOidcProviderNameAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityOidcProviderNameAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityOidcProviderNameTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityOidcProviderNameUserinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityOidcProviderNameUserinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityOidcRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityOidcRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityOidcRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityOidcRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityOidcScopeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityOidcScopeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityOidcScopeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityOidcScopeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityOidcTokenNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityPersonaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityPersonaIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityPersonaIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityPersonaIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityPersonaIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
