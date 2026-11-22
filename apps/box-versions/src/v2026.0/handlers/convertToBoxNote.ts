import { OpenAPIHono } from '@hono/zod-openapi'
import { postNotesConvertRoute } from '../routes'

const app = new OpenAPIHono()

export const convertToBoxNoteHandler = app.openapi(postNotesConvertRoute, (c) => {
  throw new Error('Not implemented')
})
