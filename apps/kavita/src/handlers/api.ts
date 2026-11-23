import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getApiAccountOidcAuthenticatedRouteHandler: RouteHandler<
  typeof getApiAccountOidcAuthenticatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAccountClearOidcLinkRouteHandler: RouteHandler<
  typeof postApiAccountClearOidcLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAccountRouteHandler: RouteHandler<typeof getApiAccountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAccountResetPasswordRouteHandler: RouteHandler<
  typeof postApiAccountResetPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAccountRegisterRouteHandler: RouteHandler<
  typeof postApiAccountRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAccountLoginRouteHandler: RouteHandler<
  typeof postApiAccountLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAccountRefreshAccountRouteHandler: RouteHandler<
  typeof getApiAccountRefreshAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAccountRefreshTokenRouteHandler: RouteHandler<
  typeof postApiAccountRefreshTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAccountRolesRouteHandler: RouteHandler<typeof getApiAccountRolesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiAccountUpdateUsernameRouteHandler: RouteHandler<
  typeof postApiAccountUpdateUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAccountUpdateEmailRouteHandler: RouteHandler<
  typeof postApiAccountUpdateEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAccountUpdateAgeRestrictionRouteHandler: RouteHandler<
  typeof postApiAccountUpdateAgeRestrictionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAccountUpdateRouteHandler: RouteHandler<
  typeof postApiAccountUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAccountInviteUrlRouteHandler: RouteHandler<
  typeof getApiAccountInviteUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAccountInviteRouteHandler: RouteHandler<
  typeof postApiAccountInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAccountConfirmEmailRouteHandler: RouteHandler<
  typeof postApiAccountConfirmEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAccountConfirmEmailUpdateRouteHandler: RouteHandler<
  typeof postApiAccountConfirmEmailUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAccountConfirmPasswordResetRouteHandler: RouteHandler<
  typeof postApiAccountConfirmPasswordResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAccountForgotPasswordRouteHandler: RouteHandler<
  typeof postApiAccountForgotPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAccountEmailConfirmedRouteHandler: RouteHandler<
  typeof getApiAccountEmailConfirmedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAccountConfirmMigrationEmailRouteHandler: RouteHandler<
  typeof postApiAccountConfirmMigrationEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAccountResendConfirmationEmailRouteHandler: RouteHandler<
  typeof postApiAccountResendConfirmationEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAccountOpdsUrlRouteHandler: RouteHandler<
  typeof getApiAccountOpdsUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAccountIsEmailValidRouteHandler: RouteHandler<
  typeof getApiAccountIsEmailValidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAccountAuthKeysRouteHandler: RouteHandler<
  typeof getApiAccountAuthKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAccountRotateAuthKeyRouteHandler: RouteHandler<
  typeof postApiAccountRotateAuthKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAccountCreateAuthKeyRouteHandler: RouteHandler<
  typeof postApiAccountCreateAuthKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAccountAuthKeyRouteHandler: RouteHandler<
  typeof deleteApiAccountAuthKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiActivityCurrentRouteHandler: RouteHandler<
  typeof getApiActivityCurrentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAdminExistsRouteHandler: RouteHandler<typeof getApiAdminExistsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiAnnotationAllFilteredRouteHandler: RouteHandler<
  typeof postApiAnnotationAllFilteredRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAnnotationAllRouteHandler: RouteHandler<
  typeof getApiAnnotationAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAnnotationAllForSeriesRouteHandler: RouteHandler<
  typeof getApiAnnotationAllForSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAnnotationAnnotationIdRouteHandler: RouteHandler<
  typeof getApiAnnotationAnnotationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAnnotationCreateRouteHandler: RouteHandler<
  typeof postApiAnnotationCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAnnotationUpdateRouteHandler: RouteHandler<
  typeof postApiAnnotationUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAnnotationLikeRouteHandler: RouteHandler<
  typeof postApiAnnotationLikeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAnnotationUnlikeRouteHandler: RouteHandler<
  typeof postApiAnnotationUnlikeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAnnotationRouteHandler: RouteHandler<
  typeof deleteApiAnnotationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAnnotationBulkDeleteRouteHandler: RouteHandler<
  typeof postApiAnnotationBulkDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAnnotationExportFilterRouteHandler: RouteHandler<
  typeof postApiAnnotationExportFilterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAnnotationExportRouteHandler: RouteHandler<
  typeof postApiAnnotationExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBookChapterIdBookInfoRouteHandler: RouteHandler<
  typeof getApiBookChapterIdBookInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBookChapterIdBookResourcesRouteHandler: RouteHandler<
  typeof getApiBookChapterIdBookResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBookChapterIdChaptersRouteHandler: RouteHandler<
  typeof getApiBookChapterIdChaptersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBookChapterIdBookPageRouteHandler: RouteHandler<
  typeof getApiBookChapterIdBookPageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCblSyncRouteHandler: RouteHandler<typeof postApiCblSyncRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCblFileImportRouteHandler: RouteHandler<
  typeof postApiCblFileImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCblUploadCblFileRouteHandler: RouteHandler<
  typeof postApiCblUploadCblFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCblRepoImportRouteHandler: RouteHandler<
  typeof postApiCblRepoImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCblReValidateRouteHandler: RouteHandler<
  typeof postApiCblReValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCblFinalizeImportRouteHandler: RouteHandler<
  typeof postApiCblFinalizeImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCblRemapRulesRouteHandler: RouteHandler<
  typeof getApiCblRemapRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCblRemapRulesRouteHandler: RouteHandler<
  typeof postApiCblRemapRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCblRemapRulesAllRouteHandler: RouteHandler<
  typeof getApiCblRemapRulesAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCblRemapRulesIdPromoteRouteHandler: RouteHandler<
  typeof postApiCblRemapRulesIdPromoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCblRemapRulesIdDemoteRouteHandler: RouteHandler<
  typeof postApiCblRemapRulesIdDemoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCblRemapRulesIdRouteHandler: RouteHandler<
  typeof postApiCblRemapRulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCblRemapRulesIdRouteHandler: RouteHandler<
  typeof deleteApiCblRemapRulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCblBrowseRouteHandler: RouteHandler<typeof getApiCblBrowseRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiChapterRouteHandler: RouteHandler<typeof getApiChapterRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiChapterRouteHandler: RouteHandler<typeof deleteApiChapterRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiChapterRestoreInfoRouteHandler: RouteHandler<
  typeof getApiChapterRestoreInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiChapterDeleteMultipleRouteHandler: RouteHandler<
  typeof postApiChapterDeleteMultipleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiChapterUpdateRouteHandler: RouteHandler<
  typeof postApiChapterUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiChapterChapterDetailPlusRouteHandler: RouteHandler<
  typeof getApiChapterChapterDetailPlusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCollectionRouteHandler: RouteHandler<typeof getApiCollectionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiCollectionRouteHandler: RouteHandler<
  typeof deleteApiCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCollectionSingleRouteHandler: RouteHandler<
  typeof getApiCollectionSingleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCollectionAllSeriesRouteHandler: RouteHandler<
  typeof getApiCollectionAllSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCollectionNameExistsRouteHandler: RouteHandler<
  typeof getApiCollectionNameExistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCollectionUpdateRouteHandler: RouteHandler<
  typeof postApiCollectionUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCollectionPromoteMultipleRouteHandler: RouteHandler<
  typeof postApiCollectionPromoteMultipleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCollectionDeleteMultipleRouteHandler: RouteHandler<
  typeof postApiCollectionDeleteMultipleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCollectionUpdateForSeriesRouteHandler: RouteHandler<
  typeof postApiCollectionUpdateForSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCollectionUpdateSeriesRouteHandler: RouteHandler<
  typeof postApiCollectionUpdateSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCollectionMalStacksRouteHandler: RouteHandler<
  typeof getApiCollectionMalStacksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCollectionImportStackRouteHandler: RouteHandler<
  typeof postApiCollectionImportStackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiColorScapeSeriesRouteHandler: RouteHandler<
  typeof getApiColorScapeSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiColorScapeVolumeRouteHandler: RouteHandler<
  typeof getApiColorScapeVolumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiColorScapeChapterRouteHandler: RouteHandler<
  typeof getApiColorScapeChapterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiColorScapePersonRouteHandler: RouteHandler<
  typeof getApiColorScapePersonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiColorScapeReadingListRouteHandler: RouteHandler<
  typeof getApiColorScapeReadingListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiColorScapeCollectionRouteHandler: RouteHandler<
  typeof getApiColorScapeCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiDeviceCreateRouteHandler: RouteHandler<
  typeof postApiDeviceCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiDeviceUpdateRouteHandler: RouteHandler<
  typeof postApiDeviceUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiDeviceRouteHandler: RouteHandler<typeof deleteApiDeviceRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDeviceRouteHandler: RouteHandler<typeof getApiDeviceRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiDeviceSendToRouteHandler: RouteHandler<
  typeof postApiDeviceSendToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiDeviceSendSeriesToRouteHandler: RouteHandler<
  typeof postApiDeviceSendSeriesToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDeviceClientDevicesRouteHandler: RouteHandler<
  typeof getApiDeviceClientDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDeviceClientAllDevicesRouteHandler: RouteHandler<
  typeof getApiDeviceClientAllDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiDeviceClientDeviceRouteHandler: RouteHandler<
  typeof deleteApiDeviceClientDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiDeviceClientUpdateNameRouteHandler: RouteHandler<
  typeof postApiDeviceClientUpdateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDownloadVolumeSizeRouteHandler: RouteHandler<
  typeof getApiDownloadVolumeSizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiDownloadBulkVolumeSizeRouteHandler: RouteHandler<
  typeof postApiDownloadBulkVolumeSizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDownloadChapterSizeRouteHandler: RouteHandler<
  typeof getApiDownloadChapterSizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiDownloadBulkChapterSizeRouteHandler: RouteHandler<
  typeof postApiDownloadBulkChapterSizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDownloadSeriesSizeRouteHandler: RouteHandler<
  typeof getApiDownloadSeriesSizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDownloadReadinglistSizeRouteHandler: RouteHandler<
  typeof getApiDownloadReadinglistSizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiDownloadBulkReadinglistSizeRouteHandler: RouteHandler<
  typeof postApiDownloadBulkReadinglistSizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiDownloadBulkSeriesSizeRouteHandler: RouteHandler<
  typeof postApiDownloadBulkSeriesSizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDownloadVolumeRouteHandler: RouteHandler<
  typeof getApiDownloadVolumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDownloadChapterRouteHandler: RouteHandler<
  typeof getApiDownloadChapterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDownloadSeriesRouteHandler: RouteHandler<
  typeof getApiDownloadSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiDownloadBookmarksRouteHandler: RouteHandler<
  typeof postApiDownloadBookmarksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiEmailAllRouteHandler: RouteHandler<typeof getApiEmailAllRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFilterUpdateSeriesRouteHandler: RouteHandler<
  typeof postApiFilterUpdateSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFilterUpdateReadingListRouteHandler: RouteHandler<
  typeof postApiFilterUpdateReadingListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFilterUpdatePersonRouteHandler: RouteHandler<
  typeof postApiFilterUpdatePersonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFilterUpdateAnnotationRouteHandler: RouteHandler<
  typeof postApiFilterUpdateAnnotationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFilterRouteHandler: RouteHandler<typeof getApiFilterRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiFilterRouteHandler: RouteHandler<typeof deleteApiFilterRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFilterEncodeSeriesRouteHandler: RouteHandler<
  typeof postApiFilterEncodeSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFilterEncodeReadingListRouteHandler: RouteHandler<
  typeof postApiFilterEncodeReadingListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFilterEncodePersonRouteHandler: RouteHandler<
  typeof postApiFilterEncodePersonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFilterEncodeAnnotationRouteHandler: RouteHandler<
  typeof postApiFilterEncodeAnnotationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFilterDecodeRouteHandler: RouteHandler<
  typeof postApiFilterDecodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFilterRenameRouteHandler: RouteHandler<
  typeof postApiFilterRenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFontAllRouteHandler: RouteHandler<typeof getApiFontAllRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFontRouteHandler: RouteHandler<typeof getApiFontRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiFontRouteHandler: RouteHandler<typeof deleteApiFontRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiFontUploadRouteHandler: RouteHandler<typeof postApiFontUploadRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiFontUploadByUrlRouteHandler: RouteHandler<
  typeof postApiFontUploadByUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiHealthRouteHandler: RouteHandler<typeof getApiHealthRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiImageChapterCoverRouteHandler: RouteHandler<
  typeof getApiImageChapterCoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiImageLibraryCoverRouteHandler: RouteHandler<
  typeof getApiImageLibraryCoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiImageVolumeCoverRouteHandler: RouteHandler<
  typeof getApiImageVolumeCoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiImageSeriesCoverRouteHandler: RouteHandler<
  typeof getApiImageSeriesCoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiImageCollectionCoverRouteHandler: RouteHandler<
  typeof getApiImageCollectionCoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiImageReadinglistCoverRouteHandler: RouteHandler<
  typeof getApiImageReadinglistCoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiImageBookmarkRouteHandler: RouteHandler<
  typeof getApiImageBookmarkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiImageWebLinkRouteHandler: RouteHandler<typeof getApiImageWebLinkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiImagePublisherRouteHandler: RouteHandler<
  typeof getApiImagePublisherRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiImagePersonCoverRouteHandler: RouteHandler<
  typeof getApiImagePersonCoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiImageUserCoverRouteHandler: RouteHandler<
  typeof getApiImageUserCoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiImageCoverUploadRouteHandler: RouteHandler<
  typeof getApiImageCoverUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiImageExternalSeriesRouteHandler: RouteHandler<
  typeof getApiImageExternalSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiImageExternalVolumeRouteHandler: RouteHandler<
  typeof getApiImageExternalVolumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiImageExternalChapterRouteHandler: RouteHandler<
  typeof getApiImageExternalChapterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiKavitaPlusAuditEntriesRouteHandler: RouteHandler<
  typeof postApiKavitaPlusAuditEntriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKavitaPlusAuditEntriesSeriesSeriesIdRouteHandler: RouteHandler<
  typeof getApiKavitaPlusAuditEntriesSeriesSeriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKavitaPlusAuditStatsRouteHandler: RouteHandler<
  typeof getApiKavitaPlusAuditStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKavitaPlusAuditMyStatsRouteHandler: RouteHandler<
  typeof getApiKavitaPlusAuditMyStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiKavitaPlusAuditMyActivityRouteHandler: RouteHandler<
  typeof postApiKavitaPlusAuditMyActivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKavitaPlusAuditFailedScrobbleEventsRouteHandler: RouteHandler<
  typeof getApiKavitaPlusAuditFailedScrobbleEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3ContentBookIdAnnotationsRouteHandler: RouteHandler<
  typeof getApiV3ContentBookIdAnnotationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV3ContentBookIdAnnotationsRouteHandler: RouteHandler<
  typeof patchApiV3ContentBookIdAnnotationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3ContentCheckforchangesRouteHandler: RouteHandler<
  typeof postApiV3ContentCheckforchangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKoreaderApiKeyUsersAuthRouteHandler: RouteHandler<
  typeof getApiKoreaderApiKeyUsersAuthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiKoreaderApiKeySyncsProgressRouteHandler: RouteHandler<
  typeof putApiKoreaderApiKeySyncsProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKoreaderApiKeySyncsProgressEbookHashRouteHandler: RouteHandler<
  typeof getApiKoreaderApiKeySyncsProgressEbookHashRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLibraryCreateRouteHandler: RouteHandler<
  typeof postApiLibraryCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLibraryListRouteHandler: RouteHandler<typeof getApiLibraryListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiLibraryHasFilesAtRootRouteHandler: RouteHandler<
  typeof postApiLibraryHasFilesAtRootRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLibraryRouteHandler: RouteHandler<typeof getApiLibraryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLibraryLibrariesRouteHandler: RouteHandler<
  typeof getApiLibraryLibrariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLibraryUserLibrariesRouteHandler: RouteHandler<
  typeof getApiLibraryUserLibrariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLibraryJumpBarRouteHandler: RouteHandler<
  typeof getApiLibraryJumpBarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLibraryGrantAccessRouteHandler: RouteHandler<
  typeof postApiLibraryGrantAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLibraryScanRouteHandler: RouteHandler<typeof postApiLibraryScanRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiLibraryFolderWatchRetryRouteHandler: RouteHandler<
  typeof postApiLibraryFolderWatchRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLibraryWatchStatusRouteHandler: RouteHandler<
  typeof getApiLibraryWatchStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLibraryScanMultipleRouteHandler: RouteHandler<
  typeof postApiLibraryScanMultipleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLibraryScanAllRouteHandler: RouteHandler<
  typeof postApiLibraryScanAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLibraryRefreshMetadataRouteHandler: RouteHandler<
  typeof postApiLibraryRefreshMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLibraryRefreshMetadataMultipleRouteHandler: RouteHandler<
  typeof postApiLibraryRefreshMetadataMultipleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLibraryCopySettingsFromRouteHandler: RouteHandler<
  typeof postApiLibraryCopySettingsFromRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLibraryScanFolderRouteHandler: RouteHandler<
  typeof postApiLibraryScanFolderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiLibraryDeleteRouteHandler: RouteHandler<
  typeof deleteApiLibraryDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiLibraryDeleteMultipleRouteHandler: RouteHandler<
  typeof deleteApiLibraryDeleteMultipleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLibraryNameExistsRouteHandler: RouteHandler<
  typeof getApiLibraryNameExistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLibraryUpdateRouteHandler: RouteHandler<
  typeof postApiLibraryUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLibraryMetadataProvidersRouteHandler: RouteHandler<
  typeof getApiLibraryMetadataProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLibraryMetadataEnabledLibrariesRouteHandler: RouteHandler<
  typeof getApiLibraryMetadataEnabledLibrariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLibraryScrobbleEnabledLibrariesRouteHandler: RouteHandler<
  typeof getApiLibraryScrobbleEnabledLibrariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLibraryTypeRouteHandler: RouteHandler<typeof getApiLibraryTypeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiLicenseValidLicenseRouteHandler: RouteHandler<
  typeof getApiLicenseValidLicenseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLicenseHasLicenseRouteHandler: RouteHandler<
  typeof getApiLicenseHasLicenseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLicenseInfoRouteHandler: RouteHandler<typeof getApiLicenseInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiLicenseRouteHandler: RouteHandler<typeof deleteApiLicenseRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiLicenseRouteHandler: RouteHandler<typeof postApiLicenseRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLicenseResetRouteHandler: RouteHandler<
  typeof postApiLicenseResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLicenseResendLicenseRouteHandler: RouteHandler<
  typeof postApiLicenseResendLicenseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLicenseProviderHealthRouteHandler: RouteHandler<
  typeof getApiLicenseProviderHealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLicenseStatsRouteHandler: RouteHandler<typeof getApiLicenseStatsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiLicenseCancelRouteHandler: RouteHandler<
  typeof deleteApiLicenseCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLicenseProductsRouteHandler: RouteHandler<
  typeof getApiLicenseProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLicenseRenewRouteHandler: RouteHandler<
  typeof postApiLicenseRenewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLicenseChangeEmailRouteHandler: RouteHandler<
  typeof postApiLicenseChangeEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLocaleRouteHandler: RouteHandler<typeof getApiLocaleRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiManageSeriesMetadataRouteHandler: RouteHandler<
  typeof postApiManageSeriesMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiManageMatchedSeriesCountsRouteHandler: RouteHandler<
  typeof getApiManageMatchedSeriesCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMetadataGenresRouteHandler: RouteHandler<
  typeof getApiMetadataGenresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiMetadataGenresWithCountsRouteHandler: RouteHandler<
  typeof postApiMetadataGenresWithCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMetadataPeopleByRoleRouteHandler: RouteHandler<
  typeof getApiMetadataPeopleByRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMetadataPeopleRouteHandler: RouteHandler<
  typeof getApiMetadataPeopleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMetadataTagsRouteHandler: RouteHandler<typeof getApiMetadataTagsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiMetadataReadinglistTagsRouteHandler: RouteHandler<
  typeof getApiMetadataReadinglistTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiMetadataTagsWithCountsRouteHandler: RouteHandler<
  typeof postApiMetadataTagsWithCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMetadataAgeRatingsRouteHandler: RouteHandler<
  typeof getApiMetadataAgeRatingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMetadataPublicationStatusRouteHandler: RouteHandler<
  typeof getApiMetadataPublicationStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMetadataLanguagesRouteHandler: RouteHandler<
  typeof getApiMetadataLanguagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMetadataAllLanguagesRouteHandler: RouteHandler<
  typeof getApiMetadataAllLanguagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMetadataAllBcp47LanguagesRouteHandler: RouteHandler<
  typeof getApiMetadataAllBcp47LanguagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMetadataLanguageTitleRouteHandler: RouteHandler<
  typeof getApiMetadataLanguageTitleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMetadataSeriesDetailPlusRouteHandler: RouteHandler<
  typeof getApiMetadataSeriesDetailPlusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOAuthStartRouteHandler: RouteHandler<typeof getApiOAuthStartRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiOAuthCallbackRouteHandler: RouteHandler<
  typeof getApiOAuthCallbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiOpdsApiKeyRouteHandler: RouteHandler<typeof postApiOpdsApiKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiOpdsApiKeyRouteHandler: RouteHandler<typeof getApiOpdsApiKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiOpdsApiKeySmartFiltersFilterIdRouteHandler: RouteHandler<
  typeof getApiOpdsApiKeySmartFiltersFilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOpdsApiKeySmartFiltersRouteHandler: RouteHandler<
  typeof getApiOpdsApiKeySmartFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOpdsApiKeyLibrariesRouteHandler: RouteHandler<
  typeof getApiOpdsApiKeyLibrariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOpdsApiKeyWantToReadRouteHandler: RouteHandler<
  typeof getApiOpdsApiKeyWantToReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOpdsApiKeyCollectionsRouteHandler: RouteHandler<
  typeof getApiOpdsApiKeyCollectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOpdsApiKeyCollectionsCollectionIdRouteHandler: RouteHandler<
  typeof getApiOpdsApiKeyCollectionsCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOpdsApiKeyReadingListRouteHandler: RouteHandler<
  typeof getApiOpdsApiKeyReadingListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOpdsApiKeyReadingListReadingListIdRouteHandler: RouteHandler<
  typeof getApiOpdsApiKeyReadingListReadingListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOpdsApiKeyLibrariesLibraryIdRouteHandler: RouteHandler<
  typeof getApiOpdsApiKeyLibrariesLibraryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOpdsApiKeyRecentlyAddedRouteHandler: RouteHandler<
  typeof getApiOpdsApiKeyRecentlyAddedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOpdsApiKeyRecentlyUpdatedRouteHandler: RouteHandler<
  typeof getApiOpdsApiKeyRecentlyUpdatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOpdsApiKeyOnDeckRouteHandler: RouteHandler<
  typeof getApiOpdsApiKeyOnDeckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOpdsApiKeySeriesRouteHandler: RouteHandler<
  typeof getApiOpdsApiKeySeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOpdsApiKeySearchRouteHandler: RouteHandler<
  typeof getApiOpdsApiKeySearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOpdsApiKeySeriesSeriesIdRouteHandler: RouteHandler<
  typeof getApiOpdsApiKeySeriesSeriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdRouteHandler: RouteHandler<
  typeof getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdChapterChapterIdRouteHandler: RouteHandler<
  typeof getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdChapterChapterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdChapterChapterIdDownloadFilenameRouteHandler: RouteHandler<
  typeof getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdChapterChapterIdDownloadFilenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOpdsApiKeyImageRouteHandler: RouteHandler<
  typeof getApiOpdsApiKeyImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOpdsApiKeyFaviconRouteHandler: RouteHandler<
  typeof getApiOpdsApiKeyFaviconRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPanelsSaveProgressRouteHandler: RouteHandler<
  typeof postApiPanelsSaveProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPanelsGetProgressRouteHandler: RouteHandler<
  typeof getApiPanelsGetProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPersonRouteHandler: RouteHandler<typeof getApiPersonRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPersonSearchRouteHandler: RouteHandler<typeof getApiPersonSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiPersonRolesRouteHandler: RouteHandler<typeof getApiPersonRolesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiPersonAllRouteHandler: RouteHandler<typeof postApiPersonAllRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiPersonUpdateRouteHandler: RouteHandler<
  typeof postApiPersonUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPersonCoversdbImageRouteHandler: RouteHandler<
  typeof getApiPersonCoversdbImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPersonSeriesKnownForRouteHandler: RouteHandler<
  typeof getApiPersonSeriesKnownForRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPersonChaptersByRoleRouteHandler: RouteHandler<
  typeof getApiPersonChaptersByRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPersonMergeRouteHandler: RouteHandler<typeof postApiPersonMergeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiPersonValidAliasRouteHandler: RouteHandler<
  typeof postApiPersonValidAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPluginAuthenticateRouteHandler: RouteHandler<
  typeof postApiPluginAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPluginVersionRouteHandler: RouteHandler<
  typeof getApiPluginVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPluginAuthkeyExpiresRouteHandler: RouteHandler<
  typeof getApiPluginAuthkeyExpiresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPluginParseRouteHandler: RouteHandler<typeof getApiPluginParseRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiPluginParseBulkRouteHandler: RouteHandler<
  typeof postApiPluginParseBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiRatingSeriesRouteHandler: RouteHandler<
  typeof postApiRatingSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiRatingChapterRouteHandler: RouteHandler<
  typeof postApiRatingChapterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiRatingOverallSeriesRouteHandler: RouteHandler<
  typeof getApiRatingOverallSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiRatingOverallChapterRouteHandler: RouteHandler<
  typeof getApiRatingOverallChapterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReaderPdfRouteHandler: RouteHandler<typeof getApiReaderPdfRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReaderImageRouteHandler: RouteHandler<typeof getApiReaderImageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiReaderThumbnailRouteHandler: RouteHandler<
  typeof getApiReaderThumbnailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReaderBookmarkImageRouteHandler: RouteHandler<
  typeof getApiReaderBookmarkImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReaderFileDimensionsRouteHandler: RouteHandler<
  typeof getApiReaderFileDimensionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReaderChapterInfoRouteHandler: RouteHandler<
  typeof getApiReaderChapterInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReaderBookmarkInfoRouteHandler: RouteHandler<
  typeof getApiReaderBookmarkInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReaderMarkChapterReadRouteHandler: RouteHandler<
  typeof postApiReaderMarkChapterReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReaderMarkReadRouteHandler: RouteHandler<
  typeof postApiReaderMarkReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReaderMarkUnreadRouteHandler: RouteHandler<
  typeof postApiReaderMarkUnreadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReaderMarkVolumeUnreadRouteHandler: RouteHandler<
  typeof postApiReaderMarkVolumeUnreadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReaderMarkVolumeReadRouteHandler: RouteHandler<
  typeof postApiReaderMarkVolumeReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReaderMarkMultipleReadRouteHandler: RouteHandler<
  typeof postApiReaderMarkMultipleReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReaderMarkMultipleUnreadRouteHandler: RouteHandler<
  typeof postApiReaderMarkMultipleUnreadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReaderMarkMultipleSeriesReadRouteHandler: RouteHandler<
  typeof postApiReaderMarkMultipleSeriesReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReaderMarkMultipleSeriesUnreadRouteHandler: RouteHandler<
  typeof postApiReaderMarkMultipleSeriesUnreadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReaderGetProgressRouteHandler: RouteHandler<
  typeof getApiReaderGetProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReaderProgressRouteHandler: RouteHandler<
  typeof postApiReaderProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReaderContinuePointRouteHandler: RouteHandler<
  typeof getApiReaderContinuePointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReaderHasProgressRouteHandler: RouteHandler<
  typeof getApiReaderHasProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReaderChapterBookmarksRouteHandler: RouteHandler<
  typeof getApiReaderChapterBookmarksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReaderAllBookmarksRouteHandler: RouteHandler<
  typeof postApiReaderAllBookmarksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReaderRemoveBookmarksRouteHandler: RouteHandler<
  typeof postApiReaderRemoveBookmarksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReaderBulkRemoveBookmarksRouteHandler: RouteHandler<
  typeof postApiReaderBulkRemoveBookmarksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReaderVolumeBookmarksRouteHandler: RouteHandler<
  typeof getApiReaderVolumeBookmarksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReaderSeriesBookmarksRouteHandler: RouteHandler<
  typeof getApiReaderSeriesBookmarksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReaderBookmarkRouteHandler: RouteHandler<
  typeof postApiReaderBookmarkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReaderUnbookmarkRouteHandler: RouteHandler<
  typeof postApiReaderUnbookmarkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReaderNextChapterRouteHandler: RouteHandler<
  typeof getApiReaderNextChapterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReaderPrevChapterRouteHandler: RouteHandler<
  typeof getApiReaderPrevChapterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReaderTimeLeftRouteHandler: RouteHandler<
  typeof getApiReaderTimeLeftRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReaderTimeLeftForChapterRouteHandler: RouteHandler<
  typeof getApiReaderTimeLeftForChapterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReaderPtocRouteHandler: RouteHandler<typeof getApiReaderPtocRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiReaderPtocRouteHandler: RouteHandler<
  typeof deleteApiReaderPtocRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReaderCreatePtocRouteHandler: RouteHandler<
  typeof postApiReaderCreatePtocRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReaderPromptRereadSeriesRouteHandler: RouteHandler<
  typeof getApiReaderPromptRereadSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReaderPromptRereadVolumeRouteHandler: RouteHandler<
  typeof getApiReaderPromptRereadVolumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReaderPromptRereadChapterRouteHandler: RouteHandler<
  typeof getApiReaderPromptRereadChapterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReaderFirstProgressDateRouteHandler: RouteHandler<
  typeof getApiReaderFirstProgressDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReadingListRouteHandler: RouteHandler<typeof getApiReadingListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiReadingListRouteHandler: RouteHandler<
  typeof deleteApiReadingListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingListListsRouteHandler: RouteHandler<
  typeof postApiReadingListListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingListAllRouteHandler: RouteHandler<
  typeof postApiReadingListAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReadingListListsForSeriesRouteHandler: RouteHandler<
  typeof getApiReadingListListsForSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReadingListListsForChapterRouteHandler: RouteHandler<
  typeof getApiReadingListListsForChapterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReadingListItemsRouteHandler: RouteHandler<
  typeof getApiReadingListItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingListUpdatePositionRouteHandler: RouteHandler<
  typeof postApiReadingListUpdatePositionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingListDeleteItemRouteHandler: RouteHandler<
  typeof postApiReadingListDeleteItemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingListRemoveReadRouteHandler: RouteHandler<
  typeof postApiReadingListRemoveReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingListCreateRouteHandler: RouteHandler<
  typeof postApiReadingListCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingListUpdateRouteHandler: RouteHandler<
  typeof postApiReadingListUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingListUpdateBySeriesRouteHandler: RouteHandler<
  typeof postApiReadingListUpdateBySeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingListUpdateByMultipleRouteHandler: RouteHandler<
  typeof postApiReadingListUpdateByMultipleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingListUpdateByMultipleSeriesRouteHandler: RouteHandler<
  typeof postApiReadingListUpdateByMultipleSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingListUpdateByVolumeRouteHandler: RouteHandler<
  typeof postApiReadingListUpdateByVolumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingListUpdateByChapterRouteHandler: RouteHandler<
  typeof postApiReadingListUpdateByChapterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReadingListPeopleRouteHandler: RouteHandler<
  typeof getApiReadingListPeopleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReadingListAllPeopleRouteHandler: RouteHandler<
  typeof getApiReadingListAllPeopleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReadingListNextChapterRouteHandler: RouteHandler<
  typeof getApiReadingListNextChapterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReadingListPrevChapterRouteHandler: RouteHandler<
  typeof getApiReadingListPrevChapterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReadingListNameExistsRouteHandler: RouteHandler<
  typeof getApiReadingListNameExistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingListPromoteMultipleRouteHandler: RouteHandler<
  typeof postApiReadingListPromoteMultipleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingListDeleteMultipleRouteHandler: RouteHandler<
  typeof postApiReadingListDeleteMultipleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReadingListInfoRouteHandler: RouteHandler<
  typeof getApiReadingListInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingListExportAsCblRouteHandler: RouteHandler<
  typeof postApiReadingListExportAsCblRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingListRegenerateCoverRouteHandler: RouteHandler<
  typeof postApiReadingListRegenerateCoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReadingProfileAllRouteHandler: RouteHandler<
  typeof getApiReadingProfileAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReadingProfileLibraryIdSeriesIdRouteHandler: RouteHandler<
  typeof getApiReadingProfileLibraryIdSeriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReadingProfileSeriesRouteHandler: RouteHandler<
  typeof getApiReadingProfileSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingProfileSeriesRouteHandler: RouteHandler<
  typeof postApiReadingProfileSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReadingProfileLibraryRouteHandler: RouteHandler<
  typeof getApiReadingProfileLibraryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingProfileCreateRouteHandler: RouteHandler<
  typeof postApiReadingProfileCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingProfilePromoteRouteHandler: RouteHandler<
  typeof postApiReadingProfilePromoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingProfileUpdateParentRouteHandler: RouteHandler<
  typeof postApiReadingProfileUpdateParentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingProfileRouteHandler: RouteHandler<
  typeof postApiReadingProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiReadingProfileRouteHandler: RouteHandler<
  typeof deleteApiReadingProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingProfileSeriesSeriesIdRouteHandler: RouteHandler<
  typeof postApiReadingProfileSeriesSeriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiReadingProfileSeriesSeriesIdRouteHandler: RouteHandler<
  typeof deleteApiReadingProfileSeriesSeriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingProfileLibraryLibraryIdRouteHandler: RouteHandler<
  typeof postApiReadingProfileLibraryLibraryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiReadingProfileLibraryLibraryIdRouteHandler: RouteHandler<
  typeof deleteApiReadingProfileLibraryLibraryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingProfileBulkRouteHandler: RouteHandler<
  typeof postApiReadingProfileBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReadingProfileSetDevicesRouteHandler: RouteHandler<
  typeof postApiReadingProfileSetDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReviewSeriesRouteHandler: RouteHandler<
  typeof postApiReviewSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiReviewSeriesRouteHandler: RouteHandler<
  typeof deleteApiReviewSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReviewChapterRouteHandler: RouteHandler<
  typeof postApiReviewChapterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiReviewChapterRouteHandler: RouteHandler<
  typeof deleteApiReviewChapterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReviewAllRouteHandler: RouteHandler<typeof getApiReviewAllRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReviewMySeriesRouteHandler: RouteHandler<
  typeof getApiReviewMySeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiScrobblingScrobbleSettingsRouteHandler: RouteHandler<
  typeof getApiScrobblingScrobbleSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiScrobblingUpdateScrobbleSettingsRouteHandler: RouteHandler<
  typeof postApiScrobblingUpdateScrobbleSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiScrobblingUpdateUserScrobbleProviderRouteHandler: RouteHandler<
  typeof postApiScrobblingUpdateUserScrobbleProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiScrobblingGenerateScrobbleEventsRouteHandler: RouteHandler<
  typeof postApiScrobblingGenerateScrobbleEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiScrobblingGenerateScrobbleEventsAllRouteHandler: RouteHandler<
  typeof postApiScrobblingGenerateScrobbleEventsAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiScrobblingTokenExpiredRouteHandler: RouteHandler<
  typeof getApiScrobblingTokenExpiredRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiScrobblingExpiredTokensRouteHandler: RouteHandler<
  typeof getApiScrobblingExpiredTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiScrobblingScrobbleErrorsRouteHandler: RouteHandler<
  typeof getApiScrobblingScrobbleErrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiScrobblingClearErrorsRouteHandler: RouteHandler<
  typeof postApiScrobblingClearErrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiScrobblingScrobbleEventsRouteHandler: RouteHandler<
  typeof postApiScrobblingScrobbleEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiScrobblingHoldsRouteHandler: RouteHandler<
  typeof getApiScrobblingHoldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiScrobblingHasHoldRouteHandler: RouteHandler<
  typeof getApiScrobblingHasHoldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiScrobblingLibraryAllowsScrobblingRouteHandler: RouteHandler<
  typeof getApiScrobblingLibraryAllowsScrobblingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiScrobblingAddHoldRouteHandler: RouteHandler<
  typeof postApiScrobblingAddHoldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiScrobblingRemoveHoldRouteHandler: RouteHandler<
  typeof deleteApiScrobblingRemoveHoldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiScrobblingBulkRemoveEventsRouteHandler: RouteHandler<
  typeof postApiScrobblingBulkRemoveEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiScrobblingRemoveErrorIdRouteHandler: RouteHandler<
  typeof deleteApiScrobblingRemoveErrorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiScrobblingRetryScrobbleRouteHandler: RouteHandler<
  typeof postApiScrobblingRetryScrobbleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiScrobblingNextScrobbleTimeRouteHandler: RouteHandler<
  typeof getApiScrobblingNextScrobbleTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSearchSeriesForMangafileRouteHandler: RouteHandler<
  typeof getApiSearchSeriesForMangafileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSearchSeriesForChapterRouteHandler: RouteHandler<
  typeof getApiSearchSeriesForChapterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSearchSearchRouteHandler: RouteHandler<typeof getApiSearchSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiSearchChaptersBySeriesRouteHandler: RouteHandler<
  typeof getApiSearchChaptersBySeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSeriesV2RouteHandler: RouteHandler<typeof postApiSeriesV2Route> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSeriesSeriesIdRouteHandler: RouteHandler<
  typeof getApiSeriesSeriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiSeriesSeriesIdRouteHandler: RouteHandler<
  typeof deleteApiSeriesSeriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSeriesDeleteMultipleRouteHandler: RouteHandler<
  typeof postApiSeriesDeleteMultipleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSeriesVolumesRouteHandler: RouteHandler<
  typeof getApiSeriesVolumesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSeriesVolumeRouteHandler: RouteHandler<typeof getApiSeriesVolumeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiSeriesChapterRouteHandler: RouteHandler<
  typeof getApiSeriesChapterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSeriesUpdateRouteHandler: RouteHandler<
  typeof postApiSeriesUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSeriesRecentlyAddedV2RouteHandler: RouteHandler<
  typeof postApiSeriesRecentlyAddedV2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSeriesRecentlyUpdatedSeriesRouteHandler: RouteHandler<
  typeof postApiSeriesRecentlyUpdatedSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSeriesAllV2RouteHandler: RouteHandler<typeof postApiSeriesAllV2Route> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiSeriesOnDeckRouteHandler: RouteHandler<
  typeof postApiSeriesOnDeckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSeriesRemoveFromOnDeckRouteHandler: RouteHandler<
  typeof postApiSeriesRemoveFromOnDeckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSeriesCurrentlyReadingRouteHandler: RouteHandler<
  typeof getApiSeriesCurrentlyReadingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSeriesRefreshMetadataRouteHandler: RouteHandler<
  typeof postApiSeriesRefreshMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSeriesScanRouteHandler: RouteHandler<typeof postApiSeriesScanRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiSeriesAnalyzeRouteHandler: RouteHandler<
  typeof postApiSeriesAnalyzeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSeriesMetadataRouteHandler: RouteHandler<
  typeof getApiSeriesMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSeriesMetadataRouteHandler: RouteHandler<
  typeof postApiSeriesMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSeriesSeriesByCollectionRouteHandler: RouteHandler<
  typeof getApiSeriesSeriesByCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSeriesSeriesByIdsRouteHandler: RouteHandler<
  typeof postApiSeriesSeriesByIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSeriesAgeRatingRouteHandler: RouteHandler<
  typeof getApiSeriesAgeRatingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSeriesSeriesDetailRouteHandler: RouteHandler<
  typeof getApiSeriesSeriesDetailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSeriesRelatedRouteHandler: RouteHandler<
  typeof getApiSeriesRelatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSeriesAllRelatedRouteHandler: RouteHandler<
  typeof getApiSeriesAllRelatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSeriesUpdateRelatedRouteHandler: RouteHandler<
  typeof postApiSeriesUpdateRelatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSeriesExternalSeriesDetailRouteHandler: RouteHandler<
  typeof getApiSeriesExternalSeriesDetailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSeriesNextExpectedRouteHandler: RouteHandler<
  typeof getApiSeriesNextExpectedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSeriesMatchRouteHandler: RouteHandler<typeof postApiSeriesMatchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiSeriesUpdateMatchRouteHandler: RouteHandler<
  typeof postApiSeriesUpdateMatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSeriesDontMatchRouteHandler: RouteHandler<
  typeof postApiSeriesDontMatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSeriesMatchInfoRouteHandler: RouteHandler<
  typeof getApiSeriesMatchInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSeriesSeriesWithAnnotationsRouteHandler: RouteHandler<
  typeof getApiSeriesSeriesWithAnnotationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiServerClearCacheRouteHandler: RouteHandler<
  typeof postApiServerClearCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiServerCleanupWantToReadRouteHandler: RouteHandler<
  typeof postApiServerCleanupWantToReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiServerCleanupRouteHandler: RouteHandler<
  typeof postApiServerCleanupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiServerBackupDbRouteHandler: RouteHandler<
  typeof postApiServerBackupDbRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiServerAnalyzeFilesRouteHandler: RouteHandler<
  typeof postApiServerAnalyzeFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiServerServerInfoSlimRouteHandler: RouteHandler<
  typeof getApiServerServerInfoSlimRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiServerConvertMediaRouteHandler: RouteHandler<
  typeof postApiServerConvertMediaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiServerLogsRouteHandler: RouteHandler<typeof getApiServerLogsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiServerDebugExportRouteHandler: RouteHandler<
  typeof postApiServerDebugExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiServerDebugExportExportIdRouteHandler: RouteHandler<
  typeof getApiServerDebugExportExportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiServerCheckForUpdatesRouteHandler: RouteHandler<
  typeof getApiServerCheckForUpdatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiServerCheckUpdateRouteHandler: RouteHandler<
  typeof getApiServerCheckUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiServerCheckOutOfDateRouteHandler: RouteHandler<
  typeof getApiServerCheckOutOfDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiServerChangelogRouteHandler: RouteHandler<
  typeof getApiServerChangelogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiServerJobsRouteHandler: RouteHandler<typeof getApiServerJobsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiServerActivityRouteHandler: RouteHandler<
  typeof getApiServerActivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiServerMediaErrorsRouteHandler: RouteHandler<
  typeof getApiServerMediaErrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiServerMediaErrorsDismissRouteHandler: RouteHandler<
  typeof postApiServerMediaErrorsDismissRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiServerMediaErrorsUndismissRouteHandler: RouteHandler<
  typeof postApiServerMediaErrorsUndismissRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiServerMediaErrorsForSeriesRouteHandler: RouteHandler<
  typeof getApiServerMediaErrorsForSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiServerClearMediaAlertsRouteHandler: RouteHandler<
  typeof postApiServerClearMediaAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiServerBustKavitaplusCacheRouteHandler: RouteHandler<
  typeof postApiServerBustKavitaplusCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiServerSyncThemesRouteHandler: RouteHandler<
  typeof postApiServerSyncThemesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiServerIsTaskRunningRouteHandler: RouteHandler<
  typeof getApiServerIsTaskRunningRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSettingsBaseUrlRouteHandler: RouteHandler<
  typeof getApiSettingsBaseUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSettingsRouteHandler: RouteHandler<typeof getApiSettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSettingsRouteHandler: RouteHandler<typeof postApiSettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSettingsResetRouteHandler: RouteHandler<
  typeof postApiSettingsResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSettingsResetIpAddressesRouteHandler: RouteHandler<
  typeof postApiSettingsResetIpAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSettingsResetBaseUrlRouteHandler: RouteHandler<
  typeof postApiSettingsResetBaseUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSettingsIsEmailSetupRouteHandler: RouteHandler<
  typeof getApiSettingsIsEmailSetupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSettingsTaskFrequenciesRouteHandler: RouteHandler<
  typeof getApiSettingsTaskFrequenciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSettingsLibraryTypesRouteHandler: RouteHandler<
  typeof getApiSettingsLibraryTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSettingsLogLevelsRouteHandler: RouteHandler<
  typeof getApiSettingsLogLevelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSettingsOpdsEnabledRouteHandler: RouteHandler<
  typeof getApiSettingsOpdsEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSettingsKoboEnabledRouteHandler: RouteHandler<
  typeof getApiSettingsKoboEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSettingsKepubifySupportedRouteHandler: RouteHandler<
  typeof getApiSettingsKepubifySupportedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSettingsKepubifyRouteHandler: RouteHandler<
  typeof postApiSettingsKepubifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSettingsIsValidCronRouteHandler: RouteHandler<
  typeof getApiSettingsIsValidCronRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSettingsTestEmailUrlRouteHandler: RouteHandler<
  typeof postApiSettingsTestEmailUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSettingsMetadataSettingsRouteHandler: RouteHandler<
  typeof getApiSettingsMetadataSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSettingsMetadataSettingsRouteHandler: RouteHandler<
  typeof postApiSettingsMetadataSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSettingsRunMetadataMappingsRouteHandler: RouteHandler<
  typeof postApiSettingsRunMetadataMappingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSettingsImportFieldMappingsRouteHandler: RouteHandler<
  typeof postApiSettingsImportFieldMappingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSettingsOidcRouteHandler: RouteHandler<typeof getApiSettingsOidcRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiSettingsResetExternalIdsRouteHandler: RouteHandler<
  typeof postApiSettingsResetExternalIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSettingsIsValidAuthorityRouteHandler: RouteHandler<
  typeof postApiSettingsIsValidAuthorityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsServerStatsRouteHandler: RouteHandler<
  typeof getApiStatsServerStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsServerCountPublicationStatusRouteHandler: RouteHandler<
  typeof getApiStatsServerCountPublicationStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsServerCountMangaFormatRouteHandler: RouteHandler<
  typeof getApiStatsServerCountMangaFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsPopularDecadesRouteHandler: RouteHandler<
  typeof getApiStatsPopularDecadesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsPopularLibrariesRouteHandler: RouteHandler<
  typeof getApiStatsPopularLibrariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsPopularSeriesRouteHandler: RouteHandler<
  typeof getApiStatsPopularSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsPopularReadingListRouteHandler: RouteHandler<
  typeof getApiStatsPopularReadingListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsPopularGenresRouteHandler: RouteHandler<
  typeof getApiStatsPopularGenresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsPopularTagsRouteHandler: RouteHandler<
  typeof getApiStatsPopularTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsPopularPeopleRouteHandler: RouteHandler<
  typeof getApiStatsPopularPeopleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsMostActiveUsersRouteHandler: RouteHandler<
  typeof getApiStatsMostActiveUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsServerFileBreakdownRouteHandler: RouteHandler<
  typeof getApiStatsServerFileBreakdownRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsServerFileExtensionRouteHandler: RouteHandler<
  typeof getApiStatsServerFileExtensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsReadingCountsRouteHandler: RouteHandler<
  typeof getApiStatsReadingCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsDayBreakdownRouteHandler: RouteHandler<
  typeof getApiStatsDayBreakdownRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsPagesPerYearRouteHandler: RouteHandler<
  typeof getApiStatsPagesPerYearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsWordsPerYearRouteHandler: RouteHandler<
  typeof getApiStatsWordsPerYearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsFilesAddedOverTimeRouteHandler: RouteHandler<
  typeof getApiStatsFilesAddedOverTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsDeviceClientTypeRouteHandler: RouteHandler<
  typeof getApiStatsDeviceClientTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsDeviceDeviceTypeRouteHandler: RouteHandler<
  typeof getApiStatsDeviceDeviceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsReadingActivityRouteHandler: RouteHandler<
  typeof getApiStatsReadingActivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsReadingPaceRouteHandler: RouteHandler<
  typeof getApiStatsReadingPaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsGenreBreakdownRouteHandler: RouteHandler<
  typeof getApiStatsGenreBreakdownRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsTagBreakdownRouteHandler: RouteHandler<
  typeof getApiStatsTagBreakdownRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsPageSpreadRouteHandler: RouteHandler<
  typeof getApiStatsPageSpreadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsWordSpreadRouteHandler: RouteHandler<
  typeof getApiStatsWordSpreadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsFavoriteAuthorsRouteHandler: RouteHandler<
  typeof getApiStatsFavoriteAuthorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsAvgTimeByHourRouteHandler: RouteHandler<
  typeof getApiStatsAvgTimeByHourRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsReadsByMonthRouteHandler: RouteHandler<
  typeof getApiStatsReadsByMonthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsTotalReadsRouteHandler: RouteHandler<
  typeof getApiStatsTotalReadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsUserStatsRouteHandler: RouteHandler<
  typeof getApiStatsUserStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsUserReadRouteHandler: RouteHandler<
  typeof getApiStatsUserReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsReadingHistoryRouteHandler: RouteHandler<
  typeof getApiStatsReadingHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStatsReadingHistorySeriesSeriesIdRouteHandler: RouteHandler<
  typeof getApiStatsReadingHistorySeriesSeriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStreamDashboardRouteHandler: RouteHandler<
  typeof getApiStreamDashboardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStreamSidenavRouteHandler: RouteHandler<
  typeof getApiStreamSidenavRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiStreamExternalSourcesRouteHandler: RouteHandler<
  typeof getApiStreamExternalSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiStreamCreateExternalSourceRouteHandler: RouteHandler<
  typeof postApiStreamCreateExternalSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiStreamUpdateExternalSourceRouteHandler: RouteHandler<
  typeof postApiStreamUpdateExternalSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiStreamExternalSourceExistsRouteHandler: RouteHandler<
  typeof postApiStreamExternalSourceExistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiStreamDeleteExternalSourceRouteHandler: RouteHandler<
  typeof deleteApiStreamDeleteExternalSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiStreamAddDashboardStreamRouteHandler: RouteHandler<
  typeof postApiStreamAddDashboardStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiStreamUpdateDashboardStreamRouteHandler: RouteHandler<
  typeof postApiStreamUpdateDashboardStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiStreamUpdateDashboardPositionRouteHandler: RouteHandler<
  typeof postApiStreamUpdateDashboardPositionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiStreamAddSidenavStreamRouteHandler: RouteHandler<
  typeof postApiStreamAddSidenavStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiStreamAddSidenavStreamFromExternalSourceRouteHandler: RouteHandler<
  typeof postApiStreamAddSidenavStreamFromExternalSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiStreamUpdateSidenavStreamRouteHandler: RouteHandler<
  typeof postApiStreamUpdateSidenavStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiStreamUpdateSidenavPositionRouteHandler: RouteHandler<
  typeof postApiStreamUpdateSidenavPositionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiStreamBulkSidenavStreamVisibilityRouteHandler: RouteHandler<
  typeof postApiStreamBulkSidenavStreamVisibilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiStreamSmartFilterSideNavStreamRouteHandler: RouteHandler<
  typeof deleteApiStreamSmartFilterSideNavStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiStreamSmartFilterDashboardStreamRouteHandler: RouteHandler<
  typeof deleteApiStreamSmartFilterDashboardStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTachiyomiLatestChapterRouteHandler: RouteHandler<
  typeof getApiTachiyomiLatestChapterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTachiyomiMarkChapterUntilAsReadRouteHandler: RouteHandler<
  typeof postApiTachiyomiMarkChapterUntilAsReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiThemeRouteHandler: RouteHandler<typeof getApiThemeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiThemeRouteHandler: RouteHandler<typeof deleteApiThemeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiThemeUpdateDefaultRouteHandler: RouteHandler<
  typeof postApiThemeUpdateDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiThemeDownloadContentRouteHandler: RouteHandler<
  typeof getApiThemeDownloadContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiThemeBrowseRouteHandler: RouteHandler<typeof getApiThemeBrowseRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiThemeDownloadThemeRouteHandler: RouteHandler<
  typeof postApiThemeDownloadThemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiThemeUploadThemeRouteHandler: RouteHandler<
  typeof postApiThemeUploadThemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUploadUploadByUrlRouteHandler: RouteHandler<
  typeof postApiUploadUploadByUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUploadUploadChapterCoverRouteHandler: RouteHandler<
  typeof postApiUploadUploadChapterCoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUploadUploadVolumeCoverRouteHandler: RouteHandler<
  typeof postApiUploadUploadVolumeCoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUploadUploadSeriesCoverRouteHandler: RouteHandler<
  typeof postApiUploadUploadSeriesCoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUploadUploadByFileRouteHandler: RouteHandler<
  typeof postApiUploadUploadByFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUploadSeriesRouteHandler: RouteHandler<
  typeof postApiUploadSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUploadCollectionRouteHandler: RouteHandler<
  typeof postApiUploadCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUploadReadingListRouteHandler: RouteHandler<
  typeof postApiUploadReadingListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUploadChapterRouteHandler: RouteHandler<
  typeof postApiUploadChapterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUploadVolumeRouteHandler: RouteHandler<
  typeof postApiUploadVolumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUploadLibraryRouteHandler: RouteHandler<
  typeof postApiUploadLibraryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUploadPersonRouteHandler: RouteHandler<
  typeof postApiUploadPersonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUploadUserRouteHandler: RouteHandler<typeof postApiUploadUserRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiUsersDeleteUserRouteHandler: RouteHandler<
  typeof deleteApiUsersDeleteUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUsersRouteHandler: RouteHandler<typeof getApiUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUsersProfileInfoRouteHandler: RouteHandler<
  typeof getApiUsersProfileInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUsersHasProfileSharedRouteHandler: RouteHandler<
  typeof getApiUsersHasProfileSharedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUsersHasReadingProgressRouteHandler: RouteHandler<
  typeof getApiUsersHasReadingProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUsersHasLibraryAccessRouteHandler: RouteHandler<
  typeof getApiUsersHasLibraryAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUsersUpdatePreferencesRouteHandler: RouteHandler<
  typeof postApiUsersUpdatePreferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUsersGetPreferencesRouteHandler: RouteHandler<
  typeof getApiUsersGetPreferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUsersKoboSyncPointsRouteHandler: RouteHandler<
  typeof getApiUsersKoboSyncPointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiUsersKoboSyncPointRouteHandler: RouteHandler<
  typeof deleteApiUsersKoboSyncPointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiUsersKoboSyncPointUndoRemoveBooksRouteHandler: RouteHandler<
  typeof postApiUsersKoboSyncPointUndoRemoveBooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUsersNamesRouteHandler: RouteHandler<typeof getApiUsersNamesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiUsersTokensRouteHandler: RouteHandler<typeof getApiUsersTokensRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiVolumeRouteHandler: RouteHandler<typeof getApiVolumeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVolumeRouteHandler: RouteHandler<typeof deleteApiVolumeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVolumeUpdateRouteHandler: RouteHandler<
  typeof postApiVolumeUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVolumeMultipleRouteHandler: RouteHandler<
  typeof postApiVolumeMultipleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiWantToReadV2RouteHandler: RouteHandler<
  typeof postApiWantToReadV2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiWantToReadRouteHandler: RouteHandler<typeof getApiWantToReadRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiWantToReadAddSeriesRouteHandler: RouteHandler<
  typeof postApiWantToReadAddSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiWantToReadRemoveSeriesRouteHandler: RouteHandler<
  typeof postApiWantToReadRemoveSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
