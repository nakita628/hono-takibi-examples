import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersPayrolladministrationsPayrollrunsNotesNoteIdRoute,
  getProvidersEmployersPayrolladministrationsPayrollrunsNotesNoteIdRoute,
  getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdNotesRoute,
  postProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdNotesRoute,
  putProvidersEmployersPayrolladministrationsPayrollrunsNotesNoteIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payrollRunNotesHandler = app
  .openapi(deleteProvidersEmployersPayrolladministrationsPayrollrunsNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersPayrolladministrationsPayrollrunsNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersPayrolladministrationsPayrollrunsNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
