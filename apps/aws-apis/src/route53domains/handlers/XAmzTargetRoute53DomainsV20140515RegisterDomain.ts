import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515RegisterDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53DomainsV20140515RegisterDomainHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515RegisterDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
