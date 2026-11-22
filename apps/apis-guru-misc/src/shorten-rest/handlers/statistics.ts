import { OpenAPIHono } from '@hono/zod-openapi'
import { postClicksPgRoute } from '../routes'

const app = new OpenAPIHono()

export const statisticsHandler = app.openapi(postClicksPgRoute, (c) => {
  throw new Error('Not implemented')
})
