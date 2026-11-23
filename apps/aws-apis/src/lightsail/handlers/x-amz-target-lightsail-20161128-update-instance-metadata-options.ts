import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128UpdateInstanceMetadataOptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128UpdateInstanceMetadataOptionsHandler = app.openapi(
  postXAmzTargetLightsail20161128UpdateInstanceMetadataOptionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
