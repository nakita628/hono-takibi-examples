import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101CreateReplicationTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101CreateReplicationTaskHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101CreateReplicationTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
