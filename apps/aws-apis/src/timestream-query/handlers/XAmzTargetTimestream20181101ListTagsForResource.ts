import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTimestream20181101ListTagsForResourceHandler = app.openapi(
  postXAmzTargetTimestream20181101ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
