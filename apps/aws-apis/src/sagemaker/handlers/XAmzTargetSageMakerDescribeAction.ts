import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeActionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeActionHandler = app.openapi(
  postXAmzTargetSageMakerDescribeActionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
