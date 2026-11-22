import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetContainerServicesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetContainerServicesHandler = app.openapi(
  postXAmzTargetLightsail20161128GetContainerServicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
