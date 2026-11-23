import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630CreateNFSFileShareRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630CreateNfsFileShareHandler = app.openapi(
  postXAmzTargetStorageGateway20130630CreateNFSFileShareRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
