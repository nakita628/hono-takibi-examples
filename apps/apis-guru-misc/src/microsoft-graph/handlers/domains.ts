import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDomainsCountRoute,
  getDomainsDomainIdDomainNameReferencesCountRoute,
  getDomainsDomainIdFederationConfigurationCountRoute,
  getDomainsDomainIdServiceConfigurationRecordsCountRoute,
  getDomainsDomainIdVerificationDnsRecordsCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(getDomainsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainIdDomainNameReferencesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainIdFederationConfigurationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainIdServiceConfigurationRecordsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainIdVerificationDnsRecordsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
