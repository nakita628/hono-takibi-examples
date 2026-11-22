import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesCertificateAuthorityDetailIdRoute,
  deleteDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdRoute,
  deleteDirectoryPublicKeyInfrastructureRoute,
  getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesCertificateAuthorityDetailIdRoute,
  getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesCountRoute,
  getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesRoute,
  getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdRoute,
  getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCountRoute,
  getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsRoute,
  getDirectoryPublicKeyInfrastructureRoute,
  patchDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesCertificateAuthorityDetailIdRoute,
  patchDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdRoute,
  patchDirectoryPublicKeyInfrastructureRoute,
  postDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesRoute,
  postDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdUploadRoute,
  postDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryPublicKeyInfrastructureRootHandler = app
  .openapi(getDirectoryPublicKeyInfrastructureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryPublicKeyInfrastructureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryPublicKeyInfrastructureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesCertificateAuthorityDetailIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesCertificateAuthorityDetailIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesCertificateAuthorityDetailIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdCertificateAuthoritiesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCertificateBasedAuthPkiIdUploadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryPublicKeyInfrastructureCertificateBasedAuthConfigurationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
