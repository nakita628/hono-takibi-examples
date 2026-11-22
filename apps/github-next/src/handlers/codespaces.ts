import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgsOrgCodespacesAccessSelectedUsersRoute,
  deleteOrgsOrgCodespacesSecretsSecretNameRepositoriesRepositoryIdRoute,
  deleteOrgsOrgCodespacesSecretsSecretNameRoute,
  deleteOrgsOrgMembersUsernameCodespacesCodespaceNameRoute,
  deleteReposOwnerRepoCodespacesSecretsSecretNameRoute,
  deleteUserCodespacesCodespaceNameRoute,
  deleteUserCodespacesSecretsSecretNameRepositoriesRepositoryIdRoute,
  deleteUserCodespacesSecretsSecretNameRoute,
  getOrgsOrgCodespacesRoute,
  getOrgsOrgCodespacesSecretsPublicKeyRoute,
  getOrgsOrgCodespacesSecretsRoute,
  getOrgsOrgCodespacesSecretsSecretNameRepositoriesRoute,
  getOrgsOrgCodespacesSecretsSecretNameRoute,
  getOrgsOrgMembersUsernameCodespacesRoute,
  getReposOwnerRepoCodespacesDevcontainersRoute,
  getReposOwnerRepoCodespacesMachinesRoute,
  getReposOwnerRepoCodespacesNewRoute,
  getReposOwnerRepoCodespacesPermissionsCheckRoute,
  getReposOwnerRepoCodespacesRoute,
  getReposOwnerRepoCodespacesSecretsPublicKeyRoute,
  getReposOwnerRepoCodespacesSecretsRoute,
  getReposOwnerRepoCodespacesSecretsSecretNameRoute,
  getUserCodespacesCodespaceNameExportsExportIdRoute,
  getUserCodespacesCodespaceNameMachinesRoute,
  getUserCodespacesCodespaceNameRoute,
  getUserCodespacesRoute,
  getUserCodespacesSecretsPublicKeyRoute,
  getUserCodespacesSecretsRoute,
  getUserCodespacesSecretsSecretNameRepositoriesRoute,
  getUserCodespacesSecretsSecretNameRoute,
  patchUserCodespacesCodespaceNameRoute,
  postOrgsOrgCodespacesAccessSelectedUsersRoute,
  postOrgsOrgMembersUsernameCodespacesCodespaceNameStopRoute,
  postReposOwnerRepoCodespacesRoute,
  postReposOwnerRepoPullsPullNumberCodespacesRoute,
  postUserCodespacesCodespaceNameExportsRoute,
  postUserCodespacesCodespaceNamePublishRoute,
  postUserCodespacesCodespaceNameStartRoute,
  postUserCodespacesCodespaceNameStopRoute,
  postUserCodespacesRoute,
  putOrgsOrgCodespacesAccessRoute,
  putOrgsOrgCodespacesSecretsSecretNameRepositoriesRepositoryIdRoute,
  putOrgsOrgCodespacesSecretsSecretNameRepositoriesRoute,
  putOrgsOrgCodespacesSecretsSecretNameRoute,
  putReposOwnerRepoCodespacesSecretsSecretNameRoute,
  putUserCodespacesSecretsSecretNameRepositoriesRepositoryIdRoute,
  putUserCodespacesSecretsSecretNameRepositoriesRoute,
  putUserCodespacesSecretsSecretNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const codespacesHandler = app
  .openapi(getOrgsOrgCodespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgCodespacesAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgCodespacesAccessSelectedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgCodespacesAccessSelectedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCodespacesSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCodespacesSecretsPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCodespacesSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgCodespacesSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgCodespacesSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCodespacesSecretsSecretNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgCodespacesSecretsSecretNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgCodespacesSecretsSecretNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgCodespacesSecretsSecretNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgMembersUsernameCodespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgMembersUsernameCodespacesCodespaceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgMembersUsernameCodespacesCodespaceNameStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoCodespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodespacesDevcontainersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodespacesMachinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodespacesNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodespacesPermissionsCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodespacesSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodespacesSecretsPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodespacesSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoCodespacesSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoCodespacesSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsPullNumberCodespacesRoute, (c) => {
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
