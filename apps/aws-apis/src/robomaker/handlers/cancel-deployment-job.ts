import { OpenAPIHono } from '@hono/zod-openapi'
import { postCancelDeploymentJobRoute } from '../routes'

const app = new OpenAPIHono()

export const cancelDeploymentJobHandler = app.openapi(postCancelDeploymentJobRoute, (c) => {
  throw new Error('Not implemented')
})
