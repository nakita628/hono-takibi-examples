import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515ResendOperationAuthorizationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53DomainsV20140515ResendOperationAuthorizationHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515ResendOperationAuthorizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
