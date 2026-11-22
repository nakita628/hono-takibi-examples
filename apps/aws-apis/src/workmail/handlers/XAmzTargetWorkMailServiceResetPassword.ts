import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceResetPasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceResetPasswordHandler = app.openapi(
  postXAmzTargetWorkMailServiceResetPasswordRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
