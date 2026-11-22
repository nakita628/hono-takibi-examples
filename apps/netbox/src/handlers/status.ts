import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiStatusIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const statusHandler = app.openapi(getApiStatusIndexRoute, (c) => {
  throw new Error('Not implemented')
})
