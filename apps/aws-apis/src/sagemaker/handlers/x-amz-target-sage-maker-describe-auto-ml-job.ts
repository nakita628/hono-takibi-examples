import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeAutoMLJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeAutoMlJobHandler = app.openapi(
  postXAmzTargetSageMakerDescribeAutoMLJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
