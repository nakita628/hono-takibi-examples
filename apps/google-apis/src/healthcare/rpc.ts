import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1beta1ConsentStoreCheckDataAccess(
  args: InferRequestType<(typeof client.v1beta1)[':consentStore:checkDataAccess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':consentStore:checkDataAccess'].$post(args, options))
}

export async function postV1beta1ConsentStoreEvaluateUserConsents(
  args: InferRequestType<(typeof client.v1beta1)[':consentStore:evaluateUserConsents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':consentStore:evaluateUserConsents'].$post(args, options),
  )
}

export async function postV1beta1ConsentStoreQueryAccessibleData(
  args: InferRequestType<(typeof client.v1beta1)[':consentStore:queryAccessibleData']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':consentStore:queryAccessibleData'].$post(args, options),
  )
}

export async function getV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$get(args, options))
}

export async function putV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$put(args, options))
}

export async function deleteV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$delete(args, options))
}

export async function patchV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$patch(args, options))
}

export async function getV1beta1NameEverything(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$everything']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$everything.$get(args, options))
}

export async function deleteV1beta1NamePurge(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$purge']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$purge.$delete(args, options))
}

export async function getV1beta1NameTranslate(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$translate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$translate.$get(args, options))
}

export async function getV1beta1NameHistory(
  args: InferRequestType<(typeof client.v1beta1)[':name']['_history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name']._history.$get(args, options))
}

export async function getV1beta1NameFhirMetadata(
  args: InferRequestType<(typeof client.v1beta1)[':name']['fhir']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].fhir.metadata.$get(args, options))
}

export async function getV1beta1NameLocations(
  args: InferRequestType<(typeof client.v1beta1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].locations.$get(args, options))
}

export async function getV1beta1NameOperations(
  args: InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].operations.$get(args, options))
}

export async function postV1beta1NameActivate(
  args: InferRequestType<(typeof client.v1beta1)[':name:activate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:activate'].$post(args, options))
}

export async function postV1beta1NameArchive(
  args: InferRequestType<(typeof client.v1beta1)[':name:archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:archive'].$post(args, options))
}

export async function postV1beta1NameCancel(
  args: InferRequestType<(typeof client.v1beta1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:cancel'].$post(args, options))
}

export async function postV1beta1NameConfigureSearch(
  args: InferRequestType<(typeof client.v1beta1)[':name:configureSearch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:configureSearch'].$post(args, options))
}

export async function deleteV1beta1NameDeleteRevision(
  args: InferRequestType<(typeof client.v1beta1)[':name:deleteRevision']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:deleteRevision'].$delete(args, options))
}

export async function postV1beta1NameEvaluate(
  args: InferRequestType<(typeof client.v1beta1)[':name:evaluate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:evaluate'].$post(args, options))
}

export async function postV1beta1NameExport(
  args: InferRequestType<(typeof client.v1beta1)[':name:export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:export'].$post(args, options))
}

export async function getV1beta1NameGetFHIRStoreMetrics(
  args: InferRequestType<(typeof client.v1beta1)[':name:getFHIRStoreMetrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:getFHIRStoreMetrics'].$get(args, options))
}

export async function postV1beta1NameImport(
  args: InferRequestType<(typeof client.v1beta1)[':name:import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:import'].$post(args, options))
}

export async function getV1beta1NameListRevisions(
  args: InferRequestType<(typeof client.v1beta1)[':name:listRevisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:listRevisions'].$get(args, options))
}

export async function postV1beta1NameReject(
  args: InferRequestType<(typeof client.v1beta1)[':name:reject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:reject'].$post(args, options))
}

export async function postV1beta1NameRevoke(
  args: InferRequestType<(typeof client.v1beta1)[':name:revoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:revoke'].$post(args, options))
}

export async function postV1beta1NlpServiceAnalyzeEntities(
  args: InferRequestType<(typeof client.v1beta1)[':nlpService:analyzeEntities']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':nlpService:analyzeEntities'].$post(args, options))
}

export async function getV1beta1ParentAnnotationStores(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['annotationStores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].annotationStores.$get(args, options))
}

export async function postV1beta1ParentAnnotationStores(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['annotationStores']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].annotationStores.$post(args, options))
}

