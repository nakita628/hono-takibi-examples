import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDnsDomainNameRecordsRecordIdRoute,
  getDnsDomainNameRecordsRecordIdRoute,
  getDnsDomainNameRecordsRoute,
  postDnsDomainNameRecordsRoute,
  putDnsDomainNameRecordsRecordIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dnsRecordsHandler = app
  .openapi(getDnsDomainNameRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDnsDomainNameRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDnsDomainNameRecordsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDnsDomainNameRecordsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDnsDomainNameRecordsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
