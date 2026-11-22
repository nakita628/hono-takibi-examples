import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetContainerAPIMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetContainerAPIMetadataHandler = app.openapi(
  postXAmzTargetLightsail20161128GetContainerAPIMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
