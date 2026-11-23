import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceRoute,
  getLegalEntitiesIdBusinessLinesRoute,
  getLegalEntitiesIdPciQuestionnairesPciidRoute,
  getLegalEntitiesIdPciQuestionnairesRoute,
  getLegalEntitiesIdRoute,
  getLegalEntitiesIdTermsOfServiceAcceptanceInfosRoute,
  getLegalEntitiesIdTermsOfServiceStatusRoute,
  patchLegalEntitiesIdRoute,
  patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidRoute,
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
} from '../routes'

const app = new OpenAPIHono()

export const legalEntitiesHandler = app
  .openapi(postLegalEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegalEntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLegalEntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getLegalEntitiesIdBusinessLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegalEntitiesIdCheckTaxElectronicDeliveryConsentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegalEntitiesIdCheckVerificationErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegalEntitiesIdConfirmDataReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegalEntitiesIdOnboardingLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegalEntitiesIdPciQuestionnairesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegalEntitiesIdPciQuestionnairesSignPciTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegalEntitiesIdPciQuestionnairesSigningRequiredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegalEntitiesIdPciQuestionnairesPciidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegalEntitiesIdSetTaxElectronicDeliveryConsentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegalEntitiesIdTermsOfServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegalEntitiesIdTermsOfServiceAcceptanceInfosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegalEntitiesIdTermsOfServiceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegalEntitiesIdRequestPeriodicReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
