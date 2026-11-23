import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceRegisterToWorkMailRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceRegisterToWorkMailHandler = app.openapi(
  postXAmzTargetWorkMailServiceRegisterToWorkMailRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
