import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAccountAuthKeyRoute,
  deleteApiAnnotationRoute,
  deleteApiCblRemapRulesIdRoute,
  deleteApiChapterRoute,
  deleteApiCollectionRoute,
  deleteApiDeviceClientDeviceRoute,
  deleteApiDeviceRoute,
  deleteApiFilterRoute,
  deleteApiFontRoute,
  deleteApiLibraryDeleteMultipleRoute,
  deleteApiLibraryDeleteRoute,
  deleteApiLicenseCancelRoute,
  deleteApiLicenseRoute,
  deleteApiReaderPtocRoute,
  deleteApiReadingListRoute,
  deleteApiReadingProfileLibraryLibraryIdRoute,
  deleteApiReadingProfileRoute,
  deleteApiReadingProfileSeriesSeriesIdRoute,
  deleteApiReviewChapterRoute,
  deleteApiReviewSeriesRoute,
  deleteApiScrobblingRemoveErrorIdRoute,
  deleteApiScrobblingRemoveHoldRoute,
  deleteApiSeriesSeriesIdRoute,
  deleteApiStreamDeleteExternalSourceRoute,
  deleteApiStreamSmartFilterDashboardStreamRoute,
  deleteApiStreamSmartFilterSideNavStreamRoute,
  deleteApiThemeRoute,
  deleteApiUsersDeleteUserRoute,
  deleteApiUsersKoboSyncPointRoute,
  deleteApiVolumeRoute,
  getApiAccountAuthKeysRoute,
  getApiAccountEmailConfirmedRoute,
  getApiAccountInviteUrlRoute,
  getApiAccountIsEmailValidRoute,
  getApiAccountOidcAuthenticatedRoute,
  getApiAccountOpdsUrlRoute,
  getApiAccountRefreshAccountRoute,
  getApiAccountRolesRoute,
  getApiAccountRoute,
  getApiActivityCurrentRoute,
  getApiAdminExistsRoute,
  getApiAnnotationAllForSeriesRoute,
  getApiAnnotationAllRoute,
  getApiAnnotationAnnotationIdRoute,
  getApiBookChapterIdBookInfoRoute,
  getApiBookChapterIdBookPageRoute,
  getApiBookChapterIdBookResourcesRoute,
  getApiBookChapterIdChaptersRoute,
  getApiCblBrowseRoute,
  getApiCblRemapRulesAllRoute,
  getApiCblRemapRulesRoute,
  getApiChapterChapterDetailPlusRoute,
  getApiChapterRestoreInfoRoute,
  getApiChapterRoute,
  getApiCollectionAllSeriesRoute,
  getApiCollectionMalStacksRoute,
  getApiCollectionNameExistsRoute,
  getApiCollectionRoute,
  getApiCollectionSingleRoute,
  getApiColorScapeChapterRoute,
  getApiColorScapeCollectionRoute,
  getApiColorScapePersonRoute,
  getApiColorScapeReadingListRoute,
  getApiColorScapeSeriesRoute,
  getApiColorScapeVolumeRoute,
  getApiDeviceClientAllDevicesRoute,
  getApiDeviceClientDevicesRoute,
  getApiDeviceRoute,
  getApiDownloadChapterRoute,
  getApiDownloadChapterSizeRoute,
  getApiDownloadReadinglistSizeRoute,
  getApiDownloadSeriesRoute,
  getApiDownloadSeriesSizeRoute,
  getApiDownloadVolumeRoute,
  getApiDownloadVolumeSizeRoute,
  getApiEmailAllRoute,
  getApiFilterRoute,
  getApiFontAllRoute,
  getApiFontRoute,
  getApiHealthRoute,
  getApiImageBookmarkRoute,
  getApiImageChapterCoverRoute,
  getApiImageCollectionCoverRoute,
  getApiImageCoverUploadRoute,
  getApiImageExternalChapterRoute,
  getApiImageExternalSeriesRoute,
  getApiImageExternalVolumeRoute,
  getApiImageLibraryCoverRoute,
  getApiImagePersonCoverRoute,
  getApiImagePublisherRoute,
  getApiImageReadinglistCoverRoute,
  getApiImageSeriesCoverRoute,
  getApiImageUserCoverRoute,
  getApiImageVolumeCoverRoute,
  getApiImageWebLinkRoute,
  getApiKavitaPlusAuditEntriesSeriesSeriesIdRoute,
  getApiKavitaPlusAuditFailedScrobbleEventsRoute,
  getApiKavitaPlusAuditMyStatsRoute,
  getApiKavitaPlusAuditStatsRoute,
  getApiKoreaderApiKeySyncsProgressEbookHashRoute,
  getApiKoreaderApiKeyUsersAuthRoute,
  getApiLibraryJumpBarRoute,
  getApiLibraryLibrariesRoute,
  getApiLibraryListRoute,
  getApiLibraryMetadataEnabledLibrariesRoute,
  getApiLibraryMetadataProvidersRoute,
  getApiLibraryNameExistsRoute,
  getApiLibraryRoute,
  getApiLibraryScrobbleEnabledLibrariesRoute,
  getApiLibraryTypeRoute,
  getApiLibraryUserLibrariesRoute,
  getApiLibraryWatchStatusRoute,
  getApiLicenseHasLicenseRoute,
  getApiLicenseInfoRoute,
  getApiLicenseProductsRoute,
  getApiLicenseProviderHealthRoute,
  getApiLicenseStatsRoute,
  getApiLicenseValidLicenseRoute,
  getApiLocaleRoute,
  getApiManageMatchedSeriesCountsRoute,
  getApiMetadataAgeRatingsRoute,
  getApiMetadataAllBcp47LanguagesRoute,
  getApiMetadataAllLanguagesRoute,
  getApiMetadataGenresRoute,
  getApiMetadataLanguagesRoute,
  getApiMetadataLanguageTitleRoute,
  getApiMetadataPeopleByRoleRoute,
  getApiMetadataPeopleRoute,
  getApiMetadataPublicationStatusRoute,
  getApiMetadataReadinglistTagsRoute,
  getApiMetadataSeriesDetailPlusRoute,
  getApiMetadataTagsRoute,
  getApiOAuthCallbackRoute,
  getApiOAuthStartRoute,
  getApiOpdsApiKeyCollectionsCollectionIdRoute,
  getApiOpdsApiKeyCollectionsRoute,
  getApiOpdsApiKeyFaviconRoute,
  getApiOpdsApiKeyImageRoute,
  getApiOpdsApiKeyLibrariesLibraryIdRoute,
  getApiOpdsApiKeyLibrariesRoute,
  getApiOpdsApiKeyOnDeckRoute,
  getApiOpdsApiKeyReadingListReadingListIdRoute,
  getApiOpdsApiKeyReadingListRoute,
  getApiOpdsApiKeyRecentlyAddedRoute,
  getApiOpdsApiKeyRecentlyUpdatedRoute,
  getApiOpdsApiKeyRoute,
  getApiOpdsApiKeySearchRoute,
  getApiOpdsApiKeySeriesRoute,
  getApiOpdsApiKeySeriesSeriesIdRoute,
  getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdChapterChapterIdDownloadFilenameRoute,
  getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdChapterChapterIdRoute,
  getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdRoute,
  getApiOpdsApiKeySmartFiltersFilterIdRoute,
  getApiOpdsApiKeySmartFiltersRoute,
  getApiOpdsApiKeyWantToReadRoute,
  getApiPanelsGetProgressRoute,
  getApiPersonChaptersByRoleRoute,
  getApiPersonCoversdbImageRoute,
  getApiPersonRolesRoute,
  getApiPersonRoute,
  getApiPersonSearchRoute,
  getApiPersonSeriesKnownForRoute,
  getApiPluginAuthkeyExpiresRoute,
  getApiPluginParseRoute,
  getApiPluginVersionRoute,
  getApiRatingOverallChapterRoute,
  getApiRatingOverallSeriesRoute,
  getApiReaderBookmarkImageRoute,
  getApiReaderBookmarkInfoRoute,
  getApiReaderChapterBookmarksRoute,
  getApiReaderChapterInfoRoute,
  getApiReaderContinuePointRoute,
  getApiReaderFileDimensionsRoute,
  getApiReaderFirstProgressDateRoute,
  getApiReaderGetProgressRoute,
  getApiReaderHasProgressRoute,
  getApiReaderImageRoute,
  getApiReaderNextChapterRoute,
  getApiReaderPdfRoute,
  getApiReaderPrevChapterRoute,
  getApiReaderPromptRereadChapterRoute,
  getApiReaderPromptRereadSeriesRoute,
  getApiReaderPromptRereadVolumeRoute,
  getApiReaderPtocRoute,
  getApiReaderSeriesBookmarksRoute,
  getApiReaderThumbnailRoute,
  getApiReaderTimeLeftForChapterRoute,
  getApiReaderTimeLeftRoute,
  getApiReaderVolumeBookmarksRoute,
  getApiReadingListAllPeopleRoute,
  getApiReadingListInfoRoute,
  getApiReadingListItemsRoute,
  getApiReadingListListsForChapterRoute,
  getApiReadingListListsForSeriesRoute,
  getApiReadingListNameExistsRoute,
  getApiReadingListNextChapterRoute,
  getApiReadingListPeopleRoute,
  getApiReadingListPrevChapterRoute,
  getApiReadingListRoute,
  getApiReadingProfileAllRoute,
  getApiReadingProfileLibraryIdSeriesIdRoute,
  getApiReadingProfileLibraryRoute,
  getApiReadingProfileSeriesRoute,
  getApiReviewAllRoute,
  getApiReviewMySeriesRoute,
  getApiScrobblingExpiredTokensRoute,
  getApiScrobblingHasHoldRoute,
  getApiScrobblingHoldsRoute,
  getApiScrobblingLibraryAllowsScrobblingRoute,
  getApiScrobblingNextScrobbleTimeRoute,
  getApiScrobblingScrobbleErrorsRoute,
  getApiScrobblingScrobbleSettingsRoute,
  getApiScrobblingTokenExpiredRoute,
  getApiSearchChaptersBySeriesRoute,
  getApiSearchSearchRoute,
  getApiSearchSeriesForChapterRoute,
  getApiSearchSeriesForMangafileRoute,
  getApiSeriesAgeRatingRoute,
  getApiSeriesAllRelatedRoute,
  getApiSeriesChapterRoute,
  getApiSeriesCurrentlyReadingRoute,
  getApiSeriesExternalSeriesDetailRoute,
  getApiSeriesMatchInfoRoute,
  getApiSeriesMetadataRoute,
  getApiSeriesNextExpectedRoute,
  getApiSeriesRelatedRoute,
  getApiSeriesSeriesByCollectionRoute,
  getApiSeriesSeriesDetailRoute,
  getApiSeriesSeriesIdRoute,
  getApiSeriesSeriesWithAnnotationsRoute,
  getApiSeriesVolumeRoute,
  getApiSeriesVolumesRoute,
  getApiServerActivityRoute,
  getApiServerChangelogRoute,
  getApiServerCheckForUpdatesRoute,
  getApiServerCheckOutOfDateRoute,
  getApiServerCheckUpdateRoute,
  getApiServerDebugExportExportIdRoute,
  getApiServerIsTaskRunningRoute,
  getApiServerJobsRoute,
  getApiServerLogsRoute,
  getApiServerMediaErrorsForSeriesRoute,
  getApiServerMediaErrorsRoute,
  getApiServerServerInfoSlimRoute,
  getApiSettingsBaseUrlRoute,
  getApiSettingsIsEmailSetupRoute,
  getApiSettingsIsValidCronRoute,
  getApiSettingsKepubifySupportedRoute,
  getApiSettingsKoboEnabledRoute,
  getApiSettingsLibraryTypesRoute,
  getApiSettingsLogLevelsRoute,
  getApiSettingsMetadataSettingsRoute,
  getApiSettingsOidcRoute,
  getApiSettingsOpdsEnabledRoute,
  getApiSettingsRoute,
  getApiSettingsTaskFrequenciesRoute,
  getApiStatsAvgTimeByHourRoute,
  getApiStatsDayBreakdownRoute,
  getApiStatsDeviceClientTypeRoute,
  getApiStatsDeviceDeviceTypeRoute,
  getApiStatsFavoriteAuthorsRoute,
  getApiStatsFilesAddedOverTimeRoute,
  getApiStatsGenreBreakdownRoute,
  getApiStatsMostActiveUsersRoute,
  getApiStatsPagesPerYearRoute,
  getApiStatsPageSpreadRoute,
  getApiStatsPopularDecadesRoute,
  getApiStatsPopularGenresRoute,
  getApiStatsPopularLibrariesRoute,
  getApiStatsPopularPeopleRoute,
  getApiStatsPopularReadingListRoute,
  getApiStatsPopularSeriesRoute,
  getApiStatsPopularTagsRoute,
  getApiStatsReadingActivityRoute,
  getApiStatsReadingCountsRoute,
  getApiStatsReadingHistoryRoute,
  getApiStatsReadingHistorySeriesSeriesIdRoute,
  getApiStatsReadingPaceRoute,
  getApiStatsReadsByMonthRoute,
  getApiStatsServerCountMangaFormatRoute,
  getApiStatsServerCountPublicationStatusRoute,
  getApiStatsServerFileBreakdownRoute,
  getApiStatsServerFileExtensionRoute,
  getApiStatsServerStatsRoute,
  getApiStatsTagBreakdownRoute,
  getApiStatsTotalReadsRoute,
  getApiStatsUserReadRoute,
  getApiStatsUserStatsRoute,
  getApiStatsWordsPerYearRoute,
  getApiStatsWordSpreadRoute,
  getApiStreamDashboardRoute,
  getApiStreamExternalSourcesRoute,
  getApiStreamSidenavRoute,
  getApiTachiyomiLatestChapterRoute,
  getApiThemeBrowseRoute,
  getApiThemeDownloadContentRoute,
  getApiThemeRoute,
  getApiUsersGetPreferencesRoute,
  getApiUsersHasLibraryAccessRoute,
  getApiUsersHasProfileSharedRoute,
  getApiUsersHasReadingProgressRoute,
  getApiUsersKoboSyncPointsRoute,
  getApiUsersNamesRoute,
  getApiUsersProfileInfoRoute,
  getApiUsersRoute,
  getApiUsersTokensRoute,
  getApiV3ContentBookIdAnnotationsRoute,
  getApiVolumeRoute,
  getApiWantToReadRoute,
  patchApiV3ContentBookIdAnnotationsRoute,
  postApiAccountClearOidcLinkRoute,
  postApiAccountConfirmEmailRoute,
  postApiAccountConfirmEmailUpdateRoute,
  postApiAccountConfirmMigrationEmailRoute,
  postApiAccountConfirmPasswordResetRoute,
  postApiAccountCreateAuthKeyRoute,
  postApiAccountForgotPasswordRoute,
  postApiAccountInviteRoute,
  postApiAccountLoginRoute,
  postApiAccountRefreshTokenRoute,
  postApiAccountRegisterRoute,
  postApiAccountResendConfirmationEmailRoute,
  postApiAccountResetPasswordRoute,
  postApiAccountRotateAuthKeyRoute,
  postApiAccountUpdateAgeRestrictionRoute,
  postApiAccountUpdateEmailRoute,
  postApiAccountUpdateRoute,
  postApiAccountUpdateUsernameRoute,
  postApiAnnotationAllFilteredRoute,
  postApiAnnotationBulkDeleteRoute,
  postApiAnnotationCreateRoute,
  postApiAnnotationExportFilterRoute,
  postApiAnnotationExportRoute,
  postApiAnnotationLikeRoute,
  postApiAnnotationUnlikeRoute,
  postApiAnnotationUpdateRoute,
  postApiCblFileImportRoute,
  postApiCblFinalizeImportRoute,
  postApiCblRemapRulesIdDemoteRoute,
  postApiCblRemapRulesIdPromoteRoute,
  postApiCblRemapRulesIdRoute,
  postApiCblRemapRulesRoute,
  postApiCblRepoImportRoute,
  postApiCblReValidateRoute,
  postApiCblSyncRoute,
  postApiCblUploadCblFileRoute,
  postApiChapterDeleteMultipleRoute,
  postApiChapterUpdateRoute,
  postApiCollectionDeleteMultipleRoute,
  postApiCollectionImportStackRoute,
  postApiCollectionPromoteMultipleRoute,
  postApiCollectionUpdateForSeriesRoute,
  postApiCollectionUpdateRoute,
  postApiCollectionUpdateSeriesRoute,
  postApiDeviceClientUpdateNameRoute,
  postApiDeviceCreateRoute,
  postApiDeviceSendSeriesToRoute,
  postApiDeviceSendToRoute,
  postApiDeviceUpdateRoute,
  postApiDownloadBookmarksRoute,
  postApiDownloadBulkChapterSizeRoute,
  postApiDownloadBulkReadinglistSizeRoute,
  postApiDownloadBulkSeriesSizeRoute,
  postApiDownloadBulkVolumeSizeRoute,
  postApiFilterDecodeRoute,
  postApiFilterEncodeAnnotationRoute,
  postApiFilterEncodePersonRoute,
  postApiFilterEncodeReadingListRoute,
  postApiFilterEncodeSeriesRoute,
  postApiFilterRenameRoute,
  postApiFilterUpdateAnnotationRoute,
  postApiFilterUpdatePersonRoute,
  postApiFilterUpdateReadingListRoute,
  postApiFilterUpdateSeriesRoute,
  postApiFontUploadByUrlRoute,
  postApiFontUploadRoute,
  postApiKavitaPlusAuditEntriesRoute,
  postApiKavitaPlusAuditMyActivityRoute,
  postApiLibraryCopySettingsFromRoute,
  postApiLibraryCreateRoute,
  postApiLibraryFolderWatchRetryRoute,
  postApiLibraryGrantAccessRoute,
  postApiLibraryHasFilesAtRootRoute,
  postApiLibraryRefreshMetadataMultipleRoute,
  postApiLibraryRefreshMetadataRoute,
  postApiLibraryScanAllRoute,
  postApiLibraryScanFolderRoute,
  postApiLibraryScanMultipleRoute,
  postApiLibraryScanRoute,
  postApiLibraryUpdateRoute,
  postApiLicenseChangeEmailRoute,
  postApiLicenseRenewRoute,
  postApiLicenseResendLicenseRoute,
  postApiLicenseResetRoute,
  postApiLicenseRoute,
  postApiManageSeriesMetadataRoute,
  postApiMetadataGenresWithCountsRoute,
  postApiMetadataTagsWithCountsRoute,
  postApiOpdsApiKeyRoute,
  postApiPanelsSaveProgressRoute,
  postApiPersonAllRoute,
  postApiPersonMergeRoute,
  postApiPersonUpdateRoute,
  postApiPersonValidAliasRoute,
  postApiPluginAuthenticateRoute,
  postApiPluginParseBulkRoute,
  postApiRatingChapterRoute,
  postApiRatingSeriesRoute,
  postApiReaderAllBookmarksRoute,
  postApiReaderBookmarkRoute,
  postApiReaderBulkRemoveBookmarksRoute,
  postApiReaderCreatePtocRoute,
  postApiReaderMarkChapterReadRoute,
  postApiReaderMarkMultipleReadRoute,
  postApiReaderMarkMultipleSeriesReadRoute,
  postApiReaderMarkMultipleSeriesUnreadRoute,
  postApiReaderMarkMultipleUnreadRoute,
  postApiReaderMarkReadRoute,
  postApiReaderMarkUnreadRoute,
  postApiReaderMarkVolumeReadRoute,
  postApiReaderMarkVolumeUnreadRoute,
  postApiReaderProgressRoute,
  postApiReaderRemoveBookmarksRoute,
  postApiReaderUnbookmarkRoute,
  postApiReadingListAllRoute,
  postApiReadingListCreateRoute,
  postApiReadingListDeleteItemRoute,
  postApiReadingListDeleteMultipleRoute,
  postApiReadingListExportAsCblRoute,
  postApiReadingListListsRoute,
  postApiReadingListPromoteMultipleRoute,
  postApiReadingListRegenerateCoverRoute,
  postApiReadingListRemoveReadRoute,
  postApiReadingListUpdateByChapterRoute,
  postApiReadingListUpdateByMultipleRoute,
  postApiReadingListUpdateByMultipleSeriesRoute,
  postApiReadingListUpdateBySeriesRoute,
  postApiReadingListUpdateByVolumeRoute,
  postApiReadingListUpdatePositionRoute,
  postApiReadingListUpdateRoute,
  postApiReadingProfileBulkRoute,
  postApiReadingProfileCreateRoute,
  postApiReadingProfileLibraryLibraryIdRoute,
  postApiReadingProfilePromoteRoute,
  postApiReadingProfileRoute,
  postApiReadingProfileSeriesRoute,
  postApiReadingProfileSeriesSeriesIdRoute,
  postApiReadingProfileSetDevicesRoute,
  postApiReadingProfileUpdateParentRoute,
  postApiReviewChapterRoute,
  postApiReviewSeriesRoute,
  postApiScrobblingAddHoldRoute,
  postApiScrobblingBulkRemoveEventsRoute,
  postApiScrobblingClearErrorsRoute,
  postApiScrobblingGenerateScrobbleEventsAllRoute,
  postApiScrobblingGenerateScrobbleEventsRoute,
  postApiScrobblingRetryScrobbleRoute,
  postApiScrobblingScrobbleEventsRoute,
  postApiScrobblingUpdateScrobbleSettingsRoute,
  postApiScrobblingUpdateUserScrobbleProviderRoute,
  postApiSeriesAllV2Route,
  postApiSeriesAnalyzeRoute,
  postApiSeriesDeleteMultipleRoute,
  postApiSeriesDontMatchRoute,
  postApiSeriesMatchRoute,
  postApiSeriesMetadataRoute,
  postApiSeriesOnDeckRoute,
  postApiSeriesRecentlyAddedV2Route,
  postApiSeriesRecentlyUpdatedSeriesRoute,
  postApiSeriesRefreshMetadataRoute,
  postApiSeriesRemoveFromOnDeckRoute,
  postApiSeriesScanRoute,
  postApiSeriesSeriesByIdsRoute,
  postApiSeriesUpdateMatchRoute,
  postApiSeriesUpdateRelatedRoute,
  postApiSeriesUpdateRoute,
  postApiSeriesV2Route,
  postApiServerAnalyzeFilesRoute,
  postApiServerBackupDbRoute,
  postApiServerBustKavitaplusCacheRoute,
  postApiServerCleanupRoute,
  postApiServerCleanupWantToReadRoute,
  postApiServerClearCacheRoute,
  postApiServerClearMediaAlertsRoute,
  postApiServerConvertMediaRoute,
  postApiServerDebugExportRoute,
  postApiServerMediaErrorsDismissRoute,
  postApiServerMediaErrorsUndismissRoute,
  postApiServerSyncThemesRoute,
  postApiSettingsImportFieldMappingsRoute,
  postApiSettingsIsValidAuthorityRoute,
  postApiSettingsKepubifyRoute,
  postApiSettingsMetadataSettingsRoute,
  postApiSettingsResetBaseUrlRoute,
  postApiSettingsResetExternalIdsRoute,
  postApiSettingsResetIpAddressesRoute,
  postApiSettingsResetRoute,
  postApiSettingsRoute,
  postApiSettingsRunMetadataMappingsRoute,
  postApiSettingsTestEmailUrlRoute,
  postApiStreamAddDashboardStreamRoute,
  postApiStreamAddSidenavStreamFromExternalSourceRoute,
  postApiStreamAddSidenavStreamRoute,
  postApiStreamBulkSidenavStreamVisibilityRoute,
  postApiStreamCreateExternalSourceRoute,
  postApiStreamExternalSourceExistsRoute,
  postApiStreamUpdateDashboardPositionRoute,
  postApiStreamUpdateDashboardStreamRoute,
  postApiStreamUpdateExternalSourceRoute,
  postApiStreamUpdateSidenavPositionRoute,
  postApiStreamUpdateSidenavStreamRoute,
  postApiTachiyomiMarkChapterUntilAsReadRoute,
  postApiThemeDownloadThemeRoute,
  postApiThemeUpdateDefaultRoute,
  postApiThemeUploadThemeRoute,
  postApiUploadChapterRoute,
  postApiUploadCollectionRoute,
  postApiUploadLibraryRoute,
  postApiUploadPersonRoute,
  postApiUploadReadingListRoute,
  postApiUploadSeriesRoute,
  postApiUploadUploadByFileRoute,
  postApiUploadUploadByUrlRoute,
  postApiUploadUploadChapterCoverRoute,
  postApiUploadUploadSeriesCoverRoute,
  postApiUploadUploadVolumeCoverRoute,
  postApiUploadUserRoute,
  postApiUploadVolumeRoute,
  postApiUsersKoboSyncPointUndoRemoveBooksRoute,
  postApiUsersUpdatePreferencesRoute,
  postApiV3ContentCheckforchangesRoute,
  postApiVolumeMultipleRoute,
  postApiVolumeUpdateRoute,
  postApiWantToReadAddSeriesRoute,
  postApiWantToReadRemoveSeriesRoute,
  postApiWantToReadV2Route,
  putApiKoreaderApiKeySyncsProgressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiAccountOidcAuthenticatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountClearOidcLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountRefreshAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountRefreshTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountUpdateUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountUpdateEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountUpdateAgeRestrictionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountInviteUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountConfirmEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountConfirmEmailUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountConfirmPasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountForgotPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountEmailConfirmedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountConfirmMigrationEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountResendConfirmationEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountOpdsUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountIsEmailValidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountAuthKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountRotateAuthKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountCreateAuthKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAccountAuthKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiActivityCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAnnotationAllFilteredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAnnotationAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAnnotationAllForSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAnnotationAnnotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAnnotationCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAnnotationUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAnnotationLikeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAnnotationUnlikeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAnnotationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAnnotationBulkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAnnotationExportFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAnnotationExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBookChapterIdBookInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBookChapterIdBookResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBookChapterIdChaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBookChapterIdBookPageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCblSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCblFileImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCblUploadCblFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCblRepoImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCblReValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCblFinalizeImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCblRemapRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCblRemapRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCblRemapRulesAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCblRemapRulesIdPromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCblRemapRulesIdDemoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCblRemapRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCblRemapRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCblBrowseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiChapterRestoreInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiChapterDeleteMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiChapterUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiChapterChapterDetailPlusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCollectionSingleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCollectionAllSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCollectionNameExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCollectionUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCollectionPromoteMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCollectionDeleteMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCollectionUpdateForSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCollectionUpdateSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCollectionMalStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCollectionImportStackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiColorScapeSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiColorScapeVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiColorScapeChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiColorScapePersonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiColorScapeReadingListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiColorScapeCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDeviceCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDeviceUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDeviceSendToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDeviceSendSeriesToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDeviceClientDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDeviceClientAllDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDeviceClientDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDeviceClientUpdateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDownloadVolumeSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDownloadBulkVolumeSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDownloadChapterSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDownloadBulkChapterSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDownloadSeriesSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDownloadReadinglistSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDownloadBulkReadinglistSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDownloadBulkSeriesSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDownloadVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDownloadChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDownloadSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDownloadBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEmailAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFilterUpdateSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFilterUpdateReadingListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFilterUpdatePersonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFilterUpdateAnnotationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFilterEncodeSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFilterEncodeReadingListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFilterEncodePersonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFilterEncodeAnnotationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFilterDecodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFilterRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFontAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFontRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiFontRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFontUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFontUploadByUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageChapterCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageLibraryCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageVolumeCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageSeriesCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageCollectionCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageReadinglistCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageBookmarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageWebLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImagePublisherRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImagePersonCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageUserCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageCoverUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageExternalSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageExternalVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageExternalChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKavitaPlusAuditEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKavitaPlusAuditEntriesSeriesSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKavitaPlusAuditStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKavitaPlusAuditMyStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKavitaPlusAuditMyActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKavitaPlusAuditFailedScrobbleEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ContentBookIdAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV3ContentBookIdAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3ContentCheckforchangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKoreaderApiKeyUsersAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiKoreaderApiKeySyncsProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKoreaderApiKeySyncsProgressEbookHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLibraryCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLibraryListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLibraryHasFilesAtRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLibraryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLibraryLibrariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLibraryUserLibrariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLibraryJumpBarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLibraryGrantAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLibraryScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLibraryFolderWatchRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLibraryWatchStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLibraryScanMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLibraryScanAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLibraryRefreshMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLibraryRefreshMetadataMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLibraryCopySettingsFromRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLibraryScanFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLibraryDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLibraryDeleteMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLibraryNameExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLibraryUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLibraryMetadataProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLibraryMetadataEnabledLibrariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLibraryScrobbleEnabledLibrariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLibraryTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLicenseValidLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLicenseHasLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLicenseInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLicenseResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLicenseResendLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLicenseProviderHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLicenseStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLicenseCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLicenseProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLicenseRenewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLicenseChangeEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLocaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiManageSeriesMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiManageMatchedSeriesCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMetadataGenresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMetadataGenresWithCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMetadataPeopleByRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMetadataPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMetadataTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMetadataReadinglistTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMetadataTagsWithCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMetadataAgeRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMetadataPublicationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMetadataLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMetadataAllLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMetadataAllBcp47LanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMetadataLanguageTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMetadataSeriesDetailPlusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOAuthStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOAuthCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOpdsApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeySmartFiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeySmartFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyLibrariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyWantToReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyReadingListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyReadingListReadingListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyLibrariesLibraryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyRecentlyAddedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyRecentlyUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyOnDeckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeySeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeySeriesSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdChapterChapterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdChapterChapterIdDownloadFilenameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiOpdsApiKeyImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOpdsApiKeyFaviconRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPanelsSaveProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPanelsGetProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPersonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPersonSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPersonRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPersonAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPersonUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPersonCoversdbImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPersonSeriesKnownForRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPersonChaptersByRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPersonMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPersonValidAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPluginAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPluginVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPluginAuthkeyExpiresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPluginParseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPluginParseBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRatingSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRatingChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRatingOverallSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRatingOverallChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderBookmarkImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderFileDimensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderChapterInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderBookmarkInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderMarkChapterReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderMarkReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderMarkUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderMarkVolumeUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderMarkVolumeReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderMarkMultipleReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderMarkMultipleUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderMarkMultipleSeriesReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderMarkMultipleSeriesUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderGetProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderContinuePointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderHasProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderChapterBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderAllBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderRemoveBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderBulkRemoveBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderVolumeBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderSeriesBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderBookmarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderUnbookmarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderNextChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderPrevChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderTimeLeftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderTimeLeftForChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderPtocRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiReaderPtocRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReaderCreatePtocRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderPromptRereadSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderPromptRereadVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderPromptRereadChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReaderFirstProgressDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiReadingListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingListListsForSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingListListsForChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingListItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListUpdatePositionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListDeleteItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListRemoveReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListUpdateBySeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListUpdateByMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListUpdateByMultipleSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListUpdateByVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListUpdateByChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingListPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingListAllPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingListNextChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingListPrevChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingListNameExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListPromoteMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListDeleteMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingListInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListExportAsCblRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListRegenerateCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingProfileAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingProfileLibraryIdSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingProfileSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingProfileSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingProfileLibraryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingProfileCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingProfilePromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingProfileUpdateParentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiReadingProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingProfileSeriesSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiReadingProfileSeriesSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingProfileLibraryLibraryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiReadingProfileLibraryLibraryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingProfileBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingProfileSetDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReviewSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiReviewSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReviewChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiReviewChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReviewAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReviewMySeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiScrobblingScrobbleSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScrobblingUpdateScrobbleSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScrobblingUpdateUserScrobbleProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScrobblingGenerateScrobbleEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScrobblingGenerateScrobbleEventsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiScrobblingTokenExpiredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiScrobblingExpiredTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiScrobblingScrobbleErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScrobblingClearErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScrobblingScrobbleEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiScrobblingHoldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiScrobblingHasHoldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiScrobblingLibraryAllowsScrobblingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScrobblingAddHoldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiScrobblingRemoveHoldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScrobblingBulkRemoveEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiScrobblingRemoveErrorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScrobblingRetryScrobbleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiScrobblingNextScrobbleTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSearchSeriesForMangafileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSearchSeriesForChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSearchSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSearchChaptersBySeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSeriesSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesDeleteMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesRecentlyAddedV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesRecentlyUpdatedSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesAllV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesOnDeckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesRemoveFromOnDeckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesCurrentlyReadingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesRefreshMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesSeriesByCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesSeriesByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesAgeRatingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesSeriesDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesAllRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesUpdateRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesExternalSeriesDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesNextExpectedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesMatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesUpdateMatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSeriesDontMatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesMatchInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesSeriesWithAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServerClearCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServerCleanupWantToReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServerCleanupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServerBackupDbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServerAnalyzeFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerServerInfoSlimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServerConvertMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServerDebugExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerDebugExportExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerCheckForUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerCheckUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerCheckOutOfDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerChangelogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerMediaErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServerMediaErrorsDismissRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServerMediaErrorsUndismissRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerMediaErrorsForSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServerClearMediaAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServerBustKavitaplusCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiServerSyncThemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerIsTaskRunningRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsBaseUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsResetIpAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsResetBaseUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsIsEmailSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsTaskFrequenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsLibraryTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsLogLevelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsOpdsEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsKoboEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsKepubifySupportedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsKepubifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsIsValidCronRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsTestEmailUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsMetadataSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsMetadataSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsRunMetadataMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsImportFieldMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsOidcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsResetExternalIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsIsValidAuthorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsServerStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsServerCountPublicationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsServerCountMangaFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsPopularDecadesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsPopularLibrariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsPopularSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsPopularReadingListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsPopularGenresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsPopularTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsPopularPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsMostActiveUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsServerFileBreakdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsServerFileExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsReadingCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsDayBreakdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsPagesPerYearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsWordsPerYearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsFilesAddedOverTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsDeviceClientTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsDeviceDeviceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsReadingActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsReadingPaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsGenreBreakdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsTagBreakdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsPageSpreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsWordSpreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsFavoriteAuthorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsAvgTimeByHourRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsReadsByMonthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsTotalReadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsUserStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsUserReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsReadingHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatsReadingHistorySeriesSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStreamDashboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStreamSidenavRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStreamExternalSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamCreateExternalSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamUpdateExternalSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamExternalSourceExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiStreamDeleteExternalSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamAddDashboardStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamUpdateDashboardStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamUpdateDashboardPositionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamAddSidenavStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamAddSidenavStreamFromExternalSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamUpdateSidenavStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamUpdateSidenavPositionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamBulkSidenavStreamVisibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiStreamSmartFilterSideNavStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiStreamSmartFilterDashboardStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTachiyomiLatestChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTachiyomiMarkChapterUntilAsReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiThemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiThemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiThemeUpdateDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiThemeDownloadContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiThemeBrowseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiThemeDownloadThemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiThemeUploadThemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadUploadByUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadUploadChapterCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadUploadVolumeCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadUploadSeriesCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadUploadByFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadReadingListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadLibraryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadPersonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersDeleteUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersProfileInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersHasProfileSharedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersHasReadingProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersHasLibraryAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersUpdatePreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersGetPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersKoboSyncPointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersKoboSyncPointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersKoboSyncPointUndoRemoveBooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVolumeUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVolumeMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWantToReadV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWantToReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWantToReadAddSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWantToReadRemoveSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
