import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationOrganizationIdCertificateBasedAuthConfigurationCertificateBasedAuthConfigurationIdRoute,
  getOrganizationOrganizationIdCertificateBasedAuthConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationCertificateBasedAuthConfigurationHandler = app
  .openapi(getOrganizationOrganizationIdCertificateBasedAuthConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationOrganizationIdCertificateBasedAuthConfigurationCertificateBasedAuthConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
