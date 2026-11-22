import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeTrialRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeTrialHandler = app.openapi(
  postXAmzTargetSageMakerDescribeTrialRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
