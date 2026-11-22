import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630SetLocalConsolePasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630SetLocalConsolePasswordHandler = app.openapi(
  postXAmzTargetStorageGateway20130630SetLocalConsolePasswordRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
