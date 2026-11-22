import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1StatusClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const statusHandler = app.openapi(getV1StatusClusterRoute, (c) => {
  throw new Error('Not implemented')
})
