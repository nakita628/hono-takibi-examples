import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515CheckDomainTransferabilityRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53DomainsV20140515CheckDomainTransferabilityHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515CheckDomainTransferabilityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
