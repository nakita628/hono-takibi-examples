import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV6DomainsDomainRoute,
  getDomainsRecordsRecordIdRoute,
  getV1DomainsDomainProjectDomainsRoute,
  getV5DomainsDomainRoute,
  getV5DomainsRoute,
  getV6DomainsDomainConfigRoute,
  getV9DomainsDomainVerificationRoute,
  patchV3DomainsDomainRoute,
  postV7DomainsRoute,
  postV9DomainsDomainClaimRoute,
  putDomainsDomainRecordsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(putDomainsDomainRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsRecordsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV6DomainsDomainConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV9DomainsDomainVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV9DomainsDomainClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainsDomainProjectDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV5DomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV5DomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV7DomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV3DomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV6DomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
