import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeActionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeActionHandler = app.openapi(
  postXAmzTargetSageMakerDescribeActionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
