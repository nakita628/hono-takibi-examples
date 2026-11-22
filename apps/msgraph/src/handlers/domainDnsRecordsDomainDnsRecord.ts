import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDomainDnsRecordsDomainDnsRecordIdRoute,
  getDomainDnsRecordsCountRoute,
  getDomainDnsRecordsDomainDnsRecordIdRoute,
  getDomainDnsRecordsRoute,
  patchDomainDnsRecordsDomainDnsRecordIdRoute,
  postDomainDnsRecordsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainDnsRecordsDomainDnsRecordHandler = app
  .openapi(getDomainDnsRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainDnsRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainDnsRecordsDomainDnsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDomainDnsRecordsDomainDnsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDomainDnsRecordsDomainDnsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainDnsRecordsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
