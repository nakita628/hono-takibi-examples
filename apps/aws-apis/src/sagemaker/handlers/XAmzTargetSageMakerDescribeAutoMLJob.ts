import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeAutoMLJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeAutoMLJobHandler = app.openapi(
  postXAmzTargetSageMakerDescribeAutoMLJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
