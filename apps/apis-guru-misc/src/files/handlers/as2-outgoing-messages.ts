import { OpenAPIHono } from '@hono/zod-openapi'
import { getAs2OutgoingMessagesRoute } from '../routes'

const app = new OpenAPIHono()

export const as2OutgoingMessagesHandler = app.openapi(getAs2OutgoingMessagesRoute, (c) => {
  throw new Error('Not implemented')
})
