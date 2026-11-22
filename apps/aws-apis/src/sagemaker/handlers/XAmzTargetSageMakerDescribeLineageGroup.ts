import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeLineageGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeLineageGroupHandler = app.openapi(
  postXAmzTargetSageMakerDescribeLineageGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
