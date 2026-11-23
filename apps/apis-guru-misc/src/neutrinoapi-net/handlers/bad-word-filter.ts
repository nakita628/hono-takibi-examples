import { OpenAPIHono } from '@hono/zod-openapi'
import { postBadWordFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const badWordFilterHandler = app.openapi(postBadWordFilterRoute, (c) => {
  throw new Error('Not implemented')
})
