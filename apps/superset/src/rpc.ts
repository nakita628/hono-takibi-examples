import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1AdvancedDataTypeConvert(
  args: InferRequestType<typeof client.api.v1.advanced_data_type.convert.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.advanced_data_type.convert.$get(args, options))
}

export async function getApiV1AdvancedDataTypeTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.advanced_data_type.types.$get(undefined, options))
}

export async function getApiV1AnnotationLayerIndex(
  args: InferRequestType<typeof client.api.v1.annotation_layer.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.annotation_layer.index.$get(args, options))
}

export async function postApiV1AnnotationLayerIndex(
  args: InferRequestType<typeof client.api.v1.annotation_layer.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.annotation_layer.index.$post(args, options))
}

export async function deleteApiV1AnnotationLayerIndex(
  args: InferRequestType<typeof client.api.v1.annotation_layer.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.annotation_layer.index.$delete(args, options))
}

export async function getApiV1AnnotationLayerInfo(
  args: InferRequestType<typeof client.api.v1.annotation_layer._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.annotation_layer._info.$get(args, options))
}

export async function getApiV1AnnotationLayerRelatedColumnName(
  args: InferRequestType<(typeof client.api.v1.annotation_layer.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.annotation_layer.related[':column_name'].$get(args, options),
  )
}

export async function getApiV1AnnotationLayerPk(
  args: InferRequestType<(typeof client.api.v1.annotation_layer)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.annotation_layer[':pk'].$get(args, options))
}

export async function putApiV1AnnotationLayerPk(
  args: InferRequestType<(typeof client.api.v1.annotation_layer)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.annotation_layer[':pk'].$put(args, options))
}

export async function deleteApiV1AnnotationLayerPk(
  args: InferRequestType<(typeof client.api.v1.annotation_layer)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.annotation_layer[':pk'].$delete(args, options))
}

export async function getApiV1AnnotationLayerPkAnnotationIndex(
  args: InferRequestType<
    (typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.annotation_layer[':pk'].annotation.index.$get(args, options),
  )
}

export async function postApiV1AnnotationLayerPkAnnotationIndex(
  args: InferRequestType<
    (typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.annotation_layer[':pk'].annotation.index.$post(args, options),
  )
}

export async function deleteApiV1AnnotationLayerPkAnnotationIndex(
  args: InferRequestType<
    (typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.annotation_layer[':pk'].annotation.index.$delete(args, options),
  )
}

export async function getApiV1AnnotationLayerPkAnnotationAnnotationId(
  args: InferRequestType<
    (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.annotation_layer[':pk'].annotation[':annotation_id'].$get(args, options),
  )
}

export async function putApiV1AnnotationLayerPkAnnotationAnnotationId(
  args: InferRequestType<
    (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.annotation_layer[':pk'].annotation[':annotation_id'].$put(args, options),
  )
}

export async function deleteApiV1AnnotationLayerPkAnnotationAnnotationId(
  args: InferRequestType<
    (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.annotation_layer[':pk'].annotation[':annotation_id'].$delete(args, options),
  )
}

export async function getApiV1AssetsExportIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.assets.export.index.$get(undefined, options))
}

export async function postApiV1AssetsImportIndex(
  args: InferRequestType<typeof client.api.v1.assets.import.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.assets.import.index.$post(args, options))
}

export async function getApiV1AvailableDomainsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.available_domains.index.$get(undefined, options))
}

export async function postApiV1CachekeyInvalidate(
  args: InferRequestType<typeof client.api.v1.cachekey.invalidate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.cachekey.invalidate.$post(args, options))
}

export async function getApiV1ChartIndex(
  args: InferRequestType<typeof client.api.v1.chart.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart.index.$get(args, options))
}

export async function postApiV1ChartIndex(
  args: InferRequestType<typeof client.api.v1.chart.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart.index.$post(args, options))
}

export async function deleteApiV1ChartIndex(
  args: InferRequestType<typeof client.api.v1.chart.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart.index.$delete(args, options))
}

export async function getApiV1ChartInfo(
  args: InferRequestType<typeof client.api.v1.chart._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart._info.$get(args, options))
}

export async function postApiV1ChartData(
  args: InferRequestType<typeof client.api.v1.chart.data.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart.data.$post(args, options))
}

export async function postApiV1ChartDataStop(
  args: InferRequestType<typeof client.api.v1.chart.data.stop.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart.data.stop.$post(args, options))
}

export async function getApiV1ChartExportIndex(
  args: InferRequestType<typeof client.api.v1.chart.export.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart.export.index.$get(args, options))
}

export async function getApiV1ChartFavoriteStatusIndex(
  args: InferRequestType<typeof client.api.v1.chart.favorite_status.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart.favorite_status.index.$get(args, options))
}

export async function postApiV1ChartImportIndex(
  args: InferRequestType<typeof client.api.v1.chart.import.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart.import.index.$post(args, options))
}

export async function getApiV1ChartRelatedColumnName(
  args: InferRequestType<(typeof client.api.v1.chart.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart.related[':column_name'].$get(args, options))
}

export async function putApiV1ChartWarmUpCache(
  args: InferRequestType<typeof client.api.v1.chart.warm_up_cache.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart.warm_up_cache.$put(args, options))
}

export async function getApiV1ChartIdOrUuid(
  args: InferRequestType<(typeof client.api.v1.chart)[':id_or_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart[':id_or_uuid'].$get(args, options))
}

export async function putApiV1ChartPk(
  args: InferRequestType<(typeof client.api.v1.chart)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart[':pk'].$put(args, options))
}

export async function deleteApiV1ChartPk(
  args: InferRequestType<(typeof client.api.v1.chart)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart[':pk'].$delete(args, options))
}

export async function getApiV1ChartPkCacheScreenshotIndex(
  args: InferRequestType<(typeof client.api.v1.chart)[':pk']['cache_screenshot']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart[':pk'].cache_screenshot.index.$get(args, options))
}

export async function getApiV1ChartPkDataIndex(
  args: InferRequestType<(typeof client.api.v1.chart)[':pk']['data']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart[':pk'].data.index.$get(args, options))
}

export async function getApiV1ChartPkDeckLayersIndex(
  args: InferRequestType<(typeof client.api.v1.chart)[':pk']['deck_layers']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart[':pk'].deck_layers.index.$get(args, options))
}

export async function postApiV1ChartPkFavoritesIndex(
  args: InferRequestType<(typeof client.api.v1.chart)[':pk']['favorites']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart[':pk'].favorites.index.$post(args, options))
}

export async function deleteApiV1ChartPkFavoritesIndex(
  args: InferRequestType<(typeof client.api.v1.chart)[':pk']['favorites']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart[':pk'].favorites.index.$delete(args, options))
}

export async function getApiV1ChartPkScreenshotDigestIndex(
  args: InferRequestType<
    (typeof client.api.v1.chart)[':pk']['screenshot'][':digest']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.chart[':pk'].screenshot[':digest'].index.$get(args, options),
  )
}

