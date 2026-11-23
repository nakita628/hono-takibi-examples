import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthAlicloudMountPathRoleRoleRoute,
  deleteAuthApproleMountPathRoleRoleNameBindSecretIdRoute,
  deleteAuthApproleMountPathRoleRoleNameBoundCidrListRoute,
  deleteAuthApproleMountPathRoleRoleNamePeriodRoute,
  deleteAuthApproleMountPathRoleRoleNamePoliciesRoute,
  deleteAuthApproleMountPathRoleRoleNameRoute,
  deleteAuthApproleMountPathRoleRoleNameSecretIdAccessorDestroyRoute,
  deleteAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRoute,
  deleteAuthApproleMountPathRoleRoleNameSecretIdDestroyRoute,
  deleteAuthApproleMountPathRoleRoleNameSecretIdNumUsesRoute,
  deleteAuthApproleMountPathRoleRoleNameSecretIdTtlRoute,
  deleteAuthApproleMountPathRoleRoleNameTokenBoundCidrsRoute,
  deleteAuthApproleMountPathRoleRoleNameTokenMaxTtlRoute,
  deleteAuthApproleMountPathRoleRoleNameTokenNumUsesRoute,
  deleteAuthApproleMountPathRoleRoleNameTokenTtlRoute,
  deleteAuthAwsMountPathConfigCertificateCertNameRoute,
  deleteAuthAwsMountPathConfigClientRoute,
  deleteAuthAwsMountPathConfigStsAccountIdRoute,
  deleteAuthAwsMountPathConfigTidyIdentityAccesslistRoute,
  deleteAuthAwsMountPathConfigTidyIdentityWhitelistRoute,
  deleteAuthAwsMountPathConfigTidyRoletagBlacklistRoute,
  deleteAuthAwsMountPathConfigTidyRoletagDenylistRoute,
  deleteAuthAwsMountPathIdentityAccesslistInstanceIdRoute,
  deleteAuthAwsMountPathIdentityWhitelistInstanceIdRoute,
  deleteAuthAwsMountPathRoleRoleRoute,
  deleteAuthAwsMountPathRoletagBlacklistRoleTagRoute,
  deleteAuthAwsMountPathRoletagDenylistRoleTagRoute,
  deleteAuthAzureMountPathConfigRoute,
  deleteAuthAzureMountPathRoleNameRoute,
  deleteAuthCertMountPathCertsNameRoute,
  deleteAuthCertMountPathCrlsNameRoute,
  deleteAuthCfMountPathConfigRoute,
  deleteAuthCfMountPathRolesRoleRoute,
  deleteAuthGcpMountPathRoleNameRoute,
  deleteAuthGithubMountPathMapTeamsKeyRoute,
  deleteAuthGithubMountPathMapUsersKeyRoute,
  deleteAuthJwtMountPathRoleNameRoute,
  deleteAuthKerberosMountPathGroupsNameRoute,
  deleteAuthKubernetesMountPathRoleNameRoute,
  deleteAuthLdapMountPathGroupsNameRoute,
  deleteAuthLdapMountPathUsersNameRoute,
  deleteAuthOciMountPathConfigRoute,
  deleteAuthOciMountPathRoleRoleRoute,
  deleteAuthOktaMountPathGroupsNameRoute,
  deleteAuthOktaMountPathUsersNameRoute,
  deleteAuthRadiusMountPathUsersNameRoute,
  deleteAuthTokenRolesRoleNameRoute,
  deleteAuthUserpassMountPathUsersUsernameRoute,
  getAuthAlicloudMountPathRoleIndexRoute,
  getAuthAlicloudMountPathRoleRoleRoute,
  getAuthAlicloudMountPathRolesIndexRoute,
  getAuthApproleMountPathRoleIndexRoute,
  getAuthApproleMountPathRoleRoleNameBindSecretIdRoute,
  getAuthApproleMountPathRoleRoleNameBoundCidrListRoute,
  getAuthApproleMountPathRoleRoleNameLocalSecretIdsRoute,
  getAuthApproleMountPathRoleRoleNamePeriodRoute,
  getAuthApproleMountPathRoleRoleNamePoliciesRoute,
  getAuthApproleMountPathRoleRoleNameRoleIdRoute,
  getAuthApproleMountPathRoleRoleNameRoute,
  getAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRoute,
  getAuthApproleMountPathRoleRoleNameSecretIdIndexRoute,
  getAuthApproleMountPathRoleRoleNameSecretIdNumUsesRoute,
  getAuthApproleMountPathRoleRoleNameSecretIdTtlRoute,
  getAuthApproleMountPathRoleRoleNameTokenBoundCidrsRoute,
  getAuthApproleMountPathRoleRoleNameTokenMaxTtlRoute,
  getAuthApproleMountPathRoleRoleNameTokenNumUsesRoute,
  getAuthApproleMountPathRoleRoleNameTokenTtlRoute,
  getAuthAwsMountPathConfigCertificateCertNameRoute,
  getAuthAwsMountPathConfigCertificatesIndexRoute,
  getAuthAwsMountPathConfigClientRoute,
  getAuthAwsMountPathConfigIdentityRoute,
  getAuthAwsMountPathConfigStsAccountIdRoute,
  getAuthAwsMountPathConfigStsIndexRoute,
  getAuthAwsMountPathConfigTidyIdentityAccesslistRoute,
  getAuthAwsMountPathConfigTidyIdentityWhitelistRoute,
  getAuthAwsMountPathConfigTidyRoletagBlacklistRoute,
  getAuthAwsMountPathConfigTidyRoletagDenylistRoute,
  getAuthAwsMountPathIdentityAccesslistIndexRoute,
  getAuthAwsMountPathIdentityAccesslistInstanceIdRoute,
  getAuthAwsMountPathIdentityWhitelistIndexRoute,
  getAuthAwsMountPathIdentityWhitelistInstanceIdRoute,
  getAuthAwsMountPathRoleIndexRoute,
  getAuthAwsMountPathRoleRoleRoute,
  getAuthAwsMountPathRolesIndexRoute,
  getAuthAwsMountPathRoletagBlacklistIndexRoute,
  getAuthAwsMountPathRoletagBlacklistRoleTagRoute,
  getAuthAwsMountPathRoletagDenylistIndexRoute,
  getAuthAwsMountPathRoletagDenylistRoleTagRoute,
  getAuthAzureMountPathConfigRoute,
  getAuthAzureMountPathRoleIndexRoute,
  getAuthAzureMountPathRoleNameRoute,
  getAuthCentrifyMountPathConfigRoute,
  getAuthCertMountPathCertsIndexRoute,
  getAuthCertMountPathCertsNameRoute,
  getAuthCertMountPathConfigRoute,
  getAuthCertMountPathCrlsIndexRoute,
  getAuthCertMountPathCrlsNameRoute,
  getAuthCfMountPathConfigRoute,
  getAuthCfMountPathRolesIndexRoute,
  getAuthCfMountPathRolesRoleRoute,
  getAuthGcpMountPathConfigRoute,
  getAuthGcpMountPathRoleIndexRoute,
  getAuthGcpMountPathRoleNameRoute,
  getAuthGcpMountPathRolesIndexRoute,
  getAuthGithubMountPathConfigRoute,
  getAuthGithubMountPathMapTeamsIndexRoute,
  getAuthGithubMountPathMapTeamsKeyRoute,
  getAuthGithubMountPathMapTeamsRoute,
  getAuthGithubMountPathMapUsersIndexRoute,
  getAuthGithubMountPathMapUsersKeyRoute,
  getAuthGithubMountPathMapUsersRoute,
  getAuthJwtMountPathConfigRoute,
  getAuthJwtMountPathOidcCallbackRoute,
  getAuthJwtMountPathRoleIndexRoute,
  getAuthJwtMountPathRoleNameRoute,
  getAuthKerberosMountPathConfigLdapRoute,
  getAuthKerberosMountPathConfigRoute,
  getAuthKerberosMountPathGroupsIndexRoute,
  getAuthKerberosMountPathGroupsNameRoute,
  getAuthKerberosMountPathLoginRoute,
  getAuthKubernetesMountPathConfigRoute,
  getAuthKubernetesMountPathRoleIndexRoute,
  getAuthKubernetesMountPathRoleNameRoute,
  getAuthLdapMountPathConfigRoute,
  getAuthLdapMountPathGroupsIndexRoute,
  getAuthLdapMountPathGroupsNameRoute,
  getAuthLdapMountPathUsersIndexRoute,
  getAuthLdapMountPathUsersNameRoute,
  getAuthOciMountPathConfigRoute,
  getAuthOciMountPathRoleIndexRoute,
  getAuthOciMountPathRoleRoleRoute,
  getAuthOktaMountPathConfigRoute,
  getAuthOktaMountPathGroupsIndexRoute,
  getAuthOktaMountPathGroupsNameRoute,
  getAuthOktaMountPathUsersIndexRoute,
  getAuthOktaMountPathUsersNameRoute,
  getAuthOktaMountPathVerifyNonceRoute,
  getAuthRadiusMountPathConfigRoute,
  getAuthRadiusMountPathUsersIndexRoute,
  getAuthRadiusMountPathUsersNameRoute,
  getAuthTokenAccessorsIndexRoute,
  getAuthTokenLookupRoute,
  getAuthTokenLookupSelfRoute,
  getAuthTokenRolesIndexRoute,
  getAuthTokenRolesRoleNameRoute,
  getAuthUserpassMountPathUsersIndexRoute,
  getAuthUserpassMountPathUsersUsernameRoute,
  postAuthAlicloudMountPathLoginRoute,
  postAuthAlicloudMountPathRoleRoleRoute,
  postAuthApproleMountPathLoginRoute,
  postAuthApproleMountPathRoleRoleNameBindSecretIdRoute,
  postAuthApproleMountPathRoleRoleNameBoundCidrListRoute,
  postAuthApproleMountPathRoleRoleNameCustomSecretIdRoute,
  postAuthApproleMountPathRoleRoleNamePeriodRoute,
  postAuthApproleMountPathRoleRoleNamePoliciesRoute,
  postAuthApproleMountPathRoleRoleNameRoleIdRoute,
  postAuthApproleMountPathRoleRoleNameRoute,
  postAuthApproleMountPathRoleRoleNameSecretIdAccessorDestroyRoute,
  postAuthApproleMountPathRoleRoleNameSecretIdAccessorLookupRoute,
  postAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRoute,
  postAuthApproleMountPathRoleRoleNameSecretIdDestroyRoute,
  postAuthApproleMountPathRoleRoleNameSecretIdLookupRoute,
  postAuthApproleMountPathRoleRoleNameSecretIdNumUsesRoute,
  postAuthApproleMountPathRoleRoleNameSecretIdRoute,
  postAuthApproleMountPathRoleRoleNameSecretIdTtlRoute,
  postAuthApproleMountPathRoleRoleNameTokenBoundCidrsRoute,
  postAuthApproleMountPathRoleRoleNameTokenMaxTtlRoute,
  postAuthApproleMountPathRoleRoleNameTokenNumUsesRoute,
  postAuthApproleMountPathRoleRoleNameTokenTtlRoute,
  postAuthApproleMountPathTidySecretIdRoute,
  postAuthAwsMountPathConfigCertificateCertNameRoute,
  postAuthAwsMountPathConfigClientRoute,
  postAuthAwsMountPathConfigIdentityRoute,
  postAuthAwsMountPathConfigRotateRootRoute,
  postAuthAwsMountPathConfigStsAccountIdRoute,
  postAuthAwsMountPathConfigTidyIdentityAccesslistRoute,
  postAuthAwsMountPathConfigTidyIdentityWhitelistRoute,
  postAuthAwsMountPathConfigTidyRoletagBlacklistRoute,
  postAuthAwsMountPathConfigTidyRoletagDenylistRoute,
  postAuthAwsMountPathLoginRoute,
  postAuthAwsMountPathRoleRoleRoute,
  postAuthAwsMountPathRoleRoleTagRoute,
  postAuthAwsMountPathRoletagBlacklistRoleTagRoute,
  postAuthAwsMountPathRoletagDenylistRoleTagRoute,
  postAuthAwsMountPathTidyIdentityAccesslistRoute,
  postAuthAwsMountPathTidyIdentityWhitelistRoute,
  postAuthAwsMountPathTidyRoletagBlacklistRoute,
  postAuthAwsMountPathTidyRoletagDenylistRoute,
  postAuthAzureMountPathConfigRoute,
  postAuthAzureMountPathLoginRoute,
  postAuthAzureMountPathRoleNameRoute,
  postAuthAzureMountPathRotateRootRoute,
  postAuthCentrifyMountPathConfigRoute,
  postAuthCentrifyMountPathLoginRoute,
  postAuthCertMountPathCertsNameRoute,
  postAuthCertMountPathConfigRoute,
  postAuthCertMountPathCrlsNameRoute,
  postAuthCertMountPathLoginRoute,
  postAuthCfMountPathConfigRoute,
  postAuthCfMountPathLoginRoute,
  postAuthCfMountPathRolesRoleRoute,
  postAuthGcpMountPathConfigRoute,
  postAuthGcpMountPathLoginRoute,
  postAuthGcpMountPathRoleNameLabelsRoute,
  postAuthGcpMountPathRoleNameRoute,
  postAuthGcpMountPathRoleNameServiceAccountsRoute,
  postAuthGithubMountPathConfigRoute,
  postAuthGithubMountPathLoginRoute,
  postAuthGithubMountPathMapTeamsKeyRoute,
  postAuthGithubMountPathMapUsersKeyRoute,
  postAuthJwtMountPathConfigRoute,
  postAuthJwtMountPathLoginRoute,
  postAuthJwtMountPathOidcAuthUrlRoute,
  postAuthJwtMountPathOidcCallbackRoute,
  postAuthJwtMountPathRoleNameRoute,
  postAuthKerberosMountPathConfigLdapRoute,
  postAuthKerberosMountPathConfigRoute,
  postAuthKerberosMountPathGroupsNameRoute,
  postAuthKerberosMountPathLoginRoute,
  postAuthKubernetesMountPathConfigRoute,
  postAuthKubernetesMountPathLoginRoute,
  postAuthKubernetesMountPathRoleNameRoute,
  postAuthLdapMountPathConfigRoute,
  postAuthLdapMountPathGroupsNameRoute,
  postAuthLdapMountPathLoginUsernameRoute,
  postAuthLdapMountPathUsersNameRoute,
  postAuthOciMountPathConfigRoute,
  postAuthOciMountPathLoginRoleRoute,
  postAuthOciMountPathRoleRoleRoute,
  postAuthOktaMountPathConfigRoute,
  postAuthOktaMountPathGroupsNameRoute,
  postAuthOktaMountPathLoginUsernameRoute,
  postAuthOktaMountPathUsersNameRoute,
  postAuthRadiusMountPathConfigRoute,
  postAuthRadiusMountPathLoginRoute,
  postAuthRadiusMountPathLoginUrlusernameRoute,
  postAuthRadiusMountPathUsersNameRoute,
  postAuthTokenCreateOrphanRoute,
  postAuthTokenCreateRoleNameRoute,
  postAuthTokenCreateRoute,
  postAuthTokenLookupAccessorRoute,
  postAuthTokenLookupRoute,
  postAuthTokenLookupSelfRoute,
  postAuthTokenRenewAccessorRoute,
  postAuthTokenRenewRoute,
  postAuthTokenRenewSelfRoute,
  postAuthTokenRevokeAccessorRoute,
  postAuthTokenRevokeOrphanRoute,
  postAuthTokenRevokeRoute,
  postAuthTokenRevokeSelfRoute,
  postAuthTokenRolesRoleNameRoute,
  postAuthTokenTidyRoute,
  postAuthUserpassMountPathLoginUsernameRoute,
  postAuthUserpassMountPathUsersUsernamePasswordRoute,
  postAuthUserpassMountPathUsersUsernamePoliciesRoute,
  postAuthUserpassMountPathUsersUsernameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(getAuthTokenAccessorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenCreateOrphanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenCreateRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthTokenLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenLookupAccessorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthTokenLookupSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenLookupSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenRenewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenRenewAccessorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenRenewSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenRevokeAccessorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenRevokeOrphanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenRevokeSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthTokenRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthTokenRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthTokenRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenTidyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAlicloudMountPathLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAlicloudMountPathRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAlicloudMountPathRoleRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAlicloudMountPathRoleRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthAlicloudMountPathRoleRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAlicloudMountPathRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApproleMountPathLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthApproleMountPathRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthApproleMountPathRoleRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApproleMountPathRoleRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthApproleMountPathRoleRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthApproleMountPathRoleRoleNameBindSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApproleMountPathRoleRoleNameBindSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthApproleMountPathRoleRoleNameBindSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthApproleMountPathRoleRoleNameBoundCidrListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApproleMountPathRoleRoleNameBoundCidrListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthApproleMountPathRoleRoleNameBoundCidrListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApproleMountPathRoleRoleNameCustomSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthApproleMountPathRoleRoleNameLocalSecretIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthApproleMountPathRoleRoleNamePeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApproleMountPathRoleRoleNamePeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthApproleMountPathRoleRoleNamePeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthApproleMountPathRoleRoleNamePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApproleMountPathRoleRoleNamePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthApproleMountPathRoleRoleNamePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthApproleMountPathRoleRoleNameRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApproleMountPathRoleRoleNameRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApproleMountPathRoleRoleNameSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApproleMountPathRoleRoleNameSecretIdAccessorDestroyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthApproleMountPathRoleRoleNameSecretIdAccessorDestroyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApproleMountPathRoleRoleNameSecretIdAccessorLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthApproleMountPathRoleRoleNameSecretIdNumUsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApproleMountPathRoleRoleNameSecretIdNumUsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthApproleMountPathRoleRoleNameSecretIdNumUsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthApproleMountPathRoleRoleNameSecretIdTtlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApproleMountPathRoleRoleNameSecretIdTtlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthApproleMountPathRoleRoleNameSecretIdTtlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthApproleMountPathRoleRoleNameSecretIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApproleMountPathRoleRoleNameSecretIdDestroyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthApproleMountPathRoleRoleNameSecretIdDestroyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApproleMountPathRoleRoleNameSecretIdLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthApproleMountPathRoleRoleNameTokenBoundCidrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApproleMountPathRoleRoleNameTokenBoundCidrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthApproleMountPathRoleRoleNameTokenBoundCidrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthApproleMountPathRoleRoleNameTokenMaxTtlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApproleMountPathRoleRoleNameTokenMaxTtlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthApproleMountPathRoleRoleNameTokenMaxTtlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthApproleMountPathRoleRoleNameTokenNumUsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApproleMountPathRoleRoleNameTokenNumUsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthApproleMountPathRoleRoleNameTokenNumUsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthApproleMountPathRoleRoleNameTokenTtlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApproleMountPathRoleRoleNameTokenTtlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthApproleMountPathRoleRoleNameTokenTtlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthApproleMountPathTidySecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAwsMountPathConfigCertificateCertNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAwsMountPathConfigCertificateCertNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthAwsMountPathConfigCertificateCertNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAwsMountPathConfigCertificatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAwsMountPathConfigClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAwsMountPathConfigClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthAwsMountPathConfigClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAwsMountPathConfigIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAwsMountPathConfigIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAwsMountPathConfigRotateRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAwsMountPathConfigStsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAwsMountPathConfigStsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAwsMountPathConfigStsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthAwsMountPathConfigStsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAwsMountPathConfigTidyIdentityAccesslistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAwsMountPathConfigTidyIdentityAccesslistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthAwsMountPathConfigTidyIdentityAccesslistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAwsMountPathConfigTidyIdentityWhitelistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAwsMountPathConfigTidyIdentityWhitelistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthAwsMountPathConfigTidyIdentityWhitelistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAwsMountPathConfigTidyRoletagBlacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAwsMountPathConfigTidyRoletagBlacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthAwsMountPathConfigTidyRoletagBlacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAwsMountPathConfigTidyRoletagDenylistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAwsMountPathConfigTidyRoletagDenylistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthAwsMountPathConfigTidyRoletagDenylistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAwsMountPathIdentityAccesslistIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAwsMountPathIdentityAccesslistInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthAwsMountPathIdentityAccesslistInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAwsMountPathIdentityWhitelistIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAwsMountPathIdentityWhitelistInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthAwsMountPathIdentityWhitelistInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAwsMountPathLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAwsMountPathRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAwsMountPathRoleRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAwsMountPathRoleRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthAwsMountPathRoleRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAwsMountPathRoleRoleTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAwsMountPathRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAwsMountPathRoletagBlacklistIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAwsMountPathRoletagBlacklistRoleTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAwsMountPathRoletagBlacklistRoleTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthAwsMountPathRoletagBlacklistRoleTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAwsMountPathRoletagDenylistIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAwsMountPathRoletagDenylistRoleTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAwsMountPathRoletagDenylistRoleTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthAwsMountPathRoletagDenylistRoleTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAwsMountPathTidyIdentityAccesslistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAwsMountPathTidyIdentityWhitelistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAwsMountPathTidyRoletagBlacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAwsMountPathTidyRoletagDenylistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAzureMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAzureMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthAzureMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAzureMountPathLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAzureMountPathRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthAzureMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAzureMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthAzureMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthAzureMountPathRotateRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthCentrifyMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthCentrifyMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthCentrifyMountPathLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthCertMountPathCertsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthCertMountPathCertsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthCertMountPathCertsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthCertMountPathCertsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthCertMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthCertMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthCertMountPathCrlsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthCertMountPathCrlsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthCertMountPathCrlsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthCertMountPathCrlsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthCertMountPathLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthCfMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthCfMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthCfMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthCfMountPathLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthCfMountPathRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthCfMountPathRolesRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthCfMountPathRolesRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthCfMountPathRolesRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthGcpMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthGcpMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthGcpMountPathLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthGcpMountPathRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthGcpMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthGcpMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthGcpMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthGcpMountPathRoleNameLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthGcpMountPathRoleNameServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthGcpMountPathRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthGithubMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthGithubMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthGithubMountPathLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthGithubMountPathMapTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthGithubMountPathMapTeamsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthGithubMountPathMapTeamsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthGithubMountPathMapTeamsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthGithubMountPathMapTeamsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthGithubMountPathMapUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthGithubMountPathMapUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthGithubMountPathMapUsersKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthGithubMountPathMapUsersKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthGithubMountPathMapUsersKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthJwtMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthJwtMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthJwtMountPathLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthJwtMountPathOidcAuthUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthJwtMountPathOidcCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthJwtMountPathOidcCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthJwtMountPathRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthJwtMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthJwtMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthJwtMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthKerberosMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthKerberosMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthKerberosMountPathConfigLdapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthKerberosMountPathConfigLdapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthKerberosMountPathGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthKerberosMountPathGroupsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthKerberosMountPathGroupsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthKerberosMountPathGroupsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthKerberosMountPathLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthKerberosMountPathLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthKubernetesMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthKubernetesMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthKubernetesMountPathLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthKubernetesMountPathRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthKubernetesMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthKubernetesMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthKubernetesMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthLdapMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthLdapMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthLdapMountPathGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthLdapMountPathGroupsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthLdapMountPathGroupsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthLdapMountPathGroupsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthLdapMountPathLoginUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthLdapMountPathUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthLdapMountPathUsersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthLdapMountPathUsersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthLdapMountPathUsersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthOciMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthOciMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthOciMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthOciMountPathLoginRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthOciMountPathRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthOciMountPathRoleRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthOciMountPathRoleRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthOciMountPathRoleRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthOktaMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthOktaMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthOktaMountPathGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthOktaMountPathGroupsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthOktaMountPathGroupsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthOktaMountPathGroupsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthOktaMountPathLoginUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthOktaMountPathUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthOktaMountPathUsersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthOktaMountPathUsersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthOktaMountPathUsersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthOktaMountPathVerifyNonceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthRadiusMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthRadiusMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthRadiusMountPathLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthRadiusMountPathLoginUrlusernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthRadiusMountPathUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthRadiusMountPathUsersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthRadiusMountPathUsersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthRadiusMountPathUsersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthUserpassMountPathLoginUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthUserpassMountPathUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthUserpassMountPathUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthUserpassMountPathUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthUserpassMountPathUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthUserpassMountPathUsersUsernamePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthUserpassMountPathUsersUsernamePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
