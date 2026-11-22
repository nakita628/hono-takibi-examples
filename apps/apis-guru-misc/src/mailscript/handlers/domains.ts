import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDomainsDomainRoute,
  getDomainsRoute,
  getDomainsVerifyDomainRoute,
  postDomainsRoute,
  postDomainsVerifyDomainRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(getDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsVerifyDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsVerifyDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
