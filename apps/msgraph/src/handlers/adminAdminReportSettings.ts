import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminReportSettingsRoute,
  getAdminReportSettingsRoute,
  patchAdminReportSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminAdminReportSettingsHandler = app
  .openapi(getAdminReportSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminReportSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminReportSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
