import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101ModifyReplicationTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101ModifyReplicationTaskHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101ModifyReplicationTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
