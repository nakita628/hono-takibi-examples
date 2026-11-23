import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAcmPrivateCaCreateCertificateAuthorityAuditReportHandler,
  xAmzTargetAcmPrivateCaCreateCertificateAuthorityHandler,
  xAmzTargetAcmPrivateCaCreatePermissionHandler,
  xAmzTargetAcmPrivateCaDeleteCertificateAuthorityHandler,
  xAmzTargetAcmPrivateCaDeletePermissionHandler,
  xAmzTargetAcmPrivateCaDeletePolicyHandler,
  xAmzTargetAcmPrivateCaDescribeCertificateAuthorityAuditReportHandler,
  xAmzTargetAcmPrivateCaDescribeCertificateAuthorityHandler,
  xAmzTargetAcmPrivateCaGetCertificateAuthorityCertificateHandler,
  xAmzTargetAcmPrivateCaGetCertificateAuthorityCsrHandler,
  xAmzTargetAcmPrivateCaGetCertificateHandler,
  xAmzTargetAcmPrivateCaGetPolicyHandler,
  xAmzTargetAcmPrivateCaImportCertificateAuthorityCertificateHandler,
  xAmzTargetAcmPrivateCaIssueCertificateHandler,
  xAmzTargetAcmPrivateCaListCertificateAuthoritiesHandler,
  xAmzTargetAcmPrivateCaListPermissionsHandler,
  xAmzTargetAcmPrivateCaListTagsHandler,
  xAmzTargetAcmPrivateCaPutPolicyHandler,
  xAmzTargetAcmPrivateCaRestoreCertificateAuthorityHandler,
  xAmzTargetAcmPrivateCaRevokeCertificateHandler,
  xAmzTargetAcmPrivateCaTagCertificateAuthorityHandler,
  xAmzTargetAcmPrivateCaUntagCertificateAuthorityHandler,
  xAmzTargetAcmPrivateCaUpdateCertificateAuthorityHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAcmPrivateCaCreateCertificateAuthorityHandler)
  .route('/', xAmzTargetAcmPrivateCaCreateCertificateAuthorityAuditReportHandler)
  .route('/', xAmzTargetAcmPrivateCaCreatePermissionHandler)
  .route('/', xAmzTargetAcmPrivateCaDeleteCertificateAuthorityHandler)
  .route('/', xAmzTargetAcmPrivateCaDeletePermissionHandler)
  .route('/', xAmzTargetAcmPrivateCaDeletePolicyHandler)
  .route('/', xAmzTargetAcmPrivateCaDescribeCertificateAuthorityHandler)
  .route('/', xAmzTargetAcmPrivateCaDescribeCertificateAuthorityAuditReportHandler)
  .route('/', xAmzTargetAcmPrivateCaGetCertificateHandler)
  .route('/', xAmzTargetAcmPrivateCaGetCertificateAuthorityCertificateHandler)
  .route('/', xAmzTargetAcmPrivateCaGetCertificateAuthorityCsrHandler)
  .route('/', xAmzTargetAcmPrivateCaGetPolicyHandler)
  .route('/', xAmzTargetAcmPrivateCaImportCertificateAuthorityCertificateHandler)
  .route('/', xAmzTargetAcmPrivateCaIssueCertificateHandler)
  .route('/', xAmzTargetAcmPrivateCaListCertificateAuthoritiesHandler)
  .route('/', xAmzTargetAcmPrivateCaListPermissionsHandler)
  .route('/', xAmzTargetAcmPrivateCaListTagsHandler)
  .route('/', xAmzTargetAcmPrivateCaPutPolicyHandler)
  .route('/', xAmzTargetAcmPrivateCaRestoreCertificateAuthorityHandler)
  .route('/', xAmzTargetAcmPrivateCaRevokeCertificateHandler)
  .route('/', xAmzTargetAcmPrivateCaTagCertificateAuthorityHandler)
  .route('/', xAmzTargetAcmPrivateCaUntagCertificateAuthorityHandler)
  .route('/', xAmzTargetAcmPrivateCaUpdateCertificateAuthorityHandler)

export default app
