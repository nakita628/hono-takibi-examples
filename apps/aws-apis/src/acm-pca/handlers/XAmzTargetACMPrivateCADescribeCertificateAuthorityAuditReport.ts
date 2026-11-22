import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCADescribeCertificateAuthorityAuditReportRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetACMPrivateCADescribeCertificateAuthorityAuditReportHandler = app.openapi(
  postXAmzTargetACMPrivateCADescribeCertificateAuthorityAuditReportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
