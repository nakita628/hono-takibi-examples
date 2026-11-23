import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUserBlocksUsernameRoute,
  deleteUserCodespacesCodespaceNameRoute,
  deleteUserCodespacesSecretsSecretNameRepositoriesRepositoryIdRoute,
  deleteUserCodespacesSecretsSecretNameRoute,
  deleteUserEmailsRoute,
  deleteUserFollowingUsernameRoute,
  deleteUserGpgKeysGpgKeyIdRoute,
  deleteUserInstallationsInstallationIdRepositoriesRepositoryIdRoute,
  deleteUserInteractionLimitsRoute,
  deleteUserIssueFieldsIssueFieldIdRoute,
  deleteUserIssueTypesIssueTypeIdRoute,
  deleteUserKeysKeyIdRoute,
  deleteUserMigrationsMigrationIdArchiveRoute,
  deleteUserMigrationsMigrationIdReposRepoNameLockRoute,
  deleteUserPackagesPackageTypePackageNameRoute,
  deleteUserPackagesPackageTypePackageNameVersionsPackageVersionIdRoute,
  deleteUserRepositoryInvitationsInvitationIdRoute,
  deleteUserSocialAccountsRoute,
  deleteUserSshSigningKeysSshSigningKeyIdRoute,
  deleteUserStarredOwnerRepoRoute,
  getUserAccountIdRoute,
  getUserBlocksRoute,
  getUserBlocksUsernameRoute,
  getUserCodespacesCodespaceNameExportsExportIdRoute,
  getUserCodespacesCodespaceNameMachinesRoute,
  getUserCodespacesCodespaceNameRoute,
  getUserCodespacesRoute,
  getUserCodespacesSecretsPublicKeyRoute,
  getUserCodespacesSecretsRoute,
  getUserCodespacesSecretsSecretNameRepositoriesRoute,
  getUserCodespacesSecretsSecretNameRoute,
  getUserDockerConflictsRoute,
  getUserEmailsRoute,
  getUserFollowersRoute,
  getUserFollowingRoute,
  getUserFollowingUsernameRoute,
  getUserGpgKeysGpgKeyIdRoute,
  getUserGpgKeysRoute,
  getUserInstallationsInstallationIdRepositoriesRoute,
  getUserInstallationsRoute,
  getUserInteractionLimitsRoute,
  getUserIssueFieldsRoute,
  getUserIssuesRoute,
  getUserIssueTypesRoute,
  getUserKeysKeyIdRoute,
  getUserKeysRoute,
  getUserMarketplacePurchasesRoute,
  getUserMarketplacePurchasesStubbedRoute,
  getUserMembershipsOrgsOrgRoute,
  getUserMembershipsOrgsRoute,
  getUserMigrationsMigrationIdArchiveRoute,
  getUserMigrationsMigrationIdRepositoriesRoute,
  getUserMigrationsMigrationIdRoute,
  getUserMigrationsRoute,
  getUserOrgsRoute,
  getUserPackagesPackageTypePackageNameRoute,
  getUserPackagesPackageTypePackageNameVersionsPackageVersionIdRoute,
  getUserPackagesPackageTypePackageNameVersionsRoute,
  getUserPackagesRoute,
  getUserPublicEmailsRoute,
  getUserRepositoryInvitationsRoute,
  getUserReposRoute,
  getUserRoute,
  getUserSocialAccountsRoute,
  getUserSshSigningKeysRoute,
  getUserSshSigningKeysSshSigningKeyIdRoute,
  getUserStarredOwnerRepoRoute,
  getUserStarredRoute,
  getUserSubscriptionsRoute,
  getUserTeamsRoute,
  patchUserCodespacesCodespaceNameRoute,
  patchUserEmailVisibilityRoute,
  patchUserIssueFieldsIssueFieldIdRoute,
  patchUserMembershipsOrgsOrgRoute,
  patchUserRepositoryInvitationsInvitationIdRoute,
  patchUserRoute,
  postUserCodespacesCodespaceNameExportsRoute,
  postUserCodespacesCodespaceNamePublishRoute,
  postUserCodespacesCodespaceNameStartRoute,
  postUserCodespacesCodespaceNameStopRoute,
  postUserCodespacesRoute,
  postUserEmailsRoute,
  postUserGpgKeysRoute,
  postUserIssueFieldsRoute,
  postUserIssueTypesRoute,
  postUserKeysRoute,
  postUserMigrationsRoute,
  postUserPackagesPackageTypePackageNameRestoreRoute,
  postUserPackagesPackageTypePackageNameVersionsPackageVersionIdRestoreRoute,
  postUserReposRoute,
  postUserSocialAccountsRoute,
  postUserSshSigningKeysRoute,
  postUserUserIdProjectsV2ProjectNumberDraftsRoute,
  putUserBlocksUsernameRoute,
  putUserCodespacesSecretsSecretNameRepositoriesRepositoryIdRoute,
  putUserCodespacesSecretsSecretNameRepositoriesRoute,
  putUserCodespacesSecretsSecretNameRoute,
  putUserFollowingUsernameRoute,
  putUserInstallationsInstallationIdRepositoriesRepositoryIdRoute,
  putUserInteractionLimitsRoute,
  putUserIssueTypesIssueTypeIdRoute,
  putUserStarredOwnerRepoRoute,
} from '../routes'

