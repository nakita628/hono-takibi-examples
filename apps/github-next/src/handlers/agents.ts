import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgsOrgAgentsSecretsSecretNameRepositoriesRepositoryIdRoute,
  deleteOrgsOrgAgentsSecretsSecretNameRoute,
  deleteOrgsOrgAgentsVariablesNameRepositoriesRepositoryIdRoute,
  deleteOrgsOrgAgentsVariablesNameRoute,
  deleteReposOwnerRepoAgentsSecretsSecretNameRoute,
  deleteReposOwnerRepoAgentsVariablesNameRoute,
  getOrgsOrgAgentsSecretsPublicKeyRoute,
  getOrgsOrgAgentsSecretsRoute,
  getOrgsOrgAgentsSecretsSecretNameRepositoriesRoute,
  getOrgsOrgAgentsSecretsSecretNameRoute,
  getOrgsOrgAgentsVariablesNameRepositoriesRoute,
  getOrgsOrgAgentsVariablesNameRoute,
  getOrgsOrgAgentsVariablesRoute,
  getReposOwnerRepoAgentsOrganizationSecretsRoute,
  getReposOwnerRepoAgentsOrganizationVariablesRoute,
  getReposOwnerRepoAgentsSecretsPublicKeyRoute,
  getReposOwnerRepoAgentsSecretsRoute,
  getReposOwnerRepoAgentsSecretsSecretNameRoute,
  getReposOwnerRepoAgentsVariablesNameRoute,
  getReposOwnerRepoAgentsVariablesRoute,
  patchOrgsOrgAgentsVariablesNameRoute,
  patchReposOwnerRepoAgentsVariablesNameRoute,
  postOrgsOrgAgentsVariablesRoute,
  postReposOwnerRepoAgentsVariablesRoute,
  putOrgsOrgAgentsSecretsSecretNameRepositoriesRepositoryIdRoute,
  putOrgsOrgAgentsSecretsSecretNameRepositoriesRoute,
  putOrgsOrgAgentsSecretsSecretNameRoute,
  putOrgsOrgAgentsVariablesNameRepositoriesRepositoryIdRoute,
  putOrgsOrgAgentsVariablesNameRepositoriesRoute,
  putReposOwnerRepoAgentsSecretsSecretNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentsHandler = app
  .openapi(getOrgsOrgAgentsSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgAgentsSecretsPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgAgentsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgAgentsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgAgentsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgAgentsSecretsSecretNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgAgentsSecretsSecretNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgAgentsSecretsSecretNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgAgentsSecretsSecretNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgAgentsVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgAgentsVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgAgentsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgAgentsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgAgentsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgAgentsVariablesNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgAgentsVariablesNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgAgentsVariablesNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgAgentsVariablesNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAgentsOrganizationSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAgentsOrganizationVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAgentsSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAgentsSecretsPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAgentsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoAgentsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoAgentsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAgentsVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoAgentsVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAgentsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoAgentsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoAgentsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
