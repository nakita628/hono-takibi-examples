import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDomainsDomainIdDomainNameReferencesCountRoute,
  getDomainsDomainIdDomainNameReferencesDirectoryObjectIdRoute,
  getDomainsDomainIdDomainNameReferencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsDirectoryObjectHandler = app
  .openapi(getDomainsDomainIdDomainNameReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainIdDomainNameReferencesDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsDomainIdDomainNameReferencesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
