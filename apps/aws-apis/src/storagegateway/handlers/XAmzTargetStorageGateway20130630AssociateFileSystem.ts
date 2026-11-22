import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630AssociateFileSystemRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630AssociateFileSystemHandler = app.openapi(
  postXAmzTargetStorageGateway20130630AssociateFileSystemRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
