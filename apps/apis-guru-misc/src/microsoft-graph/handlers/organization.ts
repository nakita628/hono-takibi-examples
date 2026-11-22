import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationCountRoute,
  getOrganizationOrganizationIdBrandingLocalizationsCountRoute,
  getOrganizationOrganizationIdCertificateBasedAuthConfigurationCountRoute,
  getOrganizationOrganizationIdExtensionsCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationHandler = app
  .openapi(getOrganizationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdBrandingLocalizationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdCertificateBasedAuthConfigurationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
