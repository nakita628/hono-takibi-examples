import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630RefreshCacheRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630RefreshCacheHandler = app.openapi(
  postXAmzTargetStorageGateway20130630RefreshCacheRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
