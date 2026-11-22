import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdDeployTokensTokenIdRoute,
  deleteApiV4ProjectsIdDeployKeysKeyIdRoute,
  deleteApiV4ProjectsIdDeploymentsDeploymentIdRoute,
  deleteApiV4ProjectsIdDeployTokensTokenIdRoute,
  getApiV4DeployKeysRoute,
  getApiV4DeployTokensRoute,
  getApiV4GroupsIdDeployTokensRoute,
  getApiV4GroupsIdDeployTokensTokenIdRoute,
  getApiV4ProjectsIdDeployKeysKeyIdRoute,
  getApiV4ProjectsIdDeployKeysRoute,
  getApiV4ProjectsIdDeploymentsDeploymentIdMergeRequestsRoute,
  getApiV4ProjectsIdDeploymentsDeploymentIdRoute,
  getApiV4ProjectsIdDeploymentsRoute,
  getApiV4ProjectsIdDeployTokensRoute,
  getApiV4ProjectsIdDeployTokensTokenIdRoute,
  getApiV4UsersUserIdProjectDeployKeysRoute,
  postApiV4DeployKeysRoute,
  postApiV4GroupsIdDeployTokensRoute,
  postApiV4ProjectsIdDeployKeysKeyIdEnableRoute,
  postApiV4ProjectsIdDeployKeysRoute,
  postApiV4ProjectsIdDeploymentsDeploymentIdApprovalRoute,
  postApiV4ProjectsIdDeploymentsRoute,
  postApiV4ProjectsIdDeployTokensRoute,
  putApiV4ProjectsIdDeployKeysKeyIdRoute,
  putApiV4ProjectsIdDeploymentsDeploymentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deployResourcesHandler = app
  .openapi(getApiV4UsersUserIdProjectDeployKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdDeploymentsDeploymentIdMergeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdDeploymentsDeploymentIdApprovalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4DeployTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdDeployTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdDeployTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdDeployTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdDeployTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDeployTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdDeployTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDeployTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdDeployTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4DeployKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4DeployKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdDeployKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdDeployKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdDeployKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdDeployKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdDeployKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdDeployKeysKeyIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
