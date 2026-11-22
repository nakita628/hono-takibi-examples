import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DeleteEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101DeleteEndpointHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DeleteEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
