import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdBalanceSheetRoute,
  getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdDefaultsetRoute,
  getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdErrorsandwarningsRoute,
  getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdJournalentriesperdistributionunitoverviewsRoute,
  getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdPaymentoverviewsRoute,
  getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdPayrollcontrolregisterRoute,
  getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdPayslipsRoute,
  getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdRunoverviewsRoute,
  getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdSepafilesRoute,
  getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdTotalsepafileRoute,
  getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdWagesheetsRoute,
  getProvidersEmployersPayrolladministrationsPayrollrunsSepafilesSepafileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payrollRunDownloadsHandler = app
  .openapi(getProvidersEmployersPayrolladministrationsPayrollrunsSepafilesSepafileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdBalanceSheetRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdDefaultsetRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdErrorsandwarningsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdJournalentriesperdistributionunitoverviewsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdPaymentoverviewsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdPayrollcontrolregisterRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdPayslipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdRunoverviewsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdSepafilesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdTotalsepafileRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdWagesheetsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
