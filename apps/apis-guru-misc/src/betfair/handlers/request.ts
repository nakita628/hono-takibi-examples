import { OpenAPIHono } from '@hono/zod-openapi'
import { postRequestRoute } from '../routes'

const app = new OpenAPIHono()

export const requestHandler = app.openapi(postRequestRoute, (c) => {
  throw new Error('Not implemented')
})
