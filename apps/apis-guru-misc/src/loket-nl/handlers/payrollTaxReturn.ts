import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrolltaxreturnsRoute,
  getProvidersEmployersPayrolladministrationsPayrolltaxreturnsPayrolltaxreturnIdIdealPaymentStatusRoute,
  getProvidersEmployersPayrolladministrationsPayrolltaxreturnsPayrolltaxreturnIdIdealRoute,
  getProvidersEmployersPayrolladministrationsPayrolltaxreturnsPayrolltaxreturnIdRoute,
  patchProvidersEmployersPayrolladministrationsPayrolltaxreturnsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payrollTaxReturnHandler = app
  .openapi(patchProvidersEmployersPayrolladministrationsPayrolltaxreturnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrolltaxreturnsPayrolltaxreturnIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrolltaxreturnsPayrolltaxreturnIdIdealRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrolltaxreturnsPayrolltaxreturnIdIdealPaymentStatusRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrolltaxreturnsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
