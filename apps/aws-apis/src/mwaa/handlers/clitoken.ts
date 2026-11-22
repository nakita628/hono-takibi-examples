import { OpenAPIHono } from '@hono/zod-openapi'
import { postClitokenNameRoute } from '../routes'

const app = new OpenAPIHono()

export const clitokenHandler = app.openapi(postClitokenNameRoute, (c) => {
  throw new Error('Not implemented')
})
