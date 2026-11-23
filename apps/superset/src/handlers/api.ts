import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiV1AnnotationLayerIndexRoute,
  deleteApiV1AnnotationLayerPkAnnotationAnnotationIdRoute,
  deleteApiV1AnnotationLayerPkAnnotationIndexRoute,
  deleteApiV1AnnotationLayerPkRoute,
  deleteApiV1ChartIndexRoute,
  deleteApiV1ChartPkFavoritesIndexRoute,
  deleteApiV1ChartPkRoute,
  deleteApiV1CssTemplateIndexRoute,
  deleteApiV1CssTemplatePkRoute,
  deleteApiV1DashboardIdOrSlugEmbeddedRoute,
  deleteApiV1DashboardIndexRoute,
  deleteApiV1DashboardPkFavoritesIndexRoute,
  deleteApiV1DashboardPkFilterStateKeyRoute,
  deleteApiV1DashboardPkRoute,
  deleteApiV1DatabasePkRoute,
  deleteApiV1DatasetIndexRoute,
  deleteApiV1DatasetPkColumnColumnIdRoute,
  deleteApiV1DatasetPkMetricMetricIdRoute,
  deleteApiV1DatasetPkRoute,
  deleteApiV1ExploreFormDataKeyRoute,
  deleteApiV1ReportIndexRoute,
  deleteApiV1ReportPkRoute,
  deleteApiV1RowlevelsecurityIndexRoute,
  deleteApiV1RowlevelsecurityPkRoute,
  deleteApiV1SavedQueryIndexRoute,
  deleteApiV1SavedQueryPkRoute,
  deleteApiV1SecurityGroupsPkRoute,
  deleteApiV1SecurityPermissionsResourcesPkRoute,
  deleteApiV1SecurityResourcesPkRoute,
  deleteApiV1SecurityRolesPkRoute,
  deleteApiV1SecurityUserRegistrationsPkRoute,
  deleteApiV1SecurityUsersPkRoute,
  deleteApiV1SecurityUsersPkSessionsRoute,
  deleteApiV1SemanticLayerUuidRoute,
  deleteApiV1SemanticViewIndexRoute,
  deleteApiV1SemanticViewPkRoute,
  deleteApiV1TagIndexRoute,
  deleteApiV1TagObjectTypeObjectIdTagIndexRoute,
  deleteApiV1TagPkFavoritesIndexRoute,
  deleteApiV1TagPkRoute,
  deleteApiV1ThemeIndexRoute,
  deleteApiV1ThemePkRoute,
  deleteApiV1ThemeUnsetSystemDarkRoute,
  deleteApiV1ThemeUnsetSystemDefaultRoute,
  getApiV1AdvancedDataTypeConvertRoute,
  getApiV1AdvancedDataTypeTypesRoute,
  getApiV1AnnotationLayerIndexRoute,
  getApiV1AnnotationLayerInfoRoute,
  getApiV1AnnotationLayerPkAnnotationAnnotationIdRoute,
  getApiV1AnnotationLayerPkAnnotationIndexRoute,
  getApiV1AnnotationLayerPkRoute,
  getApiV1AnnotationLayerRelatedColumnNameRoute,
  getApiV1AssetsExportIndexRoute,
  getApiV1AvailableDomainsIndexRoute,
  getApiV1ChartExportIndexRoute,
  getApiV1ChartFavoriteStatusIndexRoute,
  getApiV1ChartIdOrUuidRoute,
  getApiV1ChartIndexRoute,
  getApiV1ChartInfoRoute,
  getApiV1ChartPkCacheScreenshotIndexRoute,
  getApiV1ChartPkDataIndexRoute,
  getApiV1ChartPkDeckLayersIndexRoute,
  getApiV1ChartPkScreenshotDigestIndexRoute,
  getApiV1ChartPkThumbnailDigestIndexRoute,
  getApiV1ChartRelatedColumnNameRoute,
  getApiV1ChartUuidStrActivityIndexRoute,
  getApiV1ChartUuidStrVersionsIndexRoute,
  getApiV1ChartUuidStrVersionsVersionUuidStrIndexRoute,
  getApiV1CssTemplateIndexRoute,
  getApiV1CssTemplateInfoRoute,
  getApiV1CssTemplatePkRoute,
  getApiV1CssTemplateRelatedColumnNameRoute,
  getApiV1DashboardExportIndexRoute,
  getApiV1DashboardExportXlsxDownloadJobIdIndexRoute,
  getApiV1DashboardExportXlsxStatusJobIdIndexRoute,
  getApiV1DashboardFavoriteStatusIndexRoute,
  getApiV1DashboardIdOrSlugChartsRoute,
  getApiV1DashboardIdOrSlugDatasetsRoute,
  getApiV1DashboardIdOrSlugEmbeddedRoute,
  getApiV1DashboardIdOrSlugRoute,
  getApiV1DashboardIdOrSlugTabsRoute,
  getApiV1DashboardIndexRoute,
  getApiV1DashboardInfoRoute,
  getApiV1DashboardPermalinkKeyRoute,
  getApiV1DashboardPkExportAsExampleIndexRoute,
  getApiV1DashboardPkFilterStateKeyRoute,
  getApiV1DashboardPkScreenshotDigestIndexRoute,
  getApiV1DashboardPkThumbnailDigestIndexRoute,
  getApiV1DashboardRelatedColumnNameRoute,
  getApiV1DashboardUuidStrActivityIndexRoute,
  getApiV1DashboardUuidStrVersionsIndexRoute,
  getApiV1DashboardUuidStrVersionsVersionUuidStrIndexRoute,
  getApiV1DatabaseAvailableIndexRoute,
  getApiV1DatabaseExportIndexRoute,
  getApiV1DatabaseIndexRoute,
  getApiV1DatabaseInfoRoute,
  getApiV1DatabaseOauth2IndexRoute,
  getApiV1DatabasePkCatalogsIndexRoute,
  getApiV1DatabasePkConnectionRoute,
  getApiV1DatabasePkEncryptedExtraHintsIndexRoute,
  getApiV1DatabasePkFunctionNamesIndexRoute,
  getApiV1DatabasePkOauth2TokensIndexRoute,
  getApiV1DatabasePkRelatedObjectsIndexRoute,
  getApiV1DatabasePkRoute,
  getApiV1DatabasePkSchemasAccessForFileUploadIndexRoute,
  getApiV1DatabasePkSchemasIndexRoute,
  getApiV1DatabasePkSelectStarTableNameIndexRoute,
  getApiV1DatabasePkSelectStarTableNameSchemaNameIndexRoute,
  getApiV1DatabasePkTableExtraTableNameSchemaNameIndexRoute,
  getApiV1DatabasePkTableMetadataExtraIndexRoute,
  getApiV1DatabasePkTableMetadataIndexRoute,
  getApiV1DatabasePkTablesIndexRoute,
  getApiV1DatabasePkTableTableNameSchemaNameIndexRoute,
  getApiV1DatabaseRelatedColumnNameRoute,
  getApiV1DatasetDistinctColumnNameRoute,
  getApiV1DatasetExportIndexRoute,
  getApiV1DatasetIdOrUuidRelatedObjectsRoute,
  getApiV1DatasetIdOrUuidRoute,
  getApiV1DatasetIndexRoute,
  getApiV1DatasetInfoRoute,
  getApiV1DatasetPkDrillInfoIndexRoute,
  getApiV1DatasetRelatedColumnNameRoute,
  getApiV1DatasetRelatedObjectsIndexRoute,
  getApiV1DatasetUuidPurgeImpactRoute,
  getApiV1DatasetUuidStrActivityIndexRoute,
  getApiV1DatasetUuidStrVersionsIndexRoute,
  getApiV1DatasetUuidStrVersionsVersionUuidStrIndexRoute,
  getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndexRoute,
  getApiV1DatasourceDatasourceTypeDatasourceIdRoute,
  getApiV1DatasourceIndexRoute,
  getApiV1EmbeddedDashboardUuidRoute,
  getApiV1ExploreFormDataKeyRoute,
  getApiV1ExploreIndexRoute,
  getApiV1ExplorePermalinkKeyRoute,
  getApiV1LogIndexRoute,
  getApiV1LogPkRoute,
  getApiV1LogRecentActivityIndexRoute,
  getApiV1MeApiKeyScopesIndexRoute,
  getApiV1MeIndexRoute,
  getApiV1MenuIndexRoute,
  getApiV1MeRolesIndexRoute,
  getApiV1QueryDistinctColumnNameRoute,
  getApiV1QueryIndexRoute,
  getApiV1QueryPkRoute,
  getApiV1QueryRelatedColumnNameRoute,
  getApiV1QueryUpdatedSinceRoute,
  getApiV1ReportConfigurationIndexRoute,
  getApiV1ReportIndexRoute,
  getApiV1ReportInfoRoute,
  getApiV1ReportPkLogIndexRoute,
  getApiV1ReportPkLogLogIdRoute,
  getApiV1ReportPkRoute,
  getApiV1ReportRelatedColumnNameRoute,
  getApiV1ReportSlackChannelsIndexRoute,
  getApiV1RowlevelsecurityIndexRoute,
  getApiV1RowlevelsecurityInfoRoute,
  getApiV1RowlevelsecurityPkRoute,
  getApiV1RowlevelsecurityRelatedColumnNameRoute,
  getApiV1SavedQueryDistinctColumnNameRoute,
  getApiV1SavedQueryExportIndexRoute,
  getApiV1SavedQueryIndexRoute,
  getApiV1SavedQueryInfoRoute,
  getApiV1SavedQueryPkRoute,
  getApiV1SavedQueryRelatedColumnNameRoute,
  getApiV1SecurityCsrfTokenIndexRoute,
  getApiV1SecurityGroupsIndexRoute,
  getApiV1SecurityGroupsInfoRoute,
  getApiV1SecurityGroupsPkRoute,
  getApiV1SecurityPermissionsIndexRoute,
  getApiV1SecurityPermissionsInfoRoute,
  getApiV1SecurityPermissionsPkRoute,
  getApiV1SecurityPermissionsResourcesIndexRoute,
  getApiV1SecurityPermissionsResourcesInfoRoute,
  getApiV1SecurityPermissionsResourcesPkRoute,
  getApiV1SecurityResourcesIndexRoute,
  getApiV1SecurityResourcesInfoRoute,
  getApiV1SecurityResourcesPkRoute,
  getApiV1SecurityRolesIndexRoute,
  getApiV1SecurityRolesInfoRoute,
  getApiV1SecurityRolesPkRoute,
  getApiV1SecurityRolesRoleIdPermissionsIndexRoute,
  getApiV1SecurityRolesSearchIndexRoute,
  getApiV1SecuritySubjectIndexRoute,
  getApiV1SecuritySubjectInfoRoute,
  getApiV1SecuritySubjectPkRoute,
  getApiV1SecurityUserRegistrationsIndexRoute,
  getApiV1SecurityUserRegistrationsInfoRoute,
  getApiV1SecurityUserRegistrationsPkRoute,
  getApiV1SecurityUsersIndexRoute,
  getApiV1SecurityUsersInfoRoute,
  getApiV1SecurityUsersPkRoute,
  getApiV1SemanticLayerConnectionsIndexRoute,
  getApiV1SemanticLayerIndexRoute,
  getApiV1SemanticLayerTypesRoute,
  getApiV1SemanticLayerUuidRoute,
  getApiV1SemanticViewPkStructureRoute,
  getApiV1SqllabExportClientIdIndexRoute,
  getApiV1SqllabIndexRoute,
  getApiV1SqllabPermalinkKeyRoute,
  getApiV1SqllabResultsIndexRoute,
  getApiV1TagFavoriteStatusIndexRoute,
  getApiV1TagGetObjectsIndexRoute,
  getApiV1TagIndexRoute,
  getApiV1TagInfoRoute,
  getApiV1TagPkRoute,
  getApiV1TagRelatedColumnNameRoute,
  getApiV1ThemeExportIndexRoute,
  getApiV1ThemeIndexRoute,
  getApiV1ThemeInfoRoute,
  getApiV1ThemePkRoute,
  getApiV1ThemeRelatedColumnNameRoute,
  getApiV1ThemeSystemRoute,
  getApiV1UserUserIdAvatarPngRoute,
  postApiV1AnnotationLayerIndexRoute,
  postApiV1AnnotationLayerPkAnnotationIndexRoute,
  postApiV1AssetsImportIndexRoute,
  postApiV1CachekeyInvalidateRoute,
  postApiV1ChartDataRoute,
  postApiV1ChartDataStopRoute,
  postApiV1ChartImportIndexRoute,
  postApiV1ChartIndexRoute,
  postApiV1ChartPkFavoritesIndexRoute,
  postApiV1ChartUuidPurgeRoute,
  postApiV1ChartUuidRestoreRoute,
  postApiV1ChartUuidStrVersionsVersionUuidStrRestoreRoute,
  postApiV1CssTemplateIndexRoute,
  postApiV1DashboardIdOrSlugCopyIndexRoute,
  postApiV1DashboardIdOrSlugEmbeddedRoute,
  postApiV1DashboardImportIndexRoute,
  postApiV1DashboardIndexRoute,
  postApiV1DashboardPkCacheDashboardScreenshotIndexRoute,
  postApiV1DashboardPkExportXlsxIndexRoute,
  postApiV1DashboardPkFavoritesIndexRoute,
  postApiV1DashboardPkFilterStateRoute,
  postApiV1DashboardPkPermalinkRoute,
  postApiV1DashboardUuidPurgeRoute,
  postApiV1DashboardUuidRestoreRoute,
  postApiV1DashboardUuidStrVersionsVersionUuidStrRestoreRoute,
  postApiV1DatabaseImportIndexRoute,
  postApiV1DatabaseIndexRoute,
  postApiV1DatabasePkOauth2TokensAllIndexRoute,
  postApiV1DatabasePkOauth2TokensDeleteIndexRoute,
  postApiV1DatabasePkSyncPermissionsIndexRoute,
  postApiV1DatabasePkUploadIndexRoute,
  postApiV1DatabasePkValidateSqlIndexRoute,
  postApiV1DatabaseTestConnectionIndexRoute,
  postApiV1DatabaseUploadMetadataIndexRoute,
  postApiV1DatabaseValidateParametersIndexRoute,
  postApiV1DatasetDuplicateRoute,
  postApiV1DatasetGetOrCreateIndexRoute,
  postApiV1DatasetImportIndexRoute,
  postApiV1DatasetIndexRoute,
  postApiV1DatasetPkPartitionMappingPreviewIndexRoute,
  postApiV1DatasetUuidPurgeRoute,
  postApiV1DatasetUuidRestoreRoute,
  postApiV1DatasetUuidStrVersionsVersionUuidStrRestoreRoute,
  postApiV1DatasourceDatasourceTypeDatasourceIdCompatibleRoute,
  postApiV1DatasourceDatasourceTypeDatasourceIdQueryRoute,
  postApiV1DatasourceDatasourceTypeDatasourceIdValidateExpressionIndexRoute,
  postApiV1ExploreFormDataRoute,
  postApiV1ExplorePermalinkRoute,
  postApiV1LogIndexRoute,
  postApiV1QueryStopRoute,
  postApiV1ReportIndexRoute,
  postApiV1ReportPkExecuteRoute,
  postApiV1ReportSubscribeRoute,
  postApiV1RowlevelsecurityIndexRoute,
  postApiV1SavedQueryImportIndexRoute,
  postApiV1SavedQueryIndexRoute,
  postApiV1SecurityGroupsIndexRoute,
  postApiV1SecurityGuestTokenIndexRoute,
  postApiV1SecurityLoginRoute,
  postApiV1SecurityPasswordRecoveryIndexRoute,
  postApiV1SecurityPasswordRecoveryResetIndexRoute,
  postApiV1SecurityPermissionsResourcesIndexRoute,
  postApiV1SecurityRefreshRoute,
  postApiV1SecurityResourcesIndexRoute,
  postApiV1SecurityRolesIndexRoute,
  postApiV1SecurityRolesRoleIdPermissionsRoute,
  postApiV1SecurityUsersIndexRoute,
  postApiV1SemanticLayerIndexRoute,
  postApiV1SemanticLayerSchemaConfigurationRoute,
  postApiV1SemanticLayerUuidClearCacheRoute,
  postApiV1SemanticLayerUuidSchemaRuntimeRoute,
  postApiV1SemanticLayerUuidViewsRoute,
  postApiV1SemanticViewIndexRoute,
  postApiV1SqllabEstimateIndexRoute,
  postApiV1SqllabExecuteIndexRoute,
  postApiV1SqllabExportStreamingIndexRoute,
  postApiV1SqllabFormatSqlIndexRoute,
  postApiV1SqllabPermalinkRoute,
  postApiV1TagBulkCreateRoute,
  postApiV1TagIndexRoute,
  postApiV1TagObjectTypeObjectIdIndexRoute,
  postApiV1TagPkFavoritesIndexRoute,
  postApiV1ThemeImportIndexRoute,
  postApiV1ThemeIndexRoute,
  putApiV1AnnotationLayerPkAnnotationAnnotationIdRoute,
  putApiV1AnnotationLayerPkRoute,
  putApiV1ChartPkRoute,
  putApiV1ChartWarmUpCacheRoute,
  putApiV1CssTemplatePkRoute,
  putApiV1DashboardIdOrSlugEmbeddedRoute,
  putApiV1DashboardPkChartCustomizationsRoute,
  putApiV1DashboardPkColorsRoute,
  putApiV1DashboardPkFiltersRoute,
  putApiV1DashboardPkFilterStateKeyRoute,
  putApiV1DashboardPkRoute,
  putApiV1DatabasePkRoute,
  putApiV1DatasetPkRefreshRoute,
  putApiV1DatasetPkRoute,
  putApiV1DatasetWarmUpCacheRoute,
  putApiV1ExploreFormDataKeyRoute,
  putApiV1MeIndexRoute,
  putApiV1ReportConfigurationIndexRoute,
  putApiV1ReportPkRoute,
  putApiV1RowlevelsecurityPkRoute,
  putApiV1SavedQueryPkRoute,
  putApiV1SecurityGroupsPkRoute,
  putApiV1SecurityPermissionsResourcesPkRoute,
  putApiV1SecurityResourcesPkRoute,
  putApiV1SecurityRolesPkRoute,
  putApiV1SecurityRolesRoleIdGroupsRoute,
  putApiV1SecurityRolesRoleIdUsersRoute,
  putApiV1SecurityUsersPkRoute,
  putApiV1SemanticLayerUuidRoute,
  putApiV1SemanticViewPkRoute,
  putApiV1TagPkRoute,
  putApiV1ThemePkRoute,
  putApiV1ThemePkSetSystemDarkRoute,
  putApiV1ThemePkSetSystemDefaultRoute,
} from '../routes'

