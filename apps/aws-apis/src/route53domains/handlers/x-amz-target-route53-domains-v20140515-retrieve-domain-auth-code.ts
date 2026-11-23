import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515RetrieveDomainAuthCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53DomainsV20140515RetrieveDomainAuthCodeHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515RetrieveDomainAuthCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
