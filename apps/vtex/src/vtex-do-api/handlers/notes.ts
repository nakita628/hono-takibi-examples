import { OpenAPIHono } from '@hono/zod-openapi'
import { getNotesNoteIdRoute, getNotesRoute, postNotesRoute } from '../routes'

const app = new OpenAPIHono()

export const notesHandler = app
  .openapi(getNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
