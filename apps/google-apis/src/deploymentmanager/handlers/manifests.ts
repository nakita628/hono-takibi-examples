import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsManifestRoute,
  getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const manifestsHandler = app
  .openapi(
    getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsManifestRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
