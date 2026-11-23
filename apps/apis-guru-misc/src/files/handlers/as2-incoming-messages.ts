import { OpenAPIHono } from '@hono/zod-openapi'
import { getAs2IncomingMessagesRoute } from '../routes'

const app = new OpenAPIHono()

export const as2IncomingMessagesHandler = app.openapi(getAs2IncomingMessagesRoute, (c) => {
  throw new Error('Not implemented')
})
