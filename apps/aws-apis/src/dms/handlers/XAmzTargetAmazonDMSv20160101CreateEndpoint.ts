import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101CreateEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101CreateEndpointHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101CreateEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