export async function getV1beta1ParentAnnotations(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['annotations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].annotations.$get(args, options))
}

export async function postV1beta1ParentAnnotations(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['annotations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].annotations.$post(args, options))
}

export async function getV1beta1ParentAttributeDefinitions(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['attributeDefinitions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].attributeDefinitions.$get(args, options))
}

export async function postV1beta1ParentAttributeDefinitions(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['attributeDefinitions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].attributeDefinitions.$post(args, options))
}

export async function getV1beta1ParentConsentArtifacts(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['consentArtifacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].consentArtifacts.$get(args, options))
}

export async function postV1beta1ParentConsentArtifacts(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['consentArtifacts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].consentArtifacts.$post(args, options))
}

export async function getV1beta1ParentConsentStores(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['consentStores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].consentStores.$get(args, options))
}

export async function postV1beta1ParentConsentStores(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['consentStores']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].consentStores.$post(args, options))
}

export async function getV1beta1ParentConsents(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['consents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].consents.$get(args, options))
}

export async function postV1beta1ParentConsents(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['consents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].consents.$post(args, options))
}

export async function getV1beta1ParentDatasets(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['datasets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].datasets.$get(args, options))
}

export async function postV1beta1ParentDatasets(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['datasets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].datasets.$post(args, options))
}

export async function getV1beta1ParentDicomStores(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['dicomStores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].dicomStores.$get(args, options))
}

export async function postV1beta1ParentDicomStores(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['dicomStores']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].dicomStores.$post(args, options))
}

export async function getV1beta1ParentDicomWebDicomWebPath(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['dicomWeb'][':dicomWebPath']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent'].dicomWeb[':dicomWebPath'].$get(args, options),
  )
}

export async function postV1beta1ParentDicomWebDicomWebPath(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['dicomWeb'][':dicomWebPath']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent'].dicomWeb[':dicomWebPath'].$post(args, options),
  )
}

export async function deleteV1beta1ParentDicomWebDicomWebPath(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['dicomWeb'][':dicomWebPath']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent'].dicomWeb[':dicomWebPath'].$delete(args, options),
  )
}

export async function postV1beta1ParentFhir(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['fhir']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].fhir.$post(args, options))
}

export async function getV1beta1ParentFhirReferences(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['fhir']['$references']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].fhir.$references.$get(args, options))
}

export async function getV1beta1ParentFhirConceptMapTranslate(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['fhir']['ConceptMap']['$translate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent'].fhir.ConceptMap.$translate.$get(args, options),
  )
}

export async function getV1beta1ParentFhirObservationLastn(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['fhir']['Observation']['$lastn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].fhir.Observation.$lastn.$get(args, options))
}

export async function postV1beta1ParentFhirSearch(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['fhir']['_search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].fhir._search.$post(args, options))
}

export async function postV1beta1ParentFhirResourceTypeSearch(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['fhir'][':resourceType']['_search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent'].fhir[':resourceType']._search.$post(args, options),
  )
}

export async function putV1beta1ParentFhirType(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['fhir'][':type']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].fhir[':type'].$put(args, options))
}

export async function postV1beta1ParentFhirType(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['fhir'][':type']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].fhir[':type'].$post(args, options))
}

export async function deleteV1beta1ParentFhirType(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['fhir'][':type']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].fhir[':type'].$delete(args, options))
}

export async function patchV1beta1ParentFhirType(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['fhir'][':type']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].fhir[':type'].$patch(args, options))
}

export async function postV1beta1ParentFhirTypeValidate(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['fhir'][':type']['$validate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].fhir[':type'].$validate.$post(args, options))
}

export async function getV1beta1ParentFhirStores(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['fhirStores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].fhirStores.$get(args, options))
}

export async function postV1beta1ParentFhirStores(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['fhirStores']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].fhirStores.$post(args, options))
}

export async function getV1beta1ParentHl7V2Stores(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['hl7V2Stores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].hl7V2Stores.$get(args, options))
}

export async function postV1beta1ParentHl7V2Stores(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['hl7V2Stores']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].hl7V2Stores.$post(args, options))
}

export async function getV1beta1ParentMessages(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].messages.$get(args, options))
}

export async function postV1beta1ParentMessages(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].messages.$post(args, options))
}

export async function getV1beta1ParentMessagesBatchGet(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['messages:batchGet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent']['messages:batchGet'].$get(args, options))
}

export async function postV1beta1ParentMessagesIngest(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['messages:ingest']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent']['messages:ingest'].$post(args, options))
}

export async function getV1beta1ParentUserDataMappings(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['userDataMappings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].userDataMappings.$get(args, options))
}

export async function postV1beta1ParentUserDataMappings(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['userDataMappings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].userDataMappings.$post(args, options))
}

export async function getV1beta1ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:getIamPolicy'].$get(args, options))
}

export async function postV1beta1ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1beta1ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:testIamPermissions'].$post(args, options))
}

export async function postV1beta1SourceDatasetDeidentify(
  args: InferRequestType<(typeof client.v1beta1)[':sourceDataset:deidentify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':sourceDataset:deidentify'].$post(args, options))
}

export async function postV1beta1SourceStoreDeidentify(
  args: InferRequestType<(typeof client.v1beta1)[':sourceStore:deidentify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':sourceStore:deidentify'].$post(args, options))
}