export async function getApiV1ChartPkThumbnailDigestIndex(
  args: InferRequestType<
    (typeof client.api.v1.chart)[':pk']['thumbnail'][':digest']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.chart[':pk'].thumbnail[':digest'].index.$get(args, options),
  )
}

export async function getApiV1ChartUuidStrActivityIndex(
  args: InferRequestType<(typeof client.api.v1.chart)[':uuid_str']['activity']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart[':uuid_str'].activity.index.$get(args, options))
}

export async function getApiV1ChartUuidStrVersionsIndex(
  args: InferRequestType<(typeof client.api.v1.chart)[':uuid_str']['versions']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart[':uuid_str'].versions.index.$get(args, options))
}

export async function getApiV1ChartUuidStrVersionsVersionUuidStrIndex(
  args: InferRequestType<
    (typeof client.api.v1.chart)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.chart[':uuid_str'].versions[':version_uuid_str'].index.$get(args, options),
  )
}

export async function postApiV1ChartUuidStrVersionsVersionUuidStrRestore(
  args: InferRequestType<
    (typeof client.api.v1.chart)[':uuid_str']['versions'][':version_uuid_str']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.chart[':uuid_str'].versions[':version_uuid_str'].restore.$post(args, options),
  )
}

export async function postApiV1ChartUuidPurge(
  args: InferRequestType<(typeof client.api.v1.chart)[':uuid']['purge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart[':uuid'].purge.$post(args, options))
}

export async function postApiV1ChartUuidRestore(
  args: InferRequestType<(typeof client.api.v1.chart)[':uuid']['restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.chart[':uuid'].restore.$post(args, options))
}

export async function getApiV1CssTemplateIndex(
  args: InferRequestType<typeof client.api.v1.css_template.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.css_template.index.$get(args, options))
}

export async function postApiV1CssTemplateIndex(
  args: InferRequestType<typeof client.api.v1.css_template.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.css_template.index.$post(args, options))
}

export async function deleteApiV1CssTemplateIndex(
  args: InferRequestType<typeof client.api.v1.css_template.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.css_template.index.$delete(args, options))
}

export async function getApiV1CssTemplateInfo(
  args: InferRequestType<typeof client.api.v1.css_template._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.css_template._info.$get(args, options))
}

export async function getApiV1CssTemplateRelatedColumnName(
  args: InferRequestType<(typeof client.api.v1.css_template.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.css_template.related[':column_name'].$get(args, options))
}

export async function getApiV1CssTemplatePk(
  args: InferRequestType<(typeof client.api.v1.css_template)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.css_template[':pk'].$get(args, options))
}

export async function putApiV1CssTemplatePk(
  args: InferRequestType<(typeof client.api.v1.css_template)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.css_template[':pk'].$put(args, options))
}

export async function deleteApiV1CssTemplatePk(
  args: InferRequestType<(typeof client.api.v1.css_template)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.css_template[':pk'].$delete(args, options))
}

export async function getApiV1DashboardIndex(
  args: InferRequestType<typeof client.api.v1.dashboard.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard.index.$get(args, options))
}

export async function postApiV1DashboardIndex(
  args: InferRequestType<typeof client.api.v1.dashboard.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard.index.$post(args, options))
}

export async function deleteApiV1DashboardIndex(
  args: InferRequestType<typeof client.api.v1.dashboard.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard.index.$delete(args, options))
}

export async function getApiV1DashboardInfo(
  args: InferRequestType<typeof client.api.v1.dashboard._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard._info.$get(args, options))
}

export async function getApiV1DashboardExportIndex(
  args: InferRequestType<typeof client.api.v1.dashboard.export.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard.export.index.$get(args, options))
}

export async function getApiV1DashboardExportXlsxDownloadJobIdIndex(
  args: InferRequestType<
    (typeof client.api.v1.dashboard.export_xlsx.download)[':job_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.dashboard.export_xlsx.download[':job_id'].index.$get(args, options),
  )
}

export async function getApiV1DashboardExportXlsxStatusJobIdIndex(
  args: InferRequestType<
    (typeof client.api.v1.dashboard.export_xlsx.status)[':job_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.dashboard.export_xlsx.status[':job_id'].index.$get(args, options),
  )
}

export async function getApiV1DashboardFavoriteStatusIndex(
  args: InferRequestType<typeof client.api.v1.dashboard.favorite_status.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard.favorite_status.index.$get(args, options))
}

export async function postApiV1DashboardImportIndex(
  args: InferRequestType<typeof client.api.v1.dashboard.import.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard.import.index.$post(args, options))
}

export async function getApiV1DashboardPermalinkKey(
  args: InferRequestType<(typeof client.api.v1.dashboard.permalink)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard.permalink[':key'].$get(args, options))
}

export async function getApiV1DashboardRelatedColumnName(
  args: InferRequestType<(typeof client.api.v1.dashboard.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard.related[':column_name'].$get(args, options))
}

export async function getApiV1DashboardIdOrSlug(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard[':id_or_slug'].$get(args, options))
}

export async function getApiV1DashboardIdOrSlugCharts(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['charts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard[':id_or_slug'].charts.$get(args, options))
}

export async function postApiV1DashboardIdOrSlugCopyIndex(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['copy']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard[':id_or_slug'].copy.index.$post(args, options))
}

export async function getApiV1DashboardIdOrSlugDatasets(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['datasets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard[':id_or_slug'].datasets.$get(args, options))
}

export async function getApiV1DashboardIdOrSlugEmbedded(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard[':id_or_slug'].embedded.$get(args, options))
}

export async function putApiV1DashboardIdOrSlugEmbedded(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard[':id_or_slug'].embedded.$put(args, options))
}

export async function postApiV1DashboardIdOrSlugEmbedded(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard[':id_or_slug'].embedded.$post(args, options))
}

export async function deleteApiV1DashboardIdOrSlugEmbedded(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard[':id_or_slug'].embedded.$delete(args, options))
}

export async function getApiV1DashboardIdOrSlugTabs(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['tabs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard[':id_or_slug'].tabs.$get(args, options))
}

export async function putApiV1DashboardPk(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard[':pk'].$put(args, options))
}

export async function deleteApiV1DashboardPk(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard[':pk'].$delete(args, options))
}

export async function postApiV1DashboardPkCacheDashboardScreenshotIndex(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':pk']['cache_dashboard_screenshot']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.dashboard[':pk'].cache_dashboard_screenshot.index.$post(args, options),
  )
}

export async function putApiV1DashboardPkChartCustomizations(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':pk']['chart_customizations']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.dashboard[':pk'].chart_customizations.$put(args, options),
  )
}

export async function putApiV1DashboardPkColors(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':pk']['colors']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard[':pk'].colors.$put(args, options))
}

export async function getApiV1DashboardPkExportAsExampleIndex(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':pk']['export_as_example']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.dashboard[':pk'].export_as_example.index.$get(args, options),
  )
}

