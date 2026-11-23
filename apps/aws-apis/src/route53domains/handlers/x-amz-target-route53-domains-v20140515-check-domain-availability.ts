import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515CheckDomainAvailabilityRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53DomainsV20140515CheckDomainAvailabilityHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515CheckDomainAvailabilityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
