import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609NotesGdprDeleteRoute,
  postCrmObjects202609NotesMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609NotesGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609NotesMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
