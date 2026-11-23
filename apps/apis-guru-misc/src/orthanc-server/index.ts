import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChangesRoute,
  deleteExportsRoute,
  deleteInstancesIdAttachmentsNameRoute,
  deleteInstancesIdMetadataNameRoute,
  deleteInstancesIdRoute,
  deleteModalitiesIdRoute,
  deletePatientsIdAttachmentsNameRoute,
  deletePatientsIdMetadataNameRoute,
  deletePatientsIdRoute,
  deletePeersIdRoute,
  deleteQueriesIdRoute,
  deleteSeriesIdAttachmentsNameRoute,
  deleteSeriesIdMetadataNameRoute,
  deleteSeriesIdRoute,
  deleteStudiesIdAttachmentsNameRoute,
  deleteStudiesIdMetadataNameRoute,
  deleteStudiesIdRoute,
  getChangesRoute,
  getExportsRoute,
  getInstancesIdAttachmentsNameCompressedDataRoute,
  getInstancesIdAttachmentsNameCompressedMd5Route,
  getInstancesIdAttachmentsNameCompressedSizeRoute,
  getInstancesIdAttachmentsNameDataRoute,
  getInstancesIdAttachmentsNameInfoRoute,
  getInstancesIdAttachmentsNameIsCompressedRoute,
  getInstancesIdAttachmentsNameMd5Route,
  getInstancesIdAttachmentsNameRoute,
  getInstancesIdAttachmentsNameSizeRoute,
  getInstancesIdAttachmentsRoute,
  getInstancesIdContentRoute,
  getInstancesIdFileRoute,
  getInstancesIdFramesFrameImageInt16Route,
  getInstancesIdFramesFrameImageUint16Route,
  getInstancesIdFramesFrameImageUint8Route,
  getInstancesIdFramesFrameMatlabRoute,
  getInstancesIdFramesFrameNumpyRoute,
  getInstancesIdFramesFramePreviewRoute,
  getInstancesIdFramesFrameRawGzRoute,
  getInstancesIdFramesFrameRawRoute,
  getInstancesIdFramesFrameRenderedRoute,
  getInstancesIdFramesFrameRoute,
  getInstancesIdFramesRoute,
  getInstancesIdHeaderRoute,
  getInstancesIdImageInt16Route,
  getInstancesIdImageUint16Route,
  getInstancesIdImageUint8Route,
  getInstancesIdMatlabRoute,
  getInstancesIdMetadataNameRoute,
  getInstancesIdMetadataRoute,
  getInstancesIdModuleRoute,
  getInstancesIdNumpyRoute,
  getInstancesIdPatientRoute,
  getInstancesIdPdfRoute,
  getInstancesIdPreviewRoute,
  getInstancesIdRenderedRoute,
  getInstancesIdRoute,
  getInstancesIdSeriesRoute,
  getInstancesIdSimplifiedTagsRoute,
  getInstancesIdStatisticsRoute,
  getInstancesIdStudyRoute,
  getInstancesIdTagsRoute,
  getInstancesRoute,
  getJobsIdKeyRoute,
  getJobsIdRoute,
  getJobsRoute,
  getModalitiesIdConfigurationRoute,
  getModalitiesIdRoute,
  getModalitiesRoute,
  getPatientsIdArchiveRoute,
  getPatientsIdAttachmentsNameCompressedDataRoute,
  getPatientsIdAttachmentsNameCompressedMd5Route,
  getPatientsIdAttachmentsNameCompressedSizeRoute,
  getPatientsIdAttachmentsNameDataRoute,
  getPatientsIdAttachmentsNameInfoRoute,
  getPatientsIdAttachmentsNameIsCompressedRoute,
  getPatientsIdAttachmentsNameMd5Route,
  getPatientsIdAttachmentsNameRoute,
  getPatientsIdAttachmentsNameSizeRoute,
  getPatientsIdAttachmentsRoute,
  getPatientsIdInstancesRoute,
  getPatientsIdInstancesTagsRoute,
  getPatientsIdMediaRoute,
  getPatientsIdMetadataNameRoute,
  getPatientsIdMetadataRoute,
  getPatientsIdModuleRoute,
  getPatientsIdProtectedRoute,
  getPatientsIdRoute,
  getPatientsIdSeriesRoute,
  getPatientsIdSharedTagsRoute,
  getPatientsIdStatisticsRoute,
  getPatientsIdStudiesRoute,
  getPatientsRoute,
  getPeersIdConfigurationRoute,
  getPeersIdRoute,
  getPeersIdSystemRoute,
  getPeersRoute,
  getPluginsExplorerJsRoute,
  getPluginsIdRoute,
  getPluginsRoute,
  getQueriesIdAnswersIndexContentRoute,
  getQueriesIdAnswersIndexRoute,
  getQueriesIdAnswersRoute,
  getQueriesIdLevelRoute,
  getQueriesIdModalityRoute,
  getQueriesIdQueryRoute,
  getQueriesIdRoute,
  getQueriesRoute,
  getSeriesIdArchiveRoute,
  getSeriesIdAttachmentsNameCompressedDataRoute,
  getSeriesIdAttachmentsNameCompressedMd5Route,
  getSeriesIdAttachmentsNameCompressedSizeRoute,
  getSeriesIdAttachmentsNameDataRoute,
  getSeriesIdAttachmentsNameInfoRoute,
  getSeriesIdAttachmentsNameIsCompressedRoute,
  getSeriesIdAttachmentsNameMd5Route,
  getSeriesIdAttachmentsNameRoute,
  getSeriesIdAttachmentsNameSizeRoute,
  getSeriesIdAttachmentsRoute,
  getSeriesIdInstancesRoute,
  getSeriesIdInstancesTagsRoute,
  getSeriesIdMediaRoute,
  getSeriesIdMetadataNameRoute,
  getSeriesIdMetadataRoute,
  getSeriesIdModuleRoute,
  getSeriesIdNumpyRoute,
  getSeriesIdOrderedSlicesRoute,
  getSeriesIdPatientRoute,
  getSeriesIdRoute,
  getSeriesIdSharedTagsRoute,
  getSeriesIdStatisticsRoute,
  getSeriesIdStudyRoute,
  getSeriesRoute,
  getStatisticsRoute,
  getStorageCommitmentIdRoute,
  getStudiesIdArchiveRoute,
  getStudiesIdAttachmentsNameCompressedDataRoute,
  getStudiesIdAttachmentsNameCompressedMd5Route,
  getStudiesIdAttachmentsNameCompressedSizeRoute,
  getStudiesIdAttachmentsNameDataRoute,
  getStudiesIdAttachmentsNameInfoRoute,
  getStudiesIdAttachmentsNameIsCompressedRoute,
  getStudiesIdAttachmentsNameMd5Route,
  getStudiesIdAttachmentsNameRoute,
  getStudiesIdAttachmentsNameSizeRoute,
  getStudiesIdAttachmentsRoute,
  getStudiesIdInstancesRoute,
  getStudiesIdInstancesTagsRoute,
  getStudiesIdMediaRoute,
  getStudiesIdMetadataNameRoute,
  getStudiesIdMetadataRoute,
  getStudiesIdModulePatientRoute,
  getStudiesIdModuleRoute,
  getStudiesIdPatientRoute,
  getStudiesIdRoute,
  getStudiesIdSeriesRoute,
  getStudiesIdSharedTagsRoute,
  getStudiesIdStatisticsRoute,
  getStudiesRoute,
  getSystemRoute,
  getToolsAcceptedTransferSyntaxesRoute,
  getToolsDefaultEncodingRoute,
  getToolsDicomConformanceRoute,
  getToolsGenerateUidRoute,
  getToolsLogLevelDicomRoute,
  getToolsLogLevelGenericRoute,
  getToolsLogLevelHttpRoute,
  getToolsLogLevelJobsRoute,
  getToolsLogLevelLuaRoute,
  getToolsLogLevelPluginsRoute,
  getToolsLogLevelRoute,
  getToolsLogLevelSqliteRoute,
  getToolsMetricsPrometheusRoute,
  getToolsMetricsRoute,
  getToolsNowLocalRoute,
  getToolsNowRoute,
  getToolsRoute,
  getToolsUnknownSopClassAcceptedRoute,
  postInstancesIdAnonymizeRoute,
  postInstancesIdAttachmentsNameCompressRoute,
  postInstancesIdAttachmentsNameUncompressRoute,
  postInstancesIdAttachmentsNameVerifyMd5Route,
  postInstancesIdExportRoute,
  postInstancesIdModifyRoute,
  postInstancesIdReconstructRoute,
  postInstancesRoute,
  postJobsIdCancelRoute,
  postJobsIdPauseRoute,
  postJobsIdResubmitRoute,
  postJobsIdResumeRoute,
  postModalitiesIdEchoRoute,
  postModalitiesIdFindInstanceRoute,
  postModalitiesIdFindPatientRoute,
  postModalitiesIdFindRoute,
  postModalitiesIdFindSeriesRoute,
  postModalitiesIdFindStudyRoute,
  postModalitiesIdFindWorklistRoute,
  postModalitiesIdMoveRoute,
  postModalitiesIdQueryRoute,
  postModalitiesIdStorageCommitmentRoute,
  postModalitiesIdStoreRoute,
  postModalitiesIdStoreStraightRoute,
  postPatientsIdAnonymizeRoute,
  postPatientsIdArchiveRoute,
  postPatientsIdAttachmentsNameCompressRoute,
  postPatientsIdAttachmentsNameUncompressRoute,
  postPatientsIdAttachmentsNameVerifyMd5Route,
  postPatientsIdMediaRoute,
  postPatientsIdModifyRoute,
  postPatientsIdReconstructRoute,
  postPeersIdStoreRoute,
  postPeersIdStoreStraightRoute,
  postQueriesIdAnswersIndexQueryInstancesRoute,
  postQueriesIdAnswersIndexQuerySeriesRoute,
  postQueriesIdAnswersIndexQueryStudiesRoute,
  postQueriesIdAnswersIndexRetrieveRoute,
  postQueriesIdRetrieveRoute,
  postSeriesIdAnonymizeRoute,
  postSeriesIdArchiveRoute,
  postSeriesIdAttachmentsNameCompressRoute,
  postSeriesIdAttachmentsNameUncompressRoute,
  postSeriesIdAttachmentsNameVerifyMd5Route,
  postSeriesIdMediaRoute,
  postSeriesIdModifyRoute,
  postSeriesIdReconstructRoute,
  postStorageCommitmentIdRemoveRoute,
  postStudiesIdAnonymizeRoute,
  postStudiesIdArchiveRoute,
  postStudiesIdAttachmentsNameCompressRoute,
  postStudiesIdAttachmentsNameUncompressRoute,
  postStudiesIdAttachmentsNameVerifyMd5Route,
  postStudiesIdMediaRoute,
  postStudiesIdMergeRoute,
  postStudiesIdModifyRoute,
  postStudiesIdReconstructRoute,
  postStudiesIdSplitRoute,
  postToolsBulkAnonymizeRoute,
  postToolsBulkContentRoute,
  postToolsBulkDeleteRoute,
  postToolsBulkModifyRoute,
  postToolsCreateArchiveRoute,
  postToolsCreateDicomRoute,
  postToolsCreateMediaExtendedRoute,
  postToolsCreateMediaRoute,
  postToolsDicomEchoRoute,
  postToolsExecuteScriptRoute,
  postToolsFindRoute,
  postToolsInvalidateTagsRoute,
  postToolsLookupRoute,
  postToolsReconstructRoute,
  postToolsResetRoute,
  postToolsShutdownRoute,
  putInstancesIdAttachmentsNameRoute,
  putInstancesIdMetadataNameRoute,
  putModalitiesIdRoute,
  putPatientsIdAttachmentsNameRoute,
  putPatientsIdMetadataNameRoute,
  putPatientsIdProtectedRoute,
  putPeersIdRoute,
  putSeriesIdAttachmentsNameRoute,
  putSeriesIdMetadataNameRoute,
  putStudiesIdAttachmentsNameRoute,
  putStudiesIdMetadataNameRoute,
  putToolsAcceptedTransferSyntaxesRoute,
  putToolsDefaultEncodingRoute,
  putToolsLogLevelDicomRoute,
  putToolsLogLevelGenericRoute,
  putToolsLogLevelHttpRoute,
  putToolsLogLevelJobsRoute,
  putToolsLogLevelLuaRoute,
  putToolsLogLevelPluginsRoute,
  putToolsLogLevelRoute,
  putToolsLogLevelSqliteRoute,
  putToolsMetricsRoute,
  putToolsUnknownSopClassAcceptedRoute,
} from './routes'
import {
  deleteChangesRouteHandler,
  deleteExportsRouteHandler,
  deleteInstancesIdAttachmentsNameRouteHandler,
  deleteInstancesIdMetadataNameRouteHandler,
  deleteInstancesIdRouteHandler,
  deleteModalitiesIdRouteHandler,
  deletePatientsIdAttachmentsNameRouteHandler,
  deletePatientsIdMetadataNameRouteHandler,
  deletePatientsIdRouteHandler,
  deletePeersIdRouteHandler,
  deleteQueriesIdRouteHandler,
  deleteSeriesIdAttachmentsNameRouteHandler,
  deleteSeriesIdMetadataNameRouteHandler,
  deleteSeriesIdRouteHandler,
  deleteStudiesIdAttachmentsNameRouteHandler,
  deleteStudiesIdMetadataNameRouteHandler,
  deleteStudiesIdRouteHandler,
  getChangesRouteHandler,
  getExportsRouteHandler,
  getInstancesIdAttachmentsNameCompressedDataRouteHandler,
  getInstancesIdAttachmentsNameCompressedMd5RouteHandler,
  getInstancesIdAttachmentsNameCompressedSizeRouteHandler,
  getInstancesIdAttachmentsNameDataRouteHandler,
  getInstancesIdAttachmentsNameInfoRouteHandler,
  getInstancesIdAttachmentsNameIsCompressedRouteHandler,
  getInstancesIdAttachmentsNameMd5RouteHandler,
  getInstancesIdAttachmentsNameRouteHandler,
  getInstancesIdAttachmentsNameSizeRouteHandler,
  getInstancesIdAttachmentsRouteHandler,
  getInstancesIdContentRouteHandler,
  getInstancesIdFileRouteHandler,
  getInstancesIdFramesFrameImageInt16RouteHandler,
  getInstancesIdFramesFrameImageUint16RouteHandler,
  getInstancesIdFramesFrameImageUint8RouteHandler,
  getInstancesIdFramesFrameMatlabRouteHandler,
  getInstancesIdFramesFrameNumpyRouteHandler,
  getInstancesIdFramesFramePreviewRouteHandler,
  getInstancesIdFramesFrameRawGzRouteHandler,
  getInstancesIdFramesFrameRawRouteHandler,
  getInstancesIdFramesFrameRenderedRouteHandler,
  getInstancesIdFramesFrameRouteHandler,
  getInstancesIdFramesRouteHandler,
  getInstancesIdHeaderRouteHandler,
  getInstancesIdImageInt16RouteHandler,
  getInstancesIdImageUint16RouteHandler,
  getInstancesIdImageUint8RouteHandler,
  getInstancesIdMatlabRouteHandler,
  getInstancesIdMetadataNameRouteHandler,
  getInstancesIdMetadataRouteHandler,
  getInstancesIdModuleRouteHandler,
  getInstancesIdNumpyRouteHandler,
  getInstancesIdPatientRouteHandler,
  getInstancesIdPdfRouteHandler,
  getInstancesIdPreviewRouteHandler,
  getInstancesIdRenderedRouteHandler,
  getInstancesIdRouteHandler,
  getInstancesIdSeriesRouteHandler,
  getInstancesIdSimplifiedTagsRouteHandler,
  getInstancesIdStatisticsRouteHandler,
  getInstancesIdStudyRouteHandler,
  getInstancesIdTagsRouteHandler,
  getInstancesRouteHandler,
  getJobsIdKeyRouteHandler,
  getJobsIdRouteHandler,
  getJobsRouteHandler,
  getModalitiesIdConfigurationRouteHandler,
  getModalitiesIdRouteHandler,
  getModalitiesRouteHandler,
  getPatientsIdArchiveRouteHandler,
  getPatientsIdAttachmentsNameCompressedDataRouteHandler,
  getPatientsIdAttachmentsNameCompressedMd5RouteHandler,
  getPatientsIdAttachmentsNameCompressedSizeRouteHandler,
  getPatientsIdAttachmentsNameDataRouteHandler,
  getPatientsIdAttachmentsNameInfoRouteHandler,
  getPatientsIdAttachmentsNameIsCompressedRouteHandler,
  getPatientsIdAttachmentsNameMd5RouteHandler,
  getPatientsIdAttachmentsNameRouteHandler,
  getPatientsIdAttachmentsNameSizeRouteHandler,
  getPatientsIdAttachmentsRouteHandler,
  getPatientsIdInstancesRouteHandler,
  getPatientsIdInstancesTagsRouteHandler,
  getPatientsIdMediaRouteHandler,
  getPatientsIdMetadataNameRouteHandler,
  getPatientsIdMetadataRouteHandler,
  getPatientsIdModuleRouteHandler,
  getPatientsIdProtectedRouteHandler,
  getPatientsIdRouteHandler,
  getPatientsIdSeriesRouteHandler,
  getPatientsIdSharedTagsRouteHandler,
  getPatientsIdStatisticsRouteHandler,
  getPatientsIdStudiesRouteHandler,
  getPatientsRouteHandler,
  getPeersIdConfigurationRouteHandler,
  getPeersIdRouteHandler,
  getPeersIdSystemRouteHandler,
  getPeersRouteHandler,
  getPluginsExplorerJsRouteHandler,
  getPluginsIdRouteHandler,
  getPluginsRouteHandler,
  getQueriesIdAnswersIndexContentRouteHandler,
  getQueriesIdAnswersIndexRouteHandler,
  getQueriesIdAnswersRouteHandler,
  getQueriesIdLevelRouteHandler,
  getQueriesIdModalityRouteHandler,
  getQueriesIdQueryRouteHandler,
  getQueriesIdRouteHandler,
  getQueriesRouteHandler,
  getSeriesIdArchiveRouteHandler,
  getSeriesIdAttachmentsNameCompressedDataRouteHandler,
  getSeriesIdAttachmentsNameCompressedMd5RouteHandler,
  getSeriesIdAttachmentsNameCompressedSizeRouteHandler,
  getSeriesIdAttachmentsNameDataRouteHandler,
  getSeriesIdAttachmentsNameInfoRouteHandler,
  getSeriesIdAttachmentsNameIsCompressedRouteHandler,
  getSeriesIdAttachmentsNameMd5RouteHandler,
  getSeriesIdAttachmentsNameRouteHandler,
  getSeriesIdAttachmentsNameSizeRouteHandler,
  getSeriesIdAttachmentsRouteHandler,
  getSeriesIdInstancesRouteHandler,
  getSeriesIdInstancesTagsRouteHandler,
  getSeriesIdMediaRouteHandler,
  getSeriesIdMetadataNameRouteHandler,
  getSeriesIdMetadataRouteHandler,
  getSeriesIdModuleRouteHandler,
  getSeriesIdNumpyRouteHandler,
  getSeriesIdOrderedSlicesRouteHandler,
  getSeriesIdPatientRouteHandler,
  getSeriesIdRouteHandler,
  getSeriesIdSharedTagsRouteHandler,
  getSeriesIdStatisticsRouteHandler,
  getSeriesIdStudyRouteHandler,
  getSeriesRouteHandler,
  getStatisticsRouteHandler,
  getStorageCommitmentIdRouteHandler,
  getStudiesIdArchiveRouteHandler,
  getStudiesIdAttachmentsNameCompressedDataRouteHandler,
  getStudiesIdAttachmentsNameCompressedMd5RouteHandler,
  getStudiesIdAttachmentsNameCompressedSizeRouteHandler,
  getStudiesIdAttachmentsNameDataRouteHandler,
  getStudiesIdAttachmentsNameInfoRouteHandler,
  getStudiesIdAttachmentsNameIsCompressedRouteHandler,
  getStudiesIdAttachmentsNameMd5RouteHandler,
  getStudiesIdAttachmentsNameRouteHandler,
  getStudiesIdAttachmentsNameSizeRouteHandler,
  getStudiesIdAttachmentsRouteHandler,
  getStudiesIdInstancesRouteHandler,
  getStudiesIdInstancesTagsRouteHandler,
  getStudiesIdMediaRouteHandler,
  getStudiesIdMetadataNameRouteHandler,
  getStudiesIdMetadataRouteHandler,
  getStudiesIdModulePatientRouteHandler,
  getStudiesIdModuleRouteHandler,
  getStudiesIdPatientRouteHandler,
  getStudiesIdRouteHandler,
  getStudiesIdSeriesRouteHandler,
  getStudiesIdSharedTagsRouteHandler,
  getStudiesIdStatisticsRouteHandler,
  getStudiesRouteHandler,
  getSystemRouteHandler,
  getToolsAcceptedTransferSyntaxesRouteHandler,
  getToolsDefaultEncodingRouteHandler,
  getToolsDicomConformanceRouteHandler,
  getToolsGenerateUidRouteHandler,
  getToolsLogLevelDicomRouteHandler,
  getToolsLogLevelGenericRouteHandler,
  getToolsLogLevelHttpRouteHandler,
  getToolsLogLevelJobsRouteHandler,
  getToolsLogLevelLuaRouteHandler,
  getToolsLogLevelPluginsRouteHandler,
  getToolsLogLevelRouteHandler,
  getToolsLogLevelSqliteRouteHandler,
  getToolsMetricsPrometheusRouteHandler,
  getToolsMetricsRouteHandler,
  getToolsNowLocalRouteHandler,
  getToolsNowRouteHandler,
  getToolsRouteHandler,
  getToolsUnknownSopClassAcceptedRouteHandler,
  postInstancesIdAnonymizeRouteHandler,
  postInstancesIdAttachmentsNameCompressRouteHandler,
  postInstancesIdAttachmentsNameUncompressRouteHandler,
  postInstancesIdAttachmentsNameVerifyMd5RouteHandler,
  postInstancesIdExportRouteHandler,
  postInstancesIdModifyRouteHandler,
  postInstancesIdReconstructRouteHandler,
  postInstancesRouteHandler,
  postJobsIdCancelRouteHandler,
  postJobsIdPauseRouteHandler,
  postJobsIdResubmitRouteHandler,
  postJobsIdResumeRouteHandler,
  postModalitiesIdEchoRouteHandler,
  postModalitiesIdFindInstanceRouteHandler,
  postModalitiesIdFindPatientRouteHandler,
  postModalitiesIdFindRouteHandler,
  postModalitiesIdFindSeriesRouteHandler,
  postModalitiesIdFindStudyRouteHandler,
  postModalitiesIdFindWorklistRouteHandler,
  postModalitiesIdMoveRouteHandler,
  postModalitiesIdQueryRouteHandler,
  postModalitiesIdStorageCommitmentRouteHandler,
  postModalitiesIdStoreRouteHandler,
  postModalitiesIdStoreStraightRouteHandler,
  postPatientsIdAnonymizeRouteHandler,
  postPatientsIdArchiveRouteHandler,
  postPatientsIdAttachmentsNameCompressRouteHandler,
  postPatientsIdAttachmentsNameUncompressRouteHandler,
  postPatientsIdAttachmentsNameVerifyMd5RouteHandler,
  postPatientsIdMediaRouteHandler,
  postPatientsIdModifyRouteHandler,
  postPatientsIdReconstructRouteHandler,
  postPeersIdStoreRouteHandler,
  postPeersIdStoreStraightRouteHandler,
  postQueriesIdAnswersIndexQueryInstancesRouteHandler,
  postQueriesIdAnswersIndexQuerySeriesRouteHandler,
  postQueriesIdAnswersIndexQueryStudiesRouteHandler,
  postQueriesIdAnswersIndexRetrieveRouteHandler,
  postQueriesIdRetrieveRouteHandler,
  postSeriesIdAnonymizeRouteHandler,
  postSeriesIdArchiveRouteHandler,
  postSeriesIdAttachmentsNameCompressRouteHandler,
  postSeriesIdAttachmentsNameUncompressRouteHandler,
  postSeriesIdAttachmentsNameVerifyMd5RouteHandler,
  postSeriesIdMediaRouteHandler,
  postSeriesIdModifyRouteHandler,
  postSeriesIdReconstructRouteHandler,
  postStorageCommitmentIdRemoveRouteHandler,
  postStudiesIdAnonymizeRouteHandler,
  postStudiesIdArchiveRouteHandler,
  postStudiesIdAttachmentsNameCompressRouteHandler,
  postStudiesIdAttachmentsNameUncompressRouteHandler,
  postStudiesIdAttachmentsNameVerifyMd5RouteHandler,
  postStudiesIdMediaRouteHandler,
  postStudiesIdMergeRouteHandler,
  postStudiesIdModifyRouteHandler,
  postStudiesIdReconstructRouteHandler,
  postStudiesIdSplitRouteHandler,
  postToolsBulkAnonymizeRouteHandler,
  postToolsBulkContentRouteHandler,
  postToolsBulkDeleteRouteHandler,
  postToolsBulkModifyRouteHandler,
  postToolsCreateArchiveRouteHandler,
  postToolsCreateDicomRouteHandler,
  postToolsCreateMediaExtendedRouteHandler,
  postToolsCreateMediaRouteHandler,
  postToolsDicomEchoRouteHandler,
  postToolsExecuteScriptRouteHandler,
  postToolsFindRouteHandler,
  postToolsInvalidateTagsRouteHandler,
  postToolsLookupRouteHandler,
  postToolsReconstructRouteHandler,
  postToolsResetRouteHandler,
  postToolsShutdownRouteHandler,
  putInstancesIdAttachmentsNameRouteHandler,
  putInstancesIdMetadataNameRouteHandler,
  putModalitiesIdRouteHandler,
  putPatientsIdAttachmentsNameRouteHandler,
  putPatientsIdMetadataNameRouteHandler,
  putPatientsIdProtectedRouteHandler,
  putPeersIdRouteHandler,
  putSeriesIdAttachmentsNameRouteHandler,
  putSeriesIdMetadataNameRouteHandler,
  putStudiesIdAttachmentsNameRouteHandler,
  putStudiesIdMetadataNameRouteHandler,
  putToolsAcceptedTransferSyntaxesRouteHandler,
  putToolsDefaultEncodingRouteHandler,
  putToolsLogLevelDicomRouteHandler,
  putToolsLogLevelGenericRouteHandler,
  putToolsLogLevelHttpRouteHandler,
  putToolsLogLevelJobsRouteHandler,
  putToolsLogLevelLuaRouteHandler,
  putToolsLogLevelPluginsRouteHandler,
  putToolsLogLevelRouteHandler,
  putToolsLogLevelSqliteRouteHandler,
  putToolsMetricsRouteHandler,
  putToolsUnknownSopClassAcceptedRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteChangesRoute, deleteChangesRouteHandler)
  .openapi(getChangesRoute, getChangesRouteHandler)
  .openapi(deleteExportsRoute, deleteExportsRouteHandler)
  .openapi(getExportsRoute, getExportsRouteHandler)
  .openapi(getInstancesRoute, getInstancesRouteHandler)
  .openapi(postInstancesRoute, postInstancesRouteHandler)
  .openapi(deleteInstancesIdRoute, deleteInstancesIdRouteHandler)
  .openapi(getInstancesIdRoute, getInstancesIdRouteHandler)
  .openapi(postInstancesIdAnonymizeRoute, postInstancesIdAnonymizeRouteHandler)
  .openapi(getInstancesIdAttachmentsRoute, getInstancesIdAttachmentsRouteHandler)
  .openapi(deleteInstancesIdAttachmentsNameRoute, deleteInstancesIdAttachmentsNameRouteHandler)
  .openapi(getInstancesIdAttachmentsNameRoute, getInstancesIdAttachmentsNameRouteHandler)
  .openapi(putInstancesIdAttachmentsNameRoute, putInstancesIdAttachmentsNameRouteHandler)
  .openapi(
    postInstancesIdAttachmentsNameCompressRoute,
    postInstancesIdAttachmentsNameCompressRouteHandler,
  )
  .openapi(
    getInstancesIdAttachmentsNameCompressedDataRoute,
    getInstancesIdAttachmentsNameCompressedDataRouteHandler,
  )
  .openapi(
    getInstancesIdAttachmentsNameCompressedMd5Route,
    getInstancesIdAttachmentsNameCompressedMd5RouteHandler,
  )
  .openapi(
    getInstancesIdAttachmentsNameCompressedSizeRoute,
    getInstancesIdAttachmentsNameCompressedSizeRouteHandler,
  )
  .openapi(getInstancesIdAttachmentsNameDataRoute, getInstancesIdAttachmentsNameDataRouteHandler)
  .openapi(getInstancesIdAttachmentsNameInfoRoute, getInstancesIdAttachmentsNameInfoRouteHandler)
  .openapi(
    getInstancesIdAttachmentsNameIsCompressedRoute,
    getInstancesIdAttachmentsNameIsCompressedRouteHandler,
  )
  .openapi(getInstancesIdAttachmentsNameMd5Route, getInstancesIdAttachmentsNameMd5RouteHandler)
  .openapi(getInstancesIdAttachmentsNameSizeRoute, getInstancesIdAttachmentsNameSizeRouteHandler)
  .openapi(
    postInstancesIdAttachmentsNameUncompressRoute,
    postInstancesIdAttachmentsNameUncompressRouteHandler,
  )
  .openapi(
    postInstancesIdAttachmentsNameVerifyMd5Route,
    postInstancesIdAttachmentsNameVerifyMd5RouteHandler,
  )
  .openapi(getInstancesIdContentRoute, getInstancesIdContentRouteHandler)
  .openapi(postInstancesIdExportRoute, postInstancesIdExportRouteHandler)
  .openapi(getInstancesIdFileRoute, getInstancesIdFileRouteHandler)
  .openapi(getInstancesIdFramesRoute, getInstancesIdFramesRouteHandler)
  .openapi(getInstancesIdFramesFrameRoute, getInstancesIdFramesFrameRouteHandler)
  .openapi(
    getInstancesIdFramesFrameImageInt16Route,
    getInstancesIdFramesFrameImageInt16RouteHandler,
  )
  .openapi(
    getInstancesIdFramesFrameImageUint16Route,
    getInstancesIdFramesFrameImageUint16RouteHandler,
  )
  .openapi(
    getInstancesIdFramesFrameImageUint8Route,
    getInstancesIdFramesFrameImageUint8RouteHandler,
  )
  .openapi(getInstancesIdFramesFrameMatlabRoute, getInstancesIdFramesFrameMatlabRouteHandler)
  .openapi(getInstancesIdFramesFrameNumpyRoute, getInstancesIdFramesFrameNumpyRouteHandler)
  .openapi(getInstancesIdFramesFramePreviewRoute, getInstancesIdFramesFramePreviewRouteHandler)
  .openapi(getInstancesIdFramesFrameRawRoute, getInstancesIdFramesFrameRawRouteHandler)
  .openapi(getInstancesIdFramesFrameRawGzRoute, getInstancesIdFramesFrameRawGzRouteHandler)
  .openapi(getInstancesIdFramesFrameRenderedRoute, getInstancesIdFramesFrameRenderedRouteHandler)
  .openapi(getInstancesIdHeaderRoute, getInstancesIdHeaderRouteHandler)
  .openapi(getInstancesIdImageInt16Route, getInstancesIdImageInt16RouteHandler)
  .openapi(getInstancesIdImageUint16Route, getInstancesIdImageUint16RouteHandler)
  .openapi(getInstancesIdImageUint8Route, getInstancesIdImageUint8RouteHandler)
  .openapi(getInstancesIdMatlabRoute, getInstancesIdMatlabRouteHandler)
  .openapi(getInstancesIdMetadataRoute, getInstancesIdMetadataRouteHandler)
  .openapi(deleteInstancesIdMetadataNameRoute, deleteInstancesIdMetadataNameRouteHandler)
  .openapi(getInstancesIdMetadataNameRoute, getInstancesIdMetadataNameRouteHandler)
  .openapi(putInstancesIdMetadataNameRoute, putInstancesIdMetadataNameRouteHandler)
  .openapi(postInstancesIdModifyRoute, postInstancesIdModifyRouteHandler)
  .openapi(getInstancesIdModuleRoute, getInstancesIdModuleRouteHandler)
  .openapi(getInstancesIdNumpyRoute, getInstancesIdNumpyRouteHandler)
  .openapi(getInstancesIdPatientRoute, getInstancesIdPatientRouteHandler)
  .openapi(getInstancesIdPdfRoute, getInstancesIdPdfRouteHandler)
  .openapi(getInstancesIdPreviewRoute, getInstancesIdPreviewRouteHandler)
  .openapi(postInstancesIdReconstructRoute, postInstancesIdReconstructRouteHandler)
  .openapi(getInstancesIdRenderedRoute, getInstancesIdRenderedRouteHandler)
  .openapi(getInstancesIdSeriesRoute, getInstancesIdSeriesRouteHandler)
  .openapi(getInstancesIdSimplifiedTagsRoute, getInstancesIdSimplifiedTagsRouteHandler)
  .openapi(getInstancesIdStatisticsRoute, getInstancesIdStatisticsRouteHandler)
  .openapi(getInstancesIdStudyRoute, getInstancesIdStudyRouteHandler)
  .openapi(getInstancesIdTagsRoute, getInstancesIdTagsRouteHandler)
  .openapi(getJobsRoute, getJobsRouteHandler)
  .openapi(getJobsIdRoute, getJobsIdRouteHandler)
  .openapi(postJobsIdCancelRoute, postJobsIdCancelRouteHandler)
  .openapi(postJobsIdPauseRoute, postJobsIdPauseRouteHandler)
  .openapi(postJobsIdResubmitRoute, postJobsIdResubmitRouteHandler)
  .openapi(postJobsIdResumeRoute, postJobsIdResumeRouteHandler)
  .openapi(getJobsIdKeyRoute, getJobsIdKeyRouteHandler)
  .openapi(getModalitiesRoute, getModalitiesRouteHandler)
  .openapi(deleteModalitiesIdRoute, deleteModalitiesIdRouteHandler)
  .openapi(getModalitiesIdRoute, getModalitiesIdRouteHandler)
  .openapi(putModalitiesIdRoute, putModalitiesIdRouteHandler)
  .openapi(getModalitiesIdConfigurationRoute, getModalitiesIdConfigurationRouteHandler)
  .openapi(postModalitiesIdEchoRoute, postModalitiesIdEchoRouteHandler)
  .openapi(postModalitiesIdFindRoute, postModalitiesIdFindRouteHandler)
  .openapi(postModalitiesIdFindInstanceRoute, postModalitiesIdFindInstanceRouteHandler)
  .openapi(postModalitiesIdFindPatientRoute, postModalitiesIdFindPatientRouteHandler)
  .openapi(postModalitiesIdFindSeriesRoute, postModalitiesIdFindSeriesRouteHandler)
  .openapi(postModalitiesIdFindStudyRoute, postModalitiesIdFindStudyRouteHandler)
  .openapi(postModalitiesIdFindWorklistRoute, postModalitiesIdFindWorklistRouteHandler)
  .openapi(postModalitiesIdMoveRoute, postModalitiesIdMoveRouteHandler)
  .openapi(postModalitiesIdQueryRoute, postModalitiesIdQueryRouteHandler)
  .openapi(postModalitiesIdStorageCommitmentRoute, postModalitiesIdStorageCommitmentRouteHandler)
  .openapi(postModalitiesIdStoreRoute, postModalitiesIdStoreRouteHandler)
  .openapi(postModalitiesIdStoreStraightRoute, postModalitiesIdStoreStraightRouteHandler)
  .openapi(getPatientsRoute, getPatientsRouteHandler)
  .openapi(deletePatientsIdRoute, deletePatientsIdRouteHandler)
  .openapi(getPatientsIdRoute, getPatientsIdRouteHandler)
  .openapi(postPatientsIdAnonymizeRoute, postPatientsIdAnonymizeRouteHandler)
  .openapi(getPatientsIdArchiveRoute, getPatientsIdArchiveRouteHandler)
  .openapi(postPatientsIdArchiveRoute, postPatientsIdArchiveRouteHandler)
  .openapi(getPatientsIdAttachmentsRoute, getPatientsIdAttachmentsRouteHandler)
  .openapi(deletePatientsIdAttachmentsNameRoute, deletePatientsIdAttachmentsNameRouteHandler)
  .openapi(getPatientsIdAttachmentsNameRoute, getPatientsIdAttachmentsNameRouteHandler)
  .openapi(putPatientsIdAttachmentsNameRoute, putPatientsIdAttachmentsNameRouteHandler)
  .openapi(
    postPatientsIdAttachmentsNameCompressRoute,
    postPatientsIdAttachmentsNameCompressRouteHandler,
  )
  .openapi(
    getPatientsIdAttachmentsNameCompressedDataRoute,
    getPatientsIdAttachmentsNameCompressedDataRouteHandler,
  )
  .openapi(
    getPatientsIdAttachmentsNameCompressedMd5Route,
    getPatientsIdAttachmentsNameCompressedMd5RouteHandler,
  )
  .openapi(
    getPatientsIdAttachmentsNameCompressedSizeRoute,
    getPatientsIdAttachmentsNameCompressedSizeRouteHandler,
  )
  .openapi(getPatientsIdAttachmentsNameDataRoute, getPatientsIdAttachmentsNameDataRouteHandler)
  .openapi(getPatientsIdAttachmentsNameInfoRoute, getPatientsIdAttachmentsNameInfoRouteHandler)
  .openapi(
    getPatientsIdAttachmentsNameIsCompressedRoute,
    getPatientsIdAttachmentsNameIsCompressedRouteHandler,
  )
  .openapi(getPatientsIdAttachmentsNameMd5Route, getPatientsIdAttachmentsNameMd5RouteHandler)
  .openapi(getPatientsIdAttachmentsNameSizeRoute, getPatientsIdAttachmentsNameSizeRouteHandler)
  .openapi(
    postPatientsIdAttachmentsNameUncompressRoute,
    postPatientsIdAttachmentsNameUncompressRouteHandler,
  )
  .openapi(
    postPatientsIdAttachmentsNameVerifyMd5Route,
    postPatientsIdAttachmentsNameVerifyMd5RouteHandler,
  )
  .openapi(getPatientsIdInstancesRoute, getPatientsIdInstancesRouteHandler)
  .openapi(getPatientsIdInstancesTagsRoute, getPatientsIdInstancesTagsRouteHandler)
  .openapi(getPatientsIdMediaRoute, getPatientsIdMediaRouteHandler)
  .openapi(postPatientsIdMediaRoute, postPatientsIdMediaRouteHandler)
  .openapi(getPatientsIdMetadataRoute, getPatientsIdMetadataRouteHandler)
  .openapi(deletePatientsIdMetadataNameRoute, deletePatientsIdMetadataNameRouteHandler)
  .openapi(getPatientsIdMetadataNameRoute, getPatientsIdMetadataNameRouteHandler)
  .openapi(putPatientsIdMetadataNameRoute, putPatientsIdMetadataNameRouteHandler)
  .openapi(postPatientsIdModifyRoute, postPatientsIdModifyRouteHandler)
  .openapi(getPatientsIdModuleRoute, getPatientsIdModuleRouteHandler)
  .openapi(getPatientsIdProtectedRoute, getPatientsIdProtectedRouteHandler)
  .openapi(putPatientsIdProtectedRoute, putPatientsIdProtectedRouteHandler)
  .openapi(postPatientsIdReconstructRoute, postPatientsIdReconstructRouteHandler)
  .openapi(getPatientsIdSeriesRoute, getPatientsIdSeriesRouteHandler)
  .openapi(getPatientsIdSharedTagsRoute, getPatientsIdSharedTagsRouteHandler)
  .openapi(getPatientsIdStatisticsRoute, getPatientsIdStatisticsRouteHandler)
  .openapi(getPatientsIdStudiesRoute, getPatientsIdStudiesRouteHandler)
  .openapi(getPeersRoute, getPeersRouteHandler)
  .openapi(deletePeersIdRoute, deletePeersIdRouteHandler)
  .openapi(getPeersIdRoute, getPeersIdRouteHandler)
  .openapi(putPeersIdRoute, putPeersIdRouteHandler)
  .openapi(getPeersIdConfigurationRoute, getPeersIdConfigurationRouteHandler)
  .openapi(postPeersIdStoreRoute, postPeersIdStoreRouteHandler)
  .openapi(postPeersIdStoreStraightRoute, postPeersIdStoreStraightRouteHandler)
  .openapi(getPeersIdSystemRoute, getPeersIdSystemRouteHandler)
  .openapi(getPluginsRoute, getPluginsRouteHandler)
  .openapi(getPluginsExplorerJsRoute, getPluginsExplorerJsRouteHandler)
  .openapi(getPluginsIdRoute, getPluginsIdRouteHandler)
  .openapi(getQueriesRoute, getQueriesRouteHandler)
  .openapi(deleteQueriesIdRoute, deleteQueriesIdRouteHandler)
  .openapi(getQueriesIdRoute, getQueriesIdRouteHandler)
  .openapi(getQueriesIdAnswersRoute, getQueriesIdAnswersRouteHandler)
  .openapi(getQueriesIdAnswersIndexRoute, getQueriesIdAnswersIndexRouteHandler)
  .openapi(getQueriesIdAnswersIndexContentRoute, getQueriesIdAnswersIndexContentRouteHandler)
  .openapi(
    postQueriesIdAnswersIndexQueryInstancesRoute,
    postQueriesIdAnswersIndexQueryInstancesRouteHandler,
  )
  .openapi(
    postQueriesIdAnswersIndexQuerySeriesRoute,
    postQueriesIdAnswersIndexQuerySeriesRouteHandler,
  )
  .openapi(
    postQueriesIdAnswersIndexQueryStudiesRoute,
    postQueriesIdAnswersIndexQueryStudiesRouteHandler,
  )
  .openapi(postQueriesIdAnswersIndexRetrieveRoute, postQueriesIdAnswersIndexRetrieveRouteHandler)
  .openapi(getQueriesIdLevelRoute, getQueriesIdLevelRouteHandler)
  .openapi(getQueriesIdModalityRoute, getQueriesIdModalityRouteHandler)
  .openapi(getQueriesIdQueryRoute, getQueriesIdQueryRouteHandler)
  .openapi(postQueriesIdRetrieveRoute, postQueriesIdRetrieveRouteHandler)
  .openapi(getSeriesRoute, getSeriesRouteHandler)
  .openapi(deleteSeriesIdRoute, deleteSeriesIdRouteHandler)
  .openapi(getSeriesIdRoute, getSeriesIdRouteHandler)
  .openapi(postSeriesIdAnonymizeRoute, postSeriesIdAnonymizeRouteHandler)
  .openapi(getSeriesIdArchiveRoute, getSeriesIdArchiveRouteHandler)
  .openapi(postSeriesIdArchiveRoute, postSeriesIdArchiveRouteHandler)
  .openapi(getSeriesIdAttachmentsRoute, getSeriesIdAttachmentsRouteHandler)
  .openapi(deleteSeriesIdAttachmentsNameRoute, deleteSeriesIdAttachmentsNameRouteHandler)
  .openapi(getSeriesIdAttachmentsNameRoute, getSeriesIdAttachmentsNameRouteHandler)
  .openapi(putSeriesIdAttachmentsNameRoute, putSeriesIdAttachmentsNameRouteHandler)
  .openapi(
    postSeriesIdAttachmentsNameCompressRoute,
    postSeriesIdAttachmentsNameCompressRouteHandler,
  )
  .openapi(
    getSeriesIdAttachmentsNameCompressedDataRoute,
    getSeriesIdAttachmentsNameCompressedDataRouteHandler,
  )
  .openapi(
    getSeriesIdAttachmentsNameCompressedMd5Route,
    getSeriesIdAttachmentsNameCompressedMd5RouteHandler,
  )
  .openapi(
    getSeriesIdAttachmentsNameCompressedSizeRoute,
    getSeriesIdAttachmentsNameCompressedSizeRouteHandler,
  )
  .openapi(getSeriesIdAttachmentsNameDataRoute, getSeriesIdAttachmentsNameDataRouteHandler)
  .openapi(getSeriesIdAttachmentsNameInfoRoute, getSeriesIdAttachmentsNameInfoRouteHandler)
  .openapi(
    getSeriesIdAttachmentsNameIsCompressedRoute,
    getSeriesIdAttachmentsNameIsCompressedRouteHandler,
  )
  .openapi(getSeriesIdAttachmentsNameMd5Route, getSeriesIdAttachmentsNameMd5RouteHandler)
  .openapi(getSeriesIdAttachmentsNameSizeRoute, getSeriesIdAttachmentsNameSizeRouteHandler)
  .openapi(
    postSeriesIdAttachmentsNameUncompressRoute,
    postSeriesIdAttachmentsNameUncompressRouteHandler,
  )
  .openapi(
    postSeriesIdAttachmentsNameVerifyMd5Route,
    postSeriesIdAttachmentsNameVerifyMd5RouteHandler,
  )
  .openapi(getSeriesIdInstancesRoute, getSeriesIdInstancesRouteHandler)
  .openapi(getSeriesIdInstancesTagsRoute, getSeriesIdInstancesTagsRouteHandler)
  .openapi(getSeriesIdMediaRoute, getSeriesIdMediaRouteHandler)
  .openapi(postSeriesIdMediaRoute, postSeriesIdMediaRouteHandler)
  .openapi(getSeriesIdMetadataRoute, getSeriesIdMetadataRouteHandler)
  .openapi(deleteSeriesIdMetadataNameRoute, deleteSeriesIdMetadataNameRouteHandler)
  .openapi(getSeriesIdMetadataNameRoute, getSeriesIdMetadataNameRouteHandler)
  .openapi(putSeriesIdMetadataNameRoute, putSeriesIdMetadataNameRouteHandler)
  .openapi(postSeriesIdModifyRoute, postSeriesIdModifyRouteHandler)
  .openapi(getSeriesIdModuleRoute, getSeriesIdModuleRouteHandler)
  .openapi(getSeriesIdNumpyRoute, getSeriesIdNumpyRouteHandler)
  .openapi(getSeriesIdOrderedSlicesRoute, getSeriesIdOrderedSlicesRouteHandler)
  .openapi(getSeriesIdPatientRoute, getSeriesIdPatientRouteHandler)
  .openapi(postSeriesIdReconstructRoute, postSeriesIdReconstructRouteHandler)
  .openapi(getSeriesIdSharedTagsRoute, getSeriesIdSharedTagsRouteHandler)
  .openapi(getSeriesIdStatisticsRoute, getSeriesIdStatisticsRouteHandler)
  .openapi(getSeriesIdStudyRoute, getSeriesIdStudyRouteHandler)
  .openapi(getStatisticsRoute, getStatisticsRouteHandler)
  .openapi(getStorageCommitmentIdRoute, getStorageCommitmentIdRouteHandler)
  .openapi(postStorageCommitmentIdRemoveRoute, postStorageCommitmentIdRemoveRouteHandler)
  .openapi(getStudiesRoute, getStudiesRouteHandler)
  .openapi(deleteStudiesIdRoute, deleteStudiesIdRouteHandler)
  .openapi(getStudiesIdRoute, getStudiesIdRouteHandler)
  .openapi(postStudiesIdAnonymizeRoute, postStudiesIdAnonymizeRouteHandler)
  .openapi(getStudiesIdArchiveRoute, getStudiesIdArchiveRouteHandler)
  .openapi(postStudiesIdArchiveRoute, postStudiesIdArchiveRouteHandler)
  .openapi(getStudiesIdAttachmentsRoute, getStudiesIdAttachmentsRouteHandler)
  .openapi(deleteStudiesIdAttachmentsNameRoute, deleteStudiesIdAttachmentsNameRouteHandler)
  .openapi(getStudiesIdAttachmentsNameRoute, getStudiesIdAttachmentsNameRouteHandler)
  .openapi(putStudiesIdAttachmentsNameRoute, putStudiesIdAttachmentsNameRouteHandler)
  .openapi(
    postStudiesIdAttachmentsNameCompressRoute,
    postStudiesIdAttachmentsNameCompressRouteHandler,
  )
  .openapi(
    getStudiesIdAttachmentsNameCompressedDataRoute,
    getStudiesIdAttachmentsNameCompressedDataRouteHandler,
  )
  .openapi(
    getStudiesIdAttachmentsNameCompressedMd5Route,
    getStudiesIdAttachmentsNameCompressedMd5RouteHandler,
  )
  .openapi(
    getStudiesIdAttachmentsNameCompressedSizeRoute,
    getStudiesIdAttachmentsNameCompressedSizeRouteHandler,
  )
  .openapi(getStudiesIdAttachmentsNameDataRoute, getStudiesIdAttachmentsNameDataRouteHandler)
  .openapi(getStudiesIdAttachmentsNameInfoRoute, getStudiesIdAttachmentsNameInfoRouteHandler)
  .openapi(
    getStudiesIdAttachmentsNameIsCompressedRoute,
    getStudiesIdAttachmentsNameIsCompressedRouteHandler,
  )
  .openapi(getStudiesIdAttachmentsNameMd5Route, getStudiesIdAttachmentsNameMd5RouteHandler)
  .openapi(getStudiesIdAttachmentsNameSizeRoute, getStudiesIdAttachmentsNameSizeRouteHandler)
  .openapi(
    postStudiesIdAttachmentsNameUncompressRoute,
    postStudiesIdAttachmentsNameUncompressRouteHandler,
  )
  .openapi(
    postStudiesIdAttachmentsNameVerifyMd5Route,
    postStudiesIdAttachmentsNameVerifyMd5RouteHandler,
  )
  .openapi(getStudiesIdInstancesRoute, getStudiesIdInstancesRouteHandler)
  .openapi(getStudiesIdInstancesTagsRoute, getStudiesIdInstancesTagsRouteHandler)
  .openapi(getStudiesIdMediaRoute, getStudiesIdMediaRouteHandler)
  .openapi(postStudiesIdMediaRoute, postStudiesIdMediaRouteHandler)
  .openapi(postStudiesIdMergeRoute, postStudiesIdMergeRouteHandler)
  .openapi(getStudiesIdMetadataRoute, getStudiesIdMetadataRouteHandler)
  .openapi(deleteStudiesIdMetadataNameRoute, deleteStudiesIdMetadataNameRouteHandler)
  .openapi(getStudiesIdMetadataNameRoute, getStudiesIdMetadataNameRouteHandler)
  .openapi(putStudiesIdMetadataNameRoute, putStudiesIdMetadataNameRouteHandler)
  .openapi(postStudiesIdModifyRoute, postStudiesIdModifyRouteHandler)
  .openapi(getStudiesIdModuleRoute, getStudiesIdModuleRouteHandler)
  .openapi(getStudiesIdModulePatientRoute, getStudiesIdModulePatientRouteHandler)
  .openapi(getStudiesIdPatientRoute, getStudiesIdPatientRouteHandler)
  .openapi(postStudiesIdReconstructRoute, postStudiesIdReconstructRouteHandler)
  .openapi(getStudiesIdSeriesRoute, getStudiesIdSeriesRouteHandler)
  .openapi(getStudiesIdSharedTagsRoute, getStudiesIdSharedTagsRouteHandler)
  .openapi(postStudiesIdSplitRoute, postStudiesIdSplitRouteHandler)
  .openapi(getStudiesIdStatisticsRoute, getStudiesIdStatisticsRouteHandler)
  .openapi(getSystemRoute, getSystemRouteHandler)
  .openapi(getToolsRoute, getToolsRouteHandler)
  .openapi(getToolsAcceptedTransferSyntaxesRoute, getToolsAcceptedTransferSyntaxesRouteHandler)
  .openapi(putToolsAcceptedTransferSyntaxesRoute, putToolsAcceptedTransferSyntaxesRouteHandler)
  .openapi(postToolsBulkAnonymizeRoute, postToolsBulkAnonymizeRouteHandler)
  .openapi(postToolsBulkContentRoute, postToolsBulkContentRouteHandler)
  .openapi(postToolsBulkDeleteRoute, postToolsBulkDeleteRouteHandler)
  .openapi(postToolsBulkModifyRoute, postToolsBulkModifyRouteHandler)
  .openapi(postToolsCreateArchiveRoute, postToolsCreateArchiveRouteHandler)
  .openapi(postToolsCreateDicomRoute, postToolsCreateDicomRouteHandler)
  .openapi(postToolsCreateMediaRoute, postToolsCreateMediaRouteHandler)
  .openapi(postToolsCreateMediaExtendedRoute, postToolsCreateMediaExtendedRouteHandler)
  .openapi(getToolsDefaultEncodingRoute, getToolsDefaultEncodingRouteHandler)
  .openapi(putToolsDefaultEncodingRoute, putToolsDefaultEncodingRouteHandler)
  .openapi(getToolsDicomConformanceRoute, getToolsDicomConformanceRouteHandler)
  .openapi(postToolsDicomEchoRoute, postToolsDicomEchoRouteHandler)
  .openapi(postToolsExecuteScriptRoute, postToolsExecuteScriptRouteHandler)
  .openapi(postToolsFindRoute, postToolsFindRouteHandler)
  .openapi(getToolsGenerateUidRoute, getToolsGenerateUidRouteHandler)
  .openapi(postToolsInvalidateTagsRoute, postToolsInvalidateTagsRouteHandler)
  .openapi(getToolsLogLevelRoute, getToolsLogLevelRouteHandler)
  .openapi(putToolsLogLevelRoute, putToolsLogLevelRouteHandler)
  .openapi(getToolsLogLevelDicomRoute, getToolsLogLevelDicomRouteHandler)
  .openapi(putToolsLogLevelDicomRoute, putToolsLogLevelDicomRouteHandler)
  .openapi(getToolsLogLevelGenericRoute, getToolsLogLevelGenericRouteHandler)
  .openapi(putToolsLogLevelGenericRoute, putToolsLogLevelGenericRouteHandler)
  .openapi(getToolsLogLevelHttpRoute, getToolsLogLevelHttpRouteHandler)
  .openapi(putToolsLogLevelHttpRoute, putToolsLogLevelHttpRouteHandler)
  .openapi(getToolsLogLevelJobsRoute, getToolsLogLevelJobsRouteHandler)
  .openapi(putToolsLogLevelJobsRoute, putToolsLogLevelJobsRouteHandler)
  .openapi(getToolsLogLevelLuaRoute, getToolsLogLevelLuaRouteHandler)
  .openapi(putToolsLogLevelLuaRoute, putToolsLogLevelLuaRouteHandler)
  .openapi(getToolsLogLevelPluginsRoute, getToolsLogLevelPluginsRouteHandler)
  .openapi(putToolsLogLevelPluginsRoute, putToolsLogLevelPluginsRouteHandler)
  .openapi(getToolsLogLevelSqliteRoute, getToolsLogLevelSqliteRouteHandler)
  .openapi(putToolsLogLevelSqliteRoute, putToolsLogLevelSqliteRouteHandler)
  .openapi(postToolsLookupRoute, postToolsLookupRouteHandler)
  .openapi(getToolsMetricsRoute, getToolsMetricsRouteHandler)
  .openapi(putToolsMetricsRoute, putToolsMetricsRouteHandler)
  .openapi(getToolsMetricsPrometheusRoute, getToolsMetricsPrometheusRouteHandler)
  .openapi(getToolsNowRoute, getToolsNowRouteHandler)
  .openapi(getToolsNowLocalRoute, getToolsNowLocalRouteHandler)
  .openapi(postToolsReconstructRoute, postToolsReconstructRouteHandler)
  .openapi(postToolsResetRoute, postToolsResetRouteHandler)
  .openapi(postToolsShutdownRoute, postToolsShutdownRouteHandler)
  .openapi(getToolsUnknownSopClassAcceptedRoute, getToolsUnknownSopClassAcceptedRouteHandler)
  .openapi(putToolsUnknownSopClassAcceptedRoute, putToolsUnknownSopClassAcceptedRouteHandler)

export default app
