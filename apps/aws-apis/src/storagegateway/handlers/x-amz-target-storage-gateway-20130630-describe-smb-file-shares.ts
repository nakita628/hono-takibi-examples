import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DescribeSMBFileSharesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630DescribeSmbFileSharesHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DescribeSMBFileSharesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
