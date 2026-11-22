import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationOrganizationIdDomainsDomainIdRoute,
  getOrganizationOrganizationIdDomainsRoute,
  patchOrganizationOrganizationIdDomainsDomainIdRoute,
  postOrganizationOrganizationIdDomainsDomainIdVerifyRoute,
  postOrganizationOrganizationIdDomainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(postOrganizationOrganizationIdDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationOrganizationIdDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdDomainsDomainIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
