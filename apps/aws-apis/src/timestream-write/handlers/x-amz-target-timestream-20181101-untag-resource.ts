import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTimestream20181101UntagResourceHandler = app.openapi(
  postXAmzTargetTimestream20181101UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
