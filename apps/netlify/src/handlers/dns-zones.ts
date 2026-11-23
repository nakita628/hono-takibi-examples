import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDnsZonesZoneIdDnsRecordsDnsRecordIdRoute,
  deleteDnsZonesZoneIdRoute,
  getDnsZonesRoute,
  getDnsZonesZoneIdDnsRecordsDnsRecordIdRoute,
  getDnsZonesZoneIdDnsRecordsRoute,
  getDnsZonesZoneIdRoute,
  postDnsZonesRoute,
  postDnsZonesZoneIdDnsRecordsRoute,
  putDnsZonesZoneIdTransferRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dnsZonesHandler = app
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
