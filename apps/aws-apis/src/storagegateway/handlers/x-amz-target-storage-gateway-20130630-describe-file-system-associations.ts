import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DescribeFileSystemAssociationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630DescribeFileSystemAssociationsHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DescribeFileSystemAssociationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
