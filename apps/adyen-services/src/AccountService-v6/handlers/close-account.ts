import { OpenAPIHono } from '@hono/zod-openapi'
import { postCloseAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const closeAccountHandler = app.openapi(postCloseAccountRoute, (c) => {
  throw new Error('Not implemented')
})
