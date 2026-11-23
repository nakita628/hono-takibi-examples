import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DeleteConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101DeleteConnectionHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DeleteConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
