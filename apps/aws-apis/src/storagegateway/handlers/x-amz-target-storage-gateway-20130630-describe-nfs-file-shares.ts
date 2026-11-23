import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DescribeNFSFileSharesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630DescribeNfsFileSharesHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DescribeNFSFileSharesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
