import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetContainerImagesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetContainerImagesHandler = app.openapi(
  postXAmzTargetLightsail20161128GetContainerImagesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
