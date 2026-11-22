import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSitesSiteIdSslCertificatesRoute,
  getSitesSiteIdSslRoute,
  postSitesSiteIdSslRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sniCertificateHandler = app
  .openapi(postSitesSiteIdSslRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdSslRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdSslCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
