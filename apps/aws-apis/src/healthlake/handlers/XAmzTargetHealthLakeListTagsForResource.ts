import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetHealthLakeListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetHealthLakeListTagsForResourceHandler = app.openapi(
  postXAmzTargetHealthLakeListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
