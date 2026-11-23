import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDnsDomainDomainIdRecordRecordIdRoute,
  deleteDnsDomainIdRoute,
  getDnsDomainDomainIdRecordRecordIdRoute,
  getDnsDomainDomainIdRecordRoute,
  getDnsDomainIdRoute,
  getDnsDomainIdZoneRoute,
  getDnsDomainRoute,
  postDnsDomainDomainIdRecordRoute,
  postDnsDomainRoute,
  putDnsDomainDomainIdRecordRecordIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dnsDomainHandler = app
  .openapi(getDnsDomainDomainIdRecordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDnsDomainDomainIdRecordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDnsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDnsDomainRoute, (c) => {
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
  .openapi(getDnsDomainIdZoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDnsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDnsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
