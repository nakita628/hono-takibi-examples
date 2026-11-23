import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53DomainsV20140515UpdateDomainContactPrivacyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53DomainsV20140515UpdateDomainContactPrivacyHandler = app.openapi(
  postXAmzTargetRoute53DomainsV20140515UpdateDomainContactPrivacyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
