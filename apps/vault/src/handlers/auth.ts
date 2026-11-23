import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getAuthTokenAccessorsIndexRouteHandler: RouteHandler<
  typeof getAuthTokenAccessorsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthTokenCreateRouteHandler: RouteHandler<
  typeof postAuthTokenCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthTokenCreateOrphanRouteHandler: RouteHandler<
  typeof postAuthTokenCreateOrphanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthTokenCreateRoleNameRouteHandler: RouteHandler<
  typeof postAuthTokenCreateRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthTokenLookupRouteHandler: RouteHandler<typeof getAuthTokenLookupRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAuthTokenLookupRouteHandler: RouteHandler<
  typeof postAuthTokenLookupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthTokenLookupAccessorRouteHandler: RouteHandler<
  typeof postAuthTokenLookupAccessorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthTokenLookupSelfRouteHandler: RouteHandler<
  typeof getAuthTokenLookupSelfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthTokenLookupSelfRouteHandler: RouteHandler<
  typeof postAuthTokenLookupSelfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthTokenRenewRouteHandler: RouteHandler<typeof postAuthTokenRenewRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAuthTokenRenewAccessorRouteHandler: RouteHandler<
  typeof postAuthTokenRenewAccessorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthTokenRenewSelfRouteHandler: RouteHandler<
  typeof postAuthTokenRenewSelfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthTokenRevokeRouteHandler: RouteHandler<
  typeof postAuthTokenRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthTokenRevokeAccessorRouteHandler: RouteHandler<
  typeof postAuthTokenRevokeAccessorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthTokenRevokeOrphanRouteHandler: RouteHandler<
  typeof postAuthTokenRevokeOrphanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthTokenRevokeSelfRouteHandler: RouteHandler<
  typeof postAuthTokenRevokeSelfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthTokenRolesIndexRouteHandler: RouteHandler<
  typeof getAuthTokenRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthTokenRolesRoleNameRouteHandler: RouteHandler<
  typeof getAuthTokenRolesRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthTokenRolesRoleNameRouteHandler: RouteHandler<
  typeof postAuthTokenRolesRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthTokenRolesRoleNameRouteHandler: RouteHandler<
  typeof deleteAuthTokenRolesRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthTokenTidyRouteHandler: RouteHandler<typeof postAuthTokenTidyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAuthAlicloudMountPathLoginRouteHandler: RouteHandler<
  typeof postAuthAlicloudMountPathLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAlicloudMountPathRoleIndexRouteHandler: RouteHandler<
  typeof getAuthAlicloudMountPathRoleIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAlicloudMountPathRoleRoleRouteHandler: RouteHandler<
  typeof getAuthAlicloudMountPathRoleRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthAlicloudMountPathRoleRoleRouteHandler: RouteHandler<
  typeof postAuthAlicloudMountPathRoleRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthAlicloudMountPathRoleRoleRouteHandler: RouteHandler<
  typeof deleteAuthAlicloudMountPathRoleRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAlicloudMountPathRolesIndexRouteHandler: RouteHandler<
  typeof getAuthAlicloudMountPathRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApproleMountPathLoginRouteHandler: RouteHandler<
  typeof postAuthApproleMountPathLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthApproleMountPathRoleIndexRouteHandler: RouteHandler<
  typeof getAuthApproleMountPathRoleIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthApproleMountPathRoleRoleNameRouteHandler: RouteHandler<
  typeof getAuthApproleMountPathRoleRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApproleMountPathRoleRoleNameRouteHandler: RouteHandler<
  typeof postAuthApproleMountPathRoleRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthApproleMountPathRoleRoleNameRouteHandler: RouteHandler<
  typeof deleteAuthApproleMountPathRoleRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthApproleMountPathRoleRoleNameBindSecretIdRouteHandler: RouteHandler<
  typeof getAuthApproleMountPathRoleRoleNameBindSecretIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApproleMountPathRoleRoleNameBindSecretIdRouteHandler: RouteHandler<
  typeof postAuthApproleMountPathRoleRoleNameBindSecretIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthApproleMountPathRoleRoleNameBindSecretIdRouteHandler: RouteHandler<
  typeof deleteAuthApproleMountPathRoleRoleNameBindSecretIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthApproleMountPathRoleRoleNameBoundCidrListRouteHandler: RouteHandler<
  typeof getAuthApproleMountPathRoleRoleNameBoundCidrListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApproleMountPathRoleRoleNameBoundCidrListRouteHandler: RouteHandler<
  typeof postAuthApproleMountPathRoleRoleNameBoundCidrListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthApproleMountPathRoleRoleNameBoundCidrListRouteHandler: RouteHandler<
  typeof deleteAuthApproleMountPathRoleRoleNameBoundCidrListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApproleMountPathRoleRoleNameCustomSecretIdRouteHandler: RouteHandler<
  typeof postAuthApproleMountPathRoleRoleNameCustomSecretIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthApproleMountPathRoleRoleNameLocalSecretIdsRouteHandler: RouteHandler<
  typeof getAuthApproleMountPathRoleRoleNameLocalSecretIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthApproleMountPathRoleRoleNamePeriodRouteHandler: RouteHandler<
  typeof getAuthApproleMountPathRoleRoleNamePeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApproleMountPathRoleRoleNamePeriodRouteHandler: RouteHandler<
  typeof postAuthApproleMountPathRoleRoleNamePeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthApproleMountPathRoleRoleNamePeriodRouteHandler: RouteHandler<
  typeof deleteAuthApproleMountPathRoleRoleNamePeriodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthApproleMountPathRoleRoleNamePoliciesRouteHandler: RouteHandler<
  typeof getAuthApproleMountPathRoleRoleNamePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApproleMountPathRoleRoleNamePoliciesRouteHandler: RouteHandler<
  typeof postAuthApproleMountPathRoleRoleNamePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthApproleMountPathRoleRoleNamePoliciesRouteHandler: RouteHandler<
  typeof deleteAuthApproleMountPathRoleRoleNamePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthApproleMountPathRoleRoleNameRoleIdRouteHandler: RouteHandler<
  typeof getAuthApproleMountPathRoleRoleNameRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApproleMountPathRoleRoleNameRoleIdRouteHandler: RouteHandler<
  typeof postAuthApproleMountPathRoleRoleNameRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApproleMountPathRoleRoleNameSecretIdRouteHandler: RouteHandler<
  typeof postAuthApproleMountPathRoleRoleNameSecretIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApproleMountPathRoleRoleNameSecretIdAccessorDestroyRouteHandler: RouteHandler<
  typeof postAuthApproleMountPathRoleRoleNameSecretIdAccessorDestroyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthApproleMountPathRoleRoleNameSecretIdAccessorDestroyRouteHandler: RouteHandler<
  typeof deleteAuthApproleMountPathRoleRoleNameSecretIdAccessorDestroyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApproleMountPathRoleRoleNameSecretIdAccessorLookupRouteHandler: RouteHandler<
  typeof postAuthApproleMountPathRoleRoleNameSecretIdAccessorLookupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRouteHandler: RouteHandler<
  typeof getAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRouteHandler: RouteHandler<
  typeof postAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRouteHandler: RouteHandler<
  typeof deleteAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthApproleMountPathRoleRoleNameSecretIdNumUsesRouteHandler: RouteHandler<
  typeof getAuthApproleMountPathRoleRoleNameSecretIdNumUsesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApproleMountPathRoleRoleNameSecretIdNumUsesRouteHandler: RouteHandler<
  typeof postAuthApproleMountPathRoleRoleNameSecretIdNumUsesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthApproleMountPathRoleRoleNameSecretIdNumUsesRouteHandler: RouteHandler<
  typeof deleteAuthApproleMountPathRoleRoleNameSecretIdNumUsesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthApproleMountPathRoleRoleNameSecretIdTtlRouteHandler: RouteHandler<
  typeof getAuthApproleMountPathRoleRoleNameSecretIdTtlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApproleMountPathRoleRoleNameSecretIdTtlRouteHandler: RouteHandler<
  typeof postAuthApproleMountPathRoleRoleNameSecretIdTtlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthApproleMountPathRoleRoleNameSecretIdTtlRouteHandler: RouteHandler<
  typeof deleteAuthApproleMountPathRoleRoleNameSecretIdTtlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthApproleMountPathRoleRoleNameSecretIdIndexRouteHandler: RouteHandler<
  typeof getAuthApproleMountPathRoleRoleNameSecretIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApproleMountPathRoleRoleNameSecretIdDestroyRouteHandler: RouteHandler<
  typeof postAuthApproleMountPathRoleRoleNameSecretIdDestroyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthApproleMountPathRoleRoleNameSecretIdDestroyRouteHandler: RouteHandler<
  typeof deleteAuthApproleMountPathRoleRoleNameSecretIdDestroyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApproleMountPathRoleRoleNameSecretIdLookupRouteHandler: RouteHandler<
  typeof postAuthApproleMountPathRoleRoleNameSecretIdLookupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthApproleMountPathRoleRoleNameTokenBoundCidrsRouteHandler: RouteHandler<
  typeof getAuthApproleMountPathRoleRoleNameTokenBoundCidrsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApproleMountPathRoleRoleNameTokenBoundCidrsRouteHandler: RouteHandler<
  typeof postAuthApproleMountPathRoleRoleNameTokenBoundCidrsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthApproleMountPathRoleRoleNameTokenBoundCidrsRouteHandler: RouteHandler<
  typeof deleteAuthApproleMountPathRoleRoleNameTokenBoundCidrsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthApproleMountPathRoleRoleNameTokenMaxTtlRouteHandler: RouteHandler<
  typeof getAuthApproleMountPathRoleRoleNameTokenMaxTtlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApproleMountPathRoleRoleNameTokenMaxTtlRouteHandler: RouteHandler<
  typeof postAuthApproleMountPathRoleRoleNameTokenMaxTtlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthApproleMountPathRoleRoleNameTokenMaxTtlRouteHandler: RouteHandler<
  typeof deleteAuthApproleMountPathRoleRoleNameTokenMaxTtlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthApproleMountPathRoleRoleNameTokenNumUsesRouteHandler: RouteHandler<
  typeof getAuthApproleMountPathRoleRoleNameTokenNumUsesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApproleMountPathRoleRoleNameTokenNumUsesRouteHandler: RouteHandler<
  typeof postAuthApproleMountPathRoleRoleNameTokenNumUsesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthApproleMountPathRoleRoleNameTokenNumUsesRouteHandler: RouteHandler<
  typeof deleteAuthApproleMountPathRoleRoleNameTokenNumUsesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthApproleMountPathRoleRoleNameTokenTtlRouteHandler: RouteHandler<
  typeof getAuthApproleMountPathRoleRoleNameTokenTtlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApproleMountPathRoleRoleNameTokenTtlRouteHandler: RouteHandler<
  typeof postAuthApproleMountPathRoleRoleNameTokenTtlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthApproleMountPathRoleRoleNameTokenTtlRouteHandler: RouteHandler<
  typeof deleteAuthApproleMountPathRoleRoleNameTokenTtlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApproleMountPathTidySecretIdRouteHandler: RouteHandler<
  typeof postAuthApproleMountPathTidySecretIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAwsMountPathConfigCertificateCertNameRouteHandler: RouteHandler<
  typeof getAuthAwsMountPathConfigCertificateCertNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthAwsMountPathConfigCertificateCertNameRouteHandler: RouteHandler<
  typeof postAuthAwsMountPathConfigCertificateCertNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthAwsMountPathConfigCertificateCertNameRouteHandler: RouteHandler<
  typeof deleteAuthAwsMountPathConfigCertificateCertNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAwsMountPathConfigCertificatesIndexRouteHandler: RouteHandler<
  typeof getAuthAwsMountPathConfigCertificatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAwsMountPathConfigClientRouteHandler: RouteHandler<
  typeof getAuthAwsMountPathConfigClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthAwsMountPathConfigClientRouteHandler: RouteHandler<
  typeof postAuthAwsMountPathConfigClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthAwsMountPathConfigClientRouteHandler: RouteHandler<
  typeof deleteAuthAwsMountPathConfigClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAwsMountPathConfigIdentityRouteHandler: RouteHandler<
  typeof getAuthAwsMountPathConfigIdentityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthAwsMountPathConfigIdentityRouteHandler: RouteHandler<
  typeof postAuthAwsMountPathConfigIdentityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthAwsMountPathConfigRotateRootRouteHandler: RouteHandler<
  typeof postAuthAwsMountPathConfigRotateRootRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAwsMountPathConfigStsIndexRouteHandler: RouteHandler<
  typeof getAuthAwsMountPathConfigStsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAwsMountPathConfigStsAccountIdRouteHandler: RouteHandler<
  typeof getAuthAwsMountPathConfigStsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthAwsMountPathConfigStsAccountIdRouteHandler: RouteHandler<
  typeof postAuthAwsMountPathConfigStsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthAwsMountPathConfigStsAccountIdRouteHandler: RouteHandler<
  typeof deleteAuthAwsMountPathConfigStsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAwsMountPathConfigTidyIdentityAccesslistRouteHandler: RouteHandler<
  typeof getAuthAwsMountPathConfigTidyIdentityAccesslistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthAwsMountPathConfigTidyIdentityAccesslistRouteHandler: RouteHandler<
  typeof postAuthAwsMountPathConfigTidyIdentityAccesslistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthAwsMountPathConfigTidyIdentityAccesslistRouteHandler: RouteHandler<
  typeof deleteAuthAwsMountPathConfigTidyIdentityAccesslistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAwsMountPathConfigTidyIdentityWhitelistRouteHandler: RouteHandler<
  typeof getAuthAwsMountPathConfigTidyIdentityWhitelistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthAwsMountPathConfigTidyIdentityWhitelistRouteHandler: RouteHandler<
  typeof postAuthAwsMountPathConfigTidyIdentityWhitelistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthAwsMountPathConfigTidyIdentityWhitelistRouteHandler: RouteHandler<
  typeof deleteAuthAwsMountPathConfigTidyIdentityWhitelistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAwsMountPathConfigTidyRoletagBlacklistRouteHandler: RouteHandler<
  typeof getAuthAwsMountPathConfigTidyRoletagBlacklistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthAwsMountPathConfigTidyRoletagBlacklistRouteHandler: RouteHandler<
  typeof postAuthAwsMountPathConfigTidyRoletagBlacklistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthAwsMountPathConfigTidyRoletagBlacklistRouteHandler: RouteHandler<
  typeof deleteAuthAwsMountPathConfigTidyRoletagBlacklistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAwsMountPathConfigTidyRoletagDenylistRouteHandler: RouteHandler<
  typeof getAuthAwsMountPathConfigTidyRoletagDenylistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthAwsMountPathConfigTidyRoletagDenylistRouteHandler: RouteHandler<
  typeof postAuthAwsMountPathConfigTidyRoletagDenylistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthAwsMountPathConfigTidyRoletagDenylistRouteHandler: RouteHandler<
  typeof deleteAuthAwsMountPathConfigTidyRoletagDenylistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAwsMountPathIdentityAccesslistIndexRouteHandler: RouteHandler<
  typeof getAuthAwsMountPathIdentityAccesslistIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAwsMountPathIdentityAccesslistInstanceIdRouteHandler: RouteHandler<
  typeof getAuthAwsMountPathIdentityAccesslistInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthAwsMountPathIdentityAccesslistInstanceIdRouteHandler: RouteHandler<
  typeof deleteAuthAwsMountPathIdentityAccesslistInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAwsMountPathIdentityWhitelistIndexRouteHandler: RouteHandler<
  typeof getAuthAwsMountPathIdentityWhitelistIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAwsMountPathIdentityWhitelistInstanceIdRouteHandler: RouteHandler<
  typeof getAuthAwsMountPathIdentityWhitelistInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthAwsMountPathIdentityWhitelistInstanceIdRouteHandler: RouteHandler<
  typeof deleteAuthAwsMountPathIdentityWhitelistInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthAwsMountPathLoginRouteHandler: RouteHandler<
  typeof postAuthAwsMountPathLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAwsMountPathRoleIndexRouteHandler: RouteHandler<
  typeof getAuthAwsMountPathRoleIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAwsMountPathRoleRoleRouteHandler: RouteHandler<
  typeof getAuthAwsMountPathRoleRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthAwsMountPathRoleRoleRouteHandler: RouteHandler<
  typeof postAuthAwsMountPathRoleRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthAwsMountPathRoleRoleRouteHandler: RouteHandler<
  typeof deleteAuthAwsMountPathRoleRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthAwsMountPathRoleRoleTagRouteHandler: RouteHandler<
  typeof postAuthAwsMountPathRoleRoleTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAwsMountPathRolesIndexRouteHandler: RouteHandler<
  typeof getAuthAwsMountPathRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAwsMountPathRoletagBlacklistIndexRouteHandler: RouteHandler<
  typeof getAuthAwsMountPathRoletagBlacklistIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAwsMountPathRoletagBlacklistRoleTagRouteHandler: RouteHandler<
  typeof getAuthAwsMountPathRoletagBlacklistRoleTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthAwsMountPathRoletagBlacklistRoleTagRouteHandler: RouteHandler<
  typeof postAuthAwsMountPathRoletagBlacklistRoleTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthAwsMountPathRoletagBlacklistRoleTagRouteHandler: RouteHandler<
  typeof deleteAuthAwsMountPathRoletagBlacklistRoleTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAwsMountPathRoletagDenylistIndexRouteHandler: RouteHandler<
  typeof getAuthAwsMountPathRoletagDenylistIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAwsMountPathRoletagDenylistRoleTagRouteHandler: RouteHandler<
  typeof getAuthAwsMountPathRoletagDenylistRoleTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthAwsMountPathRoletagDenylistRoleTagRouteHandler: RouteHandler<
  typeof postAuthAwsMountPathRoletagDenylistRoleTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthAwsMountPathRoletagDenylistRoleTagRouteHandler: RouteHandler<
  typeof deleteAuthAwsMountPathRoletagDenylistRoleTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthAwsMountPathTidyIdentityAccesslistRouteHandler: RouteHandler<
  typeof postAuthAwsMountPathTidyIdentityAccesslistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthAwsMountPathTidyIdentityWhitelistRouteHandler: RouteHandler<
  typeof postAuthAwsMountPathTidyIdentityWhitelistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthAwsMountPathTidyRoletagBlacklistRouteHandler: RouteHandler<
  typeof postAuthAwsMountPathTidyRoletagBlacklistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthAwsMountPathTidyRoletagDenylistRouteHandler: RouteHandler<
  typeof postAuthAwsMountPathTidyRoletagDenylistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAzureMountPathConfigRouteHandler: RouteHandler<
  typeof getAuthAzureMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthAzureMountPathConfigRouteHandler: RouteHandler<
  typeof postAuthAzureMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthAzureMountPathConfigRouteHandler: RouteHandler<
  typeof deleteAuthAzureMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthAzureMountPathLoginRouteHandler: RouteHandler<
  typeof postAuthAzureMountPathLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAzureMountPathRoleIndexRouteHandler: RouteHandler<
  typeof getAuthAzureMountPathRoleIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAzureMountPathRoleNameRouteHandler: RouteHandler<
  typeof getAuthAzureMountPathRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthAzureMountPathRoleNameRouteHandler: RouteHandler<
  typeof postAuthAzureMountPathRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthAzureMountPathRoleNameRouteHandler: RouteHandler<
  typeof deleteAuthAzureMountPathRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthAzureMountPathRotateRootRouteHandler: RouteHandler<
  typeof postAuthAzureMountPathRotateRootRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthCentrifyMountPathConfigRouteHandler: RouteHandler<
  typeof getAuthCentrifyMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthCentrifyMountPathConfigRouteHandler: RouteHandler<
  typeof postAuthCentrifyMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthCentrifyMountPathLoginRouteHandler: RouteHandler<
  typeof postAuthCentrifyMountPathLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthCertMountPathCertsIndexRouteHandler: RouteHandler<
  typeof getAuthCertMountPathCertsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthCertMountPathCertsNameRouteHandler: RouteHandler<
  typeof getAuthCertMountPathCertsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthCertMountPathCertsNameRouteHandler: RouteHandler<
  typeof postAuthCertMountPathCertsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthCertMountPathCertsNameRouteHandler: RouteHandler<
  typeof deleteAuthCertMountPathCertsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthCertMountPathConfigRouteHandler: RouteHandler<
  typeof getAuthCertMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthCertMountPathConfigRouteHandler: RouteHandler<
  typeof postAuthCertMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthCertMountPathCrlsIndexRouteHandler: RouteHandler<
  typeof getAuthCertMountPathCrlsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthCertMountPathCrlsNameRouteHandler: RouteHandler<
  typeof getAuthCertMountPathCrlsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthCertMountPathCrlsNameRouteHandler: RouteHandler<
  typeof postAuthCertMountPathCrlsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthCertMountPathCrlsNameRouteHandler: RouteHandler<
  typeof deleteAuthCertMountPathCrlsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthCertMountPathLoginRouteHandler: RouteHandler<
  typeof postAuthCertMountPathLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthCfMountPathConfigRouteHandler: RouteHandler<
  typeof getAuthCfMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthCfMountPathConfigRouteHandler: RouteHandler<
  typeof postAuthCfMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthCfMountPathConfigRouteHandler: RouteHandler<
  typeof deleteAuthCfMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthCfMountPathLoginRouteHandler: RouteHandler<
  typeof postAuthCfMountPathLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthCfMountPathRolesIndexRouteHandler: RouteHandler<
  typeof getAuthCfMountPathRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthCfMountPathRolesRoleRouteHandler: RouteHandler<
  typeof getAuthCfMountPathRolesRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthCfMountPathRolesRoleRouteHandler: RouteHandler<
  typeof postAuthCfMountPathRolesRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthCfMountPathRolesRoleRouteHandler: RouteHandler<
  typeof deleteAuthCfMountPathRolesRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthGcpMountPathConfigRouteHandler: RouteHandler<
  typeof getAuthGcpMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthGcpMountPathConfigRouteHandler: RouteHandler<
  typeof postAuthGcpMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthGcpMountPathLoginRouteHandler: RouteHandler<
  typeof postAuthGcpMountPathLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthGcpMountPathRoleIndexRouteHandler: RouteHandler<
  typeof getAuthGcpMountPathRoleIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthGcpMountPathRoleNameRouteHandler: RouteHandler<
  typeof getAuthGcpMountPathRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthGcpMountPathRoleNameRouteHandler: RouteHandler<
  typeof postAuthGcpMountPathRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthGcpMountPathRoleNameRouteHandler: RouteHandler<
  typeof deleteAuthGcpMountPathRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthGcpMountPathRoleNameLabelsRouteHandler: RouteHandler<
  typeof postAuthGcpMountPathRoleNameLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthGcpMountPathRoleNameServiceAccountsRouteHandler: RouteHandler<
  typeof postAuthGcpMountPathRoleNameServiceAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthGcpMountPathRolesIndexRouteHandler: RouteHandler<
  typeof getAuthGcpMountPathRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthGithubMountPathConfigRouteHandler: RouteHandler<
  typeof getAuthGithubMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthGithubMountPathConfigRouteHandler: RouteHandler<
  typeof postAuthGithubMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthGithubMountPathLoginRouteHandler: RouteHandler<
  typeof postAuthGithubMountPathLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthGithubMountPathMapTeamsRouteHandler: RouteHandler<
  typeof getAuthGithubMountPathMapTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthGithubMountPathMapTeamsIndexRouteHandler: RouteHandler<
  typeof getAuthGithubMountPathMapTeamsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthGithubMountPathMapTeamsKeyRouteHandler: RouteHandler<
  typeof getAuthGithubMountPathMapTeamsKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthGithubMountPathMapTeamsKeyRouteHandler: RouteHandler<
  typeof postAuthGithubMountPathMapTeamsKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthGithubMountPathMapTeamsKeyRouteHandler: RouteHandler<
  typeof deleteAuthGithubMountPathMapTeamsKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthGithubMountPathMapUsersRouteHandler: RouteHandler<
  typeof getAuthGithubMountPathMapUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthGithubMountPathMapUsersIndexRouteHandler: RouteHandler<
  typeof getAuthGithubMountPathMapUsersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthGithubMountPathMapUsersKeyRouteHandler: RouteHandler<
  typeof getAuthGithubMountPathMapUsersKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthGithubMountPathMapUsersKeyRouteHandler: RouteHandler<
  typeof postAuthGithubMountPathMapUsersKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthGithubMountPathMapUsersKeyRouteHandler: RouteHandler<
  typeof deleteAuthGithubMountPathMapUsersKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthJwtMountPathConfigRouteHandler: RouteHandler<
  typeof getAuthJwtMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthJwtMountPathConfigRouteHandler: RouteHandler<
  typeof postAuthJwtMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthJwtMountPathLoginRouteHandler: RouteHandler<
  typeof postAuthJwtMountPathLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthJwtMountPathOidcAuthUrlRouteHandler: RouteHandler<
  typeof postAuthJwtMountPathOidcAuthUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthJwtMountPathOidcCallbackRouteHandler: RouteHandler<
  typeof getAuthJwtMountPathOidcCallbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthJwtMountPathOidcCallbackRouteHandler: RouteHandler<
  typeof postAuthJwtMountPathOidcCallbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthJwtMountPathRoleIndexRouteHandler: RouteHandler<
  typeof getAuthJwtMountPathRoleIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthJwtMountPathRoleNameRouteHandler: RouteHandler<
  typeof getAuthJwtMountPathRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthJwtMountPathRoleNameRouteHandler: RouteHandler<
  typeof postAuthJwtMountPathRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthJwtMountPathRoleNameRouteHandler: RouteHandler<
  typeof deleteAuthJwtMountPathRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthKerberosMountPathConfigRouteHandler: RouteHandler<
  typeof getAuthKerberosMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthKerberosMountPathConfigRouteHandler: RouteHandler<
  typeof postAuthKerberosMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthKerberosMountPathConfigLdapRouteHandler: RouteHandler<
  typeof getAuthKerberosMountPathConfigLdapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthKerberosMountPathConfigLdapRouteHandler: RouteHandler<
  typeof postAuthKerberosMountPathConfigLdapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthKerberosMountPathGroupsIndexRouteHandler: RouteHandler<
  typeof getAuthKerberosMountPathGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthKerberosMountPathGroupsNameRouteHandler: RouteHandler<
  typeof getAuthKerberosMountPathGroupsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthKerberosMountPathGroupsNameRouteHandler: RouteHandler<
  typeof postAuthKerberosMountPathGroupsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthKerberosMountPathGroupsNameRouteHandler: RouteHandler<
  typeof deleteAuthKerberosMountPathGroupsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthKerberosMountPathLoginRouteHandler: RouteHandler<
  typeof getAuthKerberosMountPathLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthKerberosMountPathLoginRouteHandler: RouteHandler<
  typeof postAuthKerberosMountPathLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthKubernetesMountPathConfigRouteHandler: RouteHandler<
  typeof getAuthKubernetesMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthKubernetesMountPathConfigRouteHandler: RouteHandler<
  typeof postAuthKubernetesMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthKubernetesMountPathLoginRouteHandler: RouteHandler<
  typeof postAuthKubernetesMountPathLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthKubernetesMountPathRoleIndexRouteHandler: RouteHandler<
  typeof getAuthKubernetesMountPathRoleIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthKubernetesMountPathRoleNameRouteHandler: RouteHandler<
  typeof getAuthKubernetesMountPathRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthKubernetesMountPathRoleNameRouteHandler: RouteHandler<
  typeof postAuthKubernetesMountPathRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthKubernetesMountPathRoleNameRouteHandler: RouteHandler<
  typeof deleteAuthKubernetesMountPathRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthLdapMountPathConfigRouteHandler: RouteHandler<
  typeof getAuthLdapMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthLdapMountPathConfigRouteHandler: RouteHandler<
  typeof postAuthLdapMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthLdapMountPathGroupsIndexRouteHandler: RouteHandler<
  typeof getAuthLdapMountPathGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthLdapMountPathGroupsNameRouteHandler: RouteHandler<
  typeof getAuthLdapMountPathGroupsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthLdapMountPathGroupsNameRouteHandler: RouteHandler<
  typeof postAuthLdapMountPathGroupsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthLdapMountPathGroupsNameRouteHandler: RouteHandler<
  typeof deleteAuthLdapMountPathGroupsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthLdapMountPathLoginUsernameRouteHandler: RouteHandler<
  typeof postAuthLdapMountPathLoginUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthLdapMountPathUsersIndexRouteHandler: RouteHandler<
  typeof getAuthLdapMountPathUsersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthLdapMountPathUsersNameRouteHandler: RouteHandler<
  typeof getAuthLdapMountPathUsersNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthLdapMountPathUsersNameRouteHandler: RouteHandler<
  typeof postAuthLdapMountPathUsersNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthLdapMountPathUsersNameRouteHandler: RouteHandler<
  typeof deleteAuthLdapMountPathUsersNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthOciMountPathConfigRouteHandler: RouteHandler<
  typeof getAuthOciMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthOciMountPathConfigRouteHandler: RouteHandler<
  typeof postAuthOciMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthOciMountPathConfigRouteHandler: RouteHandler<
  typeof deleteAuthOciMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthOciMountPathLoginRoleRouteHandler: RouteHandler<
  typeof postAuthOciMountPathLoginRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthOciMountPathRoleIndexRouteHandler: RouteHandler<
  typeof getAuthOciMountPathRoleIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthOciMountPathRoleRoleRouteHandler: RouteHandler<
  typeof getAuthOciMountPathRoleRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthOciMountPathRoleRoleRouteHandler: RouteHandler<
  typeof postAuthOciMountPathRoleRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthOciMountPathRoleRoleRouteHandler: RouteHandler<
  typeof deleteAuthOciMountPathRoleRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthOktaMountPathConfigRouteHandler: RouteHandler<
  typeof getAuthOktaMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthOktaMountPathConfigRouteHandler: RouteHandler<
  typeof postAuthOktaMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthOktaMountPathGroupsIndexRouteHandler: RouteHandler<
  typeof getAuthOktaMountPathGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthOktaMountPathGroupsNameRouteHandler: RouteHandler<
  typeof getAuthOktaMountPathGroupsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthOktaMountPathGroupsNameRouteHandler: RouteHandler<
  typeof postAuthOktaMountPathGroupsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthOktaMountPathGroupsNameRouteHandler: RouteHandler<
  typeof deleteAuthOktaMountPathGroupsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthOktaMountPathLoginUsernameRouteHandler: RouteHandler<
  typeof postAuthOktaMountPathLoginUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthOktaMountPathUsersIndexRouteHandler: RouteHandler<
  typeof getAuthOktaMountPathUsersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthOktaMountPathUsersNameRouteHandler: RouteHandler<
  typeof getAuthOktaMountPathUsersNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthOktaMountPathUsersNameRouteHandler: RouteHandler<
  typeof postAuthOktaMountPathUsersNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthOktaMountPathUsersNameRouteHandler: RouteHandler<
  typeof deleteAuthOktaMountPathUsersNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthOktaMountPathVerifyNonceRouteHandler: RouteHandler<
  typeof getAuthOktaMountPathVerifyNonceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthRadiusMountPathConfigRouteHandler: RouteHandler<
  typeof getAuthRadiusMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthRadiusMountPathConfigRouteHandler: RouteHandler<
  typeof postAuthRadiusMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthRadiusMountPathLoginRouteHandler: RouteHandler<
  typeof postAuthRadiusMountPathLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthRadiusMountPathLoginUrlusernameRouteHandler: RouteHandler<
  typeof postAuthRadiusMountPathLoginUrlusernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthRadiusMountPathUsersIndexRouteHandler: RouteHandler<
  typeof getAuthRadiusMountPathUsersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthRadiusMountPathUsersNameRouteHandler: RouteHandler<
  typeof getAuthRadiusMountPathUsersNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthRadiusMountPathUsersNameRouteHandler: RouteHandler<
  typeof postAuthRadiusMountPathUsersNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthRadiusMountPathUsersNameRouteHandler: RouteHandler<
  typeof deleteAuthRadiusMountPathUsersNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthUserpassMountPathLoginUsernameRouteHandler: RouteHandler<
  typeof postAuthUserpassMountPathLoginUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthUserpassMountPathUsersIndexRouteHandler: RouteHandler<
  typeof getAuthUserpassMountPathUsersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthUserpassMountPathUsersUsernameRouteHandler: RouteHandler<
  typeof getAuthUserpassMountPathUsersUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthUserpassMountPathUsersUsernameRouteHandler: RouteHandler<
  typeof postAuthUserpassMountPathUsersUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthUserpassMountPathUsersUsernameRouteHandler: RouteHandler<
  typeof deleteAuthUserpassMountPathUsersUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthUserpassMountPathUsersUsernamePasswordRouteHandler: RouteHandler<
  typeof postAuthUserpassMountPathUsersUsernamePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthUserpassMountPathUsersUsernamePoliciesRouteHandler: RouteHandler<
  typeof postAuthUserpassMountPathUsersUsernamePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
