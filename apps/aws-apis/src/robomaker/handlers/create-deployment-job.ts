import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateDeploymentJobRoute } from '../routes'

const app = new OpenAPIHono()

export const createDeploymentJobHandler = app.openapi(postCreateDeploymentJobRoute, (c) => {
  throw new Error('Not implemented')
})
