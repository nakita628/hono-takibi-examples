import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserBlocksUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserBlocksUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserBlocksUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserCodespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserCodespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserCodespacesSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserCodespacesSecretsPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserCodespacesSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserCodespacesSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserCodespacesSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserCodespacesSecretsSecretNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserCodespacesSecretsSecretNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserCodespacesSecretsSecretNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserCodespacesSecretsSecretNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserCodespacesCodespaceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserCodespacesCodespaceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserCodespacesCodespaceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserCodespacesCodespaceNameExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserCodespacesCodespaceNameExportsExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserCodespacesCodespaceNameMachinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserCodespacesCodespaceNamePublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserCodespacesCodespaceNameStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserCodespacesCodespaceNameStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserDockerConflictsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserEmailVisibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserFollowingUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserFollowingUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserFollowingUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserGpgKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserGpgKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserGpgKeysGpgKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserGpgKeysGpgKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserInstallationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserInstallationsInstallationIdRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserInstallationsInstallationIdRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserInstallationsInstallationIdRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserInteractionLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserInteractionLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserInteractionLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserIssueFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserIssueFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserIssueFieldsIssueFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserIssueFieldsIssueFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserIssueTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserIssueTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserIssueTypesIssueTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserIssueTypesIssueTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserMarketplacePurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserMarketplacePurchasesStubbedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserMembershipsOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserMembershipsOrgsOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserMembershipsOrgsOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserMigrationsMigrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserMigrationsMigrationIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserMigrationsMigrationIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserMigrationsMigrationIdReposRepoNameLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserMigrationsMigrationIdRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserPackagesPackageTypePackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserPackagesPackageTypePackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserPackagesPackageTypePackageNameRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserPackagesPackageTypePackageNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserPackagesPackageTypePackageNameVersionsPackageVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserPackagesPackageTypePackageNameVersionsPackageVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserPackagesPackageTypePackageNameVersionsPackageVersionIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserPublicEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserRepositoryInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserRepositoryInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserRepositoryInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserSocialAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserSocialAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserSocialAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserSshSigningKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserSshSigningKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserSshSigningKeysSshSigningKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserSshSigningKeysSshSigningKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserStarredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserStarredOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserStarredOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserStarredOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIdProjectsV2ProjectNumberDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
