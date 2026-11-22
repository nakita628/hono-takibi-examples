import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDeviceManagementGetEffectivePermissionsScopeScopeRoute,
  getDeviceManagementUserExperienceAnalyticsSummarizeWorkFromAnywhereDevicesRoute,
  getDeviceManagementVerifyWindowsEnrollmentAutoDiscoveryDomainNameDomainNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementDeviceManagementFunctionsHandler = app
  .openapi(getDeviceManagementGetEffectivePermissionsScopeScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementUserExperienceAnalyticsSummarizeWorkFromAnywhereDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementVerifyWindowsEnrollmentAutoDiscoveryDomainNameDomainNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
