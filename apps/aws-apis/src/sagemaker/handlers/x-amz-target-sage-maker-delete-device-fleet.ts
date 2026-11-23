import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteDeviceFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteDeviceFleetHandler = app.openapi(
  postXAmzTargetSageMakerDeleteDeviceFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
