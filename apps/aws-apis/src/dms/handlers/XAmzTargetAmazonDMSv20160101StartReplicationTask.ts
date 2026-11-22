import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101StartReplicationTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101StartReplicationTaskHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101StartReplicationTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
