import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDnsDomainIdRoute,
  getDnsDomainIdRoute,
  getDnsDomainIdZoneRoute,
  getDnsDomainRoute,
  postDnsDomainRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainHandler = app
  .openapi(getDnsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDnsDomainRoute, (c) => {
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
