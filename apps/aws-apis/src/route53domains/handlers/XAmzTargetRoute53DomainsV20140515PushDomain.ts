import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515PushDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53DomainsV20140515PushDomainHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515PushDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
