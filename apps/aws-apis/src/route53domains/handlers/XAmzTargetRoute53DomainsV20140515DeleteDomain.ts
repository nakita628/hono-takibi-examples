import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515DeleteDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53DomainsV20140515DeleteDomainHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515DeleteDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
