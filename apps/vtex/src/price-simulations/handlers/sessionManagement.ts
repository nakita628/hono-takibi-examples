import { OpenAPIHono } from '@hono/zod-openapi'
import { postSessionsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const sessionManagementHandler = app.openapi(postSessionsIndexRoute, (c) => {
  throw new Error('Not implemented')
})
