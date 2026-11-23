import { OpenAPIHono } from '@hono/zod-openapi'
import { postRemindersDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const remindersDeleteHandler = app.openapi(postRemindersDeleteRoute, (c) => {
  throw new Error('Not implemented')
})
