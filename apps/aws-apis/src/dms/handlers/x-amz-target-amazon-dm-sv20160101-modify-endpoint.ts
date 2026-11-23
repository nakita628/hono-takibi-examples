import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101ModifyEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101ModifyEndpointHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101ModifyEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
