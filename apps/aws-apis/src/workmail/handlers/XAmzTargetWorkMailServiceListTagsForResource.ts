import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetWorkMailServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
