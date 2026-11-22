import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceSetTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceSetTagsForResourceHandler = app.openapi(
  postXAmzTargetInspectorServiceSetTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