export async function postApiV1DashboardPkExportXlsxIndex(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':pk']['export_xlsx']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard[':pk'].export_xlsx.index.$post(args, options))
}

export async function postApiV1DashboardPkFavoritesIndex(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':pk']['favorites']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard[':pk'].favorites.index.$post(args, options))
}

export async function deleteApiV1DashboardPkFavoritesIndex(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':pk']['favorites']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard[':pk'].favorites.index.$delete(args, options))
}

export async function postApiV1DashboardPkFilterState(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':pk']['filter_state']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard[':pk'].filter_state.$post(args, options))
}

export async function getApiV1DashboardPkFilterStateKey(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.dashboard[':pk'].filter_state[':key'].$get(args, options),
  )
}

export async function putApiV1DashboardPkFilterStateKey(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.dashboard[':pk'].filter_state[':key'].$put(args, options),
  )
}

export async function deleteApiV1DashboardPkFilterStateKey(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.dashboard[':pk'].filter_state[':key'].$delete(args, options),
  )
}

export async function putApiV1DashboardPkFilters(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':pk']['filters']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard[':pk'].filters.$put(args, options))
}

export async function postApiV1DashboardPkPermalink(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':pk']['permalink']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard[':pk'].permalink.$post(args, options))
}

export async function getApiV1DashboardPkScreenshotDigestIndex(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':pk']['screenshot'][':digest']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.dashboard[':pk'].screenshot[':digest'].index.$get(args, options),
  )
}

export async function getApiV1DashboardPkThumbnailDigestIndex(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.dashboard[':pk'].thumbnail[':digest'].index.$get(args, options),
  )
}

export async function getApiV1DashboardUuidStrActivityIndex(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':uuid_str']['activity']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.dashboard[':uuid_str'].activity.index.$get(args, options),
  )
}

export async function getApiV1DashboardUuidStrVersionsIndex(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':uuid_str']['versions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.dashboard[':uuid_str'].versions.index.$get(args, options),
  )
}

export async function getApiV1DashboardUuidStrVersionsVersionUuidStrIndex(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.dashboard[':uuid_str'].versions[':version_uuid_str'].index.$get(args, options),
  )
}

export async function postApiV1DashboardUuidStrVersionsVersionUuidStrRestore(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':uuid_str']['versions'][':version_uuid_str']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.dashboard[':uuid_str'].versions[':version_uuid_str'].restore.$post(args, options),
  )
}

export async function postApiV1DashboardUuidPurge(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':uuid']['purge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard[':uuid'].purge.$post(args, options))
}

export async function postApiV1DashboardUuidRestore(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':uuid']['restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dashboard[':uuid'].restore.$post(args, options))
}

export async function getApiV1DatabaseIndex(
  args: InferRequestType<typeof client.api.v1.database.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.database.index.$get(args, options))
}

export async function postApiV1DatabaseIndex(
  args: InferRequestType<typeof client.api.v1.database.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.database.index.$post(args, options))
}

export async function getApiV1DatabaseInfo(
  args: InferRequestType<typeof client.api.v1.database._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.database._info.$get(args, options))
}

export async function getApiV1DatabaseAvailableIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.database.available.index.$get(undefined, options))
}

export async function getApiV1DatabaseExportIndex(
  args: InferRequestType<typeof client.api.v1.database.export.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.database.export.index.$get(args, options))
}

export async function postApiV1DatabaseImportIndex(
  args: InferRequestType<typeof client.api.v1.database.import.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.database.import.index.$post(args, options))
}

export async function getApiV1DatabaseOauth2Index(
  args: InferRequestType<typeof client.api.v1.database.oauth2.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.database.oauth2.index.$get(args, options))
}

export async function getApiV1DatabaseRelatedColumnName(
  args: InferRequestType<(typeof client.api.v1.database.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.database.related[':column_name'].$get(args, options))
}

export async function postApiV1DatabaseTestConnectionIndex(
  args: InferRequestType<typeof client.api.v1.database.test_connection.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.database.test_connection.index.$post(args, options))
}

export async function postApiV1DatabaseUploadMetadataIndex(
  args: InferRequestType<typeof client.api.v1.database.upload_metadata.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.database.upload_metadata.index.$post(args, options))
}

export async function postApiV1DatabaseValidateParametersIndex(
  args: InferRequestType<typeof client.api.v1.database.validate_parameters.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.database.validate_parameters.index.$post(args, options))
}

export async function getApiV1DatabasePk(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.database[':pk'].$get(args, options))
}

export async function putApiV1DatabasePk(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.database[':pk'].$put(args, options))
}

export async function deleteApiV1DatabasePk(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.database[':pk'].$delete(args, options))
}

export async function getApiV1DatabasePkCatalogsIndex(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['catalogs']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.database[':pk'].catalogs.index.$get(args, options))
}

export async function getApiV1DatabasePkConnection(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['connection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.database[':pk'].connection.$get(args, options))
}

export async function getApiV1DatabasePkEncryptedExtraHintsIndex(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['encrypted_extra_hints']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.database[':pk'].encrypted_extra_hints.index.$get(args, options),
  )
}

export async function getApiV1DatabasePkFunctionNamesIndex(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['function_names']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.database[':pk'].function_names.index.$get(args, options))
}

export async function getApiV1DatabasePkOauth2TokensIndex(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['oauth2_tokens']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.database[':pk'].oauth2_tokens.index.$get(args, options))
}

export async function postApiV1DatabasePkOauth2TokensAllIndex(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['oauth2_tokens']['all']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.database[':pk'].oauth2_tokens.all.index.$post(args, options),
  )
}

export async function postApiV1DatabasePkOauth2TokensDeleteIndex(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['oauth2_tokens']['delete']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.database[':pk'].oauth2_tokens.delete.index.$post(args, options),
  )
}

export async function getApiV1DatabasePkRelatedObjectsIndex(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['related_objects']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.database[':pk'].related_objects.index.$get(args, options),
  )
}

export async function getApiV1DatabasePkSchemasIndex(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['schemas']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.database[':pk'].schemas.index.$get(args, options))
}

export async function getApiV1DatabasePkSchemasAccessForFileUploadIndex(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['schemas_access_for_file_upload']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.database[':pk'].schemas_access_for_file_upload.index.$get(args, options),
  )
}

export async function getApiV1DatabasePkSelectStarTableNameIndex(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['select_star'][':table_name']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.database[':pk'].select_star[':table_name'].index.$get(args, options),
  )
}

export async function getApiV1DatabasePkSelectStarTableNameSchemaNameIndex(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.database[':pk'].select_star[':table_name'][':schema_name'].index.$get(
      args,
      options,
    ),
  )
}

export async function postApiV1DatabasePkSyncPermissionsIndex(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['sync_permissions']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.database[':pk'].sync_permissions.index.$post(args, options),
  )
}

export async function getApiV1DatabasePkTableTableNameSchemaNameIndex(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.database[':pk'].table[':table_name'][':schema_name'].index.$get(args, options),
  )
}

