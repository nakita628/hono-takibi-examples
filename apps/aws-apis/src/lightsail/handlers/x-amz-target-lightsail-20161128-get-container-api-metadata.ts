import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetContainerAPIMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetContainerApiMetadataHandler = app.openapi(
  postXAmzTargetLightsail20161128GetContainerAPIMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
