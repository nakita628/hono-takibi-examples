import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectionsConnectionIdSamlIdpSigningCertsCertificateIdRoute,
  deleteConnectionsConnectionIdSamlSpEncryptionCertsCertificateIdRoute,
  deleteConnectionsConnectionIdSamlSpSigningCertCertificateIdRoute,
  deleteConnectionsIdRoute,
  getConnectionsConnectionIdSamlIdpSigningCertsRoute,
  getConnectionsConnectionIdSamlSpEncryptionCertsRoute,
  getConnectionsConnectionIdSamlSpSigningCertRoute,
  getConnectionsIdRoute,
  getConnectionsRoute,
  patchConnectionsIdRoute,
  postConnectionsConnectionIdSamlIdpSigningCertsRoute,
  postConnectionsConnectionIdSamlSpEncryptionCertsRoute,
  postConnectionsConnectionIdSamlSpSigningCertRoute,
  postConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionsHandler = app
  .openapi(postConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsConnectionIdSamlIdpSigningCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectionsConnectionIdSamlIdpSigningCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectionsConnectionIdSamlIdpSigningCertsCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsConnectionIdSamlSpEncryptionCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectionsConnectionIdSamlSpEncryptionCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectionsConnectionIdSamlSpEncryptionCertsCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsConnectionIdSamlSpSigningCertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectionsConnectionIdSamlSpSigningCertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectionsConnectionIdSamlSpSigningCertCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
