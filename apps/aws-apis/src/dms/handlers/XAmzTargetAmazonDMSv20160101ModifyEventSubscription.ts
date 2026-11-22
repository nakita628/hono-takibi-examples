import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101ModifyEventSubscriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101ModifyEventSubscriptionHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101ModifyEventSubscriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
