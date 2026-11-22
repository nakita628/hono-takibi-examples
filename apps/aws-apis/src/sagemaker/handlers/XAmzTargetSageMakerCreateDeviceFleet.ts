import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateDeviceFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateDeviceFleetHandler = app.openapi(
  postXAmzTargetSageMakerCreateDeviceFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
