import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVlmAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app.openapi(getApiVlmAccountRoute, (c) => {
  throw new Error('Not implemented')
})
