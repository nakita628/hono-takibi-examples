import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeImageVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeImageVersionHandler = app.openapi(
  postXAmzTargetSageMakerDescribeImageVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
