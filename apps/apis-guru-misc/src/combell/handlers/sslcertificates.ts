import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSslcertificatesRoute,
  getSslcertificatesSha1FingerprintDownloadRoute,
  getSslcertificatesSha1FingerprintRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sslcertificatesHandler = app
  .openapi(getSslcertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSslcertificatesSha1FingerprintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSslcertificatesSha1FingerprintDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
