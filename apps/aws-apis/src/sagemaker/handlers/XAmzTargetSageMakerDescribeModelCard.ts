import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeModelCardRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeModelCardHandler = app.openapi(
  postXAmzTargetSageMakerDescribeModelCardRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
