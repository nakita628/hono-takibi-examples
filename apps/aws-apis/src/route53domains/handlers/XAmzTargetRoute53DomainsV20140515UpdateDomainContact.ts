import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515UpdateDomainContactRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53DomainsV20140515UpdateDomainContactHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515UpdateDomainContactRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
