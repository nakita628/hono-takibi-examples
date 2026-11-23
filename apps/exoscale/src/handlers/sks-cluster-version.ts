import { OpenAPIHono } from '@hono/zod-openapi'
import { getSksClusterVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const sksClusterVersionHandler = app.openapi(getSksClusterVersionRoute, (c) => {
  throw new Error('Not implemented')
})
