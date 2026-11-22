import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleFrontendServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAnyScaleFrontendServiceTagResourceHandler = app.openapi(
  postXAmzTargetAnyScaleFrontendServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
