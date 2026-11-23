import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDomainsDomainNameRoute,
  getDomainsRoute,
  postDomainsRegistrationsRoute,
  postDomainsTransfersRoute,
  putDomainsDomainNameNameserversRoute,
  putDomainsDomainNameRenewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(getDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDomainsDomainNameNameserversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDomainsDomainNameRenewRoute, (c) => {
    throw new Error('Not implemented')
  })