export async function getApiV1DatabasePkTableExtraTableNameSchemaNameIndex(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['table_extra'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.database[':pk'].table_extra[':table_name'][':schema_name'].index.$get(
      args,
      options,
    ),
  )
}

export async function getApiV1DatabasePkTableMetadataIndex(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['table_metadata']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.database[':pk'].table_metadata.index.$get(args, options))
}

export async function getApiV1DatabasePkTableMetadataExtraIndex(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['table_metadata']['extra']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.database[':pk'].table_metadata.extra.index.$get(args, options),
  )
}

export async function getApiV1DatabasePkTablesIndex(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['tables']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.database[':pk'].tables.index.$get(args, options))
}

export async function postApiV1DatabasePkUploadIndex(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['upload']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.database[':pk'].upload.index.$post(args, options))
}

export async function postApiV1DatabasePkValidateSqlIndex(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['validate_sql']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.database[':pk'].validate_sql.index.$post(args, options))
}

export async function getApiV1DatasetIndex(
  args: InferRequestType<typeof client.api.v1.dataset.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dataset.index.$get(args, options))
}

export async function postApiV1DatasetIndex(
  args: InferRequestType<typeof client.api.v1.dataset.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dataset.index.$post(args, options))
}

export async function deleteApiV1DatasetIndex(
  args: InferRequestType<typeof client.api.v1.dataset.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dataset.index.$delete(args, options))
}

export async function getApiV1DatasetInfo(
  args: InferRequestType<typeof client.api.v1.dataset._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dataset._info.$get(args, options))
}

export async function getApiV1DatasetDistinctColumnName(
  args: InferRequestType<(typeof client.api.v1.dataset.distinct)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dataset.distinct[':column_name'].$get(args, options))
}

export async function postApiV1DatasetDuplicate(
  args: InferRequestType<typeof client.api.v1.dataset.duplicate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dataset.duplicate.$post(args, options))
}

export async function getApiV1DatasetExportIndex(
  args: InferRequestType<typeof client.api.v1.dataset.export.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dataset.export.index.$get(args, options))
}

export async function postApiV1DatasetGetOrCreateIndex(
  args: InferRequestType<typeof client.api.v1.dataset.get_or_create.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dataset.get_or_create.index.$post(args, options))
}

export async function postApiV1DatasetImportIndex(
  args: InferRequestType<typeof client.api.v1.dataset.import.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dataset.import.index.$post(args, options))
}

export async function getApiV1DatasetRelatedColumnName(
  args: InferRequestType<(typeof client.api.v1.dataset.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dataset.related[':column_name'].$get(args, options))
}

export async function getApiV1DatasetRelatedObjectsIndex(
  args: InferRequestType<typeof client.api.v1.dataset.related_objects.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dataset.related_objects.index.$get(args, options))
}

export async function putApiV1DatasetWarmUpCache(
  args: InferRequestType<typeof client.api.v1.dataset.warm_up_cache.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dataset.warm_up_cache.$put(args, options))
}

export async function getApiV1DatasetIdOrUuid(
  args: InferRequestType<(typeof client.api.v1.dataset)[':id_or_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dataset[':id_or_uuid'].$get(args, options))
}

export async function getApiV1DatasetIdOrUuidRelatedObjects(
  args: InferRequestType<(typeof client.api.v1.dataset)[':id_or_uuid']['related_objects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.dataset[':id_or_uuid'].related_objects.$get(args, options),
  )
}

export async function putApiV1DatasetPk(
  args: InferRequestType<(typeof client.api.v1.dataset)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dataset[':pk'].$put(args, options))
}

export async function deleteApiV1DatasetPk(
  args: InferRequestType<(typeof client.api.v1.dataset)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dataset[':pk'].$delete(args, options))
}

export async function deleteApiV1DatasetPkColumnColumnId(
  args: InferRequestType<(typeof client.api.v1.dataset)[':pk']['column'][':column_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.dataset[':pk'].column[':column_id'].$delete(args, options),
  )
}

export async function getApiV1DatasetPkDrillInfoIndex(
  args: InferRequestType<(typeof client.api.v1.dataset)[':pk']['drill_info']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dataset[':pk'].drill_info.index.$get(args, options))
}

export async function deleteApiV1DatasetPkMetricMetricId(
  args: InferRequestType<(typeof client.api.v1.dataset)[':pk']['metric'][':metric_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.dataset[':pk'].metric[':metric_id'].$delete(args, options),
  )
}

export async function postApiV1DatasetPkPartitionMappingPreviewIndex(
  args: InferRequestType<
    (typeof client.api.v1.dataset)[':pk']['partition_mapping']['preview']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.dataset[':pk'].partition_mapping.preview.index.$post(args, options),
  )
}

export async function putApiV1DatasetPkRefresh(
  args: InferRequestType<(typeof client.api.v1.dataset)[':pk']['refresh']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dataset[':pk'].refresh.$put(args, options))
}

export async function getApiV1DatasetUuidStrActivityIndex(
  args: InferRequestType<(typeof client.api.v1.dataset)[':uuid_str']['activity']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dataset[':uuid_str'].activity.index.$get(args, options))
}

export async function getApiV1DatasetUuidStrVersionsIndex(
  args: InferRequestType<(typeof client.api.v1.dataset)[':uuid_str']['versions']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dataset[':uuid_str'].versions.index.$get(args, options))
}

export async function getApiV1DatasetUuidStrVersionsVersionUuidStrIndex(
  args: InferRequestType<
    (typeof client.api.v1.dataset)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.dataset[':uuid_str'].versions[':version_uuid_str'].index.$get(args, options),
  )
}

export async function postApiV1DatasetUuidStrVersionsVersionUuidStrRestore(
  args: InferRequestType<
    (typeof client.api.v1.dataset)[':uuid_str']['versions'][':version_uuid_str']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.dataset[':uuid_str'].versions[':version_uuid_str'].restore.$post(args, options),
  )
}

export async function postApiV1DatasetUuidPurge(
  args: InferRequestType<(typeof client.api.v1.dataset)[':uuid']['purge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dataset[':uuid'].purge.$post(args, options))
}

export async function getApiV1DatasetUuidPurgeImpact(
  args: InferRequestType<(typeof client.api.v1.dataset)[':uuid']['purge-impact']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dataset[':uuid']['purge-impact'].$get(args, options))
}

export async function postApiV1DatasetUuidRestore(
  args: InferRequestType<(typeof client.api.v1.dataset)[':uuid']['restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.dataset[':uuid'].restore.$post(args, options))
}

export async function getApiV1DatasourceIndex(
  args: InferRequestType<typeof client.api.v1.datasource.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.datasource.index.$get(args, options))
}

export async function getApiV1DatasourceDatasourceTypeDatasourceId(
  args: InferRequestType<
    (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.datasource[':datasource_type'][':datasource_id'].$get(args, options),
  )
}

export async function getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndex(
  args: InferRequestType<
    (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['column'][':column_name']['values']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.datasource[':datasource_type'][':datasource_id'].column[
      ':column_name'
    ].values.index.$get(args, options),
  )
}

