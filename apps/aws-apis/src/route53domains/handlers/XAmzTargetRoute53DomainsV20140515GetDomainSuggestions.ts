import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515GetDomainSuggestionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53DomainsV20140515GetDomainSuggestionsHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515GetDomainSuggestionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
