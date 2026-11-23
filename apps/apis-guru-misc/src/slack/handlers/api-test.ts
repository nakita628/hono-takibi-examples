import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiTestRoute } from '../routes'

const app = new OpenAPIHono()

export const apiTestHandler = app.openapi(getApiTestRoute, (c) => {
  throw new Error('Not implemented')
})
