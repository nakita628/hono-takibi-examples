import { OpenAPIHono } from '@hono/zod-openapi'
import { getComputeActorsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const statefulActorsHandler = app.openapi(getComputeActorsIdRoute, (c) => {
  throw new Error('Not implemented')
})
