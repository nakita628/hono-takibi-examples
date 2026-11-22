import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeTrialComponentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeTrialComponentHandler = app.openapi(
  postXAmzTargetSageMakerDescribeTrialComponentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
