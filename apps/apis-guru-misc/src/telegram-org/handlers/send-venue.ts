import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendVenueRoute } from '../routes'

const app = new OpenAPIHono()

export const sendVenueHandler = app.openapi(postSendVenueRoute, (c) => {
  throw new Error('Not implemented')
})
