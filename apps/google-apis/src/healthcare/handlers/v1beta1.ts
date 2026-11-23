import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameDeleteRevisionRoute,
  deleteV1beta1NamePurgeRoute,
  deleteV1beta1NameRoute,
  deleteV1beta1ParentDicomWebDicomWebPathRoute,
  deleteV1beta1ParentFhirTypeRoute,
  getV1beta1NameEverythingRoute,
  getV1beta1NameFhirMetadataRoute,
  getV1beta1NameGetFHIRStoreMetricsRoute,
  getV1beta1NameHistoryRoute,
  getV1beta1NameListRevisionsRoute,
  getV1beta1NameLocationsRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1NameTranslateRoute,
  getV1beta1ParentAnnotationsRoute,
  getV1beta1ParentAnnotationStoresRoute,
  getV1beta1ParentAttributeDefinitionsRoute,
  getV1beta1ParentConsentArtifactsRoute,
  getV1beta1ParentConsentsRoute,
  getV1beta1ParentConsentStoresRoute,
  getV1beta1ParentDatasetsRoute,
  getV1beta1ParentDicomStoresRoute,
  getV1beta1ParentDicomWebDicomWebPathRoute,
  getV1beta1ParentFhirConceptMapTranslateRoute,
  getV1beta1ParentFhirObservationLastnRoute,
  getV1beta1ParentFhirReferencesRoute,
  getV1beta1ParentFhirStoresRoute,
  getV1beta1ParentHl7V2StoresRoute,
  getV1beta1ParentMessagesBatchGetRoute,
  getV1beta1ParentMessagesRoute,
  getV1beta1ParentUserDataMappingsRoute,
  getV1beta1ResourceGetIamPolicyRoute,
  patchV1beta1NameRoute,
  patchV1beta1ParentFhirTypeRoute,
  postV1beta1ConsentStoreCheckDataAccessRoute,
  postV1beta1ConsentStoreEvaluateUserConsentsRoute,
  postV1beta1ConsentStoreQueryAccessibleDataRoute,
  postV1beta1NameActivateRoute,
  postV1beta1NameArchiveRoute,
  postV1beta1NameCancelRoute,
  postV1beta1NameConfigureSearchRoute,
  postV1beta1NameEvaluateRoute,
  postV1beta1NameExportRoute,
  postV1beta1NameImportRoute,
  postV1beta1NameRejectRoute,
  postV1beta1NameRevokeRoute,
  postV1beta1NlpServiceAnalyzeEntitiesRoute,
  postV1beta1ParentAnnotationsRoute,
  postV1beta1ParentAnnotationStoresRoute,
  postV1beta1ParentAttributeDefinitionsRoute,
  postV1beta1ParentConsentArtifactsRoute,
  postV1beta1ParentConsentsRoute,
  postV1beta1ParentConsentStoresRoute,
  postV1beta1ParentDatasetsRoute,
  postV1beta1ParentDicomStoresRoute,
  postV1beta1ParentDicomWebDicomWebPathRoute,
  postV1beta1ParentFhirResourceTypeSearchRoute,
  postV1beta1ParentFhirRoute,
  postV1beta1ParentFhirSearchRoute,
  postV1beta1ParentFhirStoresRoute,
  postV1beta1ParentFhirTypeRoute,
  postV1beta1ParentFhirTypeValidateRoute,
  postV1beta1ParentHl7V2StoresRoute,
  postV1beta1ParentMessagesIngestRoute,
  postV1beta1ParentMessagesRoute,
  postV1beta1ParentUserDataMappingsRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
  postV1beta1SourceDatasetDeidentifyRoute,
  postV1beta1SourceStoreDeidentifyRoute,
  putV1beta1NameRoute,
  putV1beta1ParentFhirTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1beta1Handler = app
  .openapi(postV1beta1ConsentStoreCheckDataAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ConsentStoreEvaluateUserConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ConsentStoreQueryAccessibleDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameEverythingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1beta1NamePurgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameTranslateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameFhirMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameConfigureSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1beta1NameDeleteRevisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameGetFHIRStoreMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameListRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NlpServiceAnalyzeEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentAnnotationStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentAnnotationStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentAttributeDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentAttributeDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentConsentArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentConsentArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentConsentStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentConsentStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentDicomStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentDicomStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1beta1ParentDicomWebDicomWebPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentDicomWebDicomWebPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentDicomWebDicomWebPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentFhirRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentFhirReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentFhirConceptMapTranslateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentFhirObservationLastnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentFhirSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentFhirResourceTypeSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1beta1ParentFhirTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1ParentFhirTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentFhirTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1beta1ParentFhirTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentFhirTypeValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentFhirStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentFhirStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentHl7V2StoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentHl7V2StoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentMessagesBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentMessagesIngestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentUserDataMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentUserDataMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1SourceDatasetDeidentifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1SourceStoreDeidentifyRoute, (c) => {
    throw new Error('Not implemented')
  })
