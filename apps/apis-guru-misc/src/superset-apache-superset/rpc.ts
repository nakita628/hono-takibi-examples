import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAnnotationLayerIndex(
  args: InferRequestType<typeof client.annotation_layer.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotation_layer.index.$get(args, options))
}

export async function postAnnotationLayerIndex(
  args: InferRequestType<typeof client.annotation_layer.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotation_layer.index.$post(args, options))
}

export async function deleteAnnotationLayerIndex(
  args: InferRequestType<typeof client.annotation_layer.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotation_layer.index.$delete(args, options))
}

export async function getAnnotationLayerInfo(
  args: InferRequestType<typeof client.annotation_layer._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotation_layer._info.$get(args, options))
}

export async function getAnnotationLayerRelatedColumnName(
  args: InferRequestType<(typeof client.annotation_layer.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotation_layer.related[':column_name'].$get(args, options))
}

export async function getAnnotationLayerPk(
  args: InferRequestType<(typeof client.annotation_layer)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotation_layer[':pk'].$get(args, options))
}

export async function putAnnotationLayerPk(
  args: InferRequestType<(typeof client.annotation_layer)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotation_layer[':pk'].$put(args, options))
}

export async function deleteAnnotationLayerPk(
  args: InferRequestType<(typeof client.annotation_layer)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotation_layer[':pk'].$delete(args, options))
}

export async function getAnnotationLayerPkAnnotationIndex(
  args: InferRequestType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotation_layer[':pk'].annotation.index.$get(args, options))
}

export async function postAnnotationLayerPkAnnotationIndex(
  args: InferRequestType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotation_layer[':pk'].annotation.index.$post(args, options))
}

export async function deleteAnnotationLayerPkAnnotationIndex(
  args: InferRequestType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.annotation_layer[':pk'].annotation.index.$delete(args, options))
}

export async function getAnnotationLayerPkAnnotationAnnotationId(
  args: InferRequestType<
    (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.annotation_layer[':pk'].annotation[':annotation_id'].$get(args, options),
  )
}

export async function putAnnotationLayerPkAnnotationAnnotationId(
  args: InferRequestType<
    (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.annotation_layer[':pk'].annotation[':annotation_id'].$put(args, options),
  )
}

export async function deleteAnnotationLayerPkAnnotationAnnotationId(
  args: InferRequestType<
    (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.annotation_layer[':pk'].annotation[':annotation_id'].$delete(args, options),
  )
}

export async function getAsyncEventIndex(
  args: InferRequestType<typeof client.async_event.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.async_event.index.$get(args, options))
}

export async function postCachekeyInvalidate(
  args: InferRequestType<typeof client.cachekey.invalidate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cachekey.invalidate.$post(args, options))
}

export async function getChartIndex(
  args: InferRequestType<typeof client.chart.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chart.index.$get(args, options))
}

export async function postChartIndex(
  args: InferRequestType<typeof client.chart.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chart.index.$post(args, options))
}

export async function deleteChartIndex(
  args: InferRequestType<typeof client.chart.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chart.index.$delete(args, options))
}

export async function getChartInfo(
  args: InferRequestType<typeof client.chart._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chart._info.$get(args, options))
}

export async function postChartData(
  args: InferRequestType<typeof client.chart.data.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chart.data.$post(args, options))
}

export async function getChartDataCacheKey(
  args: InferRequestType<(typeof client.chart.data)[':cache_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chart.data[':cache_key'].$get(args, options))
}

export async function getChartExportIndex(
  args: InferRequestType<typeof client.chart.export.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chart.export.index.$get(args, options))
}

export async function getChartFavoriteStatusIndex(
  args: InferRequestType<typeof client.chart.favorite_status.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chart.favorite_status.index.$get(args, options))
}

export async function postChartImportIndex(
  args: InferRequestType<typeof client.chart.import.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chart.import.index.$post(args, options))
}

export async function getChartRelatedColumnName(
  args: InferRequestType<(typeof client.chart.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chart.related[':column_name'].$get(args, options))
}

export async function getChartPk(
  args: InferRequestType<(typeof client.chart)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chart[':pk'].$get(args, options))
}

export async function putChartPk(
  args: InferRequestType<(typeof client.chart)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chart[':pk'].$put(args, options))
}

export async function deleteChartPk(
  args: InferRequestType<(typeof client.chart)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chart[':pk'].$delete(args, options))
}

