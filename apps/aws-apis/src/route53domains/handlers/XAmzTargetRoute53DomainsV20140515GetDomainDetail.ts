import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515GetDomainDetailRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53DomainsV20140515GetDomainDetailHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515GetDomainDetailRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
