import { OpenAPIHono } from '@hono/zod-openapi'
import { postAcceptanceRequestedRoute } from '../routes'

const app = new OpenAPIHono()

export const acceptanceRequestedHandler = app.openapi(postAcceptanceRequestedRoute, (c) => {
  throw new Error('Not implemented')
})
