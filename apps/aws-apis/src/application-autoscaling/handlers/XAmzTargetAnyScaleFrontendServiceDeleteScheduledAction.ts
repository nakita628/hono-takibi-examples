import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleFrontendServiceDeleteScheduledActionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAnyScaleFrontendServiceDeleteScheduledActionHandler = app.openapi(
  postXAmzTargetAnyScaleFrontendServiceDeleteScheduledActionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
