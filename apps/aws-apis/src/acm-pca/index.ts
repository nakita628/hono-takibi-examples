import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetACMPrivateCACreateCertificateAuthorityAuditReportHandler,
  XAmzTargetACMPrivateCACreateCertificateAuthorityHandler,
  XAmzTargetACMPrivateCACreatePermissionHandler,
  XAmzTargetACMPrivateCADeleteCertificateAuthorityHandler,
  XAmzTargetACMPrivateCADeletePermissionHandler,
  XAmzTargetACMPrivateCADeletePolicyHandler,
  XAmzTargetACMPrivateCADescribeCertificateAuthorityAuditReportHandler,
  XAmzTargetACMPrivateCADescribeCertificateAuthorityHandler,
  XAmzTargetACMPrivateCAGetCertificateAuthorityCertificateHandler,
  XAmzTargetACMPrivateCAGetCertificateAuthorityCsrHandler,
  XAmzTargetACMPrivateCAGetCertificateHandler,
  XAmzTargetACMPrivateCAGetPolicyHandler,
  XAmzTargetACMPrivateCAImportCertificateAuthorityCertificateHandler,
  XAmzTargetACMPrivateCAIssueCertificateHandler,
  XAmzTargetACMPrivateCAListCertificateAuthoritiesHandler,
  XAmzTargetACMPrivateCAListPermissionsHandler,
  XAmzTargetACMPrivateCAListTagsHandler,
  XAmzTargetACMPrivateCAPutPolicyHandler,
  XAmzTargetACMPrivateCARestoreCertificateAuthorityHandler,
  XAmzTargetACMPrivateCARevokeCertificateHandler,
  XAmzTargetACMPrivateCATagCertificateAuthorityHandler,
  XAmzTargetACMPrivateCAUntagCertificateAuthorityHandler,
  XAmzTargetACMPrivateCAUpdateCertificateAuthorityHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetACMPrivateCACreateCertificateAuthorityHandler)
  .route('/', XAmzTargetACMPrivateCACreateCertificateAuthorityAuditReportHandler)
  .route('/', XAmzTargetACMPrivateCACreatePermissionHandler)
  .route('/', XAmzTargetACMPrivateCADeleteCertificateAuthorityHandler)
  .route('/', XAmzTargetACMPrivateCADeletePermissionHandler)
  .route('/', XAmzTargetACMPrivateCADeletePolicyHandler)
  .route('/', XAmzTargetACMPrivateCADescribeCertificateAuthorityHandler)
  .route('/', XAmzTargetACMPrivateCADescribeCertificateAuthorityAuditReportHandler)
  .route('/', XAmzTargetACMPrivateCAGetCertificateHandler)
  .route('/', XAmzTargetACMPrivateCAGetCertificateAuthorityCertificateHandler)
  .route('/', XAmzTargetACMPrivateCAGetCertificateAuthorityCsrHandler)
  .route('/', XAmzTargetACMPrivateCAGetPolicyHandler)
  .route('/', XAmzTargetACMPrivateCAImportCertificateAuthorityCertificateHandler)
  .route('/', XAmzTargetACMPrivateCAIssueCertificateHandler)
  .route('/', XAmzTargetACMPrivateCAListCertificateAuthoritiesHandler)
  .route('/', XAmzTargetACMPrivateCAListPermissionsHandler)
  .route('/', XAmzTargetACMPrivateCAListTagsHandler)
  .route('/', XAmzTargetACMPrivateCAPutPolicyHandler)
  .route('/', XAmzTargetACMPrivateCARestoreCertificateAuthorityHandler)
  .route('/', XAmzTargetACMPrivateCARevokeCertificateHandler)
  .route('/', XAmzTargetACMPrivateCATagCertificateAuthorityHandler)
  .route('/', XAmzTargetACMPrivateCAUntagCertificateAuthorityHandler)
  .route('/', XAmzTargetACMPrivateCAUpdateCertificateAuthorityHandler)

export default app