export async function getChartPkCacheScreenshotIndex(
  args: InferRequestType<(typeof client.chart)[':pk']['cache_screenshot']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chart[':pk'].cache_screenshot.index.$get(args, options))
}

export async function getChartPkDataIndex(
  args: InferRequestType<(typeof client.chart)[':pk']['data']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chart[':pk'].data.index.$get(args, options))
}

export async function getChartPkScreenshotDigestIndex(
  args: InferRequestType<(typeof client.chart)[':pk']['screenshot'][':digest']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chart[':pk'].screenshot[':digest'].index.$get(args, options))
}

export async function getChartPkThumbnailDigestIndex(
  args: InferRequestType<(typeof client.chart)[':pk']['thumbnail'][':digest']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chart[':pk'].thumbnail[':digest'].index.$get(args, options))
}

export async function getCssTemplateIndex(
  args: InferRequestType<typeof client.css_template.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.css_template.index.$get(args, options))
}

export async function postCssTemplateIndex(
  args: InferRequestType<typeof client.css_template.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.css_template.index.$post(args, options))
}

export async function deleteCssTemplateIndex(
  args: InferRequestType<typeof client.css_template.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.css_template.index.$delete(args, options))
}

export async function getCssTemplateInfo(
  args: InferRequestType<typeof client.css_template._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.css_template._info.$get(args, options))
}

export async function getCssTemplateRelatedColumnName(
  args: InferRequestType<(typeof client.css_template.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.css_template.related[':column_name'].$get(args, options))
}

export async function getCssTemplatePk(
  args: InferRequestType<(typeof client.css_template)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.css_template[':pk'].$get(args, options))
}

export async function putCssTemplatePk(
  args: InferRequestType<(typeof client.css_template)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.css_template[':pk'].$put(args, options))
}

export async function deleteCssTemplatePk(
  args: InferRequestType<(typeof client.css_template)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.css_template[':pk'].$delete(args, options))
}

export async function getDashboardIndex(
  args: InferRequestType<typeof client.dashboard.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboard.index.$get(args, options))
}

export async function postDashboardIndex(
  args: InferRequestType<typeof client.dashboard.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboard.index.$post(args, options))
}

export async function deleteDashboardIndex(
  args: InferRequestType<typeof client.dashboard.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboard.index.$delete(args, options))
}

export async function getDashboardInfo(
  args: InferRequestType<typeof client.dashboard._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboard._info.$get(args, options))
}

export async function getDashboardExportIndex(
  args: InferRequestType<typeof client.dashboard.export.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboard.export.index.$get(args, options))
}

export async function getDashboardFavoriteStatusIndex(
  args: InferRequestType<typeof client.dashboard.favorite_status.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboard.favorite_status.index.$get(args, options))
}

export async function postDashboardImportIndex(
  args: InferRequestType<typeof client.dashboard.import.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboard.import.index.$post(args, options))
}

export async function getDashboardRelatedColumnName(
  args: InferRequestType<(typeof client.dashboard.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboard.related[':column_name'].$get(args, options))
}

export async function getDashboardIdOrSlug(
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboard[':id_or_slug'].$get(args, options))
}

export async function getDashboardIdOrSlugCharts(
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['charts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboard[':id_or_slug'].charts.$get(args, options))
}

export async function getDashboardIdOrSlugDatasets(
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['datasets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboard[':id_or_slug'].datasets.$get(args, options))
}

export async function putDashboardPk(
  args: InferRequestType<(typeof client.dashboard)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboard[':pk'].$put(args, options))
}

export async function deleteDashboardPk(
  args: InferRequestType<(typeof client.dashboard)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboard[':pk'].$delete(args, options))
}

export async function getDashboardPkThumbnailDigestIndex(
  args: InferRequestType<(typeof client.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboard[':pk'].thumbnail[':digest'].index.$get(args, options))
}

export async function getDatabaseIndex(
  args: InferRequestType<typeof client.database.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.database.index.$get(args, options))
}

export async function postDatabaseIndex(
  args: InferRequestType<typeof client.database.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.database.index.$post(args, options))
}

export async function getDatabaseInfo(
  args: InferRequestType<typeof client.database._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.database._info.$get(args, options))
}

export async function getDatabaseAvailableIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.database.available.index.$get(undefined, options))
}

export async function getDatabaseExportIndex(
  args: InferRequestType<typeof client.database.export.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.database.export.index.$get(args, options))
}

