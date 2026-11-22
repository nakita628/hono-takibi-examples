import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployeesEmploymentsEmploymentIdLeavebalancesRoute,
  getProvidersEmployersEmployerIdLeavebalancesGroupedRoute,
  getProvidersEmployersEmployerIdLeavebalancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const leaveBalanceHandler = app
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdLeavebalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdLeavebalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdLeavebalancesGroupedRoute, (c) => {
    throw new Error('Not implemented')
  })
