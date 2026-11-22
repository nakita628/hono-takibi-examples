import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListArtifactsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623ListArtifactsHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListArtifactsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
