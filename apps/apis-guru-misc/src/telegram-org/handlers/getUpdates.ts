import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetUpdatesRoute } from '../routes'

const app = new OpenAPIHono()

export const getUpdatesHandler = app.openapi(postGetUpdatesRoute, (c) => {
  throw new Error('Not implemented')
})
