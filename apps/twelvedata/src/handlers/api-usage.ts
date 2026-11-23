import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiUsageRoute } from '../routes'

const app = new OpenAPIHono()

export const apiUsageHandler = app.openapi(getApiUsageRoute, (c) => {
  throw new Error('Not implemented')
})