export async function postDatabaseImportIndex(
  args: InferRequestType<typeof client.database.import.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.database.import.index.$post(args, options))
}

export async function postDatabaseTestConnection(
  args: InferRequestType<typeof client.database.test_connection.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.database.test_connection.$post(args, options))
}

export async function postDatabaseValidateParameters(
  args: InferRequestType<typeof client.database.validate_parameters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.database.validate_parameters.$post(args, options))
}

export async function getDatabasePk(
  args: InferRequestType<(typeof client.database)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.database[':pk'].$get(args, options))
}

export async function putDatabasePk(
  args: InferRequestType<(typeof client.database)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.database[':pk'].$put(args, options))
}

export async function deleteDatabasePk(
  args: InferRequestType<(typeof client.database)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.database[':pk'].$delete(args, options))
}

export async function getDatabasePkFunctionNamesIndex(
  args: InferRequestType<(typeof client.database)[':pk']['function_names']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.database[':pk'].function_names.index.$get(args, options))
}

export async function getDatabasePkRelatedObjectsIndex(
  args: InferRequestType<(typeof client.database)[':pk']['related_objects']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.database[':pk'].related_objects.index.$get(args, options))
}

export async function getDatabasePkSchemasIndex(
  args: InferRequestType<(typeof client.database)[':pk']['schemas']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.database[':pk'].schemas.index.$get(args, options))
}

export async function getDatabasePkSelectStarTableNameIndex(
  args: InferRequestType<
    (typeof client.database)[':pk']['select_star'][':table_name']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.database[':pk'].select_star[':table_name'].index.$get(args, options),
  )
}

export async function getDatabasePkSelectStarTableNameSchemaNameIndex(
  args: InferRequestType<
    (typeof client.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.database[':pk'].select_star[':table_name'][':schema_name'].index.$get(args, options),
  )
}

export async function getDatabasePkTableTableNameSchemaNameIndex(
  args: InferRequestType<
    (typeof client.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.database[':pk'].table[':table_name'][':schema_name'].index.$get(args, options),
  )
}

export async function getDatasetIndex(
  args: InferRequestType<typeof client.dataset.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataset.index.$get(args, options))
}

export async function postDatasetIndex(
  args: InferRequestType<typeof client.dataset.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataset.index.$post(args, options))
}

export async function deleteDatasetIndex(
  args: InferRequestType<typeof client.dataset.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataset.index.$delete(args, options))
}

export async function getDatasetInfo(
  args: InferRequestType<typeof client.dataset._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataset._info.$get(args, options))
}

export async function getDatasetDistinctColumnName(
  args: InferRequestType<(typeof client.dataset.distinct)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataset.distinct[':column_name'].$get(args, options))
}

export async function getDatasetExportIndex(
  args: InferRequestType<typeof client.dataset.export.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataset.export.index.$get(args, options))
}

export async function postDatasetImportIndex(
  args: InferRequestType<typeof client.dataset.import.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataset.import.index.$post(args, options))
}

export async function getDatasetRelatedColumnName(
  args: InferRequestType<(typeof client.dataset.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataset.related[':column_name'].$get(args, options))
}

export async function getDatasetPk(
  args: InferRequestType<(typeof client.dataset)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataset[':pk'].$get(args, options))
}

export async function putDatasetPk(
  args: InferRequestType<(typeof client.dataset)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataset[':pk'].$put(args, options))
}

export async function deleteDatasetPk(
  args: InferRequestType<(typeof client.dataset)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataset[':pk'].$delete(args, options))
}

export async function deleteDatasetPkColumnColumnId(
  args: InferRequestType<(typeof client.dataset)[':pk']['column'][':column_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataset[':pk'].column[':column_id'].$delete(args, options))
}

export async function deleteDatasetPkMetricMetricId(
  args: InferRequestType<(typeof client.dataset)[':pk']['metric'][':metric_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataset[':pk'].metric[':metric_id'].$delete(args, options))
}

export async function putDatasetPkRefresh(
  args: InferRequestType<(typeof client.dataset)[':pk']['refresh']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataset[':pk'].refresh.$put(args, options))
}

export async function getDatasetPkRelatedObjects(
  args: InferRequestType<(typeof client.dataset)[':pk']['related_objects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataset[':pk'].related_objects.$get(args, options))
}

export async function getLogIndex(
  args: InferRequestType<typeof client.log.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.log.index.$get(args, options))
}

export async function postLogIndex(
  args: InferRequestType<typeof client.log.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.log.index.$post(args, options))
}

