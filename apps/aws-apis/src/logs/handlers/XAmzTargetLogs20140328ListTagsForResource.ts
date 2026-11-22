import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328ListTagsForResourceHandler = app.openapi(
  postXAmzTargetLogs20140328ListTagsForResourceRoute,
  (c) => {},
)
