import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2CiTestOptimizationSettingsServiceRoute,
  patchApiV2CiTestOptimizationSettingsPoliciesRoute,
  patchApiV2CiTestOptimizationSettingsServiceRoute,
  patchApiV2TestFlakyTestManagementTestsRoute,
  postApiV2CiTestOptimizationSettingsPoliciesRoute,
  postApiV2CiTestOptimizationSettingsServiceRoute,
  postApiV2TestFlakyTestManagementTestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const testOptimizationHandler = app
  .openapi(patchApiV2CiTestOptimizationSettingsPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CiTestOptimizationSettingsPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CiTestOptimizationSettingsServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CiTestOptimizationSettingsServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CiTestOptimizationSettingsServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2TestFlakyTestManagementTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TestFlakyTestManagementTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