export async function getLogPk(
  args: InferRequestType<(typeof client.log)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.log[':pk'].$get(args, options))
}

export async function getMenuIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.menu.index.$get(undefined, options))
}

export async function getOpenapiVersionOpenapi(
  args: InferRequestType<(typeof client.openapi)[':version']['_openapi']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.openapi[':version']._openapi.$get(args, options))
}

export async function getQueryIndex(
  args: InferRequestType<typeof client.query.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query.index.$get(args, options))
}

export async function getQueryDistinctColumnName(
  args: InferRequestType<(typeof client.query.distinct)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query.distinct[':column_name'].$get(args, options))
}

export async function getQueryRelatedColumnName(
  args: InferRequestType<(typeof client.query.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query.related[':column_name'].$get(args, options))
}

export async function getQueryPk(
  args: InferRequestType<(typeof client.query)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query[':pk'].$get(args, options))
}

export async function getReportIndex(
  args: InferRequestType<typeof client.report.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.index.$get(args, options))
}

export async function postReportIndex(
  args: InferRequestType<typeof client.report.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.index.$post(args, options))
}

export async function deleteReportIndex(
  args: InferRequestType<typeof client.report.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.index.$delete(args, options))
}

export async function getReportInfo(
  args: InferRequestType<typeof client.report._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report._info.$get(args, options))
}

export async function getReportRelatedColumnName(
  args: InferRequestType<(typeof client.report.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.related[':column_name'].$get(args, options))
}

export async function getReportPk(
  args: InferRequestType<(typeof client.report)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report[':pk'].$get(args, options))
}

export async function putReportPk(
  args: InferRequestType<(typeof client.report)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report[':pk'].$put(args, options))
}

export async function deleteReportPk(
  args: InferRequestType<(typeof client.report)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report[':pk'].$delete(args, options))
}

export async function getReportPkLogIndex(
  args: InferRequestType<(typeof client.report)[':pk']['log']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report[':pk'].log.index.$get(args, options))
}

export async function getReportPkLogLogId(
  args: InferRequestType<(typeof client.report)[':pk']['log'][':log_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report[':pk'].log[':log_id'].$get(args, options))
}

export async function getSavedQueryIndex(
  args: InferRequestType<typeof client.saved_query.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saved_query.index.$get(args, options))
}

export async function postSavedQueryIndex(
  args: InferRequestType<typeof client.saved_query.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saved_query.index.$post(args, options))
}

export async function deleteSavedQueryIndex(
  args: InferRequestType<typeof client.saved_query.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saved_query.index.$delete(args, options))
}

export async function getSavedQueryInfo(
  args: InferRequestType<typeof client.saved_query._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saved_query._info.$get(args, options))
}

export async function getSavedQueryDistinctColumnName(
  args: InferRequestType<(typeof client.saved_query.distinct)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saved_query.distinct[':column_name'].$get(args, options))
}

export async function getSavedQueryExportIndex(
  args: InferRequestType<typeof client.saved_query.export.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saved_query.export.index.$get(args, options))
}

export async function postSavedQueryImportIndex(
  args: InferRequestType<typeof client.saved_query.import.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saved_query.import.index.$post(args, options))
}

export async function getSavedQueryRelatedColumnName(
  args: InferRequestType<(typeof client.saved_query.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saved_query.related[':column_name'].$get(args, options))
}

export async function getSavedQueryPk(
  args: InferRequestType<(typeof client.saved_query)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saved_query[':pk'].$get(args, options))
}

export async function putSavedQueryPk(
  args: InferRequestType<(typeof client.saved_query)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saved_query[':pk'].$put(args, options))
}

export async function deleteSavedQueryPk(
  args: InferRequestType<(typeof client.saved_query)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saved_query[':pk'].$delete(args, options))
}

export async function getSecurityCsrfTokenIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.security.csrf_token.index.$get(undefined, options))
}

export async function postSecurityLogin(
  args: InferRequestType<typeof client.security.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.security.login.$post(args, options))
}

export async function postSecurityRefresh(options?: ClientRequestOptions) {
  return await parseResponse(client.security.refresh.$post(undefined, options))
}
