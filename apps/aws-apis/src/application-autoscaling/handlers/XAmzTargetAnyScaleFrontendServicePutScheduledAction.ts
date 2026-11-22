import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleFrontendServicePutScheduledActionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAnyScaleFrontendServicePutScheduledActionHandler = app.openapi(
  postXAmzTargetAnyScaleFrontendServicePutScheduledActionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
