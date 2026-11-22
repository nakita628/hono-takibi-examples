import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShineFrontendService20170701ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShineFrontendService20170701ListTagsForResourceHandler = app.openapi(
  postXAmzTargetAWSShineFrontendService20170701ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
