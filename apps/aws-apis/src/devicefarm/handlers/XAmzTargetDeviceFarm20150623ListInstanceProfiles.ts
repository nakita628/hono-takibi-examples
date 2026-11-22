import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListInstanceProfilesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623ListInstanceProfilesHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListInstanceProfilesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
