import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsNotesNoteIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdNotesRoute,
  getProvidersEmployersEmployeesEmploymentsNotesNoteIdRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdNotesRoute,
  putProvidersEmployersEmployeesEmploymentsNotesNoteIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employmentNotesHandler = app
  .openapi(deleteProvidersEmployersEmployeesEmploymentsNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesEmploymentsNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmploymentsEmploymentIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
