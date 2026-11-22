import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNotesNoteIdRoute,
  getCompaniesCompanyIdNotesRoute,
  getContactsContactIdNotesRoute,
  getNotesNoteIdRoute,
  postCompaniesCompanyIdNotesRoute,
  postContactsContactIdNotesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notesHandler = app
  .openapi(getCompaniesCompanyIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsContactIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsContactIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
