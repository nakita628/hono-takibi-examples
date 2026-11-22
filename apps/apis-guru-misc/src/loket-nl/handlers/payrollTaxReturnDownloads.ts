import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrolltaxreturnsPayrolltaxreturnIdSepafileRoute,
  getProvidersEmployersPayrolladministrationsPayrolltaxreturnsPayrolltaxreturnIdMessageRoute,
  getProvidersEmployersPayrolladministrationsPayrolltaxreturnsPayrolltaxreturnIdOverviewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payrollTaxReturnDownloadsHandler = app
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrolltaxreturnsPayrolltaxreturnIdMessageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrolltaxreturnsPayrolltaxreturnIdOverviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrolltaxreturnsPayrolltaxreturnIdSepafileRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
