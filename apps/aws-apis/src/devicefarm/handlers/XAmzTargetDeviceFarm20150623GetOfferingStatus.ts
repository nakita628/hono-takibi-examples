import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623GetOfferingStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623GetOfferingStatusHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623GetOfferingStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
