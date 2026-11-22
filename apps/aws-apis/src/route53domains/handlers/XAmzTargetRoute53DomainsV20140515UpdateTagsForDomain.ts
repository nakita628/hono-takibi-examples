import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515UpdateTagsForDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53DomainsV20140515UpdateTagsForDomainHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515UpdateTagsForDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
