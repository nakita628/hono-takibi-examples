import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101MoveReplicationTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101MoveReplicationTaskHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101MoveReplicationTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
