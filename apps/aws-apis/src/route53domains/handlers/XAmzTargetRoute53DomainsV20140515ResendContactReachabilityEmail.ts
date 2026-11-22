import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515ResendContactReachabilityEmailRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53DomainsV20140515ResendContactReachabilityEmailHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515ResendContactReachabilityEmailRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
