import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionExportClientVpnClientCertificateRevocationListRoute,
  postActionExportClientVpnClientCertificateRevocationListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionExportClientVpnClientCertificateRevocationListHandler = app
  .openapi(getActionExportClientVpnClientCertificateRevocationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionExportClientVpnClientCertificateRevocationListRoute, (c) => {
    throw new Error('Not implemented')
  })
