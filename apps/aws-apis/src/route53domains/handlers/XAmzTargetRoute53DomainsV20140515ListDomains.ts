import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515ListDomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53DomainsV20140515ListDomainsHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515ListDomainsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
