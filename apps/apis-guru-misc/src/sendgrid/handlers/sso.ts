import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSsoCertificatesCertIdRoute,
  deleteSsoIntegrationsIdRoute,
  getSsoCertificatesCertIdRoute,
  getSsoIntegrationsIdRoute,
  getSsoIntegrationsIntegrationIdCertificatesRoute,
  getSsoIntegrationsRoute,
  patchSsoCertificatesCertIdRoute,
  patchSsoIntegrationsIdRoute,
  patchSsoTeammatesUsernameRoute,
  postSsoCertificatesRoute,
  postSsoIntegrationsRoute,
  postSsoTeammatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ssoHandler = app
  .openapi(postSsoCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSsoCertificatesCertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSsoCertificatesCertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSsoCertificatesCertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSsoIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSsoIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSsoIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSsoIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSsoIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSsoIntegrationsIntegrationIdCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSsoTeammatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSsoTeammatesUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
