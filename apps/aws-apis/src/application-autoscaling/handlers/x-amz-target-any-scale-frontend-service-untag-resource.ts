import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleFrontendServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAnyScaleFrontendServiceUntagResourceHandler = app.openapi(
  postXAmzTargetAnyScaleFrontendServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
