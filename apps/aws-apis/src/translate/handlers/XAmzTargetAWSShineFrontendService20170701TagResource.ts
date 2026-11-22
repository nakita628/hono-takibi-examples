import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShineFrontendService20170701TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShineFrontendService20170701TagResourceHandler = app.openapi(
  postXAmzTargetAWSShineFrontendService20170701TagResourceRoute,
  (c) => {},
)