export const getUserRouteHandler: RouteHandler<typeof getUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserRouteHandler: RouteHandler<typeof patchUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserBlocksRouteHandler: RouteHandler<typeof getUserBlocksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserBlocksUsernameRouteHandler: RouteHandler<
  typeof getUserBlocksUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserBlocksUsernameRouteHandler: RouteHandler<
  typeof putUserBlocksUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserBlocksUsernameRouteHandler: RouteHandler<
  typeof deleteUserBlocksUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserCodespacesRouteHandler: RouteHandler<typeof getUserCodespacesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUserCodespacesRouteHandler: RouteHandler<typeof postUserCodespacesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUserCodespacesSecretsRouteHandler: RouteHandler<
  typeof getUserCodespacesSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserCodespacesSecretsPublicKeyRouteHandler: RouteHandler<
  typeof getUserCodespacesSecretsPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserCodespacesSecretsSecretNameRouteHandler: RouteHandler<
  typeof getUserCodespacesSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserCodespacesSecretsSecretNameRouteHandler: RouteHandler<
  typeof putUserCodespacesSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserCodespacesSecretsSecretNameRouteHandler: RouteHandler<
  typeof deleteUserCodespacesSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserCodespacesSecretsSecretNameRepositoriesRouteHandler: RouteHandler<
  typeof getUserCodespacesSecretsSecretNameRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserCodespacesSecretsSecretNameRepositoriesRouteHandler: RouteHandler<
  typeof putUserCodespacesSecretsSecretNameRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserCodespacesSecretsSecretNameRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof putUserCodespacesSecretsSecretNameRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserCodespacesSecretsSecretNameRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof deleteUserCodespacesSecretsSecretNameRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserCodespacesCodespaceNameRouteHandler: RouteHandler<
  typeof getUserCodespacesCodespaceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserCodespacesCodespaceNameRouteHandler: RouteHandler<
  typeof patchUserCodespacesCodespaceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserCodespacesCodespaceNameRouteHandler: RouteHandler<
  typeof deleteUserCodespacesCodespaceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserCodespacesCodespaceNameExportsRouteHandler: RouteHandler<
  typeof postUserCodespacesCodespaceNameExportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserCodespacesCodespaceNameExportsExportIdRouteHandler: RouteHandler<
  typeof getUserCodespacesCodespaceNameExportsExportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserCodespacesCodespaceNameMachinesRouteHandler: RouteHandler<
  typeof getUserCodespacesCodespaceNameMachinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserCodespacesCodespaceNamePublishRouteHandler: RouteHandler<
  typeof postUserCodespacesCodespaceNamePublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserCodespacesCodespaceNameStartRouteHandler: RouteHandler<
  typeof postUserCodespacesCodespaceNameStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserCodespacesCodespaceNameStopRouteHandler: RouteHandler<
  typeof postUserCodespacesCodespaceNameStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserDockerConflictsRouteHandler: RouteHandler<
  typeof getUserDockerConflictsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserEmailVisibilityRouteHandler: RouteHandler<
  typeof patchUserEmailVisibilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserEmailsRouteHandler: RouteHandler<typeof getUserEmailsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserEmailsRouteHandler: RouteHandler<typeof postUserEmailsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserEmailsRouteHandler: RouteHandler<typeof deleteUserEmailsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUserFollowersRouteHandler: RouteHandler<typeof getUserFollowersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUserFollowingRouteHandler: RouteHandler<typeof getUserFollowingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUserFollowingUsernameRouteHandler: RouteHandler<
  typeof getUserFollowingUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserFollowingUsernameRouteHandler: RouteHandler<
  typeof putUserFollowingUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserFollowingUsernameRouteHandler: RouteHandler<
  typeof deleteUserFollowingUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserGpgKeysRouteHandler: RouteHandler<typeof getUserGpgKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserGpgKeysRouteHandler: RouteHandler<typeof postUserGpgKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserGpgKeysGpgKeyIdRouteHandler: RouteHandler<
  typeof getUserGpgKeysGpgKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserGpgKeysGpgKeyIdRouteHandler: RouteHandler<
  typeof deleteUserGpgKeysGpgKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserInstallationsRouteHandler: RouteHandler<
  typeof getUserInstallationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserInstallationsInstallationIdRepositoriesRouteHandler: RouteHandler<
  typeof getUserInstallationsInstallationIdRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserInstallationsInstallationIdRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof putUserInstallationsInstallationIdRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserInstallationsInstallationIdRepositoriesRepositoryIdRouteHandler: RouteHandler<
  typeof deleteUserInstallationsInstallationIdRepositoriesRepositoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserInteractionLimitsRouteHandler: RouteHandler<
  typeof getUserInteractionLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserInteractionLimitsRouteHandler: RouteHandler<
  typeof putUserInteractionLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserInteractionLimitsRouteHandler: RouteHandler<
  typeof deleteUserInteractionLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserIssueFieldsRouteHandler: RouteHandler<typeof getUserIssueFieldsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUserIssueFieldsRouteHandler: RouteHandler<
  typeof postUserIssueFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserIssueFieldsIssueFieldIdRouteHandler: RouteHandler<
  typeof patchUserIssueFieldsIssueFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserIssueFieldsIssueFieldIdRouteHandler: RouteHandler<
  typeof deleteUserIssueFieldsIssueFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserIssueTypesRouteHandler: RouteHandler<typeof getUserIssueTypesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUserIssueTypesRouteHandler: RouteHandler<typeof postUserIssueTypesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putUserIssueTypesIssueTypeIdRouteHandler: RouteHandler<
  typeof putUserIssueTypesIssueTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserIssueTypesIssueTypeIdRouteHandler: RouteHandler<
  typeof deleteUserIssueTypesIssueTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserIssuesRouteHandler: RouteHandler<typeof getUserIssuesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserKeysRouteHandler: RouteHandler<typeof getUserKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserKeysRouteHandler: RouteHandler<typeof postUserKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserKeysKeyIdRouteHandler: RouteHandler<typeof getUserKeysKeyIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteUserKeysKeyIdRouteHandler: RouteHandler<
  typeof deleteUserKeysKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserMarketplacePurchasesRouteHandler: RouteHandler<
  typeof getUserMarketplacePurchasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserMarketplacePurchasesStubbedRouteHandler: RouteHandler<
  typeof getUserMarketplacePurchasesStubbedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserMembershipsOrgsRouteHandler: RouteHandler<
  typeof getUserMembershipsOrgsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserMembershipsOrgsOrgRouteHandler: RouteHandler<
  typeof getUserMembershipsOrgsOrgRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserMembershipsOrgsOrgRouteHandler: RouteHandler<
  typeof patchUserMembershipsOrgsOrgRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserMigrationsRouteHandler: RouteHandler<typeof getUserMigrationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUserMigrationsRouteHandler: RouteHandler<typeof postUserMigrationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUserMigrationsMigrationIdRouteHandler: RouteHandler<
  typeof getUserMigrationsMigrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserMigrationsMigrationIdArchiveRouteHandler: RouteHandler<
  typeof getUserMigrationsMigrationIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserMigrationsMigrationIdArchiveRouteHandler: RouteHandler<
  typeof deleteUserMigrationsMigrationIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserMigrationsMigrationIdReposRepoNameLockRouteHandler: RouteHandler<
  typeof deleteUserMigrationsMigrationIdReposRepoNameLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserMigrationsMigrationIdRepositoriesRouteHandler: RouteHandler<
  typeof getUserMigrationsMigrationIdRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserOrgsRouteHandler: RouteHandler<typeof getUserOrgsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserPackagesRouteHandler: RouteHandler<typeof getUserPackagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserPackagesPackageTypePackageNameRouteHandler: RouteHandler<
  typeof getUserPackagesPackageTypePackageNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserPackagesPackageTypePackageNameRouteHandler: RouteHandler<
  typeof deleteUserPackagesPackageTypePackageNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserPackagesPackageTypePackageNameRestoreRouteHandler: RouteHandler<
  typeof postUserPackagesPackageTypePackageNameRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserPackagesPackageTypePackageNameVersionsRouteHandler: RouteHandler<
  typeof getUserPackagesPackageTypePackageNameVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserPackagesPackageTypePackageNameVersionsPackageVersionIdRouteHandler: RouteHandler<
  typeof getUserPackagesPackageTypePackageNameVersionsPackageVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserPackagesPackageTypePackageNameVersionsPackageVersionIdRouteHandler: RouteHandler<
  typeof deleteUserPackagesPackageTypePackageNameVersionsPackageVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserPackagesPackageTypePackageNameVersionsPackageVersionIdRestoreRouteHandler: RouteHandler<
  typeof postUserPackagesPackageTypePackageNameVersionsPackageVersionIdRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserPublicEmailsRouteHandler: RouteHandler<
  typeof getUserPublicEmailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserReposRouteHandler: RouteHandler<typeof getUserReposRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserReposRouteHandler: RouteHandler<typeof postUserReposRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserRepositoryInvitationsRouteHandler: RouteHandler<
  typeof getUserRepositoryInvitationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserRepositoryInvitationsInvitationIdRouteHandler: RouteHandler<
  typeof patchUserRepositoryInvitationsInvitationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserRepositoryInvitationsInvitationIdRouteHandler: RouteHandler<
  typeof deleteUserRepositoryInvitationsInvitationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserSocialAccountsRouteHandler: RouteHandler<
  typeof getUserSocialAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserSocialAccountsRouteHandler: RouteHandler<
  typeof postUserSocialAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserSocialAccountsRouteHandler: RouteHandler<
  typeof deleteUserSocialAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserSshSigningKeysRouteHandler: RouteHandler<
  typeof getUserSshSigningKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserSshSigningKeysRouteHandler: RouteHandler<
  typeof postUserSshSigningKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserSshSigningKeysSshSigningKeyIdRouteHandler: RouteHandler<
  typeof getUserSshSigningKeysSshSigningKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserSshSigningKeysSshSigningKeyIdRouteHandler: RouteHandler<
  typeof deleteUserSshSigningKeysSshSigningKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserStarredRouteHandler: RouteHandler<typeof getUserStarredRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserStarredOwnerRepoRouteHandler: RouteHandler<
  typeof getUserStarredOwnerRepoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserStarredOwnerRepoRouteHandler: RouteHandler<
  typeof putUserStarredOwnerRepoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserStarredOwnerRepoRouteHandler: RouteHandler<
  typeof deleteUserStarredOwnerRepoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserSubscriptionsRouteHandler: RouteHandler<
  typeof getUserSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserTeamsRouteHandler: RouteHandler<typeof getUserTeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserAccountIdRouteHandler: RouteHandler<typeof getUserAccountIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUserUserIdProjectsV2ProjectNumberDraftsRouteHandler: RouteHandler<
  typeof postUserUserIdProjectsV2ProjectNumberDraftsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
