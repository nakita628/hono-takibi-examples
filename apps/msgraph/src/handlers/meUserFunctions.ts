import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMeExportDeviceAndAppManagementDataRoute,
  getMeExportDeviceAndAppManagementDataSkipSkipTopTopRoute,
  getMeGetManagedAppDiagnosticStatusesRoute,
  getMeGetManagedAppPoliciesRoute,
  getMeGetManagedDevicesWithAppFailuresRoute,
  getMeReminderViewStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meUserFunctionsHandler = app
  .openapi(getMeExportDeviceAndAppManagementDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeExportDeviceAndAppManagementDataSkipSkipTopTopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeGetManagedAppDiagnosticStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeGetManagedAppPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeGetManagedDevicesWithAppFailuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeReminderViewStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