export async function postApiV1DatasourceDatasourceTypeDatasourceIdCompatible(
  args: InferRequestType<
    (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['compatible']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.datasource[':datasource_type'][':datasource_id'].compatible.$post(args, options),
  )
}

export async function postApiV1DatasourceDatasourceTypeDatasourceIdQuery(
  args: InferRequestType<
    (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['query']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.datasource[':datasource_type'][':datasource_id'].query.$post(args, options),
  )
}

export async function postApiV1DatasourceDatasourceTypeDatasourceIdValidateExpressionIndex(
  args: InferRequestType<
    (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['validate_expression']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.datasource[':datasource_type'][':datasource_id'].validate_expression.index.$post(
      args,
      options,
    ),
  )
}

export async function getApiV1EmbeddedDashboardUuid(
  args: InferRequestType<(typeof client.api.v1.embedded_dashboard)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.embedded_dashboard[':uuid'].$get(args, options))
}

export async function getApiV1ExploreIndex(
  args: InferRequestType<typeof client.api.v1.explore.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.explore.index.$get(args, options))
}

export async function postApiV1ExploreFormData(
  args: InferRequestType<typeof client.api.v1.explore.form_data.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.explore.form_data.$post(args, options))
}

export async function getApiV1ExploreFormDataKey(
  args: InferRequestType<(typeof client.api.v1.explore.form_data)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.explore.form_data[':key'].$get(args, options))
}

export async function putApiV1ExploreFormDataKey(
  args: InferRequestType<(typeof client.api.v1.explore.form_data)[':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.explore.form_data[':key'].$put(args, options))
}

export async function deleteApiV1ExploreFormDataKey(
  args: InferRequestType<(typeof client.api.v1.explore.form_data)[':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.explore.form_data[':key'].$delete(args, options))
}

export async function postApiV1ExplorePermalink(
  args: InferRequestType<typeof client.api.v1.explore.permalink.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.explore.permalink.$post(args, options))
}

export async function getApiV1ExplorePermalinkKey(
  args: InferRequestType<(typeof client.api.v1.explore.permalink)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.explore.permalink[':key'].$get(args, options))
}

export async function getApiV1LogIndex(
  args: InferRequestType<typeof client.api.v1.log.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.log.index.$get(args, options))
}

export async function postApiV1LogIndex(
  args: InferRequestType<typeof client.api.v1.log.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.log.index.$post(args, options))
}

export async function getApiV1LogRecentActivityIndex(
  args: InferRequestType<typeof client.api.v1.log.recent_activity.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.log.recent_activity.index.$get(args, options))
}

export async function getApiV1LogPk(
  args: InferRequestType<(typeof client.api.v1.log)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.log[':pk'].$get(args, options))
}

export async function getApiV1MeIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.me.index.$get(undefined, options))
}

export async function putApiV1MeIndex(
  args: InferRequestType<typeof client.api.v1.me.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.me.index.$put(args, options))
}

export async function getApiV1MeApiKeyScopesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.me.api_key_scopes.index.$get(undefined, options))
}

export async function getApiV1MeRolesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.me.roles.index.$get(undefined, options))
}

export async function getApiV1MenuIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.menu.index.$get(undefined, options))
}

export async function getApiV1QueryIndex(
  args: InferRequestType<typeof client.api.v1.query.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.query.index.$get(args, options))
}

export async function getApiV1QueryDistinctColumnName(
  args: InferRequestType<(typeof client.api.v1.query.distinct)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.query.distinct[':column_name'].$get(args, options))
}

export async function getApiV1QueryRelatedColumnName(
  args: InferRequestType<(typeof client.api.v1.query.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.query.related[':column_name'].$get(args, options))
}

export async function postApiV1QueryStop(
  args: InferRequestType<typeof client.api.v1.query.stop.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.query.stop.$post(args, options))
}

export async function getApiV1QueryUpdatedSince(
  args: InferRequestType<typeof client.api.v1.query.updated_since.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.query.updated_since.$get(args, options))
}

export async function getApiV1QueryPk(
  args: InferRequestType<(typeof client.api.v1.query)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.query[':pk'].$get(args, options))
}

export async function getApiV1ReportIndex(
  args: InferRequestType<typeof client.api.v1.report.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.report.index.$get(args, options))
}

export async function postApiV1ReportIndex(
  args: InferRequestType<typeof client.api.v1.report.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.report.index.$post(args, options))
}

export async function deleteApiV1ReportIndex(
  args: InferRequestType<typeof client.api.v1.report.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.report.index.$delete(args, options))
}

export async function getApiV1ReportInfo(
  args: InferRequestType<typeof client.api.v1.report._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.report._info.$get(args, options))
}

export async function getApiV1ReportConfigurationIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.report.configuration.index.$get(undefined, options))
}

export async function putApiV1ReportConfigurationIndex(
  args: InferRequestType<typeof client.api.v1.report.configuration.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.report.configuration.index.$put(args, options))
}

export async function getApiV1ReportRelatedColumnName(
  args: InferRequestType<(typeof client.api.v1.report.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.report.related[':column_name'].$get(args, options))
}

export async function getApiV1ReportSlackChannelsIndex(
  args: InferRequestType<typeof client.api.v1.report.slack_channels.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.report.slack_channels.index.$get(args, options))
}

export async function postApiV1ReportSubscribe(
  args: InferRequestType<typeof client.api.v1.report.subscribe.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.report.subscribe.$post(args, options))
}

export async function getApiV1ReportPk(
  args: InferRequestType<(typeof client.api.v1.report)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.report[':pk'].$get(args, options))
}

export async function putApiV1ReportPk(
  args: InferRequestType<(typeof client.api.v1.report)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.report[':pk'].$put(args, options))
}

export async function deleteApiV1ReportPk(
  args: InferRequestType<(typeof client.api.v1.report)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.report[':pk'].$delete(args, options))
}

export async function postApiV1ReportPkExecute(
  args: InferRequestType<(typeof client.api.v1.report)[':pk']['execute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.report[':pk'].execute.$post(args, options))
}

export async function getApiV1ReportPkLogIndex(
  args: InferRequestType<(typeof client.api.v1.report)[':pk']['log']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.report[':pk'].log.index.$get(args, options))
}

export async function getApiV1ReportPkLogLogId(
  args: InferRequestType<(typeof client.api.v1.report)[':pk']['log'][':log_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.report[':pk'].log[':log_id'].$get(args, options))
}

export async function getApiV1RowlevelsecurityIndex(
  args: InferRequestType<typeof client.api.v1.rowlevelsecurity.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.rowlevelsecurity.index.$get(args, options))
}

export async function postApiV1RowlevelsecurityIndex(
  args: InferRequestType<typeof client.api.v1.rowlevelsecurity.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.rowlevelsecurity.index.$post(args, options))
}

export async function deleteApiV1RowlevelsecurityIndex(
  args: InferRequestType<typeof client.api.v1.rowlevelsecurity.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.rowlevelsecurity.index.$delete(args, options))
}

