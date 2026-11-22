import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDomainsDomainIdFederationConfigurationInternalDomainFederationIdRoute,
  getDomainsDomainIdFederationConfigurationCountRoute,
  getDomainsDomainIdFederationConfigurationInternalDomainFederationIdRoute,
  getDomainsDomainIdFederationConfigurationRoute,
  patchDomainsDomainIdFederationConfigurationInternalDomainFederationIdRoute,
  postDomainsDomainIdFederationConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsInternalDomainFederationHandler = app
  .openapi(getDomainsDomainIdFederationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainIdFederationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainIdFederationConfigurationInternalDomainFederationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDomainsDomainIdFederationConfigurationInternalDomainFederationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDomainsDomainIdFederationConfigurationInternalDomainFederationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainIdFederationConfigurationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
