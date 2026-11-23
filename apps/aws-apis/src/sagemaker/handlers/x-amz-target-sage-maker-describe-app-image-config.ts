import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeAppImageConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeAppImageConfigHandler = app.openapi(
  postXAmzTargetSageMakerDescribeAppImageConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
