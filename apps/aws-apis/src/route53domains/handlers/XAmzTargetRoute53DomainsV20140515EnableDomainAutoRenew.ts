import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515EnableDomainAutoRenewRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53DomainsV20140515EnableDomainAutoRenewHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515EnableDomainAutoRenewRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
