import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrganizationsOrganizationIdAddressesBillingRoute,
  deleteApiV1OrganizationsOrganizationIdLogoRoute,
  deleteApiV1OrganizationsOrganizationIdPartnerRoute,
  deleteApiV1OrganizationsOrganizationIdRoute,
  getApiV1CountriesRoute,
  getApiV1OrganizationsOrganizationIdAddressesBillingRoute,
  getApiV1OrganizationsOrganizationIdAddressesDefaultRoute,
  getApiV1OrganizationsOrganizationIdPartnerRoute,
  getApiV1OrganizationsOrganizationIdPrivilegesRoute,
  getApiV1OrganizationsOrganizationIdRoute,
  postApiV1OrganizationsOrganizationIdLogoRoute,
  postApiV1OrganizationsRoute,
  putApiV1OrganizationsOrganizationIdAddressesBillingRoute,
  putApiV1OrganizationsOrganizationIdAddressesDefaultRoute,
  putApiV1OrganizationsOrganizationIdPartnerRoute,
  putApiV1OrganizationsOrganizationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getApiV1CountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrganizationsOrganizationIdAddressesBillingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrganizationsOrganizationIdAddressesBillingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrganizationsOrganizationIdAddressesBillingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrganizationsOrganizationIdAddressesDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrganizationsOrganizationIdAddressesDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrganizationsOrganizationIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrganizationsOrganizationIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrganizationsOrganizationIdPartnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrganizationsOrganizationIdPartnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrganizationsOrganizationIdPartnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrganizationsOrganizationIdPrivilegesRoute, (c) => {
    throw new Error('Not implemented')
  })
