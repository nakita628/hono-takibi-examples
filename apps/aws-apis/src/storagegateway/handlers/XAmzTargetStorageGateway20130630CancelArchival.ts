import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630CancelArchivalRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630CancelArchivalHandler = app.openapi(
  postXAmzTargetStorageGateway20130630CancelArchivalRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
