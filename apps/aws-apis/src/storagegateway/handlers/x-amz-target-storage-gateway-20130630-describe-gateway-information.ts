import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DescribeGatewayInformationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630DescribeGatewayInformationHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DescribeGatewayInformationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
