import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaBatchGetNamedQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaBatchGetNamedQueryHandler = app.openapi(
  postXAmzTargetAmazonAthenaBatchGetNamedQueryRoute,
  (c) => {},
)
