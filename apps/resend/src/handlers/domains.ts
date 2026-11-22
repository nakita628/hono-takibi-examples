import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDomainsDomainIdRoute,
  getDomainsDomainIdClaimRoute,
  getDomainsDomainIdRoute,
  getDomainsRoute,
  patchDomainsDomainIdRoute,
  postDomainsClaimRoute,
  postDomainsDomainIdClaimVerifyRoute,
  postDomainsDomainIdForgeRoute,
  postDomainsDomainIdVerifyRoute,
  postDomainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(postDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainIdForgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainIdClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainIdClaimVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
