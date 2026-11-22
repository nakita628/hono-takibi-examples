import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const statusHandler = app.openapi(getApiStatusRoute, (c) => {
  throw new Error('Not implemented')
})
