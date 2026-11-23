import { OpenAPIHono } from '@hono/zod-openapi'
import { postRemindersAddRoute } from '../routes'

const app = new OpenAPIHono()

export const remindersAddHandler = app.openapi(postRemindersAddRoute, (c) => {
  throw new Error('Not implemented')
})