export async function getApiV1RowlevelsecurityInfo(
  args: InferRequestType<typeof client.api.v1.rowlevelsecurity._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.rowlevelsecurity._info.$get(args, options))
}

export async function getApiV1RowlevelsecurityRelatedColumnName(
  args: InferRequestType<(typeof client.api.v1.rowlevelsecurity.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.rowlevelsecurity.related[':column_name'].$get(args, options),
  )
}

export async function getApiV1RowlevelsecurityPk(
  args: InferRequestType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.rowlevelsecurity[':pk'].$get(args, options))
}

export async function putApiV1RowlevelsecurityPk(
  args: InferRequestType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.rowlevelsecurity[':pk'].$put(args, options))
}

export async function deleteApiV1RowlevelsecurityPk(
  args: InferRequestType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.rowlevelsecurity[':pk'].$delete(args, options))
}

export async function getApiV1SavedQueryIndex(
  args: InferRequestType<typeof client.api.v1.saved_query.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.saved_query.index.$get(args, options))
}

export async function postApiV1SavedQueryIndex(
  args: InferRequestType<typeof client.api.v1.saved_query.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.saved_query.index.$post(args, options))
}

export async function deleteApiV1SavedQueryIndex(
  args: InferRequestType<typeof client.api.v1.saved_query.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.saved_query.index.$delete(args, options))
}

export async function getApiV1SavedQueryInfo(
  args: InferRequestType<typeof client.api.v1.saved_query._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.saved_query._info.$get(args, options))
}

export async function getApiV1SavedQueryDistinctColumnName(
  args: InferRequestType<(typeof client.api.v1.saved_query.distinct)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.saved_query.distinct[':column_name'].$get(args, options))
}

export async function getApiV1SavedQueryExportIndex(
  args: InferRequestType<typeof client.api.v1.saved_query.export.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.saved_query.export.index.$get(args, options))
}

export async function postApiV1SavedQueryImportIndex(
  args: InferRequestType<typeof client.api.v1.saved_query.import.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.saved_query.import.index.$post(args, options))
}

export async function getApiV1SavedQueryRelatedColumnName(
  args: InferRequestType<(typeof client.api.v1.saved_query.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.saved_query.related[':column_name'].$get(args, options))
}

export async function getApiV1SavedQueryPk(
  args: InferRequestType<(typeof client.api.v1.saved_query)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.saved_query[':pk'].$get(args, options))
}

export async function putApiV1SavedQueryPk(
  args: InferRequestType<(typeof client.api.v1.saved_query)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.saved_query[':pk'].$put(args, options))
}

export async function deleteApiV1SavedQueryPk(
  args: InferRequestType<(typeof client.api.v1.saved_query)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.saved_query[':pk'].$delete(args, options))
}

export async function getApiV1SecurityCsrfTokenIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.security.csrf_token.index.$get(undefined, options))
}

export async function getApiV1SecurityGroupsIndex(
  args: InferRequestType<typeof client.api.v1.security.groups.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.groups.index.$get(args, options))
}

export async function postApiV1SecurityGroupsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.security.groups.index.$post(undefined, options))
}

export async function getApiV1SecurityGroupsInfo(
  args: InferRequestType<typeof client.api.v1.security.groups._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.groups._info.$get(args, options))
}

export async function getApiV1SecurityGroupsPk(
  args: InferRequestType<(typeof client.api.v1.security.groups)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.groups[':pk'].$get(args, options))
}

export async function putApiV1SecurityGroupsPk(
  args: InferRequestType<(typeof client.api.v1.security.groups)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.groups[':pk'].$put(args, options))
}

export async function deleteApiV1SecurityGroupsPk(
  args: InferRequestType<(typeof client.api.v1.security.groups)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.groups[':pk'].$delete(args, options))
}

export async function postApiV1SecurityGuestTokenIndex(
  args: InferRequestType<typeof client.api.v1.security.guest_token.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.guest_token.index.$post(args, options))
}

export async function postApiV1SecurityLogin(
  args: InferRequestType<typeof client.api.v1.security.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.login.$post(args, options))
}

export async function postApiV1SecurityPasswordRecoveryIndex(
  args: InferRequestType<typeof client.api.v1.security.password_recovery.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.password_recovery.index.$post(args, options))
}

export async function postApiV1SecurityPasswordRecoveryResetIndex(
  args: InferRequestType<typeof client.api.v1.security.password_recovery.reset.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.security.password_recovery.reset.index.$post(args, options),
  )
}

export async function getApiV1SecurityPermissionsResourcesIndex(
  args: InferRequestType<(typeof client.api.v1.security)['permissions-resources']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.security['permissions-resources'].index.$get(args, options),
  )
}

export async function postApiV1SecurityPermissionsResourcesIndex(
  args: InferRequestType<
    (typeof client.api.v1.security)['permissions-resources']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.security['permissions-resources'].index.$post(args, options),
  )
}

export async function getApiV1SecurityPermissionsResourcesInfo(
  args: InferRequestType<(typeof client.api.v1.security)['permissions-resources']['_info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.security['permissions-resources']._info.$get(args, options),
  )
}

export async function getApiV1SecurityPermissionsResourcesPk(
  args: InferRequestType<(typeof client.api.v1.security)['permissions-resources'][':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.security['permissions-resources'][':pk'].$get(args, options),
  )
}

export async function putApiV1SecurityPermissionsResourcesPk(
  args: InferRequestType<(typeof client.api.v1.security)['permissions-resources'][':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.security['permissions-resources'][':pk'].$put(args, options),
  )
}

export async function deleteApiV1SecurityPermissionsResourcesPk(
  args: InferRequestType<
    (typeof client.api.v1.security)['permissions-resources'][':pk']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.security['permissions-resources'][':pk'].$delete(args, options),
  )
}

export async function getApiV1SecurityPermissionsIndex(
  args: InferRequestType<typeof client.api.v1.security.permissions.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.permissions.index.$get(args, options))
}

export async function getApiV1SecurityPermissionsInfo(
  args: InferRequestType<typeof client.api.v1.security.permissions._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.permissions._info.$get(args, options))
}

export async function getApiV1SecurityPermissionsPk(
  args: InferRequestType<(typeof client.api.v1.security.permissions)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.permissions[':pk'].$get(args, options))
}

export async function postApiV1SecurityRefresh(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.security.refresh.$post(undefined, options))
}

export async function getApiV1SecurityResourcesIndex(
  args: InferRequestType<typeof client.api.v1.security.resources.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.resources.index.$get(args, options))
}

export async function postApiV1SecurityResourcesIndex(
  args: InferRequestType<typeof client.api.v1.security.resources.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.resources.index.$post(args, options))
}

export async function getApiV1SecurityResourcesInfo(
  args: InferRequestType<typeof client.api.v1.security.resources._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.resources._info.$get(args, options))
}

export async function getApiV1SecurityResourcesPk(
  args: InferRequestType<(typeof client.api.v1.security.resources)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.resources[':pk'].$get(args, options))
}

