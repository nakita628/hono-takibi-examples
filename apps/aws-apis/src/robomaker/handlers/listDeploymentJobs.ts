import { OpenAPIHono } from '@hono/zod-openapi'
import { postListDeploymentJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const listDeploymentJobsHandler = app.openapi(postListDeploymentJobsRoute, (c) => {
  throw new Error('Not implemented')
})
