import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630AddCacheRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630AddCacheHandler = app.openapi(
  postXAmzTargetStorageGateway20130630AddCacheRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
