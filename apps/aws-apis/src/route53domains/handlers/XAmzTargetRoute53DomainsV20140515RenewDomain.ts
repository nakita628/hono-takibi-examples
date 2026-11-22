import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515RenewDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53DomainsV20140515RenewDomainHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515RenewDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
