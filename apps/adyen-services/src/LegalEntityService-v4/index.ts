import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBusinessLinesIdRoute,
  deleteDocumentsIdRoute,
  deleteTransferInstrumentsIdRoute,
  getBusinessLinesIdRoute,
  getDocumentsIdRoute,
  getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceRoute,
  getLegalEntitiesIdBusinessLinesRoute,
  getLegalEntitiesIdPciQuestionnairesPciidRoute,
  getLegalEntitiesIdPciQuestionnairesRoute,
  getLegalEntitiesIdRoute,
  getLegalEntitiesIdTermsOfServiceAcceptanceInfosRoute,
  getLegalEntitiesIdTermsOfServiceStatusRoute,
  getThemesIdRoute,
  getThemesRoute,
  getTransferInstrumentsIdRoute,
  patchBusinessLinesIdRoute,
  patchDocumentsIdRoute,
  patchLegalEntitiesIdRoute,
  patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidRoute,
  patchTransferInstrumentsIdRoute,
  postBusinessLinesRoute,
  postDocumentsRoute,
  postLegalEntitiesIdCheckTaxElectronicDeliveryConsentRoute,
  postLegalEntitiesIdCheckVerificationErrorsRoute,
  postLegalEntitiesIdConfirmDataReviewRoute,
  postLegalEntitiesIdOnboardingLinksRoute,
  postLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesRoute,
  postLegalEntitiesIdPciQuestionnairesSigningRequiredRoute,
  postLegalEntitiesIdPciQuestionnairesSignPciTemplatesRoute,
  postLegalEntitiesIdRequestPeriodicReviewRoute,
  postLegalEntitiesIdSetTaxElectronicDeliveryConsentRoute,
  postLegalEntitiesIdTermsOfServiceRoute,
  postLegalEntitiesRoute,
  postTransferInstrumentsRoute,
} from './routes'
import {
  deleteBusinessLinesIdRouteHandler,
  deleteDocumentsIdRouteHandler,
  deleteTransferInstrumentsIdRouteHandler,
  getBusinessLinesIdRouteHandler,
  getDocumentsIdRouteHandler,
  getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceRouteHandler,
  getLegalEntitiesIdBusinessLinesRouteHandler,
  getLegalEntitiesIdPciQuestionnairesPciidRouteHandler,
  getLegalEntitiesIdPciQuestionnairesRouteHandler,
  getLegalEntitiesIdRouteHandler,
  getLegalEntitiesIdTermsOfServiceAcceptanceInfosRouteHandler,
  getLegalEntitiesIdTermsOfServiceStatusRouteHandler,
  getThemesIdRouteHandler,
  getThemesRouteHandler,
  getTransferInstrumentsIdRouteHandler,
  patchBusinessLinesIdRouteHandler,
  patchDocumentsIdRouteHandler,
  patchLegalEntitiesIdRouteHandler,
  patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidRouteHandler,
  patchTransferInstrumentsIdRouteHandler,
  postBusinessLinesRouteHandler,
  postDocumentsRouteHandler,
  postLegalEntitiesIdCheckTaxElectronicDeliveryConsentRouteHandler,
  postLegalEntitiesIdCheckVerificationErrorsRouteHandler,
  postLegalEntitiesIdConfirmDataReviewRouteHandler,
  postLegalEntitiesIdOnboardingLinksRouteHandler,
  postLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesRouteHandler,
  postLegalEntitiesIdPciQuestionnairesSigningRequiredRouteHandler,
  postLegalEntitiesIdPciQuestionnairesSignPciTemplatesRouteHandler,
  postLegalEntitiesIdRequestPeriodicReviewRouteHandler,
  postLegalEntitiesIdSetTaxElectronicDeliveryConsentRouteHandler,
  postLegalEntitiesIdTermsOfServiceRouteHandler,
  postLegalEntitiesRouteHandler,
  postTransferInstrumentsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postBusinessLinesRoute, postBusinessLinesRouteHandler)
  .openapi(getBusinessLinesIdRoute, getBusinessLinesIdRouteHandler)
  .openapi(deleteBusinessLinesIdRoute, deleteBusinessLinesIdRouteHandler)
  .openapi(patchBusinessLinesIdRoute, patchBusinessLinesIdRouteHandler)
  .openapi(postDocumentsRoute, postDocumentsRouteHandler)
  .openapi(getDocumentsIdRoute, getDocumentsIdRouteHandler)
  .openapi(deleteDocumentsIdRoute, deleteDocumentsIdRouteHandler)
  .openapi(patchDocumentsIdRoute, patchDocumentsIdRouteHandler)
  .openapi(postLegalEntitiesRoute, postLegalEntitiesRouteHandler)
  .openapi(getLegalEntitiesIdRoute, getLegalEntitiesIdRouteHandler)
  .openapi(patchLegalEntitiesIdRoute, patchLegalEntitiesIdRouteHandler)
  .openapi(
    getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceRoute,
    getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceRouteHandler,
  )
  .openapi(getLegalEntitiesIdBusinessLinesRoute, getLegalEntitiesIdBusinessLinesRouteHandler)
  .openapi(
    postLegalEntitiesIdCheckTaxElectronicDeliveryConsentRoute,
    postLegalEntitiesIdCheckTaxElectronicDeliveryConsentRouteHandler,
  )
  .openapi(
    postLegalEntitiesIdCheckVerificationErrorsRoute,
    postLegalEntitiesIdCheckVerificationErrorsRouteHandler,
  )
  .openapi(
    postLegalEntitiesIdConfirmDataReviewRoute,
    postLegalEntitiesIdConfirmDataReviewRouteHandler,
  )
  .openapi(postLegalEntitiesIdOnboardingLinksRoute, postLegalEntitiesIdOnboardingLinksRouteHandler)
  .openapi(
    getLegalEntitiesIdPciQuestionnairesRoute,
    getLegalEntitiesIdPciQuestionnairesRouteHandler,
  )
  .openapi(
    postLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesRoute,
    postLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesRouteHandler,
  )
  .openapi(
    postLegalEntitiesIdPciQuestionnairesSignPciTemplatesRoute,
    postLegalEntitiesIdPciQuestionnairesSignPciTemplatesRouteHandler,
  )
  .openapi(
    postLegalEntitiesIdPciQuestionnairesSigningRequiredRoute,
    postLegalEntitiesIdPciQuestionnairesSigningRequiredRouteHandler,
  )
  .openapi(
    getLegalEntitiesIdPciQuestionnairesPciidRoute,
    getLegalEntitiesIdPciQuestionnairesPciidRouteHandler,
  )
  .openapi(
    postLegalEntitiesIdSetTaxElectronicDeliveryConsentRoute,
    postLegalEntitiesIdSetTaxElectronicDeliveryConsentRouteHandler,
  )
  .openapi(postLegalEntitiesIdTermsOfServiceRoute, postLegalEntitiesIdTermsOfServiceRouteHandler)
  .openapi(
    patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidRoute,
    patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidRouteHandler,
  )
  .openapi(
    getLegalEntitiesIdTermsOfServiceAcceptanceInfosRoute,
    getLegalEntitiesIdTermsOfServiceAcceptanceInfosRouteHandler,
  )
  .openapi(
    getLegalEntitiesIdTermsOfServiceStatusRoute,
    getLegalEntitiesIdTermsOfServiceStatusRouteHandler,
  )
  .openapi(getThemesRoute, getThemesRouteHandler)
  .openapi(getThemesIdRoute, getThemesIdRouteHandler)
  .openapi(postTransferInstrumentsRoute, postTransferInstrumentsRouteHandler)
  .openapi(getTransferInstrumentsIdRoute, getTransferInstrumentsIdRouteHandler)
  .openapi(deleteTransferInstrumentsIdRoute, deleteTransferInstrumentsIdRouteHandler)
  .openapi(patchTransferInstrumentsIdRoute, patchTransferInstrumentsIdRouteHandler)
  .openapi(
    postLegalEntitiesIdRequestPeriodicReviewRoute,
    postLegalEntitiesIdRequestPeriodicReviewRouteHandler,
  )

export default app
