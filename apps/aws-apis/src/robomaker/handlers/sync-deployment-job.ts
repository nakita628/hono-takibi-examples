import { OpenAPIHono } from '@hono/zod-openapi'
import { postSyncDeploymentJobRoute } from '../routes'

const app = new OpenAPIHono()

export const syncDeploymentJobHandler = app.openapi(postSyncDeploymentJobRoute, (c) => {
  throw new Error('Not implemented')
})
