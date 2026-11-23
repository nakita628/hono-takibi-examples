import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeLineageGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeLineageGroupHandler = app.openapi(
  postXAmzTargetSageMakerDescribeLineageGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
