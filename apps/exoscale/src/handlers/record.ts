import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDnsDomainDomainIdRecordRecordIdRoute,
  getDnsDomainDomainIdRecordRecordIdRoute,
  getDnsDomainDomainIdRecordRoute,
  postDnsDomainDomainIdRecordRoute,
  putDnsDomainDomainIdRecordRecordIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recordHandler = app
  .openapi(getDnsDomainDomainIdRecordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDnsDomainDomainIdRecordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDnsDomainDomainIdRecordRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDnsDomainDomainIdRecordRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDnsDomainDomainIdRecordRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
