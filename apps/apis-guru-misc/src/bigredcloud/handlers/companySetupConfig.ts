import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CompanySetupConfigGetCompanyOptionsRoute,
  getV1CompanySetupConfigGetFinancialYearRoute,
  getV1CompanySetupConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const companySetupConfigHandler = app
  .openapi(getV1CompanySetupConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CompanySetupConfigGetCompanyOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CompanySetupConfigGetFinancialYearRoute, (c) => {
    throw new Error('Not implemented')
  })
