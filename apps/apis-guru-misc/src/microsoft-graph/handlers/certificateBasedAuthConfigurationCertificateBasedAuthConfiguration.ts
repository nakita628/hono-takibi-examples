import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCertificateBasedAuthConfigurationCertificateBasedAuthConfigurationIdRoute,
  getCertificateBasedAuthConfigurationCertificateBasedAuthConfigurationIdRoute,
  getCertificateBasedAuthConfigurationRoute,
  patchCertificateBasedAuthConfigurationCertificateBasedAuthConfigurationIdRoute,
  postCertificateBasedAuthConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const certificateBasedAuthConfigurationCertificateBasedAuthConfigurationHandler = app
  .openapi(getCertificateBasedAuthConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCertificateBasedAuthConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCertificateBasedAuthConfigurationCertificateBasedAuthConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCertificateBasedAuthConfigurationCertificateBasedAuthConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCertificateBasedAuthConfigurationCertificateBasedAuthConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
