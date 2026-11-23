import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWhitelabelDomainsDomainIdRoute,
  deleteWhitelabelDomainsIdIpsIpRoute,
  deleteWhitelabelDomainsSubuserRoute,
  deleteWhitelabelIpsIdRoute,
  deleteWhitelabelLinksIdRoute,
  deleteWhitelabelLinksSubuserRoute,
  getWhitelabelDomainsDefaultRoute,
  getWhitelabelDomainsDomainIdRoute,
  getWhitelabelDomainsRoute,
  getWhitelabelDomainsSubuserRoute,
  getWhitelabelIpsIdRoute,
  getWhitelabelIpsRoute,
  getWhitelabelLinksDefaultRoute,
  getWhitelabelLinksIdRoute,
  getWhitelabelLinksRoute,
  getWhitelabelLinksSubuserRoute,
  patchWhitelabelDomainsDomainIdRoute,
  patchWhitelabelLinksIdRoute,
  postWhitelabelDnsEmailRoute,
  postWhitelabelDomainsDomainIdSubuserRoute,
  postWhitelabelDomainsIdIpsRoute,
  postWhitelabelDomainsIdValidateRoute,
  postWhitelabelDomainsRoute,
  postWhitelabelIpsIdValidateRoute,
  postWhitelabelIpsRoute,
  postWhitelabelLinksIdValidateRoute,
  postWhitelabelLinksLinkIdSubuserRoute,
  postWhitelabelLinksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const whitelabelHandler = app
  .openapi(postWhitelabelDnsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getWhitelabelIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWhitelabelIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWhitelabelIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhitelabelIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWhitelabelIpsIdValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhitelabelLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWhitelabelLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhitelabelLinksDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWhitelabelLinksSubuserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhitelabelLinksSubuserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWhitelabelLinksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhitelabelLinksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWhitelabelLinksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWhitelabelLinksIdValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWhitelabelLinksLinkIdSubuserRoute, (c) => {
    throw new Error('Not implemented')
  })
