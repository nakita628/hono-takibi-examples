import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101CreateReplicationInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101CreateReplicationInstanceHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101CreateReplicationInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
