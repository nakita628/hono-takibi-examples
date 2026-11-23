import { OpenAPIHono } from '@hono/zod-openapi'
import { postCheckSqsRoute } from '../routes'

const app = new OpenAPIHono()

export const checkSqsHandler = app.openapi(postCheckSqsRoute, (c) => {
  throw new Error('Not implemented')
})
