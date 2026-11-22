import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionDomainsDomainIdRoute,
  getApiVersionDomainsDomainIdRoute,
  getApiVersionDomainsRoute,
  postApiVersionDomainsDomainIdCloneRoute,
  postApiVersionDomainsImportRoute,
  postApiVersionDomainsRoute,
  putApiVersionDomainsDomainIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(postApiVersionDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDomainsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDomainsDomainIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
