import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListTestGridSessionArtifactsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623ListTestGridSessionArtifactsHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListTestGridSessionArtifactsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
