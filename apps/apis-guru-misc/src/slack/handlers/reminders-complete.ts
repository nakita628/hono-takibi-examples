import { OpenAPIHono } from '@hono/zod-openapi'
import { postRemindersCompleteRoute } from '../routes'

const app = new OpenAPIHono()

export const remindersCompleteHandler = app.openapi(postRemindersCompleteRoute, (c) => {
  throw new Error('Not implemented')
})
