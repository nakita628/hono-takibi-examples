import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630UpdateFileSystemAssociationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630UpdateFileSystemAssociationHandler = app.openapi(
  postXAmzTargetStorageGateway20130630UpdateFileSystemAssociationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
