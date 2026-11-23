import { OpenAPIHono } from '@hono/zod-openapi'
import { getDeploymentsRoute } from '../routes'

const app = new OpenAPIHono()

export const deploymentsHandler = app.openapi(getDeploymentsRoute, (c) => {
  throw new Error('Not implemented')
})
