import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollrunsPeriodIdInitiationvaluesRoute,
  postProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollrunsInitiateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const initiatePayrollRunHandler = app
  .openapi(
    postProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollrunsInitiateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollrunsPeriodIdInitiationvaluesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
