import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesAbsencesAbsenceprogressAbsenceProgressIdRoute,
  getProvidersEmployersEmployeesAbsencesAbsenceIdAbsenceprogressRoute,
  getProvidersEmployersEmployeesAbsencesAbsenceprogressAbsenceProgressIdRoute,
  postProvidersEmployersEmployeesAbsencesAbsenceIdAbsenceprogressRoute,
  putProvidersEmployersEmployeesAbsencesAbsenceprogressAbsenceProgressIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const absenceProgressHandler = app
  .openapi(deleteProvidersEmployersEmployeesAbsencesAbsenceprogressAbsenceProgressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesAbsencesAbsenceprogressAbsenceProgressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesAbsencesAbsenceprogressAbsenceProgressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesAbsencesAbsenceIdAbsenceprogressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesAbsencesAbsenceIdAbsenceprogressRoute, (c) => {
    throw new Error('Not implemented')
  })
