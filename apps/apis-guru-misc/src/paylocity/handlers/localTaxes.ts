import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeRoute,
  getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesRoute,
  getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeRoute,
  postV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const localTaxesHandler = app
  .openapi(getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
