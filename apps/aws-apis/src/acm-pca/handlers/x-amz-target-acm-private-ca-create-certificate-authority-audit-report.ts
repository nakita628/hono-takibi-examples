import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCACreateCertificateAuthorityAuditReportRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAcmPrivateCaCreateCertificateAuthorityAuditReportHandler = app.openapi(
  postXAmzTargetACMPrivateCACreateCertificateAuthorityAuditReportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
