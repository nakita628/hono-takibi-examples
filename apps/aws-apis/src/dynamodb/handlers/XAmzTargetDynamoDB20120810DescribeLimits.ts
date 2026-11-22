import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810DescribeLimitsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810DescribeLimitsHandler = app.openapi(
  postXAmzTargetDynamoDB20120810DescribeLimitsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
