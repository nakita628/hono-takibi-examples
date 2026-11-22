import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetCertificateManagerAddTagsToCertificateHandler,
  XAmzTargetCertificateManagerDeleteCertificateHandler,
  XAmzTargetCertificateManagerDescribeCertificateHandler,
  XAmzTargetCertificateManagerExportCertificateHandler,
  XAmzTargetCertificateManagerGetAccountConfigurationHandler,
  XAmzTargetCertificateManagerGetCertificateHandler,
  XAmzTargetCertificateManagerImportCertificateHandler,
  XAmzTargetCertificateManagerListCertificatesHandler,
  XAmzTargetCertificateManagerListTagsForCertificateHandler,
  XAmzTargetCertificateManagerPutAccountConfigurationHandler,
  XAmzTargetCertificateManagerRemoveTagsFromCertificateHandler,
  XAmzTargetCertificateManagerRenewCertificateHandler,
  XAmzTargetCertificateManagerRequestCertificateHandler,
  XAmzTargetCertificateManagerResendValidationEmailHandler,
  XAmzTargetCertificateManagerUpdateCertificateOptionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetCertificateManagerAddTagsToCertificateHandler)
  .route('/', XAmzTargetCertificateManagerDeleteCertificateHandler)
  .route('/', XAmzTargetCertificateManagerDescribeCertificateHandler)
  .route('/', XAmzTargetCertificateManagerExportCertificateHandler)
  .route('/', XAmzTargetCertificateManagerGetAccountConfigurationHandler)
  .route('/', XAmzTargetCertificateManagerGetCertificateHandler)
  .route('/', XAmzTargetCertificateManagerImportCertificateHandler)
  .route('/', XAmzTargetCertificateManagerListCertificatesHandler)
  .route('/', XAmzTargetCertificateManagerListTagsForCertificateHandler)
  .route('/', XAmzTargetCertificateManagerPutAccountConfigurationHandler)
  .route('/', XAmzTargetCertificateManagerRemoveTagsFromCertificateHandler)
  .route('/', XAmzTargetCertificateManagerRenewCertificateHandler)
  .route('/', XAmzTargetCertificateManagerRequestCertificateHandler)
  .route('/', XAmzTargetCertificateManagerResendValidationEmailHandler)
  .route('/', XAmzTargetCertificateManagerUpdateCertificateOptionsHandler)

export default app
