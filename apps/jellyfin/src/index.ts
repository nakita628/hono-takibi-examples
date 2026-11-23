import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAudioItemIdLyricsRoute,
  deleteAuthKeysKeyRoute,
  deleteBrandingSplashscreenRoute,
  deleteCollectionsCollectionIdItemsRoute,
  deleteDevicesRoute,
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
  deletePlaylistsPlaylistIdUsersUserIdRoute,
  deletePluginsPluginIdRoute,
  deletePluginsPluginIdVersionRoute,
  deleteScheduledTasksRunningTaskIdRoute,
  deleteSessionsSessionIdUserUserIdRoute,
  deleteUserFavoriteItemsItemIdRoute,
  deleteUserImageRoute,
  deleteUserItemsItemIdRatingRoute,
  deleteUserPlayedItemsItemIdRoute,
  deleteUsersUserIdRoute,
  deleteVideosItemIdAlternateSourcesRoute,
  deleteVideosItemIdSubtitlesIndexRoute,
  getAlbumsItemIdInstantMixRoute,
  getAlbumsItemIdSimilarRoute,
  getArtistsAlbumArtistsRoute,
  getArtistsItemIdInstantMixRoute,
  getArtistsItemIdSimilarRoute,
  getArtistsNameImagesImageTypeImageIndexRoute,
  getArtistsNameRoute,
  getArtistsRoute,
  getAudioItemIdLyricsRoute,
  getAudioItemIdRemoteSearchLyricsRoute,
  getAudioItemIdStreamContainerRoute,
  getAudioItemIdStreamRoute,
  getAudioItemIdUniversalRoute,
  getAuthKeysRoute,
  getAuthPasswordResetProvidersRoute,
  getAuthProvidersRoute,
  getBackupManifestRoute,
  getBackupRoute,
  getBrandingConfigurationRoute,
  getBrandingCssCssRoute,
  getBrandingCssRoute,
  getBrandingSplashscreenRoute,
  getChannelsChannelIdFeaturesRoute,
  getChannelsChannelIdItemsRoute,
  getChannelsFeaturesRoute,
  getChannelsItemsLatestRoute,
  getChannelsRoute,
  getDevicesInfoRoute,
  getDevicesOptionsRoute,
  getDevicesRoute,
  getDisplayPreferencesDisplayPreferencesIdRoute,
  getEnvironmentDefaultDirectoryBrowserRoute,
  getEnvironmentDirectoryContentsRoute,
  getEnvironmentDrivesRoute,
  getEnvironmentParentPathRoute,
  getFallbackFontFontsNameRoute,
  getFallbackFontFontsRoute,
  getGenresGenreNameRoute,
  getGenresNameImagesImageTypeImageIndexRoute,
  getGenresNameImagesImageTypeRoute,
  getGenresRoute,
  getGetUtcTimeRoute,
  getItemsCountsRoute,
  getItemsFilters2Route,
  getItemsFiltersRoute,
  getItemsItemIdAncestorsRoute,
  getItemsItemIdCollectionsRoute,
  getItemsItemIdDownloadRoute,
  getItemsItemIdExternalIdInfosRoute,
  getItemsItemIdFileRoute,
  getItemsItemIdImagesImageTypeImageIndexRoute,
  getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountRoute,
  getItemsItemIdImagesImageTypeRoute,
  getItemsItemIdImagesRoute,
  getItemsItemIdInstantMixRoute,
  getItemsItemIdIntrosRoute,
  getItemsItemIdLocalTrailersRoute,
  getItemsItemIdMetadataEditorRoute,
  getItemsItemIdPlaybackInfoRoute,
  getItemsItemIdRemoteImagesProvidersRoute,
  getItemsItemIdRemoteImagesRoute,
  getItemsItemIdRemoteSearchSubtitlesLanguageRoute,
  getItemsItemIdRoute,
  getItemsItemIdSimilarRoute,
  getItemsItemIdSpecialFeaturesRoute,
  getItemsItemIdThemeMediaRoute,
  getItemsItemIdThemeSongsRoute,
  getItemsItemIdThemeVideosRoute,
  getItemsLatestRoute,
  getItemsRootRoute,
  getItemsRoute,
  getItemsSuggestionsRoute,
  getLibrariesAvailableOptionsRoute,
  getLibraryMediaFoldersRoute,
  getLibraryPhysicalPathsRoute,
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
  getLiveTvRecordingsRecordingIdRoute,
  getLiveTvRecordingsRoute,
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
  getMediaSegmentsItemIdRoute,
  getMoviesItemIdSimilarRoute,
  getMoviesRecommendationsRoute,
  getMusicGenresGenreNameRoute,
  getMusicGenresInstantMixRoute,
  getMusicGenresNameImagesImageTypeImageIndexRoute,
  getMusicGenresNameImagesImageTypeRoute,
  getMusicGenresNameInstantMixRoute,
  getPackagesNameRoute,
  getPackagesRoute,
  getPersonsNameImagesImageTypeImageIndexRoute,
  getPersonsNameImagesImageTypeRoute,
  getPersonsNameRoute,
  getPersonsRoute,
  getPlaybackBitrateTestRoute,
  getPlaylistsItemIdInstantMixRoute,
  getPlaylistsPlaylistIdItemsRoute,
  getPlaylistsPlaylistIdRoute,
  getPlaylistsPlaylistIdUsersRoute,
  getPlaylistsPlaylistIdUsersUserIdRoute,
  getPluginsPluginIdConfigurationRoute,
  getPluginsPluginIdVersionImageRoute,
  getPluginsRoute,
  getProvidersLyricsLyricIdRoute,
  getProvidersSubtitlesSubtitlesSubtitleIdRoute,
  getQuickConnectConnectRoute,
  getQuickConnectEnabledRoute,
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
  getSongsItemIdInstantMixRoute,
  getStartupConfigurationRoute,
  getStartupFirstUserRoute,
  getStartupUserRoute,
  getStudiosNameImagesImageTypeImageIndexRoute,
  getStudiosNameImagesImageTypeRoute,
  getStudiosNameRoute,
  getStudiosRoute,
  getSyncPlayIdRoute,
  getSyncPlayListRoute,
  getSystemActivityLogEntriesRoute,
  getSystemConfigurationKeyRoute,
  getSystemConfigurationMetadataOptionsDefaultRoute,
  getSystemConfigurationRoute,
  getSystemEndpointRoute,
  getSystemInfoPublicRoute,
  getSystemInfoRoute,
  getSystemInfoStorageRoute,
  getSystemLogsLogRoute,
  getSystemLogsRoute,
  getSystemPingRoute,
  getTrailersItemIdSimilarRoute,
  getTrailersRoute,
  getUserImageRoute,
  getUserItemsItemIdUserDataRoute,
  getUserItemsResumeRoute,
  getUsersMeRoute,
  getUsersPublicRoute,
  getUsersRoute,
  getUsersUserIdRoute,
  getUserViewsGroupingOptionsRoute,
  getUserViewsRoute,
  getVideosItemIdAdditionalPartsRoute,
  getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8Route,
  getVideosItemIdStreamContainerRoute,
  getVideosItemIdStreamRoute,
  getVideosItemIdTrickplayWidthIndexJpgRoute,
  getVideosItemIdTrickplayWidthTilesM3u8Route,
  getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexRouteStartPositionTicksStreamRouteFormatRoute,
  getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexStreamRouteFormatRoute,
  getVideosVideoIdMediaSourceIdAttachmentsIndexRoute,
  getWebConfigurationPageRoute,
  getWebConfigurationPagesRoute,
  getYearsRoute,
  getYearsYearRoute,
  headArtistsNameImagesImageTypeImageIndexRoute,
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
  headUserImageRoute,
  headVideosItemIdStreamContainerRoute,
  headVideosItemIdStreamRoute,
  postAudioItemIdLyricsRoute,
  postAudioItemIdRemoteSearchLyricsLyricIdRoute,
  postAuthKeysRoute,
  postBackupCreateRoute,
  postBackupRestoreRoute,
  postBrandingSplashscreenRoute,
  postClientLogDocumentRoute,
  postCollectionsCollectionIdItemsRoute,
  postCollectionsRoute,
  postDevicesOptionsRoute,
  postDisplayPreferencesDisplayPreferencesIdRoute,
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
  postLibraryRefreshRoute,
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
  postPackagesInstalledNameRoute,
  postPlaylistsPlaylistIdItemsItemIdMoveNewIndexRoute,
  postPlaylistsPlaylistIdItemsRoute,
  postPlaylistsPlaylistIdRoute,
  postPlaylistsPlaylistIdUsersUserIdRoute,
  postPlaylistsRoute,
  postPluginsPluginIdConfigurationRoute,
  postPluginsPluginIdManifestRoute,
  postPluginsPluginIdVersionDisableRoute,
  postPluginsPluginIdVersionEnableRoute,
  postQuickConnectAuthorizeRoute,
  postQuickConnectInitiateRoute,
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
  postSystemConfigurationBrandingRoute,
  postSystemConfigurationKeyRoute,
  postSystemConfigurationRoute,
  postSystemPingRoute,
  postSystemRestartRoute,
  postSystemShutdownRoute,
  postUserFavoriteItemsItemIdRoute,
  postUserImageRoute,
  postUserItemsItemIdRatingRoute,
  postUserItemsItemIdUserDataRoute,
  postUserPlayedItemsItemIdRoute,
  postUsersAuthenticateByNameRoute,
  postUsersAuthenticateWithQuickConnectRoute,
  postUsersConfigurationRoute,
  postUsersForgotPasswordPinRoute,
  postUsersForgotPasswordRoute,
  postUsersNewRoute,
  postUsersPasswordRoute,
  postUsersRoute,
  postUsersUserIdPolicyRoute,
  postVideosItemIdSubtitlesRoute,
  postVideosMergeVersionsRoute,
} from './routes'
import {
  deleteAudioItemIdLyricsRouteHandler,
  deleteAuthKeysKeyRouteHandler,
  deleteBrandingSplashscreenRouteHandler,
  deleteCollectionsCollectionIdItemsRouteHandler,
  deleteDevicesRouteHandler,
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
  deletePlaylistsPlaylistIdUsersUserIdRouteHandler,
  deletePluginsPluginIdRouteHandler,
  deletePluginsPluginIdVersionRouteHandler,
  deleteScheduledTasksRunningTaskIdRouteHandler,
  deleteSessionsSessionIdUserUserIdRouteHandler,
  deleteUserFavoriteItemsItemIdRouteHandler,
  deleteUserImageRouteHandler,
  deleteUserItemsItemIdRatingRouteHandler,
  deleteUserPlayedItemsItemIdRouteHandler,
  deleteUsersUserIdRouteHandler,
  deleteVideosItemIdAlternateSourcesRouteHandler,
  deleteVideosItemIdSubtitlesIndexRouteHandler,
  getAlbumsItemIdInstantMixRouteHandler,
  getAlbumsItemIdSimilarRouteHandler,
  getArtistsAlbumArtistsRouteHandler,
  getArtistsItemIdInstantMixRouteHandler,
  getArtistsItemIdSimilarRouteHandler,
  getArtistsNameImagesImageTypeImageIndexRouteHandler,
  getArtistsNameRouteHandler,
  getArtistsRouteHandler,
  getAudioItemIdLyricsRouteHandler,
  getAudioItemIdRemoteSearchLyricsRouteHandler,
  getAudioItemIdStreamContainerRouteHandler,
  getAudioItemIdStreamRouteHandler,
  getAudioItemIdUniversalRouteHandler,
  getAuthKeysRouteHandler,
  getAuthPasswordResetProvidersRouteHandler,
  getAuthProvidersRouteHandler,
  getBackupManifestRouteHandler,
  getBackupRouteHandler,
  getBrandingConfigurationRouteHandler,
  getBrandingCssCssRouteHandler,
  getBrandingCssRouteHandler,
  getBrandingSplashscreenRouteHandler,
  getChannelsChannelIdFeaturesRouteHandler,
  getChannelsChannelIdItemsRouteHandler,
  getChannelsFeaturesRouteHandler,
  getChannelsItemsLatestRouteHandler,
  getChannelsRouteHandler,
  getDevicesInfoRouteHandler,
  getDevicesOptionsRouteHandler,
  getDevicesRouteHandler,
  getDisplayPreferencesDisplayPreferencesIdRouteHandler,
  getEnvironmentDefaultDirectoryBrowserRouteHandler,
  getEnvironmentDirectoryContentsRouteHandler,
  getEnvironmentDrivesRouteHandler,
  getEnvironmentParentPathRouteHandler,
  getFallbackFontFontsNameRouteHandler,
  getFallbackFontFontsRouteHandler,
  getGenresGenreNameRouteHandler,
  getGenresNameImagesImageTypeImageIndexRouteHandler,
  getGenresNameImagesImageTypeRouteHandler,
  getGenresRouteHandler,
  getGetUtcTimeRouteHandler,
  getItemsCountsRouteHandler,
  getItemsFilters2RouteHandler,
  getItemsFiltersRouteHandler,
  getItemsItemIdAncestorsRouteHandler,
  getItemsItemIdCollectionsRouteHandler,
  getItemsItemIdDownloadRouteHandler,
  getItemsItemIdExternalIdInfosRouteHandler,
  getItemsItemIdFileRouteHandler,
  getItemsItemIdImagesImageTypeImageIndexRouteHandler,
  getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountRouteHandler,
  getItemsItemIdImagesImageTypeRouteHandler,
  getItemsItemIdImagesRouteHandler,
  getItemsItemIdInstantMixRouteHandler,
  getItemsItemIdIntrosRouteHandler,
  getItemsItemIdLocalTrailersRouteHandler,
  getItemsItemIdMetadataEditorRouteHandler,
  getItemsItemIdPlaybackInfoRouteHandler,
  getItemsItemIdRemoteImagesProvidersRouteHandler,
  getItemsItemIdRemoteImagesRouteHandler,
  getItemsItemIdRemoteSearchSubtitlesLanguageRouteHandler,
  getItemsItemIdRouteHandler,
  getItemsItemIdSimilarRouteHandler,
  getItemsItemIdSpecialFeaturesRouteHandler,
  getItemsItemIdThemeMediaRouteHandler,
  getItemsItemIdThemeSongsRouteHandler,
  getItemsItemIdThemeVideosRouteHandler,
  getItemsLatestRouteHandler,
  getItemsRootRouteHandler,
  getItemsRouteHandler,
  getItemsSuggestionsRouteHandler,
  getLibrariesAvailableOptionsRouteHandler,
  getLibraryMediaFoldersRouteHandler,
  getLibraryPhysicalPathsRouteHandler,
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
  getLiveTvRecordingsRecordingIdRouteHandler,
  getLiveTvRecordingsRouteHandler,
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
  getMediaSegmentsItemIdRouteHandler,
  getMoviesItemIdSimilarRouteHandler,
  getMoviesRecommendationsRouteHandler,
  getMusicGenresGenreNameRouteHandler,
  getMusicGenresInstantMixRouteHandler,
  getMusicGenresNameImagesImageTypeImageIndexRouteHandler,
  getMusicGenresNameImagesImageTypeRouteHandler,
  getMusicGenresNameInstantMixRouteHandler,
  getPackagesNameRouteHandler,
  getPackagesRouteHandler,
  getPersonsNameImagesImageTypeImageIndexRouteHandler,
  getPersonsNameImagesImageTypeRouteHandler,
  getPersonsNameRouteHandler,
  getPersonsRouteHandler,
  getPlaybackBitrateTestRouteHandler,
  getPlaylistsItemIdInstantMixRouteHandler,
  getPlaylistsPlaylistIdItemsRouteHandler,
  getPlaylistsPlaylistIdRouteHandler,
  getPlaylistsPlaylistIdUsersRouteHandler,
  getPlaylistsPlaylistIdUsersUserIdRouteHandler,
  getPluginsPluginIdConfigurationRouteHandler,
  getPluginsPluginIdVersionImageRouteHandler,
  getPluginsRouteHandler,
  getProvidersLyricsLyricIdRouteHandler,
  getProvidersSubtitlesSubtitlesSubtitleIdRouteHandler,
  getQuickConnectConnectRouteHandler,
  getQuickConnectEnabledRouteHandler,
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
  getSongsItemIdInstantMixRouteHandler,
  getStartupConfigurationRouteHandler,
  getStartupFirstUserRouteHandler,
  getStartupUserRouteHandler,
  getStudiosNameImagesImageTypeImageIndexRouteHandler,
  getStudiosNameImagesImageTypeRouteHandler,
  getStudiosNameRouteHandler,
  getStudiosRouteHandler,
  getSyncPlayIdRouteHandler,
  getSyncPlayListRouteHandler,
  getSystemActivityLogEntriesRouteHandler,
  getSystemConfigurationKeyRouteHandler,
  getSystemConfigurationMetadataOptionsDefaultRouteHandler,
  getSystemConfigurationRouteHandler,
  getSystemEndpointRouteHandler,
  getSystemInfoPublicRouteHandler,
  getSystemInfoRouteHandler,
  getSystemInfoStorageRouteHandler,
  getSystemLogsLogRouteHandler,
  getSystemLogsRouteHandler,
  getSystemPingRouteHandler,
  getTrailersItemIdSimilarRouteHandler,
  getTrailersRouteHandler,
  getUserImageRouteHandler,
  getUserItemsItemIdUserDataRouteHandler,
  getUserItemsResumeRouteHandler,
  getUsersMeRouteHandler,
  getUsersPublicRouteHandler,
  getUsersRouteHandler,
  getUsersUserIdRouteHandler,
  getUserViewsGroupingOptionsRouteHandler,
  getUserViewsRouteHandler,
  getVideosItemIdAdditionalPartsRouteHandler,
  getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8RouteHandler,
  getVideosItemIdStreamContainerRouteHandler,
  getVideosItemIdStreamRouteHandler,
  getVideosItemIdTrickplayWidthIndexJpgRouteHandler,
  getVideosItemIdTrickplayWidthTilesM3u8RouteHandler,
  getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexRouteStartPositionTicksStreamRouteFormatRouteHandler,
  getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexStreamRouteFormatRouteHandler,
  getVideosVideoIdMediaSourceIdAttachmentsIndexRouteHandler,
  getWebConfigurationPageRouteHandler,
  getWebConfigurationPagesRouteHandler,
  getYearsRouteHandler,
  getYearsYearRouteHandler,
  headArtistsNameImagesImageTypeImageIndexRouteHandler,
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
  headUserImageRouteHandler,
  headVideosItemIdStreamContainerRouteHandler,
  headVideosItemIdStreamRouteHandler,
  postAudioItemIdLyricsRouteHandler,
  postAudioItemIdRemoteSearchLyricsLyricIdRouteHandler,
  postAuthKeysRouteHandler,
  postBackupCreateRouteHandler,
  postBackupRestoreRouteHandler,
  postBrandingSplashscreenRouteHandler,
  postClientLogDocumentRouteHandler,
  postCollectionsCollectionIdItemsRouteHandler,
  postCollectionsRouteHandler,
  postDevicesOptionsRouteHandler,
  postDisplayPreferencesDisplayPreferencesIdRouteHandler,
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
  postLibraryRefreshRouteHandler,
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
  postPackagesInstalledNameRouteHandler,
  postPlaylistsPlaylistIdItemsItemIdMoveNewIndexRouteHandler,
  postPlaylistsPlaylistIdItemsRouteHandler,
  postPlaylistsPlaylistIdRouteHandler,
  postPlaylistsPlaylistIdUsersUserIdRouteHandler,
  postPlaylistsRouteHandler,
  postPluginsPluginIdConfigurationRouteHandler,
  postPluginsPluginIdManifestRouteHandler,
  postPluginsPluginIdVersionDisableRouteHandler,
  postPluginsPluginIdVersionEnableRouteHandler,
  postQuickConnectAuthorizeRouteHandler,
  postQuickConnectInitiateRouteHandler,
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
  postSystemConfigurationBrandingRouteHandler,
  postSystemConfigurationKeyRouteHandler,
  postSystemConfigurationRouteHandler,
  postSystemPingRouteHandler,
  postSystemRestartRouteHandler,
  postSystemShutdownRouteHandler,
  postUserFavoriteItemsItemIdRouteHandler,
  postUserImageRouteHandler,
  postUserItemsItemIdRatingRouteHandler,
  postUserItemsItemIdUserDataRouteHandler,
  postUserPlayedItemsItemIdRouteHandler,
  postUsersAuthenticateByNameRouteHandler,
  postUsersAuthenticateWithQuickConnectRouteHandler,
  postUsersConfigurationRouteHandler,
  postUsersForgotPasswordPinRouteHandler,
  postUsersForgotPasswordRouteHandler,
  postUsersNewRouteHandler,
  postUsersPasswordRouteHandler,
  postUsersRouteHandler,
  postUsersUserIdPolicyRouteHandler,
  postVideosItemIdSubtitlesRouteHandler,
  postVideosMergeVersionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getSystemActivityLogEntriesRoute, getSystemActivityLogEntriesRouteHandler)
  .openapi(getAuthKeysRoute, getAuthKeysRouteHandler)
  .openapi(postAuthKeysRoute, postAuthKeysRouteHandler)
  .openapi(deleteAuthKeysKeyRoute, deleteAuthKeysKeyRouteHandler)
  .openapi(getArtistsRoute, getArtistsRouteHandler)
  .openapi(getArtistsNameRoute, getArtistsNameRouteHandler)
  .openapi(getArtistsAlbumArtistsRoute, getArtistsAlbumArtistsRouteHandler)
  .openapi(getAudioItemIdStreamRoute, getAudioItemIdStreamRouteHandler)
  .openapi(headAudioItemIdStreamRoute, headAudioItemIdStreamRouteHandler)
  .openapi(getAudioItemIdStreamContainerRoute, getAudioItemIdStreamContainerRouteHandler)
  .openapi(headAudioItemIdStreamContainerRoute, headAudioItemIdStreamContainerRouteHandler)
  .openapi(getBackupRoute, getBackupRouteHandler)
  .openapi(postBackupCreateRoute, postBackupCreateRouteHandler)
  .openapi(getBackupManifestRoute, getBackupManifestRouteHandler)
  .openapi(postBackupRestoreRoute, postBackupRestoreRouteHandler)
  .openapi(getBrandingConfigurationRoute, getBrandingConfigurationRouteHandler)
  .openapi(getBrandingCssRoute, getBrandingCssRouteHandler)
  .openapi(getBrandingCssCssRoute, getBrandingCssCssRouteHandler)
  .openapi(getChannelsRoute, getChannelsRouteHandler)
  .openapi(getChannelsChannelIdFeaturesRoute, getChannelsChannelIdFeaturesRouteHandler)
  .openapi(getChannelsChannelIdItemsRoute, getChannelsChannelIdItemsRouteHandler)
  .openapi(getChannelsFeaturesRoute, getChannelsFeaturesRouteHandler)
  .openapi(getChannelsItemsLatestRoute, getChannelsItemsLatestRouteHandler)
  .openapi(postClientLogDocumentRoute, postClientLogDocumentRouteHandler)
  .openapi(postCollectionsRoute, postCollectionsRouteHandler)
  .openapi(postCollectionsCollectionIdItemsRoute, postCollectionsCollectionIdItemsRouteHandler)
  .openapi(deleteCollectionsCollectionIdItemsRoute, deleteCollectionsCollectionIdItemsRouteHandler)
  .openapi(getSystemConfigurationRoute, getSystemConfigurationRouteHandler)
  .openapi(postSystemConfigurationRoute, postSystemConfigurationRouteHandler)
  .openapi(getSystemConfigurationKeyRoute, getSystemConfigurationKeyRouteHandler)
  .openapi(postSystemConfigurationKeyRoute, postSystemConfigurationKeyRouteHandler)
  .openapi(postSystemConfigurationBrandingRoute, postSystemConfigurationBrandingRouteHandler)
  .openapi(
    getSystemConfigurationMetadataOptionsDefaultRoute,
    getSystemConfigurationMetadataOptionsDefaultRouteHandler,
  )
  .openapi(getWebConfigurationPageRoute, getWebConfigurationPageRouteHandler)
  .openapi(getWebConfigurationPagesRoute, getWebConfigurationPagesRouteHandler)
  .openapi(getDevicesRoute, getDevicesRouteHandler)
  .openapi(deleteDevicesRoute, deleteDevicesRouteHandler)
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
  .openapi(
    getEnvironmentDefaultDirectoryBrowserRoute,
    getEnvironmentDefaultDirectoryBrowserRouteHandler,
  )
  .openapi(getEnvironmentDirectoryContentsRoute, getEnvironmentDirectoryContentsRouteHandler)
  .openapi(getEnvironmentDrivesRoute, getEnvironmentDrivesRouteHandler)
  .openapi(getEnvironmentParentPathRoute, getEnvironmentParentPathRouteHandler)
  .openapi(postEnvironmentValidatePathRoute, postEnvironmentValidatePathRouteHandler)
  .openapi(getItemsFiltersRoute, getItemsFiltersRouteHandler)
  .openapi(getItemsFilters2Route, getItemsFilters2RouteHandler)
  .openapi(getGenresRoute, getGenresRouteHandler)
  .openapi(getGenresGenreNameRoute, getGenresGenreNameRouteHandler)
  .openapi(
    getArtistsNameImagesImageTypeImageIndexRoute,
    getArtistsNameImagesImageTypeImageIndexRouteHandler,
  )
  .openapi(
    headArtistsNameImagesImageTypeImageIndexRoute,
    headArtistsNameImagesImageTypeImageIndexRouteHandler,
  )
  .openapi(getBrandingSplashscreenRoute, getBrandingSplashscreenRouteHandler)
  .openapi(postBrandingSplashscreenRoute, postBrandingSplashscreenRouteHandler)
  .openapi(deleteBrandingSplashscreenRoute, deleteBrandingSplashscreenRouteHandler)
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
  .openapi(getItemsItemIdImagesRoute, getItemsItemIdImagesRouteHandler)
  .openapi(deleteItemsItemIdImagesImageTypeRoute, deleteItemsItemIdImagesImageTypeRouteHandler)
  .openapi(postItemsItemIdImagesImageTypeRoute, postItemsItemIdImagesImageTypeRouteHandler)
  .openapi(getItemsItemIdImagesImageTypeRoute, getItemsItemIdImagesImageTypeRouteHandler)
  .openapi(headItemsItemIdImagesImageTypeRoute, headItemsItemIdImagesImageTypeRouteHandler)
  .openapi(
    deleteItemsItemIdImagesImageTypeImageIndexRoute,
    deleteItemsItemIdImagesImageTypeImageIndexRouteHandler,
  )
  .openapi(
    postItemsItemIdImagesImageTypeImageIndexRoute,
    postItemsItemIdImagesImageTypeImageIndexRouteHandler,
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
    getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountRoute,
    getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountRouteHandler,
  )
  .openapi(
    headItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountRoute,
    headItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountRouteHandler,
  )
  .openapi(
    postItemsItemIdImagesImageTypeImageIndexIndexRoute,
    postItemsItemIdImagesImageTypeImageIndexIndexRouteHandler,
  )
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
  .openapi(postUserImageRoute, postUserImageRouteHandler)
  .openapi(deleteUserImageRoute, deleteUserImageRouteHandler)
  .openapi(getUserImageRoute, getUserImageRouteHandler)
  .openapi(headUserImageRoute, headUserImageRouteHandler)
  .openapi(getAlbumsItemIdInstantMixRoute, getAlbumsItemIdInstantMixRouteHandler)
  .openapi(getArtistsItemIdInstantMixRoute, getArtistsItemIdInstantMixRouteHandler)
  .openapi(getItemsItemIdInstantMixRoute, getItemsItemIdInstantMixRouteHandler)
  .openapi(getMusicGenresNameInstantMixRoute, getMusicGenresNameInstantMixRouteHandler)
  .openapi(getMusicGenresInstantMixRoute, getMusicGenresInstantMixRouteHandler)
  .openapi(getPlaylistsItemIdInstantMixRoute, getPlaylistsItemIdInstantMixRouteHandler)
  .openapi(getSongsItemIdInstantMixRoute, getSongsItemIdInstantMixRouteHandler)
  .openapi(getItemsItemIdExternalIdInfosRoute, getItemsItemIdExternalIdInfosRouteHandler)
  .openapi(postItemsRemoteSearchApplyItemIdRoute, postItemsRemoteSearchApplyItemIdRouteHandler)
  .openapi(postItemsRemoteSearchBookRoute, postItemsRemoteSearchBookRouteHandler)
  .openapi(postItemsRemoteSearchBoxSetRoute, postItemsRemoteSearchBoxSetRouteHandler)
  .openapi(postItemsRemoteSearchMovieRoute, postItemsRemoteSearchMovieRouteHandler)
  .openapi(postItemsRemoteSearchMusicAlbumRoute, postItemsRemoteSearchMusicAlbumRouteHandler)
  .openapi(postItemsRemoteSearchMusicArtistRoute, postItemsRemoteSearchMusicArtistRouteHandler)
  .openapi(postItemsRemoteSearchMusicVideoRoute, postItemsRemoteSearchMusicVideoRouteHandler)
  .openapi(postItemsRemoteSearchPersonRoute, postItemsRemoteSearchPersonRouteHandler)
  .openapi(postItemsRemoteSearchSeriesRoute, postItemsRemoteSearchSeriesRouteHandler)
  .openapi(postItemsRemoteSearchTrailerRoute, postItemsRemoteSearchTrailerRouteHandler)
  .openapi(postItemsItemIdRefreshRoute, postItemsItemIdRefreshRouteHandler)
  .openapi(getItemsRoute, getItemsRouteHandler)
  .openapi(deleteItemsRoute, deleteItemsRouteHandler)
  .openapi(getUserItemsItemIdUserDataRoute, getUserItemsItemIdUserDataRouteHandler)
  .openapi(postUserItemsItemIdUserDataRoute, postUserItemsItemIdUserDataRouteHandler)
  .openapi(getUserItemsResumeRoute, getUserItemsResumeRouteHandler)
  .openapi(postItemsItemIdRoute, postItemsItemIdRouteHandler)
  .openapi(deleteItemsItemIdRoute, deleteItemsItemIdRouteHandler)
  .openapi(getItemsItemIdRoute, getItemsItemIdRouteHandler)
  .openapi(postItemsItemIdContentTypeRoute, postItemsItemIdContentTypeRouteHandler)
  .openapi(getItemsItemIdMetadataEditorRoute, getItemsItemIdMetadataEditorRouteHandler)
  .openapi(getAlbumsItemIdSimilarRoute, getAlbumsItemIdSimilarRouteHandler)
  .openapi(getArtistsItemIdSimilarRoute, getArtistsItemIdSimilarRouteHandler)
  .openapi(getItemsItemIdAncestorsRoute, getItemsItemIdAncestorsRouteHandler)
  .openapi(getItemsItemIdCollectionsRoute, getItemsItemIdCollectionsRouteHandler)
  .openapi(getItemsItemIdDownloadRoute, getItemsItemIdDownloadRouteHandler)
  .openapi(getItemsItemIdFileRoute, getItemsItemIdFileRouteHandler)
  .openapi(getItemsItemIdSimilarRoute, getItemsItemIdSimilarRouteHandler)
  .openapi(getItemsItemIdThemeMediaRoute, getItemsItemIdThemeMediaRouteHandler)
  .openapi(getItemsItemIdThemeSongsRoute, getItemsItemIdThemeSongsRouteHandler)
  .openapi(getItemsItemIdThemeVideosRoute, getItemsItemIdThemeVideosRouteHandler)
  .openapi(getItemsCountsRoute, getItemsCountsRouteHandler)
  .openapi(getLibrariesAvailableOptionsRoute, getLibrariesAvailableOptionsRouteHandler)
  .openapi(postLibraryMediaUpdatedRoute, postLibraryMediaUpdatedRouteHandler)
  .openapi(getLibraryMediaFoldersRoute, getLibraryMediaFoldersRouteHandler)
  .openapi(postLibraryMoviesAddedRoute, postLibraryMoviesAddedRouteHandler)
  .openapi(postLibraryMoviesUpdatedRoute, postLibraryMoviesUpdatedRouteHandler)
  .openapi(getLibraryPhysicalPathsRoute, getLibraryPhysicalPathsRouteHandler)
  .openapi(postLibraryRefreshRoute, postLibraryRefreshRouteHandler)
  .openapi(postLibrarySeriesAddedRoute, postLibrarySeriesAddedRouteHandler)
  .openapi(postLibrarySeriesUpdatedRoute, postLibrarySeriesUpdatedRouteHandler)
  .openapi(getMoviesItemIdSimilarRoute, getMoviesItemIdSimilarRouteHandler)
  .openapi(getShowsItemIdSimilarRoute, getShowsItemIdSimilarRouteHandler)
  .openapi(getTrailersItemIdSimilarRoute, getTrailersItemIdSimilarRouteHandler)
  .openapi(getLibraryVirtualFoldersRoute, getLibraryVirtualFoldersRouteHandler)
  .openapi(postLibraryVirtualFoldersRoute, postLibraryVirtualFoldersRouteHandler)
  .openapi(deleteLibraryVirtualFoldersRoute, deleteLibraryVirtualFoldersRouteHandler)
  .openapi(
    postLibraryVirtualFoldersLibraryOptionsRoute,
    postLibraryVirtualFoldersLibraryOptionsRouteHandler,
  )
  .openapi(postLibraryVirtualFoldersNameRoute, postLibraryVirtualFoldersNameRouteHandler)
  .openapi(postLibraryVirtualFoldersPathsRoute, postLibraryVirtualFoldersPathsRouteHandler)
  .openapi(deleteLibraryVirtualFoldersPathsRoute, deleteLibraryVirtualFoldersPathsRouteHandler)
  .openapi(
    postLibraryVirtualFoldersPathsUpdateRoute,
    postLibraryVirtualFoldersPathsUpdateRouteHandler,
  )
  .openapi(getLiveTvChannelMappingOptionsRoute, getLiveTvChannelMappingOptionsRouteHandler)
  .openapi(postLiveTvChannelMappingsRoute, postLiveTvChannelMappingsRouteHandler)
  .openapi(getLiveTvChannelsRoute, getLiveTvChannelsRouteHandler)
  .openapi(getLiveTvChannelsChannelIdRoute, getLiveTvChannelsChannelIdRouteHandler)
  .openapi(getLiveTvGuideInfoRoute, getLiveTvGuideInfoRouteHandler)
  .openapi(getLiveTvInfoRoute, getLiveTvInfoRouteHandler)
  .openapi(postLiveTvListingProvidersRoute, postLiveTvListingProvidersRouteHandler)
  .openapi(deleteLiveTvListingProvidersRoute, deleteLiveTvListingProvidersRouteHandler)
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
  .openapi(getLiveTvProgramsProgramIdRoute, getLiveTvProgramsProgramIdRouteHandler)
  .openapi(getLiveTvProgramsRecommendedRoute, getLiveTvProgramsRecommendedRouteHandler)
  .openapi(getLiveTvRecordingsRoute, getLiveTvRecordingsRouteHandler)
  .openapi(getLiveTvRecordingsRecordingIdRoute, getLiveTvRecordingsRecordingIdRouteHandler)
  .openapi(deleteLiveTvRecordingsRecordingIdRoute, deleteLiveTvRecordingsRecordingIdRouteHandler)
  .openapi(getLiveTvRecordingsFoldersRoute, getLiveTvRecordingsFoldersRouteHandler)
  .openapi(getLiveTvSeriesTimersRoute, getLiveTvSeriesTimersRouteHandler)
  .openapi(postLiveTvSeriesTimersRoute, postLiveTvSeriesTimersRouteHandler)
  .openapi(getLiveTvSeriesTimersTimerIdRoute, getLiveTvSeriesTimersTimerIdRouteHandler)
  .openapi(deleteLiveTvSeriesTimersTimerIdRoute, deleteLiveTvSeriesTimersTimerIdRouteHandler)
  .openapi(postLiveTvSeriesTimersTimerIdRoute, postLiveTvSeriesTimersTimerIdRouteHandler)
  .openapi(getLiveTvTimersRoute, getLiveTvTimersRouteHandler)
  .openapi(postLiveTvTimersRoute, postLiveTvTimersRouteHandler)
  .openapi(getLiveTvTimersTimerIdRoute, getLiveTvTimersTimerIdRouteHandler)
  .openapi(deleteLiveTvTimersTimerIdRoute, deleteLiveTvTimersTimerIdRouteHandler)
  .openapi(postLiveTvTimersTimerIdRoute, postLiveTvTimersTimerIdRouteHandler)
  .openapi(getLiveTvTimersDefaultsRoute, getLiveTvTimersDefaultsRouteHandler)
  .openapi(postLiveTvTunerHostsRoute, postLiveTvTunerHostsRouteHandler)
  .openapi(deleteLiveTvTunerHostsRoute, deleteLiveTvTunerHostsRouteHandler)
  .openapi(getLiveTvTunerHostsTypesRoute, getLiveTvTunerHostsTypesRouteHandler)
  .openapi(postLiveTvTunersTunerIdResetRoute, postLiveTvTunersTunerIdResetRouteHandler)
  .openapi(getLiveTvTunersDiscoverRoute, getLiveTvTunersDiscoverRouteHandler)
  .openapi(getLiveTvTunersDiscvoverRoute, getLiveTvTunersDiscvoverRouteHandler)
  .openapi(getLocalizationCountriesRoute, getLocalizationCountriesRouteHandler)
  .openapi(getLocalizationCulturesRoute, getLocalizationCulturesRouteHandler)
  .openapi(getLocalizationOptionsRoute, getLocalizationOptionsRouteHandler)
  .openapi(getLocalizationParentalRatingsRoute, getLocalizationParentalRatingsRouteHandler)
  .openapi(getAudioItemIdLyricsRoute, getAudioItemIdLyricsRouteHandler)
  .openapi(postAudioItemIdLyricsRoute, postAudioItemIdLyricsRouteHandler)
  .openapi(deleteAudioItemIdLyricsRoute, deleteAudioItemIdLyricsRouteHandler)
  .openapi(getAudioItemIdRemoteSearchLyricsRoute, getAudioItemIdRemoteSearchLyricsRouteHandler)
  .openapi(
    postAudioItemIdRemoteSearchLyricsLyricIdRoute,
    postAudioItemIdRemoteSearchLyricsLyricIdRouteHandler,
  )
  .openapi(getProvidersLyricsLyricIdRoute, getProvidersLyricsLyricIdRouteHandler)
  .openapi(getItemsItemIdPlaybackInfoRoute, getItemsItemIdPlaybackInfoRouteHandler)
  .openapi(postItemsItemIdPlaybackInfoRoute, postItemsItemIdPlaybackInfoRouteHandler)
  .openapi(postLiveStreamsCloseRoute, postLiveStreamsCloseRouteHandler)
  .openapi(postLiveStreamsOpenRoute, postLiveStreamsOpenRouteHandler)
  .openapi(getPlaybackBitrateTestRoute, getPlaybackBitrateTestRouteHandler)
  .openapi(getMediaSegmentsItemIdRoute, getMediaSegmentsItemIdRouteHandler)
  .openapi(getMoviesRecommendationsRoute, getMoviesRecommendationsRouteHandler)
  .openapi(getMusicGenresGenreNameRoute, getMusicGenresGenreNameRouteHandler)
  .openapi(getPackagesRoute, getPackagesRouteHandler)
  .openapi(getPackagesNameRoute, getPackagesNameRouteHandler)
  .openapi(postPackagesInstalledNameRoute, postPackagesInstalledNameRouteHandler)
  .openapi(deletePackagesInstallingPackageIdRoute, deletePackagesInstallingPackageIdRouteHandler)
  .openapi(getRepositoriesRoute, getRepositoriesRouteHandler)
  .openapi(postRepositoriesRoute, postRepositoriesRouteHandler)
  .openapi(getPersonsRoute, getPersonsRouteHandler)
  .openapi(getPersonsNameRoute, getPersonsNameRouteHandler)
  .openapi(postPlaylistsRoute, postPlaylistsRouteHandler)
  .openapi(postPlaylistsPlaylistIdRoute, postPlaylistsPlaylistIdRouteHandler)
  .openapi(getPlaylistsPlaylistIdRoute, getPlaylistsPlaylistIdRouteHandler)
  .openapi(postPlaylistsPlaylistIdItemsRoute, postPlaylistsPlaylistIdItemsRouteHandler)
  .openapi(deletePlaylistsPlaylistIdItemsRoute, deletePlaylistsPlaylistIdItemsRouteHandler)
  .openapi(getPlaylistsPlaylistIdItemsRoute, getPlaylistsPlaylistIdItemsRouteHandler)
  .openapi(
    postPlaylistsPlaylistIdItemsItemIdMoveNewIndexRoute,
    postPlaylistsPlaylistIdItemsItemIdMoveNewIndexRouteHandler,
  )
  .openapi(getPlaylistsPlaylistIdUsersRoute, getPlaylistsPlaylistIdUsersRouteHandler)
  .openapi(getPlaylistsPlaylistIdUsersUserIdRoute, getPlaylistsPlaylistIdUsersUserIdRouteHandler)
  .openapi(postPlaylistsPlaylistIdUsersUserIdRoute, postPlaylistsPlaylistIdUsersUserIdRouteHandler)
  .openapi(
    deletePlaylistsPlaylistIdUsersUserIdRoute,
    deletePlaylistsPlaylistIdUsersUserIdRouteHandler,
  )
  .openapi(postSessionsPlayingRoute, postSessionsPlayingRouteHandler)
  .openapi(postSessionsPlayingPingRoute, postSessionsPlayingPingRouteHandler)
  .openapi(postSessionsPlayingProgressRoute, postSessionsPlayingProgressRouteHandler)
  .openapi(postSessionsPlayingStoppedRoute, postSessionsPlayingStoppedRouteHandler)
  .openapi(postUserPlayedItemsItemIdRoute, postUserPlayedItemsItemIdRouteHandler)
  .openapi(deleteUserPlayedItemsItemIdRoute, deleteUserPlayedItemsItemIdRouteHandler)
  .openapi(getPluginsRoute, getPluginsRouteHandler)
  .openapi(deletePluginsPluginIdRoute, deletePluginsPluginIdRouteHandler)
  .openapi(deletePluginsPluginIdVersionRoute, deletePluginsPluginIdVersionRouteHandler)
  .openapi(postPluginsPluginIdVersionDisableRoute, postPluginsPluginIdVersionDisableRouteHandler)
  .openapi(postPluginsPluginIdVersionEnableRoute, postPluginsPluginIdVersionEnableRouteHandler)
  .openapi(getPluginsPluginIdVersionImageRoute, getPluginsPluginIdVersionImageRouteHandler)
  .openapi(getPluginsPluginIdConfigurationRoute, getPluginsPluginIdConfigurationRouteHandler)
  .openapi(postPluginsPluginIdConfigurationRoute, postPluginsPluginIdConfigurationRouteHandler)
  .openapi(postPluginsPluginIdManifestRoute, postPluginsPluginIdManifestRouteHandler)
  .openapi(postQuickConnectAuthorizeRoute, postQuickConnectAuthorizeRouteHandler)
  .openapi(getQuickConnectConnectRoute, getQuickConnectConnectRouteHandler)
  .openapi(getQuickConnectEnabledRoute, getQuickConnectEnabledRouteHandler)
  .openapi(postQuickConnectInitiateRoute, postQuickConnectInitiateRouteHandler)
  .openapi(getItemsItemIdRemoteImagesRoute, getItemsItemIdRemoteImagesRouteHandler)
  .openapi(
    postItemsItemIdRemoteImagesDownloadRoute,
    postItemsItemIdRemoteImagesDownloadRouteHandler,
  )
  .openapi(
    getItemsItemIdRemoteImagesProvidersRoute,
    getItemsItemIdRemoteImagesProvidersRouteHandler,
  )
  .openapi(getScheduledTasksRoute, getScheduledTasksRouteHandler)
  .openapi(getScheduledTasksTaskIdRoute, getScheduledTasksTaskIdRouteHandler)
  .openapi(postScheduledTasksTaskIdTriggersRoute, postScheduledTasksTaskIdTriggersRouteHandler)
  .openapi(postScheduledTasksRunningTaskIdRoute, postScheduledTasksRunningTaskIdRouteHandler)
  .openapi(deleteScheduledTasksRunningTaskIdRoute, deleteScheduledTasksRunningTaskIdRouteHandler)
  .openapi(getSearchHintsRoute, getSearchHintsRouteHandler)
  .openapi(getAuthPasswordResetProvidersRoute, getAuthPasswordResetProvidersRouteHandler)
  .openapi(getAuthProvidersRoute, getAuthProvidersRouteHandler)
  .openapi(getSessionsRoute, getSessionsRouteHandler)
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
  .openapi(postSessionsSessionIdUserUserIdRoute, postSessionsSessionIdUserUserIdRouteHandler)
  .openapi(deleteSessionsSessionIdUserUserIdRoute, deleteSessionsSessionIdUserUserIdRouteHandler)
  .openapi(postSessionsSessionIdViewingRoute, postSessionsSessionIdViewingRouteHandler)
  .openapi(postSessionsCapabilitiesRoute, postSessionsCapabilitiesRouteHandler)
  .openapi(postSessionsCapabilitiesFullRoute, postSessionsCapabilitiesFullRouteHandler)
  .openapi(postSessionsLogoutRoute, postSessionsLogoutRouteHandler)
  .openapi(postSessionsViewingRoute, postSessionsViewingRouteHandler)
  .openapi(postStartupCompleteRoute, postStartupCompleteRouteHandler)
  .openapi(getStartupConfigurationRoute, getStartupConfigurationRouteHandler)
  .openapi(postStartupConfigurationRoute, postStartupConfigurationRouteHandler)
  .openapi(getStartupFirstUserRoute, getStartupFirstUserRouteHandler)
  .openapi(postStartupRemoteAccessRoute, postStartupRemoteAccessRouteHandler)
  .openapi(getStartupUserRoute, getStartupUserRouteHandler)
  .openapi(postStartupUserRoute, postStartupUserRouteHandler)
  .openapi(getStudiosRoute, getStudiosRouteHandler)
  .openapi(getStudiosNameRoute, getStudiosNameRouteHandler)
  .openapi(getFallbackFontFontsRoute, getFallbackFontFontsRouteHandler)
  .openapi(getFallbackFontFontsNameRoute, getFallbackFontFontsNameRouteHandler)
  .openapi(
    getItemsItemIdRemoteSearchSubtitlesLanguageRoute,
    getItemsItemIdRemoteSearchSubtitlesLanguageRouteHandler,
  )
  .openapi(
    postItemsItemIdRemoteSearchSubtitlesSubtitleIdRoute,
    postItemsItemIdRemoteSearchSubtitlesSubtitleIdRouteHandler,
  )
  .openapi(
    getProvidersSubtitlesSubtitlesSubtitleIdRoute,
    getProvidersSubtitlesSubtitlesSubtitleIdRouteHandler,
  )
  .openapi(
    getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8Route,
    getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8RouteHandler,
  )
  .openapi(postVideosItemIdSubtitlesRoute, postVideosItemIdSubtitlesRouteHandler)
  .openapi(deleteVideosItemIdSubtitlesIndexRoute, deleteVideosItemIdSubtitlesIndexRouteHandler)
  .openapi(
    getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexRouteStartPositionTicksStreamRouteFormatRoute,
    getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexRouteStartPositionTicksStreamRouteFormatRouteHandler,
  )
  .openapi(
    getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexStreamRouteFormatRoute,
    getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexStreamRouteFormatRouteHandler,
  )
  .openapi(getItemsSuggestionsRoute, getItemsSuggestionsRouteHandler)
  .openapi(getSyncPlayIdRoute, getSyncPlayIdRouteHandler)
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
  .openapi(getSystemEndpointRoute, getSystemEndpointRouteHandler)
  .openapi(getSystemInfoRoute, getSystemInfoRouteHandler)
  .openapi(getSystemInfoPublicRoute, getSystemInfoPublicRouteHandler)
  .openapi(getSystemInfoStorageRoute, getSystemInfoStorageRouteHandler)
  .openapi(getSystemLogsRoute, getSystemLogsRouteHandler)
  .openapi(getSystemLogsLogRoute, getSystemLogsLogRouteHandler)
  .openapi(getSystemPingRoute, getSystemPingRouteHandler)
  .openapi(postSystemPingRoute, postSystemPingRouteHandler)
  .openapi(postSystemRestartRoute, postSystemRestartRouteHandler)
  .openapi(postSystemShutdownRoute, postSystemShutdownRouteHandler)
  .openapi(getGetUtcTimeRoute, getGetUtcTimeRouteHandler)
  .openapi(getTrailersRoute, getTrailersRouteHandler)
  .openapi(
    getVideosItemIdTrickplayWidthIndexJpgRoute,
    getVideosItemIdTrickplayWidthIndexJpgRouteHandler,
  )
  .openapi(
    getVideosItemIdTrickplayWidthTilesM3u8Route,
    getVideosItemIdTrickplayWidthTilesM3u8RouteHandler,
  )
  .openapi(getShowsSeriesIdEpisodesRoute, getShowsSeriesIdEpisodesRouteHandler)
  .openapi(getShowsSeriesIdSeasonsRoute, getShowsSeriesIdSeasonsRouteHandler)
  .openapi(getShowsNextUpRoute, getShowsNextUpRouteHandler)
  .openapi(getShowsUpcomingRoute, getShowsUpcomingRouteHandler)
  .openapi(getAudioItemIdUniversalRoute, getAudioItemIdUniversalRouteHandler)
  .openapi(headAudioItemIdUniversalRoute, headAudioItemIdUniversalRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(deleteUsersUserIdRoute, deleteUsersUserIdRouteHandler)
  .openapi(postUsersUserIdPolicyRoute, postUsersUserIdPolicyRouteHandler)
  .openapi(postUsersAuthenticateByNameRoute, postUsersAuthenticateByNameRouteHandler)
  .openapi(
    postUsersAuthenticateWithQuickConnectRoute,
    postUsersAuthenticateWithQuickConnectRouteHandler,
  )
  .openapi(postUsersConfigurationRoute, postUsersConfigurationRouteHandler)
  .openapi(postUsersForgotPasswordRoute, postUsersForgotPasswordRouteHandler)
  .openapi(postUsersForgotPasswordPinRoute, postUsersForgotPasswordPinRouteHandler)
  .openapi(getUsersMeRoute, getUsersMeRouteHandler)
  .openapi(postUsersNewRoute, postUsersNewRouteHandler)
  .openapi(postUsersPasswordRoute, postUsersPasswordRouteHandler)
  .openapi(getUsersPublicRoute, getUsersPublicRouteHandler)
  .openapi(getItemsItemIdIntrosRoute, getItemsItemIdIntrosRouteHandler)
  .openapi(getItemsItemIdLocalTrailersRoute, getItemsItemIdLocalTrailersRouteHandler)
  .openapi(getItemsItemIdSpecialFeaturesRoute, getItemsItemIdSpecialFeaturesRouteHandler)
  .openapi(getItemsLatestRoute, getItemsLatestRouteHandler)
  .openapi(getItemsRootRoute, getItemsRootRouteHandler)
  .openapi(postUserFavoriteItemsItemIdRoute, postUserFavoriteItemsItemIdRouteHandler)
  .openapi(deleteUserFavoriteItemsItemIdRoute, deleteUserFavoriteItemsItemIdRouteHandler)
  .openapi(deleteUserItemsItemIdRatingRoute, deleteUserItemsItemIdRatingRouteHandler)
  .openapi(postUserItemsItemIdRatingRoute, postUserItemsItemIdRatingRouteHandler)
  .openapi(getUserViewsRoute, getUserViewsRouteHandler)
  .openapi(getUserViewsGroupingOptionsRoute, getUserViewsGroupingOptionsRouteHandler)
  .openapi(
    getVideosVideoIdMediaSourceIdAttachmentsIndexRoute,
    getVideosVideoIdMediaSourceIdAttachmentsIndexRouteHandler,
  )
  .openapi(getVideosItemIdAdditionalPartsRoute, getVideosItemIdAdditionalPartsRouteHandler)
  .openapi(deleteVideosItemIdAlternateSourcesRoute, deleteVideosItemIdAlternateSourcesRouteHandler)
  .openapi(getVideosItemIdStreamRoute, getVideosItemIdStreamRouteHandler)
  .openapi(headVideosItemIdStreamRoute, headVideosItemIdStreamRouteHandler)
  .openapi(getVideosItemIdStreamContainerRoute, getVideosItemIdStreamContainerRouteHandler)
  .openapi(headVideosItemIdStreamContainerRoute, headVideosItemIdStreamContainerRouteHandler)
  .openapi(postVideosMergeVersionsRoute, postVideosMergeVersionsRouteHandler)
  .openapi(getYearsRoute, getYearsRouteHandler)
  .openapi(getYearsYearRoute, getYearsYearRouteHandler)

export default app
