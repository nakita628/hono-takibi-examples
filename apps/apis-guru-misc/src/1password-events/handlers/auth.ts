import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiAuthIntrospectRoute } from '../routes'

const app = new OpenAPIHono()

export const authHandler = app.openapi(getApiAuthIntrospectRoute, (c) => {
  throw new Error('Not implemented')
})
