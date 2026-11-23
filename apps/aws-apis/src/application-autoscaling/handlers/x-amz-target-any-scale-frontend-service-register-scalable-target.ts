import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleFrontendServiceRegisterScalableTargetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAnyScaleFrontendServiceRegisterScalableTargetHandler = app.openapi(
  postXAmzTargetAnyScaleFrontendServiceRegisterScalableTargetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
