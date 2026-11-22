import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeTrainingJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeTrainingJobHandler = app.openapi(
  postXAmzTargetSageMakerDescribeTrainingJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
