import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeFeatureGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeFeatureGroupHandler = app.openapi(
  postXAmzTargetSageMakerDescribeFeatureGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
