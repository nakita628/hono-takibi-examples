import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleFrontendServiceRegisterScalableTargetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAnyScaleFrontendServiceRegisterScalableTargetHandler = app.openapi(
  postXAmzTargetAnyScaleFrontendServiceRegisterScalableTargetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
