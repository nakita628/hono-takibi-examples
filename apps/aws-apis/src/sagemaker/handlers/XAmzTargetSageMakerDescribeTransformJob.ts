import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeTransformJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeTransformJobHandler = app.openapi(
  postXAmzTargetSageMakerDescribeTransformJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
