import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623ListTagsForResourceHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
