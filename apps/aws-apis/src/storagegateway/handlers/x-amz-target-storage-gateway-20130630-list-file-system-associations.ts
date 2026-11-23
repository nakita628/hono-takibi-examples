import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630ListFileSystemAssociationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630ListFileSystemAssociationsHandler = app.openapi(
  postXAmzTargetStorageGateway20130630ListFileSystemAssociationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
