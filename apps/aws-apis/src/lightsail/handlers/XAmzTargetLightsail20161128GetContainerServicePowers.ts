import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetContainerServicePowersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetContainerServicePowersHandler = app.openapi(
  postXAmzTargetLightsail20161128GetContainerServicePowersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
