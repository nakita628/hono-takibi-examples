import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101ModifyReplicationSubnetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101ModifyReplicationSubnetGroupHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101ModifyReplicationSubnetGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
