import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DeleteReplicationTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101DeleteReplicationTaskHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DeleteReplicationTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
