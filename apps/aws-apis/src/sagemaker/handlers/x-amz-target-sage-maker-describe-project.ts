import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeProjectHandler = app.openapi(
  postXAmzTargetSageMakerDescribeProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
