import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const pfmHandler = app.openapi(postAuthTokenRoute, (c) => {
  throw new Error('Not implemented')
})
