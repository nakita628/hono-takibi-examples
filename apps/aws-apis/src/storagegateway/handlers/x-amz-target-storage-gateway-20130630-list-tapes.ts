import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630ListTapesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630ListTapesHandler = app.openapi(
  postXAmzTargetStorageGateway20130630ListTapesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
