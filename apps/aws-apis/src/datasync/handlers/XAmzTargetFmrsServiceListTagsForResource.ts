import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetFmrsServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
