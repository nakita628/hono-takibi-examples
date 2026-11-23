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
  deleteKoboApiKeyV1LibraryBookIdRoute,
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
  getKoboApiKeyV1AnalyticsGettestsRoute,
  getKoboApiKeyV1BooksThumbnailIdThumbnailWidthHeightIsGreyScaleImageJpgRoute,
  getKoboApiKeyV1BooksThumbnailIdThumbnailWidthHeightQualityIsGreyScaleImageJpgRoute,
  getKoboApiKeyV1InitializationRoute,
  getKoboApiKeyV1LibraryBookIdFileEpubRoute,
  getKoboApiKeyV1LibraryBookIdMetadataRoute,
  getKoboApiKeyV1LibraryBookIdStateRoute,
  getKoboApiKeyV1LibrarySyncRoute,
  getKoboApiKeyV1ProductsBookIdNextreadRoute,
  getKoboApiKeyV1ProductsBookIdRecommendationsRoute,
  getKoboApiKeyV1ProductsBookIdReviewsRoute,
  getKoboApiKeyV1ProductsBookIdsPricesRoute,
  getKoboApiKeyV1ProductsBooksBookIdRoute,
  getKoboApiKeyV1ProductsBooksSeriesBookIdRoute,
  getKoboApiKeyV1UserReviewsRoute,
  getKoboApiKeyV1UserWishlistRoute,
  getOidcLoginRoute,
  getOidcLogoutRoute,
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
  postKoboApiKeyV1AnalyticsGettestsRoute,
  postKoboApiKeyV1LibraryBookIdRoute,
  putApiKoreaderApiKeySyncsProgressRoute,
  putKoboApiKeyV1LibraryBookIdStateRoute,
  putKoboApiKeyV1ProductsBookIdReviewsRoute,
} from './routes'
import {
  deleteApiAccountAuthKeyRouteHandler,
  deleteApiAnnotationRouteHandler,
  deleteApiCblRemapRulesIdRouteHandler,
  deleteApiChapterRouteHandler,
  deleteApiCollectionRouteHandler,
  deleteApiDeviceClientDeviceRouteHandler,
  deleteApiDeviceRouteHandler,
  deleteApiFilterRouteHandler,
  deleteApiFontRouteHandler,
  deleteApiLibraryDeleteMultipleRouteHandler,
  deleteApiLibraryDeleteRouteHandler,
  deleteApiLicenseCancelRouteHandler,
  deleteApiLicenseRouteHandler,
  deleteApiReaderPtocRouteHandler,
  deleteApiReadingListRouteHandler,
  deleteApiReadingProfileLibraryLibraryIdRouteHandler,
  deleteApiReadingProfileRouteHandler,
  deleteApiReadingProfileSeriesSeriesIdRouteHandler,
  deleteApiReviewChapterRouteHandler,
  deleteApiReviewSeriesRouteHandler,
  deleteApiScrobblingRemoveErrorIdRouteHandler,
  deleteApiScrobblingRemoveHoldRouteHandler,
  deleteApiSeriesSeriesIdRouteHandler,
  deleteApiStreamDeleteExternalSourceRouteHandler,
  deleteApiStreamSmartFilterDashboardStreamRouteHandler,
  deleteApiStreamSmartFilterSideNavStreamRouteHandler,
  deleteApiThemeRouteHandler,
  deleteApiUsersDeleteUserRouteHandler,
  deleteApiUsersKoboSyncPointRouteHandler,
  deleteApiVolumeRouteHandler,
  deleteKoboApiKeyV1LibraryBookIdRouteHandler,
  getApiAccountAuthKeysRouteHandler,
  getApiAccountEmailConfirmedRouteHandler,
  getApiAccountInviteUrlRouteHandler,
  getApiAccountIsEmailValidRouteHandler,
  getApiAccountOidcAuthenticatedRouteHandler,
  getApiAccountOpdsUrlRouteHandler,
  getApiAccountRefreshAccountRouteHandler,
  getApiAccountRolesRouteHandler,
  getApiAccountRouteHandler,
  getApiActivityCurrentRouteHandler,
  getApiAdminExistsRouteHandler,
  getApiAnnotationAllForSeriesRouteHandler,
  getApiAnnotationAllRouteHandler,
  getApiAnnotationAnnotationIdRouteHandler,
  getApiBookChapterIdBookInfoRouteHandler,
  getApiBookChapterIdBookPageRouteHandler,
  getApiBookChapterIdBookResourcesRouteHandler,
  getApiBookChapterIdChaptersRouteHandler,
  getApiCblBrowseRouteHandler,
  getApiCblRemapRulesAllRouteHandler,
  getApiCblRemapRulesRouteHandler,
  getApiChapterChapterDetailPlusRouteHandler,
  getApiChapterRestoreInfoRouteHandler,
  getApiChapterRouteHandler,
  getApiCollectionAllSeriesRouteHandler,
  getApiCollectionMalStacksRouteHandler,
  getApiCollectionNameExistsRouteHandler,
  getApiCollectionRouteHandler,
  getApiCollectionSingleRouteHandler,
  getApiColorScapeChapterRouteHandler,
  getApiColorScapeCollectionRouteHandler,
  getApiColorScapePersonRouteHandler,
  getApiColorScapeReadingListRouteHandler,
  getApiColorScapeSeriesRouteHandler,
  getApiColorScapeVolumeRouteHandler,
  getApiDeviceClientAllDevicesRouteHandler,
  getApiDeviceClientDevicesRouteHandler,
  getApiDeviceRouteHandler,
  getApiDownloadChapterRouteHandler,
  getApiDownloadChapterSizeRouteHandler,
  getApiDownloadReadinglistSizeRouteHandler,
  getApiDownloadSeriesRouteHandler,
  getApiDownloadSeriesSizeRouteHandler,
  getApiDownloadVolumeRouteHandler,
  getApiDownloadVolumeSizeRouteHandler,
  getApiEmailAllRouteHandler,
  getApiFilterRouteHandler,
  getApiFontAllRouteHandler,
  getApiFontRouteHandler,
  getApiHealthRouteHandler,
  getApiImageBookmarkRouteHandler,
  getApiImageChapterCoverRouteHandler,
  getApiImageCollectionCoverRouteHandler,
  getApiImageCoverUploadRouteHandler,
  getApiImageExternalChapterRouteHandler,
  getApiImageExternalSeriesRouteHandler,
  getApiImageExternalVolumeRouteHandler,
  getApiImageLibraryCoverRouteHandler,
  getApiImagePersonCoverRouteHandler,
  getApiImagePublisherRouteHandler,
  getApiImageReadinglistCoverRouteHandler,
  getApiImageSeriesCoverRouteHandler,
  getApiImageUserCoverRouteHandler,
  getApiImageVolumeCoverRouteHandler,
  getApiImageWebLinkRouteHandler,
  getApiKavitaPlusAuditEntriesSeriesSeriesIdRouteHandler,
  getApiKavitaPlusAuditFailedScrobbleEventsRouteHandler,
  getApiKavitaPlusAuditMyStatsRouteHandler,
  getApiKavitaPlusAuditStatsRouteHandler,
  getApiKoreaderApiKeySyncsProgressEbookHashRouteHandler,
  getApiKoreaderApiKeyUsersAuthRouteHandler,
  getApiLibraryJumpBarRouteHandler,
  getApiLibraryLibrariesRouteHandler,
  getApiLibraryListRouteHandler,
  getApiLibraryMetadataEnabledLibrariesRouteHandler,
  getApiLibraryMetadataProvidersRouteHandler,
  getApiLibraryNameExistsRouteHandler,
  getApiLibraryRouteHandler,
  getApiLibraryScrobbleEnabledLibrariesRouteHandler,
  getApiLibraryTypeRouteHandler,
  getApiLibraryUserLibrariesRouteHandler,
  getApiLibraryWatchStatusRouteHandler,
  getApiLicenseHasLicenseRouteHandler,
  getApiLicenseInfoRouteHandler,
  getApiLicenseProductsRouteHandler,
  getApiLicenseProviderHealthRouteHandler,
  getApiLicenseStatsRouteHandler,
  getApiLicenseValidLicenseRouteHandler,
  getApiLocaleRouteHandler,
  getApiManageMatchedSeriesCountsRouteHandler,
  getApiMetadataAgeRatingsRouteHandler,
  getApiMetadataAllBcp47LanguagesRouteHandler,
  getApiMetadataAllLanguagesRouteHandler,
  getApiMetadataGenresRouteHandler,
  getApiMetadataLanguagesRouteHandler,
  getApiMetadataLanguageTitleRouteHandler,
  getApiMetadataPeopleByRoleRouteHandler,
  getApiMetadataPeopleRouteHandler,
  getApiMetadataPublicationStatusRouteHandler,
  getApiMetadataReadinglistTagsRouteHandler,
  getApiMetadataSeriesDetailPlusRouteHandler,
  getApiMetadataTagsRouteHandler,
  getApiOAuthCallbackRouteHandler,
  getApiOAuthStartRouteHandler,
  getApiOpdsApiKeyCollectionsCollectionIdRouteHandler,
  getApiOpdsApiKeyCollectionsRouteHandler,
  getApiOpdsApiKeyFaviconRouteHandler,
  getApiOpdsApiKeyImageRouteHandler,
  getApiOpdsApiKeyLibrariesLibraryIdRouteHandler,
  getApiOpdsApiKeyLibrariesRouteHandler,
  getApiOpdsApiKeyOnDeckRouteHandler,
  getApiOpdsApiKeyReadingListReadingListIdRouteHandler,
  getApiOpdsApiKeyReadingListRouteHandler,
  getApiOpdsApiKeyRecentlyAddedRouteHandler,
  getApiOpdsApiKeyRecentlyUpdatedRouteHandler,
  getApiOpdsApiKeyRouteHandler,
  getApiOpdsApiKeySearchRouteHandler,
  getApiOpdsApiKeySeriesRouteHandler,
  getApiOpdsApiKeySeriesSeriesIdRouteHandler,
  getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdChapterChapterIdDownloadFilenameRouteHandler,
  getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdChapterChapterIdRouteHandler,
  getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdRouteHandler,
  getApiOpdsApiKeySmartFiltersFilterIdRouteHandler,
  getApiOpdsApiKeySmartFiltersRouteHandler,
  getApiOpdsApiKeyWantToReadRouteHandler,
  getApiPanelsGetProgressRouteHandler,
  getApiPersonChaptersByRoleRouteHandler,
  getApiPersonCoversdbImageRouteHandler,
  getApiPersonRolesRouteHandler,
  getApiPersonRouteHandler,
  getApiPersonSearchRouteHandler,
  getApiPersonSeriesKnownForRouteHandler,
  getApiPluginAuthkeyExpiresRouteHandler,
  getApiPluginParseRouteHandler,
  getApiPluginVersionRouteHandler,
  getApiRatingOverallChapterRouteHandler,
  getApiRatingOverallSeriesRouteHandler,
  getApiReaderBookmarkImageRouteHandler,
  getApiReaderBookmarkInfoRouteHandler,
  getApiReaderChapterBookmarksRouteHandler,
  getApiReaderChapterInfoRouteHandler,
  getApiReaderContinuePointRouteHandler,
  getApiReaderFileDimensionsRouteHandler,
  getApiReaderFirstProgressDateRouteHandler,
  getApiReaderGetProgressRouteHandler,
  getApiReaderHasProgressRouteHandler,
  getApiReaderImageRouteHandler,
  getApiReaderNextChapterRouteHandler,
  getApiReaderPdfRouteHandler,
  getApiReaderPrevChapterRouteHandler,
  getApiReaderPromptRereadChapterRouteHandler,
  getApiReaderPromptRereadSeriesRouteHandler,
  getApiReaderPromptRereadVolumeRouteHandler,
  getApiReaderPtocRouteHandler,
  getApiReaderSeriesBookmarksRouteHandler,
  getApiReaderThumbnailRouteHandler,
  getApiReaderTimeLeftForChapterRouteHandler,
  getApiReaderTimeLeftRouteHandler,
  getApiReaderVolumeBookmarksRouteHandler,
  getApiReadingListAllPeopleRouteHandler,
  getApiReadingListInfoRouteHandler,
  getApiReadingListItemsRouteHandler,
  getApiReadingListListsForChapterRouteHandler,
  getApiReadingListListsForSeriesRouteHandler,
  getApiReadingListNameExistsRouteHandler,
  getApiReadingListNextChapterRouteHandler,
  getApiReadingListPeopleRouteHandler,
  getApiReadingListPrevChapterRouteHandler,
  getApiReadingListRouteHandler,
  getApiReadingProfileAllRouteHandler,
  getApiReadingProfileLibraryIdSeriesIdRouteHandler,
  getApiReadingProfileLibraryRouteHandler,
  getApiReadingProfileSeriesRouteHandler,
  getApiReviewAllRouteHandler,
  getApiReviewMySeriesRouteHandler,
  getApiScrobblingExpiredTokensRouteHandler,
  getApiScrobblingHasHoldRouteHandler,
  getApiScrobblingHoldsRouteHandler,
  getApiScrobblingLibraryAllowsScrobblingRouteHandler,
  getApiScrobblingNextScrobbleTimeRouteHandler,
  getApiScrobblingScrobbleErrorsRouteHandler,
  getApiScrobblingScrobbleSettingsRouteHandler,
  getApiScrobblingTokenExpiredRouteHandler,
  getApiSearchChaptersBySeriesRouteHandler,
  getApiSearchSearchRouteHandler,
  getApiSearchSeriesForChapterRouteHandler,
  getApiSearchSeriesForMangafileRouteHandler,
  getApiSeriesAgeRatingRouteHandler,
  getApiSeriesAllRelatedRouteHandler,
  getApiSeriesChapterRouteHandler,
  getApiSeriesCurrentlyReadingRouteHandler,
  getApiSeriesExternalSeriesDetailRouteHandler,
  getApiSeriesMatchInfoRouteHandler,
  getApiSeriesMetadataRouteHandler,
  getApiSeriesNextExpectedRouteHandler,
  getApiSeriesRelatedRouteHandler,
  getApiSeriesSeriesByCollectionRouteHandler,
  getApiSeriesSeriesDetailRouteHandler,
  getApiSeriesSeriesIdRouteHandler,
  getApiSeriesSeriesWithAnnotationsRouteHandler,
  getApiSeriesVolumeRouteHandler,
  getApiSeriesVolumesRouteHandler,
  getApiServerActivityRouteHandler,
  getApiServerChangelogRouteHandler,
  getApiServerCheckForUpdatesRouteHandler,
  getApiServerCheckOutOfDateRouteHandler,
  getApiServerCheckUpdateRouteHandler,
  getApiServerDebugExportExportIdRouteHandler,
  getApiServerIsTaskRunningRouteHandler,
  getApiServerJobsRouteHandler,
  getApiServerLogsRouteHandler,
  getApiServerMediaErrorsForSeriesRouteHandler,
  getApiServerMediaErrorsRouteHandler,
  getApiServerServerInfoSlimRouteHandler,
  getApiSettingsBaseUrlRouteHandler,
  getApiSettingsIsEmailSetupRouteHandler,
  getApiSettingsIsValidCronRouteHandler,
  getApiSettingsKepubifySupportedRouteHandler,
  getApiSettingsKoboEnabledRouteHandler,
  getApiSettingsLibraryTypesRouteHandler,
  getApiSettingsLogLevelsRouteHandler,
  getApiSettingsMetadataSettingsRouteHandler,
  getApiSettingsOidcRouteHandler,
  getApiSettingsOpdsEnabledRouteHandler,
  getApiSettingsRouteHandler,
  getApiSettingsTaskFrequenciesRouteHandler,
  getApiStatsAvgTimeByHourRouteHandler,
  getApiStatsDayBreakdownRouteHandler,
  getApiStatsDeviceClientTypeRouteHandler,
  getApiStatsDeviceDeviceTypeRouteHandler,
  getApiStatsFavoriteAuthorsRouteHandler,
  getApiStatsFilesAddedOverTimeRouteHandler,
  getApiStatsGenreBreakdownRouteHandler,
  getApiStatsMostActiveUsersRouteHandler,
  getApiStatsPagesPerYearRouteHandler,
  getApiStatsPageSpreadRouteHandler,
  getApiStatsPopularDecadesRouteHandler,
  getApiStatsPopularGenresRouteHandler,
  getApiStatsPopularLibrariesRouteHandler,
  getApiStatsPopularPeopleRouteHandler,
  getApiStatsPopularReadingListRouteHandler,
  getApiStatsPopularSeriesRouteHandler,
  getApiStatsPopularTagsRouteHandler,
  getApiStatsReadingActivityRouteHandler,
  getApiStatsReadingCountsRouteHandler,
  getApiStatsReadingHistoryRouteHandler,
  getApiStatsReadingHistorySeriesSeriesIdRouteHandler,
  getApiStatsReadingPaceRouteHandler,
  getApiStatsReadsByMonthRouteHandler,
  getApiStatsServerCountMangaFormatRouteHandler,
  getApiStatsServerCountPublicationStatusRouteHandler,
  getApiStatsServerFileBreakdownRouteHandler,
  getApiStatsServerFileExtensionRouteHandler,
  getApiStatsServerStatsRouteHandler,
  getApiStatsTagBreakdownRouteHandler,
  getApiStatsTotalReadsRouteHandler,
  getApiStatsUserReadRouteHandler,
  getApiStatsUserStatsRouteHandler,
  getApiStatsWordsPerYearRouteHandler,
  getApiStatsWordSpreadRouteHandler,
  getApiStreamDashboardRouteHandler,
  getApiStreamExternalSourcesRouteHandler,
  getApiStreamSidenavRouteHandler,
  getApiTachiyomiLatestChapterRouteHandler,
  getApiThemeBrowseRouteHandler,
  getApiThemeDownloadContentRouteHandler,
  getApiThemeRouteHandler,
  getApiUsersGetPreferencesRouteHandler,
  getApiUsersHasLibraryAccessRouteHandler,
  getApiUsersHasProfileSharedRouteHandler,
  getApiUsersHasReadingProgressRouteHandler,
  getApiUsersKoboSyncPointsRouteHandler,
  getApiUsersNamesRouteHandler,
  getApiUsersProfileInfoRouteHandler,
  getApiUsersRouteHandler,
  getApiUsersTokensRouteHandler,
  getApiV3ContentBookIdAnnotationsRouteHandler,
  getApiVolumeRouteHandler,
  getApiWantToReadRouteHandler,
  getKoboApiKeyV1AnalyticsGettestsRouteHandler,
  getKoboApiKeyV1BooksThumbnailIdThumbnailWidthHeightIsGreyScaleImageJpgRouteHandler,
  getKoboApiKeyV1BooksThumbnailIdThumbnailWidthHeightQualityIsGreyScaleImageJpgRouteHandler,
  getKoboApiKeyV1InitializationRouteHandler,
  getKoboApiKeyV1LibraryBookIdFileEpubRouteHandler,
  getKoboApiKeyV1LibraryBookIdMetadataRouteHandler,
  getKoboApiKeyV1LibraryBookIdStateRouteHandler,
  getKoboApiKeyV1LibrarySyncRouteHandler,
  getKoboApiKeyV1ProductsBookIdNextreadRouteHandler,
  getKoboApiKeyV1ProductsBookIdRecommendationsRouteHandler,
  getKoboApiKeyV1ProductsBookIdReviewsRouteHandler,
  getKoboApiKeyV1ProductsBookIdsPricesRouteHandler,
  getKoboApiKeyV1ProductsBooksBookIdRouteHandler,
  getKoboApiKeyV1ProductsBooksSeriesBookIdRouteHandler,
  getKoboApiKeyV1UserReviewsRouteHandler,
  getKoboApiKeyV1UserWishlistRouteHandler,
  getOidcLoginRouteHandler,
  getOidcLogoutRouteHandler,
  patchApiV3ContentBookIdAnnotationsRouteHandler,
  postApiAccountClearOidcLinkRouteHandler,
  postApiAccountConfirmEmailRouteHandler,
  postApiAccountConfirmEmailUpdateRouteHandler,
  postApiAccountConfirmMigrationEmailRouteHandler,
  postApiAccountConfirmPasswordResetRouteHandler,
  postApiAccountCreateAuthKeyRouteHandler,
  postApiAccountForgotPasswordRouteHandler,
  postApiAccountInviteRouteHandler,
  postApiAccountLoginRouteHandler,
  postApiAccountRefreshTokenRouteHandler,
  postApiAccountRegisterRouteHandler,
  postApiAccountResendConfirmationEmailRouteHandler,
  postApiAccountResetPasswordRouteHandler,
  postApiAccountRotateAuthKeyRouteHandler,
  postApiAccountUpdateAgeRestrictionRouteHandler,
  postApiAccountUpdateEmailRouteHandler,
  postApiAccountUpdateRouteHandler,
  postApiAccountUpdateUsernameRouteHandler,
  postApiAnnotationAllFilteredRouteHandler,
  postApiAnnotationBulkDeleteRouteHandler,
  postApiAnnotationCreateRouteHandler,
  postApiAnnotationExportFilterRouteHandler,
  postApiAnnotationExportRouteHandler,
  postApiAnnotationLikeRouteHandler,
  postApiAnnotationUnlikeRouteHandler,
  postApiAnnotationUpdateRouteHandler,
  postApiCblFileImportRouteHandler,
  postApiCblFinalizeImportRouteHandler,
  postApiCblRemapRulesIdDemoteRouteHandler,
  postApiCblRemapRulesIdPromoteRouteHandler,
  postApiCblRemapRulesIdRouteHandler,
  postApiCblRemapRulesRouteHandler,
  postApiCblRepoImportRouteHandler,
  postApiCblReValidateRouteHandler,
  postApiCblSyncRouteHandler,
  postApiCblUploadCblFileRouteHandler,
  postApiChapterDeleteMultipleRouteHandler,
  postApiChapterUpdateRouteHandler,
  postApiCollectionDeleteMultipleRouteHandler,
  postApiCollectionImportStackRouteHandler,
  postApiCollectionPromoteMultipleRouteHandler,
  postApiCollectionUpdateForSeriesRouteHandler,
  postApiCollectionUpdateRouteHandler,
  postApiCollectionUpdateSeriesRouteHandler,
  postApiDeviceClientUpdateNameRouteHandler,
  postApiDeviceCreateRouteHandler,
  postApiDeviceSendSeriesToRouteHandler,
  postApiDeviceSendToRouteHandler,
  postApiDeviceUpdateRouteHandler,
  postApiDownloadBookmarksRouteHandler,
  postApiDownloadBulkChapterSizeRouteHandler,
  postApiDownloadBulkReadinglistSizeRouteHandler,
  postApiDownloadBulkSeriesSizeRouteHandler,
  postApiDownloadBulkVolumeSizeRouteHandler,
  postApiFilterDecodeRouteHandler,
  postApiFilterEncodeAnnotationRouteHandler,
  postApiFilterEncodePersonRouteHandler,
  postApiFilterEncodeReadingListRouteHandler,
  postApiFilterEncodeSeriesRouteHandler,
  postApiFilterRenameRouteHandler,
  postApiFilterUpdateAnnotationRouteHandler,
  postApiFilterUpdatePersonRouteHandler,
  postApiFilterUpdateReadingListRouteHandler,
  postApiFilterUpdateSeriesRouteHandler,
  postApiFontUploadByUrlRouteHandler,
  postApiFontUploadRouteHandler,
  postApiKavitaPlusAuditEntriesRouteHandler,
  postApiKavitaPlusAuditMyActivityRouteHandler,
  postApiLibraryCopySettingsFromRouteHandler,
  postApiLibraryCreateRouteHandler,
  postApiLibraryFolderWatchRetryRouteHandler,
  postApiLibraryGrantAccessRouteHandler,
  postApiLibraryHasFilesAtRootRouteHandler,
  postApiLibraryRefreshMetadataMultipleRouteHandler,
  postApiLibraryRefreshMetadataRouteHandler,
  postApiLibraryScanAllRouteHandler,
  postApiLibraryScanFolderRouteHandler,
  postApiLibraryScanMultipleRouteHandler,
  postApiLibraryScanRouteHandler,
  postApiLibraryUpdateRouteHandler,
  postApiLicenseChangeEmailRouteHandler,
  postApiLicenseRenewRouteHandler,
  postApiLicenseResendLicenseRouteHandler,
  postApiLicenseResetRouteHandler,
  postApiLicenseRouteHandler,
  postApiManageSeriesMetadataRouteHandler,
  postApiMetadataGenresWithCountsRouteHandler,
  postApiMetadataTagsWithCountsRouteHandler,
  postApiOpdsApiKeyRouteHandler,
  postApiPanelsSaveProgressRouteHandler,
  postApiPersonAllRouteHandler,
  postApiPersonMergeRouteHandler,
  postApiPersonUpdateRouteHandler,
  postApiPersonValidAliasRouteHandler,
  postApiPluginAuthenticateRouteHandler,
  postApiPluginParseBulkRouteHandler,
  postApiRatingChapterRouteHandler,
  postApiRatingSeriesRouteHandler,
  postApiReaderAllBookmarksRouteHandler,
  postApiReaderBookmarkRouteHandler,
  postApiReaderBulkRemoveBookmarksRouteHandler,
  postApiReaderCreatePtocRouteHandler,
  postApiReaderMarkChapterReadRouteHandler,
  postApiReaderMarkMultipleReadRouteHandler,
  postApiReaderMarkMultipleSeriesReadRouteHandler,
  postApiReaderMarkMultipleSeriesUnreadRouteHandler,
  postApiReaderMarkMultipleUnreadRouteHandler,
  postApiReaderMarkReadRouteHandler,
  postApiReaderMarkUnreadRouteHandler,
  postApiReaderMarkVolumeReadRouteHandler,
  postApiReaderMarkVolumeUnreadRouteHandler,
  postApiReaderProgressRouteHandler,
  postApiReaderRemoveBookmarksRouteHandler,
  postApiReaderUnbookmarkRouteHandler,
  postApiReadingListAllRouteHandler,
  postApiReadingListCreateRouteHandler,
  postApiReadingListDeleteItemRouteHandler,
  postApiReadingListDeleteMultipleRouteHandler,
  postApiReadingListExportAsCblRouteHandler,
  postApiReadingListListsRouteHandler,
  postApiReadingListPromoteMultipleRouteHandler,
  postApiReadingListRegenerateCoverRouteHandler,
  postApiReadingListRemoveReadRouteHandler,
  postApiReadingListUpdateByChapterRouteHandler,
  postApiReadingListUpdateByMultipleRouteHandler,
  postApiReadingListUpdateByMultipleSeriesRouteHandler,
  postApiReadingListUpdateBySeriesRouteHandler,
  postApiReadingListUpdateByVolumeRouteHandler,
  postApiReadingListUpdatePositionRouteHandler,
  postApiReadingListUpdateRouteHandler,
  postApiReadingProfileBulkRouteHandler,
  postApiReadingProfileCreateRouteHandler,
  postApiReadingProfileLibraryLibraryIdRouteHandler,
  postApiReadingProfilePromoteRouteHandler,
  postApiReadingProfileRouteHandler,
  postApiReadingProfileSeriesRouteHandler,
  postApiReadingProfileSeriesSeriesIdRouteHandler,
  postApiReadingProfileSetDevicesRouteHandler,
  postApiReadingProfileUpdateParentRouteHandler,
  postApiReviewChapterRouteHandler,
  postApiReviewSeriesRouteHandler,
  postApiScrobblingAddHoldRouteHandler,
  postApiScrobblingBulkRemoveEventsRouteHandler,
  postApiScrobblingClearErrorsRouteHandler,
  postApiScrobblingGenerateScrobbleEventsAllRouteHandler,
  postApiScrobblingGenerateScrobbleEventsRouteHandler,
  postApiScrobblingRetryScrobbleRouteHandler,
  postApiScrobblingScrobbleEventsRouteHandler,
  postApiScrobblingUpdateScrobbleSettingsRouteHandler,
  postApiScrobblingUpdateUserScrobbleProviderRouteHandler,
  postApiSeriesAllV2RouteHandler,
  postApiSeriesAnalyzeRouteHandler,
  postApiSeriesDeleteMultipleRouteHandler,
  postApiSeriesDontMatchRouteHandler,
  postApiSeriesMatchRouteHandler,
  postApiSeriesMetadataRouteHandler,
  postApiSeriesOnDeckRouteHandler,
  postApiSeriesRecentlyAddedV2RouteHandler,
  postApiSeriesRecentlyUpdatedSeriesRouteHandler,
  postApiSeriesRefreshMetadataRouteHandler,
  postApiSeriesRemoveFromOnDeckRouteHandler,
  postApiSeriesScanRouteHandler,
  postApiSeriesSeriesByIdsRouteHandler,
  postApiSeriesUpdateMatchRouteHandler,
  postApiSeriesUpdateRelatedRouteHandler,
  postApiSeriesUpdateRouteHandler,
  postApiSeriesV2RouteHandler,
  postApiServerAnalyzeFilesRouteHandler,
  postApiServerBackupDbRouteHandler,
  postApiServerBustKavitaplusCacheRouteHandler,
  postApiServerCleanupRouteHandler,
  postApiServerCleanupWantToReadRouteHandler,
  postApiServerClearCacheRouteHandler,
  postApiServerClearMediaAlertsRouteHandler,
  postApiServerConvertMediaRouteHandler,
  postApiServerDebugExportRouteHandler,
  postApiServerMediaErrorsDismissRouteHandler,
  postApiServerMediaErrorsUndismissRouteHandler,
  postApiServerSyncThemesRouteHandler,
  postApiSettingsImportFieldMappingsRouteHandler,
  postApiSettingsIsValidAuthorityRouteHandler,
  postApiSettingsKepubifyRouteHandler,
  postApiSettingsMetadataSettingsRouteHandler,
  postApiSettingsResetBaseUrlRouteHandler,
  postApiSettingsResetExternalIdsRouteHandler,
  postApiSettingsResetIpAddressesRouteHandler,
  postApiSettingsResetRouteHandler,
  postApiSettingsRouteHandler,
  postApiSettingsRunMetadataMappingsRouteHandler,
  postApiSettingsTestEmailUrlRouteHandler,
  postApiStreamAddDashboardStreamRouteHandler,
  postApiStreamAddSidenavStreamFromExternalSourceRouteHandler,
  postApiStreamAddSidenavStreamRouteHandler,
  postApiStreamBulkSidenavStreamVisibilityRouteHandler,
  postApiStreamCreateExternalSourceRouteHandler,
  postApiStreamExternalSourceExistsRouteHandler,
  postApiStreamUpdateDashboardPositionRouteHandler,
  postApiStreamUpdateDashboardStreamRouteHandler,
  postApiStreamUpdateExternalSourceRouteHandler,
  postApiStreamUpdateSidenavPositionRouteHandler,
  postApiStreamUpdateSidenavStreamRouteHandler,
  postApiTachiyomiMarkChapterUntilAsReadRouteHandler,
  postApiThemeDownloadThemeRouteHandler,
  postApiThemeUpdateDefaultRouteHandler,
  postApiThemeUploadThemeRouteHandler,
  postApiUploadChapterRouteHandler,
  postApiUploadCollectionRouteHandler,
  postApiUploadLibraryRouteHandler,
  postApiUploadPersonRouteHandler,
  postApiUploadReadingListRouteHandler,
  postApiUploadSeriesRouteHandler,
  postApiUploadUploadByFileRouteHandler,
  postApiUploadUploadByUrlRouteHandler,
  postApiUploadUploadChapterCoverRouteHandler,
  postApiUploadUploadSeriesCoverRouteHandler,
  postApiUploadUploadVolumeCoverRouteHandler,
  postApiUploadUserRouteHandler,
  postApiUploadVolumeRouteHandler,
  postApiUsersKoboSyncPointUndoRemoveBooksRouteHandler,
  postApiUsersUpdatePreferencesRouteHandler,
  postApiV3ContentCheckforchangesRouteHandler,
  postApiVolumeMultipleRouteHandler,
  postApiVolumeUpdateRouteHandler,
  postApiWantToReadAddSeriesRouteHandler,
  postApiWantToReadRemoveSeriesRouteHandler,
  postApiWantToReadV2RouteHandler,
  postKoboApiKeyV1AnalyticsGettestsRouteHandler,
  postKoboApiKeyV1LibraryBookIdRouteHandler,
  putApiKoreaderApiKeySyncsProgressRouteHandler,
  putKoboApiKeyV1LibraryBookIdStateRouteHandler,
  putKoboApiKeyV1ProductsBookIdReviewsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiAccountOidcAuthenticatedRoute, getApiAccountOidcAuthenticatedRouteHandler)
  .openapi(postApiAccountClearOidcLinkRoute, postApiAccountClearOidcLinkRouteHandler)
  .openapi(getApiAccountRoute, getApiAccountRouteHandler)
  .openapi(postApiAccountResetPasswordRoute, postApiAccountResetPasswordRouteHandler)
  .openapi(postApiAccountRegisterRoute, postApiAccountRegisterRouteHandler)
  .openapi(postApiAccountLoginRoute, postApiAccountLoginRouteHandler)
  .openapi(getApiAccountRefreshAccountRoute, getApiAccountRefreshAccountRouteHandler)
  .openapi(postApiAccountRefreshTokenRoute, postApiAccountRefreshTokenRouteHandler)
  .openapi(getApiAccountRolesRoute, getApiAccountRolesRouteHandler)
  .openapi(postApiAccountUpdateUsernameRoute, postApiAccountUpdateUsernameRouteHandler)
  .openapi(postApiAccountUpdateEmailRoute, postApiAccountUpdateEmailRouteHandler)
  .openapi(postApiAccountUpdateAgeRestrictionRoute, postApiAccountUpdateAgeRestrictionRouteHandler)
  .openapi(postApiAccountUpdateRoute, postApiAccountUpdateRouteHandler)
  .openapi(getApiAccountInviteUrlRoute, getApiAccountInviteUrlRouteHandler)
  .openapi(postApiAccountInviteRoute, postApiAccountInviteRouteHandler)
  .openapi(postApiAccountConfirmEmailRoute, postApiAccountConfirmEmailRouteHandler)
  .openapi(postApiAccountConfirmEmailUpdateRoute, postApiAccountConfirmEmailUpdateRouteHandler)
  .openapi(postApiAccountConfirmPasswordResetRoute, postApiAccountConfirmPasswordResetRouteHandler)
  .openapi(postApiAccountForgotPasswordRoute, postApiAccountForgotPasswordRouteHandler)
  .openapi(getApiAccountEmailConfirmedRoute, getApiAccountEmailConfirmedRouteHandler)
  .openapi(
    postApiAccountConfirmMigrationEmailRoute,
    postApiAccountConfirmMigrationEmailRouteHandler,
  )
  .openapi(
    postApiAccountResendConfirmationEmailRoute,
    postApiAccountResendConfirmationEmailRouteHandler,
  )
  .openapi(getApiAccountOpdsUrlRoute, getApiAccountOpdsUrlRouteHandler)
  .openapi(getApiAccountIsEmailValidRoute, getApiAccountIsEmailValidRouteHandler)
  .openapi(getApiAccountAuthKeysRoute, getApiAccountAuthKeysRouteHandler)
  .openapi(postApiAccountRotateAuthKeyRoute, postApiAccountRotateAuthKeyRouteHandler)
  .openapi(postApiAccountCreateAuthKeyRoute, postApiAccountCreateAuthKeyRouteHandler)
  .openapi(deleteApiAccountAuthKeyRoute, deleteApiAccountAuthKeyRouteHandler)
  .openapi(getApiActivityCurrentRoute, getApiActivityCurrentRouteHandler)
  .openapi(getApiAdminExistsRoute, getApiAdminExistsRouteHandler)
  .openapi(postApiAnnotationAllFilteredRoute, postApiAnnotationAllFilteredRouteHandler)
  .openapi(getApiAnnotationAllRoute, getApiAnnotationAllRouteHandler)
  .openapi(getApiAnnotationAllForSeriesRoute, getApiAnnotationAllForSeriesRouteHandler)
  .openapi(getApiAnnotationAnnotationIdRoute, getApiAnnotationAnnotationIdRouteHandler)
  .openapi(postApiAnnotationCreateRoute, postApiAnnotationCreateRouteHandler)
  .openapi(postApiAnnotationUpdateRoute, postApiAnnotationUpdateRouteHandler)
  .openapi(postApiAnnotationLikeRoute, postApiAnnotationLikeRouteHandler)
  .openapi(postApiAnnotationUnlikeRoute, postApiAnnotationUnlikeRouteHandler)
  .openapi(deleteApiAnnotationRoute, deleteApiAnnotationRouteHandler)
  .openapi(postApiAnnotationBulkDeleteRoute, postApiAnnotationBulkDeleteRouteHandler)
  .openapi(postApiAnnotationExportFilterRoute, postApiAnnotationExportFilterRouteHandler)
  .openapi(postApiAnnotationExportRoute, postApiAnnotationExportRouteHandler)
  .openapi(getApiBookChapterIdBookInfoRoute, getApiBookChapterIdBookInfoRouteHandler)
  .openapi(getApiBookChapterIdBookResourcesRoute, getApiBookChapterIdBookResourcesRouteHandler)
  .openapi(getApiBookChapterIdChaptersRoute, getApiBookChapterIdChaptersRouteHandler)
  .openapi(getApiBookChapterIdBookPageRoute, getApiBookChapterIdBookPageRouteHandler)
  .openapi(postApiCblSyncRoute, postApiCblSyncRouteHandler)
  .openapi(postApiCblFileImportRoute, postApiCblFileImportRouteHandler)
  .openapi(postApiCblUploadCblFileRoute, postApiCblUploadCblFileRouteHandler)
  .openapi(postApiCblRepoImportRoute, postApiCblRepoImportRouteHandler)
  .openapi(postApiCblReValidateRoute, postApiCblReValidateRouteHandler)
  .openapi(postApiCblFinalizeImportRoute, postApiCblFinalizeImportRouteHandler)
  .openapi(getApiCblRemapRulesRoute, getApiCblRemapRulesRouteHandler)
  .openapi(postApiCblRemapRulesRoute, postApiCblRemapRulesRouteHandler)
  .openapi(getApiCblRemapRulesAllRoute, getApiCblRemapRulesAllRouteHandler)
  .openapi(postApiCblRemapRulesIdPromoteRoute, postApiCblRemapRulesIdPromoteRouteHandler)
  .openapi(postApiCblRemapRulesIdDemoteRoute, postApiCblRemapRulesIdDemoteRouteHandler)
  .openapi(postApiCblRemapRulesIdRoute, postApiCblRemapRulesIdRouteHandler)
  .openapi(deleteApiCblRemapRulesIdRoute, deleteApiCblRemapRulesIdRouteHandler)
  .openapi(getApiCblBrowseRoute, getApiCblBrowseRouteHandler)
  .openapi(getApiChapterRoute, getApiChapterRouteHandler)
  .openapi(deleteApiChapterRoute, deleteApiChapterRouteHandler)
  .openapi(getApiChapterRestoreInfoRoute, getApiChapterRestoreInfoRouteHandler)
  .openapi(postApiChapterDeleteMultipleRoute, postApiChapterDeleteMultipleRouteHandler)
  .openapi(postApiChapterUpdateRoute, postApiChapterUpdateRouteHandler)
  .openapi(getApiChapterChapterDetailPlusRoute, getApiChapterChapterDetailPlusRouteHandler)
  .openapi(getApiCollectionRoute, getApiCollectionRouteHandler)
  .openapi(deleteApiCollectionRoute, deleteApiCollectionRouteHandler)
  .openapi(getApiCollectionSingleRoute, getApiCollectionSingleRouteHandler)
  .openapi(getApiCollectionAllSeriesRoute, getApiCollectionAllSeriesRouteHandler)
  .openapi(getApiCollectionNameExistsRoute, getApiCollectionNameExistsRouteHandler)
  .openapi(postApiCollectionUpdateRoute, postApiCollectionUpdateRouteHandler)
  .openapi(postApiCollectionPromoteMultipleRoute, postApiCollectionPromoteMultipleRouteHandler)
  .openapi(postApiCollectionDeleteMultipleRoute, postApiCollectionDeleteMultipleRouteHandler)
  .openapi(postApiCollectionUpdateForSeriesRoute, postApiCollectionUpdateForSeriesRouteHandler)
  .openapi(postApiCollectionUpdateSeriesRoute, postApiCollectionUpdateSeriesRouteHandler)
  .openapi(getApiCollectionMalStacksRoute, getApiCollectionMalStacksRouteHandler)
  .openapi(postApiCollectionImportStackRoute, postApiCollectionImportStackRouteHandler)
  .openapi(getApiColorScapeSeriesRoute, getApiColorScapeSeriesRouteHandler)
  .openapi(getApiColorScapeVolumeRoute, getApiColorScapeVolumeRouteHandler)
  .openapi(getApiColorScapeChapterRoute, getApiColorScapeChapterRouteHandler)
  .openapi(getApiColorScapePersonRoute, getApiColorScapePersonRouteHandler)
  .openapi(getApiColorScapeReadingListRoute, getApiColorScapeReadingListRouteHandler)
  .openapi(getApiColorScapeCollectionRoute, getApiColorScapeCollectionRouteHandler)
  .openapi(postApiDeviceCreateRoute, postApiDeviceCreateRouteHandler)
  .openapi(postApiDeviceUpdateRoute, postApiDeviceUpdateRouteHandler)
  .openapi(deleteApiDeviceRoute, deleteApiDeviceRouteHandler)
  .openapi(getApiDeviceRoute, getApiDeviceRouteHandler)
  .openapi(postApiDeviceSendToRoute, postApiDeviceSendToRouteHandler)
  .openapi(postApiDeviceSendSeriesToRoute, postApiDeviceSendSeriesToRouteHandler)
  .openapi(getApiDeviceClientDevicesRoute, getApiDeviceClientDevicesRouteHandler)
  .openapi(getApiDeviceClientAllDevicesRoute, getApiDeviceClientAllDevicesRouteHandler)
  .openapi(deleteApiDeviceClientDeviceRoute, deleteApiDeviceClientDeviceRouteHandler)
  .openapi(postApiDeviceClientUpdateNameRoute, postApiDeviceClientUpdateNameRouteHandler)
  .openapi(getApiDownloadVolumeSizeRoute, getApiDownloadVolumeSizeRouteHandler)
  .openapi(postApiDownloadBulkVolumeSizeRoute, postApiDownloadBulkVolumeSizeRouteHandler)
  .openapi(getApiDownloadChapterSizeRoute, getApiDownloadChapterSizeRouteHandler)
  .openapi(postApiDownloadBulkChapterSizeRoute, postApiDownloadBulkChapterSizeRouteHandler)
  .openapi(getApiDownloadSeriesSizeRoute, getApiDownloadSeriesSizeRouteHandler)
  .openapi(getApiDownloadReadinglistSizeRoute, getApiDownloadReadinglistSizeRouteHandler)
  .openapi(postApiDownloadBulkReadinglistSizeRoute, postApiDownloadBulkReadinglistSizeRouteHandler)
  .openapi(postApiDownloadBulkSeriesSizeRoute, postApiDownloadBulkSeriesSizeRouteHandler)
  .openapi(getApiDownloadVolumeRoute, getApiDownloadVolumeRouteHandler)
  .openapi(getApiDownloadChapterRoute, getApiDownloadChapterRouteHandler)
  .openapi(getApiDownloadSeriesRoute, getApiDownloadSeriesRouteHandler)
  .openapi(postApiDownloadBookmarksRoute, postApiDownloadBookmarksRouteHandler)
  .openapi(getApiEmailAllRoute, getApiEmailAllRouteHandler)
  .openapi(postApiFilterUpdateSeriesRoute, postApiFilterUpdateSeriesRouteHandler)
  .openapi(postApiFilterUpdateReadingListRoute, postApiFilterUpdateReadingListRouteHandler)
  .openapi(postApiFilterUpdatePersonRoute, postApiFilterUpdatePersonRouteHandler)
  .openapi(postApiFilterUpdateAnnotationRoute, postApiFilterUpdateAnnotationRouteHandler)
  .openapi(getApiFilterRoute, getApiFilterRouteHandler)
  .openapi(deleteApiFilterRoute, deleteApiFilterRouteHandler)
  .openapi(postApiFilterEncodeSeriesRoute, postApiFilterEncodeSeriesRouteHandler)
  .openapi(postApiFilterEncodeReadingListRoute, postApiFilterEncodeReadingListRouteHandler)
  .openapi(postApiFilterEncodePersonRoute, postApiFilterEncodePersonRouteHandler)
  .openapi(postApiFilterEncodeAnnotationRoute, postApiFilterEncodeAnnotationRouteHandler)
  .openapi(postApiFilterDecodeRoute, postApiFilterDecodeRouteHandler)
  .openapi(postApiFilterRenameRoute, postApiFilterRenameRouteHandler)
  .openapi(getApiFontAllRoute, getApiFontAllRouteHandler)
  .openapi(getApiFontRoute, getApiFontRouteHandler)
  .openapi(deleteApiFontRoute, deleteApiFontRouteHandler)
  .openapi(postApiFontUploadRoute, postApiFontUploadRouteHandler)
  .openapi(postApiFontUploadByUrlRoute, postApiFontUploadByUrlRouteHandler)
  .openapi(getApiHealthRoute, getApiHealthRouteHandler)
  .openapi(getApiImageChapterCoverRoute, getApiImageChapterCoverRouteHandler)
  .openapi(getApiImageLibraryCoverRoute, getApiImageLibraryCoverRouteHandler)
  .openapi(getApiImageVolumeCoverRoute, getApiImageVolumeCoverRouteHandler)
  .openapi(getApiImageSeriesCoverRoute, getApiImageSeriesCoverRouteHandler)
  .openapi(getApiImageCollectionCoverRoute, getApiImageCollectionCoverRouteHandler)
  .openapi(getApiImageReadinglistCoverRoute, getApiImageReadinglistCoverRouteHandler)
  .openapi(getApiImageBookmarkRoute, getApiImageBookmarkRouteHandler)
  .openapi(getApiImageWebLinkRoute, getApiImageWebLinkRouteHandler)
  .openapi(getApiImagePublisherRoute, getApiImagePublisherRouteHandler)
  .openapi(getApiImagePersonCoverRoute, getApiImagePersonCoverRouteHandler)
  .openapi(getApiImageUserCoverRoute, getApiImageUserCoverRouteHandler)
  .openapi(getApiImageCoverUploadRoute, getApiImageCoverUploadRouteHandler)
  .openapi(getApiImageExternalSeriesRoute, getApiImageExternalSeriesRouteHandler)
  .openapi(getApiImageExternalVolumeRoute, getApiImageExternalVolumeRouteHandler)
  .openapi(getApiImageExternalChapterRoute, getApiImageExternalChapterRouteHandler)
  .openapi(postApiKavitaPlusAuditEntriesRoute, postApiKavitaPlusAuditEntriesRouteHandler)
  .openapi(
    getApiKavitaPlusAuditEntriesSeriesSeriesIdRoute,
    getApiKavitaPlusAuditEntriesSeriesSeriesIdRouteHandler,
  )
  .openapi(getApiKavitaPlusAuditStatsRoute, getApiKavitaPlusAuditStatsRouteHandler)
  .openapi(getApiKavitaPlusAuditMyStatsRoute, getApiKavitaPlusAuditMyStatsRouteHandler)
  .openapi(postApiKavitaPlusAuditMyActivityRoute, postApiKavitaPlusAuditMyActivityRouteHandler)
  .openapi(
    getApiKavitaPlusAuditFailedScrobbleEventsRoute,
    getApiKavitaPlusAuditFailedScrobbleEventsRouteHandler,
  )
  .openapi(getKoboApiKeyV1InitializationRoute, getKoboApiKeyV1InitializationRouteHandler)
  .openapi(getKoboApiKeyV1LibrarySyncRoute, getKoboApiKeyV1LibrarySyncRouteHandler)
  .openapi(
    getKoboApiKeyV1LibraryBookIdMetadataRoute,
    getKoboApiKeyV1LibraryBookIdMetadataRouteHandler,
  )
  .openapi(getKoboApiKeyV1LibraryBookIdStateRoute, getKoboApiKeyV1LibraryBookIdStateRouteHandler)
  .openapi(putKoboApiKeyV1LibraryBookIdStateRoute, putKoboApiKeyV1LibraryBookIdStateRouteHandler)
  .openapi(
    getKoboApiKeyV1LibraryBookIdFileEpubRoute,
    getKoboApiKeyV1LibraryBookIdFileEpubRouteHandler,
  )
  .openapi(
    getKoboApiKeyV1BooksThumbnailIdThumbnailWidthHeightIsGreyScaleImageJpgRoute,
    getKoboApiKeyV1BooksThumbnailIdThumbnailWidthHeightIsGreyScaleImageJpgRouteHandler,
  )
  .openapi(
    getKoboApiKeyV1BooksThumbnailIdThumbnailWidthHeightQualityIsGreyScaleImageJpgRoute,
    getKoboApiKeyV1BooksThumbnailIdThumbnailWidthHeightQualityIsGreyScaleImageJpgRouteHandler,
  )
  .openapi(deleteKoboApiKeyV1LibraryBookIdRoute, deleteKoboApiKeyV1LibraryBookIdRouteHandler)
  .openapi(postKoboApiKeyV1LibraryBookIdRoute, postKoboApiKeyV1LibraryBookIdRouteHandler)
  .openapi(
    getKoboApiKeyV1ProductsBookIdReviewsRoute,
    getKoboApiKeyV1ProductsBookIdReviewsRouteHandler,
  )
  .openapi(
    putKoboApiKeyV1ProductsBookIdReviewsRoute,
    putKoboApiKeyV1ProductsBookIdReviewsRouteHandler,
  )
  .openapi(
    getKoboApiKeyV1ProductsBookIdRecommendationsRoute,
    getKoboApiKeyV1ProductsBookIdRecommendationsRouteHandler,
  )
  .openapi(getKoboApiKeyV1ProductsBooksBookIdRoute, getKoboApiKeyV1ProductsBooksBookIdRouteHandler)
  .openapi(
    getKoboApiKeyV1ProductsBookIdNextreadRoute,
    getKoboApiKeyV1ProductsBookIdNextreadRouteHandler,
  )
  .openapi(
    getKoboApiKeyV1ProductsBooksSeriesBookIdRoute,
    getKoboApiKeyV1ProductsBooksSeriesBookIdRouteHandler,
  )
  .openapi(
    getKoboApiKeyV1ProductsBookIdsPricesRoute,
    getKoboApiKeyV1ProductsBookIdsPricesRouteHandler,
  )
  .openapi(getKoboApiKeyV1UserReviewsRoute, getKoboApiKeyV1UserReviewsRouteHandler)
  .openapi(getKoboApiKeyV1UserWishlistRoute, getKoboApiKeyV1UserWishlistRouteHandler)
  .openapi(getKoboApiKeyV1AnalyticsGettestsRoute, getKoboApiKeyV1AnalyticsGettestsRouteHandler)
  .openapi(postKoboApiKeyV1AnalyticsGettestsRoute, postKoboApiKeyV1AnalyticsGettestsRouteHandler)
  .openapi(getApiV3ContentBookIdAnnotationsRoute, getApiV3ContentBookIdAnnotationsRouteHandler)
  .openapi(patchApiV3ContentBookIdAnnotationsRoute, patchApiV3ContentBookIdAnnotationsRouteHandler)
  .openapi(postApiV3ContentCheckforchangesRoute, postApiV3ContentCheckforchangesRouteHandler)
  .openapi(getApiKoreaderApiKeyUsersAuthRoute, getApiKoreaderApiKeyUsersAuthRouteHandler)
  .openapi(putApiKoreaderApiKeySyncsProgressRoute, putApiKoreaderApiKeySyncsProgressRouteHandler)
  .openapi(
    getApiKoreaderApiKeySyncsProgressEbookHashRoute,
    getApiKoreaderApiKeySyncsProgressEbookHashRouteHandler,
  )
  .openapi(postApiLibraryCreateRoute, postApiLibraryCreateRouteHandler)
  .openapi(getApiLibraryListRoute, getApiLibraryListRouteHandler)
  .openapi(postApiLibraryHasFilesAtRootRoute, postApiLibraryHasFilesAtRootRouteHandler)
  .openapi(getApiLibraryRoute, getApiLibraryRouteHandler)
  .openapi(getApiLibraryLibrariesRoute, getApiLibraryLibrariesRouteHandler)
  .openapi(getApiLibraryUserLibrariesRoute, getApiLibraryUserLibrariesRouteHandler)
  .openapi(getApiLibraryJumpBarRoute, getApiLibraryJumpBarRouteHandler)
  .openapi(postApiLibraryGrantAccessRoute, postApiLibraryGrantAccessRouteHandler)
  .openapi(postApiLibraryScanRoute, postApiLibraryScanRouteHandler)
  .openapi(postApiLibraryFolderWatchRetryRoute, postApiLibraryFolderWatchRetryRouteHandler)
  .openapi(getApiLibraryWatchStatusRoute, getApiLibraryWatchStatusRouteHandler)
  .openapi(postApiLibraryScanMultipleRoute, postApiLibraryScanMultipleRouteHandler)
  .openapi(postApiLibraryScanAllRoute, postApiLibraryScanAllRouteHandler)
  .openapi(postApiLibraryRefreshMetadataRoute, postApiLibraryRefreshMetadataRouteHandler)
  .openapi(
    postApiLibraryRefreshMetadataMultipleRoute,
    postApiLibraryRefreshMetadataMultipleRouteHandler,
  )
  .openapi(postApiLibraryCopySettingsFromRoute, postApiLibraryCopySettingsFromRouteHandler)
  .openapi(postApiLibraryScanFolderRoute, postApiLibraryScanFolderRouteHandler)
  .openapi(deleteApiLibraryDeleteRoute, deleteApiLibraryDeleteRouteHandler)
  .openapi(deleteApiLibraryDeleteMultipleRoute, deleteApiLibraryDeleteMultipleRouteHandler)
  .openapi(getApiLibraryNameExistsRoute, getApiLibraryNameExistsRouteHandler)
  .openapi(postApiLibraryUpdateRoute, postApiLibraryUpdateRouteHandler)
  .openapi(getApiLibraryMetadataProvidersRoute, getApiLibraryMetadataProvidersRouteHandler)
  .openapi(
    getApiLibraryMetadataEnabledLibrariesRoute,
    getApiLibraryMetadataEnabledLibrariesRouteHandler,
  )
  .openapi(
    getApiLibraryScrobbleEnabledLibrariesRoute,
    getApiLibraryScrobbleEnabledLibrariesRouteHandler,
  )
  .openapi(getApiLibraryTypeRoute, getApiLibraryTypeRouteHandler)
  .openapi(getApiLicenseValidLicenseRoute, getApiLicenseValidLicenseRouteHandler)
  .openapi(getApiLicenseHasLicenseRoute, getApiLicenseHasLicenseRouteHandler)
  .openapi(getApiLicenseInfoRoute, getApiLicenseInfoRouteHandler)
  .openapi(deleteApiLicenseRoute, deleteApiLicenseRouteHandler)
  .openapi(postApiLicenseRoute, postApiLicenseRouteHandler)
  .openapi(postApiLicenseResetRoute, postApiLicenseResetRouteHandler)
  .openapi(postApiLicenseResendLicenseRoute, postApiLicenseResendLicenseRouteHandler)
  .openapi(getApiLicenseProviderHealthRoute, getApiLicenseProviderHealthRouteHandler)
  .openapi(getApiLicenseStatsRoute, getApiLicenseStatsRouteHandler)
  .openapi(deleteApiLicenseCancelRoute, deleteApiLicenseCancelRouteHandler)
  .openapi(getApiLicenseProductsRoute, getApiLicenseProductsRouteHandler)
  .openapi(postApiLicenseRenewRoute, postApiLicenseRenewRouteHandler)
  .openapi(postApiLicenseChangeEmailRoute, postApiLicenseChangeEmailRouteHandler)
  .openapi(getApiLocaleRoute, getApiLocaleRouteHandler)
  .openapi(postApiManageSeriesMetadataRoute, postApiManageSeriesMetadataRouteHandler)
  .openapi(getApiManageMatchedSeriesCountsRoute, getApiManageMatchedSeriesCountsRouteHandler)
  .openapi(getApiMetadataGenresRoute, getApiMetadataGenresRouteHandler)
  .openapi(postApiMetadataGenresWithCountsRoute, postApiMetadataGenresWithCountsRouteHandler)
  .openapi(getApiMetadataPeopleByRoleRoute, getApiMetadataPeopleByRoleRouteHandler)
  .openapi(getApiMetadataPeopleRoute, getApiMetadataPeopleRouteHandler)
  .openapi(getApiMetadataTagsRoute, getApiMetadataTagsRouteHandler)
  .openapi(getApiMetadataReadinglistTagsRoute, getApiMetadataReadinglistTagsRouteHandler)
  .openapi(postApiMetadataTagsWithCountsRoute, postApiMetadataTagsWithCountsRouteHandler)
  .openapi(getApiMetadataAgeRatingsRoute, getApiMetadataAgeRatingsRouteHandler)
  .openapi(getApiMetadataPublicationStatusRoute, getApiMetadataPublicationStatusRouteHandler)
  .openapi(getApiMetadataLanguagesRoute, getApiMetadataLanguagesRouteHandler)
  .openapi(getApiMetadataAllLanguagesRoute, getApiMetadataAllLanguagesRouteHandler)
  .openapi(getApiMetadataAllBcp47LanguagesRoute, getApiMetadataAllBcp47LanguagesRouteHandler)
  .openapi(getApiMetadataLanguageTitleRoute, getApiMetadataLanguageTitleRouteHandler)
  .openapi(getApiMetadataSeriesDetailPlusRoute, getApiMetadataSeriesDetailPlusRouteHandler)
  .openapi(getApiOAuthStartRoute, getApiOAuthStartRouteHandler)
  .openapi(getApiOAuthCallbackRoute, getApiOAuthCallbackRouteHandler)
  .openapi(getOidcLoginRoute, getOidcLoginRouteHandler)
  .openapi(getOidcLogoutRoute, getOidcLogoutRouteHandler)
  .openapi(postApiOpdsApiKeyRoute, postApiOpdsApiKeyRouteHandler)
  .openapi(getApiOpdsApiKeyRoute, getApiOpdsApiKeyRouteHandler)
  .openapi(
    getApiOpdsApiKeySmartFiltersFilterIdRoute,
    getApiOpdsApiKeySmartFiltersFilterIdRouteHandler,
  )
  .openapi(getApiOpdsApiKeySmartFiltersRoute, getApiOpdsApiKeySmartFiltersRouteHandler)
  .openapi(getApiOpdsApiKeyLibrariesRoute, getApiOpdsApiKeyLibrariesRouteHandler)
  .openapi(getApiOpdsApiKeyWantToReadRoute, getApiOpdsApiKeyWantToReadRouteHandler)
  .openapi(getApiOpdsApiKeyCollectionsRoute, getApiOpdsApiKeyCollectionsRouteHandler)
  .openapi(
    getApiOpdsApiKeyCollectionsCollectionIdRoute,
    getApiOpdsApiKeyCollectionsCollectionIdRouteHandler,
  )
  .openapi(getApiOpdsApiKeyReadingListRoute, getApiOpdsApiKeyReadingListRouteHandler)
  .openapi(
    getApiOpdsApiKeyReadingListReadingListIdRoute,
    getApiOpdsApiKeyReadingListReadingListIdRouteHandler,
  )
  .openapi(getApiOpdsApiKeyLibrariesLibraryIdRoute, getApiOpdsApiKeyLibrariesLibraryIdRouteHandler)
  .openapi(getApiOpdsApiKeyRecentlyAddedRoute, getApiOpdsApiKeyRecentlyAddedRouteHandler)
  .openapi(getApiOpdsApiKeyRecentlyUpdatedRoute, getApiOpdsApiKeyRecentlyUpdatedRouteHandler)
  .openapi(getApiOpdsApiKeyOnDeckRoute, getApiOpdsApiKeyOnDeckRouteHandler)
  .openapi(getApiOpdsApiKeySeriesRoute, getApiOpdsApiKeySeriesRouteHandler)
  .openapi(getApiOpdsApiKeySearchRoute, getApiOpdsApiKeySearchRouteHandler)
  .openapi(getApiOpdsApiKeySeriesSeriesIdRoute, getApiOpdsApiKeySeriesSeriesIdRouteHandler)
  .openapi(
    getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdRoute,
    getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdRouteHandler,
  )
  .openapi(
    getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdChapterChapterIdRoute,
    getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdChapterChapterIdRouteHandler,
  )
  .openapi(
    getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdChapterChapterIdDownloadFilenameRoute,
    getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdChapterChapterIdDownloadFilenameRouteHandler,
  )
  .openapi(getApiOpdsApiKeyImageRoute, getApiOpdsApiKeyImageRouteHandler)
  .openapi(getApiOpdsApiKeyFaviconRoute, getApiOpdsApiKeyFaviconRouteHandler)
  .openapi(postApiPanelsSaveProgressRoute, postApiPanelsSaveProgressRouteHandler)
  .openapi(getApiPanelsGetProgressRoute, getApiPanelsGetProgressRouteHandler)
  .openapi(getApiPersonRoute, getApiPersonRouteHandler)
  .openapi(getApiPersonSearchRoute, getApiPersonSearchRouteHandler)
  .openapi(getApiPersonRolesRoute, getApiPersonRolesRouteHandler)
  .openapi(postApiPersonAllRoute, postApiPersonAllRouteHandler)
  .openapi(postApiPersonUpdateRoute, postApiPersonUpdateRouteHandler)
  .openapi(getApiPersonCoversdbImageRoute, getApiPersonCoversdbImageRouteHandler)
  .openapi(getApiPersonSeriesKnownForRoute, getApiPersonSeriesKnownForRouteHandler)
  .openapi(getApiPersonChaptersByRoleRoute, getApiPersonChaptersByRoleRouteHandler)
  .openapi(postApiPersonMergeRoute, postApiPersonMergeRouteHandler)
  .openapi(postApiPersonValidAliasRoute, postApiPersonValidAliasRouteHandler)
  .openapi(postApiPluginAuthenticateRoute, postApiPluginAuthenticateRouteHandler)
  .openapi(getApiPluginVersionRoute, getApiPluginVersionRouteHandler)
  .openapi(getApiPluginAuthkeyExpiresRoute, getApiPluginAuthkeyExpiresRouteHandler)
  .openapi(getApiPluginParseRoute, getApiPluginParseRouteHandler)
  .openapi(postApiPluginParseBulkRoute, postApiPluginParseBulkRouteHandler)
  .openapi(postApiRatingSeriesRoute, postApiRatingSeriesRouteHandler)
  .openapi(postApiRatingChapterRoute, postApiRatingChapterRouteHandler)
  .openapi(getApiRatingOverallSeriesRoute, getApiRatingOverallSeriesRouteHandler)
  .openapi(getApiRatingOverallChapterRoute, getApiRatingOverallChapterRouteHandler)
  .openapi(getApiReaderPdfRoute, getApiReaderPdfRouteHandler)
  .openapi(getApiReaderImageRoute, getApiReaderImageRouteHandler)
  .openapi(getApiReaderThumbnailRoute, getApiReaderThumbnailRouteHandler)
  .openapi(getApiReaderBookmarkImageRoute, getApiReaderBookmarkImageRouteHandler)
  .openapi(getApiReaderFileDimensionsRoute, getApiReaderFileDimensionsRouteHandler)
  .openapi(getApiReaderChapterInfoRoute, getApiReaderChapterInfoRouteHandler)
  .openapi(getApiReaderBookmarkInfoRoute, getApiReaderBookmarkInfoRouteHandler)
  .openapi(postApiReaderMarkChapterReadRoute, postApiReaderMarkChapterReadRouteHandler)
  .openapi(postApiReaderMarkReadRoute, postApiReaderMarkReadRouteHandler)
  .openapi(postApiReaderMarkUnreadRoute, postApiReaderMarkUnreadRouteHandler)
  .openapi(postApiReaderMarkVolumeUnreadRoute, postApiReaderMarkVolumeUnreadRouteHandler)
  .openapi(postApiReaderMarkVolumeReadRoute, postApiReaderMarkVolumeReadRouteHandler)
  .openapi(postApiReaderMarkMultipleReadRoute, postApiReaderMarkMultipleReadRouteHandler)
  .openapi(postApiReaderMarkMultipleUnreadRoute, postApiReaderMarkMultipleUnreadRouteHandler)
  .openapi(
    postApiReaderMarkMultipleSeriesReadRoute,
    postApiReaderMarkMultipleSeriesReadRouteHandler,
  )
  .openapi(
    postApiReaderMarkMultipleSeriesUnreadRoute,
    postApiReaderMarkMultipleSeriesUnreadRouteHandler,
  )
  .openapi(getApiReaderGetProgressRoute, getApiReaderGetProgressRouteHandler)
  .openapi(postApiReaderProgressRoute, postApiReaderProgressRouteHandler)
  .openapi(getApiReaderContinuePointRoute, getApiReaderContinuePointRouteHandler)
  .openapi(getApiReaderHasProgressRoute, getApiReaderHasProgressRouteHandler)
  .openapi(getApiReaderChapterBookmarksRoute, getApiReaderChapterBookmarksRouteHandler)
  .openapi(postApiReaderAllBookmarksRoute, postApiReaderAllBookmarksRouteHandler)
  .openapi(postApiReaderRemoveBookmarksRoute, postApiReaderRemoveBookmarksRouteHandler)
  .openapi(postApiReaderBulkRemoveBookmarksRoute, postApiReaderBulkRemoveBookmarksRouteHandler)
  .openapi(getApiReaderVolumeBookmarksRoute, getApiReaderVolumeBookmarksRouteHandler)
  .openapi(getApiReaderSeriesBookmarksRoute, getApiReaderSeriesBookmarksRouteHandler)
  .openapi(postApiReaderBookmarkRoute, postApiReaderBookmarkRouteHandler)
  .openapi(postApiReaderUnbookmarkRoute, postApiReaderUnbookmarkRouteHandler)
  .openapi(getApiReaderNextChapterRoute, getApiReaderNextChapterRouteHandler)
  .openapi(getApiReaderPrevChapterRoute, getApiReaderPrevChapterRouteHandler)
  .openapi(getApiReaderTimeLeftRoute, getApiReaderTimeLeftRouteHandler)
  .openapi(getApiReaderTimeLeftForChapterRoute, getApiReaderTimeLeftForChapterRouteHandler)
  .openapi(getApiReaderPtocRoute, getApiReaderPtocRouteHandler)
  .openapi(deleteApiReaderPtocRoute, deleteApiReaderPtocRouteHandler)
  .openapi(postApiReaderCreatePtocRoute, postApiReaderCreatePtocRouteHandler)
  .openapi(getApiReaderPromptRereadSeriesRoute, getApiReaderPromptRereadSeriesRouteHandler)
  .openapi(getApiReaderPromptRereadVolumeRoute, getApiReaderPromptRereadVolumeRouteHandler)
  .openapi(getApiReaderPromptRereadChapterRoute, getApiReaderPromptRereadChapterRouteHandler)
  .openapi(getApiReaderFirstProgressDateRoute, getApiReaderFirstProgressDateRouteHandler)
  .openapi(getApiReadingListRoute, getApiReadingListRouteHandler)
  .openapi(deleteApiReadingListRoute, deleteApiReadingListRouteHandler)
  .openapi(postApiReadingListListsRoute, postApiReadingListListsRouteHandler)
  .openapi(postApiReadingListAllRoute, postApiReadingListAllRouteHandler)
  .openapi(getApiReadingListListsForSeriesRoute, getApiReadingListListsForSeriesRouteHandler)
  .openapi(getApiReadingListListsForChapterRoute, getApiReadingListListsForChapterRouteHandler)
  .openapi(getApiReadingListItemsRoute, getApiReadingListItemsRouteHandler)
  .openapi(postApiReadingListUpdatePositionRoute, postApiReadingListUpdatePositionRouteHandler)
  .openapi(postApiReadingListDeleteItemRoute, postApiReadingListDeleteItemRouteHandler)
  .openapi(postApiReadingListRemoveReadRoute, postApiReadingListRemoveReadRouteHandler)
  .openapi(postApiReadingListCreateRoute, postApiReadingListCreateRouteHandler)
  .openapi(postApiReadingListUpdateRoute, postApiReadingListUpdateRouteHandler)
  .openapi(postApiReadingListUpdateBySeriesRoute, postApiReadingListUpdateBySeriesRouteHandler)
  .openapi(postApiReadingListUpdateByMultipleRoute, postApiReadingListUpdateByMultipleRouteHandler)
  .openapi(
    postApiReadingListUpdateByMultipleSeriesRoute,
    postApiReadingListUpdateByMultipleSeriesRouteHandler,
  )
  .openapi(postApiReadingListUpdateByVolumeRoute, postApiReadingListUpdateByVolumeRouteHandler)
  .openapi(postApiReadingListUpdateByChapterRoute, postApiReadingListUpdateByChapterRouteHandler)
  .openapi(getApiReadingListPeopleRoute, getApiReadingListPeopleRouteHandler)
  .openapi(getApiReadingListAllPeopleRoute, getApiReadingListAllPeopleRouteHandler)
  .openapi(getApiReadingListNextChapterRoute, getApiReadingListNextChapterRouteHandler)
  .openapi(getApiReadingListPrevChapterRoute, getApiReadingListPrevChapterRouteHandler)
  .openapi(getApiReadingListNameExistsRoute, getApiReadingListNameExistsRouteHandler)
  .openapi(postApiReadingListPromoteMultipleRoute, postApiReadingListPromoteMultipleRouteHandler)
  .openapi(postApiReadingListDeleteMultipleRoute, postApiReadingListDeleteMultipleRouteHandler)
  .openapi(getApiReadingListInfoRoute, getApiReadingListInfoRouteHandler)
  .openapi(postApiReadingListExportAsCblRoute, postApiReadingListExportAsCblRouteHandler)
  .openapi(postApiReadingListRegenerateCoverRoute, postApiReadingListRegenerateCoverRouteHandler)
  .openapi(getApiReadingProfileAllRoute, getApiReadingProfileAllRouteHandler)
  .openapi(
    getApiReadingProfileLibraryIdSeriesIdRoute,
    getApiReadingProfileLibraryIdSeriesIdRouteHandler,
  )
  .openapi(getApiReadingProfileSeriesRoute, getApiReadingProfileSeriesRouteHandler)
  .openapi(postApiReadingProfileSeriesRoute, postApiReadingProfileSeriesRouteHandler)
  .openapi(getApiReadingProfileLibraryRoute, getApiReadingProfileLibraryRouteHandler)
  .openapi(postApiReadingProfileCreateRoute, postApiReadingProfileCreateRouteHandler)
  .openapi(postApiReadingProfilePromoteRoute, postApiReadingProfilePromoteRouteHandler)
  .openapi(postApiReadingProfileUpdateParentRoute, postApiReadingProfileUpdateParentRouteHandler)
  .openapi(postApiReadingProfileRoute, postApiReadingProfileRouteHandler)
  .openapi(deleteApiReadingProfileRoute, deleteApiReadingProfileRouteHandler)
  .openapi(
    postApiReadingProfileSeriesSeriesIdRoute,
    postApiReadingProfileSeriesSeriesIdRouteHandler,
  )
  .openapi(
    deleteApiReadingProfileSeriesSeriesIdRoute,
    deleteApiReadingProfileSeriesSeriesIdRouteHandler,
  )
  .openapi(
    postApiReadingProfileLibraryLibraryIdRoute,
    postApiReadingProfileLibraryLibraryIdRouteHandler,
  )
  .openapi(
    deleteApiReadingProfileLibraryLibraryIdRoute,
    deleteApiReadingProfileLibraryLibraryIdRouteHandler,
  )
  .openapi(postApiReadingProfileBulkRoute, postApiReadingProfileBulkRouteHandler)
  .openapi(postApiReadingProfileSetDevicesRoute, postApiReadingProfileSetDevicesRouteHandler)
  .openapi(postApiReviewSeriesRoute, postApiReviewSeriesRouteHandler)
  .openapi(deleteApiReviewSeriesRoute, deleteApiReviewSeriesRouteHandler)
  .openapi(postApiReviewChapterRoute, postApiReviewChapterRouteHandler)
  .openapi(deleteApiReviewChapterRoute, deleteApiReviewChapterRouteHandler)
  .openapi(getApiReviewAllRoute, getApiReviewAllRouteHandler)
  .openapi(getApiReviewMySeriesRoute, getApiReviewMySeriesRouteHandler)
  .openapi(getApiScrobblingScrobbleSettingsRoute, getApiScrobblingScrobbleSettingsRouteHandler)
  .openapi(
    postApiScrobblingUpdateScrobbleSettingsRoute,
    postApiScrobblingUpdateScrobbleSettingsRouteHandler,
  )
  .openapi(
    postApiScrobblingUpdateUserScrobbleProviderRoute,
    postApiScrobblingUpdateUserScrobbleProviderRouteHandler,
  )
  .openapi(
    postApiScrobblingGenerateScrobbleEventsRoute,
    postApiScrobblingGenerateScrobbleEventsRouteHandler,
  )
  .openapi(
    postApiScrobblingGenerateScrobbleEventsAllRoute,
    postApiScrobblingGenerateScrobbleEventsAllRouteHandler,
  )
  .openapi(getApiScrobblingTokenExpiredRoute, getApiScrobblingTokenExpiredRouteHandler)
  .openapi(getApiScrobblingExpiredTokensRoute, getApiScrobblingExpiredTokensRouteHandler)
  .openapi(getApiScrobblingScrobbleErrorsRoute, getApiScrobblingScrobbleErrorsRouteHandler)
  .openapi(postApiScrobblingClearErrorsRoute, postApiScrobblingClearErrorsRouteHandler)
  .openapi(postApiScrobblingScrobbleEventsRoute, postApiScrobblingScrobbleEventsRouteHandler)
  .openapi(getApiScrobblingHoldsRoute, getApiScrobblingHoldsRouteHandler)
  .openapi(getApiScrobblingHasHoldRoute, getApiScrobblingHasHoldRouteHandler)
  .openapi(
    getApiScrobblingLibraryAllowsScrobblingRoute,
    getApiScrobblingLibraryAllowsScrobblingRouteHandler,
  )
  .openapi(postApiScrobblingAddHoldRoute, postApiScrobblingAddHoldRouteHandler)
  .openapi(deleteApiScrobblingRemoveHoldRoute, deleteApiScrobblingRemoveHoldRouteHandler)
  .openapi(postApiScrobblingBulkRemoveEventsRoute, postApiScrobblingBulkRemoveEventsRouteHandler)
  .openapi(deleteApiScrobblingRemoveErrorIdRoute, deleteApiScrobblingRemoveErrorIdRouteHandler)
  .openapi(postApiScrobblingRetryScrobbleRoute, postApiScrobblingRetryScrobbleRouteHandler)
  .openapi(getApiScrobblingNextScrobbleTimeRoute, getApiScrobblingNextScrobbleTimeRouteHandler)
  .openapi(getApiSearchSeriesForMangafileRoute, getApiSearchSeriesForMangafileRouteHandler)
  .openapi(getApiSearchSeriesForChapterRoute, getApiSearchSeriesForChapterRouteHandler)
  .openapi(getApiSearchSearchRoute, getApiSearchSearchRouteHandler)
  .openapi(getApiSearchChaptersBySeriesRoute, getApiSearchChaptersBySeriesRouteHandler)
  .openapi(postApiSeriesV2Route, postApiSeriesV2RouteHandler)
  .openapi(getApiSeriesSeriesIdRoute, getApiSeriesSeriesIdRouteHandler)
  .openapi(deleteApiSeriesSeriesIdRoute, deleteApiSeriesSeriesIdRouteHandler)
  .openapi(postApiSeriesDeleteMultipleRoute, postApiSeriesDeleteMultipleRouteHandler)
  .openapi(getApiSeriesVolumesRoute, getApiSeriesVolumesRouteHandler)
  .openapi(getApiSeriesVolumeRoute, getApiSeriesVolumeRouteHandler)
  .openapi(getApiSeriesChapterRoute, getApiSeriesChapterRouteHandler)
  .openapi(postApiSeriesUpdateRoute, postApiSeriesUpdateRouteHandler)
  .openapi(postApiSeriesRecentlyAddedV2Route, postApiSeriesRecentlyAddedV2RouteHandler)
  .openapi(postApiSeriesRecentlyUpdatedSeriesRoute, postApiSeriesRecentlyUpdatedSeriesRouteHandler)
  .openapi(postApiSeriesAllV2Route, postApiSeriesAllV2RouteHandler)
  .openapi(postApiSeriesOnDeckRoute, postApiSeriesOnDeckRouteHandler)
  .openapi(postApiSeriesRemoveFromOnDeckRoute, postApiSeriesRemoveFromOnDeckRouteHandler)
  .openapi(getApiSeriesCurrentlyReadingRoute, getApiSeriesCurrentlyReadingRouteHandler)
  .openapi(postApiSeriesRefreshMetadataRoute, postApiSeriesRefreshMetadataRouteHandler)
  .openapi(postApiSeriesScanRoute, postApiSeriesScanRouteHandler)
  .openapi(postApiSeriesAnalyzeRoute, postApiSeriesAnalyzeRouteHandler)
  .openapi(getApiSeriesMetadataRoute, getApiSeriesMetadataRouteHandler)
  .openapi(postApiSeriesMetadataRoute, postApiSeriesMetadataRouteHandler)
  .openapi(getApiSeriesSeriesByCollectionRoute, getApiSeriesSeriesByCollectionRouteHandler)
  .openapi(postApiSeriesSeriesByIdsRoute, postApiSeriesSeriesByIdsRouteHandler)
  .openapi(getApiSeriesAgeRatingRoute, getApiSeriesAgeRatingRouteHandler)
  .openapi(getApiSeriesSeriesDetailRoute, getApiSeriesSeriesDetailRouteHandler)
  .openapi(getApiSeriesRelatedRoute, getApiSeriesRelatedRouteHandler)
  .openapi(getApiSeriesAllRelatedRoute, getApiSeriesAllRelatedRouteHandler)
  .openapi(postApiSeriesUpdateRelatedRoute, postApiSeriesUpdateRelatedRouteHandler)
  .openapi(getApiSeriesExternalSeriesDetailRoute, getApiSeriesExternalSeriesDetailRouteHandler)
  .openapi(getApiSeriesNextExpectedRoute, getApiSeriesNextExpectedRouteHandler)
  .openapi(postApiSeriesMatchRoute, postApiSeriesMatchRouteHandler)
  .openapi(postApiSeriesUpdateMatchRoute, postApiSeriesUpdateMatchRouteHandler)
  .openapi(postApiSeriesDontMatchRoute, postApiSeriesDontMatchRouteHandler)
  .openapi(getApiSeriesMatchInfoRoute, getApiSeriesMatchInfoRouteHandler)
  .openapi(getApiSeriesSeriesWithAnnotationsRoute, getApiSeriesSeriesWithAnnotationsRouteHandler)
  .openapi(postApiServerClearCacheRoute, postApiServerClearCacheRouteHandler)
  .openapi(postApiServerCleanupWantToReadRoute, postApiServerCleanupWantToReadRouteHandler)
  .openapi(postApiServerCleanupRoute, postApiServerCleanupRouteHandler)
  .openapi(postApiServerBackupDbRoute, postApiServerBackupDbRouteHandler)
  .openapi(postApiServerAnalyzeFilesRoute, postApiServerAnalyzeFilesRouteHandler)
  .openapi(getApiServerServerInfoSlimRoute, getApiServerServerInfoSlimRouteHandler)
  .openapi(postApiServerConvertMediaRoute, postApiServerConvertMediaRouteHandler)
  .openapi(getApiServerLogsRoute, getApiServerLogsRouteHandler)
  .openapi(postApiServerDebugExportRoute, postApiServerDebugExportRouteHandler)
  .openapi(getApiServerDebugExportExportIdRoute, getApiServerDebugExportExportIdRouteHandler)
  .openapi(getApiServerCheckForUpdatesRoute, getApiServerCheckForUpdatesRouteHandler)
  .openapi(getApiServerCheckUpdateRoute, getApiServerCheckUpdateRouteHandler)
  .openapi(getApiServerCheckOutOfDateRoute, getApiServerCheckOutOfDateRouteHandler)
  .openapi(getApiServerChangelogRoute, getApiServerChangelogRouteHandler)
  .openapi(getApiServerJobsRoute, getApiServerJobsRouteHandler)
  .openapi(getApiServerActivityRoute, getApiServerActivityRouteHandler)
  .openapi(getApiServerMediaErrorsRoute, getApiServerMediaErrorsRouteHandler)
  .openapi(postApiServerMediaErrorsDismissRoute, postApiServerMediaErrorsDismissRouteHandler)
  .openapi(postApiServerMediaErrorsUndismissRoute, postApiServerMediaErrorsUndismissRouteHandler)
  .openapi(getApiServerMediaErrorsForSeriesRoute, getApiServerMediaErrorsForSeriesRouteHandler)
  .openapi(postApiServerClearMediaAlertsRoute, postApiServerClearMediaAlertsRouteHandler)
  .openapi(postApiServerBustKavitaplusCacheRoute, postApiServerBustKavitaplusCacheRouteHandler)
  .openapi(postApiServerSyncThemesRoute, postApiServerSyncThemesRouteHandler)
  .openapi(getApiServerIsTaskRunningRoute, getApiServerIsTaskRunningRouteHandler)
  .openapi(getApiSettingsBaseUrlRoute, getApiSettingsBaseUrlRouteHandler)
  .openapi(getApiSettingsRoute, getApiSettingsRouteHandler)
  .openapi(postApiSettingsRoute, postApiSettingsRouteHandler)
  .openapi(postApiSettingsResetRoute, postApiSettingsResetRouteHandler)
  .openapi(postApiSettingsResetIpAddressesRoute, postApiSettingsResetIpAddressesRouteHandler)
  .openapi(postApiSettingsResetBaseUrlRoute, postApiSettingsResetBaseUrlRouteHandler)
  .openapi(getApiSettingsIsEmailSetupRoute, getApiSettingsIsEmailSetupRouteHandler)
  .openapi(getApiSettingsTaskFrequenciesRoute, getApiSettingsTaskFrequenciesRouteHandler)
  .openapi(getApiSettingsLibraryTypesRoute, getApiSettingsLibraryTypesRouteHandler)
  .openapi(getApiSettingsLogLevelsRoute, getApiSettingsLogLevelsRouteHandler)
  .openapi(getApiSettingsOpdsEnabledRoute, getApiSettingsOpdsEnabledRouteHandler)
  .openapi(getApiSettingsKoboEnabledRoute, getApiSettingsKoboEnabledRouteHandler)
  .openapi(getApiSettingsKepubifySupportedRoute, getApiSettingsKepubifySupportedRouteHandler)
  .openapi(postApiSettingsKepubifyRoute, postApiSettingsKepubifyRouteHandler)
  .openapi(getApiSettingsIsValidCronRoute, getApiSettingsIsValidCronRouteHandler)
  .openapi(postApiSettingsTestEmailUrlRoute, postApiSettingsTestEmailUrlRouteHandler)
  .openapi(getApiSettingsMetadataSettingsRoute, getApiSettingsMetadataSettingsRouteHandler)
  .openapi(postApiSettingsMetadataSettingsRoute, postApiSettingsMetadataSettingsRouteHandler)
  .openapi(postApiSettingsRunMetadataMappingsRoute, postApiSettingsRunMetadataMappingsRouteHandler)
  .openapi(postApiSettingsImportFieldMappingsRoute, postApiSettingsImportFieldMappingsRouteHandler)
  .openapi(getApiSettingsOidcRoute, getApiSettingsOidcRouteHandler)
  .openapi(postApiSettingsResetExternalIdsRoute, postApiSettingsResetExternalIdsRouteHandler)
  .openapi(postApiSettingsIsValidAuthorityRoute, postApiSettingsIsValidAuthorityRouteHandler)
  .openapi(getApiStatsServerStatsRoute, getApiStatsServerStatsRouteHandler)
  .openapi(
    getApiStatsServerCountPublicationStatusRoute,
    getApiStatsServerCountPublicationStatusRouteHandler,
  )
  .openapi(getApiStatsServerCountMangaFormatRoute, getApiStatsServerCountMangaFormatRouteHandler)
  .openapi(getApiStatsPopularDecadesRoute, getApiStatsPopularDecadesRouteHandler)
  .openapi(getApiStatsPopularLibrariesRoute, getApiStatsPopularLibrariesRouteHandler)
  .openapi(getApiStatsPopularSeriesRoute, getApiStatsPopularSeriesRouteHandler)
  .openapi(getApiStatsPopularReadingListRoute, getApiStatsPopularReadingListRouteHandler)
  .openapi(getApiStatsPopularGenresRoute, getApiStatsPopularGenresRouteHandler)
  .openapi(getApiStatsPopularTagsRoute, getApiStatsPopularTagsRouteHandler)
  .openapi(getApiStatsPopularPeopleRoute, getApiStatsPopularPeopleRouteHandler)
  .openapi(getApiStatsMostActiveUsersRoute, getApiStatsMostActiveUsersRouteHandler)
  .openapi(getApiStatsServerFileBreakdownRoute, getApiStatsServerFileBreakdownRouteHandler)
  .openapi(getApiStatsServerFileExtensionRoute, getApiStatsServerFileExtensionRouteHandler)
  .openapi(getApiStatsReadingCountsRoute, getApiStatsReadingCountsRouteHandler)
  .openapi(getApiStatsDayBreakdownRoute, getApiStatsDayBreakdownRouteHandler)
  .openapi(getApiStatsPagesPerYearRoute, getApiStatsPagesPerYearRouteHandler)
  .openapi(getApiStatsWordsPerYearRoute, getApiStatsWordsPerYearRouteHandler)
  .openapi(getApiStatsFilesAddedOverTimeRoute, getApiStatsFilesAddedOverTimeRouteHandler)
  .openapi(getApiStatsDeviceClientTypeRoute, getApiStatsDeviceClientTypeRouteHandler)
  .openapi(getApiStatsDeviceDeviceTypeRoute, getApiStatsDeviceDeviceTypeRouteHandler)
  .openapi(getApiStatsReadingActivityRoute, getApiStatsReadingActivityRouteHandler)
  .openapi(getApiStatsReadingPaceRoute, getApiStatsReadingPaceRouteHandler)
  .openapi(getApiStatsGenreBreakdownRoute, getApiStatsGenreBreakdownRouteHandler)
  .openapi(getApiStatsTagBreakdownRoute, getApiStatsTagBreakdownRouteHandler)
  .openapi(getApiStatsPageSpreadRoute, getApiStatsPageSpreadRouteHandler)
  .openapi(getApiStatsWordSpreadRoute, getApiStatsWordSpreadRouteHandler)
  .openapi(getApiStatsFavoriteAuthorsRoute, getApiStatsFavoriteAuthorsRouteHandler)
  .openapi(getApiStatsAvgTimeByHourRoute, getApiStatsAvgTimeByHourRouteHandler)
  .openapi(getApiStatsReadsByMonthRoute, getApiStatsReadsByMonthRouteHandler)
  .openapi(getApiStatsTotalReadsRoute, getApiStatsTotalReadsRouteHandler)
  .openapi(getApiStatsUserStatsRoute, getApiStatsUserStatsRouteHandler)
  .openapi(getApiStatsUserReadRoute, getApiStatsUserReadRouteHandler)
  .openapi(getApiStatsReadingHistoryRoute, getApiStatsReadingHistoryRouteHandler)
  .openapi(
    getApiStatsReadingHistorySeriesSeriesIdRoute,
    getApiStatsReadingHistorySeriesSeriesIdRouteHandler,
  )
  .openapi(getApiStreamDashboardRoute, getApiStreamDashboardRouteHandler)
  .openapi(getApiStreamSidenavRoute, getApiStreamSidenavRouteHandler)
  .openapi(getApiStreamExternalSourcesRoute, getApiStreamExternalSourcesRouteHandler)
  .openapi(postApiStreamCreateExternalSourceRoute, postApiStreamCreateExternalSourceRouteHandler)
  .openapi(postApiStreamUpdateExternalSourceRoute, postApiStreamUpdateExternalSourceRouteHandler)
  .openapi(postApiStreamExternalSourceExistsRoute, postApiStreamExternalSourceExistsRouteHandler)
  .openapi(
    deleteApiStreamDeleteExternalSourceRoute,
    deleteApiStreamDeleteExternalSourceRouteHandler,
  )
  .openapi(postApiStreamAddDashboardStreamRoute, postApiStreamAddDashboardStreamRouteHandler)
  .openapi(postApiStreamUpdateDashboardStreamRoute, postApiStreamUpdateDashboardStreamRouteHandler)
  .openapi(
    postApiStreamUpdateDashboardPositionRoute,
    postApiStreamUpdateDashboardPositionRouteHandler,
  )
  .openapi(postApiStreamAddSidenavStreamRoute, postApiStreamAddSidenavStreamRouteHandler)
  .openapi(
    postApiStreamAddSidenavStreamFromExternalSourceRoute,
    postApiStreamAddSidenavStreamFromExternalSourceRouteHandler,
  )
  .openapi(postApiStreamUpdateSidenavStreamRoute, postApiStreamUpdateSidenavStreamRouteHandler)
  .openapi(postApiStreamUpdateSidenavPositionRoute, postApiStreamUpdateSidenavPositionRouteHandler)
  .openapi(
    postApiStreamBulkSidenavStreamVisibilityRoute,
    postApiStreamBulkSidenavStreamVisibilityRouteHandler,
  )
  .openapi(
    deleteApiStreamSmartFilterSideNavStreamRoute,
    deleteApiStreamSmartFilterSideNavStreamRouteHandler,
  )
  .openapi(
    deleteApiStreamSmartFilterDashboardStreamRoute,
    deleteApiStreamSmartFilterDashboardStreamRouteHandler,
  )
  .openapi(getApiTachiyomiLatestChapterRoute, getApiTachiyomiLatestChapterRouteHandler)
  .openapi(
    postApiTachiyomiMarkChapterUntilAsReadRoute,
    postApiTachiyomiMarkChapterUntilAsReadRouteHandler,
  )
  .openapi(getApiThemeRoute, getApiThemeRouteHandler)
  .openapi(deleteApiThemeRoute, deleteApiThemeRouteHandler)
  .openapi(postApiThemeUpdateDefaultRoute, postApiThemeUpdateDefaultRouteHandler)
  .openapi(getApiThemeDownloadContentRoute, getApiThemeDownloadContentRouteHandler)
  .openapi(getApiThemeBrowseRoute, getApiThemeBrowseRouteHandler)
  .openapi(postApiThemeDownloadThemeRoute, postApiThemeDownloadThemeRouteHandler)
  .openapi(postApiThemeUploadThemeRoute, postApiThemeUploadThemeRouteHandler)
  .openapi(postApiUploadUploadByUrlRoute, postApiUploadUploadByUrlRouteHandler)
  .openapi(postApiUploadUploadChapterCoverRoute, postApiUploadUploadChapterCoverRouteHandler)
  .openapi(postApiUploadUploadVolumeCoverRoute, postApiUploadUploadVolumeCoverRouteHandler)
  .openapi(postApiUploadUploadSeriesCoverRoute, postApiUploadUploadSeriesCoverRouteHandler)
  .openapi(postApiUploadUploadByFileRoute, postApiUploadUploadByFileRouteHandler)
  .openapi(postApiUploadSeriesRoute, postApiUploadSeriesRouteHandler)
  .openapi(postApiUploadCollectionRoute, postApiUploadCollectionRouteHandler)
  .openapi(postApiUploadReadingListRoute, postApiUploadReadingListRouteHandler)
  .openapi(postApiUploadChapterRoute, postApiUploadChapterRouteHandler)
  .openapi(postApiUploadVolumeRoute, postApiUploadVolumeRouteHandler)
  .openapi(postApiUploadLibraryRoute, postApiUploadLibraryRouteHandler)
  .openapi(postApiUploadPersonRoute, postApiUploadPersonRouteHandler)
  .openapi(postApiUploadUserRoute, postApiUploadUserRouteHandler)
  .openapi(deleteApiUsersDeleteUserRoute, deleteApiUsersDeleteUserRouteHandler)
  .openapi(getApiUsersRoute, getApiUsersRouteHandler)
  .openapi(getApiUsersProfileInfoRoute, getApiUsersProfileInfoRouteHandler)
  .openapi(getApiUsersHasProfileSharedRoute, getApiUsersHasProfileSharedRouteHandler)
  .openapi(getApiUsersHasReadingProgressRoute, getApiUsersHasReadingProgressRouteHandler)
  .openapi(getApiUsersHasLibraryAccessRoute, getApiUsersHasLibraryAccessRouteHandler)
  .openapi(postApiUsersUpdatePreferencesRoute, postApiUsersUpdatePreferencesRouteHandler)
  .openapi(getApiUsersGetPreferencesRoute, getApiUsersGetPreferencesRouteHandler)
  .openapi(getApiUsersKoboSyncPointsRoute, getApiUsersKoboSyncPointsRouteHandler)
  .openapi(deleteApiUsersKoboSyncPointRoute, deleteApiUsersKoboSyncPointRouteHandler)
  .openapi(
    postApiUsersKoboSyncPointUndoRemoveBooksRoute,
    postApiUsersKoboSyncPointUndoRemoveBooksRouteHandler,
  )
  .openapi(getApiUsersNamesRoute, getApiUsersNamesRouteHandler)
  .openapi(getApiUsersTokensRoute, getApiUsersTokensRouteHandler)
  .openapi(getApiVolumeRoute, getApiVolumeRouteHandler)
  .openapi(deleteApiVolumeRoute, deleteApiVolumeRouteHandler)
  .openapi(postApiVolumeUpdateRoute, postApiVolumeUpdateRouteHandler)
  .openapi(postApiVolumeMultipleRoute, postApiVolumeMultipleRouteHandler)
  .openapi(postApiWantToReadV2Route, postApiWantToReadV2RouteHandler)
  .openapi(getApiWantToReadRoute, getApiWantToReadRouteHandler)
  .openapi(postApiWantToReadAddSeriesRoute, postApiWantToReadAddSeriesRouteHandler)
  .openapi(postApiWantToReadRemoveSeriesRoute, postApiWantToReadRemoveSeriesRouteHandler)

export default app
