import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const updateHandler = app.openapi(postUpdateRoute, (c) => {
  throw new Error('Not implemented')
})
