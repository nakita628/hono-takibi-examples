import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630ListTagsForResourceHandler = app.openapi(
  postXAmzTargetStorageGateway20130630ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