export async function putApiV1SecurityResourcesPk(
  args: InferRequestType<(typeof client.api.v1.security.resources)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.resources[':pk'].$put(args, options))
}

export async function deleteApiV1SecurityResourcesPk(
  args: InferRequestType<(typeof client.api.v1.security.resources)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.resources[':pk'].$delete(args, options))
}

export async function getApiV1SecurityRolesIndex(
  args: InferRequestType<typeof client.api.v1.security.roles.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.roles.index.$get(args, options))
}

export async function postApiV1SecurityRolesIndex(
  args: InferRequestType<typeof client.api.v1.security.roles.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.roles.index.$post(args, options))
}

export async function getApiV1SecurityRolesInfo(
  args: InferRequestType<typeof client.api.v1.security.roles._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.roles._info.$get(args, options))
}

export async function getApiV1SecurityRolesSearchIndex(
  args: InferRequestType<typeof client.api.v1.security.roles.search.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.roles.search.index.$get(args, options))
}

export async function getApiV1SecurityRolesPk(
  args: InferRequestType<(typeof client.api.v1.security.roles)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.roles[':pk'].$get(args, options))
}

export async function putApiV1SecurityRolesPk(
  args: InferRequestType<(typeof client.api.v1.security.roles)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.roles[':pk'].$put(args, options))
}

export async function deleteApiV1SecurityRolesPk(
  args: InferRequestType<(typeof client.api.v1.security.roles)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.roles[':pk'].$delete(args, options))
}

export async function putApiV1SecurityRolesRoleIdGroups(
  args: InferRequestType<(typeof client.api.v1.security.roles)[':role_id']['groups']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.roles[':role_id'].groups.$put(args, options))
}

export async function postApiV1SecurityRolesRoleIdPermissions(
  args: InferRequestType<(typeof client.api.v1.security.roles)[':role_id']['permissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.security.roles[':role_id'].permissions.$post(args, options),
  )
}

export async function getApiV1SecurityRolesRoleIdPermissionsIndex(
  args: InferRequestType<
    (typeof client.api.v1.security.roles)[':role_id']['permissions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.security.roles[':role_id'].permissions.index.$get(args, options),
  )
}

export async function putApiV1SecurityRolesRoleIdUsers(
  args: InferRequestType<(typeof client.api.v1.security.roles)[':role_id']['users']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.roles[':role_id'].users.$put(args, options))
}

export async function getApiV1SecuritySubjectIndex(
  args: InferRequestType<typeof client.api.v1.security.subject.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.subject.index.$get(args, options))
}

export async function getApiV1SecuritySubjectInfo(
  args: InferRequestType<typeof client.api.v1.security.subject._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.subject._info.$get(args, options))
}

export async function getApiV1SecuritySubjectPk(
  args: InferRequestType<(typeof client.api.v1.security.subject)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.subject[':pk'].$get(args, options))
}

export async function getApiV1SecurityUserRegistrationsIndex(
  args: InferRequestType<typeof client.api.v1.security.user_registrations.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.user_registrations.index.$get(args, options))
}

export async function getApiV1SecurityUserRegistrationsInfo(
  args: InferRequestType<typeof client.api.v1.security.user_registrations._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.user_registrations._info.$get(args, options))
}

export async function getApiV1SecurityUserRegistrationsPk(
  args: InferRequestType<(typeof client.api.v1.security.user_registrations)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.user_registrations[':pk'].$get(args, options))
}

export async function deleteApiV1SecurityUserRegistrationsPk(
  args: InferRequestType<(typeof client.api.v1.security.user_registrations)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.security.user_registrations[':pk'].$delete(args, options),
  )
}

export async function getApiV1SecurityUsersIndex(
  args: InferRequestType<typeof client.api.v1.security.users.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.users.index.$get(args, options))
}

export async function postApiV1SecurityUsersIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.security.users.index.$post(undefined, options))
}

export async function getApiV1SecurityUsersInfo(
  args: InferRequestType<typeof client.api.v1.security.users._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.users._info.$get(args, options))
}

export async function getApiV1SecurityUsersPk(
  args: InferRequestType<(typeof client.api.v1.security.users)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.users[':pk'].$get(args, options))
}

export async function putApiV1SecurityUsersPk(
  args: InferRequestType<(typeof client.api.v1.security.users)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.users[':pk'].$put(args, options))
}

export async function deleteApiV1SecurityUsersPk(
  args: InferRequestType<(typeof client.api.v1.security.users)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.users[':pk'].$delete(args, options))
}

export async function deleteApiV1SecurityUsersPkSessions(
  args: InferRequestType<(typeof client.api.v1.security.users)[':pk']['sessions']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.security.users[':pk'].sessions.$delete(args, options))
}

export async function getApiV1SemanticLayerIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.semantic_layer.index.$get(undefined, options))
}

export async function postApiV1SemanticLayerIndex(
  args: InferRequestType<typeof client.api.v1.semantic_layer.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.semantic_layer.index.$post(args, options))
}

export async function getApiV1SemanticLayerConnectionsIndex(
  args: InferRequestType<typeof client.api.v1.semantic_layer.connections.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.semantic_layer.connections.index.$get(args, options))
}

export async function postApiV1SemanticLayerSchemaConfiguration(
  args: InferRequestType<typeof client.api.v1.semantic_layer.schema.configuration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.semantic_layer.schema.configuration.$post(args, options))
}

export async function getApiV1SemanticLayerTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.semantic_layer.types.$get(undefined, options))
}

export async function getApiV1SemanticLayerUuid(
  args: InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.semantic_layer[':uuid'].$get(args, options))
}

export async function putApiV1SemanticLayerUuid(
  args: InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.semantic_layer[':uuid'].$put(args, options))
}

export async function deleteApiV1SemanticLayerUuid(
  args: InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.semantic_layer[':uuid'].$delete(args, options))
}

export async function postApiV1SemanticLayerUuidClearCache(
  args: InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['clear_cache']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.semantic_layer[':uuid'].clear_cache.$post(args, options))
}

export async function postApiV1SemanticLayerUuidSchemaRuntime(
  args: InferRequestType<
    (typeof client.api.v1.semantic_layer)[':uuid']['schema']['runtime']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.semantic_layer[':uuid'].schema.runtime.$post(args, options),
  )
}

export async function postApiV1SemanticLayerUuidViews(
  args: InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['views']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.semantic_layer[':uuid'].views.$post(args, options))
}

export async function postApiV1SemanticViewIndex(
  args: InferRequestType<typeof client.api.v1.semantic_view.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.semantic_view.index.$post(args, options))
}

export async function deleteApiV1SemanticViewIndex(
  args: InferRequestType<typeof client.api.v1.semantic_view.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.semantic_view.index.$delete(args, options))
}

export async function putApiV1SemanticViewPk(
  args: InferRequestType<(typeof client.api.v1.semantic_view)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.semantic_view[':pk'].$put(args, options))
}

