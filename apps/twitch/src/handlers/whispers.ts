import { OpenAPIHono } from '@hono/zod-openapi'
import { postWhispersRoute } from '../routes'

const app = new OpenAPIHono()

export const whispersHandler = app.openapi(postWhispersRoute, (c) => {
  throw new Error('Not implemented')
})
