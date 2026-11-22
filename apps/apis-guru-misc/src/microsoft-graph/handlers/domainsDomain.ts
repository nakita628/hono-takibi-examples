import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDomainsDomainIdRoute,
  getDomainsDomainIdRoute,
  getDomainsRoute,
  patchDomainsDomainIdRoute,
  postDomainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsDomainHandler = app
  .openapi(getDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
