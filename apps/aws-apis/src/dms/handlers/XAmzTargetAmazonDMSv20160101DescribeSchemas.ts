import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribeSchemasRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101DescribeSchemasHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribeSchemasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
