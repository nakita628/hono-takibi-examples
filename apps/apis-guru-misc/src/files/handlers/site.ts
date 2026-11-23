import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSiteApiKeysRoute,
  getSiteDnsRecordsRoute,
  getSiteIpAddressesRoute,
  getSiteRoute,
  getSiteUsageRoute,
  patchSiteRoute,
  postSiteApiKeysRoute,
  postSiteTestWebhookRoute,
} from '../routes'

const app = new OpenAPIHono()

export const siteHandler = app
  .openapi(getSiteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSiteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSiteApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSiteApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSiteDnsRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSiteIpAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSiteTestWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSiteUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
