import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteAlertRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteAlertHandler = app.openapi(postDeleteAlertRoute, (c) => {
  throw new Error('Not implemented')
})
