import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128RegisterContainerImageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128RegisterContainerImageHandler = app.openapi(
  postXAmzTargetLightsail20161128RegisterContainerImageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
