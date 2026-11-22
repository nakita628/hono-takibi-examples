import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleFrontendServiceDeregisterScalableTargetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAnyScaleFrontendServiceDeregisterScalableTargetHandler = app.openapi(
  postXAmzTargetAnyScaleFrontendServiceDeregisterScalableTargetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
