import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1AdvancedDataTypeConvertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AdvancedDataTypeTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AnnotationLayerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AnnotationLayerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AnnotationLayerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AnnotationLayerInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AnnotationLayerRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AnnotationLayerPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AnnotationLayerPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AnnotationLayerPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AnnotationLayerPkAnnotationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AnnotationLayerPkAnnotationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AnnotationLayerPkAnnotationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AnnotationLayerPkAnnotationAnnotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AnnotationLayerPkAnnotationAnnotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AnnotationLayerPkAnnotationAnnotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AssetsExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AssetsImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AvailableDomainsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CachekeyInvalidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ChartIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChartIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChartDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChartDataStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartFavoriteStatusIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChartImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ChartWarmUpCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartIdOrUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ChartPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ChartPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartPkCacheScreenshotIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartPkDataIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartPkDeckLayersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ChartPkFavoritesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChartPkFavoritesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartPkScreenshotDigestIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartPkThumbnailDigestIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartUuidStrActivityIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartUuidStrVersionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChartUuidStrVersionsVersionUuidStrIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChartUuidStrVersionsVersionUuidStrRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChartUuidPurgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ChartUuidRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CssTemplateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CssTemplateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CssTemplateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CssTemplateInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CssTemplateRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CssTemplatePkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CssTemplatePkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CssTemplatePkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DashboardIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DashboardIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardExportXlsxDownloadJobIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardExportXlsxStatusJobIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardFavoriteStatusIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DashboardImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardPermalinkKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardIdOrSlugChartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DashboardIdOrSlugCopyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardIdOrSlugDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DashboardIdOrSlugEmbeddedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardIdOrSlugEmbeddedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DashboardIdOrSlugEmbeddedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DashboardIdOrSlugEmbeddedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardIdOrSlugTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DashboardPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DashboardPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DashboardPkCacheDashboardScreenshotIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DashboardPkChartCustomizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DashboardPkColorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardPkExportAsExampleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DashboardPkExportXlsxIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DashboardPkFavoritesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DashboardPkFavoritesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DashboardPkFilterStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DashboardPkFilterStateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardPkFilterStateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DashboardPkFilterStateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DashboardPkFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DashboardPkPermalinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardPkScreenshotDigestIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardPkThumbnailDigestIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardUuidStrActivityIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardUuidStrVersionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DashboardUuidStrVersionsVersionUuidStrIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DashboardUuidStrVersionsVersionUuidStrRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DashboardUuidPurgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DashboardUuidRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabaseIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatabaseIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabaseInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabaseAvailableIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabaseExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatabaseImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabaseOauth2IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabaseRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatabaseTestConnectionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatabaseUploadMetadataIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatabaseValidateParametersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DatabasePkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DatabasePkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkCatalogsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkEncryptedExtraHintsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkFunctionNamesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkOauth2TokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatabasePkOauth2TokensAllIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatabasePkOauth2TokensDeleteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkRelatedObjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkSchemasIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkSchemasAccessForFileUploadIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkSelectStarTableNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkSelectStarTableNameSchemaNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatabasePkSyncPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkTableTableNameSchemaNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkTableExtraTableNameSchemaNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkTableMetadataIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkTableMetadataExtraIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatabasePkTablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatabasePkUploadIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatabasePkValidateSqlIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DatasetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatasetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetDistinctColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatasetDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatasetGetOrCreateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatasetImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetRelatedObjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DatasetWarmUpCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetIdOrUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetIdOrUuidRelatedObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DatasetPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DatasetPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DatasetPkColumnColumnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetPkDrillInfoIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DatasetPkMetricMetricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatasetPkPartitionMappingPreviewIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DatasetPkRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetUuidStrActivityIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetUuidStrVersionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetUuidStrVersionsVersionUuidStrIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatasetUuidStrVersionsVersionUuidStrRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatasetUuidPurgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasetUuidPurgeImpactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatasetUuidRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasourceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasourceDatasourceTypeDatasourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatasourceDatasourceTypeDatasourceIdCompatibleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatasourceDatasourceTypeDatasourceIdQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DatasourceDatasourceTypeDatasourceIdValidateExpressionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmbeddedDashboardUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ExploreIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ExploreFormDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ExploreFormDataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ExploreFormDataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ExploreFormDataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ExplorePermalinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ExplorePermalinkKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LogIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LogIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LogRecentActivityIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LogPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MeApiKeyScopesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MeRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MenuIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QueryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QueryDistinctColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QueryRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1QueryStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QueryUpdatedSinceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QueryPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ReportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReportInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReportConfigurationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ReportConfigurationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReportRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReportSlackChannelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ReportPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReportPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ReportPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportPkExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReportPkLogIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReportPkLogLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1RowlevelsecurityIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RowlevelsecurityIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RowlevelsecurityIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RowlevelsecurityInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RowlevelsecurityRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1RowlevelsecurityPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RowlevelsecurityPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1RowlevelsecurityPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SavedQueryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SavedQueryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SavedQueryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SavedQueryInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SavedQueryDistinctColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SavedQueryExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SavedQueryImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SavedQueryRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SavedQueryPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SavedQueryPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SavedQueryPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityCsrfTokenIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecurityGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityGroupsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SecurityGroupsPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityGroupsPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SecurityGroupsPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecurityGuestTokenIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecurityLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecurityPasswordRecoveryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecurityPasswordRecoveryResetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityPermissionsResourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecurityPermissionsResourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityPermissionsResourcesInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SecurityPermissionsResourcesPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityPermissionsResourcesPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SecurityPermissionsResourcesPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityPermissionsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityPermissionsPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecurityRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityResourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecurityResourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityResourcesInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SecurityResourcesPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityResourcesPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SecurityResourcesPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecurityRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityRolesInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityRolesSearchIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SecurityRolesPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityRolesPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SecurityRolesPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SecurityRolesRoleIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecurityRolesRoleIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityRolesRoleIdPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SecurityRolesRoleIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecuritySubjectIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecuritySubjectInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecuritySubjectPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityUserRegistrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityUserRegistrationsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SecurityUserRegistrationsPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityUserRegistrationsPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecurityUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityUsersInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SecurityUsersPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityUsersPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SecurityUsersPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SecurityUsersPkSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SemanticLayerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SemanticLayerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SemanticLayerConnectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SemanticLayerSchemaConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SemanticLayerTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SemanticLayerUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SemanticLayerUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SemanticLayerUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SemanticLayerUuidClearCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SemanticLayerUuidSchemaRuntimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SemanticLayerUuidViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SemanticViewIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SemanticViewIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SemanticViewPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SemanticViewPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SemanticViewPkStructureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SqllabIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SqllabEstimateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SqllabExecuteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SqllabExportClientIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SqllabExportStreamingIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SqllabFormatSqlIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SqllabPermalinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SqllabPermalinkKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SqllabResultsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TagIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TagIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TagBulkCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagFavoriteStatusIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagGetObjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TagObjectTypeObjectIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TagObjectTypeObjectIdTagIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TagPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TagPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TagPkFavoritesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TagPkFavoritesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ThemeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ThemeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ThemeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ThemeInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ThemeExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ThemeImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ThemeRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ThemeSystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ThemeUnsetSystemDarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ThemeUnsetSystemDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ThemePkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ThemePkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ThemePkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ThemePkSetSystemDarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ThemePkSetSystemDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UserUserIdAvatarPngRoute, (c) => {
    throw new Error('Not implemented')
  })
