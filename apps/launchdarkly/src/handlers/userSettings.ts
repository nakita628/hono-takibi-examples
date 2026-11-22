import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsFeatureFlagKeyRoute,
  getApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsRoute,
  getApiV2UsersProjectKeyUserKeyExpiringUserTargetsEnvironmentKeyRoute,
  patchApiV2UsersProjectKeyUserKeyExpiringUserTargetsEnvironmentKeyRoute,
  putApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsFeatureFlagKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userSettingsHandler = app
  .openapi(getApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsFeatureFlagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsFeatureFlagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersProjectKeyUserKeyExpiringUserTargetsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2UsersProjectKeyUserKeyExpiringUserTargetsEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
