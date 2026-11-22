import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212DeleteTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonML20141212DeleteTagsHandler = app.openapi(
  postXAmzTargetAmazonML20141212DeleteTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
