import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127ListTagsForResourceHandler = app.openapi(
  postXAmzTargetComprehend20171127ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
