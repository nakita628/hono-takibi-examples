import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdReportsAgedCreditorAvailableRoute,
  getCompaniesCompanyIdReportsAgedCreditorRoute,
  getCompaniesCompanyIdReportsAgedDebtorAvailableRoute,
  getCompaniesCompanyIdReportsAgedDebtorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(getCompaniesCompanyIdReportsAgedCreditorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdReportsAgedCreditorAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdReportsAgedDebtorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdReportsAgedDebtorAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
