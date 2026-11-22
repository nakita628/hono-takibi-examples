import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101RemoveTagsFromResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101RemoveTagsFromResourceHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101RemoveTagsFromResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
