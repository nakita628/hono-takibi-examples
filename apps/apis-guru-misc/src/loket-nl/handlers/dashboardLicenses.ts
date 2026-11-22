import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployerIdDashboardLicensesRoute,
  putProvidersEmployersEmployerIdDashboardLicensesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dashboardLicensesHandler = app
  .openapi(getProvidersEmployersEmployerIdDashboardLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployerIdDashboardLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
