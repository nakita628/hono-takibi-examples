import { OpenAPIHono } from '@hono/zod-openapi'
import { getRemindersInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const remindersInfoHandler = app.openapi(getRemindersInfoRoute, (c) => {
  throw new Error('Not implemented')
})
