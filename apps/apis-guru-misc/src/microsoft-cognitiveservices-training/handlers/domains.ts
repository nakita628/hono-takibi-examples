import { OpenAPIHono } from '@hono/zod-openapi'
import { getDomainsDomainIdRoute, getDomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(getDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
