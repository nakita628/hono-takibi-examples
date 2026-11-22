import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DeleteReplicationInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101DeleteReplicationInstanceHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DeleteReplicationInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
