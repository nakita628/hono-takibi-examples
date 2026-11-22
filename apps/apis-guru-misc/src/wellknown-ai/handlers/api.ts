import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPluginsRoute } from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app.openapi(getApiPluginsRoute, (c) => {
  throw new Error('Not implemented')
})
