import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630NotifyWhenUploadedRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630NotifyWhenUploadedHandler = app.openapi(
  postXAmzTargetStorageGateway20130630NotifyWhenUploadedRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
