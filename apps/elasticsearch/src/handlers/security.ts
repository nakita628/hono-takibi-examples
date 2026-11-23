import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecurityApiKeyRoute,
  deleteSecurityOauth2TokenRoute,
  deleteSecurityPrivilegeApplicationNameRoute,
  deleteSecurityRoleMappingNameRoute,
  deleteSecurityRoleNameRoute,
  deleteSecurityRoleRoute,
  deleteSecurityServiceNamespaceServiceCredentialTokenNameRoute,
  deleteSecurityServiceNamespaceServiceRoute,
  deleteSecurityUserUsernameRoute,
  getSecurityApiKeyRoute,
  getSecurityAuthenticateRoute,
  getSecurityEnrollKibanaRoute,
  getSecurityEnrollNodeRoute,
  getSecurityPrivilegeApplicationNameRoute,
  getSecurityPrivilegeApplicationRoute,
  getSecurityPrivilegeBuiltinRoute,
  getSecurityPrivilegeRoute,
  getSecurityProfileHasPrivilegesRoute,
  getSecurityProfileSuggestRoute,
  getSecurityProfileUidRoute,
  getSecurityQueryApiKeyRoute,
  getSecurityQueryRoleRoute,
  getSecurityQueryUserRoute,
  getSecurityRoleMappingNameRoute,
  getSecurityRoleMappingRoute,
  getSecurityRoleNameRoute,
  getSecurityRoleRoute,
  getSecuritySamlMetadataRealmNameRoute,
  getSecurityServiceNamespaceRoute,
  getSecurityServiceNamespaceServiceCredentialRoute,
  getSecurityServiceNamespaceServiceRoute,
  getSecurityServiceRoute,
  getSecuritySettingsRoute,
  getSecurityStatsRoute,
  getSecurityUserHasPrivilegesRoute,
  getSecurityUserPrivilegesRoute,
  getSecurityUserRoute,
  getSecurityUserUserHasPrivilegesRoute,
  getSecurityUserUsernameRoute,
  postSecurityApiKeyBulkUpdateRoute,
  postSecurityApiKeyCloneRoute,
  postSecurityApiKeyGrantRoute,
  postSecurityApiKeyIdsClearCacheRoute,
  postSecurityApiKeyRoute,
  postSecurityCrossClusterApiKeyRoute,
  postSecurityDelegatePkiRoute,
  postSecurityOauth2TokenRoute,
  postSecurityOidcAuthenticateRoute,
  postSecurityOidcLogoutRoute,
  postSecurityOidcPrepareRoute,
  postSecurityPrivilegeApplicationClearCacheRoute,
  postSecurityPrivilegeRoute,
  postSecurityProfileActivateRoute,
  postSecurityProfileHasPrivilegesRoute,
  postSecurityProfileSuggestRoute,
  postSecurityProfileUidDataRoute,
  postSecurityProfileUidDisableRoute,
  postSecurityProfileUidEnableRoute,
  postSecurityQueryApiKeyRoute,
  postSecurityQueryRoleRoute,
  postSecurityQueryUserRoute,
  postSecurityRealmRealmsClearCacheRoute,
  postSecurityRoleMappingNameRoute,
  postSecurityRoleNameClearCacheRoute,
  postSecurityRoleNameRoute,
  postSecurityRoleRoute,
  postSecuritySamlAuthenticateRoute,
  postSecuritySamlCompleteLogoutRoute,
  postSecuritySamlInvalidateRoute,
  postSecuritySamlLogoutRoute,
  postSecuritySamlPrepareRoute,
  postSecurityServiceNamespaceServiceCredentialTokenNameClearCacheRoute,
  postSecurityServiceNamespaceServiceCredentialTokenNameRoute,
  postSecurityServiceNamespaceServiceCredentialTokenRoute,
  postSecurityUserHasPrivilegesRoute,
  postSecurityUserPasswordRoute,
  postSecurityUserUserHasPrivilegesRoute,
  postSecurityUserUsernameDisableRoute,
  postSecurityUserUsernameEnableRoute,
  postSecurityUserUsernamePasswordRoute,
  postSecurityUserUsernameRoute,
  putSecurityApiKeyCloneRoute,
  putSecurityApiKeyIdRoute,
  putSecurityApiKeyRoute,
  putSecurityCrossClusterApiKeyIdRoute,
  putSecurityPrivilegeRoute,
  putSecurityProfileUidDataRoute,
  putSecurityProfileUidDisableRoute,
  putSecurityProfileUidEnableRoute,
  putSecurityRoleMappingNameRoute,
  putSecurityRoleNameRoute,
  putSecurityServiceNamespaceServiceCredentialTokenNameRoute,
  putSecurityServiceNamespaceServiceRoute,
  putSecuritySettingsRoute,
  putSecurityUserPasswordRoute,
  putSecurityUserUsernameDisableRoute,
  putSecurityUserUsernameEnableRoute,
  putSecurityUserUsernamePasswordRoute,
  putSecurityUserUsernameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityHandler = app
  .openapi(postSecurityProfileActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityApiKeyBulkUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecurityUserUsernamePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityUserUsernamePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecurityUserPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityUserPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityApiKeyIdsClearCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityPrivilegeApplicationClearCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityRealmRealmsClearCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityRoleNameClearCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityServiceNamespaceServiceCredentialTokenNameClearCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecurityApiKeyCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityApiKeyCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecurityApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityCrossClusterApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecurityServiceNamespaceServiceCredentialTokenNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityServiceNamespaceServiceCredentialTokenNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityServiceNamespaceServiceCredentialTokenNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityServiceNamespaceServiceCredentialTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityDelegatePkiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityPrivilegeApplicationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityPrivilegeApplicationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecurityRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityRoleMappingNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecurityRoleMappingNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityRoleMappingNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityRoleMappingNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecurityUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityServiceNamespaceServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecurityServiceNamespaceServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityServiceNamespaceServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecurityUserUsernameDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityUserUsernameDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecurityProfileUidDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityProfileUidDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecurityUserUsernameEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityUserUsernameEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecurityProfileUidEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityProfileUidEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityEnrollKibanaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityEnrollNodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityPrivilegeBuiltinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityPrivilegeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecurityPrivilegeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityPrivilegeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityPrivilegeApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityRoleMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityServiceNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityServiceNamespaceServiceCredentialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecuritySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecuritySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityOauth2TokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityOauth2TokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityUserPrivilegesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityProfileUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityApiKeyGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityUserHasPrivilegesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityUserHasPrivilegesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityUserUserHasPrivilegesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityUserUserHasPrivilegesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityProfileHasPrivilegesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityProfileHasPrivilegesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityOidcAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityOidcLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityOidcPrepareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityQueryApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityQueryApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityQueryRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityQueryRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityQueryUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityQueryUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecuritySamlAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecuritySamlCompleteLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecuritySamlInvalidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecuritySamlLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecuritySamlPrepareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecuritySamlMetadataRealmNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityProfileSuggestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityProfileSuggestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecurityApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecurityCrossClusterApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecurityProfileUidDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityProfileUidDataRoute, (c) => {
    throw new Error('Not implemented')
  })
