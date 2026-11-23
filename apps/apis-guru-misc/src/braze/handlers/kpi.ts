import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getKpiDauDataSeriesRoute,
  getKpiMauDataSeriesRoute,
  getKpiNewUsersDataSeriesRoute,
  getKpiUninstallsDataSeriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const kpiHandler = app
  .openapi(getKpiDauDataSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKpiMauDataSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKpiNewUsersDataSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKpiUninstallsDataSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
