import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendVideoNoteRoute } from '../routes'

const app = new OpenAPIHono()

export const sendVideoNoteHandler = app.openapi(postSendVideoNoteRoute, (c) => {
  throw new Error('Not implemented')
})
