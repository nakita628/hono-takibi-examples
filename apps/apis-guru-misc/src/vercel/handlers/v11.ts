import { OpenAPIHono } from '@hono/zod-openapi'
import { getV11DeploymentsDeploymentIdBuildsRoute } from '../routes'

const app = new OpenAPIHono()

export const v11Handler = app.openapi(getV11DeploymentsDeploymentIdBuildsRoute, (c) => {
  throw new Error('Not implemented')
})
