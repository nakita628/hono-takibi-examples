import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateDeviceFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerUpdateDeviceFleetHandler = app.openapi(
  postXAmzTargetSageMakerUpdateDeviceFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
