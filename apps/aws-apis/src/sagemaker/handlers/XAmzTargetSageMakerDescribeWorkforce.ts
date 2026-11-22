import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeWorkforceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeWorkforceHandler = app.openapi(
  postXAmzTargetSageMakerDescribeWorkforceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
