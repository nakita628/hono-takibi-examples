import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeSpaceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeSpaceHandler = app.openapi(
  postXAmzTargetSageMakerDescribeSpaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
