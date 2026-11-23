import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postBusinessLines(
  args: InferRequestType<typeof client.businessLines.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businessLines.$post(args, options))
}

export async function getBusinessLinesId(
  args: InferRequestType<(typeof client.businessLines)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businessLines[':id'].$get(args, options))
}

export async function deleteBusinessLinesId(
  args: InferRequestType<(typeof client.businessLines)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businessLines[':id'].$delete(args, options))
}

export async function patchBusinessLinesId(
  args: InferRequestType<(typeof client.businessLines)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businessLines[':id'].$patch(args, options))
}

export async function postDocuments(
  args: InferRequestType<typeof client.documents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents.$post(args, options))
}

export async function getDocumentsId(
  args: InferRequestType<(typeof client.documents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id'].$get(args, options))
}

export async function deleteDocumentsId(
  args: InferRequestType<(typeof client.documents)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id'].$delete(args, options))
}

export async function patchDocumentsId(
  args: InferRequestType<(typeof client.documents)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id'].$patch(args, options))
}

export async function postLegalEntities(
  args: InferRequestType<typeof client.legalEntities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legalEntities.$post(args, options))
}

export async function getLegalEntitiesId(
  args: InferRequestType<(typeof client.legalEntities)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legalEntities[':id'].$get(args, options))
}

export async function patchLegalEntitiesId(
  args: InferRequestType<(typeof client.legalEntities)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legalEntities[':id'].$patch(args, options))
}

export async function getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereference(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['acceptedTermsOfServiceDocument'][':termsofserviceacceptancereference']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legalEntities[':id'].acceptedTermsOfServiceDocument[
      ':termsofserviceacceptancereference'
    ].$get(args, options),
  )
}

export async function getLegalEntitiesIdBusinessLines(
  args: InferRequestType<(typeof client.legalEntities)[':id']['businessLines']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legalEntities[':id'].businessLines.$get(args, options))
}

export async function postLegalEntitiesIdCheckTaxElectronicDeliveryConsent(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['checkTaxElectronicDeliveryConsent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legalEntities[':id'].checkTaxElectronicDeliveryConsent.$post(args, options),
  )
}

export async function postLegalEntitiesIdCheckVerificationErrors(
  args: InferRequestType<(typeof client.legalEntities)[':id']['checkVerificationErrors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legalEntities[':id'].checkVerificationErrors.$post(args, options),
  )
}

export async function postLegalEntitiesIdConfirmDataReview(
  args: InferRequestType<(typeof client.legalEntities)[':id']['confirmDataReview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legalEntities[':id'].confirmDataReview.$post(args, options))
}

export async function postLegalEntitiesIdOnboardingLinks(
  args: InferRequestType<(typeof client.legalEntities)[':id']['onboardingLinks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legalEntities[':id'].onboardingLinks.$post(args, options))
}

export async function getLegalEntitiesIdPciQuestionnaires(
  args: InferRequestType<(typeof client.legalEntities)[':id']['pciQuestionnaires']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legalEntities[':id'].pciQuestionnaires.$get(args, options))
}

export async function postLegalEntitiesIdPciQuestionnairesGeneratePciTemplates(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['pciQuestionnaires']['generatePciTemplates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legalEntities[':id'].pciQuestionnaires.generatePciTemplates.$post(args, options),
  )
}

export async function postLegalEntitiesIdPciQuestionnairesSignPciTemplates(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['pciQuestionnaires']['signPciTemplates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legalEntities[':id'].pciQuestionnaires.signPciTemplates.$post(args, options),
  )
}

export async function postLegalEntitiesIdPciQuestionnairesSigningRequired(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['pciQuestionnaires']['signingRequired']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legalEntities[':id'].pciQuestionnaires.signingRequired.$post(args, options),
  )
}

export async function getLegalEntitiesIdPciQuestionnairesPciid(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['pciQuestionnaires'][':pciid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legalEntities[':id'].pciQuestionnaires[':pciid'].$get(args, options),
  )
}

export async function postLegalEntitiesIdSetTaxElectronicDeliveryConsent(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['setTaxElectronicDeliveryConsent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legalEntities[':id'].setTaxElectronicDeliveryConsent.$post(args, options),
  )
}

export async function postLegalEntitiesIdTermsOfService(
  args: InferRequestType<(typeof client.legalEntities)[':id']['termsOfService']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legalEntities[':id'].termsOfService.$post(args, options))
}

export async function patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['termsOfService'][':termsofservicedocumentid']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legalEntities[':id'].termsOfService[':termsofservicedocumentid'].$patch(args, options),
  )
}

export async function getLegalEntitiesIdTermsOfServiceAcceptanceInfos(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['termsOfServiceAcceptanceInfos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legalEntities[':id'].termsOfServiceAcceptanceInfos.$get(args, options),
  )
}

export async function getLegalEntitiesIdTermsOfServiceStatus(
  args: InferRequestType<(typeof client.legalEntities)[':id']['termsOfServiceStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legalEntities[':id'].termsOfServiceStatus.$get(args, options))
}

export async function getThemes(options?: ClientRequestOptions) {
  return await parseResponse(client.themes.$get(undefined, options))
}

export async function getThemesId(
  args: InferRequestType<(typeof client.themes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.themes[':id'].$get(args, options))
}

export async function postTransferInstruments(
  args: InferRequestType<typeof client.transferInstruments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transferInstruments.$post(args, options))
}

export async function getTransferInstrumentsId(
  args: InferRequestType<(typeof client.transferInstruments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transferInstruments[':id'].$get(args, options))
}

export async function deleteTransferInstrumentsId(
  args: InferRequestType<(typeof client.transferInstruments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transferInstruments[':id'].$delete(args, options))
}

export async function patchTransferInstrumentsId(
  args: InferRequestType<(typeof client.transferInstruments)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transferInstruments[':id'].$patch(args, options))
}

export async function postLegalEntitiesIdRequestPeriodicReview(
  args: InferRequestType<(typeof client.legalEntities)[':id']['requestPeriodicReview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legalEntities[':id'].requestPeriodicReview.$post(args, options))
}
