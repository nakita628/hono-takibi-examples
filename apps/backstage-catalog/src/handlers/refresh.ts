import { OpenAPIHono } from '@hono/zod-openapi'
import { postRefreshRoute } from '../routes'

const app = new OpenAPIHono()

export const refreshHandler = app.openapi(postRefreshRoute, (c) => {
  throw new Error('Not implemented')
})
