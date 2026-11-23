import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515DisableDomainAutoRenewRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53DomainsV20140515DisableDomainAutoRenewHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515DisableDomainAutoRenewRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
