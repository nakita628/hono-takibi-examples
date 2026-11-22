import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdDomainsDomainIdRoute,
  getOrganizationDomainsRoute,
  getOrganizationsOrganizationIdDomainsRoute,
  patchOrganizationsOrganizationIdDomainsDomainIdRoute,
  postOrganizationsOrganizationIdDomainsDomainIdVerifyOwnershipRoute,
  postOrganizationsOrganizationIdDomainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationDomainsHandler = app
  .openapi(postOrganizationsOrganizationIdDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationIdDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdDomainsDomainIdVerifyOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
