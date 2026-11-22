import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesResourceRoute,
  getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourcesHandler = app
  .openapi(
    getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesResourceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
