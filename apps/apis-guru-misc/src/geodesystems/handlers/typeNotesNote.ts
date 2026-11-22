import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeNotesNoteRoute } from '../routes'

const app = new OpenAPIHono()

export const typeNotesNoteHandler = app.openapi(getRepositorySearchTypeNotesNoteRoute, (c) => {
  throw new Error('Not implemented')
})
