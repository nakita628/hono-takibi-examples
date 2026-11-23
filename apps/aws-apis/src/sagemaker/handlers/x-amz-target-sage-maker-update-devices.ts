import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerUpdateDevicesHandler = app.openapi(
  postXAmzTargetSageMakerUpdateDevicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
