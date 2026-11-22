import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesAbsencesAbsenceIdRoute,
  getProvidersEmployersEmployeesAbsencesAbsenceIdRoute,
  getProvidersEmployersEmployeesEmployeeIdAbsencesOverviewRoute,
  getProvidersEmployersEmployeesEmployeeIdAbsencesRoute,
  patchProvidersEmployersEmployeesAbsencesAbsenceIdCloseabsenceRoute,
  patchProvidersEmployersEmployeesAbsencesAbsenceIdReopenabsenceRoute,
  postProvidersEmployersEmployeesEmployeeIdAbsencesRoute,
  putProvidersEmployersEmployeesAbsencesAbsenceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const absenceHandler = app
  .openapi(deleteProvidersEmployersEmployeesAbsencesAbsenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesAbsencesAbsenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesAbsencesAbsenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersEmployersEmployeesAbsencesAbsenceIdCloseabsenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersEmployersEmployeesAbsencesAbsenceIdReopenabsenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmployeeIdAbsencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmployeeIdAbsencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmployeeIdAbsencesOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
