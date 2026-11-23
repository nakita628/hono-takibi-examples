import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCertificatesWebhooksCaRoute,
  getCertificatesExternalCaRoute,
  getCertificatesWebhooksCaRoute,
  postCertificatesExternalRoute,
  postCertificatesWebhooksCaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const certificatesHandler = app
  .openapi(postCertificatesExternalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCertificatesExternalCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCertificatesWebhooksCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCertificatesWebhooksCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCertificatesWebhooksCaRoute, (c) => {
    throw new Error('Not implemented')
  })
