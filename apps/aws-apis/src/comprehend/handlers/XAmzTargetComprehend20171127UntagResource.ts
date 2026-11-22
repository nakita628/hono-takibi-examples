import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127UntagResourceHandler = app.openapi(
  postXAmzTargetComprehend20171127UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
