import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630UpdateNFSFileShareRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630UpdateNfsFileShareHandler = app.openapi(
  postXAmzTargetStorageGateway20130630UpdateNFSFileShareRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
