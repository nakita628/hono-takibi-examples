import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515UpdateDomainNameserversRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53DomainsV20140515UpdateDomainNameserversHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515UpdateDomainNameserversRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
