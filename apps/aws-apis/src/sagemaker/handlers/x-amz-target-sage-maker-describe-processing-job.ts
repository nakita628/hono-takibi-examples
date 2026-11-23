import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeProcessingJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeProcessingJobHandler = app.openapi(
  postXAmzTargetSageMakerDescribeProcessingJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
