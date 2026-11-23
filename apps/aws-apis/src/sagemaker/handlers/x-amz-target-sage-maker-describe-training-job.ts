import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeTrainingJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeTrainingJobHandler = app.openapi(
  postXAmzTargetSageMakerDescribeTrainingJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
