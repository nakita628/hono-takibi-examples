import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesAbsencesAbsencecontactHistoryAbsencecontactHistoryIdRoute,
  getProvidersEmployersEmployeesAbsencesAbsencecontactHistoryAbsencecontactHistoryIdRoute,
  getProvidersEmployersEmployeesAbsencesAbsenceIdAbsencecontactHistoryRoute,
  postProvidersEmployersEmployeesAbsencesAbsenceIdAbsencecontactHistoryRoute,
  putProvidersEmployersEmployeesAbsencesAbsencecontactHistoryAbsencecontactHistoryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactHistoryHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesAbsencesAbsencecontactHistoryAbsencecontactHistoryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesAbsencesAbsencecontactHistoryAbsencecontactHistoryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersEmployeesAbsencesAbsencecontactHistoryAbsencecontactHistoryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersEmployeesAbsencesAbsenceIdAbsencecontactHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesAbsencesAbsenceIdAbsencecontactHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
