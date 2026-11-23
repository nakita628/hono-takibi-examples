import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleFrontendServiceDeleteScheduledActionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAnyScaleFrontendServiceDeleteScheduledActionHandler = app.openapi(
  postXAmzTargetAnyScaleFrontendServiceDeleteScheduledActionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
