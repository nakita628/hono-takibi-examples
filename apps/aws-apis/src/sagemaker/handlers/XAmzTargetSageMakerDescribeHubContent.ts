import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeHubContentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeHubContentHandler = app.openapi(
  postXAmzTargetSageMakerDescribeHubContentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
