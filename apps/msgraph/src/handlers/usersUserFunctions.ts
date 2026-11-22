import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersDeltaRoute,
  getUsersUserIdExportDeviceAndAppManagementDataRoute,
  getUsersUserIdExportDeviceAndAppManagementDataSkipSkipTopTopRoute,
  getUsersUserIdGetManagedAppDiagnosticStatusesRoute,
  getUsersUserIdGetManagedAppPoliciesRoute,
  getUsersUserIdGetManagedDevicesWithAppFailuresRoute,
  getUsersUserIdReminderViewStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersUserFunctionsHandler = app
  .openapi(getUsersUserIdExportDeviceAndAppManagementDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdExportDeviceAndAppManagementDataSkipSkipTopTopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdGetManagedAppDiagnosticStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdGetManagedAppPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdGetManagedDevicesWithAppFailuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdReminderViewStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
