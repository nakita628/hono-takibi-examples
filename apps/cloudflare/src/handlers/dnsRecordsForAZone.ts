import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdDnsRecordsDnsRecordIdRoute,
  getZonesZoneIdDnsRecordsDnsRecordIdRoute,
  getZonesZoneIdDnsRecordsExportRoute,
  getZonesZoneIdDnsRecordsRoute,
  getZonesZoneIdDnsRecordsScanReviewRoute,
  getZonesZoneIdDnsRecordsUsageRoute,
  patchZonesZoneIdDnsRecordsDnsRecordIdRoute,
  postZonesZoneIdDnsRecordsBatchRoute,
  postZonesZoneIdDnsRecordsImportRoute,
  postZonesZoneIdDnsRecordsRoute,
  postZonesZoneIdDnsRecordsScanReviewRoute,
  postZonesZoneIdDnsRecordsScanRoute,
  postZonesZoneIdDnsRecordsScanTriggerRoute,
  putZonesZoneIdDnsRecordsDnsRecordIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dnsRecordsForAZoneHandler = app
  .openapi(getZonesZoneIdDnsRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdDnsRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdDnsRecordsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdDnsRecordsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdDnsRecordsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdDnsRecordsScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdDnsRecordsScanReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdDnsRecordsScanReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdDnsRecordsScanTriggerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdDnsRecordsUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdDnsRecordsDnsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdDnsRecordsDnsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdDnsRecordsDnsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdDnsRecordsDnsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
