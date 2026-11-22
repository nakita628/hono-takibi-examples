import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623GetAccountSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623GetAccountSettingsHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623GetAccountSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
