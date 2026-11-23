import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaListTagsForResourceHandler = app.openapi(
  postXAmzTargetAmazonAthenaListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
