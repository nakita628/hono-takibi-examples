import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630ListLocalDisksRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630ListLocalDisksHandler = app.openapi(
  postXAmzTargetStorageGateway20130630ListLocalDisksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
