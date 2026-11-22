import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const configAPIHandler = app.openapi(getV1ConfigRoute, (c) => {
  throw new Error('Not implemented')
})
