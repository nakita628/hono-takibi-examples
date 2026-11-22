import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeEdgePackagingJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeEdgePackagingJobHandler = app.openapi(
  postXAmzTargetSageMakerDescribeEdgePackagingJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
