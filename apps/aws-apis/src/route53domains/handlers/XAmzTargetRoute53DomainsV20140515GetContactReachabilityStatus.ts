import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515GetContactReachabilityStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53DomainsV20140515GetContactReachabilityStatusHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515GetContactReachabilityStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
