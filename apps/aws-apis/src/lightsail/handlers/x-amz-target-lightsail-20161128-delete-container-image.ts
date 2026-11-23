import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DeleteContainerImageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128DeleteContainerImageHandler = app.openapi(
  postXAmzTargetLightsail20161128DeleteContainerImageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
