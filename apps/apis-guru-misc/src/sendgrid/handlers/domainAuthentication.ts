import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWhitelabelDomainsDomainIdRoute,
  deleteWhitelabelDomainsIdIpsIpRoute,
  deleteWhitelabelDomainsSubuserRoute,
  getWhitelabelDomainsDefaultRoute,
  getWhitelabelDomainsDomainIdRoute,
  getWhitelabelDomainsRoute,
  getWhitelabelDomainsSubuserRoute,
  patchWhitelabelDomainsDomainIdRoute,
  postWhitelabelDomainsDomainIdSubuserRoute,
  postWhitelabelDomainsIdIpsRoute,
  postWhitelabelDomainsIdValidateRoute,
  postWhitelabelDomainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainAuthenticationHandler = app
  .openapi(getWhitelabelDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWhitelabelDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhitelabelDomainsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWhitelabelDomainsSubuserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhitelabelDomainsSubuserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWhitelabelDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhitelabelDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWhitelabelDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWhitelabelDomainsDomainIdSubuserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWhitelabelDomainsIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWhitelabelDomainsIdIpsIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWhitelabelDomainsIdValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
