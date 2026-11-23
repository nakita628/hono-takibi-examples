import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101RefreshSchemasRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101RefreshSchemasHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101RefreshSchemasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
