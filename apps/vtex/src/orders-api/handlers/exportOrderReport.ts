import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiOmsPvtAdminReportsCompletedRoute,
  getApiOmsPvtAdminReportsInprogressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportOrderReportHandler = app
  .openapi(getApiOmsPvtAdminReportsCompletedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOmsPvtAdminReportsInprogressRoute, (c) => {
    throw new Error('Not implemented')
  })
