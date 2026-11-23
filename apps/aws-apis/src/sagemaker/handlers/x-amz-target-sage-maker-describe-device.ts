import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeDeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeDeviceHandler = app.openapi(
  postXAmzTargetSageMakerDescribeDeviceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
