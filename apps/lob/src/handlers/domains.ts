import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDomainsDomainIdRoute,
  getDomainsDomainIdRoute,
  getDomainsRoute,
  postDomainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(getDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
