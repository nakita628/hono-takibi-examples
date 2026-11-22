import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmNotesIdRoute,
  getCrmNotesIdRoute,
  getCrmNotesRoute,
  patchCrmNotesIdRoute,
  postCrmNotesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notesHandler = app
  .openapi(getCrmNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
