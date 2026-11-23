import { OpenAPIHono } from '@hono/zod-openapi'
import { getRemindersListRoute } from '../routes'

const app = new OpenAPIHono()

export const remindersListHandler = app.openapi(getRemindersListRoute, (c) => {
  throw new Error('Not implemented')
})
