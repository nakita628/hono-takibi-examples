import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMediaStore20170901ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMediaStore20170901ListTagsForResourceHandler = app.openapi(
  postXAmzTargetMediaStore20170901ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
