import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101RebootReplicationInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101RebootReplicationInstanceHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101RebootReplicationInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
