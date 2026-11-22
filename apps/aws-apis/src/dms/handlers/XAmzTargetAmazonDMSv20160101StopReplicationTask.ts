import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101StopReplicationTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101StopReplicationTaskHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101StopReplicationTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
