import { OpenAPIHono } from '@hono/zod-openapi'
import { getTenantIDDomainsDomainNameRoute, getTenantIDDomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const domainHandler = app
  .openapi(getTenantIDDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDDomainsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
