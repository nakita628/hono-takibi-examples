import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionImportClientVpnClientCertificateRevocationListRoute,
  postActionImportClientVpnClientCertificateRevocationListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionImportClientVpnClientCertificateRevocationListHandler = app
  .openapi(getActionImportClientVpnClientCertificateRevocationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionImportClientVpnClientCertificateRevocationListRoute, (c) => {
    throw new Error('Not implemented')
  })
