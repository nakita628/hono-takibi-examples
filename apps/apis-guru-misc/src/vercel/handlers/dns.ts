import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2DomainsDomainRecordsRecordIdRoute,
  getV4DomainsDomainRecordsRoute,
  patchV1DomainsRecordsRecordIdRoute,
  postV2DomainsDomainRecordsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dnsHandler = app
  .openapi(patchV1DomainsRecordsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DomainsDomainRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DomainsDomainRecordsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4DomainsDomainRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
