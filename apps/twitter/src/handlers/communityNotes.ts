import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete2NotesIdRoute,
  get2NotesSearchNotesWrittenRoute,
  get2NotesSearchPostsEligibleForNotesRoute,
  post2NotesEvaluateRoute,
  post2NotesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const communityNotesHandler = app
  .openapi(post2NotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2NotesEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2NotesSearchNotesWrittenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2NotesSearchPostsEligibleForNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2NotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
