import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128SetIpAddressTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128SetIpAddressTypeHandler = app.openapi(
  postXAmzTargetLightsail20161128SetIpAddressTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
