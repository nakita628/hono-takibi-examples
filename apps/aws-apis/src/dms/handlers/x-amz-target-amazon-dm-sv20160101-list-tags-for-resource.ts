import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101ListTagsForResourceHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
