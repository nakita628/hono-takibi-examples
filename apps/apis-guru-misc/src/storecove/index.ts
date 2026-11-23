import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLegalEntitiesIdRoute,
  deleteLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdRoute,
  deleteLegalEntitiesLegalEntityIdAdministrationsIdRoute,
  deleteLegalEntitiesLegalEntityIdPeppolIdentifiersSuperschemeSchemeIdentifierRoute,
  deleteWebhookInstancesGuidRoute,
  getDiscoveryIdentifiersRoute,
  getDocumentSubmissionsGuidEvidenceEvidenceTypeRoute,
  getInvoiceSubmissionsGuidEvidenceRoute,
  getLegalEntitiesIdRoute,
  getLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdRoute,
  getLegalEntitiesLegalEntityIdAdministrationsIdRoute,
  getPurchaseInvoicesGuidPackagingPackageVersionRoute,
  getPurchaseInvoicesGuidPackagingRoute,
  getPurchaseInvoicesGuidRoute,
  getReceivedDocumentsGuidFormatRoute,
  getWebhookInstancesIndexRoute,
  patchLegalEntitiesIdRoute,
  patchLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdRoute,
  patchLegalEntitiesLegalEntityIdAdministrationsIdRoute,
  postDiscoveryExistsRoute,
  postDiscoveryReceivesRoute,
  postDocumentSubmissionsRoute,
  postInvoiceSubmissionsPreflightRoute,
  postInvoiceSubmissionsRoute,
  postLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersRoute,
  postLegalEntitiesLegalEntityIdAdministrationsRoute,
  postLegalEntitiesLegalEntityIdPeppolIdentifiersRoute,
  postLegalEntitiesLegalEntityIdReceivedDocumentsRoute,
  postLegalEntitiesRoute,
  postReceivedDocumentsRoute,
} from './routes'
import {
  deleteLegalEntitiesIdRouteHandler,
  deleteLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdRouteHandler,
  deleteLegalEntitiesLegalEntityIdAdministrationsIdRouteHandler,
  deleteLegalEntitiesLegalEntityIdPeppolIdentifiersSuperschemeSchemeIdentifierRouteHandler,
  deleteWebhookInstancesGuidRouteHandler,
  getDiscoveryIdentifiersRouteHandler,
  getDocumentSubmissionsGuidEvidenceEvidenceTypeRouteHandler,
  getInvoiceSubmissionsGuidEvidenceRouteHandler,
  getLegalEntitiesIdRouteHandler,
  getLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdRouteHandler,
  getLegalEntitiesLegalEntityIdAdministrationsIdRouteHandler,
  getPurchaseInvoicesGuidPackagingPackageVersionRouteHandler,
  getPurchaseInvoicesGuidPackagingRouteHandler,
  getPurchaseInvoicesGuidRouteHandler,
  getReceivedDocumentsGuidFormatRouteHandler,
  getWebhookInstancesIndexRouteHandler,
  patchLegalEntitiesIdRouteHandler,
  patchLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdRouteHandler,
  patchLegalEntitiesLegalEntityIdAdministrationsIdRouteHandler,
  postDiscoveryExistsRouteHandler,
  postDiscoveryReceivesRouteHandler,
  postDocumentSubmissionsRouteHandler,
  postInvoiceSubmissionsPreflightRouteHandler,
  postInvoiceSubmissionsRouteHandler,
  postLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersRouteHandler,
  postLegalEntitiesLegalEntityIdAdministrationsRouteHandler,
  postLegalEntitiesLegalEntityIdPeppolIdentifiersRouteHandler,
  postLegalEntitiesLegalEntityIdReceivedDocumentsRouteHandler,
  postLegalEntitiesRouteHandler,
  postReceivedDocumentsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postDiscoveryExistsRoute, postDiscoveryExistsRouteHandler)
  .openapi(getDiscoveryIdentifiersRoute, getDiscoveryIdentifiersRouteHandler)
  .openapi(postDiscoveryReceivesRoute, postDiscoveryReceivesRouteHandler)
  .openapi(postDocumentSubmissionsRoute, postDocumentSubmissionsRouteHandler)
  .openapi(
    getDocumentSubmissionsGuidEvidenceEvidenceTypeRoute,
    getDocumentSubmissionsGuidEvidenceEvidenceTypeRouteHandler,
  )
  .openapi(postInvoiceSubmissionsRoute, postInvoiceSubmissionsRouteHandler)
  .openapi(postInvoiceSubmissionsPreflightRoute, postInvoiceSubmissionsPreflightRouteHandler)
  .openapi(getInvoiceSubmissionsGuidEvidenceRoute, getInvoiceSubmissionsGuidEvidenceRouteHandler)
  .openapi(postLegalEntitiesRoute, postLegalEntitiesRouteHandler)
  .openapi(deleteLegalEntitiesIdRoute, deleteLegalEntitiesIdRouteHandler)
  .openapi(getLegalEntitiesIdRoute, getLegalEntitiesIdRouteHandler)
  .openapi(patchLegalEntitiesIdRoute, patchLegalEntitiesIdRouteHandler)
  .openapi(
    postLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersRoute,
    postLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersRouteHandler,
  )
  .openapi(
    deleteLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdRoute,
    deleteLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdRouteHandler,
  )
  .openapi(
    getLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdRoute,
    getLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdRouteHandler,
  )
  .openapi(
    patchLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdRoute,
    patchLegalEntitiesLegalEntityIdAdditionalTaxIdentifiersIdRouteHandler,
  )
  .openapi(
    postLegalEntitiesLegalEntityIdAdministrationsRoute,
    postLegalEntitiesLegalEntityIdAdministrationsRouteHandler,
  )
  .openapi(
    deleteLegalEntitiesLegalEntityIdAdministrationsIdRoute,
    deleteLegalEntitiesLegalEntityIdAdministrationsIdRouteHandler,
  )
  .openapi(
    getLegalEntitiesLegalEntityIdAdministrationsIdRoute,
    getLegalEntitiesLegalEntityIdAdministrationsIdRouteHandler,
  )
  .openapi(
    patchLegalEntitiesLegalEntityIdAdministrationsIdRoute,
    patchLegalEntitiesLegalEntityIdAdministrationsIdRouteHandler,
  )
  .openapi(
    postLegalEntitiesLegalEntityIdPeppolIdentifiersRoute,
    postLegalEntitiesLegalEntityIdPeppolIdentifiersRouteHandler,
  )
  .openapi(
    deleteLegalEntitiesLegalEntityIdPeppolIdentifiersSuperschemeSchemeIdentifierRoute,
    deleteLegalEntitiesLegalEntityIdPeppolIdentifiersSuperschemeSchemeIdentifierRouteHandler,
  )
  .openapi(
    postLegalEntitiesLegalEntityIdReceivedDocumentsRoute,
    postLegalEntitiesLegalEntityIdReceivedDocumentsRouteHandler,
  )
  .openapi(getPurchaseInvoicesGuidRoute, getPurchaseInvoicesGuidRouteHandler)
  .openapi(getPurchaseInvoicesGuidPackagingRoute, getPurchaseInvoicesGuidPackagingRouteHandler)
  .openapi(
    getPurchaseInvoicesGuidPackagingPackageVersionRoute,
    getPurchaseInvoicesGuidPackagingPackageVersionRouteHandler,
  )
  .openapi(postReceivedDocumentsRoute, postReceivedDocumentsRouteHandler)
  .openapi(getReceivedDocumentsGuidFormatRoute, getReceivedDocumentsGuidFormatRouteHandler)
  .openapi(getWebhookInstancesIndexRoute, getWebhookInstancesIndexRouteHandler)
  .openapi(deleteWebhookInstancesGuidRoute, deleteWebhookInstancesGuidRouteHandler)

export default app
