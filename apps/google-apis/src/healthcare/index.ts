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
} from './routes'
import {
  deleteV1beta1NameDeleteRevisionRouteHandler,
  deleteV1beta1NamePurgeRouteHandler,
  deleteV1beta1NameRouteHandler,
  deleteV1beta1ParentDicomWebDicomWebPathRouteHandler,
  deleteV1beta1ParentFhirTypeRouteHandler,
  getV1beta1NameEverythingRouteHandler,
  getV1beta1NameFhirMetadataRouteHandler,
  getV1beta1NameGetFHIRStoreMetricsRouteHandler,
  getV1beta1NameHistoryRouteHandler,
  getV1beta1NameListRevisionsRouteHandler,
  getV1beta1NameLocationsRouteHandler,
  getV1beta1NameOperationsRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1NameTranslateRouteHandler,
  getV1beta1ParentAnnotationsRouteHandler,
  getV1beta1ParentAnnotationStoresRouteHandler,
  getV1beta1ParentAttributeDefinitionsRouteHandler,
  getV1beta1ParentConsentArtifactsRouteHandler,
  getV1beta1ParentConsentsRouteHandler,
  getV1beta1ParentConsentStoresRouteHandler,
  getV1beta1ParentDatasetsRouteHandler,
  getV1beta1ParentDicomStoresRouteHandler,
  getV1beta1ParentDicomWebDicomWebPathRouteHandler,
  getV1beta1ParentFhirConceptMapTranslateRouteHandler,
  getV1beta1ParentFhirObservationLastnRouteHandler,
  getV1beta1ParentFhirReferencesRouteHandler,
  getV1beta1ParentFhirStoresRouteHandler,
  getV1beta1ParentHl7V2StoresRouteHandler,
  getV1beta1ParentMessagesBatchGetRouteHandler,
  getV1beta1ParentMessagesRouteHandler,
  getV1beta1ParentUserDataMappingsRouteHandler,
  getV1beta1ResourceGetIamPolicyRouteHandler,
  patchV1beta1NameRouteHandler,
  patchV1beta1ParentFhirTypeRouteHandler,
  postV1beta1ConsentStoreCheckDataAccessRouteHandler,
  postV1beta1ConsentStoreEvaluateUserConsentsRouteHandler,
  postV1beta1ConsentStoreQueryAccessibleDataRouteHandler,
  postV1beta1NameActivateRouteHandler,
  postV1beta1NameArchiveRouteHandler,
  postV1beta1NameCancelRouteHandler,
  postV1beta1NameConfigureSearchRouteHandler,
  postV1beta1NameEvaluateRouteHandler,
  postV1beta1NameExportRouteHandler,
  postV1beta1NameImportRouteHandler,
  postV1beta1NameRejectRouteHandler,
  postV1beta1NameRevokeRouteHandler,
  postV1beta1NlpServiceAnalyzeEntitiesRouteHandler,
  postV1beta1ParentAnnotationsRouteHandler,
  postV1beta1ParentAnnotationStoresRouteHandler,
  postV1beta1ParentAttributeDefinitionsRouteHandler,
  postV1beta1ParentConsentArtifactsRouteHandler,
  postV1beta1ParentConsentsRouteHandler,
  postV1beta1ParentConsentStoresRouteHandler,
  postV1beta1ParentDatasetsRouteHandler,
  postV1beta1ParentDicomStoresRouteHandler,
  postV1beta1ParentDicomWebDicomWebPathRouteHandler,
  postV1beta1ParentFhirResourceTypeSearchRouteHandler,
  postV1beta1ParentFhirRouteHandler,
  postV1beta1ParentFhirSearchRouteHandler,
  postV1beta1ParentFhirStoresRouteHandler,
  postV1beta1ParentFhirTypeRouteHandler,
  postV1beta1ParentFhirTypeValidateRouteHandler,
  postV1beta1ParentHl7V2StoresRouteHandler,
  postV1beta1ParentMessagesIngestRouteHandler,
  postV1beta1ParentMessagesRouteHandler,
  postV1beta1ParentUserDataMappingsRouteHandler,
  postV1beta1ResourceSetIamPolicyRouteHandler,
  postV1beta1ResourceTestIamPermissionsRouteHandler,
  postV1beta1SourceDatasetDeidentifyRouteHandler,
  postV1beta1SourceStoreDeidentifyRouteHandler,
  putV1beta1NameRouteHandler,
  putV1beta1ParentFhirTypeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postV1beta1ConsentStoreCheckDataAccessRoute,
    postV1beta1ConsentStoreCheckDataAccessRouteHandler,
  )
  .openapi(
    postV1beta1ConsentStoreEvaluateUserConsentsRoute,
    postV1beta1ConsentStoreEvaluateUserConsentsRouteHandler,
  )
  .openapi(
    postV1beta1ConsentStoreQueryAccessibleDataRoute,
    postV1beta1ConsentStoreQueryAccessibleDataRouteHandler,
  )
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(putV1beta1NameRoute, putV1beta1NameRouteHandler)
  .openapi(getV1beta1NameEverythingRoute, getV1beta1NameEverythingRouteHandler)
  .openapi(deleteV1beta1NamePurgeRoute, deleteV1beta1NamePurgeRouteHandler)
  .openapi(getV1beta1NameTranslateRoute, getV1beta1NameTranslateRouteHandler)
  .openapi(getV1beta1NameHistoryRoute, getV1beta1NameHistoryRouteHandler)
  .openapi(getV1beta1NameFhirMetadataRoute, getV1beta1NameFhirMetadataRouteHandler)
  .openapi(getV1beta1NameLocationsRoute, getV1beta1NameLocationsRouteHandler)
  .openapi(getV1beta1NameOperationsRoute, getV1beta1NameOperationsRouteHandler)
  .openapi(postV1beta1NameActivateRoute, postV1beta1NameActivateRouteHandler)
  .openapi(postV1beta1NameArchiveRoute, postV1beta1NameArchiveRouteHandler)
  .openapi(postV1beta1NameCancelRoute, postV1beta1NameCancelRouteHandler)
  .openapi(postV1beta1NameConfigureSearchRoute, postV1beta1NameConfigureSearchRouteHandler)
  .openapi(deleteV1beta1NameDeleteRevisionRoute, deleteV1beta1NameDeleteRevisionRouteHandler)
  .openapi(postV1beta1NameEvaluateRoute, postV1beta1NameEvaluateRouteHandler)
  .openapi(postV1beta1NameExportRoute, postV1beta1NameExportRouteHandler)
  .openapi(getV1beta1NameGetFHIRStoreMetricsRoute, getV1beta1NameGetFHIRStoreMetricsRouteHandler)
  .openapi(postV1beta1NameImportRoute, postV1beta1NameImportRouteHandler)
  .openapi(getV1beta1NameListRevisionsRoute, getV1beta1NameListRevisionsRouteHandler)
  .openapi(postV1beta1NameRejectRoute, postV1beta1NameRejectRouteHandler)
  .openapi(postV1beta1NameRevokeRoute, postV1beta1NameRevokeRouteHandler)
  .openapi(
    postV1beta1NlpServiceAnalyzeEntitiesRoute,
    postV1beta1NlpServiceAnalyzeEntitiesRouteHandler,
  )
  .openapi(getV1beta1ParentAnnotationStoresRoute, getV1beta1ParentAnnotationStoresRouteHandler)
  .openapi(postV1beta1ParentAnnotationStoresRoute, postV1beta1ParentAnnotationStoresRouteHandler)
  .openapi(getV1beta1ParentAnnotationsRoute, getV1beta1ParentAnnotationsRouteHandler)
  .openapi(postV1beta1ParentAnnotationsRoute, postV1beta1ParentAnnotationsRouteHandler)
  .openapi(
    getV1beta1ParentAttributeDefinitionsRoute,
    getV1beta1ParentAttributeDefinitionsRouteHandler,
  )
  .openapi(
    postV1beta1ParentAttributeDefinitionsRoute,
    postV1beta1ParentAttributeDefinitionsRouteHandler,
  )
  .openapi(getV1beta1ParentConsentArtifactsRoute, getV1beta1ParentConsentArtifactsRouteHandler)
  .openapi(postV1beta1ParentConsentArtifactsRoute, postV1beta1ParentConsentArtifactsRouteHandler)
  .openapi(getV1beta1ParentConsentStoresRoute, getV1beta1ParentConsentStoresRouteHandler)
  .openapi(postV1beta1ParentConsentStoresRoute, postV1beta1ParentConsentStoresRouteHandler)
  .openapi(getV1beta1ParentConsentsRoute, getV1beta1ParentConsentsRouteHandler)
  .openapi(postV1beta1ParentConsentsRoute, postV1beta1ParentConsentsRouteHandler)
  .openapi(getV1beta1ParentDatasetsRoute, getV1beta1ParentDatasetsRouteHandler)
  .openapi(postV1beta1ParentDatasetsRoute, postV1beta1ParentDatasetsRouteHandler)
  .openapi(getV1beta1ParentDicomStoresRoute, getV1beta1ParentDicomStoresRouteHandler)
  .openapi(postV1beta1ParentDicomStoresRoute, postV1beta1ParentDicomStoresRouteHandler)
  .openapi(
    deleteV1beta1ParentDicomWebDicomWebPathRoute,
    deleteV1beta1ParentDicomWebDicomWebPathRouteHandler,
  )
  .openapi(
    getV1beta1ParentDicomWebDicomWebPathRoute,
    getV1beta1ParentDicomWebDicomWebPathRouteHandler,
  )
  .openapi(
    postV1beta1ParentDicomWebDicomWebPathRoute,
    postV1beta1ParentDicomWebDicomWebPathRouteHandler,
  )
  .openapi(postV1beta1ParentFhirRoute, postV1beta1ParentFhirRouteHandler)
  .openapi(getV1beta1ParentFhirReferencesRoute, getV1beta1ParentFhirReferencesRouteHandler)
  .openapi(
    getV1beta1ParentFhirConceptMapTranslateRoute,
    getV1beta1ParentFhirConceptMapTranslateRouteHandler,
  )
  .openapi(
    getV1beta1ParentFhirObservationLastnRoute,
    getV1beta1ParentFhirObservationLastnRouteHandler,
  )
  .openapi(postV1beta1ParentFhirSearchRoute, postV1beta1ParentFhirSearchRouteHandler)
  .openapi(
    postV1beta1ParentFhirResourceTypeSearchRoute,
    postV1beta1ParentFhirResourceTypeSearchRouteHandler,
  )
  .openapi(deleteV1beta1ParentFhirTypeRoute, deleteV1beta1ParentFhirTypeRouteHandler)
  .openapi(patchV1beta1ParentFhirTypeRoute, patchV1beta1ParentFhirTypeRouteHandler)
  .openapi(postV1beta1ParentFhirTypeRoute, postV1beta1ParentFhirTypeRouteHandler)
  .openapi(putV1beta1ParentFhirTypeRoute, putV1beta1ParentFhirTypeRouteHandler)
  .openapi(postV1beta1ParentFhirTypeValidateRoute, postV1beta1ParentFhirTypeValidateRouteHandler)
  .openapi(getV1beta1ParentFhirStoresRoute, getV1beta1ParentFhirStoresRouteHandler)
  .openapi(postV1beta1ParentFhirStoresRoute, postV1beta1ParentFhirStoresRouteHandler)
  .openapi(getV1beta1ParentHl7V2StoresRoute, getV1beta1ParentHl7V2StoresRouteHandler)
  .openapi(postV1beta1ParentHl7V2StoresRoute, postV1beta1ParentHl7V2StoresRouteHandler)
  .openapi(getV1beta1ParentMessagesRoute, getV1beta1ParentMessagesRouteHandler)
  .openapi(postV1beta1ParentMessagesRoute, postV1beta1ParentMessagesRouteHandler)
  .openapi(getV1beta1ParentMessagesBatchGetRoute, getV1beta1ParentMessagesBatchGetRouteHandler)
  .openapi(postV1beta1ParentMessagesIngestRoute, postV1beta1ParentMessagesIngestRouteHandler)
  .openapi(getV1beta1ParentUserDataMappingsRoute, getV1beta1ParentUserDataMappingsRouteHandler)
  .openapi(postV1beta1ParentUserDataMappingsRoute, postV1beta1ParentUserDataMappingsRouteHandler)
  .openapi(getV1beta1ResourceGetIamPolicyRoute, getV1beta1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1beta1ResourceSetIamPolicyRoute, postV1beta1ResourceSetIamPolicyRouteHandler)
  .openapi(
    postV1beta1ResourceTestIamPermissionsRoute,
    postV1beta1ResourceTestIamPermissionsRouteHandler,
  )
  .openapi(postV1beta1SourceDatasetDeidentifyRoute, postV1beta1SourceDatasetDeidentifyRouteHandler)
  .openapi(postV1beta1SourceStoreDeidentifyRoute, postV1beta1SourceStoreDeidentifyRouteHandler)

export default app
