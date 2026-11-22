import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101ReloadTablesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101ReloadTablesHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101ReloadTablesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
