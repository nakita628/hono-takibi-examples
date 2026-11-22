import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630ResetCacheRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630ResetCacheHandler = app.openapi(
  postXAmzTargetStorageGateway20130630ResetCacheRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
