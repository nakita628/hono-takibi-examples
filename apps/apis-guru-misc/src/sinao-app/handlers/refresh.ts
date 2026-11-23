import { OpenAPIHono } from '@hono/zod-openapi'
import { getRefreshRoute } from '../routes'

const app = new OpenAPIHono()

export const refreshHandler = app.openapi(getRefreshRoute, (c) => {
  throw new Error('Not implemented')
})
