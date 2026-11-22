import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteDeviceFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteDeviceFleetHandler = app.openapi(
  postXAmzTargetSageMakerDeleteDeviceFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
