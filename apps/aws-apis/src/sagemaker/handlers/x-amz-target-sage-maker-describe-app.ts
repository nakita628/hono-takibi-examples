import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeAppRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeAppHandler = app.openapi(
  postXAmzTargetSageMakerDescribeAppRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
