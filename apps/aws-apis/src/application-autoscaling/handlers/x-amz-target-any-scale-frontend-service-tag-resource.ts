import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleFrontendServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAnyScaleFrontendServiceTagResourceHandler = app.openapi(
  postXAmzTargetAnyScaleFrontendServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
