import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101CreateReplicationSubnetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101CreateReplicationSubnetGroupHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101CreateReplicationSubnetGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
