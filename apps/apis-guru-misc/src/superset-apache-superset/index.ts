import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAnnotationLayerIndexRoute,
  deleteAnnotationLayerPkAnnotationAnnotationIdRoute,
  deleteAnnotationLayerPkAnnotationIndexRoute,
  deleteAnnotationLayerPkRoute,
  deleteChartIndexRoute,
  deleteChartPkRoute,
  deleteCssTemplateIndexRoute,
  deleteCssTemplatePkRoute,
  deleteDashboardIndexRoute,
  deleteDashboardPkRoute,
  deleteDatabasePkRoute,
  deleteDatasetIndexRoute,
  deleteDatasetPkColumnColumnIdRoute,
  deleteDatasetPkMetricMetricIdRoute,
  deleteDatasetPkRoute,
  deleteReportIndexRoute,
  deleteReportPkRoute,
  deleteSavedQueryIndexRoute,
  deleteSavedQueryPkRoute,
  getAnnotationLayerIndexRoute,
  getAnnotationLayerInfoRoute,
  getAnnotationLayerPkAnnotationAnnotationIdRoute,
  getAnnotationLayerPkAnnotationIndexRoute,
  getAnnotationLayerPkRoute,
  getAnnotationLayerRelatedColumnNameRoute,
  getAsyncEventIndexRoute,
  getChartDataCacheKeyRoute,
  getChartExportIndexRoute,
  getChartFavoriteStatusIndexRoute,
  getChartIndexRoute,
  getChartInfoRoute,
  getChartPkCacheScreenshotIndexRoute,
  getChartPkDataIndexRoute,
  getChartPkRoute,
  getChartPkScreenshotDigestIndexRoute,
  getChartPkThumbnailDigestIndexRoute,
  getChartRelatedColumnNameRoute,
  getCssTemplateIndexRoute,
  getCssTemplateInfoRoute,
  getCssTemplatePkRoute,
  getCssTemplateRelatedColumnNameRoute,
  getDashboardExportIndexRoute,
  getDashboardFavoriteStatusIndexRoute,
  getDashboardIdOrSlugChartsRoute,
  getDashboardIdOrSlugDatasetsRoute,
  getDashboardIdOrSlugRoute,
  getDashboardIndexRoute,
  getDashboardInfoRoute,
  getDashboardPkThumbnailDigestIndexRoute,
  getDashboardRelatedColumnNameRoute,
  getDatabaseAvailableIndexRoute,
  getDatabaseExportIndexRoute,
  getDatabaseIndexRoute,
  getDatabaseInfoRoute,
  getDatabasePkFunctionNamesIndexRoute,
  getDatabasePkRelatedObjectsIndexRoute,
  getDatabasePkRoute,
  getDatabasePkSchemasIndexRoute,
  getDatabasePkSelectStarTableNameIndexRoute,
  getDatabasePkSelectStarTableNameSchemaNameIndexRoute,
  getDatabasePkTableTableNameSchemaNameIndexRoute,
  getDatasetDistinctColumnNameRoute,
  getDatasetExportIndexRoute,
  getDatasetIndexRoute,
  getDatasetInfoRoute,
  getDatasetPkRelatedObjectsRoute,
  getDatasetPkRoute,
  getDatasetRelatedColumnNameRoute,
  getLogIndexRoute,
  getLogPkRoute,
  getMenuIndexRoute,
  getOpenapiVersionOpenapiRoute,
  getQueryDistinctColumnNameRoute,
  getQueryIndexRoute,
  getQueryPkRoute,
  getQueryRelatedColumnNameRoute,
  getReportIndexRoute,
  getReportInfoRoute,
  getReportPkLogIndexRoute,
  getReportPkLogLogIdRoute,
  getReportPkRoute,
  getReportRelatedColumnNameRoute,
  getSavedQueryDistinctColumnNameRoute,
  getSavedQueryExportIndexRoute,
  getSavedQueryIndexRoute,
  getSavedQueryInfoRoute,
  getSavedQueryPkRoute,
  getSavedQueryRelatedColumnNameRoute,
  getSecurityCsrfTokenIndexRoute,
  postAnnotationLayerIndexRoute,
  postAnnotationLayerPkAnnotationIndexRoute,
  postCachekeyInvalidateRoute,
  postChartDataRoute,
  postChartImportIndexRoute,
  postChartIndexRoute,
  postCssTemplateIndexRoute,
  postDashboardImportIndexRoute,
  postDashboardIndexRoute,
  postDatabaseImportIndexRoute,
  postDatabaseIndexRoute,
  postDatabaseTestConnectionRoute,
  postDatabaseValidateParametersRoute,
  postDatasetImportIndexRoute,
  postDatasetIndexRoute,
  postLogIndexRoute,
  postReportIndexRoute,
  postSavedQueryImportIndexRoute,
  postSavedQueryIndexRoute,
  postSecurityLoginRoute,
  postSecurityRefreshRoute,
  putAnnotationLayerPkAnnotationAnnotationIdRoute,
  putAnnotationLayerPkRoute,
  putChartPkRoute,
  putCssTemplatePkRoute,
  putDashboardPkRoute,
  putDatabasePkRoute,
  putDatasetPkRefreshRoute,
  putDatasetPkRoute,
  putReportPkRoute,
  putSavedQueryPkRoute,
} from './routes'
import {
  deleteAnnotationLayerIndexRouteHandler,
  deleteAnnotationLayerPkAnnotationAnnotationIdRouteHandler,
  deleteAnnotationLayerPkAnnotationIndexRouteHandler,
  deleteAnnotationLayerPkRouteHandler,
  deleteChartIndexRouteHandler,
  deleteChartPkRouteHandler,
  deleteCssTemplateIndexRouteHandler,
  deleteCssTemplatePkRouteHandler,
  deleteDashboardIndexRouteHandler,
  deleteDashboardPkRouteHandler,
  deleteDatabasePkRouteHandler,
  deleteDatasetIndexRouteHandler,
  deleteDatasetPkColumnColumnIdRouteHandler,
  deleteDatasetPkMetricMetricIdRouteHandler,
  deleteDatasetPkRouteHandler,
  deleteReportIndexRouteHandler,
  deleteReportPkRouteHandler,
  deleteSavedQueryIndexRouteHandler,
  deleteSavedQueryPkRouteHandler,
  getAnnotationLayerIndexRouteHandler,
  getAnnotationLayerInfoRouteHandler,
  getAnnotationLayerPkAnnotationAnnotationIdRouteHandler,
  getAnnotationLayerPkAnnotationIndexRouteHandler,
  getAnnotationLayerPkRouteHandler,
  getAnnotationLayerRelatedColumnNameRouteHandler,
  getAsyncEventIndexRouteHandler,
  getChartDataCacheKeyRouteHandler,
  getChartExportIndexRouteHandler,
  getChartFavoriteStatusIndexRouteHandler,
  getChartIndexRouteHandler,
  getChartInfoRouteHandler,
  getChartPkCacheScreenshotIndexRouteHandler,
  getChartPkDataIndexRouteHandler,
  getChartPkRouteHandler,
  getChartPkScreenshotDigestIndexRouteHandler,
  getChartPkThumbnailDigestIndexRouteHandler,
  getChartRelatedColumnNameRouteHandler,
  getCssTemplateIndexRouteHandler,
  getCssTemplateInfoRouteHandler,
  getCssTemplatePkRouteHandler,
  getCssTemplateRelatedColumnNameRouteHandler,
  getDashboardExportIndexRouteHandler,
  getDashboardFavoriteStatusIndexRouteHandler,
  getDashboardIdOrSlugChartsRouteHandler,
  getDashboardIdOrSlugDatasetsRouteHandler,
  getDashboardIdOrSlugRouteHandler,
  getDashboardIndexRouteHandler,
  getDashboardInfoRouteHandler,
  getDashboardPkThumbnailDigestIndexRouteHandler,
  getDashboardRelatedColumnNameRouteHandler,
  getDatabaseAvailableIndexRouteHandler,
  getDatabaseExportIndexRouteHandler,
  getDatabaseIndexRouteHandler,
  getDatabaseInfoRouteHandler,
  getDatabasePkFunctionNamesIndexRouteHandler,
  getDatabasePkRelatedObjectsIndexRouteHandler,
  getDatabasePkRouteHandler,
  getDatabasePkSchemasIndexRouteHandler,
  getDatabasePkSelectStarTableNameIndexRouteHandler,
  getDatabasePkSelectStarTableNameSchemaNameIndexRouteHandler,
  getDatabasePkTableTableNameSchemaNameIndexRouteHandler,
  getDatasetDistinctColumnNameRouteHandler,
  getDatasetExportIndexRouteHandler,
  getDatasetIndexRouteHandler,
  getDatasetInfoRouteHandler,
  getDatasetPkRelatedObjectsRouteHandler,
  getDatasetPkRouteHandler,
  getDatasetRelatedColumnNameRouteHandler,
  getLogIndexRouteHandler,
  getLogPkRouteHandler,
  getMenuIndexRouteHandler,
  getOpenapiVersionOpenapiRouteHandler,
  getQueryDistinctColumnNameRouteHandler,
  getQueryIndexRouteHandler,
  getQueryPkRouteHandler,
  getQueryRelatedColumnNameRouteHandler,
  getReportIndexRouteHandler,
  getReportInfoRouteHandler,
  getReportPkLogIndexRouteHandler,
  getReportPkLogLogIdRouteHandler,
  getReportPkRouteHandler,
  getReportRelatedColumnNameRouteHandler,
  getSavedQueryDistinctColumnNameRouteHandler,
  getSavedQueryExportIndexRouteHandler,
  getSavedQueryIndexRouteHandler,
  getSavedQueryInfoRouteHandler,
  getSavedQueryPkRouteHandler,
  getSavedQueryRelatedColumnNameRouteHandler,
  getSecurityCsrfTokenIndexRouteHandler,
  postAnnotationLayerIndexRouteHandler,
  postAnnotationLayerPkAnnotationIndexRouteHandler,
  postCachekeyInvalidateRouteHandler,
  postChartDataRouteHandler,
  postChartImportIndexRouteHandler,
  postChartIndexRouteHandler,
  postCssTemplateIndexRouteHandler,
  postDashboardImportIndexRouteHandler,
  postDashboardIndexRouteHandler,
  postDatabaseImportIndexRouteHandler,
  postDatabaseIndexRouteHandler,
  postDatabaseTestConnectionRouteHandler,
  postDatabaseValidateParametersRouteHandler,
  postDatasetImportIndexRouteHandler,
  postDatasetIndexRouteHandler,
  postLogIndexRouteHandler,
  postReportIndexRouteHandler,
  postSavedQueryImportIndexRouteHandler,
  postSavedQueryIndexRouteHandler,
  postSecurityLoginRouteHandler,
  postSecurityRefreshRouteHandler,
  putAnnotationLayerPkAnnotationAnnotationIdRouteHandler,
  putAnnotationLayerPkRouteHandler,
  putChartPkRouteHandler,
  putCssTemplatePkRouteHandler,
  putDashboardPkRouteHandler,
  putDatabasePkRouteHandler,
  putDatasetPkRefreshRouteHandler,
  putDatasetPkRouteHandler,
  putReportPkRouteHandler,
  putSavedQueryPkRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteAnnotationLayerIndexRoute, deleteAnnotationLayerIndexRouteHandler)
  .openapi(getAnnotationLayerIndexRoute, getAnnotationLayerIndexRouteHandler)
  .openapi(postAnnotationLayerIndexRoute, postAnnotationLayerIndexRouteHandler)
  .openapi(getAnnotationLayerInfoRoute, getAnnotationLayerInfoRouteHandler)
  .openapi(
    getAnnotationLayerRelatedColumnNameRoute,
    getAnnotationLayerRelatedColumnNameRouteHandler,
  )
  .openapi(deleteAnnotationLayerPkRoute, deleteAnnotationLayerPkRouteHandler)
  .openapi(getAnnotationLayerPkRoute, getAnnotationLayerPkRouteHandler)
  .openapi(putAnnotationLayerPkRoute, putAnnotationLayerPkRouteHandler)
  .openapi(
    deleteAnnotationLayerPkAnnotationIndexRoute,
    deleteAnnotationLayerPkAnnotationIndexRouteHandler,
  )
  .openapi(
    getAnnotationLayerPkAnnotationIndexRoute,
    getAnnotationLayerPkAnnotationIndexRouteHandler,
  )
  .openapi(
    postAnnotationLayerPkAnnotationIndexRoute,
    postAnnotationLayerPkAnnotationIndexRouteHandler,
  )
  .openapi(
    deleteAnnotationLayerPkAnnotationAnnotationIdRoute,
    deleteAnnotationLayerPkAnnotationAnnotationIdRouteHandler,
  )
  .openapi(
    getAnnotationLayerPkAnnotationAnnotationIdRoute,
    getAnnotationLayerPkAnnotationAnnotationIdRouteHandler,
  )
  .openapi(
    putAnnotationLayerPkAnnotationAnnotationIdRoute,
    putAnnotationLayerPkAnnotationAnnotationIdRouteHandler,
  )
  .openapi(getAsyncEventIndexRoute, getAsyncEventIndexRouteHandler)
  .openapi(postCachekeyInvalidateRoute, postCachekeyInvalidateRouteHandler)
  .openapi(deleteChartIndexRoute, deleteChartIndexRouteHandler)
  .openapi(getChartIndexRoute, getChartIndexRouteHandler)
  .openapi(postChartIndexRoute, postChartIndexRouteHandler)
  .openapi(getChartInfoRoute, getChartInfoRouteHandler)
  .openapi(postChartDataRoute, postChartDataRouteHandler)
  .openapi(getChartDataCacheKeyRoute, getChartDataCacheKeyRouteHandler)
  .openapi(getChartExportIndexRoute, getChartExportIndexRouteHandler)
  .openapi(getChartFavoriteStatusIndexRoute, getChartFavoriteStatusIndexRouteHandler)
  .openapi(postChartImportIndexRoute, postChartImportIndexRouteHandler)
  .openapi(getChartRelatedColumnNameRoute, getChartRelatedColumnNameRouteHandler)
  .openapi(deleteChartPkRoute, deleteChartPkRouteHandler)
  .openapi(getChartPkRoute, getChartPkRouteHandler)
  .openapi(putChartPkRoute, putChartPkRouteHandler)
  .openapi(getChartPkCacheScreenshotIndexRoute, getChartPkCacheScreenshotIndexRouteHandler)
  .openapi(getChartPkDataIndexRoute, getChartPkDataIndexRouteHandler)
  .openapi(getChartPkScreenshotDigestIndexRoute, getChartPkScreenshotDigestIndexRouteHandler)
  .openapi(getChartPkThumbnailDigestIndexRoute, getChartPkThumbnailDigestIndexRouteHandler)
  .openapi(deleteCssTemplateIndexRoute, deleteCssTemplateIndexRouteHandler)
  .openapi(getCssTemplateIndexRoute, getCssTemplateIndexRouteHandler)
  .openapi(postCssTemplateIndexRoute, postCssTemplateIndexRouteHandler)
  .openapi(getCssTemplateInfoRoute, getCssTemplateInfoRouteHandler)
  .openapi(getCssTemplateRelatedColumnNameRoute, getCssTemplateRelatedColumnNameRouteHandler)
  .openapi(deleteCssTemplatePkRoute, deleteCssTemplatePkRouteHandler)
  .openapi(getCssTemplatePkRoute, getCssTemplatePkRouteHandler)
  .openapi(putCssTemplatePkRoute, putCssTemplatePkRouteHandler)
  .openapi(deleteDashboardIndexRoute, deleteDashboardIndexRouteHandler)
  .openapi(getDashboardIndexRoute, getDashboardIndexRouteHandler)
  .openapi(postDashboardIndexRoute, postDashboardIndexRouteHandler)
  .openapi(getDashboardInfoRoute, getDashboardInfoRouteHandler)
  .openapi(getDashboardExportIndexRoute, getDashboardExportIndexRouteHandler)
  .openapi(getDashboardFavoriteStatusIndexRoute, getDashboardFavoriteStatusIndexRouteHandler)
  .openapi(postDashboardImportIndexRoute, postDashboardImportIndexRouteHandler)
  .openapi(getDashboardRelatedColumnNameRoute, getDashboardRelatedColumnNameRouteHandler)
  .openapi(getDashboardIdOrSlugRoute, getDashboardIdOrSlugRouteHandler)
  .openapi(getDashboardIdOrSlugChartsRoute, getDashboardIdOrSlugChartsRouteHandler)
  .openapi(getDashboardIdOrSlugDatasetsRoute, getDashboardIdOrSlugDatasetsRouteHandler)
  .openapi(deleteDashboardPkRoute, deleteDashboardPkRouteHandler)
  .openapi(putDashboardPkRoute, putDashboardPkRouteHandler)
  .openapi(getDashboardPkThumbnailDigestIndexRoute, getDashboardPkThumbnailDigestIndexRouteHandler)
  .openapi(getDatabaseIndexRoute, getDatabaseIndexRouteHandler)
  .openapi(postDatabaseIndexRoute, postDatabaseIndexRouteHandler)
  .openapi(getDatabaseInfoRoute, getDatabaseInfoRouteHandler)
  .openapi(getDatabaseAvailableIndexRoute, getDatabaseAvailableIndexRouteHandler)
  .openapi(getDatabaseExportIndexRoute, getDatabaseExportIndexRouteHandler)
  .openapi(postDatabaseImportIndexRoute, postDatabaseImportIndexRouteHandler)
  .openapi(postDatabaseTestConnectionRoute, postDatabaseTestConnectionRouteHandler)
  .openapi(postDatabaseValidateParametersRoute, postDatabaseValidateParametersRouteHandler)
  .openapi(deleteDatabasePkRoute, deleteDatabasePkRouteHandler)
  .openapi(getDatabasePkRoute, getDatabasePkRouteHandler)
  .openapi(putDatabasePkRoute, putDatabasePkRouteHandler)
  .openapi(getDatabasePkFunctionNamesIndexRoute, getDatabasePkFunctionNamesIndexRouteHandler)
  .openapi(getDatabasePkRelatedObjectsIndexRoute, getDatabasePkRelatedObjectsIndexRouteHandler)
  .openapi(getDatabasePkSchemasIndexRoute, getDatabasePkSchemasIndexRouteHandler)
  .openapi(
    getDatabasePkSelectStarTableNameIndexRoute,
    getDatabasePkSelectStarTableNameIndexRouteHandler,
  )
  .openapi(
    getDatabasePkSelectStarTableNameSchemaNameIndexRoute,
    getDatabasePkSelectStarTableNameSchemaNameIndexRouteHandler,
  )
  .openapi(
    getDatabasePkTableTableNameSchemaNameIndexRoute,
    getDatabasePkTableTableNameSchemaNameIndexRouteHandler,
  )
  .openapi(deleteDatasetIndexRoute, deleteDatasetIndexRouteHandler)
  .openapi(getDatasetIndexRoute, getDatasetIndexRouteHandler)
  .openapi(postDatasetIndexRoute, postDatasetIndexRouteHandler)
  .openapi(getDatasetInfoRoute, getDatasetInfoRouteHandler)
  .openapi(getDatasetDistinctColumnNameRoute, getDatasetDistinctColumnNameRouteHandler)
  .openapi(getDatasetExportIndexRoute, getDatasetExportIndexRouteHandler)
  .openapi(postDatasetImportIndexRoute, postDatasetImportIndexRouteHandler)
  .openapi(getDatasetRelatedColumnNameRoute, getDatasetRelatedColumnNameRouteHandler)
  .openapi(deleteDatasetPkRoute, deleteDatasetPkRouteHandler)
  .openapi(getDatasetPkRoute, getDatasetPkRouteHandler)
  .openapi(putDatasetPkRoute, putDatasetPkRouteHandler)
  .openapi(deleteDatasetPkColumnColumnIdRoute, deleteDatasetPkColumnColumnIdRouteHandler)
  .openapi(deleteDatasetPkMetricMetricIdRoute, deleteDatasetPkMetricMetricIdRouteHandler)
  .openapi(putDatasetPkRefreshRoute, putDatasetPkRefreshRouteHandler)
  .openapi(getDatasetPkRelatedObjectsRoute, getDatasetPkRelatedObjectsRouteHandler)
  .openapi(getLogIndexRoute, getLogIndexRouteHandler)
  .openapi(postLogIndexRoute, postLogIndexRouteHandler)
  .openapi(getLogPkRoute, getLogPkRouteHandler)
  .openapi(getMenuIndexRoute, getMenuIndexRouteHandler)
  .openapi(getOpenapiVersionOpenapiRoute, getOpenapiVersionOpenapiRouteHandler)
  .openapi(getQueryIndexRoute, getQueryIndexRouteHandler)
  .openapi(getQueryDistinctColumnNameRoute, getQueryDistinctColumnNameRouteHandler)
  .openapi(getQueryRelatedColumnNameRoute, getQueryRelatedColumnNameRouteHandler)
  .openapi(getQueryPkRoute, getQueryPkRouteHandler)
  .openapi(deleteReportIndexRoute, deleteReportIndexRouteHandler)
  .openapi(getReportIndexRoute, getReportIndexRouteHandler)
  .openapi(postReportIndexRoute, postReportIndexRouteHandler)
  .openapi(getReportInfoRoute, getReportInfoRouteHandler)
  .openapi(getReportRelatedColumnNameRoute, getReportRelatedColumnNameRouteHandler)
  .openapi(deleteReportPkRoute, deleteReportPkRouteHandler)
  .openapi(getReportPkRoute, getReportPkRouteHandler)
  .openapi(putReportPkRoute, putReportPkRouteHandler)
  .openapi(getReportPkLogIndexRoute, getReportPkLogIndexRouteHandler)
  .openapi(getReportPkLogLogIdRoute, getReportPkLogLogIdRouteHandler)
  .openapi(deleteSavedQueryIndexRoute, deleteSavedQueryIndexRouteHandler)
  .openapi(getSavedQueryIndexRoute, getSavedQueryIndexRouteHandler)
  .openapi(postSavedQueryIndexRoute, postSavedQueryIndexRouteHandler)
  .openapi(getSavedQueryInfoRoute, getSavedQueryInfoRouteHandler)
  .openapi(getSavedQueryDistinctColumnNameRoute, getSavedQueryDistinctColumnNameRouteHandler)
  .openapi(getSavedQueryExportIndexRoute, getSavedQueryExportIndexRouteHandler)
  .openapi(postSavedQueryImportIndexRoute, postSavedQueryImportIndexRouteHandler)
  .openapi(getSavedQueryRelatedColumnNameRoute, getSavedQueryRelatedColumnNameRouteHandler)
  .openapi(deleteSavedQueryPkRoute, deleteSavedQueryPkRouteHandler)
  .openapi(getSavedQueryPkRoute, getSavedQueryPkRouteHandler)
  .openapi(putSavedQueryPkRoute, putSavedQueryPkRouteHandler)
  .openapi(getSecurityCsrfTokenIndexRoute, getSecurityCsrfTokenIndexRouteHandler)
  .openapi(postSecurityLoginRoute, postSecurityLoginRouteHandler)
  .openapi(postSecurityRefreshRoute, postSecurityRefreshRouteHandler)

export default app
