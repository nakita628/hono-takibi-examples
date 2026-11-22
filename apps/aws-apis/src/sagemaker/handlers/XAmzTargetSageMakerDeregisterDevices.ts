import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeregisterDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeregisterDevicesHandler = app.openapi(
  postXAmzTargetSageMakerDeregisterDevicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
