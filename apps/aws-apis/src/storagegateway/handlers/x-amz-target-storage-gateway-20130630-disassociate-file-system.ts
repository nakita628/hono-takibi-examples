import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DisassociateFileSystemRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630DisassociateFileSystemHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DisassociateFileSystemRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