export const getApiV1AdvancedDataTypeConvertRouteHandler: RouteHandler<
  typeof getApiV1AdvancedDataTypeConvertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AdvancedDataTypeTypesRouteHandler: RouteHandler<
  typeof getApiV1AdvancedDataTypeTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AnnotationLayerIndexRouteHandler: RouteHandler<
  typeof deleteApiV1AnnotationLayerIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AnnotationLayerIndexRouteHandler: RouteHandler<
  typeof getApiV1AnnotationLayerIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AnnotationLayerIndexRouteHandler: RouteHandler<
  typeof postApiV1AnnotationLayerIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AnnotationLayerInfoRouteHandler: RouteHandler<
  typeof getApiV1AnnotationLayerInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AnnotationLayerRelatedColumnNameRouteHandler: RouteHandler<
  typeof getApiV1AnnotationLayerRelatedColumnNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AnnotationLayerPkRouteHandler: RouteHandler<
  typeof deleteApiV1AnnotationLayerPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AnnotationLayerPkRouteHandler: RouteHandler<
  typeof getApiV1AnnotationLayerPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1AnnotationLayerPkRouteHandler: RouteHandler<
  typeof putApiV1AnnotationLayerPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AnnotationLayerPkAnnotationIndexRouteHandler: RouteHandler<
  typeof deleteApiV1AnnotationLayerPkAnnotationIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AnnotationLayerPkAnnotationIndexRouteHandler: RouteHandler<
  typeof getApiV1AnnotationLayerPkAnnotationIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AnnotationLayerPkAnnotationIndexRouteHandler: RouteHandler<
  typeof postApiV1AnnotationLayerPkAnnotationIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AnnotationLayerPkAnnotationAnnotationIdRouteHandler: RouteHandler<
  typeof deleteApiV1AnnotationLayerPkAnnotationAnnotationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AnnotationLayerPkAnnotationAnnotationIdRouteHandler: RouteHandler<
  typeof getApiV1AnnotationLayerPkAnnotationAnnotationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1AnnotationLayerPkAnnotationAnnotationIdRouteHandler: RouteHandler<
  typeof putApiV1AnnotationLayerPkAnnotationAnnotationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AssetsExportIndexRouteHandler: RouteHandler<
  typeof getApiV1AssetsExportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AssetsImportIndexRouteHandler: RouteHandler<
  typeof postApiV1AssetsImportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AvailableDomainsIndexRouteHandler: RouteHandler<
  typeof getApiV1AvailableDomainsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1CachekeyInvalidateRouteHandler: RouteHandler<
  typeof postApiV1CachekeyInvalidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ChartIndexRouteHandler: RouteHandler<
  typeof deleteApiV1ChartIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChartIndexRouteHandler: RouteHandler<typeof getApiV1ChartIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1ChartIndexRouteHandler: RouteHandler<
  typeof postApiV1ChartIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChartInfoRouteHandler: RouteHandler<typeof getApiV1ChartInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1ChartDataRouteHandler: RouteHandler<typeof postApiV1ChartDataRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1ChartDataStopRouteHandler: RouteHandler<
  typeof postApiV1ChartDataStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChartExportIndexRouteHandler: RouteHandler<
  typeof getApiV1ChartExportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChartFavoriteStatusIndexRouteHandler: RouteHandler<
  typeof getApiV1ChartFavoriteStatusIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChartImportIndexRouteHandler: RouteHandler<
  typeof postApiV1ChartImportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChartRelatedColumnNameRouteHandler: RouteHandler<
  typeof getApiV1ChartRelatedColumnNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1ChartWarmUpCacheRouteHandler: RouteHandler<
  typeof putApiV1ChartWarmUpCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChartIdOrUuidRouteHandler: RouteHandler<
  typeof getApiV1ChartIdOrUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ChartPkRouteHandler: RouteHandler<typeof deleteApiV1ChartPkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV1ChartPkRouteHandler: RouteHandler<typeof putApiV1ChartPkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChartPkCacheScreenshotIndexRouteHandler: RouteHandler<
  typeof getApiV1ChartPkCacheScreenshotIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChartPkDataIndexRouteHandler: RouteHandler<
  typeof getApiV1ChartPkDataIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChartPkDeckLayersIndexRouteHandler: RouteHandler<
  typeof getApiV1ChartPkDeckLayersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ChartPkFavoritesIndexRouteHandler: RouteHandler<
  typeof deleteApiV1ChartPkFavoritesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChartPkFavoritesIndexRouteHandler: RouteHandler<
  typeof postApiV1ChartPkFavoritesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChartPkScreenshotDigestIndexRouteHandler: RouteHandler<
  typeof getApiV1ChartPkScreenshotDigestIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChartPkThumbnailDigestIndexRouteHandler: RouteHandler<
  typeof getApiV1ChartPkThumbnailDigestIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChartUuidStrActivityIndexRouteHandler: RouteHandler<
  typeof getApiV1ChartUuidStrActivityIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChartUuidStrVersionsIndexRouteHandler: RouteHandler<
  typeof getApiV1ChartUuidStrVersionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ChartUuidStrVersionsVersionUuidStrIndexRouteHandler: RouteHandler<
  typeof getApiV1ChartUuidStrVersionsVersionUuidStrIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChartUuidStrVersionsVersionUuidStrRestoreRouteHandler: RouteHandler<
  typeof postApiV1ChartUuidStrVersionsVersionUuidStrRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChartUuidPurgeRouteHandler: RouteHandler<
  typeof postApiV1ChartUuidPurgeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ChartUuidRestoreRouteHandler: RouteHandler<
  typeof postApiV1ChartUuidRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1CssTemplateIndexRouteHandler: RouteHandler<
  typeof deleteApiV1CssTemplateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CssTemplateIndexRouteHandler: RouteHandler<
  typeof getApiV1CssTemplateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1CssTemplateIndexRouteHandler: RouteHandler<
  typeof postApiV1CssTemplateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CssTemplateInfoRouteHandler: RouteHandler<
  typeof getApiV1CssTemplateInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CssTemplateRelatedColumnNameRouteHandler: RouteHandler<
  typeof getApiV1CssTemplateRelatedColumnNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1CssTemplatePkRouteHandler: RouteHandler<
  typeof deleteApiV1CssTemplatePkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CssTemplatePkRouteHandler: RouteHandler<
  typeof getApiV1CssTemplatePkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1CssTemplatePkRouteHandler: RouteHandler<
  typeof putApiV1CssTemplatePkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1DashboardIndexRouteHandler: RouteHandler<
  typeof deleteApiV1DashboardIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DashboardIndexRouteHandler: RouteHandler<
  typeof getApiV1DashboardIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DashboardIndexRouteHandler: RouteHandler<
  typeof postApiV1DashboardIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DashboardInfoRouteHandler: RouteHandler<
  typeof getApiV1DashboardInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DashboardExportIndexRouteHandler: RouteHandler<
  typeof getApiV1DashboardExportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DashboardExportXlsxDownloadJobIdIndexRouteHandler: RouteHandler<
  typeof getApiV1DashboardExportXlsxDownloadJobIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DashboardExportXlsxStatusJobIdIndexRouteHandler: RouteHandler<
  typeof getApiV1DashboardExportXlsxStatusJobIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DashboardFavoriteStatusIndexRouteHandler: RouteHandler<
  typeof getApiV1DashboardFavoriteStatusIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DashboardImportIndexRouteHandler: RouteHandler<
  typeof postApiV1DashboardImportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DashboardPermalinkKeyRouteHandler: RouteHandler<
  typeof getApiV1DashboardPermalinkKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DashboardRelatedColumnNameRouteHandler: RouteHandler<
  typeof getApiV1DashboardRelatedColumnNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DashboardIdOrSlugRouteHandler: RouteHandler<
  typeof getApiV1DashboardIdOrSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DashboardIdOrSlugChartsRouteHandler: RouteHandler<
  typeof getApiV1DashboardIdOrSlugChartsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DashboardIdOrSlugCopyIndexRouteHandler: RouteHandler<
  typeof postApiV1DashboardIdOrSlugCopyIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DashboardIdOrSlugDatasetsRouteHandler: RouteHandler<
  typeof getApiV1DashboardIdOrSlugDatasetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1DashboardIdOrSlugEmbeddedRouteHandler: RouteHandler<
  typeof deleteApiV1DashboardIdOrSlugEmbeddedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DashboardIdOrSlugEmbeddedRouteHandler: RouteHandler<
  typeof getApiV1DashboardIdOrSlugEmbeddedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DashboardIdOrSlugEmbeddedRouteHandler: RouteHandler<
  typeof postApiV1DashboardIdOrSlugEmbeddedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1DashboardIdOrSlugEmbeddedRouteHandler: RouteHandler<
  typeof putApiV1DashboardIdOrSlugEmbeddedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DashboardIdOrSlugTabsRouteHandler: RouteHandler<
  typeof getApiV1DashboardIdOrSlugTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1DashboardPkRouteHandler: RouteHandler<
  typeof deleteApiV1DashboardPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1DashboardPkRouteHandler: RouteHandler<
  typeof putApiV1DashboardPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DashboardPkCacheDashboardScreenshotIndexRouteHandler: RouteHandler<
  typeof postApiV1DashboardPkCacheDashboardScreenshotIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1DashboardPkChartCustomizationsRouteHandler: RouteHandler<
  typeof putApiV1DashboardPkChartCustomizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1DashboardPkColorsRouteHandler: RouteHandler<
  typeof putApiV1DashboardPkColorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DashboardPkExportAsExampleIndexRouteHandler: RouteHandler<
  typeof getApiV1DashboardPkExportAsExampleIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DashboardPkExportXlsxIndexRouteHandler: RouteHandler<
  typeof postApiV1DashboardPkExportXlsxIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1DashboardPkFavoritesIndexRouteHandler: RouteHandler<
  typeof deleteApiV1DashboardPkFavoritesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DashboardPkFavoritesIndexRouteHandler: RouteHandler<
  typeof postApiV1DashboardPkFavoritesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DashboardPkFilterStateRouteHandler: RouteHandler<
  typeof postApiV1DashboardPkFilterStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1DashboardPkFilterStateKeyRouteHandler: RouteHandler<
  typeof deleteApiV1DashboardPkFilterStateKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DashboardPkFilterStateKeyRouteHandler: RouteHandler<
  typeof getApiV1DashboardPkFilterStateKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1DashboardPkFilterStateKeyRouteHandler: RouteHandler<
  typeof putApiV1DashboardPkFilterStateKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1DashboardPkFiltersRouteHandler: RouteHandler<
  typeof putApiV1DashboardPkFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DashboardPkPermalinkRouteHandler: RouteHandler<
  typeof postApiV1DashboardPkPermalinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DashboardPkScreenshotDigestIndexRouteHandler: RouteHandler<
  typeof getApiV1DashboardPkScreenshotDigestIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DashboardPkThumbnailDigestIndexRouteHandler: RouteHandler<
  typeof getApiV1DashboardPkThumbnailDigestIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DashboardUuidStrActivityIndexRouteHandler: RouteHandler<
  typeof getApiV1DashboardUuidStrActivityIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DashboardUuidStrVersionsIndexRouteHandler: RouteHandler<
  typeof getApiV1DashboardUuidStrVersionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DashboardUuidStrVersionsVersionUuidStrIndexRouteHandler: RouteHandler<
  typeof getApiV1DashboardUuidStrVersionsVersionUuidStrIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DashboardUuidStrVersionsVersionUuidStrRestoreRouteHandler: RouteHandler<
  typeof postApiV1DashboardUuidStrVersionsVersionUuidStrRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DashboardUuidPurgeRouteHandler: RouteHandler<
  typeof postApiV1DashboardUuidPurgeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DashboardUuidRestoreRouteHandler: RouteHandler<
  typeof postApiV1DashboardUuidRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatabaseIndexRouteHandler: RouteHandler<
  typeof getApiV1DatabaseIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DatabaseIndexRouteHandler: RouteHandler<
  typeof postApiV1DatabaseIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatabaseInfoRouteHandler: RouteHandler<
  typeof getApiV1DatabaseInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatabaseAvailableIndexRouteHandler: RouteHandler<
  typeof getApiV1DatabaseAvailableIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatabaseExportIndexRouteHandler: RouteHandler<
  typeof getApiV1DatabaseExportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DatabaseImportIndexRouteHandler: RouteHandler<
  typeof postApiV1DatabaseImportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatabaseOauth2IndexRouteHandler: RouteHandler<
  typeof getApiV1DatabaseOauth2IndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatabaseRelatedColumnNameRouteHandler: RouteHandler<
  typeof getApiV1DatabaseRelatedColumnNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DatabaseTestConnectionIndexRouteHandler: RouteHandler<
  typeof postApiV1DatabaseTestConnectionIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DatabaseUploadMetadataIndexRouteHandler: RouteHandler<
  typeof postApiV1DatabaseUploadMetadataIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DatabaseValidateParametersIndexRouteHandler: RouteHandler<
  typeof postApiV1DatabaseValidateParametersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1DatabasePkRouteHandler: RouteHandler<
  typeof deleteApiV1DatabasePkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatabasePkRouteHandler: RouteHandler<typeof getApiV1DatabasePkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV1DatabasePkRouteHandler: RouteHandler<typeof putApiV1DatabasePkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1DatabasePkCatalogsIndexRouteHandler: RouteHandler<
  typeof getApiV1DatabasePkCatalogsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatabasePkConnectionRouteHandler: RouteHandler<
  typeof getApiV1DatabasePkConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatabasePkEncryptedExtraHintsIndexRouteHandler: RouteHandler<
  typeof getApiV1DatabasePkEncryptedExtraHintsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatabasePkFunctionNamesIndexRouteHandler: RouteHandler<
  typeof getApiV1DatabasePkFunctionNamesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatabasePkOauth2TokensIndexRouteHandler: RouteHandler<
  typeof getApiV1DatabasePkOauth2TokensIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DatabasePkOauth2TokensAllIndexRouteHandler: RouteHandler<
  typeof postApiV1DatabasePkOauth2TokensAllIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DatabasePkOauth2TokensDeleteIndexRouteHandler: RouteHandler<
  typeof postApiV1DatabasePkOauth2TokensDeleteIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatabasePkRelatedObjectsIndexRouteHandler: RouteHandler<
  typeof getApiV1DatabasePkRelatedObjectsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatabasePkSchemasIndexRouteHandler: RouteHandler<
  typeof getApiV1DatabasePkSchemasIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatabasePkSchemasAccessForFileUploadIndexRouteHandler: RouteHandler<
  typeof getApiV1DatabasePkSchemasAccessForFileUploadIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatabasePkSelectStarTableNameIndexRouteHandler: RouteHandler<
  typeof getApiV1DatabasePkSelectStarTableNameIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatabasePkSelectStarTableNameSchemaNameIndexRouteHandler: RouteHandler<
  typeof getApiV1DatabasePkSelectStarTableNameSchemaNameIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DatabasePkSyncPermissionsIndexRouteHandler: RouteHandler<
  typeof postApiV1DatabasePkSyncPermissionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatabasePkTableTableNameSchemaNameIndexRouteHandler: RouteHandler<
  typeof getApiV1DatabasePkTableTableNameSchemaNameIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatabasePkTableExtraTableNameSchemaNameIndexRouteHandler: RouteHandler<
  typeof getApiV1DatabasePkTableExtraTableNameSchemaNameIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatabasePkTableMetadataIndexRouteHandler: RouteHandler<
  typeof getApiV1DatabasePkTableMetadataIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatabasePkTableMetadataExtraIndexRouteHandler: RouteHandler<
  typeof getApiV1DatabasePkTableMetadataExtraIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatabasePkTablesIndexRouteHandler: RouteHandler<
  typeof getApiV1DatabasePkTablesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DatabasePkUploadIndexRouteHandler: RouteHandler<
  typeof postApiV1DatabasePkUploadIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DatabasePkValidateSqlIndexRouteHandler: RouteHandler<
  typeof postApiV1DatabasePkValidateSqlIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1DatasetIndexRouteHandler: RouteHandler<
  typeof deleteApiV1DatasetIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatasetIndexRouteHandler: RouteHandler<
  typeof getApiV1DatasetIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DatasetIndexRouteHandler: RouteHandler<
  typeof postApiV1DatasetIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatasetInfoRouteHandler: RouteHandler<
  typeof getApiV1DatasetInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatasetDistinctColumnNameRouteHandler: RouteHandler<
  typeof getApiV1DatasetDistinctColumnNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DatasetDuplicateRouteHandler: RouteHandler<
  typeof postApiV1DatasetDuplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatasetExportIndexRouteHandler: RouteHandler<
  typeof getApiV1DatasetExportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DatasetGetOrCreateIndexRouteHandler: RouteHandler<
  typeof postApiV1DatasetGetOrCreateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DatasetImportIndexRouteHandler: RouteHandler<
  typeof postApiV1DatasetImportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatasetRelatedColumnNameRouteHandler: RouteHandler<
  typeof getApiV1DatasetRelatedColumnNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatasetRelatedObjectsIndexRouteHandler: RouteHandler<
  typeof getApiV1DatasetRelatedObjectsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1DatasetWarmUpCacheRouteHandler: RouteHandler<
  typeof putApiV1DatasetWarmUpCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatasetIdOrUuidRouteHandler: RouteHandler<
  typeof getApiV1DatasetIdOrUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatasetIdOrUuidRelatedObjectsRouteHandler: RouteHandler<
  typeof getApiV1DatasetIdOrUuidRelatedObjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1DatasetPkRouteHandler: RouteHandler<
  typeof deleteApiV1DatasetPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1DatasetPkRouteHandler: RouteHandler<typeof putApiV1DatasetPkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV1DatasetPkColumnColumnIdRouteHandler: RouteHandler<
  typeof deleteApiV1DatasetPkColumnColumnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatasetPkDrillInfoIndexRouteHandler: RouteHandler<
  typeof getApiV1DatasetPkDrillInfoIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1DatasetPkMetricMetricIdRouteHandler: RouteHandler<
  typeof deleteApiV1DatasetPkMetricMetricIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DatasetPkPartitionMappingPreviewIndexRouteHandler: RouteHandler<
  typeof postApiV1DatasetPkPartitionMappingPreviewIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1DatasetPkRefreshRouteHandler: RouteHandler<
  typeof putApiV1DatasetPkRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatasetUuidStrActivityIndexRouteHandler: RouteHandler<
  typeof getApiV1DatasetUuidStrActivityIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatasetUuidStrVersionsIndexRouteHandler: RouteHandler<
  typeof getApiV1DatasetUuidStrVersionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatasetUuidStrVersionsVersionUuidStrIndexRouteHandler: RouteHandler<
  typeof getApiV1DatasetUuidStrVersionsVersionUuidStrIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DatasetUuidStrVersionsVersionUuidStrRestoreRouteHandler: RouteHandler<
  typeof postApiV1DatasetUuidStrVersionsVersionUuidStrRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DatasetUuidPurgeRouteHandler: RouteHandler<
  typeof postApiV1DatasetUuidPurgeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatasetUuidPurgeImpactRouteHandler: RouteHandler<
  typeof getApiV1DatasetUuidPurgeImpactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DatasetUuidRestoreRouteHandler: RouteHandler<
  typeof postApiV1DatasetUuidRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatasourceIndexRouteHandler: RouteHandler<
  typeof getApiV1DatasourceIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatasourceDatasourceTypeDatasourceIdRouteHandler: RouteHandler<
  typeof getApiV1DatasourceDatasourceTypeDatasourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndexRouteHandler: RouteHandler<
  typeof getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DatasourceDatasourceTypeDatasourceIdCompatibleRouteHandler: RouteHandler<
  typeof postApiV1DatasourceDatasourceTypeDatasourceIdCompatibleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DatasourceDatasourceTypeDatasourceIdQueryRouteHandler: RouteHandler<
  typeof postApiV1DatasourceDatasourceTypeDatasourceIdQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DatasourceDatasourceTypeDatasourceIdValidateExpressionIndexRouteHandler: RouteHandler<
  typeof postApiV1DatasourceDatasourceTypeDatasourceIdValidateExpressionIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EmbeddedDashboardUuidRouteHandler: RouteHandler<
  typeof getApiV1EmbeddedDashboardUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ExploreIndexRouteHandler: RouteHandler<
  typeof getApiV1ExploreIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ExploreFormDataRouteHandler: RouteHandler<
  typeof postApiV1ExploreFormDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ExploreFormDataKeyRouteHandler: RouteHandler<
  typeof deleteApiV1ExploreFormDataKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ExploreFormDataKeyRouteHandler: RouteHandler<
  typeof getApiV1ExploreFormDataKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1ExploreFormDataKeyRouteHandler: RouteHandler<
  typeof putApiV1ExploreFormDataKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ExplorePermalinkRouteHandler: RouteHandler<
  typeof postApiV1ExplorePermalinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ExplorePermalinkKeyRouteHandler: RouteHandler<
  typeof getApiV1ExplorePermalinkKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LogIndexRouteHandler: RouteHandler<typeof getApiV1LogIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1LogIndexRouteHandler: RouteHandler<typeof postApiV1LogIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1LogRecentActivityIndexRouteHandler: RouteHandler<
  typeof getApiV1LogRecentActivityIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LogPkRouteHandler: RouteHandler<typeof getApiV1LogPkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MeIndexRouteHandler: RouteHandler<typeof getApiV1MeIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1MeIndexRouteHandler: RouteHandler<typeof putApiV1MeIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MeApiKeyScopesIndexRouteHandler: RouteHandler<
  typeof getApiV1MeApiKeyScopesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MeRolesIndexRouteHandler: RouteHandler<
  typeof getApiV1MeRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MenuIndexRouteHandler: RouteHandler<typeof getApiV1MenuIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1QueryIndexRouteHandler: RouteHandler<typeof getApiV1QueryIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1QueryDistinctColumnNameRouteHandler: RouteHandler<
  typeof getApiV1QueryDistinctColumnNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1QueryRelatedColumnNameRouteHandler: RouteHandler<
  typeof getApiV1QueryRelatedColumnNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1QueryStopRouteHandler: RouteHandler<typeof postApiV1QueryStopRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1QueryUpdatedSinceRouteHandler: RouteHandler<
  typeof getApiV1QueryUpdatedSinceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1QueryPkRouteHandler: RouteHandler<typeof getApiV1QueryPkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ReportIndexRouteHandler: RouteHandler<
  typeof deleteApiV1ReportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ReportIndexRouteHandler: RouteHandler<
  typeof getApiV1ReportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportIndexRouteHandler: RouteHandler<
  typeof postApiV1ReportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ReportInfoRouteHandler: RouteHandler<typeof getApiV1ReportInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1ReportConfigurationIndexRouteHandler: RouteHandler<
  typeof getApiV1ReportConfigurationIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1ReportConfigurationIndexRouteHandler: RouteHandler<
  typeof putApiV1ReportConfigurationIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ReportRelatedColumnNameRouteHandler: RouteHandler<
  typeof getApiV1ReportRelatedColumnNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ReportSlackChannelsIndexRouteHandler: RouteHandler<
  typeof getApiV1ReportSlackChannelsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportSubscribeRouteHandler: RouteHandler<
  typeof postApiV1ReportSubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ReportPkRouteHandler: RouteHandler<
  typeof deleteApiV1ReportPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ReportPkRouteHandler: RouteHandler<typeof getApiV1ReportPkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV1ReportPkRouteHandler: RouteHandler<typeof putApiV1ReportPkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1ReportPkExecuteRouteHandler: RouteHandler<
  typeof postApiV1ReportPkExecuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ReportPkLogIndexRouteHandler: RouteHandler<
  typeof getApiV1ReportPkLogIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ReportPkLogLogIdRouteHandler: RouteHandler<
  typeof getApiV1ReportPkLogLogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1RowlevelsecurityIndexRouteHandler: RouteHandler<
  typeof deleteApiV1RowlevelsecurityIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RowlevelsecurityIndexRouteHandler: RouteHandler<
  typeof getApiV1RowlevelsecurityIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RowlevelsecurityIndexRouteHandler: RouteHandler<
  typeof postApiV1RowlevelsecurityIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RowlevelsecurityInfoRouteHandler: RouteHandler<
  typeof getApiV1RowlevelsecurityInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RowlevelsecurityRelatedColumnNameRouteHandler: RouteHandler<
  typeof getApiV1RowlevelsecurityRelatedColumnNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1RowlevelsecurityPkRouteHandler: RouteHandler<
  typeof deleteApiV1RowlevelsecurityPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1RowlevelsecurityPkRouteHandler: RouteHandler<
  typeof getApiV1RowlevelsecurityPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1RowlevelsecurityPkRouteHandler: RouteHandler<
  typeof putApiV1RowlevelsecurityPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SavedQueryIndexRouteHandler: RouteHandler<
  typeof deleteApiV1SavedQueryIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SavedQueryIndexRouteHandler: RouteHandler<
  typeof getApiV1SavedQueryIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SavedQueryIndexRouteHandler: RouteHandler<
  typeof postApiV1SavedQueryIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SavedQueryInfoRouteHandler: RouteHandler<
  typeof getApiV1SavedQueryInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SavedQueryDistinctColumnNameRouteHandler: RouteHandler<
  typeof getApiV1SavedQueryDistinctColumnNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SavedQueryExportIndexRouteHandler: RouteHandler<
  typeof getApiV1SavedQueryExportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SavedQueryImportIndexRouteHandler: RouteHandler<
  typeof postApiV1SavedQueryImportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SavedQueryRelatedColumnNameRouteHandler: RouteHandler<
  typeof getApiV1SavedQueryRelatedColumnNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SavedQueryPkRouteHandler: RouteHandler<
  typeof deleteApiV1SavedQueryPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SavedQueryPkRouteHandler: RouteHandler<
  typeof getApiV1SavedQueryPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SavedQueryPkRouteHandler: RouteHandler<
  typeof putApiV1SavedQueryPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityCsrfTokenIndexRouteHandler: RouteHandler<
  typeof getApiV1SecurityCsrfTokenIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityGroupsIndexRouteHandler: RouteHandler<
  typeof getApiV1SecurityGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SecurityGroupsIndexRouteHandler: RouteHandler<
  typeof postApiV1SecurityGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityGroupsInfoRouteHandler: RouteHandler<
  typeof getApiV1SecurityGroupsInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SecurityGroupsPkRouteHandler: RouteHandler<
  typeof deleteApiV1SecurityGroupsPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityGroupsPkRouteHandler: RouteHandler<
  typeof getApiV1SecurityGroupsPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SecurityGroupsPkRouteHandler: RouteHandler<
  typeof putApiV1SecurityGroupsPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SecurityGuestTokenIndexRouteHandler: RouteHandler<
  typeof postApiV1SecurityGuestTokenIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SecurityLoginRouteHandler: RouteHandler<
  typeof postApiV1SecurityLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SecurityPasswordRecoveryIndexRouteHandler: RouteHandler<
  typeof postApiV1SecurityPasswordRecoveryIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SecurityPasswordRecoveryResetIndexRouteHandler: RouteHandler<
  typeof postApiV1SecurityPasswordRecoveryResetIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityPermissionsResourcesIndexRouteHandler: RouteHandler<
  typeof getApiV1SecurityPermissionsResourcesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SecurityPermissionsResourcesIndexRouteHandler: RouteHandler<
  typeof postApiV1SecurityPermissionsResourcesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityPermissionsResourcesInfoRouteHandler: RouteHandler<
  typeof getApiV1SecurityPermissionsResourcesInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SecurityPermissionsResourcesPkRouteHandler: RouteHandler<
  typeof deleteApiV1SecurityPermissionsResourcesPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityPermissionsResourcesPkRouteHandler: RouteHandler<
  typeof getApiV1SecurityPermissionsResourcesPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SecurityPermissionsResourcesPkRouteHandler: RouteHandler<
  typeof putApiV1SecurityPermissionsResourcesPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityPermissionsIndexRouteHandler: RouteHandler<
  typeof getApiV1SecurityPermissionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityPermissionsInfoRouteHandler: RouteHandler<
  typeof getApiV1SecurityPermissionsInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityPermissionsPkRouteHandler: RouteHandler<
  typeof getApiV1SecurityPermissionsPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SecurityRefreshRouteHandler: RouteHandler<
  typeof postApiV1SecurityRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityResourcesIndexRouteHandler: RouteHandler<
  typeof getApiV1SecurityResourcesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SecurityResourcesIndexRouteHandler: RouteHandler<
  typeof postApiV1SecurityResourcesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityResourcesInfoRouteHandler: RouteHandler<
  typeof getApiV1SecurityResourcesInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SecurityResourcesPkRouteHandler: RouteHandler<
  typeof deleteApiV1SecurityResourcesPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityResourcesPkRouteHandler: RouteHandler<
  typeof getApiV1SecurityResourcesPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SecurityResourcesPkRouteHandler: RouteHandler<
  typeof putApiV1SecurityResourcesPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityRolesIndexRouteHandler: RouteHandler<
  typeof getApiV1SecurityRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SecurityRolesIndexRouteHandler: RouteHandler<
  typeof postApiV1SecurityRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityRolesInfoRouteHandler: RouteHandler<
  typeof getApiV1SecurityRolesInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityRolesSearchIndexRouteHandler: RouteHandler<
  typeof getApiV1SecurityRolesSearchIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SecurityRolesPkRouteHandler: RouteHandler<
  typeof deleteApiV1SecurityRolesPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityRolesPkRouteHandler: RouteHandler<
  typeof getApiV1SecurityRolesPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SecurityRolesPkRouteHandler: RouteHandler<
  typeof putApiV1SecurityRolesPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SecurityRolesRoleIdGroupsRouteHandler: RouteHandler<
  typeof putApiV1SecurityRolesRoleIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SecurityRolesRoleIdPermissionsRouteHandler: RouteHandler<
  typeof postApiV1SecurityRolesRoleIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityRolesRoleIdPermissionsIndexRouteHandler: RouteHandler<
  typeof getApiV1SecurityRolesRoleIdPermissionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SecurityRolesRoleIdUsersRouteHandler: RouteHandler<
  typeof putApiV1SecurityRolesRoleIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecuritySubjectIndexRouteHandler: RouteHandler<
  typeof getApiV1SecuritySubjectIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecuritySubjectInfoRouteHandler: RouteHandler<
  typeof getApiV1SecuritySubjectInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecuritySubjectPkRouteHandler: RouteHandler<
  typeof getApiV1SecuritySubjectPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityUserRegistrationsIndexRouteHandler: RouteHandler<
  typeof getApiV1SecurityUserRegistrationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityUserRegistrationsInfoRouteHandler: RouteHandler<
  typeof getApiV1SecurityUserRegistrationsInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SecurityUserRegistrationsPkRouteHandler: RouteHandler<
  typeof deleteApiV1SecurityUserRegistrationsPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityUserRegistrationsPkRouteHandler: RouteHandler<
  typeof getApiV1SecurityUserRegistrationsPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityUsersIndexRouteHandler: RouteHandler<
  typeof getApiV1SecurityUsersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SecurityUsersIndexRouteHandler: RouteHandler<
  typeof postApiV1SecurityUsersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityUsersInfoRouteHandler: RouteHandler<
  typeof getApiV1SecurityUsersInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SecurityUsersPkRouteHandler: RouteHandler<
  typeof deleteApiV1SecurityUsersPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecurityUsersPkRouteHandler: RouteHandler<
  typeof getApiV1SecurityUsersPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SecurityUsersPkRouteHandler: RouteHandler<
  typeof putApiV1SecurityUsersPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SecurityUsersPkSessionsRouteHandler: RouteHandler<
  typeof deleteApiV1SecurityUsersPkSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SemanticLayerIndexRouteHandler: RouteHandler<
  typeof getApiV1SemanticLayerIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SemanticLayerIndexRouteHandler: RouteHandler<
  typeof postApiV1SemanticLayerIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SemanticLayerConnectionsIndexRouteHandler: RouteHandler<
  typeof getApiV1SemanticLayerConnectionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SemanticLayerSchemaConfigurationRouteHandler: RouteHandler<
  typeof postApiV1SemanticLayerSchemaConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SemanticLayerTypesRouteHandler: RouteHandler<
  typeof getApiV1SemanticLayerTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SemanticLayerUuidRouteHandler: RouteHandler<
  typeof deleteApiV1SemanticLayerUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SemanticLayerUuidRouteHandler: RouteHandler<
  typeof getApiV1SemanticLayerUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SemanticLayerUuidRouteHandler: RouteHandler<
  typeof putApiV1SemanticLayerUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SemanticLayerUuidClearCacheRouteHandler: RouteHandler<
  typeof postApiV1SemanticLayerUuidClearCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SemanticLayerUuidSchemaRuntimeRouteHandler: RouteHandler<
  typeof postApiV1SemanticLayerUuidSchemaRuntimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SemanticLayerUuidViewsRouteHandler: RouteHandler<
  typeof postApiV1SemanticLayerUuidViewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SemanticViewIndexRouteHandler: RouteHandler<
  typeof deleteApiV1SemanticViewIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SemanticViewIndexRouteHandler: RouteHandler<
  typeof postApiV1SemanticViewIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SemanticViewPkRouteHandler: RouteHandler<
  typeof deleteApiV1SemanticViewPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SemanticViewPkRouteHandler: RouteHandler<
  typeof putApiV1SemanticViewPkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SemanticViewPkStructureRouteHandler: RouteHandler<
  typeof getApiV1SemanticViewPkStructureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SqllabIndexRouteHandler: RouteHandler<
  typeof getApiV1SqllabIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SqllabEstimateIndexRouteHandler: RouteHandler<
  typeof postApiV1SqllabEstimateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SqllabExecuteIndexRouteHandler: RouteHandler<
  typeof postApiV1SqllabExecuteIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SqllabExportClientIdIndexRouteHandler: RouteHandler<
  typeof getApiV1SqllabExportClientIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SqllabExportStreamingIndexRouteHandler: RouteHandler<
  typeof postApiV1SqllabExportStreamingIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SqllabFormatSqlIndexRouteHandler: RouteHandler<
  typeof postApiV1SqllabFormatSqlIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SqllabPermalinkRouteHandler: RouteHandler<
  typeof postApiV1SqllabPermalinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SqllabPermalinkKeyRouteHandler: RouteHandler<
  typeof getApiV1SqllabPermalinkKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SqllabResultsIndexRouteHandler: RouteHandler<
  typeof getApiV1SqllabResultsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1TagIndexRouteHandler: RouteHandler<
  typeof deleteApiV1TagIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TagIndexRouteHandler: RouteHandler<typeof getApiV1TagIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1TagIndexRouteHandler: RouteHandler<typeof postApiV1TagIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1TagInfoRouteHandler: RouteHandler<typeof getApiV1TagInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TagBulkCreateRouteHandler: RouteHandler<
  typeof postApiV1TagBulkCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TagFavoriteStatusIndexRouteHandler: RouteHandler<
  typeof getApiV1TagFavoriteStatusIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TagGetObjectsIndexRouteHandler: RouteHandler<
  typeof getApiV1TagGetObjectsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TagRelatedColumnNameRouteHandler: RouteHandler<
  typeof getApiV1TagRelatedColumnNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TagObjectTypeObjectIdIndexRouteHandler: RouteHandler<
  typeof postApiV1TagObjectTypeObjectIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1TagObjectTypeObjectIdTagIndexRouteHandler: RouteHandler<
  typeof deleteApiV1TagObjectTypeObjectIdTagIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1TagPkRouteHandler: RouteHandler<typeof deleteApiV1TagPkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1TagPkRouteHandler: RouteHandler<typeof getApiV1TagPkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1TagPkRouteHandler: RouteHandler<typeof putApiV1TagPkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1TagPkFavoritesIndexRouteHandler: RouteHandler<
  typeof deleteApiV1TagPkFavoritesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TagPkFavoritesIndexRouteHandler: RouteHandler<
  typeof postApiV1TagPkFavoritesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ThemeIndexRouteHandler: RouteHandler<
  typeof deleteApiV1ThemeIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ThemeIndexRouteHandler: RouteHandler<typeof getApiV1ThemeIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1ThemeIndexRouteHandler: RouteHandler<
  typeof postApiV1ThemeIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ThemeInfoRouteHandler: RouteHandler<typeof getApiV1ThemeInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1ThemeExportIndexRouteHandler: RouteHandler<
  typeof getApiV1ThemeExportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ThemeImportIndexRouteHandler: RouteHandler<
  typeof postApiV1ThemeImportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ThemeRelatedColumnNameRouteHandler: RouteHandler<
  typeof getApiV1ThemeRelatedColumnNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ThemeSystemRouteHandler: RouteHandler<
  typeof getApiV1ThemeSystemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ThemeUnsetSystemDarkRouteHandler: RouteHandler<
  typeof deleteApiV1ThemeUnsetSystemDarkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ThemeUnsetSystemDefaultRouteHandler: RouteHandler<
  typeof deleteApiV1ThemeUnsetSystemDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ThemePkRouteHandler: RouteHandler<typeof deleteApiV1ThemePkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1ThemePkRouteHandler: RouteHandler<typeof getApiV1ThemePkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1ThemePkRouteHandler: RouteHandler<typeof putApiV1ThemePkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1ThemePkSetSystemDarkRouteHandler: RouteHandler<
  typeof putApiV1ThemePkSetSystemDarkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1ThemePkSetSystemDefaultRouteHandler: RouteHandler<
  typeof putApiV1ThemePkSetSystemDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UserUserIdAvatarPngRouteHandler: RouteHandler<
  typeof getApiV1UserUserIdAvatarPngRoute
> = async (c) => {
  throw new Error('Not implemented')
}
