import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteNotesNoteIdRoute, getNotesNoteIdRoute } from '../routes'

const app = new OpenAPIHono()

export const notesHandler = app
  .openapi(getNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