export async function deleteApiV1SemanticViewPk(
  args: InferRequestType<(typeof client.api.v1.semantic_view)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.semantic_view[':pk'].$delete(args, options))
}

export async function getApiV1SemanticViewPkStructure(
  args: InferRequestType<(typeof client.api.v1.semantic_view)[':pk']['structure']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.semantic_view[':pk'].structure.$get(args, options))
}

export async function getApiV1SqllabIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.sqllab.index.$get(undefined, options))
}

export async function postApiV1SqllabEstimateIndex(
  args: InferRequestType<typeof client.api.v1.sqllab.estimate.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sqllab.estimate.index.$post(args, options))
}

export async function postApiV1SqllabExecuteIndex(
  args: InferRequestType<typeof client.api.v1.sqllab.execute.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sqllab.execute.index.$post(args, options))
}

export async function getApiV1SqllabExportClientIdIndex(
  args: InferRequestType<(typeof client.api.v1.sqllab.export)[':client_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sqllab.export[':client_id'].index.$get(args, options))
}

export async function postApiV1SqllabExportStreamingIndex(
  args: InferRequestType<typeof client.api.v1.sqllab.export_streaming.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sqllab.export_streaming.index.$post(args, options))
}

export async function postApiV1SqllabFormatSqlIndex(
  args: InferRequestType<typeof client.api.v1.sqllab.format_sql.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sqllab.format_sql.index.$post(args, options))
}

export async function postApiV1SqllabPermalink(
  args: InferRequestType<typeof client.api.v1.sqllab.permalink.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sqllab.permalink.$post(args, options))
}

export async function getApiV1SqllabPermalinkKey(
  args: InferRequestType<(typeof client.api.v1.sqllab.permalink)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sqllab.permalink[':key'].$get(args, options))
}

export async function getApiV1SqllabResultsIndex(
  args: InferRequestType<typeof client.api.v1.sqllab.results.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sqllab.results.index.$get(args, options))
}

export async function getApiV1TagIndex(
  args: InferRequestType<typeof client.api.v1.tag.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tag.index.$get(args, options))
}

export async function postApiV1TagIndex(
  args: InferRequestType<typeof client.api.v1.tag.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tag.index.$post(args, options))
}

export async function deleteApiV1TagIndex(
  args: InferRequestType<typeof client.api.v1.tag.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tag.index.$delete(args, options))
}

export async function getApiV1TagInfo(
  args: InferRequestType<typeof client.api.v1.tag._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tag._info.$get(args, options))
}

export async function postApiV1TagBulkCreate(
  args: InferRequestType<typeof client.api.v1.tag.bulk_create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tag.bulk_create.$post(args, options))
}

export async function getApiV1TagFavoriteStatusIndex(
  args: InferRequestType<typeof client.api.v1.tag.favorite_status.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tag.favorite_status.index.$get(args, options))
}

export async function getApiV1TagGetObjectsIndex(
  args: InferRequestType<typeof client.api.v1.tag.get_objects.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tag.get_objects.index.$get(args, options))
}

export async function getApiV1TagRelatedColumnName(
  args: InferRequestType<(typeof client.api.v1.tag.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tag.related[':column_name'].$get(args, options))
}

export async function postApiV1TagObjectTypeObjectIdIndex(
  args: InferRequestType<
    (typeof client.api.v1.tag)[':object_type'][':object_id']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.tag[':object_type'][':object_id'].index.$post(args, options),
  )
}

export async function deleteApiV1TagObjectTypeObjectIdTagIndex(
  args: InferRequestType<
    (typeof client.api.v1.tag)[':object_type'][':object_id'][':tag']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.tag[':object_type'][':object_id'][':tag'].index.$delete(args, options),
  )
}

export async function getApiV1TagPk(
  args: InferRequestType<(typeof client.api.v1.tag)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tag[':pk'].$get(args, options))
}

export async function putApiV1TagPk(
  args: InferRequestType<(typeof client.api.v1.tag)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tag[':pk'].$put(args, options))
}

export async function deleteApiV1TagPk(
  args: InferRequestType<(typeof client.api.v1.tag)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tag[':pk'].$delete(args, options))
}

export async function postApiV1TagPkFavoritesIndex(
  args: InferRequestType<(typeof client.api.v1.tag)[':pk']['favorites']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tag[':pk'].favorites.index.$post(args, options))
}

export async function deleteApiV1TagPkFavoritesIndex(
  args: InferRequestType<(typeof client.api.v1.tag)[':pk']['favorites']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tag[':pk'].favorites.index.$delete(args, options))
}

export async function getApiV1ThemeIndex(
  args: InferRequestType<typeof client.api.v1.theme.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.theme.index.$get(args, options))
}

export async function postApiV1ThemeIndex(
  args: InferRequestType<typeof client.api.v1.theme.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.theme.index.$post(args, options))
}

export async function deleteApiV1ThemeIndex(
  args: InferRequestType<typeof client.api.v1.theme.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.theme.index.$delete(args, options))
}

export async function getApiV1ThemeInfo(
  args: InferRequestType<typeof client.api.v1.theme._info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.theme._info.$get(args, options))
}

export async function getApiV1ThemeExportIndex(
  args: InferRequestType<typeof client.api.v1.theme.export.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.theme.export.index.$get(args, options))
}

export async function postApiV1ThemeImportIndex(
  args: InferRequestType<typeof client.api.v1.theme.import.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.theme.import.index.$post(args, options))
}

export async function getApiV1ThemeRelatedColumnName(
  args: InferRequestType<(typeof client.api.v1.theme.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.theme.related[':column_name'].$get(args, options))
}

export async function getApiV1ThemeSystem(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.theme.system.$get(undefined, options))
}

export async function deleteApiV1ThemeUnsetSystemDark(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.theme.unset_system_dark.$delete(undefined, options))
}

export async function deleteApiV1ThemeUnsetSystemDefault(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.theme.unset_system_default.$delete(undefined, options))
}

export async function getApiV1ThemePk(
  args: InferRequestType<(typeof client.api.v1.theme)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.theme[':pk'].$get(args, options))
}

export async function putApiV1ThemePk(
  args: InferRequestType<(typeof client.api.v1.theme)[':pk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.theme[':pk'].$put(args, options))
}

export async function deleteApiV1ThemePk(
  args: InferRequestType<(typeof client.api.v1.theme)[':pk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.theme[':pk'].$delete(args, options))
}

export async function putApiV1ThemePkSetSystemDark(
  args: InferRequestType<(typeof client.api.v1.theme)[':pk']['set_system_dark']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.theme[':pk'].set_system_dark.$put(args, options))
}

export async function putApiV1ThemePkSetSystemDefault(
  args: InferRequestType<(typeof client.api.v1.theme)[':pk']['set_system_default']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.theme[':pk'].set_system_default.$put(args, options))
}

export async function getApiV1UserUserIdAvatarPng(
  args: InferRequestType<(typeof client.api.v1.user)[':user_id']['avatar.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.user[':user_id']['avatar.png'].$get(args, options))
}
