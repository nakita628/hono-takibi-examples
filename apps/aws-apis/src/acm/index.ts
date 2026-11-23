import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetCertificateManagerAddTagsToCertificateRoute,
  postXAmzTargetCertificateManagerDeleteCertificateRoute,
  postXAmzTargetCertificateManagerDescribeCertificateRoute,
  postXAmzTargetCertificateManagerExportCertificateRoute,
  postXAmzTargetCertificateManagerGetAccountConfigurationRoute,
  postXAmzTargetCertificateManagerGetCertificateRoute,
  postXAmzTargetCertificateManagerImportCertificateRoute,
  postXAmzTargetCertificateManagerListCertificatesRoute,
  postXAmzTargetCertificateManagerListTagsForCertificateRoute,
  postXAmzTargetCertificateManagerPutAccountConfigurationRoute,
  postXAmzTargetCertificateManagerRemoveTagsFromCertificateRoute,
  postXAmzTargetCertificateManagerRenewCertificateRoute,
  postXAmzTargetCertificateManagerRequestCertificateRoute,
  postXAmzTargetCertificateManagerResendValidationEmailRoute,
  postXAmzTargetCertificateManagerUpdateCertificateOptionsRoute,
} from './routes'
import {
  postXAmzTargetCertificateManagerAddTagsToCertificateRouteHandler,
  postXAmzTargetCertificateManagerDeleteCertificateRouteHandler,
  postXAmzTargetCertificateManagerDescribeCertificateRouteHandler,
  postXAmzTargetCertificateManagerExportCertificateRouteHandler,
  postXAmzTargetCertificateManagerGetAccountConfigurationRouteHandler,
  postXAmzTargetCertificateManagerGetCertificateRouteHandler,
  postXAmzTargetCertificateManagerImportCertificateRouteHandler,
  postXAmzTargetCertificateManagerListCertificatesRouteHandler,
  postXAmzTargetCertificateManagerListTagsForCertificateRouteHandler,
  postXAmzTargetCertificateManagerPutAccountConfigurationRouteHandler,
  postXAmzTargetCertificateManagerRemoveTagsFromCertificateRouteHandler,
  postXAmzTargetCertificateManagerRenewCertificateRouteHandler,
  postXAmzTargetCertificateManagerRequestCertificateRouteHandler,
  postXAmzTargetCertificateManagerResendValidationEmailRouteHandler,
  postXAmzTargetCertificateManagerUpdateCertificateOptionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetCertificateManagerAddTagsToCertificateRoute,
    postXAmzTargetCertificateManagerAddTagsToCertificateRouteHandler,
  )
  .openapi(
    postXAmzTargetCertificateManagerDeleteCertificateRoute,
    postXAmzTargetCertificateManagerDeleteCertificateRouteHandler,
  )
  .openapi(
    postXAmzTargetCertificateManagerDescribeCertificateRoute,
    postXAmzTargetCertificateManagerDescribeCertificateRouteHandler,
  )
  .openapi(
    postXAmzTargetCertificateManagerExportCertificateRoute,
    postXAmzTargetCertificateManagerExportCertificateRouteHandler,
  )
  .openapi(
    postXAmzTargetCertificateManagerGetAccountConfigurationRoute,
    postXAmzTargetCertificateManagerGetAccountConfigurationRouteHandler,
  )
  .openapi(
    postXAmzTargetCertificateManagerGetCertificateRoute,
    postXAmzTargetCertificateManagerGetCertificateRouteHandler,
  )
  .openapi(
    postXAmzTargetCertificateManagerImportCertificateRoute,
    postXAmzTargetCertificateManagerImportCertificateRouteHandler,
  )
  .openapi(
    postXAmzTargetCertificateManagerListCertificatesRoute,
    postXAmzTargetCertificateManagerListCertificatesRouteHandler,
  )
  .openapi(
    postXAmzTargetCertificateManagerListTagsForCertificateRoute,
    postXAmzTargetCertificateManagerListTagsForCertificateRouteHandler,
  )
  .openapi(
    postXAmzTargetCertificateManagerPutAccountConfigurationRoute,
    postXAmzTargetCertificateManagerPutAccountConfigurationRouteHandler,
  )
  .openapi(
    postXAmzTargetCertificateManagerRemoveTagsFromCertificateRoute,
    postXAmzTargetCertificateManagerRemoveTagsFromCertificateRouteHandler,
  )
  .openapi(
    postXAmzTargetCertificateManagerRenewCertificateRoute,
    postXAmzTargetCertificateManagerRenewCertificateRouteHandler,
  )
  .openapi(
    postXAmzTargetCertificateManagerRequestCertificateRoute,
    postXAmzTargetCertificateManagerRequestCertificateRouteHandler,
  )
  .openapi(
    postXAmzTargetCertificateManagerResendValidationEmailRoute,
    postXAmzTargetCertificateManagerResendValidationEmailRouteHandler,
  )
  .openapi(
    postXAmzTargetCertificateManagerUpdateCertificateOptionsRoute,
    postXAmzTargetCertificateManagerUpdateCertificateOptionsRouteHandler,
  )

export default app
