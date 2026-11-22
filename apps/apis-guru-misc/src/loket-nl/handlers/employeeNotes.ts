import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesNotesNoteIdRoute,
  getProvidersEmployersEmployeesEmployeeIdNotesRoute,
  getProvidersEmployersEmployeesNotesNoteIdRoute,
  postProvidersEmployersEmployeesEmployeeIdNotesRoute,
  putProvidersEmployersEmployeesNotesNoteIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employeeNotesHandler = app
  .openapi(deleteProvidersEmployersEmployeesNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmployeeIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmployeeIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
