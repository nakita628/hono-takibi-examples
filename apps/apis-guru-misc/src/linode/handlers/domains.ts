import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDomainsDomainIdRecordsRecordIdRoute,
  deleteDomainsDomainIdRoute,
  getDomainsDomainIdRecordsRecordIdRoute,
  getDomainsDomainIdRecordsRoute,
  getDomainsDomainIdRoute,
  getDomainsDomainIdZoneFileRoute,
  getDomainsRoute,
  postDomainsDomainIdCloneRoute,
  postDomainsDomainIdRecordsRoute,
  postDomainsImportRoute,
  postDomainsRoute,
  putDomainsDomainIdRecordsRecordIdRoute,
  putDomainsDomainIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(getDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainIdRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainIdRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDomainsDomainIdRecordsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainIdRecordsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDomainsDomainIdRecordsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainIdZoneFileRoute, (c) => {
    throw new Error('Not implemented')
  })
