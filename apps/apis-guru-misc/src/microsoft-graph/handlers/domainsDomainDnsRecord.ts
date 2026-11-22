import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDomainsDomainIdServiceConfigurationRecordsDomainDnsRecordIdRoute,
  deleteDomainsDomainIdVerificationDnsRecordsDomainDnsRecordIdRoute,
  getDomainsDomainIdServiceConfigurationRecordsDomainDnsRecordIdRoute,
  getDomainsDomainIdServiceConfigurationRecordsRoute,
  getDomainsDomainIdVerificationDnsRecordsDomainDnsRecordIdRoute,
  getDomainsDomainIdVerificationDnsRecordsRoute,
  patchDomainsDomainIdServiceConfigurationRecordsDomainDnsRecordIdRoute,
  patchDomainsDomainIdVerificationDnsRecordsDomainDnsRecordIdRoute,
  postDomainsDomainIdServiceConfigurationRecordsRoute,
  postDomainsDomainIdVerificationDnsRecordsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsDomainDnsRecordHandler = app
  .openapi(getDomainsDomainIdServiceConfigurationRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainIdServiceConfigurationRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDomainsDomainIdServiceConfigurationRecordsDomainDnsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainIdServiceConfigurationRecordsDomainDnsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDomainsDomainIdServiceConfigurationRecordsDomainDnsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainIdVerificationDnsRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainIdVerificationDnsRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDomainsDomainIdVerificationDnsRecordsDomainDnsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainIdVerificationDnsRecordsDomainDnsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDomainsDomainIdVerificationDnsRecordsDomainDnsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
