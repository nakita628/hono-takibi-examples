import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmailDomainsDomainIdWebhooksIdRoute,
  getEmailDomainsDomainIdWebhooksIdRoute,
  getEmailDomainsDomainIdWebhooksRoute,
  patchEmailDomainsDomainIdWebhooksIdRoute,
  postEmailDomainsDomainIdWebhooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailWebhooksHandler = app
  .openapi(getEmailDomainsDomainIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailDomainsDomainIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailDomainsDomainIdWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailDomainsDomainIdWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmailDomainsDomainIdWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
