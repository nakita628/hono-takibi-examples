import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DescribeChapCredentialsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630DescribeChapCredentialsHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DescribeChapCredentialsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
