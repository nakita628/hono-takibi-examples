import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeAppImageConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeAppImageConfigHandler = app.openapi(
  postXAmzTargetSageMakerDescribeAppImageConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
