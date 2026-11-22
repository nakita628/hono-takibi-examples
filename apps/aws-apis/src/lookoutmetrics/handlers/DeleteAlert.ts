import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteAlertRoute } from '../routes'

const app = new OpenAPIHono()

export const DeleteAlertHandler = app.openapi(postDeleteAlertRoute, (c) => {
  throw new Error('Not implemented')
})
