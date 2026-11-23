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
} from './routes'
import {
  deleteApiV1AnnotationLayerIndexRouteHandler,
  deleteApiV1AnnotationLayerPkAnnotationAnnotationIdRouteHandler,
  deleteApiV1AnnotationLayerPkAnnotationIndexRouteHandler,
  deleteApiV1AnnotationLayerPkRouteHandler,
  deleteApiV1ChartIndexRouteHandler,
  deleteApiV1ChartPkFavoritesIndexRouteHandler,
  deleteApiV1ChartPkRouteHandler,
  deleteApiV1CssTemplateIndexRouteHandler,
  deleteApiV1CssTemplatePkRouteHandler,
  deleteApiV1DashboardIdOrSlugEmbeddedRouteHandler,
  deleteApiV1DashboardIndexRouteHandler,
  deleteApiV1DashboardPkFavoritesIndexRouteHandler,
  deleteApiV1DashboardPkFilterStateKeyRouteHandler,
  deleteApiV1DashboardPkRouteHandler,
  deleteApiV1DatabasePkRouteHandler,
  deleteApiV1DatasetIndexRouteHandler,
  deleteApiV1DatasetPkColumnColumnIdRouteHandler,
  deleteApiV1DatasetPkMetricMetricIdRouteHandler,
  deleteApiV1DatasetPkRouteHandler,
  deleteApiV1ExploreFormDataKeyRouteHandler,
  deleteApiV1ReportIndexRouteHandler,
  deleteApiV1ReportPkRouteHandler,
  deleteApiV1RowlevelsecurityIndexRouteHandler,
  deleteApiV1RowlevelsecurityPkRouteHandler,
  deleteApiV1SavedQueryIndexRouteHandler,
  deleteApiV1SavedQueryPkRouteHandler,
  deleteApiV1SecurityGroupsPkRouteHandler,
  deleteApiV1SecurityPermissionsResourcesPkRouteHandler,
  deleteApiV1SecurityResourcesPkRouteHandler,
  deleteApiV1SecurityRolesPkRouteHandler,
  deleteApiV1SecurityUserRegistrationsPkRouteHandler,
  deleteApiV1SecurityUsersPkRouteHandler,
  deleteApiV1SecurityUsersPkSessionsRouteHandler,
  deleteApiV1SemanticLayerUuidRouteHandler,
  deleteApiV1SemanticViewIndexRouteHandler,
  deleteApiV1SemanticViewPkRouteHandler,
  deleteApiV1TagIndexRouteHandler,
  deleteApiV1TagObjectTypeObjectIdTagIndexRouteHandler,
  deleteApiV1TagPkFavoritesIndexRouteHandler,
  deleteApiV1TagPkRouteHandler,
  deleteApiV1ThemeIndexRouteHandler,
  deleteApiV1ThemePkRouteHandler,
  deleteApiV1ThemeUnsetSystemDarkRouteHandler,
  deleteApiV1ThemeUnsetSystemDefaultRouteHandler,
  getApiV1AdvancedDataTypeConvertRouteHandler,
  getApiV1AdvancedDataTypeTypesRouteHandler,
  getApiV1AnnotationLayerIndexRouteHandler,
  getApiV1AnnotationLayerInfoRouteHandler,
  getApiV1AnnotationLayerPkAnnotationAnnotationIdRouteHandler,
  getApiV1AnnotationLayerPkAnnotationIndexRouteHandler,
  getApiV1AnnotationLayerPkRouteHandler,
  getApiV1AnnotationLayerRelatedColumnNameRouteHandler,
  getApiV1AssetsExportIndexRouteHandler,
  getApiV1AvailableDomainsIndexRouteHandler,
  getApiV1ChartExportIndexRouteHandler,
  getApiV1ChartFavoriteStatusIndexRouteHandler,
  getApiV1ChartIdOrUuidRouteHandler,
  getApiV1ChartIndexRouteHandler,
  getApiV1ChartInfoRouteHandler,
  getApiV1ChartPkCacheScreenshotIndexRouteHandler,
  getApiV1ChartPkDataIndexRouteHandler,
  getApiV1ChartPkDeckLayersIndexRouteHandler,
  getApiV1ChartPkScreenshotDigestIndexRouteHandler,
  getApiV1ChartPkThumbnailDigestIndexRouteHandler,
  getApiV1ChartRelatedColumnNameRouteHandler,
  getApiV1ChartUuidStrActivityIndexRouteHandler,
  getApiV1ChartUuidStrVersionsIndexRouteHandler,
  getApiV1ChartUuidStrVersionsVersionUuidStrIndexRouteHandler,
  getApiV1CssTemplateIndexRouteHandler,
  getApiV1CssTemplateInfoRouteHandler,
  getApiV1CssTemplatePkRouteHandler,
  getApiV1CssTemplateRelatedColumnNameRouteHandler,
  getApiV1DashboardExportIndexRouteHandler,
  getApiV1DashboardExportXlsxDownloadJobIdIndexRouteHandler,
  getApiV1DashboardExportXlsxStatusJobIdIndexRouteHandler,
  getApiV1DashboardFavoriteStatusIndexRouteHandler,
  getApiV1DashboardIdOrSlugChartsRouteHandler,
  getApiV1DashboardIdOrSlugDatasetsRouteHandler,
  getApiV1DashboardIdOrSlugEmbeddedRouteHandler,
  getApiV1DashboardIdOrSlugRouteHandler,
  getApiV1DashboardIdOrSlugTabsRouteHandler,
  getApiV1DashboardIndexRouteHandler,
  getApiV1DashboardInfoRouteHandler,
  getApiV1DashboardPermalinkKeyRouteHandler,
  getApiV1DashboardPkExportAsExampleIndexRouteHandler,
  getApiV1DashboardPkFilterStateKeyRouteHandler,
  getApiV1DashboardPkScreenshotDigestIndexRouteHandler,
  getApiV1DashboardPkThumbnailDigestIndexRouteHandler,
  getApiV1DashboardRelatedColumnNameRouteHandler,
  getApiV1DashboardUuidStrActivityIndexRouteHandler,
  getApiV1DashboardUuidStrVersionsIndexRouteHandler,
  getApiV1DashboardUuidStrVersionsVersionUuidStrIndexRouteHandler,
  getApiV1DatabaseAvailableIndexRouteHandler,
  getApiV1DatabaseExportIndexRouteHandler,
  getApiV1DatabaseIndexRouteHandler,
  getApiV1DatabaseInfoRouteHandler,
  getApiV1DatabaseOauth2IndexRouteHandler,
  getApiV1DatabasePkCatalogsIndexRouteHandler,
  getApiV1DatabasePkConnectionRouteHandler,
  getApiV1DatabasePkEncryptedExtraHintsIndexRouteHandler,
  getApiV1DatabasePkFunctionNamesIndexRouteHandler,
  getApiV1DatabasePkOauth2TokensIndexRouteHandler,
  getApiV1DatabasePkRelatedObjectsIndexRouteHandler,
  getApiV1DatabasePkRouteHandler,
  getApiV1DatabasePkSchemasAccessForFileUploadIndexRouteHandler,
  getApiV1DatabasePkSchemasIndexRouteHandler,
  getApiV1DatabasePkSelectStarTableNameIndexRouteHandler,
  getApiV1DatabasePkSelectStarTableNameSchemaNameIndexRouteHandler,
  getApiV1DatabasePkTableExtraTableNameSchemaNameIndexRouteHandler,
  getApiV1DatabasePkTableMetadataExtraIndexRouteHandler,
  getApiV1DatabasePkTableMetadataIndexRouteHandler,
  getApiV1DatabasePkTablesIndexRouteHandler,
  getApiV1DatabasePkTableTableNameSchemaNameIndexRouteHandler,
  getApiV1DatabaseRelatedColumnNameRouteHandler,
  getApiV1DatasetDistinctColumnNameRouteHandler,
  getApiV1DatasetExportIndexRouteHandler,
  getApiV1DatasetIdOrUuidRelatedObjectsRouteHandler,
  getApiV1DatasetIdOrUuidRouteHandler,
  getApiV1DatasetIndexRouteHandler,
  getApiV1DatasetInfoRouteHandler,
  getApiV1DatasetPkDrillInfoIndexRouteHandler,
  getApiV1DatasetRelatedColumnNameRouteHandler,
  getApiV1DatasetRelatedObjectsIndexRouteHandler,
  getApiV1DatasetUuidPurgeImpactRouteHandler,
  getApiV1DatasetUuidStrActivityIndexRouteHandler,
  getApiV1DatasetUuidStrVersionsIndexRouteHandler,
  getApiV1DatasetUuidStrVersionsVersionUuidStrIndexRouteHandler,
  getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndexRouteHandler,
  getApiV1DatasourceDatasourceTypeDatasourceIdRouteHandler,
  getApiV1DatasourceIndexRouteHandler,
  getApiV1EmbeddedDashboardUuidRouteHandler,
  getApiV1ExploreFormDataKeyRouteHandler,
  getApiV1ExploreIndexRouteHandler,
  getApiV1ExplorePermalinkKeyRouteHandler,
  getApiV1LogIndexRouteHandler,
  getApiV1LogPkRouteHandler,
  getApiV1LogRecentActivityIndexRouteHandler,
  getApiV1MeApiKeyScopesIndexRouteHandler,
  getApiV1MeIndexRouteHandler,
  getApiV1MenuIndexRouteHandler,
  getApiV1MeRolesIndexRouteHandler,
  getApiV1QueryDistinctColumnNameRouteHandler,
  getApiV1QueryIndexRouteHandler,
  getApiV1QueryPkRouteHandler,
  getApiV1QueryRelatedColumnNameRouteHandler,
  getApiV1QueryUpdatedSinceRouteHandler,
  getApiV1ReportConfigurationIndexRouteHandler,
  getApiV1ReportIndexRouteHandler,
  getApiV1ReportInfoRouteHandler,
  getApiV1ReportPkLogIndexRouteHandler,
  getApiV1ReportPkLogLogIdRouteHandler,
  getApiV1ReportPkRouteHandler,
  getApiV1ReportRelatedColumnNameRouteHandler,
  getApiV1ReportSlackChannelsIndexRouteHandler,
  getApiV1RowlevelsecurityIndexRouteHandler,
  getApiV1RowlevelsecurityInfoRouteHandler,
  getApiV1RowlevelsecurityPkRouteHandler,
  getApiV1RowlevelsecurityRelatedColumnNameRouteHandler,
  getApiV1SavedQueryDistinctColumnNameRouteHandler,
  getApiV1SavedQueryExportIndexRouteHandler,
  getApiV1SavedQueryIndexRouteHandler,
  getApiV1SavedQueryInfoRouteHandler,
  getApiV1SavedQueryPkRouteHandler,
  getApiV1SavedQueryRelatedColumnNameRouteHandler,
  getApiV1SecurityCsrfTokenIndexRouteHandler,
  getApiV1SecurityGroupsIndexRouteHandler,
  getApiV1SecurityGroupsInfoRouteHandler,
  getApiV1SecurityGroupsPkRouteHandler,
  getApiV1SecurityPermissionsIndexRouteHandler,
  getApiV1SecurityPermissionsInfoRouteHandler,
  getApiV1SecurityPermissionsPkRouteHandler,
  getApiV1SecurityPermissionsResourcesIndexRouteHandler,
  getApiV1SecurityPermissionsResourcesInfoRouteHandler,
  getApiV1SecurityPermissionsResourcesPkRouteHandler,
  getApiV1SecurityResourcesIndexRouteHandler,
  getApiV1SecurityResourcesInfoRouteHandler,
  getApiV1SecurityResourcesPkRouteHandler,
  getApiV1SecurityRolesIndexRouteHandler,
  getApiV1SecurityRolesInfoRouteHandler,
  getApiV1SecurityRolesPkRouteHandler,
  getApiV1SecurityRolesRoleIdPermissionsIndexRouteHandler,
  getApiV1SecurityRolesSearchIndexRouteHandler,
  getApiV1SecuritySubjectIndexRouteHandler,
  getApiV1SecuritySubjectInfoRouteHandler,
  getApiV1SecuritySubjectPkRouteHandler,
  getApiV1SecurityUserRegistrationsIndexRouteHandler,
  getApiV1SecurityUserRegistrationsInfoRouteHandler,
  getApiV1SecurityUserRegistrationsPkRouteHandler,
  getApiV1SecurityUsersIndexRouteHandler,
  getApiV1SecurityUsersInfoRouteHandler,
  getApiV1SecurityUsersPkRouteHandler,
  getApiV1SemanticLayerConnectionsIndexRouteHandler,
  getApiV1SemanticLayerIndexRouteHandler,
  getApiV1SemanticLayerTypesRouteHandler,
  getApiV1SemanticLayerUuidRouteHandler,
  getApiV1SemanticViewPkStructureRouteHandler,
  getApiV1SqllabExportClientIdIndexRouteHandler,
  getApiV1SqllabIndexRouteHandler,
  getApiV1SqllabPermalinkKeyRouteHandler,
  getApiV1SqllabResultsIndexRouteHandler,
  getApiV1TagFavoriteStatusIndexRouteHandler,
  getApiV1TagGetObjectsIndexRouteHandler,
  getApiV1TagIndexRouteHandler,
  getApiV1TagInfoRouteHandler,
  getApiV1TagPkRouteHandler,
  getApiV1TagRelatedColumnNameRouteHandler,
  getApiV1ThemeExportIndexRouteHandler,
  getApiV1ThemeIndexRouteHandler,
  getApiV1ThemeInfoRouteHandler,
  getApiV1ThemePkRouteHandler,
  getApiV1ThemeRelatedColumnNameRouteHandler,
  getApiV1ThemeSystemRouteHandler,
  getApiV1UserUserIdAvatarPngRouteHandler,
  postApiV1AnnotationLayerIndexRouteHandler,
  postApiV1AnnotationLayerPkAnnotationIndexRouteHandler,
  postApiV1AssetsImportIndexRouteHandler,
  postApiV1CachekeyInvalidateRouteHandler,
  postApiV1ChartDataRouteHandler,
  postApiV1ChartDataStopRouteHandler,
  postApiV1ChartImportIndexRouteHandler,
  postApiV1ChartIndexRouteHandler,
  postApiV1ChartPkFavoritesIndexRouteHandler,
  postApiV1ChartUuidPurgeRouteHandler,
  postApiV1ChartUuidRestoreRouteHandler,
  postApiV1ChartUuidStrVersionsVersionUuidStrRestoreRouteHandler,
  postApiV1CssTemplateIndexRouteHandler,
  postApiV1DashboardIdOrSlugCopyIndexRouteHandler,
  postApiV1DashboardIdOrSlugEmbeddedRouteHandler,
  postApiV1DashboardImportIndexRouteHandler,
  postApiV1DashboardIndexRouteHandler,
  postApiV1DashboardPkCacheDashboardScreenshotIndexRouteHandler,
  postApiV1DashboardPkExportXlsxIndexRouteHandler,
  postApiV1DashboardPkFavoritesIndexRouteHandler,
  postApiV1DashboardPkFilterStateRouteHandler,
  postApiV1DashboardPkPermalinkRouteHandler,
  postApiV1DashboardUuidPurgeRouteHandler,
  postApiV1DashboardUuidRestoreRouteHandler,
  postApiV1DashboardUuidStrVersionsVersionUuidStrRestoreRouteHandler,
  postApiV1DatabaseImportIndexRouteHandler,
  postApiV1DatabaseIndexRouteHandler,
  postApiV1DatabasePkOauth2TokensAllIndexRouteHandler,
  postApiV1DatabasePkOauth2TokensDeleteIndexRouteHandler,
  postApiV1DatabasePkSyncPermissionsIndexRouteHandler,
  postApiV1DatabasePkUploadIndexRouteHandler,
  postApiV1DatabasePkValidateSqlIndexRouteHandler,
  postApiV1DatabaseTestConnectionIndexRouteHandler,
  postApiV1DatabaseUploadMetadataIndexRouteHandler,
  postApiV1DatabaseValidateParametersIndexRouteHandler,
  postApiV1DatasetDuplicateRouteHandler,
  postApiV1DatasetGetOrCreateIndexRouteHandler,
  postApiV1DatasetImportIndexRouteHandler,
  postApiV1DatasetIndexRouteHandler,
  postApiV1DatasetPkPartitionMappingPreviewIndexRouteHandler,
  postApiV1DatasetUuidPurgeRouteHandler,
  postApiV1DatasetUuidRestoreRouteHandler,
  postApiV1DatasetUuidStrVersionsVersionUuidStrRestoreRouteHandler,
  postApiV1DatasourceDatasourceTypeDatasourceIdCompatibleRouteHandler,
  postApiV1DatasourceDatasourceTypeDatasourceIdQueryRouteHandler,
  postApiV1DatasourceDatasourceTypeDatasourceIdValidateExpressionIndexRouteHandler,
  postApiV1ExploreFormDataRouteHandler,
  postApiV1ExplorePermalinkRouteHandler,
  postApiV1LogIndexRouteHandler,
  postApiV1QueryStopRouteHandler,
  postApiV1ReportIndexRouteHandler,
  postApiV1ReportPkExecuteRouteHandler,
  postApiV1ReportSubscribeRouteHandler,
  postApiV1RowlevelsecurityIndexRouteHandler,
  postApiV1SavedQueryImportIndexRouteHandler,
  postApiV1SavedQueryIndexRouteHandler,
  postApiV1SecurityGroupsIndexRouteHandler,
  postApiV1SecurityGuestTokenIndexRouteHandler,
  postApiV1SecurityLoginRouteHandler,
  postApiV1SecurityPasswordRecoveryIndexRouteHandler,
  postApiV1SecurityPasswordRecoveryResetIndexRouteHandler,
  postApiV1SecurityPermissionsResourcesIndexRouteHandler,
  postApiV1SecurityRefreshRouteHandler,
  postApiV1SecurityResourcesIndexRouteHandler,
  postApiV1SecurityRolesIndexRouteHandler,
  postApiV1SecurityRolesRoleIdPermissionsRouteHandler,
  postApiV1SecurityUsersIndexRouteHandler,
  postApiV1SemanticLayerIndexRouteHandler,
  postApiV1SemanticLayerSchemaConfigurationRouteHandler,
  postApiV1SemanticLayerUuidClearCacheRouteHandler,
  postApiV1SemanticLayerUuidSchemaRuntimeRouteHandler,
  postApiV1SemanticLayerUuidViewsRouteHandler,
  postApiV1SemanticViewIndexRouteHandler,
  postApiV1SqllabEstimateIndexRouteHandler,
  postApiV1SqllabExecuteIndexRouteHandler,
  postApiV1SqllabExportStreamingIndexRouteHandler,
  postApiV1SqllabFormatSqlIndexRouteHandler,
  postApiV1SqllabPermalinkRouteHandler,
  postApiV1TagBulkCreateRouteHandler,
  postApiV1TagIndexRouteHandler,
  postApiV1TagObjectTypeObjectIdIndexRouteHandler,
  postApiV1TagPkFavoritesIndexRouteHandler,
  postApiV1ThemeImportIndexRouteHandler,
  postApiV1ThemeIndexRouteHandler,
  putApiV1AnnotationLayerPkAnnotationAnnotationIdRouteHandler,
  putApiV1AnnotationLayerPkRouteHandler,
  putApiV1ChartPkRouteHandler,
  putApiV1ChartWarmUpCacheRouteHandler,
  putApiV1CssTemplatePkRouteHandler,
  putApiV1DashboardIdOrSlugEmbeddedRouteHandler,
  putApiV1DashboardPkChartCustomizationsRouteHandler,
  putApiV1DashboardPkColorsRouteHandler,
  putApiV1DashboardPkFiltersRouteHandler,
  putApiV1DashboardPkFilterStateKeyRouteHandler,
  putApiV1DashboardPkRouteHandler,
  putApiV1DatabasePkRouteHandler,
  putApiV1DatasetPkRefreshRouteHandler,
  putApiV1DatasetPkRouteHandler,
  putApiV1DatasetWarmUpCacheRouteHandler,
  putApiV1ExploreFormDataKeyRouteHandler,
  putApiV1MeIndexRouteHandler,
  putApiV1ReportConfigurationIndexRouteHandler,
  putApiV1ReportPkRouteHandler,
  putApiV1RowlevelsecurityPkRouteHandler,
  putApiV1SavedQueryPkRouteHandler,
  putApiV1SecurityGroupsPkRouteHandler,
  putApiV1SecurityPermissionsResourcesPkRouteHandler,
  putApiV1SecurityResourcesPkRouteHandler,
  putApiV1SecurityRolesPkRouteHandler,
  putApiV1SecurityRolesRoleIdGroupsRouteHandler,
  putApiV1SecurityRolesRoleIdUsersRouteHandler,
  putApiV1SecurityUsersPkRouteHandler,
  putApiV1SemanticLayerUuidRouteHandler,
  putApiV1SemanticViewPkRouteHandler,
  putApiV1TagPkRouteHandler,
  putApiV1ThemePkRouteHandler,
  putApiV1ThemePkSetSystemDarkRouteHandler,
  putApiV1ThemePkSetSystemDefaultRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1AdvancedDataTypeConvertRoute, getApiV1AdvancedDataTypeConvertRouteHandler)
  .openapi(getApiV1AdvancedDataTypeTypesRoute, getApiV1AdvancedDataTypeTypesRouteHandler)
  .openapi(deleteApiV1AnnotationLayerIndexRoute, deleteApiV1AnnotationLayerIndexRouteHandler)
  .openapi(getApiV1AnnotationLayerIndexRoute, getApiV1AnnotationLayerIndexRouteHandler)
  .openapi(postApiV1AnnotationLayerIndexRoute, postApiV1AnnotationLayerIndexRouteHandler)
  .openapi(getApiV1AnnotationLayerInfoRoute, getApiV1AnnotationLayerInfoRouteHandler)
  .openapi(
    getApiV1AnnotationLayerRelatedColumnNameRoute,
    getApiV1AnnotationLayerRelatedColumnNameRouteHandler,
  )
  .openapi(deleteApiV1AnnotationLayerPkRoute, deleteApiV1AnnotationLayerPkRouteHandler)
  .openapi(getApiV1AnnotationLayerPkRoute, getApiV1AnnotationLayerPkRouteHandler)
  .openapi(putApiV1AnnotationLayerPkRoute, putApiV1AnnotationLayerPkRouteHandler)
  .openapi(
    deleteApiV1AnnotationLayerPkAnnotationIndexRoute,
    deleteApiV1AnnotationLayerPkAnnotationIndexRouteHandler,
  )
  .openapi(
    getApiV1AnnotationLayerPkAnnotationIndexRoute,
    getApiV1AnnotationLayerPkAnnotationIndexRouteHandler,
  )
  .openapi(
    postApiV1AnnotationLayerPkAnnotationIndexRoute,
    postApiV1AnnotationLayerPkAnnotationIndexRouteHandler,
  )
  .openapi(
    deleteApiV1AnnotationLayerPkAnnotationAnnotationIdRoute,
    deleteApiV1AnnotationLayerPkAnnotationAnnotationIdRouteHandler,
  )
  .openapi(
    getApiV1AnnotationLayerPkAnnotationAnnotationIdRoute,
    getApiV1AnnotationLayerPkAnnotationAnnotationIdRouteHandler,
  )
  .openapi(
    putApiV1AnnotationLayerPkAnnotationAnnotationIdRoute,
    putApiV1AnnotationLayerPkAnnotationAnnotationIdRouteHandler,
  )
  .openapi(getApiV1AssetsExportIndexRoute, getApiV1AssetsExportIndexRouteHandler)
  .openapi(postApiV1AssetsImportIndexRoute, postApiV1AssetsImportIndexRouteHandler)
  .openapi(getApiV1AvailableDomainsIndexRoute, getApiV1AvailableDomainsIndexRouteHandler)
  .openapi(postApiV1CachekeyInvalidateRoute, postApiV1CachekeyInvalidateRouteHandler)
  .openapi(deleteApiV1ChartIndexRoute, deleteApiV1ChartIndexRouteHandler)
  .openapi(getApiV1ChartIndexRoute, getApiV1ChartIndexRouteHandler)
  .openapi(postApiV1ChartIndexRoute, postApiV1ChartIndexRouteHandler)
  .openapi(getApiV1ChartInfoRoute, getApiV1ChartInfoRouteHandler)
  .openapi(postApiV1ChartDataRoute, postApiV1ChartDataRouteHandler)
  .openapi(postApiV1ChartDataStopRoute, postApiV1ChartDataStopRouteHandler)
  .openapi(getApiV1ChartExportIndexRoute, getApiV1ChartExportIndexRouteHandler)
  .openapi(getApiV1ChartFavoriteStatusIndexRoute, getApiV1ChartFavoriteStatusIndexRouteHandler)
  .openapi(postApiV1ChartImportIndexRoute, postApiV1ChartImportIndexRouteHandler)
  .openapi(getApiV1ChartRelatedColumnNameRoute, getApiV1ChartRelatedColumnNameRouteHandler)
  .openapi(putApiV1ChartWarmUpCacheRoute, putApiV1ChartWarmUpCacheRouteHandler)
  .openapi(getApiV1ChartIdOrUuidRoute, getApiV1ChartIdOrUuidRouteHandler)
  .openapi(deleteApiV1ChartPkRoute, deleteApiV1ChartPkRouteHandler)
  .openapi(putApiV1ChartPkRoute, putApiV1ChartPkRouteHandler)
  .openapi(
    getApiV1ChartPkCacheScreenshotIndexRoute,
    getApiV1ChartPkCacheScreenshotIndexRouteHandler,
  )
  .openapi(getApiV1ChartPkDataIndexRoute, getApiV1ChartPkDataIndexRouteHandler)
  .openapi(getApiV1ChartPkDeckLayersIndexRoute, getApiV1ChartPkDeckLayersIndexRouteHandler)
  .openapi(deleteApiV1ChartPkFavoritesIndexRoute, deleteApiV1ChartPkFavoritesIndexRouteHandler)
  .openapi(postApiV1ChartPkFavoritesIndexRoute, postApiV1ChartPkFavoritesIndexRouteHandler)
  .openapi(
    getApiV1ChartPkScreenshotDigestIndexRoute,
    getApiV1ChartPkScreenshotDigestIndexRouteHandler,
  )
  .openapi(
    getApiV1ChartPkThumbnailDigestIndexRoute,
    getApiV1ChartPkThumbnailDigestIndexRouteHandler,
  )
  .openapi(getApiV1ChartUuidStrActivityIndexRoute, getApiV1ChartUuidStrActivityIndexRouteHandler)
  .openapi(getApiV1ChartUuidStrVersionsIndexRoute, getApiV1ChartUuidStrVersionsIndexRouteHandler)
  .openapi(
    getApiV1ChartUuidStrVersionsVersionUuidStrIndexRoute,
    getApiV1ChartUuidStrVersionsVersionUuidStrIndexRouteHandler,
  )
  .openapi(
    postApiV1ChartUuidStrVersionsVersionUuidStrRestoreRoute,
    postApiV1ChartUuidStrVersionsVersionUuidStrRestoreRouteHandler,
  )
  .openapi(postApiV1ChartUuidPurgeRoute, postApiV1ChartUuidPurgeRouteHandler)
  .openapi(postApiV1ChartUuidRestoreRoute, postApiV1ChartUuidRestoreRouteHandler)
  .openapi(deleteApiV1CssTemplateIndexRoute, deleteApiV1CssTemplateIndexRouteHandler)
  .openapi(getApiV1CssTemplateIndexRoute, getApiV1CssTemplateIndexRouteHandler)
  .openapi(postApiV1CssTemplateIndexRoute, postApiV1CssTemplateIndexRouteHandler)
  .openapi(getApiV1CssTemplateInfoRoute, getApiV1CssTemplateInfoRouteHandler)
  .openapi(
    getApiV1CssTemplateRelatedColumnNameRoute,
    getApiV1CssTemplateRelatedColumnNameRouteHandler,
  )
  .openapi(deleteApiV1CssTemplatePkRoute, deleteApiV1CssTemplatePkRouteHandler)
  .openapi(getApiV1CssTemplatePkRoute, getApiV1CssTemplatePkRouteHandler)
  .openapi(putApiV1CssTemplatePkRoute, putApiV1CssTemplatePkRouteHandler)
  .openapi(deleteApiV1DashboardIndexRoute, deleteApiV1DashboardIndexRouteHandler)
  .openapi(getApiV1DashboardIndexRoute, getApiV1DashboardIndexRouteHandler)
  .openapi(postApiV1DashboardIndexRoute, postApiV1DashboardIndexRouteHandler)
  .openapi(getApiV1DashboardInfoRoute, getApiV1DashboardInfoRouteHandler)
  .openapi(getApiV1DashboardExportIndexRoute, getApiV1DashboardExportIndexRouteHandler)
  .openapi(
    getApiV1DashboardExportXlsxDownloadJobIdIndexRoute,
    getApiV1DashboardExportXlsxDownloadJobIdIndexRouteHandler,
  )
  .openapi(
    getApiV1DashboardExportXlsxStatusJobIdIndexRoute,
    getApiV1DashboardExportXlsxStatusJobIdIndexRouteHandler,
  )
  .openapi(
    getApiV1DashboardFavoriteStatusIndexRoute,
    getApiV1DashboardFavoriteStatusIndexRouteHandler,
  )
  .openapi(postApiV1DashboardImportIndexRoute, postApiV1DashboardImportIndexRouteHandler)
  .openapi(getApiV1DashboardPermalinkKeyRoute, getApiV1DashboardPermalinkKeyRouteHandler)
  .openapi(getApiV1DashboardRelatedColumnNameRoute, getApiV1DashboardRelatedColumnNameRouteHandler)
  .openapi(getApiV1DashboardIdOrSlugRoute, getApiV1DashboardIdOrSlugRouteHandler)
  .openapi(getApiV1DashboardIdOrSlugChartsRoute, getApiV1DashboardIdOrSlugChartsRouteHandler)
  .openapi(
    postApiV1DashboardIdOrSlugCopyIndexRoute,
    postApiV1DashboardIdOrSlugCopyIndexRouteHandler,
  )
  .openapi(getApiV1DashboardIdOrSlugDatasetsRoute, getApiV1DashboardIdOrSlugDatasetsRouteHandler)
  .openapi(
    deleteApiV1DashboardIdOrSlugEmbeddedRoute,
    deleteApiV1DashboardIdOrSlugEmbeddedRouteHandler,
  )
  .openapi(getApiV1DashboardIdOrSlugEmbeddedRoute, getApiV1DashboardIdOrSlugEmbeddedRouteHandler)
  .openapi(postApiV1DashboardIdOrSlugEmbeddedRoute, postApiV1DashboardIdOrSlugEmbeddedRouteHandler)
  .openapi(putApiV1DashboardIdOrSlugEmbeddedRoute, putApiV1DashboardIdOrSlugEmbeddedRouteHandler)
  .openapi(getApiV1DashboardIdOrSlugTabsRoute, getApiV1DashboardIdOrSlugTabsRouteHandler)
  .openapi(deleteApiV1DashboardPkRoute, deleteApiV1DashboardPkRouteHandler)
  .openapi(putApiV1DashboardPkRoute, putApiV1DashboardPkRouteHandler)
  .openapi(
    postApiV1DashboardPkCacheDashboardScreenshotIndexRoute,
    postApiV1DashboardPkCacheDashboardScreenshotIndexRouteHandler,
  )
  .openapi(
    putApiV1DashboardPkChartCustomizationsRoute,
    putApiV1DashboardPkChartCustomizationsRouteHandler,
  )
  .openapi(putApiV1DashboardPkColorsRoute, putApiV1DashboardPkColorsRouteHandler)
  .openapi(
    getApiV1DashboardPkExportAsExampleIndexRoute,
    getApiV1DashboardPkExportAsExampleIndexRouteHandler,
  )
  .openapi(
    postApiV1DashboardPkExportXlsxIndexRoute,
    postApiV1DashboardPkExportXlsxIndexRouteHandler,
  )
  .openapi(
    deleteApiV1DashboardPkFavoritesIndexRoute,
    deleteApiV1DashboardPkFavoritesIndexRouteHandler,
  )
  .openapi(postApiV1DashboardPkFavoritesIndexRoute, postApiV1DashboardPkFavoritesIndexRouteHandler)
  .openapi(postApiV1DashboardPkFilterStateRoute, postApiV1DashboardPkFilterStateRouteHandler)
  .openapi(
    deleteApiV1DashboardPkFilterStateKeyRoute,
    deleteApiV1DashboardPkFilterStateKeyRouteHandler,
  )
  .openapi(getApiV1DashboardPkFilterStateKeyRoute, getApiV1DashboardPkFilterStateKeyRouteHandler)
  .openapi(putApiV1DashboardPkFilterStateKeyRoute, putApiV1DashboardPkFilterStateKeyRouteHandler)
  .openapi(putApiV1DashboardPkFiltersRoute, putApiV1DashboardPkFiltersRouteHandler)
  .openapi(postApiV1DashboardPkPermalinkRoute, postApiV1DashboardPkPermalinkRouteHandler)
  .openapi(
    getApiV1DashboardPkScreenshotDigestIndexRoute,
    getApiV1DashboardPkScreenshotDigestIndexRouteHandler,
  )
  .openapi(
    getApiV1DashboardPkThumbnailDigestIndexRoute,
    getApiV1DashboardPkThumbnailDigestIndexRouteHandler,
  )
  .openapi(
    getApiV1DashboardUuidStrActivityIndexRoute,
    getApiV1DashboardUuidStrActivityIndexRouteHandler,
  )
  .openapi(
    getApiV1DashboardUuidStrVersionsIndexRoute,
    getApiV1DashboardUuidStrVersionsIndexRouteHandler,
  )
  .openapi(
    getApiV1DashboardUuidStrVersionsVersionUuidStrIndexRoute,
    getApiV1DashboardUuidStrVersionsVersionUuidStrIndexRouteHandler,
  )
  .openapi(
    postApiV1DashboardUuidStrVersionsVersionUuidStrRestoreRoute,
    postApiV1DashboardUuidStrVersionsVersionUuidStrRestoreRouteHandler,
  )
  .openapi(postApiV1DashboardUuidPurgeRoute, postApiV1DashboardUuidPurgeRouteHandler)
  .openapi(postApiV1DashboardUuidRestoreRoute, postApiV1DashboardUuidRestoreRouteHandler)
  .openapi(getApiV1DatabaseIndexRoute, getApiV1DatabaseIndexRouteHandler)
  .openapi(postApiV1DatabaseIndexRoute, postApiV1DatabaseIndexRouteHandler)
  .openapi(getApiV1DatabaseInfoRoute, getApiV1DatabaseInfoRouteHandler)
  .openapi(getApiV1DatabaseAvailableIndexRoute, getApiV1DatabaseAvailableIndexRouteHandler)
  .openapi(getApiV1DatabaseExportIndexRoute, getApiV1DatabaseExportIndexRouteHandler)
  .openapi(postApiV1DatabaseImportIndexRoute, postApiV1DatabaseImportIndexRouteHandler)
  .openapi(getApiV1DatabaseOauth2IndexRoute, getApiV1DatabaseOauth2IndexRouteHandler)
  .openapi(getApiV1DatabaseRelatedColumnNameRoute, getApiV1DatabaseRelatedColumnNameRouteHandler)
  .openapi(
    postApiV1DatabaseTestConnectionIndexRoute,
    postApiV1DatabaseTestConnectionIndexRouteHandler,
  )
  .openapi(
    postApiV1DatabaseUploadMetadataIndexRoute,
    postApiV1DatabaseUploadMetadataIndexRouteHandler,
  )
  .openapi(
    postApiV1DatabaseValidateParametersIndexRoute,
    postApiV1DatabaseValidateParametersIndexRouteHandler,
  )
  .openapi(deleteApiV1DatabasePkRoute, deleteApiV1DatabasePkRouteHandler)
  .openapi(getApiV1DatabasePkRoute, getApiV1DatabasePkRouteHandler)
  .openapi(putApiV1DatabasePkRoute, putApiV1DatabasePkRouteHandler)
  .openapi(getApiV1DatabasePkCatalogsIndexRoute, getApiV1DatabasePkCatalogsIndexRouteHandler)
  .openapi(getApiV1DatabasePkConnectionRoute, getApiV1DatabasePkConnectionRouteHandler)
  .openapi(
    getApiV1DatabasePkEncryptedExtraHintsIndexRoute,
    getApiV1DatabasePkEncryptedExtraHintsIndexRouteHandler,
  )
  .openapi(
    getApiV1DatabasePkFunctionNamesIndexRoute,
    getApiV1DatabasePkFunctionNamesIndexRouteHandler,
  )
  .openapi(
    getApiV1DatabasePkOauth2TokensIndexRoute,
    getApiV1DatabasePkOauth2TokensIndexRouteHandler,
  )
  .openapi(
    postApiV1DatabasePkOauth2TokensAllIndexRoute,
    postApiV1DatabasePkOauth2TokensAllIndexRouteHandler,
  )
  .openapi(
    postApiV1DatabasePkOauth2TokensDeleteIndexRoute,
    postApiV1DatabasePkOauth2TokensDeleteIndexRouteHandler,
  )
  .openapi(
    getApiV1DatabasePkRelatedObjectsIndexRoute,
    getApiV1DatabasePkRelatedObjectsIndexRouteHandler,
  )
  .openapi(getApiV1DatabasePkSchemasIndexRoute, getApiV1DatabasePkSchemasIndexRouteHandler)
  .openapi(
    getApiV1DatabasePkSchemasAccessForFileUploadIndexRoute,
    getApiV1DatabasePkSchemasAccessForFileUploadIndexRouteHandler,
  )
  .openapi(
    getApiV1DatabasePkSelectStarTableNameIndexRoute,
    getApiV1DatabasePkSelectStarTableNameIndexRouteHandler,
  )
  .openapi(
    getApiV1DatabasePkSelectStarTableNameSchemaNameIndexRoute,
    getApiV1DatabasePkSelectStarTableNameSchemaNameIndexRouteHandler,
  )
  .openapi(
    postApiV1DatabasePkSyncPermissionsIndexRoute,
    postApiV1DatabasePkSyncPermissionsIndexRouteHandler,
  )
  .openapi(
    getApiV1DatabasePkTableTableNameSchemaNameIndexRoute,
    getApiV1DatabasePkTableTableNameSchemaNameIndexRouteHandler,
  )
  .openapi(
    getApiV1DatabasePkTableExtraTableNameSchemaNameIndexRoute,
    getApiV1DatabasePkTableExtraTableNameSchemaNameIndexRouteHandler,
  )
  .openapi(
    getApiV1DatabasePkTableMetadataIndexRoute,
    getApiV1DatabasePkTableMetadataIndexRouteHandler,
  )
  .openapi(
    getApiV1DatabasePkTableMetadataExtraIndexRoute,
    getApiV1DatabasePkTableMetadataExtraIndexRouteHandler,
  )
  .openapi(getApiV1DatabasePkTablesIndexRoute, getApiV1DatabasePkTablesIndexRouteHandler)
  .openapi(postApiV1DatabasePkUploadIndexRoute, postApiV1DatabasePkUploadIndexRouteHandler)
  .openapi(
    postApiV1DatabasePkValidateSqlIndexRoute,
    postApiV1DatabasePkValidateSqlIndexRouteHandler,
  )
  .openapi(deleteApiV1DatasetIndexRoute, deleteApiV1DatasetIndexRouteHandler)
  .openapi(getApiV1DatasetIndexRoute, getApiV1DatasetIndexRouteHandler)
  .openapi(postApiV1DatasetIndexRoute, postApiV1DatasetIndexRouteHandler)
  .openapi(getApiV1DatasetInfoRoute, getApiV1DatasetInfoRouteHandler)
  .openapi(getApiV1DatasetDistinctColumnNameRoute, getApiV1DatasetDistinctColumnNameRouteHandler)
  .openapi(postApiV1DatasetDuplicateRoute, postApiV1DatasetDuplicateRouteHandler)
  .openapi(getApiV1DatasetExportIndexRoute, getApiV1DatasetExportIndexRouteHandler)
  .openapi(postApiV1DatasetGetOrCreateIndexRoute, postApiV1DatasetGetOrCreateIndexRouteHandler)
  .openapi(postApiV1DatasetImportIndexRoute, postApiV1DatasetImportIndexRouteHandler)
  .openapi(getApiV1DatasetRelatedColumnNameRoute, getApiV1DatasetRelatedColumnNameRouteHandler)
  .openapi(getApiV1DatasetRelatedObjectsIndexRoute, getApiV1DatasetRelatedObjectsIndexRouteHandler)
  .openapi(putApiV1DatasetWarmUpCacheRoute, putApiV1DatasetWarmUpCacheRouteHandler)
  .openapi(getApiV1DatasetIdOrUuidRoute, getApiV1DatasetIdOrUuidRouteHandler)
  .openapi(
    getApiV1DatasetIdOrUuidRelatedObjectsRoute,
    getApiV1DatasetIdOrUuidRelatedObjectsRouteHandler,
  )
  .openapi(deleteApiV1DatasetPkRoute, deleteApiV1DatasetPkRouteHandler)
  .openapi(putApiV1DatasetPkRoute, putApiV1DatasetPkRouteHandler)
  .openapi(deleteApiV1DatasetPkColumnColumnIdRoute, deleteApiV1DatasetPkColumnColumnIdRouteHandler)
  .openapi(getApiV1DatasetPkDrillInfoIndexRoute, getApiV1DatasetPkDrillInfoIndexRouteHandler)
  .openapi(deleteApiV1DatasetPkMetricMetricIdRoute, deleteApiV1DatasetPkMetricMetricIdRouteHandler)
  .openapi(
    postApiV1DatasetPkPartitionMappingPreviewIndexRoute,
    postApiV1DatasetPkPartitionMappingPreviewIndexRouteHandler,
  )
  .openapi(putApiV1DatasetPkRefreshRoute, putApiV1DatasetPkRefreshRouteHandler)
  .openapi(
    getApiV1DatasetUuidStrActivityIndexRoute,
    getApiV1DatasetUuidStrActivityIndexRouteHandler,
  )
  .openapi(
    getApiV1DatasetUuidStrVersionsIndexRoute,
    getApiV1DatasetUuidStrVersionsIndexRouteHandler,
  )
  .openapi(
    getApiV1DatasetUuidStrVersionsVersionUuidStrIndexRoute,
    getApiV1DatasetUuidStrVersionsVersionUuidStrIndexRouteHandler,
  )
  .openapi(
    postApiV1DatasetUuidStrVersionsVersionUuidStrRestoreRoute,
    postApiV1DatasetUuidStrVersionsVersionUuidStrRestoreRouteHandler,
  )
  .openapi(postApiV1DatasetUuidPurgeRoute, postApiV1DatasetUuidPurgeRouteHandler)
  .openapi(getApiV1DatasetUuidPurgeImpactRoute, getApiV1DatasetUuidPurgeImpactRouteHandler)
  .openapi(postApiV1DatasetUuidRestoreRoute, postApiV1DatasetUuidRestoreRouteHandler)
  .openapi(getApiV1DatasourceIndexRoute, getApiV1DatasourceIndexRouteHandler)
  .openapi(
    getApiV1DatasourceDatasourceTypeDatasourceIdRoute,
    getApiV1DatasourceDatasourceTypeDatasourceIdRouteHandler,
  )
  .openapi(
    getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndexRoute,
    getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndexRouteHandler,
  )
  .openapi(
    postApiV1DatasourceDatasourceTypeDatasourceIdCompatibleRoute,
    postApiV1DatasourceDatasourceTypeDatasourceIdCompatibleRouteHandler,
  )
  .openapi(
    postApiV1DatasourceDatasourceTypeDatasourceIdQueryRoute,
    postApiV1DatasourceDatasourceTypeDatasourceIdQueryRouteHandler,
  )
  .openapi(
    postApiV1DatasourceDatasourceTypeDatasourceIdValidateExpressionIndexRoute,
    postApiV1DatasourceDatasourceTypeDatasourceIdValidateExpressionIndexRouteHandler,
  )
  .openapi(getApiV1EmbeddedDashboardUuidRoute, getApiV1EmbeddedDashboardUuidRouteHandler)
  .openapi(getApiV1ExploreIndexRoute, getApiV1ExploreIndexRouteHandler)
  .openapi(postApiV1ExploreFormDataRoute, postApiV1ExploreFormDataRouteHandler)
  .openapi(deleteApiV1ExploreFormDataKeyRoute, deleteApiV1ExploreFormDataKeyRouteHandler)
  .openapi(getApiV1ExploreFormDataKeyRoute, getApiV1ExploreFormDataKeyRouteHandler)
  .openapi(putApiV1ExploreFormDataKeyRoute, putApiV1ExploreFormDataKeyRouteHandler)
  .openapi(postApiV1ExplorePermalinkRoute, postApiV1ExplorePermalinkRouteHandler)
  .openapi(getApiV1ExplorePermalinkKeyRoute, getApiV1ExplorePermalinkKeyRouteHandler)
  .openapi(getApiV1LogIndexRoute, getApiV1LogIndexRouteHandler)
  .openapi(postApiV1LogIndexRoute, postApiV1LogIndexRouteHandler)
  .openapi(getApiV1LogRecentActivityIndexRoute, getApiV1LogRecentActivityIndexRouteHandler)
  .openapi(getApiV1LogPkRoute, getApiV1LogPkRouteHandler)
  .openapi(getApiV1MeIndexRoute, getApiV1MeIndexRouteHandler)
  .openapi(putApiV1MeIndexRoute, putApiV1MeIndexRouteHandler)
  .openapi(getApiV1MeApiKeyScopesIndexRoute, getApiV1MeApiKeyScopesIndexRouteHandler)
  .openapi(getApiV1MeRolesIndexRoute, getApiV1MeRolesIndexRouteHandler)
  .openapi(getApiV1MenuIndexRoute, getApiV1MenuIndexRouteHandler)
  .openapi(getApiV1QueryIndexRoute, getApiV1QueryIndexRouteHandler)
  .openapi(getApiV1QueryDistinctColumnNameRoute, getApiV1QueryDistinctColumnNameRouteHandler)
  .openapi(getApiV1QueryRelatedColumnNameRoute, getApiV1QueryRelatedColumnNameRouteHandler)
  .openapi(postApiV1QueryStopRoute, postApiV1QueryStopRouteHandler)
  .openapi(getApiV1QueryUpdatedSinceRoute, getApiV1QueryUpdatedSinceRouteHandler)
  .openapi(getApiV1QueryPkRoute, getApiV1QueryPkRouteHandler)
  .openapi(deleteApiV1ReportIndexRoute, deleteApiV1ReportIndexRouteHandler)
  .openapi(getApiV1ReportIndexRoute, getApiV1ReportIndexRouteHandler)
  .openapi(postApiV1ReportIndexRoute, postApiV1ReportIndexRouteHandler)
  .openapi(getApiV1ReportInfoRoute, getApiV1ReportInfoRouteHandler)
  .openapi(getApiV1ReportConfigurationIndexRoute, getApiV1ReportConfigurationIndexRouteHandler)
  .openapi(putApiV1ReportConfigurationIndexRoute, putApiV1ReportConfigurationIndexRouteHandler)
  .openapi(getApiV1ReportRelatedColumnNameRoute, getApiV1ReportRelatedColumnNameRouteHandler)
  .openapi(getApiV1ReportSlackChannelsIndexRoute, getApiV1ReportSlackChannelsIndexRouteHandler)
  .openapi(postApiV1ReportSubscribeRoute, postApiV1ReportSubscribeRouteHandler)
  .openapi(deleteApiV1ReportPkRoute, deleteApiV1ReportPkRouteHandler)
  .openapi(getApiV1ReportPkRoute, getApiV1ReportPkRouteHandler)
  .openapi(putApiV1ReportPkRoute, putApiV1ReportPkRouteHandler)
  .openapi(postApiV1ReportPkExecuteRoute, postApiV1ReportPkExecuteRouteHandler)
  .openapi(getApiV1ReportPkLogIndexRoute, getApiV1ReportPkLogIndexRouteHandler)
  .openapi(getApiV1ReportPkLogLogIdRoute, getApiV1ReportPkLogLogIdRouteHandler)
  .openapi(deleteApiV1RowlevelsecurityIndexRoute, deleteApiV1RowlevelsecurityIndexRouteHandler)
  .openapi(getApiV1RowlevelsecurityIndexRoute, getApiV1RowlevelsecurityIndexRouteHandler)
  .openapi(postApiV1RowlevelsecurityIndexRoute, postApiV1RowlevelsecurityIndexRouteHandler)
  .openapi(getApiV1RowlevelsecurityInfoRoute, getApiV1RowlevelsecurityInfoRouteHandler)
  .openapi(
    getApiV1RowlevelsecurityRelatedColumnNameRoute,
    getApiV1RowlevelsecurityRelatedColumnNameRouteHandler,
  )
  .openapi(deleteApiV1RowlevelsecurityPkRoute, deleteApiV1RowlevelsecurityPkRouteHandler)
  .openapi(getApiV1RowlevelsecurityPkRoute, getApiV1RowlevelsecurityPkRouteHandler)
  .openapi(putApiV1RowlevelsecurityPkRoute, putApiV1RowlevelsecurityPkRouteHandler)
  .openapi(deleteApiV1SavedQueryIndexRoute, deleteApiV1SavedQueryIndexRouteHandler)
  .openapi(getApiV1SavedQueryIndexRoute, getApiV1SavedQueryIndexRouteHandler)
  .openapi(postApiV1SavedQueryIndexRoute, postApiV1SavedQueryIndexRouteHandler)
  .openapi(getApiV1SavedQueryInfoRoute, getApiV1SavedQueryInfoRouteHandler)
  .openapi(
    getApiV1SavedQueryDistinctColumnNameRoute,
    getApiV1SavedQueryDistinctColumnNameRouteHandler,
  )
  .openapi(getApiV1SavedQueryExportIndexRoute, getApiV1SavedQueryExportIndexRouteHandler)
  .openapi(postApiV1SavedQueryImportIndexRoute, postApiV1SavedQueryImportIndexRouteHandler)
  .openapi(
    getApiV1SavedQueryRelatedColumnNameRoute,
    getApiV1SavedQueryRelatedColumnNameRouteHandler,
  )
  .openapi(deleteApiV1SavedQueryPkRoute, deleteApiV1SavedQueryPkRouteHandler)
  .openapi(getApiV1SavedQueryPkRoute, getApiV1SavedQueryPkRouteHandler)
  .openapi(putApiV1SavedQueryPkRoute, putApiV1SavedQueryPkRouteHandler)
  .openapi(getApiV1SecurityCsrfTokenIndexRoute, getApiV1SecurityCsrfTokenIndexRouteHandler)
  .openapi(getApiV1SecurityGroupsIndexRoute, getApiV1SecurityGroupsIndexRouteHandler)
  .openapi(postApiV1SecurityGroupsIndexRoute, postApiV1SecurityGroupsIndexRouteHandler)
  .openapi(getApiV1SecurityGroupsInfoRoute, getApiV1SecurityGroupsInfoRouteHandler)
  .openapi(deleteApiV1SecurityGroupsPkRoute, deleteApiV1SecurityGroupsPkRouteHandler)
  .openapi(getApiV1SecurityGroupsPkRoute, getApiV1SecurityGroupsPkRouteHandler)
  .openapi(putApiV1SecurityGroupsPkRoute, putApiV1SecurityGroupsPkRouteHandler)
  .openapi(postApiV1SecurityGuestTokenIndexRoute, postApiV1SecurityGuestTokenIndexRouteHandler)
  .openapi(postApiV1SecurityLoginRoute, postApiV1SecurityLoginRouteHandler)
  .openapi(
    postApiV1SecurityPasswordRecoveryIndexRoute,
    postApiV1SecurityPasswordRecoveryIndexRouteHandler,
  )
  .openapi(
    postApiV1SecurityPasswordRecoveryResetIndexRoute,
    postApiV1SecurityPasswordRecoveryResetIndexRouteHandler,
  )
  .openapi(
    getApiV1SecurityPermissionsResourcesIndexRoute,
    getApiV1SecurityPermissionsResourcesIndexRouteHandler,
  )
  .openapi(
    postApiV1SecurityPermissionsResourcesIndexRoute,
    postApiV1SecurityPermissionsResourcesIndexRouteHandler,
  )
  .openapi(
    getApiV1SecurityPermissionsResourcesInfoRoute,
    getApiV1SecurityPermissionsResourcesInfoRouteHandler,
  )
  .openapi(
    deleteApiV1SecurityPermissionsResourcesPkRoute,
    deleteApiV1SecurityPermissionsResourcesPkRouteHandler,
  )
  .openapi(
    getApiV1SecurityPermissionsResourcesPkRoute,
    getApiV1SecurityPermissionsResourcesPkRouteHandler,
  )
  .openapi(
    putApiV1SecurityPermissionsResourcesPkRoute,
    putApiV1SecurityPermissionsResourcesPkRouteHandler,
  )
  .openapi(getApiV1SecurityPermissionsIndexRoute, getApiV1SecurityPermissionsIndexRouteHandler)
  .openapi(getApiV1SecurityPermissionsInfoRoute, getApiV1SecurityPermissionsInfoRouteHandler)
  .openapi(getApiV1SecurityPermissionsPkRoute, getApiV1SecurityPermissionsPkRouteHandler)
  .openapi(postApiV1SecurityRefreshRoute, postApiV1SecurityRefreshRouteHandler)
  .openapi(getApiV1SecurityResourcesIndexRoute, getApiV1SecurityResourcesIndexRouteHandler)
  .openapi(postApiV1SecurityResourcesIndexRoute, postApiV1SecurityResourcesIndexRouteHandler)
  .openapi(getApiV1SecurityResourcesInfoRoute, getApiV1SecurityResourcesInfoRouteHandler)
  .openapi(deleteApiV1SecurityResourcesPkRoute, deleteApiV1SecurityResourcesPkRouteHandler)
  .openapi(getApiV1SecurityResourcesPkRoute, getApiV1SecurityResourcesPkRouteHandler)
  .openapi(putApiV1SecurityResourcesPkRoute, putApiV1SecurityResourcesPkRouteHandler)
  .openapi(getApiV1SecurityRolesIndexRoute, getApiV1SecurityRolesIndexRouteHandler)
  .openapi(postApiV1SecurityRolesIndexRoute, postApiV1SecurityRolesIndexRouteHandler)
  .openapi(getApiV1SecurityRolesInfoRoute, getApiV1SecurityRolesInfoRouteHandler)
  .openapi(getApiV1SecurityRolesSearchIndexRoute, getApiV1SecurityRolesSearchIndexRouteHandler)
  .openapi(deleteApiV1SecurityRolesPkRoute, deleteApiV1SecurityRolesPkRouteHandler)
  .openapi(getApiV1SecurityRolesPkRoute, getApiV1SecurityRolesPkRouteHandler)
  .openapi(putApiV1SecurityRolesPkRoute, putApiV1SecurityRolesPkRouteHandler)
  .openapi(putApiV1SecurityRolesRoleIdGroupsRoute, putApiV1SecurityRolesRoleIdGroupsRouteHandler)
  .openapi(
    postApiV1SecurityRolesRoleIdPermissionsRoute,
    postApiV1SecurityRolesRoleIdPermissionsRouteHandler,
  )
  .openapi(
    getApiV1SecurityRolesRoleIdPermissionsIndexRoute,
    getApiV1SecurityRolesRoleIdPermissionsIndexRouteHandler,
  )
  .openapi(putApiV1SecurityRolesRoleIdUsersRoute, putApiV1SecurityRolesRoleIdUsersRouteHandler)
  .openapi(getApiV1SecuritySubjectIndexRoute, getApiV1SecuritySubjectIndexRouteHandler)
  .openapi(getApiV1SecuritySubjectInfoRoute, getApiV1SecuritySubjectInfoRouteHandler)
  .openapi(getApiV1SecuritySubjectPkRoute, getApiV1SecuritySubjectPkRouteHandler)
  .openapi(
    getApiV1SecurityUserRegistrationsIndexRoute,
    getApiV1SecurityUserRegistrationsIndexRouteHandler,
  )
  .openapi(
    getApiV1SecurityUserRegistrationsInfoRoute,
    getApiV1SecurityUserRegistrationsInfoRouteHandler,
  )
  .openapi(
    deleteApiV1SecurityUserRegistrationsPkRoute,
    deleteApiV1SecurityUserRegistrationsPkRouteHandler,
  )
  .openapi(
    getApiV1SecurityUserRegistrationsPkRoute,
    getApiV1SecurityUserRegistrationsPkRouteHandler,
  )
  .openapi(getApiV1SecurityUsersIndexRoute, getApiV1SecurityUsersIndexRouteHandler)
  .openapi(postApiV1SecurityUsersIndexRoute, postApiV1SecurityUsersIndexRouteHandler)
  .openapi(getApiV1SecurityUsersInfoRoute, getApiV1SecurityUsersInfoRouteHandler)
  .openapi(deleteApiV1SecurityUsersPkRoute, deleteApiV1SecurityUsersPkRouteHandler)
  .openapi(getApiV1SecurityUsersPkRoute, getApiV1SecurityUsersPkRouteHandler)
  .openapi(putApiV1SecurityUsersPkRoute, putApiV1SecurityUsersPkRouteHandler)
  .openapi(deleteApiV1SecurityUsersPkSessionsRoute, deleteApiV1SecurityUsersPkSessionsRouteHandler)
  .openapi(getApiV1SemanticLayerIndexRoute, getApiV1SemanticLayerIndexRouteHandler)
  .openapi(postApiV1SemanticLayerIndexRoute, postApiV1SemanticLayerIndexRouteHandler)
  .openapi(
    getApiV1SemanticLayerConnectionsIndexRoute,
    getApiV1SemanticLayerConnectionsIndexRouteHandler,
  )
  .openapi(
    postApiV1SemanticLayerSchemaConfigurationRoute,
    postApiV1SemanticLayerSchemaConfigurationRouteHandler,
  )
  .openapi(getApiV1SemanticLayerTypesRoute, getApiV1SemanticLayerTypesRouteHandler)
  .openapi(deleteApiV1SemanticLayerUuidRoute, deleteApiV1SemanticLayerUuidRouteHandler)
  .openapi(getApiV1SemanticLayerUuidRoute, getApiV1SemanticLayerUuidRouteHandler)
  .openapi(putApiV1SemanticLayerUuidRoute, putApiV1SemanticLayerUuidRouteHandler)
  .openapi(
    postApiV1SemanticLayerUuidClearCacheRoute,
    postApiV1SemanticLayerUuidClearCacheRouteHandler,
  )
  .openapi(
    postApiV1SemanticLayerUuidSchemaRuntimeRoute,
    postApiV1SemanticLayerUuidSchemaRuntimeRouteHandler,
  )
  .openapi(postApiV1SemanticLayerUuidViewsRoute, postApiV1SemanticLayerUuidViewsRouteHandler)
  .openapi(deleteApiV1SemanticViewIndexRoute, deleteApiV1SemanticViewIndexRouteHandler)
  .openapi(postApiV1SemanticViewIndexRoute, postApiV1SemanticViewIndexRouteHandler)
  .openapi(deleteApiV1SemanticViewPkRoute, deleteApiV1SemanticViewPkRouteHandler)
  .openapi(putApiV1SemanticViewPkRoute, putApiV1SemanticViewPkRouteHandler)
  .openapi(getApiV1SemanticViewPkStructureRoute, getApiV1SemanticViewPkStructureRouteHandler)
  .openapi(getApiV1SqllabIndexRoute, getApiV1SqllabIndexRouteHandler)
  .openapi(postApiV1SqllabEstimateIndexRoute, postApiV1SqllabEstimateIndexRouteHandler)
  .openapi(postApiV1SqllabExecuteIndexRoute, postApiV1SqllabExecuteIndexRouteHandler)
  .openapi(getApiV1SqllabExportClientIdIndexRoute, getApiV1SqllabExportClientIdIndexRouteHandler)
  .openapi(
    postApiV1SqllabExportStreamingIndexRoute,
    postApiV1SqllabExportStreamingIndexRouteHandler,
  )
  .openapi(postApiV1SqllabFormatSqlIndexRoute, postApiV1SqllabFormatSqlIndexRouteHandler)
  .openapi(postApiV1SqllabPermalinkRoute, postApiV1SqllabPermalinkRouteHandler)
  .openapi(getApiV1SqllabPermalinkKeyRoute, getApiV1SqllabPermalinkKeyRouteHandler)
  .openapi(getApiV1SqllabResultsIndexRoute, getApiV1SqllabResultsIndexRouteHandler)
  .openapi(deleteApiV1TagIndexRoute, deleteApiV1TagIndexRouteHandler)
  .openapi(getApiV1TagIndexRoute, getApiV1TagIndexRouteHandler)
  .openapi(postApiV1TagIndexRoute, postApiV1TagIndexRouteHandler)
  .openapi(getApiV1TagInfoRoute, getApiV1TagInfoRouteHandler)
  .openapi(postApiV1TagBulkCreateRoute, postApiV1TagBulkCreateRouteHandler)
  .openapi(getApiV1TagFavoriteStatusIndexRoute, getApiV1TagFavoriteStatusIndexRouteHandler)
  .openapi(getApiV1TagGetObjectsIndexRoute, getApiV1TagGetObjectsIndexRouteHandler)
  .openapi(getApiV1TagRelatedColumnNameRoute, getApiV1TagRelatedColumnNameRouteHandler)
  .openapi(
    postApiV1TagObjectTypeObjectIdIndexRoute,
    postApiV1TagObjectTypeObjectIdIndexRouteHandler,
  )
  .openapi(
    deleteApiV1TagObjectTypeObjectIdTagIndexRoute,
    deleteApiV1TagObjectTypeObjectIdTagIndexRouteHandler,
  )
  .openapi(deleteApiV1TagPkRoute, deleteApiV1TagPkRouteHandler)
  .openapi(getApiV1TagPkRoute, getApiV1TagPkRouteHandler)
  .openapi(putApiV1TagPkRoute, putApiV1TagPkRouteHandler)
  .openapi(deleteApiV1TagPkFavoritesIndexRoute, deleteApiV1TagPkFavoritesIndexRouteHandler)
  .openapi(postApiV1TagPkFavoritesIndexRoute, postApiV1TagPkFavoritesIndexRouteHandler)
  .openapi(deleteApiV1ThemeIndexRoute, deleteApiV1ThemeIndexRouteHandler)
  .openapi(getApiV1ThemeIndexRoute, getApiV1ThemeIndexRouteHandler)
  .openapi(postApiV1ThemeIndexRoute, postApiV1ThemeIndexRouteHandler)
  .openapi(getApiV1ThemeInfoRoute, getApiV1ThemeInfoRouteHandler)
  .openapi(getApiV1ThemeExportIndexRoute, getApiV1ThemeExportIndexRouteHandler)
  .openapi(postApiV1ThemeImportIndexRoute, postApiV1ThemeImportIndexRouteHandler)
  .openapi(getApiV1ThemeRelatedColumnNameRoute, getApiV1ThemeRelatedColumnNameRouteHandler)
  .openapi(getApiV1ThemeSystemRoute, getApiV1ThemeSystemRouteHandler)
  .openapi(deleteApiV1ThemeUnsetSystemDarkRoute, deleteApiV1ThemeUnsetSystemDarkRouteHandler)
  .openapi(deleteApiV1ThemeUnsetSystemDefaultRoute, deleteApiV1ThemeUnsetSystemDefaultRouteHandler)
  .openapi(deleteApiV1ThemePkRoute, deleteApiV1ThemePkRouteHandler)
  .openapi(getApiV1ThemePkRoute, getApiV1ThemePkRouteHandler)
  .openapi(putApiV1ThemePkRoute, putApiV1ThemePkRouteHandler)
  .openapi(putApiV1ThemePkSetSystemDarkRoute, putApiV1ThemePkSetSystemDarkRouteHandler)
  .openapi(putApiV1ThemePkSetSystemDefaultRoute, putApiV1ThemePkSetSystemDefaultRouteHandler)
  .openapi(getApiV1UserUserIdAvatarPngRoute, getApiV1UserUserIdAvatarPngRouteHandler)

export default app
