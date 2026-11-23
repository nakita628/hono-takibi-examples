import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeModelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeModelHandler = app.openapi(
  postXAmzTargetSageMakerDescribeModelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
