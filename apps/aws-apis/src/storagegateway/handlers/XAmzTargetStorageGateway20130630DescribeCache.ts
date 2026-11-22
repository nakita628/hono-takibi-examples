import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DescribeCacheRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630DescribeCacheHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DescribeCacheRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
