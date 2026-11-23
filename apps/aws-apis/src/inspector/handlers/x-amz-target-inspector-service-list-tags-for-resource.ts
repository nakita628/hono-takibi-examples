import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetInspectorServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetInspectorServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
