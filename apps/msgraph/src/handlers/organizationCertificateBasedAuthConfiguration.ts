import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationOrganizationIdCertificateBasedAuthConfigurationCertificateBasedAuthConfigurationIdRoute,
  getOrganizationOrganizationIdCertificateBasedAuthConfigurationCertificateBasedAuthConfigurationIdRoute,
  getOrganizationOrganizationIdCertificateBasedAuthConfigurationCountRoute,
  getOrganizationOrganizationIdCertificateBasedAuthConfigurationRoute,
  postOrganizationOrganizationIdCertificateBasedAuthConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationCertificateBasedAuthConfigurationHandler = app
  .openapi(getOrganizationOrganizationIdCertificateBasedAuthConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdCertificateBasedAuthConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationOrganizationIdCertificateBasedAuthConfigurationCertificateBasedAuthConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteOrganizationOrganizationIdCertificateBasedAuthConfigurationCertificateBasedAuthConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationOrganizationIdCertificateBasedAuthConfigurationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
