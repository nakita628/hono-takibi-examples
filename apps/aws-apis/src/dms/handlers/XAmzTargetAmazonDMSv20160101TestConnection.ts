import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101TestConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101TestConnectionHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101TestConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
