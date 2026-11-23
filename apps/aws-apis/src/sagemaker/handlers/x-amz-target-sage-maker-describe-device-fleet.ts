import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeDeviceFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeDeviceFleetHandler = app.openapi(
  postXAmzTargetSageMakerDescribeDeviceFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
