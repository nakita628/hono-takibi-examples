import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCADescribeCertificateAuthorityAuditReportRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAcmPrivateCaDescribeCertificateAuthorityAuditReportHandler = app.openapi(
  postXAmzTargetACMPrivateCADescribeCertificateAuthorityAuditReportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
