import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeAlgorithmRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeAlgorithmHandler = app.openapi(
  postXAmzTargetSageMakerDescribeAlgorithmRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
