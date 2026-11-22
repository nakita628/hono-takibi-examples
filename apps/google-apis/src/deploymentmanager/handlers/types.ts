import { OpenAPIHono } from '@hono/zod-openapi'
import { getDeploymentmanagerV2betaProjectsProjectGlobalTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const typesHandler = app.openapi(
  getDeploymentmanagerV2betaProjectsProjectGlobalTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
