import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetDeploymentsRoute } from '../routes'

const app = new OpenAPIHono()

export const GetDeploymentsHandler = app.openapi(postGetDeploymentsRoute, (c) => {
  throw new Error('Not implemented')
})
