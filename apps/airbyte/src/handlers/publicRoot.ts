import { OpenAPIHono } from '@hono/zod-openapi'
import { getPublicRoute } from '../routes'

const app = new OpenAPIHono()

export const publicRootHandler = app.openapi(getPublicRoute, (c) => {
  throw new Error('Not implemented')
})
