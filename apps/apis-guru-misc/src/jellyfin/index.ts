import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthKeysKeyRoute,
  deleteCollectionsCollectionIdItemsRoute,
  deleteDevicesRoute,
  deleteDlnaProfilesProfileIdRoute,
  deleteItemsItemIdImagesImageTypeImageIndexRoute,
  deleteItemsItemIdImagesImageTypeRoute,
  deleteItemsItemIdRoute,
  deleteItemsRoute,
  deleteLibraryVirtualFoldersPathsRoute,
  deleteLibraryVirtualFoldersRoute,
  deleteLiveTvListingProvidersRoute,
  deleteLiveTvRecordingsRecordingIdRoute,
  deleteLiveTvSeriesTimersTimerIdRoute,
  deleteLiveTvTimersTimerIdRoute,
  deleteLiveTvTunerHostsRoute,
  deletePackagesInstallingPackageIdRoute,
  deletePlaylistsPlaylistIdItemsRoute,
  deletePluginsPluginIdRoute,
  deletePluginsPluginIdVersionRoute,
  deleteScheduledTasksRunningTaskIdRoute,
  deleteSessionsSessionIdUserUserIdRoute,
  deleteUsersUserIdFavoriteItemsItemIdRoute,
  deleteUsersUserIdImagesImageTypeIndexRoute,
  deleteUsersUserIdImagesImageTypeRoute,
  deleteUsersUserIdItemsItemIdRatingRoute,
  deleteUsersUserIdPlayedItemsItemIdRoute,
  deleteUsersUserIdPlayingItemsItemIdRoute,
  deleteUsersUserIdRoute,
  deleteVideosActiveEncodingsRoute,
  deleteVideosItemIdAlternateSourcesRoute,
  deleteVideosItemIdSubtitlesIndexRoute,
  getAlbumsIdInstantMixRoute,
  getAlbumsItemIdSimilarRoute,
  getArtistsAlbumArtistsRoute,
  getArtistsIdInstantMixRoute,
  getArtistsItemIdSimilarRoute,
  getArtistsNameImagesImageTypeImageIndexRoute,
  getArtistsNameRoute,
  getArtistsRoute,
  getAudioItemIdHls1PlaylistIdSegmentIdContainerRoute,
  getAudioItemIdHlsSegmentIdStreamAacRoute,
  getAudioItemIdHlsSegmentIdStreamMp3Route,
  getAudioItemIdMainM3u8Route,
  getAudioItemIdMasterM3u8Route,
  getAudioItemIdStreamContainerRoute,
  getAudioItemIdStreamRoute,
  getAudioItemIdUniversalRoute,
  getAuthKeysRoute,
  getAuthPasswordResetProvidersRoute,
  getAuthProvidersRoute,
  getBrandingConfigurationRoute,
  getBrandingCssCssRoute,
  getBrandingCssRoute,
  getChannelsChannelIdFeaturesRoute,
  getChannelsChannelIdItemsRoute,
  getChannelsFeaturesRoute,
  getChannelsItemsLatestRoute,
  getChannelsRoute,
  getDevicesInfoRoute,
  getDevicesOptionsRoute,
  getDevicesRoute,
  getDisplayPreferencesDisplayPreferencesIdRoute,
  getDlnaIconsFileNameRoute,
  getDlnaProfileInfosRoute,
  getDlnaProfilesDefaultRoute,
  getDlnaProfilesProfileIdRoute,
  getDlnaServerIdConnectionManagerConnectionManagerRoute,
  getDlnaServerIdConnectionManagerConnectionManagerXmlRoute,
  getDlnaServerIdConnectionManagerRoute,
  getDlnaServerIdContentDirectoryContentDirectoryRoute,
  getDlnaServerIdContentDirectoryContentDirectoryXmlRoute,
  getDlnaServerIdContentDirectoryRoute,
  getDlnaServerIdDescriptionRoute,
  getDlnaServerIdDescriptionXmlRoute,
  getDlnaServerIdIconsFileNameRoute,
  getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarRoute,
  getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarXmlRoute,
  getDlnaServerIdMediaReceiverRegistrarRoute,
  getEnvironmentDefaultDirectoryBrowserRoute,
  getEnvironmentDirectoryContentsRoute,
  getEnvironmentDrivesRoute,
  getEnvironmentNetworkSharesRoute,
  getEnvironmentParentPathRoute,
  getFallbackFontFontsNameRoute,
  getFallbackFontFontsRoute,
  getGenresGenreNameRoute,
  getGenresNameImagesImageTypeImageIndexRoute,
  getGenresNameImagesImageTypeRoute,
  getGenresRoute,
  getGetUtcTimeRoute,
  getImagesGeneralNameTypeRoute,
  getImagesGeneralRoute,
  getImagesMediaInfoRoute,
  getImagesMediaInfoThemeNameRoute,
  getImagesRatingsRoute,
  getImagesRatingsThemeNameRoute,
  getImagesRemoteRoute,
  getItemsCountsRoute,
  getItemsFilters2Route,
  getItemsFiltersRoute,
  getItemsIdInstantMixRoute,
  getItemsItemIdAncestorsRoute,
  getItemsItemIdCriticReviewsRoute,
  getItemsItemIdDownloadRoute,
  getItemsItemIdExternalIdInfosRoute,
  getItemsItemIdFileRoute,
  getItemsItemIdImagesImageTypeImageIndexRoute,
  getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountRoute,
  getItemsItemIdImagesImageTypeRoute,
  getItemsItemIdImagesRoute,
  getItemsItemIdMetadataEditorRoute,
  getItemsItemIdPlaybackInfoRoute,
  getItemsItemIdRemoteImagesProvidersRoute,
  getItemsItemIdRemoteImagesRoute,
  getItemsItemIdRemoteSearchSubtitlesLanguageRoute,
  getItemsItemIdSimilarRoute,
  getItemsItemIdThemeMediaRoute,
  getItemsItemIdThemeSongsRoute,
  getItemsItemIdThemeVideosRoute,
  getItemsRemoteSearchImageRoute,
  getItemsRoute,
  getLibrariesAvailableOptionsRoute,
  getLibraryMediaFoldersRoute,
  getLibraryPhysicalPathsRoute,
  getLibraryRefreshRoute,
  getLibraryVirtualFoldersRoute,
  getLiveTvChannelMappingOptionsRoute,
  getLiveTvChannelsChannelIdRoute,
  getLiveTvChannelsRoute,
  getLiveTvGuideInfoRoute,
  getLiveTvInfoRoute,
  getLiveTvListingProvidersDefaultRoute,
  getLiveTvListingProvidersLineupsRoute,
  getLiveTvListingProvidersSchedulesDirectCountriesRoute,
  getLiveTvLiveRecordingsRecordingIdStreamRoute,
  getLiveTvLiveStreamFilesStreamIdStreamContainerRoute,
  getLiveTvProgramsProgramIdRoute,
  getLiveTvProgramsRecommendedRoute,
  getLiveTvProgramsRoute,
  getLiveTvRecordingsFoldersRoute,
  getLiveTvRecordingsGroupsGroupIdRoute,
  getLiveTvRecordingsGroupsRoute,
  getLiveTvRecordingsRecordingIdRoute,
  getLiveTvRecordingsRoute,
  getLiveTvRecordingsSeriesRoute,
  getLiveTvSeriesTimersRoute,
  getLiveTvSeriesTimersTimerIdRoute,
  getLiveTvTimersDefaultsRoute,
  getLiveTvTimersRoute,
  getLiveTvTimersTimerIdRoute,
  getLiveTvTunerHostsTypesRoute,
  getLiveTvTunersDiscoverRoute,
  getLiveTvTunersDiscvoverRoute,
  getLocalizationCountriesRoute,
  getLocalizationCulturesRoute,
  getLocalizationOptionsRoute,
  getLocalizationParentalRatingsRoute,
  getMoviesItemIdSimilarRoute,
  getMoviesRecommendationsRoute,
  getMusicGenresGenreNameRoute,
  getMusicGenresIdInstantMixRoute,
  getMusicGenresNameImagesImageTypeImageIndexRoute,
  getMusicGenresNameImagesImageTypeRoute,
  getMusicGenresNameInstantMixRoute,
  getMusicGenresRoute,
  getNotificationsServicesRoute,
  getNotificationsTypesRoute,
  getNotificationsUserIdRoute,
  getNotificationsUserIdSummaryRoute,
  getPackagesNameRoute,
  getPackagesRoute,
  getPersonsNameImagesImageTypeImageIndexRoute,
  getPersonsNameImagesImageTypeRoute,
  getPersonsNameRoute,
  getPersonsRoute,
  getPlaybackBitrateTestRoute,
  getPlaylistsIdInstantMixRoute,
  getPlaylistsPlaylistIdItemsRoute,
  getPluginsPluginIdConfigurationRoute,
  getPluginsPluginIdVersionImageRoute,
  getPluginsRoute,
  getProvidersSubtitlesSubtitlesIdRoute,
  getQuickConnectConnectRoute,
  getQuickConnectInitiateRoute,
  getQuickConnectStatusRoute,
  getRepositoriesRoute,
  getScheduledTasksRoute,
  getScheduledTasksTaskIdRoute,
  getSearchHintsRoute,
  getSessionsRoute,
  getShowsItemIdSimilarRoute,
  getShowsNextUpRoute,
  getShowsSeriesIdEpisodesRoute,
  getShowsSeriesIdSeasonsRoute,
  getShowsUpcomingRoute,
  getSongsIdInstantMixRoute,
  getStartupConfigurationRoute,
  getStartupFirstUserRoute,
  getStartupUserRoute,
  getStudiosNameImagesImageTypeImageIndexRoute,
  getStudiosNameImagesImageTypeRoute,
  getStudiosNameRoute,
  getStudiosRoute,
  getSyncPlayListRoute,
  getSystemActivityLogEntriesRoute,
  getSystemConfigurationKeyRoute,
  getSystemConfigurationMetadataOptionsDefaultRoute,
  getSystemConfigurationRoute,
  getSystemEndpointRoute,
  getSystemInfoPublicRoute,
  getSystemInfoRoute,
  getSystemLogsLogRoute,
  getSystemLogsRoute,
  getSystemPingRoute,
  getSystemWakeOnLanInfoRoute,
  getTrailersItemIdSimilarRoute,
  getTrailersRoute,
  getUsersMeRoute,
  getUsersPublicRoute,
  getUsersRoute,
  getUsersUserIdGroupingOptionsRoute,
  getUsersUserIdImagesImageTypeImageIndexRoute,
  getUsersUserIdImagesImageTypeRoute,
  getUsersUserIdItemsItemIdIntrosRoute,
  getUsersUserIdItemsItemIdLocalTrailersRoute,
  getUsersUserIdItemsItemIdRoute,
  getUsersUserIdItemsItemIdSpecialFeaturesRoute,
  getUsersUserIdItemsLatestRoute,
  getUsersUserIdItemsResumeRoute,
  getUsersUserIdItemsRootRoute,
  getUsersUserIdItemsRoute,
  getUsersUserIdRoute,
  getUsersUserIdSuggestionsRoute,
  getUsersUserIdViewsRoute,
  getVideosItemIdAdditionalPartsRoute,
  getVideosItemIdHls1PlaylistIdSegmentIdContainerRoute,
  getVideosItemIdHlsPlaylistIdSegmentIdSegmentContainerRoute,
  getVideosItemIdHlsPlaylistIdStreamM3u8Route,
  getVideosItemIdLiveM3u8Route,
  getVideosItemIdMainM3u8Route,
  getVideosItemIdMasterM3u8Route,
  getVideosItemIdMediaSourceIdSubtitlesIndexStartPositionTicksStreamFormatRoute,
  getVideosItemIdMediaSourceIdSubtitlesIndexStreamFormatRoute,
  getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8Route,
  getVideosItemIdStreamContainerRoute,
  getVideosItemIdStreamRoute,
  getVideosVideoIdMediaSourceIdAttachmentsIndexRoute,
  getWebConfigurationPageRoute,
  getWebConfigurationPagesRoute,
  getYearsRoute,
  getYearsYearRoute,
  headArtistsNameImagesImageTypeImageIndexRoute,
  headAudioItemIdMasterM3u8Route,
  headAudioItemIdStreamContainerRoute,
  headAudioItemIdStreamRoute,
  headAudioItemIdUniversalRoute,
  headGenresNameImagesImageTypeImageIndexRoute,
  headGenresNameImagesImageTypeRoute,
  headItemsItemIdImagesImageTypeImageIndexRoute,
  headItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountRoute,
  headItemsItemIdImagesImageTypeRoute,
  headMusicGenresNameImagesImageTypeImageIndexRoute,
  headMusicGenresNameImagesImageTypeRoute,
  headPersonsNameImagesImageTypeImageIndexRoute,
  headPersonsNameImagesImageTypeRoute,
  headStudiosNameImagesImageTypeImageIndexRoute,
  headStudiosNameImagesImageTypeRoute,
  headUsersUserIdImagesImageTypeImageIndexRoute,
  headUsersUserIdImagesImageTypeRoute,
  headVideosItemIdMasterM3u8Route,
  headVideosItemIdStreamContainerRoute,
  headVideosItemIdStreamRoute,
  postAuthKeysRoute,
  postCollectionsCollectionIdItemsRoute,
  postCollectionsRoute,
  postDevicesOptionsRoute,
  postDisplayPreferencesDisplayPreferencesIdRoute,
  postDlnaProfilesProfileIdRoute,
  postDlnaProfilesRoute,
  postDlnaServerIdConnectionManagerControlRoute,
  postDlnaServerIdContentDirectoryControlRoute,
  postDlnaServerIdMediaReceiverRegistrarControlRoute,
  postEnvironmentValidatePathRoute,
  postItemsItemIdContentTypeRoute,
  postItemsItemIdImagesImageTypeImageIndexIndexRoute,
  postItemsItemIdImagesImageTypeImageIndexRoute,
  postItemsItemIdImagesImageTypeRoute,
  postItemsItemIdPlaybackInfoRoute,
  postItemsItemIdRefreshRoute,
  postItemsItemIdRemoteImagesDownloadRoute,
  postItemsItemIdRemoteSearchSubtitlesSubtitleIdRoute,
  postItemsItemIdRoute,
  postItemsRemoteSearchApplyItemIdRoute,
  postItemsRemoteSearchBookRoute,
  postItemsRemoteSearchBoxSetRoute,
  postItemsRemoteSearchMovieRoute,
  postItemsRemoteSearchMusicAlbumRoute,
  postItemsRemoteSearchMusicArtistRoute,
  postItemsRemoteSearchMusicVideoRoute,
  postItemsRemoteSearchPersonRoute,
  postItemsRemoteSearchSeriesRoute,
  postItemsRemoteSearchTrailerRoute,
  postLibraryMediaUpdatedRoute,
  postLibraryMoviesAddedRoute,
  postLibraryMoviesUpdatedRoute,
  postLibrarySeriesAddedRoute,
  postLibrarySeriesUpdatedRoute,
  postLibraryVirtualFoldersLibraryOptionsRoute,
  postLibraryVirtualFoldersNameRoute,
  postLibraryVirtualFoldersPathsRoute,
  postLibraryVirtualFoldersPathsUpdateRoute,
  postLibraryVirtualFoldersRoute,
  postLiveStreamsCloseRoute,
  postLiveStreamsOpenRoute,
  postLiveTvChannelMappingsRoute,
  postLiveTvListingProvidersRoute,
  postLiveTvProgramsRoute,
  postLiveTvSeriesTimersRoute,
  postLiveTvSeriesTimersTimerIdRoute,
  postLiveTvTimersRoute,
  postLiveTvTimersTimerIdRoute,
  postLiveTvTunerHostsRoute,
  postLiveTvTunersTunerIdResetRoute,
  postNotificationsAdminRoute,
  postNotificationsUserIdReadRoute,
  postNotificationsUserIdUnreadRoute,
  postPackagesInstalledNameRoute,
  postPlaylistsPlaylistIdItemsItemIdMoveNewIndexRoute,
  postPlaylistsPlaylistIdItemsRoute,
  postPlaylistsRoute,
  postPluginsPluginIdConfigurationRoute,
  postPluginsPluginIdManifestRoute,
  postPluginsPluginIdVersionDisableRoute,
  postPluginsPluginIdVersionEnableRoute,
  postPluginsSecurityInfoRoute,
  postQuickConnectActivateRoute,
  postQuickConnectAuthorizeRoute,
  postQuickConnectAvailableRoute,
  postQuickConnectDeauthorizeRoute,
  postRepositoriesRoute,
  postScheduledTasksRunningTaskIdRoute,
  postScheduledTasksTaskIdTriggersRoute,
  postSessionsCapabilitiesFullRoute,
  postSessionsCapabilitiesRoute,
  postSessionsLogoutRoute,
  postSessionsPlayingPingRoute,
  postSessionsPlayingProgressRoute,
  postSessionsPlayingRoute,
  postSessionsPlayingStoppedRoute,
  postSessionsSessionIdCommandCommandRoute,
  postSessionsSessionIdCommandRoute,
  postSessionsSessionIdMessageRoute,
  postSessionsSessionIdPlayingCommandRoute,
  postSessionsSessionIdPlayingRoute,
  postSessionsSessionIdSystemCommandRoute,
  postSessionsSessionIdUserUserIdRoute,
  postSessionsSessionIdViewingRoute,
  postSessionsViewingRoute,
  postStartupCompleteRoute,
  postStartupConfigurationRoute,
  postStartupRemoteAccessRoute,
  postStartupUserRoute,
  postSyncPlayBufferingRoute,
  postSyncPlayJoinRoute,
  postSyncPlayLeaveRoute,
  postSyncPlayMovePlaylistItemRoute,
  postSyncPlayNewRoute,
  postSyncPlayNextItemRoute,
  postSyncPlayPauseRoute,
  postSyncPlayPingRoute,
  postSyncPlayPreviousItemRoute,
  postSyncPlayQueueRoute,
  postSyncPlayReadyRoute,
  postSyncPlayRemoveFromPlaylistRoute,
  postSyncPlaySeekRoute,
  postSyncPlaySetIgnoreWaitRoute,
  postSyncPlaySetNewQueueRoute,
  postSyncPlaySetPlaylistItemRoute,
  postSyncPlaySetRepeatModeRoute,
  postSyncPlaySetShuffleModeRoute,
  postSyncPlayStopRoute,
  postSyncPlayUnpauseRoute,
  postSystemConfigurationKeyRoute,
  postSystemConfigurationRoute,
  postSystemMediaEncoderPathRoute,
  postSystemPingRoute,
  postSystemRestartRoute,
  postSystemShutdownRoute,
  postUsersAuthenticateByNameRoute,
  postUsersAuthenticateWithQuickConnectRoute,
  postUsersForgotPasswordPinRoute,
  postUsersForgotPasswordRoute,
  postUsersNewRoute,
  postUsersUserIdAuthenticateRoute,
  postUsersUserIdConfigurationRoute,
  postUsersUserIdEasyPasswordRoute,
  postUsersUserIdFavoriteItemsItemIdRoute,
  postUsersUserIdImagesImageTypeIndexRoute,
  postUsersUserIdImagesImageTypeRoute,
  postUsersUserIdItemsItemIdRatingRoute,
  postUsersUserIdPasswordRoute,
  postUsersUserIdPlayedItemsItemIdRoute,
  postUsersUserIdPlayingItemsItemIdProgressRoute,
  postUsersUserIdPlayingItemsItemIdRoute,
  postUsersUserIdPolicyRoute,
  postUsersUserIdRoute,
  postVideosItemIdSubtitlesRoute,
  postVideosMergeVersionsRoute,
} from './routes'
import {
  deleteAuthKeysKeyRouteHandler,
  deleteCollectionsCollectionIdItemsRouteHandler,
  deleteDevicesRouteHandler,
  deleteDlnaProfilesProfileIdRouteHandler,
  deleteItemsItemIdImagesImageTypeImageIndexRouteHandler,
  deleteItemsItemIdImagesImageTypeRouteHandler,
  deleteItemsItemIdRouteHandler,
  deleteItemsRouteHandler,
  deleteLibraryVirtualFoldersPathsRouteHandler,
  deleteLibraryVirtualFoldersRouteHandler,
  deleteLiveTvListingProvidersRouteHandler,
  deleteLiveTvRecordingsRecordingIdRouteHandler,
  deleteLiveTvSeriesTimersTimerIdRouteHandler,
  deleteLiveTvTimersTimerIdRouteHandler,
  deleteLiveTvTunerHostsRouteHandler,
  deletePackagesInstallingPackageIdRouteHandler,
  deletePlaylistsPlaylistIdItemsRouteHandler,
  deletePluginsPluginIdRouteHandler,
  deletePluginsPluginIdVersionRouteHandler,
  deleteScheduledTasksRunningTaskIdRouteHandler,
  deleteSessionsSessionIdUserUserIdRouteHandler,
  deleteUsersUserIdFavoriteItemsItemIdRouteHandler,
  deleteUsersUserIdImagesImageTypeIndexRouteHandler,
  deleteUsersUserIdImagesImageTypeRouteHandler,
  deleteUsersUserIdItemsItemIdRatingRouteHandler,
  deleteUsersUserIdPlayedItemsItemIdRouteHandler,
  deleteUsersUserIdPlayingItemsItemIdRouteHandler,
  deleteUsersUserIdRouteHandler,
  deleteVideosActiveEncodingsRouteHandler,
  deleteVideosItemIdAlternateSourcesRouteHandler,
  deleteVideosItemIdSubtitlesIndexRouteHandler,
  getAlbumsIdInstantMixRouteHandler,
  getAlbumsItemIdSimilarRouteHandler,
  getArtistsAlbumArtistsRouteHandler,
  getArtistsIdInstantMixRouteHandler,
  getArtistsItemIdSimilarRouteHandler,
  getArtistsNameImagesImageTypeImageIndexRouteHandler,
  getArtistsNameRouteHandler,
  getArtistsRouteHandler,
  getAudioItemIdHls1PlaylistIdSegmentIdContainerRouteHandler,
  getAudioItemIdHlsSegmentIdStreamAacRouteHandler,
  getAudioItemIdHlsSegmentIdStreamMp3RouteHandler,
  getAudioItemIdMainM3u8RouteHandler,
  getAudioItemIdMasterM3u8RouteHandler,
  getAudioItemIdStreamContainerRouteHandler,
  getAudioItemIdStreamRouteHandler,
  getAudioItemIdUniversalRouteHandler,
  getAuthKeysRouteHandler,
  getAuthPasswordResetProvidersRouteHandler,
  getAuthProvidersRouteHandler,
  getBrandingConfigurationRouteHandler,
  getBrandingCssCssRouteHandler,
  getBrandingCssRouteHandler,
  getChannelsChannelIdFeaturesRouteHandler,
  getChannelsChannelIdItemsRouteHandler,
  getChannelsFeaturesRouteHandler,
  getChannelsItemsLatestRouteHandler,
  getChannelsRouteHandler,
  getDevicesInfoRouteHandler,
  getDevicesOptionsRouteHandler,
  getDevicesRouteHandler,
  getDisplayPreferencesDisplayPreferencesIdRouteHandler,
  getDlnaIconsFileNameRouteHandler,
  getDlnaProfileInfosRouteHandler,
  getDlnaProfilesDefaultRouteHandler,
  getDlnaProfilesProfileIdRouteHandler,
  getDlnaServerIdConnectionManagerConnectionManagerRouteHandler,
  getDlnaServerIdConnectionManagerConnectionManagerXmlRouteHandler,
  getDlnaServerIdConnectionManagerRouteHandler,
  getDlnaServerIdContentDirectoryContentDirectoryRouteHandler,
  getDlnaServerIdContentDirectoryContentDirectoryXmlRouteHandler,
  getDlnaServerIdContentDirectoryRouteHandler,
  getDlnaServerIdDescriptionRouteHandler,
  getDlnaServerIdDescriptionXmlRouteHandler,
  getDlnaServerIdIconsFileNameRouteHandler,
  getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarRouteHandler,
  getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarXmlRouteHandler,
  getDlnaServerIdMediaReceiverRegistrarRouteHandler,
  getEnvironmentDefaultDirectoryBrowserRouteHandler,
  getEnvironmentDirectoryContentsRouteHandler,
  getEnvironmentDrivesRouteHandler,
  getEnvironmentNetworkSharesRouteHandler,
  getEnvironmentParentPathRouteHandler,
  getFallbackFontFontsNameRouteHandler,
  getFallbackFontFontsRouteHandler,
  getGenresGenreNameRouteHandler,
  getGenresNameImagesImageTypeImageIndexRouteHandler,
  getGenresNameImagesImageTypeRouteHandler,
  getGenresRouteHandler,
  getGetUtcTimeRouteHandler,
  getImagesGeneralNameTypeRouteHandler,
  getImagesGeneralRouteHandler,
  getImagesMediaInfoRouteHandler,
  getImagesMediaInfoThemeNameRouteHandler,
  getImagesRatingsRouteHandler,
  getImagesRatingsThemeNameRouteHandler,
  getImagesRemoteRouteHandler,
  getItemsCountsRouteHandler,
  getItemsFilters2RouteHandler,
  getItemsFiltersRouteHandler,
  getItemsIdInstantMixRouteHandler,
  getItemsItemIdAncestorsRouteHandler,
  getItemsItemIdCriticReviewsRouteHandler,
  getItemsItemIdDownloadRouteHandler,
  getItemsItemIdExternalIdInfosRouteHandler,
  getItemsItemIdFileRouteHandler,
  getItemsItemIdImagesImageTypeImageIndexRouteHandler,
  getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountRouteHandler,
  getItemsItemIdImagesImageTypeRouteHandler,
  getItemsItemIdImagesRouteHandler,
  getItemsItemIdMetadataEditorRouteHandler,
  getItemsItemIdPlaybackInfoRouteHandler,
  getItemsItemIdRemoteImagesProvidersRouteHandler,
  getItemsItemIdRemoteImagesRouteHandler,
  getItemsItemIdRemoteSearchSubtitlesLanguageRouteHandler,
  getItemsItemIdSimilarRouteHandler,
  getItemsItemIdThemeMediaRouteHandler,
  getItemsItemIdThemeSongsRouteHandler,
  getItemsItemIdThemeVideosRouteHandler,
  getItemsRemoteSearchImageRouteHandler,
  getItemsRouteHandler,
  getLibrariesAvailableOptionsRouteHandler,
  getLibraryMediaFoldersRouteHandler,
  getLibraryPhysicalPathsRouteHandler,
  getLibraryRefreshRouteHandler,
  getLibraryVirtualFoldersRouteHandler,
  getLiveTvChannelMappingOptionsRouteHandler,
  getLiveTvChannelsChannelIdRouteHandler,
  getLiveTvChannelsRouteHandler,
  getLiveTvGuideInfoRouteHandler,
  getLiveTvInfoRouteHandler,
  getLiveTvListingProvidersDefaultRouteHandler,
  getLiveTvListingProvidersLineupsRouteHandler,
  getLiveTvListingProvidersSchedulesDirectCountriesRouteHandler,
  getLiveTvLiveRecordingsRecordingIdStreamRouteHandler,
  getLiveTvLiveStreamFilesStreamIdStreamContainerRouteHandler,
  getLiveTvProgramsProgramIdRouteHandler,
  getLiveTvProgramsRecommendedRouteHandler,
  getLiveTvProgramsRouteHandler,
  getLiveTvRecordingsFoldersRouteHandler,
  getLiveTvRecordingsGroupsGroupIdRouteHandler,
  getLiveTvRecordingsGroupsRouteHandler,
  getLiveTvRecordingsRecordingIdRouteHandler,
  getLiveTvRecordingsRouteHandler,
  getLiveTvRecordingsSeriesRouteHandler,
  getLiveTvSeriesTimersRouteHandler,
  getLiveTvSeriesTimersTimerIdRouteHandler,
  getLiveTvTimersDefaultsRouteHandler,
  getLiveTvTimersRouteHandler,
  getLiveTvTimersTimerIdRouteHandler,
  getLiveTvTunerHostsTypesRouteHandler,
  getLiveTvTunersDiscoverRouteHandler,
  getLiveTvTunersDiscvoverRouteHandler,
  getLocalizationCountriesRouteHandler,
  getLocalizationCulturesRouteHandler,
  getLocalizationOptionsRouteHandler,
  getLocalizationParentalRatingsRouteHandler,
  getMoviesItemIdSimilarRouteHandler,
  getMoviesRecommendationsRouteHandler,
  getMusicGenresGenreNameRouteHandler,
  getMusicGenresIdInstantMixRouteHandler,
  getMusicGenresNameImagesImageTypeImageIndexRouteHandler,
  getMusicGenresNameImagesImageTypeRouteHandler,
  getMusicGenresNameInstantMixRouteHandler,
  getMusicGenresRouteHandler,
  getNotificationsServicesRouteHandler,
  getNotificationsTypesRouteHandler,
  getNotificationsUserIdRouteHandler,
  getNotificationsUserIdSummaryRouteHandler,
  getPackagesNameRouteHandler,
  getPackagesRouteHandler,
  getPersonsNameImagesImageTypeImageIndexRouteHandler,
  getPersonsNameImagesImageTypeRouteHandler,
  getPersonsNameRouteHandler,
  getPersonsRouteHandler,
  getPlaybackBitrateTestRouteHandler,
  getPlaylistsIdInstantMixRouteHandler,
  getPlaylistsPlaylistIdItemsRouteHandler,
  getPluginsPluginIdConfigurationRouteHandler,
  getPluginsPluginIdVersionImageRouteHandler,
  getPluginsRouteHandler,
  getProvidersSubtitlesSubtitlesIdRouteHandler,
  getQuickConnectConnectRouteHandler,
  getQuickConnectInitiateRouteHandler,
  getQuickConnectStatusRouteHandler,
  getRepositoriesRouteHandler,
  getScheduledTasksRouteHandler,
  getScheduledTasksTaskIdRouteHandler,
  getSearchHintsRouteHandler,
  getSessionsRouteHandler,
  getShowsItemIdSimilarRouteHandler,
  getShowsNextUpRouteHandler,
  getShowsSeriesIdEpisodesRouteHandler,
  getShowsSeriesIdSeasonsRouteHandler,
  getShowsUpcomingRouteHandler,
  getSongsIdInstantMixRouteHandler,
  getStartupConfigurationRouteHandler,
  getStartupFirstUserRouteHandler,
  getStartupUserRouteHandler,
  getStudiosNameImagesImageTypeImageIndexRouteHandler,
  getStudiosNameImagesImageTypeRouteHandler,
  getStudiosNameRouteHandler,
  getStudiosRouteHandler,
  getSyncPlayListRouteHandler,
  getSystemActivityLogEntriesRouteHandler,
  getSystemConfigurationKeyRouteHandler,
  getSystemConfigurationMetadataOptionsDefaultRouteHandler,
  getSystemConfigurationRouteHandler,
  getSystemEndpointRouteHandler,
  getSystemInfoPublicRouteHandler,
  getSystemInfoRouteHandler,
  getSystemLogsLogRouteHandler,
  getSystemLogsRouteHandler,
  getSystemPingRouteHandler,
  getSystemWakeOnLanInfoRouteHandler,
  getTrailersItemIdSimilarRouteHandler,
  getTrailersRouteHandler,
  getUsersMeRouteHandler,
  getUsersPublicRouteHandler,
  getUsersRouteHandler,
  getUsersUserIdGroupingOptionsRouteHandler,
  getUsersUserIdImagesImageTypeImageIndexRouteHandler,
  getUsersUserIdImagesImageTypeRouteHandler,
  getUsersUserIdItemsItemIdIntrosRouteHandler,
  getUsersUserIdItemsItemIdLocalTrailersRouteHandler,
  getUsersUserIdItemsItemIdRouteHandler,
  getUsersUserIdItemsItemIdSpecialFeaturesRouteHandler,
  getUsersUserIdItemsLatestRouteHandler,
  getUsersUserIdItemsResumeRouteHandler,
  getUsersUserIdItemsRootRouteHandler,
  getUsersUserIdItemsRouteHandler,
  getUsersUserIdRouteHandler,
  getUsersUserIdSuggestionsRouteHandler,
  getUsersUserIdViewsRouteHandler,
  getVideosItemIdAdditionalPartsRouteHandler,
  getVideosItemIdHls1PlaylistIdSegmentIdContainerRouteHandler,
  getVideosItemIdHlsPlaylistIdSegmentIdSegmentContainerRouteHandler,
  getVideosItemIdHlsPlaylistIdStreamM3u8RouteHandler,
  getVideosItemIdLiveM3u8RouteHandler,
  getVideosItemIdMainM3u8RouteHandler,
  getVideosItemIdMasterM3u8RouteHandler,
  getVideosItemIdMediaSourceIdSubtitlesIndexStartPositionTicksStreamFormatRouteHandler,
  getVideosItemIdMediaSourceIdSubtitlesIndexStreamFormatRouteHandler,
  getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8RouteHandler,
  getVideosItemIdStreamContainerRouteHandler,
  getVideosItemIdStreamRouteHandler,
  getVideosVideoIdMediaSourceIdAttachmentsIndexRouteHandler,
  getWebConfigurationPageRouteHandler,
  getWebConfigurationPagesRouteHandler,
  getYearsRouteHandler,
  getYearsYearRouteHandler,
  headArtistsNameImagesImageTypeImageIndexRouteHandler,
  headAudioItemIdMasterM3u8RouteHandler,
  headAudioItemIdStreamContainerRouteHandler,
  headAudioItemIdStreamRouteHandler,
  headAudioItemIdUniversalRouteHandler,
  headGenresNameImagesImageTypeImageIndexRouteHandler,
  headGenresNameImagesImageTypeRouteHandler,
  headItemsItemIdImagesImageTypeImageIndexRouteHandler,
  headItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountRouteHandler,
  headItemsItemIdImagesImageTypeRouteHandler,
  headMusicGenresNameImagesImageTypeImageIndexRouteHandler,
  headMusicGenresNameImagesImageTypeRouteHandler,
  headPersonsNameImagesImageTypeImageIndexRouteHandler,
  headPersonsNameImagesImageTypeRouteHandler,
  headStudiosNameImagesImageTypeImageIndexRouteHandler,
  headStudiosNameImagesImageTypeRouteHandler,
  headUsersUserIdImagesImageTypeImageIndexRouteHandler,
  headUsersUserIdImagesImageTypeRouteHandler,
  headVideosItemIdMasterM3u8RouteHandler,
  headVideosItemIdStreamContainerRouteHandler,
  headVideosItemIdStreamRouteHandler,
  postAuthKeysRouteHandler,
  postCollectionsCollectionIdItemsRouteHandler,
  postCollectionsRouteHandler,
  postDevicesOptionsRouteHandler,
  postDisplayPreferencesDisplayPreferencesIdRouteHandler,
  postDlnaProfilesProfileIdRouteHandler,
  postDlnaProfilesRouteHandler,
  postDlnaServerIdConnectionManagerControlRouteHandler,
  postDlnaServerIdContentDirectoryControlRouteHandler,
  postDlnaServerIdMediaReceiverRegistrarControlRouteHandler,
  postEnvironmentValidatePathRouteHandler,
  postItemsItemIdContentTypeRouteHandler,
  postItemsItemIdImagesImageTypeImageIndexIndexRouteHandler,
  postItemsItemIdImagesImageTypeImageIndexRouteHandler,
  postItemsItemIdImagesImageTypeRouteHandler,
  postItemsItemIdPlaybackInfoRouteHandler,
  postItemsItemIdRefreshRouteHandler,
  postItemsItemIdRemoteImagesDownloadRouteHandler,
  postItemsItemIdRemoteSearchSubtitlesSubtitleIdRouteHandler,
  postItemsItemIdRouteHandler,
  postItemsRemoteSearchApplyItemIdRouteHandler,
  postItemsRemoteSearchBookRouteHandler,
  postItemsRemoteSearchBoxSetRouteHandler,
  postItemsRemoteSearchMovieRouteHandler,
  postItemsRemoteSearchMusicAlbumRouteHandler,
  postItemsRemoteSearchMusicArtistRouteHandler,
  postItemsRemoteSearchMusicVideoRouteHandler,
  postItemsRemoteSearchPersonRouteHandler,
  postItemsRemoteSearchSeriesRouteHandler,
  postItemsRemoteSearchTrailerRouteHandler,
  postLibraryMediaUpdatedRouteHandler,
  postLibraryMoviesAddedRouteHandler,
  postLibraryMoviesUpdatedRouteHandler,
  postLibrarySeriesAddedRouteHandler,
  postLibrarySeriesUpdatedRouteHandler,
  postLibraryVirtualFoldersLibraryOptionsRouteHandler,
  postLibraryVirtualFoldersNameRouteHandler,
  postLibraryVirtualFoldersPathsRouteHandler,
  postLibraryVirtualFoldersPathsUpdateRouteHandler,
  postLibraryVirtualFoldersRouteHandler,
  postLiveStreamsCloseRouteHandler,
  postLiveStreamsOpenRouteHandler,
  postLiveTvChannelMappingsRouteHandler,
  postLiveTvListingProvidersRouteHandler,
  postLiveTvProgramsRouteHandler,
  postLiveTvSeriesTimersRouteHandler,
  postLiveTvSeriesTimersTimerIdRouteHandler,
  postLiveTvTimersRouteHandler,
  postLiveTvTimersTimerIdRouteHandler,
  postLiveTvTunerHostsRouteHandler,
  postLiveTvTunersTunerIdResetRouteHandler,
  postNotificationsAdminRouteHandler,
  postNotificationsUserIdReadRouteHandler,
  postNotificationsUserIdUnreadRouteHandler,
  postPackagesInstalledNameRouteHandler,
  postPlaylistsPlaylistIdItemsItemIdMoveNewIndexRouteHandler,
  postPlaylistsPlaylistIdItemsRouteHandler,
  postPlaylistsRouteHandler,
  postPluginsPluginIdConfigurationRouteHandler,
  postPluginsPluginIdManifestRouteHandler,
  postPluginsPluginIdVersionDisableRouteHandler,
  postPluginsPluginIdVersionEnableRouteHandler,
  postPluginsSecurityInfoRouteHandler,
  postQuickConnectActivateRouteHandler,
  postQuickConnectAuthorizeRouteHandler,
  postQuickConnectAvailableRouteHandler,
  postQuickConnectDeauthorizeRouteHandler,
  postRepositoriesRouteHandler,
  postScheduledTasksRunningTaskIdRouteHandler,
  postScheduledTasksTaskIdTriggersRouteHandler,
  postSessionsCapabilitiesFullRouteHandler,
  postSessionsCapabilitiesRouteHandler,
  postSessionsLogoutRouteHandler,
  postSessionsPlayingPingRouteHandler,
  postSessionsPlayingProgressRouteHandler,
  postSessionsPlayingRouteHandler,
  postSessionsPlayingStoppedRouteHandler,
  postSessionsSessionIdCommandCommandRouteHandler,
  postSessionsSessionIdCommandRouteHandler,
  postSessionsSessionIdMessageRouteHandler,
  postSessionsSessionIdPlayingCommandRouteHandler,
  postSessionsSessionIdPlayingRouteHandler,
  postSessionsSessionIdSystemCommandRouteHandler,
  postSessionsSessionIdUserUserIdRouteHandler,
  postSessionsSessionIdViewingRouteHandler,
  postSessionsViewingRouteHandler,
  postStartupCompleteRouteHandler,
  postStartupConfigurationRouteHandler,
  postStartupRemoteAccessRouteHandler,
  postStartupUserRouteHandler,
  postSyncPlayBufferingRouteHandler,
  postSyncPlayJoinRouteHandler,
  postSyncPlayLeaveRouteHandler,
  postSyncPlayMovePlaylistItemRouteHandler,
  postSyncPlayNewRouteHandler,
  postSyncPlayNextItemRouteHandler,
  postSyncPlayPauseRouteHandler,
  postSyncPlayPingRouteHandler,
  postSyncPlayPreviousItemRouteHandler,
  postSyncPlayQueueRouteHandler,
  postSyncPlayReadyRouteHandler,
  postSyncPlayRemoveFromPlaylistRouteHandler,
  postSyncPlaySeekRouteHandler,
  postSyncPlaySetIgnoreWaitRouteHandler,
  postSyncPlaySetNewQueueRouteHandler,
  postSyncPlaySetPlaylistItemRouteHandler,
  postSyncPlaySetRepeatModeRouteHandler,
  postSyncPlaySetShuffleModeRouteHandler,
  postSyncPlayStopRouteHandler,
  postSyncPlayUnpauseRouteHandler,
  postSystemConfigurationKeyRouteHandler,
  postSystemConfigurationRouteHandler,
  postSystemMediaEncoderPathRouteHandler,
  postSystemPingRouteHandler,
  postSystemRestartRouteHandler,
  postSystemShutdownRouteHandler,
  postUsersAuthenticateByNameRouteHandler,
  postUsersAuthenticateWithQuickConnectRouteHandler,
  postUsersForgotPasswordPinRouteHandler,
  postUsersForgotPasswordRouteHandler,
  postUsersNewRouteHandler,
  postUsersUserIdAuthenticateRouteHandler,
  postUsersUserIdConfigurationRouteHandler,
  postUsersUserIdEasyPasswordRouteHandler,
  postUsersUserIdFavoriteItemsItemIdRouteHandler,
  postUsersUserIdImagesImageTypeIndexRouteHandler,
  postUsersUserIdImagesImageTypeRouteHandler,
  postUsersUserIdItemsItemIdRatingRouteHandler,
  postUsersUserIdPasswordRouteHandler,
  postUsersUserIdPlayedItemsItemIdRouteHandler,
  postUsersUserIdPlayingItemsItemIdProgressRouteHandler,
  postUsersUserIdPlayingItemsItemIdRouteHandler,
  postUsersUserIdPolicyRouteHandler,
  postUsersUserIdRouteHandler,
  postVideosItemIdSubtitlesRouteHandler,
  postVideosMergeVersionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAlbumsIdInstantMixRoute, getAlbumsIdInstantMixRouteHandler)
  .openapi(getAlbumsItemIdSimilarRoute, getAlbumsItemIdSimilarRouteHandler)
  .openapi(getArtistsRoute, getArtistsRouteHandler)
  .openapi(getArtistsAlbumArtistsRoute, getArtistsAlbumArtistsRouteHandler)
  .openapi(getArtistsIdInstantMixRoute, getArtistsIdInstantMixRouteHandler)
  .openapi(getArtistsItemIdSimilarRoute, getArtistsItemIdSimilarRouteHandler)
  .openapi(getArtistsNameRoute, getArtistsNameRouteHandler)
  .openapi(
    getArtistsNameImagesImageTypeImageIndexRoute,
    getArtistsNameImagesImageTypeImageIndexRouteHandler,
  )
  .openapi(
    headArtistsNameImagesImageTypeImageIndexRoute,
    headArtistsNameImagesImageTypeImageIndexRouteHandler,
  )
  .openapi(
    getAudioItemIdHlsSegmentIdStreamAacRoute,
    getAudioItemIdHlsSegmentIdStreamAacRouteHandler,
  )
  .openapi(
    getAudioItemIdHlsSegmentIdStreamMp3Route,
    getAudioItemIdHlsSegmentIdStreamMp3RouteHandler,
  )
  .openapi(
    getAudioItemIdHls1PlaylistIdSegmentIdContainerRoute,
    getAudioItemIdHls1PlaylistIdSegmentIdContainerRouteHandler,
  )
  .openapi(getAudioItemIdMainM3u8Route, getAudioItemIdMainM3u8RouteHandler)
  .openapi(getAudioItemIdMasterM3u8Route, getAudioItemIdMasterM3u8RouteHandler)
  .openapi(headAudioItemIdMasterM3u8Route, headAudioItemIdMasterM3u8RouteHandler)
  .openapi(getAudioItemIdStreamRoute, getAudioItemIdStreamRouteHandler)
  .openapi(headAudioItemIdStreamRoute, headAudioItemIdStreamRouteHandler)
  .openapi(getAudioItemIdStreamContainerRoute, getAudioItemIdStreamContainerRouteHandler)
  .openapi(headAudioItemIdStreamContainerRoute, headAudioItemIdStreamContainerRouteHandler)
  .openapi(getAudioItemIdUniversalRoute, getAudioItemIdUniversalRouteHandler)
  .openapi(headAudioItemIdUniversalRoute, headAudioItemIdUniversalRouteHandler)
  .openapi(getAuthKeysRoute, getAuthKeysRouteHandler)
  .openapi(postAuthKeysRoute, postAuthKeysRouteHandler)
  .openapi(deleteAuthKeysKeyRoute, deleteAuthKeysKeyRouteHandler)
  .openapi(getAuthPasswordResetProvidersRoute, getAuthPasswordResetProvidersRouteHandler)
  .openapi(getAuthProvidersRoute, getAuthProvidersRouteHandler)
  .openapi(getBrandingConfigurationRoute, getBrandingConfigurationRouteHandler)
  .openapi(getBrandingCssRoute, getBrandingCssRouteHandler)
  .openapi(getBrandingCssCssRoute, getBrandingCssCssRouteHandler)
  .openapi(getChannelsRoute, getChannelsRouteHandler)
  .openapi(getChannelsFeaturesRoute, getChannelsFeaturesRouteHandler)
  .openapi(getChannelsItemsLatestRoute, getChannelsItemsLatestRouteHandler)
  .openapi(getChannelsChannelIdFeaturesRoute, getChannelsChannelIdFeaturesRouteHandler)
  .openapi(getChannelsChannelIdItemsRoute, getChannelsChannelIdItemsRouteHandler)
  .openapi(postCollectionsRoute, postCollectionsRouteHandler)
  .openapi(deleteCollectionsCollectionIdItemsRoute, deleteCollectionsCollectionIdItemsRouteHandler)
  .openapi(postCollectionsCollectionIdItemsRoute, postCollectionsCollectionIdItemsRouteHandler)
  .openapi(deleteDevicesRoute, deleteDevicesRouteHandler)
  .openapi(getDevicesRoute, getDevicesRouteHandler)
  .openapi(getDevicesInfoRoute, getDevicesInfoRouteHandler)
  .openapi(getDevicesOptionsRoute, getDevicesOptionsRouteHandler)
  .openapi(postDevicesOptionsRoute, postDevicesOptionsRouteHandler)
  .openapi(
    getDisplayPreferencesDisplayPreferencesIdRoute,
    getDisplayPreferencesDisplayPreferencesIdRouteHandler,
  )
  .openapi(
    postDisplayPreferencesDisplayPreferencesIdRoute,
    postDisplayPreferencesDisplayPreferencesIdRouteHandler,
  )
  .openapi(getDlnaProfileInfosRoute, getDlnaProfileInfosRouteHandler)
  .openapi(postDlnaProfilesRoute, postDlnaProfilesRouteHandler)
  .openapi(getDlnaProfilesDefaultRoute, getDlnaProfilesDefaultRouteHandler)
  .openapi(deleteDlnaProfilesProfileIdRoute, deleteDlnaProfilesProfileIdRouteHandler)
  .openapi(getDlnaProfilesProfileIdRoute, getDlnaProfilesProfileIdRouteHandler)
  .openapi(postDlnaProfilesProfileIdRoute, postDlnaProfilesProfileIdRouteHandler)
  .openapi(getDlnaIconsFileNameRoute, getDlnaIconsFileNameRouteHandler)
  .openapi(getDlnaServerIdConnectionManagerRoute, getDlnaServerIdConnectionManagerRouteHandler)
  .openapi(
    getDlnaServerIdConnectionManagerConnectionManagerRoute,
    getDlnaServerIdConnectionManagerConnectionManagerRouteHandler,
  )
  .openapi(
    getDlnaServerIdConnectionManagerConnectionManagerXmlRoute,
    getDlnaServerIdConnectionManagerConnectionManagerXmlRouteHandler,
  )
  .openapi(
    postDlnaServerIdConnectionManagerControlRoute,
    postDlnaServerIdConnectionManagerControlRouteHandler,
  )
  .openapi(getDlnaServerIdContentDirectoryRoute, getDlnaServerIdContentDirectoryRouteHandler)
  .openapi(
    getDlnaServerIdContentDirectoryContentDirectoryRoute,
    getDlnaServerIdContentDirectoryContentDirectoryRouteHandler,
  )
  .openapi(
    getDlnaServerIdContentDirectoryContentDirectoryXmlRoute,
    getDlnaServerIdContentDirectoryContentDirectoryXmlRouteHandler,
  )
  .openapi(
    postDlnaServerIdContentDirectoryControlRoute,
    postDlnaServerIdContentDirectoryControlRouteHandler,
  )
  .openapi(
    getDlnaServerIdMediaReceiverRegistrarRoute,
    getDlnaServerIdMediaReceiverRegistrarRouteHandler,
  )
  .openapi(
    postDlnaServerIdMediaReceiverRegistrarControlRoute,
    postDlnaServerIdMediaReceiverRegistrarControlRouteHandler,
  )
  .openapi(
    getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarRoute,
    getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarRouteHandler,
  )
  .openapi(
    getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarXmlRoute,
    getDlnaServerIdMediaReceiverRegistrarMediaReceiverRegistrarXmlRouteHandler,
  )
  .openapi(getDlnaServerIdDescriptionRoute, getDlnaServerIdDescriptionRouteHandler)
  .openapi(getDlnaServerIdDescriptionXmlRoute, getDlnaServerIdDescriptionXmlRouteHandler)
  .openapi(getDlnaServerIdIconsFileNameRoute, getDlnaServerIdIconsFileNameRouteHandler)
  .openapi(
    getEnvironmentDefaultDirectoryBrowserRoute,
    getEnvironmentDefaultDirectoryBrowserRouteHandler,
  )
  .openapi(getEnvironmentDirectoryContentsRoute, getEnvironmentDirectoryContentsRouteHandler)
  .openapi(getEnvironmentDrivesRoute, getEnvironmentDrivesRouteHandler)
  .openapi(getEnvironmentNetworkSharesRoute, getEnvironmentNetworkSharesRouteHandler)
  .openapi(getEnvironmentParentPathRoute, getEnvironmentParentPathRouteHandler)
  .openapi(postEnvironmentValidatePathRoute, postEnvironmentValidatePathRouteHandler)
  .openapi(getFallbackFontFontsRoute, getFallbackFontFontsRouteHandler)
  .openapi(getFallbackFontFontsNameRoute, getFallbackFontFontsNameRouteHandler)
  .openapi(getGenresRoute, getGenresRouteHandler)
  .openapi(getGenresGenreNameRoute, getGenresGenreNameRouteHandler)
  .openapi(getGenresNameImagesImageTypeRoute, getGenresNameImagesImageTypeRouteHandler)
  .openapi(headGenresNameImagesImageTypeRoute, headGenresNameImagesImageTypeRouteHandler)
  .openapi(
    getGenresNameImagesImageTypeImageIndexRoute,
    getGenresNameImagesImageTypeImageIndexRouteHandler,
  )
  .openapi(
    headGenresNameImagesImageTypeImageIndexRoute,
    headGenresNameImagesImageTypeImageIndexRouteHandler,
  )
  .openapi(getGetUtcTimeRoute, getGetUtcTimeRouteHandler)
  .openapi(getImagesGeneralRoute, getImagesGeneralRouteHandler)
  .openapi(getImagesGeneralNameTypeRoute, getImagesGeneralNameTypeRouteHandler)
  .openapi(getImagesMediaInfoRoute, getImagesMediaInfoRouteHandler)
  .openapi(getImagesMediaInfoThemeNameRoute, getImagesMediaInfoThemeNameRouteHandler)
  .openapi(getImagesRatingsRoute, getImagesRatingsRouteHandler)
  .openapi(getImagesRatingsThemeNameRoute, getImagesRatingsThemeNameRouteHandler)
  .openapi(getImagesRemoteRoute, getImagesRemoteRouteHandler)
  .openapi(deleteItemsRoute, deleteItemsRouteHandler)
  .openapi(getItemsRoute, getItemsRouteHandler)
  .openapi(getItemsCountsRoute, getItemsCountsRouteHandler)
  .openapi(getItemsFiltersRoute, getItemsFiltersRouteHandler)
  .openapi(getItemsFilters2Route, getItemsFilters2RouteHandler)
  .openapi(postItemsRemoteSearchApplyItemIdRoute, postItemsRemoteSearchApplyItemIdRouteHandler)
  .openapi(postItemsRemoteSearchBookRoute, postItemsRemoteSearchBookRouteHandler)
  .openapi(postItemsRemoteSearchBoxSetRoute, postItemsRemoteSearchBoxSetRouteHandler)
  .openapi(getItemsRemoteSearchImageRoute, getItemsRemoteSearchImageRouteHandler)
  .openapi(postItemsRemoteSearchMovieRoute, postItemsRemoteSearchMovieRouteHandler)
  .openapi(postItemsRemoteSearchMusicAlbumRoute, postItemsRemoteSearchMusicAlbumRouteHandler)
  .openapi(postItemsRemoteSearchMusicArtistRoute, postItemsRemoteSearchMusicArtistRouteHandler)
  .openapi(postItemsRemoteSearchMusicVideoRoute, postItemsRemoteSearchMusicVideoRouteHandler)
  .openapi(postItemsRemoteSearchPersonRoute, postItemsRemoteSearchPersonRouteHandler)
  .openapi(postItemsRemoteSearchSeriesRoute, postItemsRemoteSearchSeriesRouteHandler)
  .openapi(postItemsRemoteSearchTrailerRoute, postItemsRemoteSearchTrailerRouteHandler)
  .openapi(getItemsIdInstantMixRoute, getItemsIdInstantMixRouteHandler)
  .openapi(deleteItemsItemIdRoute, deleteItemsItemIdRouteHandler)
  .openapi(postItemsItemIdRoute, postItemsItemIdRouteHandler)
  .openapi(getItemsItemIdAncestorsRoute, getItemsItemIdAncestorsRouteHandler)
  .openapi(postItemsItemIdContentTypeRoute, postItemsItemIdContentTypeRouteHandler)
  .openapi(getItemsItemIdCriticReviewsRoute, getItemsItemIdCriticReviewsRouteHandler)
  .openapi(getItemsItemIdDownloadRoute, getItemsItemIdDownloadRouteHandler)
  .openapi(getItemsItemIdExternalIdInfosRoute, getItemsItemIdExternalIdInfosRouteHandler)
  .openapi(getItemsItemIdFileRoute, getItemsItemIdFileRouteHandler)
  .openapi(getItemsItemIdImagesRoute, getItemsItemIdImagesRouteHandler)
  .openapi(deleteItemsItemIdImagesImageTypeRoute, deleteItemsItemIdImagesImageTypeRouteHandler)
  .openapi(getItemsItemIdImagesImageTypeRoute, getItemsItemIdImagesImageTypeRouteHandler)
  .openapi(headItemsItemIdImagesImageTypeRoute, headItemsItemIdImagesImageTypeRouteHandler)
  .openapi(postItemsItemIdImagesImageTypeRoute, postItemsItemIdImagesImageTypeRouteHandler)
  .openapi(
    deleteItemsItemIdImagesImageTypeImageIndexRoute,
    deleteItemsItemIdImagesImageTypeImageIndexRouteHandler,
  )
  .openapi(
    getItemsItemIdImagesImageTypeImageIndexRoute,
    getItemsItemIdImagesImageTypeImageIndexRouteHandler,
  )
  .openapi(
    headItemsItemIdImagesImageTypeImageIndexRoute,
    headItemsItemIdImagesImageTypeImageIndexRouteHandler,
  )
  .openapi(
    postItemsItemIdImagesImageTypeImageIndexRoute,
    postItemsItemIdImagesImageTypeImageIndexRouteHandler,
  )
  .openapi(
    postItemsItemIdImagesImageTypeImageIndexIndexRoute,
    postItemsItemIdImagesImageTypeImageIndexIndexRouteHandler,
  )
  .openapi(
    getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountRoute,
    getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountRouteHandler,
  )
  .openapi(
    headItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountRoute,
    headItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountRouteHandler,
  )
  .openapi(getItemsItemIdMetadataEditorRoute, getItemsItemIdMetadataEditorRouteHandler)
  .openapi(getItemsItemIdPlaybackInfoRoute, getItemsItemIdPlaybackInfoRouteHandler)
  .openapi(postItemsItemIdPlaybackInfoRoute, postItemsItemIdPlaybackInfoRouteHandler)
  .openapi(postItemsItemIdRefreshRoute, postItemsItemIdRefreshRouteHandler)
  .openapi(getItemsItemIdRemoteImagesRoute, getItemsItemIdRemoteImagesRouteHandler)
  .openapi(
    postItemsItemIdRemoteImagesDownloadRoute,
    postItemsItemIdRemoteImagesDownloadRouteHandler,
  )
  .openapi(
    getItemsItemIdRemoteImagesProvidersRoute,
    getItemsItemIdRemoteImagesProvidersRouteHandler,
  )
  .openapi(
    getItemsItemIdRemoteSearchSubtitlesLanguageRoute,
    getItemsItemIdRemoteSearchSubtitlesLanguageRouteHandler,
  )
  .openapi(
    postItemsItemIdRemoteSearchSubtitlesSubtitleIdRoute,
    postItemsItemIdRemoteSearchSubtitlesSubtitleIdRouteHandler,
  )
  .openapi(getItemsItemIdSimilarRoute, getItemsItemIdSimilarRouteHandler)
  .openapi(getItemsItemIdThemeMediaRoute, getItemsItemIdThemeMediaRouteHandler)
  .openapi(getItemsItemIdThemeSongsRoute, getItemsItemIdThemeSongsRouteHandler)
  .openapi(getItemsItemIdThemeVideosRoute, getItemsItemIdThemeVideosRouteHandler)
  .openapi(getLibrariesAvailableOptionsRoute, getLibrariesAvailableOptionsRouteHandler)
  .openapi(postLibraryMediaUpdatedRoute, postLibraryMediaUpdatedRouteHandler)
  .openapi(getLibraryMediaFoldersRoute, getLibraryMediaFoldersRouteHandler)
  .openapi(postLibraryMoviesAddedRoute, postLibraryMoviesAddedRouteHandler)
  .openapi(postLibraryMoviesUpdatedRoute, postLibraryMoviesUpdatedRouteHandler)
  .openapi(getLibraryPhysicalPathsRoute, getLibraryPhysicalPathsRouteHandler)
  .openapi(getLibraryRefreshRoute, getLibraryRefreshRouteHandler)
  .openapi(postLibrarySeriesAddedRoute, postLibrarySeriesAddedRouteHandler)
  .openapi(postLibrarySeriesUpdatedRoute, postLibrarySeriesUpdatedRouteHandler)
  .openapi(deleteLibraryVirtualFoldersRoute, deleteLibraryVirtualFoldersRouteHandler)
  .openapi(getLibraryVirtualFoldersRoute, getLibraryVirtualFoldersRouteHandler)
  .openapi(postLibraryVirtualFoldersRoute, postLibraryVirtualFoldersRouteHandler)
  .openapi(
    postLibraryVirtualFoldersLibraryOptionsRoute,
    postLibraryVirtualFoldersLibraryOptionsRouteHandler,
  )
  .openapi(postLibraryVirtualFoldersNameRoute, postLibraryVirtualFoldersNameRouteHandler)
  .openapi(deleteLibraryVirtualFoldersPathsRoute, deleteLibraryVirtualFoldersPathsRouteHandler)
  .openapi(postLibraryVirtualFoldersPathsRoute, postLibraryVirtualFoldersPathsRouteHandler)
  .openapi(
    postLibraryVirtualFoldersPathsUpdateRoute,
    postLibraryVirtualFoldersPathsUpdateRouteHandler,
  )
  .openapi(postLiveStreamsCloseRoute, postLiveStreamsCloseRouteHandler)
  .openapi(postLiveStreamsOpenRoute, postLiveStreamsOpenRouteHandler)
  .openapi(getLiveTvChannelMappingOptionsRoute, getLiveTvChannelMappingOptionsRouteHandler)
  .openapi(postLiveTvChannelMappingsRoute, postLiveTvChannelMappingsRouteHandler)
  .openapi(getLiveTvChannelsRoute, getLiveTvChannelsRouteHandler)
  .openapi(getLiveTvChannelsChannelIdRoute, getLiveTvChannelsChannelIdRouteHandler)
  .openapi(getLiveTvGuideInfoRoute, getLiveTvGuideInfoRouteHandler)
  .openapi(getLiveTvInfoRoute, getLiveTvInfoRouteHandler)
  .openapi(deleteLiveTvListingProvidersRoute, deleteLiveTvListingProvidersRouteHandler)
  .openapi(postLiveTvListingProvidersRoute, postLiveTvListingProvidersRouteHandler)
  .openapi(getLiveTvListingProvidersDefaultRoute, getLiveTvListingProvidersDefaultRouteHandler)
  .openapi(getLiveTvListingProvidersLineupsRoute, getLiveTvListingProvidersLineupsRouteHandler)
  .openapi(
    getLiveTvListingProvidersSchedulesDirectCountriesRoute,
    getLiveTvListingProvidersSchedulesDirectCountriesRouteHandler,
  )
  .openapi(
    getLiveTvLiveRecordingsRecordingIdStreamRoute,
    getLiveTvLiveRecordingsRecordingIdStreamRouteHandler,
  )
  .openapi(
    getLiveTvLiveStreamFilesStreamIdStreamContainerRoute,
    getLiveTvLiveStreamFilesStreamIdStreamContainerRouteHandler,
  )
  .openapi(getLiveTvProgramsRoute, getLiveTvProgramsRouteHandler)
  .openapi(postLiveTvProgramsRoute, postLiveTvProgramsRouteHandler)
  .openapi(getLiveTvProgramsRecommendedRoute, getLiveTvProgramsRecommendedRouteHandler)
  .openapi(getLiveTvProgramsProgramIdRoute, getLiveTvProgramsProgramIdRouteHandler)
  .openapi(getLiveTvRecordingsRoute, getLiveTvRecordingsRouteHandler)
  .openapi(getLiveTvRecordingsFoldersRoute, getLiveTvRecordingsFoldersRouteHandler)
  .openapi(getLiveTvRecordingsGroupsRoute, getLiveTvRecordingsGroupsRouteHandler)
  .openapi(getLiveTvRecordingsGroupsGroupIdRoute, getLiveTvRecordingsGroupsGroupIdRouteHandler)
  .openapi(getLiveTvRecordingsSeriesRoute, getLiveTvRecordingsSeriesRouteHandler)
  .openapi(deleteLiveTvRecordingsRecordingIdRoute, deleteLiveTvRecordingsRecordingIdRouteHandler)
  .openapi(getLiveTvRecordingsRecordingIdRoute, getLiveTvRecordingsRecordingIdRouteHandler)
  .openapi(getLiveTvSeriesTimersRoute, getLiveTvSeriesTimersRouteHandler)
  .openapi(postLiveTvSeriesTimersRoute, postLiveTvSeriesTimersRouteHandler)
  .openapi(deleteLiveTvSeriesTimersTimerIdRoute, deleteLiveTvSeriesTimersTimerIdRouteHandler)
  .openapi(getLiveTvSeriesTimersTimerIdRoute, getLiveTvSeriesTimersTimerIdRouteHandler)
  .openapi(postLiveTvSeriesTimersTimerIdRoute, postLiveTvSeriesTimersTimerIdRouteHandler)
  .openapi(getLiveTvTimersRoute, getLiveTvTimersRouteHandler)
  .openapi(postLiveTvTimersRoute, postLiveTvTimersRouteHandler)
  .openapi(getLiveTvTimersDefaultsRoute, getLiveTvTimersDefaultsRouteHandler)
  .openapi(deleteLiveTvTimersTimerIdRoute, deleteLiveTvTimersTimerIdRouteHandler)
  .openapi(getLiveTvTimersTimerIdRoute, getLiveTvTimersTimerIdRouteHandler)
  .openapi(postLiveTvTimersTimerIdRoute, postLiveTvTimersTimerIdRouteHandler)
  .openapi(deleteLiveTvTunerHostsRoute, deleteLiveTvTunerHostsRouteHandler)
  .openapi(postLiveTvTunerHostsRoute, postLiveTvTunerHostsRouteHandler)
  .openapi(getLiveTvTunerHostsTypesRoute, getLiveTvTunerHostsTypesRouteHandler)
  .openapi(getLiveTvTunersDiscoverRoute, getLiveTvTunersDiscoverRouteHandler)
  .openapi(getLiveTvTunersDiscvoverRoute, getLiveTvTunersDiscvoverRouteHandler)
  .openapi(postLiveTvTunersTunerIdResetRoute, postLiveTvTunersTunerIdResetRouteHandler)
  .openapi(getLocalizationCountriesRoute, getLocalizationCountriesRouteHandler)
  .openapi(getLocalizationCulturesRoute, getLocalizationCulturesRouteHandler)
  .openapi(getLocalizationOptionsRoute, getLocalizationOptionsRouteHandler)
  .openapi(getLocalizationParentalRatingsRoute, getLocalizationParentalRatingsRouteHandler)
  .openapi(getMoviesRecommendationsRoute, getMoviesRecommendationsRouteHandler)
  .openapi(getMoviesItemIdSimilarRoute, getMoviesItemIdSimilarRouteHandler)
  .openapi(getMusicGenresRoute, getMusicGenresRouteHandler)
  .openapi(getMusicGenresGenreNameRoute, getMusicGenresGenreNameRouteHandler)
  .openapi(getMusicGenresIdInstantMixRoute, getMusicGenresIdInstantMixRouteHandler)
  .openapi(getMusicGenresNameImagesImageTypeRoute, getMusicGenresNameImagesImageTypeRouteHandler)
  .openapi(headMusicGenresNameImagesImageTypeRoute, headMusicGenresNameImagesImageTypeRouteHandler)
  .openapi(
    getMusicGenresNameImagesImageTypeImageIndexRoute,
    getMusicGenresNameImagesImageTypeImageIndexRouteHandler,
  )
  .openapi(
    headMusicGenresNameImagesImageTypeImageIndexRoute,
    headMusicGenresNameImagesImageTypeImageIndexRouteHandler,
  )
  .openapi(getMusicGenresNameInstantMixRoute, getMusicGenresNameInstantMixRouteHandler)
  .openapi(postNotificationsAdminRoute, postNotificationsAdminRouteHandler)
  .openapi(getNotificationsServicesRoute, getNotificationsServicesRouteHandler)
  .openapi(getNotificationsTypesRoute, getNotificationsTypesRouteHandler)
  .openapi(getNotificationsUserIdRoute, getNotificationsUserIdRouteHandler)
  .openapi(postNotificationsUserIdReadRoute, postNotificationsUserIdReadRouteHandler)
  .openapi(getNotificationsUserIdSummaryRoute, getNotificationsUserIdSummaryRouteHandler)
  .openapi(postNotificationsUserIdUnreadRoute, postNotificationsUserIdUnreadRouteHandler)
  .openapi(getPackagesRoute, getPackagesRouteHandler)
  .openapi(postPackagesInstalledNameRoute, postPackagesInstalledNameRouteHandler)
  .openapi(deletePackagesInstallingPackageIdRoute, deletePackagesInstallingPackageIdRouteHandler)
  .openapi(getPackagesNameRoute, getPackagesNameRouteHandler)
  .openapi(getPersonsRoute, getPersonsRouteHandler)
  .openapi(getPersonsNameRoute, getPersonsNameRouteHandler)
  .openapi(getPersonsNameImagesImageTypeRoute, getPersonsNameImagesImageTypeRouteHandler)
  .openapi(headPersonsNameImagesImageTypeRoute, headPersonsNameImagesImageTypeRouteHandler)
  .openapi(
    getPersonsNameImagesImageTypeImageIndexRoute,
    getPersonsNameImagesImageTypeImageIndexRouteHandler,
  )
  .openapi(
    headPersonsNameImagesImageTypeImageIndexRoute,
    headPersonsNameImagesImageTypeImageIndexRouteHandler,
  )
  .openapi(getPlaybackBitrateTestRoute, getPlaybackBitrateTestRouteHandler)
  .openapi(postPlaylistsRoute, postPlaylistsRouteHandler)
  .openapi(getPlaylistsIdInstantMixRoute, getPlaylistsIdInstantMixRouteHandler)
  .openapi(deletePlaylistsPlaylistIdItemsRoute, deletePlaylistsPlaylistIdItemsRouteHandler)
  .openapi(getPlaylistsPlaylistIdItemsRoute, getPlaylistsPlaylistIdItemsRouteHandler)
  .openapi(postPlaylistsPlaylistIdItemsRoute, postPlaylistsPlaylistIdItemsRouteHandler)
  .openapi(
    postPlaylistsPlaylistIdItemsItemIdMoveNewIndexRoute,
    postPlaylistsPlaylistIdItemsItemIdMoveNewIndexRouteHandler,
  )
  .openapi(getPluginsRoute, getPluginsRouteHandler)
  .openapi(postPluginsSecurityInfoRoute, postPluginsSecurityInfoRouteHandler)
  .openapi(deletePluginsPluginIdRoute, deletePluginsPluginIdRouteHandler)
  .openapi(getPluginsPluginIdConfigurationRoute, getPluginsPluginIdConfigurationRouteHandler)
  .openapi(postPluginsPluginIdConfigurationRoute, postPluginsPluginIdConfigurationRouteHandler)
  .openapi(postPluginsPluginIdManifestRoute, postPluginsPluginIdManifestRouteHandler)
  .openapi(deletePluginsPluginIdVersionRoute, deletePluginsPluginIdVersionRouteHandler)
  .openapi(postPluginsPluginIdVersionDisableRoute, postPluginsPluginIdVersionDisableRouteHandler)
  .openapi(postPluginsPluginIdVersionEnableRoute, postPluginsPluginIdVersionEnableRouteHandler)
  .openapi(getPluginsPluginIdVersionImageRoute, getPluginsPluginIdVersionImageRouteHandler)
  .openapi(getProvidersSubtitlesSubtitlesIdRoute, getProvidersSubtitlesSubtitlesIdRouteHandler)
  .openapi(postQuickConnectActivateRoute, postQuickConnectActivateRouteHandler)
  .openapi(postQuickConnectAuthorizeRoute, postQuickConnectAuthorizeRouteHandler)
  .openapi(postQuickConnectAvailableRoute, postQuickConnectAvailableRouteHandler)
  .openapi(getQuickConnectConnectRoute, getQuickConnectConnectRouteHandler)
  .openapi(postQuickConnectDeauthorizeRoute, postQuickConnectDeauthorizeRouteHandler)
  .openapi(getQuickConnectInitiateRoute, getQuickConnectInitiateRouteHandler)
  .openapi(getQuickConnectStatusRoute, getQuickConnectStatusRouteHandler)
  .openapi(getRepositoriesRoute, getRepositoriesRouteHandler)
  .openapi(postRepositoriesRoute, postRepositoriesRouteHandler)
  .openapi(getScheduledTasksRoute, getScheduledTasksRouteHandler)
  .openapi(deleteScheduledTasksRunningTaskIdRoute, deleteScheduledTasksRunningTaskIdRouteHandler)
  .openapi(postScheduledTasksRunningTaskIdRoute, postScheduledTasksRunningTaskIdRouteHandler)
  .openapi(getScheduledTasksTaskIdRoute, getScheduledTasksTaskIdRouteHandler)
  .openapi(postScheduledTasksTaskIdTriggersRoute, postScheduledTasksTaskIdTriggersRouteHandler)
  .openapi(getSearchHintsRoute, getSearchHintsRouteHandler)
  .openapi(getSessionsRoute, getSessionsRouteHandler)
  .openapi(postSessionsCapabilitiesRoute, postSessionsCapabilitiesRouteHandler)
  .openapi(postSessionsCapabilitiesFullRoute, postSessionsCapabilitiesFullRouteHandler)
  .openapi(postSessionsLogoutRoute, postSessionsLogoutRouteHandler)
  .openapi(postSessionsPlayingRoute, postSessionsPlayingRouteHandler)
  .openapi(postSessionsPlayingPingRoute, postSessionsPlayingPingRouteHandler)
  .openapi(postSessionsPlayingProgressRoute, postSessionsPlayingProgressRouteHandler)
  .openapi(postSessionsPlayingStoppedRoute, postSessionsPlayingStoppedRouteHandler)
  .openapi(postSessionsViewingRoute, postSessionsViewingRouteHandler)
  .openapi(postSessionsSessionIdCommandRoute, postSessionsSessionIdCommandRouteHandler)
  .openapi(
    postSessionsSessionIdCommandCommandRoute,
    postSessionsSessionIdCommandCommandRouteHandler,
  )
  .openapi(postSessionsSessionIdMessageRoute, postSessionsSessionIdMessageRouteHandler)
  .openapi(postSessionsSessionIdPlayingRoute, postSessionsSessionIdPlayingRouteHandler)
  .openapi(
    postSessionsSessionIdPlayingCommandRoute,
    postSessionsSessionIdPlayingCommandRouteHandler,
  )
  .openapi(postSessionsSessionIdSystemCommandRoute, postSessionsSessionIdSystemCommandRouteHandler)
  .openapi(deleteSessionsSessionIdUserUserIdRoute, deleteSessionsSessionIdUserUserIdRouteHandler)
  .openapi(postSessionsSessionIdUserUserIdRoute, postSessionsSessionIdUserUserIdRouteHandler)
  .openapi(postSessionsSessionIdViewingRoute, postSessionsSessionIdViewingRouteHandler)
  .openapi(getShowsNextUpRoute, getShowsNextUpRouteHandler)
  .openapi(getShowsUpcomingRoute, getShowsUpcomingRouteHandler)
  .openapi(getShowsItemIdSimilarRoute, getShowsItemIdSimilarRouteHandler)
  .openapi(getShowsSeriesIdEpisodesRoute, getShowsSeriesIdEpisodesRouteHandler)
  .openapi(getShowsSeriesIdSeasonsRoute, getShowsSeriesIdSeasonsRouteHandler)
  .openapi(getSongsIdInstantMixRoute, getSongsIdInstantMixRouteHandler)
  .openapi(postStartupCompleteRoute, postStartupCompleteRouteHandler)
  .openapi(getStartupConfigurationRoute, getStartupConfigurationRouteHandler)
  .openapi(postStartupConfigurationRoute, postStartupConfigurationRouteHandler)
  .openapi(getStartupFirstUserRoute, getStartupFirstUserRouteHandler)
  .openapi(postStartupRemoteAccessRoute, postStartupRemoteAccessRouteHandler)
  .openapi(getStartupUserRoute, getStartupUserRouteHandler)
  .openapi(postStartupUserRoute, postStartupUserRouteHandler)
  .openapi(getStudiosRoute, getStudiosRouteHandler)
  .openapi(getStudiosNameRoute, getStudiosNameRouteHandler)
  .openapi(getStudiosNameImagesImageTypeRoute, getStudiosNameImagesImageTypeRouteHandler)
  .openapi(headStudiosNameImagesImageTypeRoute, headStudiosNameImagesImageTypeRouteHandler)
  .openapi(
    getStudiosNameImagesImageTypeImageIndexRoute,
    getStudiosNameImagesImageTypeImageIndexRouteHandler,
  )
  .openapi(
    headStudiosNameImagesImageTypeImageIndexRoute,
    headStudiosNameImagesImageTypeImageIndexRouteHandler,
  )
  .openapi(postSyncPlayBufferingRoute, postSyncPlayBufferingRouteHandler)
  .openapi(postSyncPlayJoinRoute, postSyncPlayJoinRouteHandler)
  .openapi(postSyncPlayLeaveRoute, postSyncPlayLeaveRouteHandler)
  .openapi(getSyncPlayListRoute, getSyncPlayListRouteHandler)
  .openapi(postSyncPlayMovePlaylistItemRoute, postSyncPlayMovePlaylistItemRouteHandler)
  .openapi(postSyncPlayNewRoute, postSyncPlayNewRouteHandler)
  .openapi(postSyncPlayNextItemRoute, postSyncPlayNextItemRouteHandler)
  .openapi(postSyncPlayPauseRoute, postSyncPlayPauseRouteHandler)
  .openapi(postSyncPlayPingRoute, postSyncPlayPingRouteHandler)
  .openapi(postSyncPlayPreviousItemRoute, postSyncPlayPreviousItemRouteHandler)
  .openapi(postSyncPlayQueueRoute, postSyncPlayQueueRouteHandler)
  .openapi(postSyncPlayReadyRoute, postSyncPlayReadyRouteHandler)
  .openapi(postSyncPlayRemoveFromPlaylistRoute, postSyncPlayRemoveFromPlaylistRouteHandler)
  .openapi(postSyncPlaySeekRoute, postSyncPlaySeekRouteHandler)
  .openapi(postSyncPlaySetIgnoreWaitRoute, postSyncPlaySetIgnoreWaitRouteHandler)
  .openapi(postSyncPlaySetNewQueueRoute, postSyncPlaySetNewQueueRouteHandler)
  .openapi(postSyncPlaySetPlaylistItemRoute, postSyncPlaySetPlaylistItemRouteHandler)
  .openapi(postSyncPlaySetRepeatModeRoute, postSyncPlaySetRepeatModeRouteHandler)
  .openapi(postSyncPlaySetShuffleModeRoute, postSyncPlaySetShuffleModeRouteHandler)
  .openapi(postSyncPlayStopRoute, postSyncPlayStopRouteHandler)
  .openapi(postSyncPlayUnpauseRoute, postSyncPlayUnpauseRouteHandler)
  .openapi(getSystemActivityLogEntriesRoute, getSystemActivityLogEntriesRouteHandler)
  .openapi(getSystemConfigurationRoute, getSystemConfigurationRouteHandler)
  .openapi(postSystemConfigurationRoute, postSystemConfigurationRouteHandler)
  .openapi(
    getSystemConfigurationMetadataOptionsDefaultRoute,
    getSystemConfigurationMetadataOptionsDefaultRouteHandler,
  )
  .openapi(getSystemConfigurationKeyRoute, getSystemConfigurationKeyRouteHandler)
  .openapi(postSystemConfigurationKeyRoute, postSystemConfigurationKeyRouteHandler)
  .openapi(getSystemEndpointRoute, getSystemEndpointRouteHandler)
  .openapi(getSystemInfoRoute, getSystemInfoRouteHandler)
  .openapi(getSystemInfoPublicRoute, getSystemInfoPublicRouteHandler)
  .openapi(getSystemLogsRoute, getSystemLogsRouteHandler)
  .openapi(getSystemLogsLogRoute, getSystemLogsLogRouteHandler)
  .openapi(postSystemMediaEncoderPathRoute, postSystemMediaEncoderPathRouteHandler)
  .openapi(getSystemPingRoute, getSystemPingRouteHandler)
  .openapi(postSystemPingRoute, postSystemPingRouteHandler)
  .openapi(postSystemRestartRoute, postSystemRestartRouteHandler)
  .openapi(postSystemShutdownRoute, postSystemShutdownRouteHandler)
  .openapi(getSystemWakeOnLanInfoRoute, getSystemWakeOnLanInfoRouteHandler)
  .openapi(getTrailersRoute, getTrailersRouteHandler)
  .openapi(getTrailersItemIdSimilarRoute, getTrailersItemIdSimilarRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersAuthenticateByNameRoute, postUsersAuthenticateByNameRouteHandler)
  .openapi(
    postUsersAuthenticateWithQuickConnectRoute,
    postUsersAuthenticateWithQuickConnectRouteHandler,
  )
  .openapi(postUsersForgotPasswordRoute, postUsersForgotPasswordRouteHandler)
  .openapi(postUsersForgotPasswordPinRoute, postUsersForgotPasswordPinRouteHandler)
  .openapi(getUsersMeRoute, getUsersMeRouteHandler)
  .openapi(postUsersNewRoute, postUsersNewRouteHandler)
  .openapi(getUsersPublicRoute, getUsersPublicRouteHandler)
  .openapi(deleteUsersUserIdRoute, deleteUsersUserIdRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(postUsersUserIdRoute, postUsersUserIdRouteHandler)
  .openapi(postUsersUserIdAuthenticateRoute, postUsersUserIdAuthenticateRouteHandler)
  .openapi(postUsersUserIdConfigurationRoute, postUsersUserIdConfigurationRouteHandler)
  .openapi(postUsersUserIdEasyPasswordRoute, postUsersUserIdEasyPasswordRouteHandler)
  .openapi(
    deleteUsersUserIdFavoriteItemsItemIdRoute,
    deleteUsersUserIdFavoriteItemsItemIdRouteHandler,
  )
  .openapi(postUsersUserIdFavoriteItemsItemIdRoute, postUsersUserIdFavoriteItemsItemIdRouteHandler)
  .openapi(getUsersUserIdGroupingOptionsRoute, getUsersUserIdGroupingOptionsRouteHandler)
  .openapi(deleteUsersUserIdImagesImageTypeRoute, deleteUsersUserIdImagesImageTypeRouteHandler)
  .openapi(getUsersUserIdImagesImageTypeRoute, getUsersUserIdImagesImageTypeRouteHandler)
  .openapi(headUsersUserIdImagesImageTypeRoute, headUsersUserIdImagesImageTypeRouteHandler)
  .openapi(postUsersUserIdImagesImageTypeRoute, postUsersUserIdImagesImageTypeRouteHandler)
  .openapi(
    getUsersUserIdImagesImageTypeImageIndexRoute,
    getUsersUserIdImagesImageTypeImageIndexRouteHandler,
  )
  .openapi(
    headUsersUserIdImagesImageTypeImageIndexRoute,
    headUsersUserIdImagesImageTypeImageIndexRouteHandler,
  )
  .openapi(
    deleteUsersUserIdImagesImageTypeIndexRoute,
    deleteUsersUserIdImagesImageTypeIndexRouteHandler,
  )
  .openapi(
    postUsersUserIdImagesImageTypeIndexRoute,
    postUsersUserIdImagesImageTypeIndexRouteHandler,
  )
  .openapi(getUsersUserIdItemsRoute, getUsersUserIdItemsRouteHandler)
  .openapi(getUsersUserIdItemsLatestRoute, getUsersUserIdItemsLatestRouteHandler)
  .openapi(getUsersUserIdItemsResumeRoute, getUsersUserIdItemsResumeRouteHandler)
  .openapi(getUsersUserIdItemsRootRoute, getUsersUserIdItemsRootRouteHandler)
  .openapi(getUsersUserIdItemsItemIdRoute, getUsersUserIdItemsItemIdRouteHandler)
  .openapi(getUsersUserIdItemsItemIdIntrosRoute, getUsersUserIdItemsItemIdIntrosRouteHandler)
  .openapi(
    getUsersUserIdItemsItemIdLocalTrailersRoute,
    getUsersUserIdItemsItemIdLocalTrailersRouteHandler,
  )
  .openapi(deleteUsersUserIdItemsItemIdRatingRoute, deleteUsersUserIdItemsItemIdRatingRouteHandler)
  .openapi(postUsersUserIdItemsItemIdRatingRoute, postUsersUserIdItemsItemIdRatingRouteHandler)
  .openapi(
    getUsersUserIdItemsItemIdSpecialFeaturesRoute,
    getUsersUserIdItemsItemIdSpecialFeaturesRouteHandler,
  )
  .openapi(postUsersUserIdPasswordRoute, postUsersUserIdPasswordRouteHandler)
  .openapi(deleteUsersUserIdPlayedItemsItemIdRoute, deleteUsersUserIdPlayedItemsItemIdRouteHandler)
  .openapi(postUsersUserIdPlayedItemsItemIdRoute, postUsersUserIdPlayedItemsItemIdRouteHandler)
  .openapi(
    deleteUsersUserIdPlayingItemsItemIdRoute,
    deleteUsersUserIdPlayingItemsItemIdRouteHandler,
  )
  .openapi(postUsersUserIdPlayingItemsItemIdRoute, postUsersUserIdPlayingItemsItemIdRouteHandler)
  .openapi(
    postUsersUserIdPlayingItemsItemIdProgressRoute,
    postUsersUserIdPlayingItemsItemIdProgressRouteHandler,
  )
  .openapi(postUsersUserIdPolicyRoute, postUsersUserIdPolicyRouteHandler)
  .openapi(getUsersUserIdSuggestionsRoute, getUsersUserIdSuggestionsRouteHandler)
  .openapi(getUsersUserIdViewsRoute, getUsersUserIdViewsRouteHandler)
  .openapi(deleteVideosActiveEncodingsRoute, deleteVideosActiveEncodingsRouteHandler)
  .openapi(postVideosMergeVersionsRoute, postVideosMergeVersionsRouteHandler)
  .openapi(getVideosItemIdAdditionalPartsRoute, getVideosItemIdAdditionalPartsRouteHandler)
  .openapi(deleteVideosItemIdAlternateSourcesRoute, deleteVideosItemIdAlternateSourcesRouteHandler)
  .openapi(postVideosItemIdSubtitlesRoute, postVideosItemIdSubtitlesRouteHandler)
  .openapi(deleteVideosItemIdSubtitlesIndexRoute, deleteVideosItemIdSubtitlesIndexRouteHandler)
  .openapi(
    getVideosItemIdHlsPlaylistIdStreamM3u8Route,
    getVideosItemIdHlsPlaylistIdStreamM3u8RouteHandler,
  )
  .openapi(
    getVideosItemIdHlsPlaylistIdSegmentIdSegmentContainerRoute,
    getVideosItemIdHlsPlaylistIdSegmentIdSegmentContainerRouteHandler,
  )
  .openapi(
    getVideosItemIdHls1PlaylistIdSegmentIdContainerRoute,
    getVideosItemIdHls1PlaylistIdSegmentIdContainerRouteHandler,
  )
  .openapi(getVideosItemIdLiveM3u8Route, getVideosItemIdLiveM3u8RouteHandler)
  .openapi(getVideosItemIdMainM3u8Route, getVideosItemIdMainM3u8RouteHandler)
  .openapi(getVideosItemIdMasterM3u8Route, getVideosItemIdMasterM3u8RouteHandler)
  .openapi(headVideosItemIdMasterM3u8Route, headVideosItemIdMasterM3u8RouteHandler)
  .openapi(getVideosItemIdStreamRoute, getVideosItemIdStreamRouteHandler)
  .openapi(headVideosItemIdStreamRoute, headVideosItemIdStreamRouteHandler)
  .openapi(
    getVideosItemIdMediaSourceIdSubtitlesIndexStreamFormatRoute,
    getVideosItemIdMediaSourceIdSubtitlesIndexStreamFormatRouteHandler,
  )
  .openapi(
    getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8Route,
    getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8RouteHandler,
  )
  .openapi(
    getVideosItemIdMediaSourceIdSubtitlesIndexStartPositionTicksStreamFormatRoute,
    getVideosItemIdMediaSourceIdSubtitlesIndexStartPositionTicksStreamFormatRouteHandler,
  )
  .openapi(getVideosItemIdStreamContainerRoute, getVideosItemIdStreamContainerRouteHandler)
  .openapi(headVideosItemIdStreamContainerRoute, headVideosItemIdStreamContainerRouteHandler)
  .openapi(
    getVideosVideoIdMediaSourceIdAttachmentsIndexRoute,
    getVideosVideoIdMediaSourceIdAttachmentsIndexRouteHandler,
  )
  .openapi(getYearsRoute, getYearsRouteHandler)
  .openapi(getYearsYearRoute, getYearsYearRouteHandler)
  .openapi(getWebConfigurationPageRoute, getWebConfigurationPageRouteHandler)
  .openapi(getWebConfigurationPagesRoute, getWebConfigurationPagesRouteHandler)

export default app
