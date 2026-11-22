import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101ModifyReplicationInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101ModifyReplicationInstanceHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101ModifyReplicationInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
