import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateresourceshareRoute } from '../routes'

const app = new OpenAPIHono()

export const updateresourceshareHandler = app.openapi(postUpdateresourceshareRoute, (c) => {
  throw new Error('Not implemented')
})
