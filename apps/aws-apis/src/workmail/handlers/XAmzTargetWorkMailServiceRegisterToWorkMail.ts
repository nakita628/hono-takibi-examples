import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceRegisterToWorkMailRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceRegisterToWorkMailHandler = app.openapi(
  postXAmzTargetWorkMailServiceRegisterToWorkMailRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
