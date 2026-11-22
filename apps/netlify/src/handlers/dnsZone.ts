import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDnsZonesZoneIdDnsRecordsDnsRecordIdRoute,
  deleteDnsZonesZoneIdRoute,
  getDnsZonesRoute,
  getDnsZonesZoneIdDnsRecordsDnsRecordIdRoute,
  getDnsZonesZoneIdDnsRecordsRoute,
  getDnsZonesZoneIdRoute,
  getSitesSiteIdDnsRoute,
  postDnsZonesRoute,
  postDnsZonesZoneIdDnsRecordsRoute,
  putDnsZonesZoneIdTransferRoute,
  putSitesSiteIdDnsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dnsZoneHandler = app
  .openapi(getSitesSiteIdDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDnsZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDnsZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDnsZonesZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDnsZonesZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDnsZonesZoneIdTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDnsZonesZoneIdDnsRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDnsZonesZoneIdDnsRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDnsZonesZoneIdDnsRecordsDnsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDnsZonesZoneIdDnsRecordsDnsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
