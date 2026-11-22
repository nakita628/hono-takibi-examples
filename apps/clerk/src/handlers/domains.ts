import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDomainsDomainIdRoute,
  getDomainsRoute,
  patchDomainsDomainIdRoute,
  postDomainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(getDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
