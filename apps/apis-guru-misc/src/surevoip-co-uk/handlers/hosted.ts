import { OpenAPIHono } from '@hono/zod-openapi'
import { getHostedRoute } from '../routes'

const app = new OpenAPIHono()

export const hostedHandler = app.openapi(getHostedRoute, (c) => {
  throw new Error('Not implemented')
})
