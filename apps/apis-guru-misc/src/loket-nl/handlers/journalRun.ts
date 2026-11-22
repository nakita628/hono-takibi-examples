import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdErrorsRoute,
  getProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdExportAuditTrailRoute,
  getProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdRoute,
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdJournalrunsRoute,
  patchProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdRoute,
  postProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdDownloadRoute,
  postProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdSendRoute,
  postProvidersEmployersPayrolladministrationsPayrollAdministrationIdJournalrunsInitiateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const journalRunHandler = app
  .openapi(getProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdDownloadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdExportAuditTrailRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollAdministrationIdJournalrunsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProvidersEmployersPayrolladministrationsPayrollAdministrationIdJournalrunsInitiateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
