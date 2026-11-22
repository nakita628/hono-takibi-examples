import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DeleteReplicationSubnetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101DeleteReplicationSubnetGroupHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DeleteReplicationSubnetGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
