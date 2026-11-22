import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630UpdateVTLDeviceTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630UpdateVTLDeviceTypeHandler = app.openapi(
  postXAmzTargetStorageGateway20130630UpdateVTLDeviceTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
