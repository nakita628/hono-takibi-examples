import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgsOrgDependabotSecretsSecretNameRepositoriesRepositoryIdRoute,
  deleteOrgsOrgDependabotSecretsSecretNameRoute,
  deleteReposOwnerRepoDependabotSecretsSecretNameRoute,
  getEnterprisesEnterpriseDependabotAlertsRoute,
  getEnterprisesEnterpriseDependabotRepositoryAccessRoute,
  getOrgsOrgDependabotAlertsRoute,
  getOrgsOrgDependabotRepositoryAccessRoute,
  getOrgsOrgDependabotSecretsPublicKeyRoute,
  getOrgsOrgDependabotSecretsRoute,
  getOrgsOrgDependabotSecretsSecretNameRepositoriesRoute,
  getOrgsOrgDependabotSecretsSecretNameRoute,
  getReposOwnerRepoDependabotAlertsAlertNumberRoute,
  getReposOwnerRepoDependabotAlertsRoute,
  getReposOwnerRepoDependabotRunnerSettingsRoute,
  getReposOwnerRepoDependabotSecretsPublicKeyRoute,
  getReposOwnerRepoDependabotSecretsRoute,
  getReposOwnerRepoDependabotSecretsSecretNameRoute,
  patchEnterprisesEnterpriseDependabotRepositoryAccessRoute,
  patchOrgsOrgDependabotRepositoryAccessRoute,
  patchReposOwnerRepoDependabotAlertsAlertNumberRoute,
  putEnterprisesEnterpriseDependabotRepositoryAccessDefaultLevelRoute,
  putOrgsOrgDependabotRepositoryAccessDefaultLevelRoute,
  putOrgsOrgDependabotSecretsSecretNameRepositoriesRepositoryIdRoute,
  putOrgsOrgDependabotSecretsSecretNameRepositoriesRoute,
  putOrgsOrgDependabotSecretsSecretNameRoute,
  putReposOwnerRepoDependabotRunnerSettingsRoute,
  putReposOwnerRepoDependabotSecretsSecretNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dependabotHandler = app
  .openapi(getEnterprisesEnterpriseDependabotAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseDependabotRepositoryAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEnterprisesEnterpriseDependabotRepositoryAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnterprisesEnterpriseDependabotRepositoryAccessDefaultLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgDependabotAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgDependabotRepositoryAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgDependabotRepositoryAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgDependabotRepositoryAccessDefaultLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgDependabotSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgDependabotSecretsPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgDependabotSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgDependabotSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgDependabotSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgDependabotSecretsSecretNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgDependabotSecretsSecretNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgDependabotSecretsSecretNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgDependabotSecretsSecretNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoDependabotAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoDependabotAlertsAlertNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoDependabotAlertsAlertNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoDependabotRunnerSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoDependabotRunnerSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoDependabotSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoDependabotSecretsPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoDependabotSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoDependabotSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoDependabotSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
