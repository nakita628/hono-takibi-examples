import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101AddTagsToResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101AddTagsToResourceHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101AddTagsToResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
