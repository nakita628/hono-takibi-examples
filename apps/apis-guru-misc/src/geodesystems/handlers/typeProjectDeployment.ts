import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectDeploymentRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectDeploymentHandler = app.openapi(
  getRepositorySearchTypeProjectDeploymentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
