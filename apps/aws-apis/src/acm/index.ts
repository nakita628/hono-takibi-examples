import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetCertificateManagerAddTagsToCertificateHandler,
  xAmzTargetCertificateManagerDeleteCertificateHandler,
  xAmzTargetCertificateManagerDescribeCertificateHandler,
  xAmzTargetCertificateManagerExportCertificateHandler,
  xAmzTargetCertificateManagerGetAccountConfigurationHandler,
  xAmzTargetCertificateManagerGetCertificateHandler,
  xAmzTargetCertificateManagerImportCertificateHandler,
  xAmzTargetCertificateManagerListCertificatesHandler,
  xAmzTargetCertificateManagerListTagsForCertificateHandler,
  xAmzTargetCertificateManagerPutAccountConfigurationHandler,
  xAmzTargetCertificateManagerRemoveTagsFromCertificateHandler,
  xAmzTargetCertificateManagerRenewCertificateHandler,
  xAmzTargetCertificateManagerRequestCertificateHandler,
  xAmzTargetCertificateManagerResendValidationEmailHandler,
  xAmzTargetCertificateManagerUpdateCertificateOptionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetCertificateManagerAddTagsToCertificateHandler)
  .route('/', xAmzTargetCertificateManagerDeleteCertificateHandler)
  .route('/', xAmzTargetCertificateManagerDescribeCertificateHandler)
  .route('/', xAmzTargetCertificateManagerExportCertificateHandler)
  .route('/', xAmzTargetCertificateManagerGetAccountConfigurationHandler)
  .route('/', xAmzTargetCertificateManagerGetCertificateHandler)
  .route('/', xAmzTargetCertificateManagerImportCertificateHandler)
  .route('/', xAmzTargetCertificateManagerListCertificatesHandler)
  .route('/', xAmzTargetCertificateManagerListTagsForCertificateHandler)
  .route('/', xAmzTargetCertificateManagerPutAccountConfigurationHandler)
  .route('/', xAmzTargetCertificateManagerRemoveTagsFromCertificateHandler)
  .route('/', xAmzTargetCertificateManagerRenewCertificateHandler)
  .route('/', xAmzTargetCertificateManagerRequestCertificateHandler)
  .route('/', xAmzTargetCertificateManagerResendValidationEmailHandler)
  .route('/', xAmzTargetCertificateManagerUpdateCertificateOptionsHandler)

export default app
