import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1ConnectedAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const connectedAccountHandler = app.openapi(postApiV1ConnectedAccountRoute, (c) => {
  throw new Error('Not implemented')
})
