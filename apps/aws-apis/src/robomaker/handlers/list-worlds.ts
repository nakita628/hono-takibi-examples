import { OpenAPIHono } from '@hono/zod-openapi'
import { postListWorldsRoute } from '../routes'

const app = new OpenAPIHono()

export const listWorldsHandler = app.openapi(postListWorldsRoute, (c) => {
  throw new Error('Not implemented')
})
