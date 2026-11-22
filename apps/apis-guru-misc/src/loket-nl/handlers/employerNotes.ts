import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersNotesNoteIdRoute,
  getProvidersEmployersEmployerIdNotesRoute,
  getProvidersEmployersNotesNoteIdRoute,
  postProvidersEmployersEmployerIdNotesRoute,
  putProvidersEmployersNotesNoteIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employerNotesHandler = app
  .openapi(deleteProvidersEmployersNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployerIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
