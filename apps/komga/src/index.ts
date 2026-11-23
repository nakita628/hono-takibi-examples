import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1BooksBookIdFileRoute,
  deleteApiV1BooksBookIdReadProgressRoute,
  deleteApiV1BooksBookIdThumbnailsThumbnailIdRoute,
  deleteApiV1ClientSettingsGlobalRoute,
  deleteApiV1ClientSettingsUserRoute,
  deleteApiV1CollectionsIdRoute,
  deleteApiV1CollectionsIdThumbnailsThumbnailIdRoute,
  deleteApiV1LibrariesLibraryIdRoute,
  deleteApiV1ReadlistsIdRoute,
  deleteApiV1ReadlistsIdThumbnailsThumbnailIdRoute,
  deleteApiV1SeriesSeriesIdFileRoute,
  deleteApiV1SeriesSeriesIdReadProgressRoute,
  deleteApiV1SeriesSeriesIdThumbnailsThumbnailIdRoute,
  deleteApiV1SyncpointsMeRoute,
  deleteApiV1TasksRoute,
  deleteApiV2UsersIdRoute,
  deleteApiV2UsersMeApiKeysKeyIdRoute,
  getActuatorInfoRoute,
  getApiLogoutRoute,
  getApiV1AgeRatingsRoute,
  getApiV1AnnouncementsRoute,
  getApiV1AuthorsNamesRoute,
  getApiV1AuthorsRolesRoute,
  getApiV1AuthorsRoute,
  getApiV1BooksBookIdFileRoute,
  getApiV1BooksBookIdFileStarRoute,
  getApiV1BooksBookIdManifestDivinaRoute,
  getApiV1BooksBookIdManifestEpubRoute,
  getApiV1BooksBookIdManifestPdfRoute,
  getApiV1BooksBookIdManifestRoute,
  getApiV1BooksBookIdNextRoute,
  getApiV1BooksBookIdPagesPageNumberRawRoute,
  getApiV1BooksBookIdPagesPageNumberRoute,
  getApiV1BooksBookIdPagesPageNumberThumbnailRoute,
  getApiV1BooksBookIdPagesRoute,
  getApiV1BooksBookIdPositionsRoute,
  getApiV1BooksBookIdPreviousRoute,
  getApiV1BooksBookIdProgressionRoute,
  getApiV1BooksBookIdReadlistsRoute,
  getApiV1BooksBookIdResourceResourceRoute,
  getApiV1BooksBookIdRoute,
  getApiV1BooksBookIdThumbnailRoute,
  getApiV1BooksBookIdThumbnailsRoute,
  getApiV1BooksBookIdThumbnailsThumbnailIdRoute,
  getApiV1BooksDuplicatesRoute,
  getApiV1BooksLatestRoute,
  getApiV1BooksOndeckRoute,
  getApiV1BooksRoute,
  getApiV1ClaimRoute,
  getApiV1ClientSettingsGlobalListRoute,
  getApiV1ClientSettingsUserListRoute,
  getApiV1CollectionsIdRoute,
  getApiV1CollectionsIdSeriesRoute,
  getApiV1CollectionsIdThumbnailRoute,
  getApiV1CollectionsIdThumbnailsRoute,
  getApiV1CollectionsIdThumbnailsThumbnailIdRoute,
  getApiV1CollectionsRoute,
  getApiV1FontsFamiliesRoute,
  getApiV1FontsResourceFontFamilyCssRoute,
  getApiV1FontsResourceFontFamilyFontFileRoute,
  getApiV1GenresRoute,
  getApiV1HistoryRoute,
  getApiV1LanguagesRoute,
  getApiV1LibrariesLibraryIdRoute,
  getApiV1LibrariesRoute,
  getApiV1LoginSetCookieRoute,
  getApiV1Oauth2ProvidersRoute,
  getApiV1PageHashesPageHashRoute,
  getApiV1PageHashesPageHashThumbnailRoute,
  getApiV1PageHashesRoute,
  getApiV1PageHashesUnknownPageHashThumbnailRoute,
  getApiV1PageHashesUnknownRoute,
  getApiV1PublishersRoute,
  getApiV1ReadlistsIdBooksBookIdNextRoute,
  getApiV1ReadlistsIdBooksBookIdPreviousRoute,
  getApiV1ReadlistsIdBooksRoute,
  getApiV1ReadlistsIdFileRoute,
  getApiV1ReadlistsIdReadProgressTachiyomiRoute,
  getApiV1ReadlistsIdRoute,
  getApiV1ReadlistsIdThumbnailRoute,
  getApiV1ReadlistsIdThumbnailsRoute,
  getApiV1ReadlistsIdThumbnailsThumbnailIdRoute,
  getApiV1ReadlistsRoute,
  getApiV1ReleasesRoute,
  getApiV1SeriesAlphabeticalGroupsRoute,
  getApiV1SeriesLatestRoute,
  getApiV1SeriesNewRoute,
  getApiV1SeriesReleaseDatesRoute,
  getApiV1SeriesRoute,
  getApiV1SeriesSeriesIdBooksRoute,
  getApiV1SeriesSeriesIdCollectionsRoute,
  getApiV1SeriesSeriesIdFileRoute,
  getApiV1SeriesSeriesIdRoute,
  getApiV1SeriesSeriesIdThumbnailRoute,
  getApiV1SeriesSeriesIdThumbnailsRoute,
  getApiV1SeriesSeriesIdThumbnailsThumbnailIdRoute,
  getApiV1SeriesUpdatedRoute,
  getApiV1SettingsRoute,
  getApiV1SharingLabelsRoute,
  getApiV1TagsBookRoute,
  getApiV1TagsRoute,
  getApiV1TagsSeriesRoute,
  getApiV1TransientBooksIdPagesPageNumberRoute,
  getApiV2AgeRatingsRoute,
  getApiV2AuthorsNamesRoute,
  getApiV2AuthorsRolesRoute,
  getApiV2AuthorsRoute,
  getApiV2GenresRoute,
  getApiV2LanguagesRoute,
  getApiV2PublishersRoute,
  getApiV2SeriesReleaseYearsRoute,
  getApiV2SeriesSeriesIdReadProgressTachiyomiRoute,
  getApiV2SharingLabelsRoute,
  getApiV2TagsRoute,
  getApiV2UsersAuthenticationActivityRoute,
  getApiV2UsersIdAuthenticationActivityLatestRoute,
  getApiV2UsersMeApiKeysRoute,
  getApiV2UsersMeAuthenticationActivityRoute,
  getApiV2UsersMeRoute,
  getApiV2UsersRoute,
  getApiV3NotableEntitiesKindsRoute,
  getApiV3NotableEntitiesNamesRoute,
  getApiV3NotableEntitiesRoute,
  patchApiV1BooksBookIdMetadataRoute,
  patchApiV1BooksBookIdReadProgressRoute,
  patchApiV1BooksMetadataRoute,
  patchApiV1ClientSettingsGlobalRoute,
  patchApiV1ClientSettingsUserRoute,
  patchApiV1CollectionsIdRoute,
  patchApiV1LibrariesLibraryIdRoute,
  patchApiV1ReadlistsIdRoute,
  patchApiV1SeriesSeriesIdMetadataRoute,
  patchApiV1SettingsRoute,
  patchApiV2UsersIdPasswordRoute,
  patchApiV2UsersIdRoute,
  patchApiV2UsersMePasswordRoute,
  postApiLogoutRoute,
  postApiV1BooksBookIdAnalyzeRoute,
  postApiV1BooksBookIdMetadataRefreshRoute,
  postApiV1BooksBookIdThumbnailsRoute,
  postApiV1BooksImportRoute,
  postApiV1BooksListRoute,
  postApiV1ClaimRoute,
  postApiV1CollectionsIdThumbnailsRoute,
  postApiV1CollectionsRoute,
  postApiV1FilesystemRoute,
  postApiV1LibrariesLibraryIdAnalyzeRoute,
  postApiV1LibrariesLibraryIdEmptyTrashRoute,
  postApiV1LibrariesLibraryIdMetadataRefreshRoute,
  postApiV1LibrariesLibraryIdScanRoute,
  postApiV1LibrariesRoute,
  postApiV1PageHashesPageHashDeleteAllRoute,
  postApiV1PageHashesPageHashDeleteMatchRoute,
  postApiV1ReadlistsIdThumbnailsRoute,
  postApiV1ReadlistsMatchComicrackRoute,
  postApiV1ReadlistsRoute,
  postApiV1SeriesListAlphabeticalGroupsRoute,
  postApiV1SeriesListRoute,
  postApiV1SeriesSeriesIdAnalyzeRoute,
  postApiV1SeriesSeriesIdMetadataRefreshRoute,
  postApiV1SeriesSeriesIdReadProgressRoute,
  postApiV1SeriesSeriesIdThumbnailsRoute,
  postApiV1TransientBooksIdAnalyzeRoute,
  postApiV1TransientBooksRoute,
  postApiV2UsersMeApiKeysRoute,
  postApiV2UsersRoute,
  putApiV1AnnouncementsRoute,
  putApiV1BooksBookIdProgressionRoute,
  putApiV1BooksBookIdThumbnailsThumbnailIdSelectedRoute,
  putApiV1BooksThumbnailsRoute,
  putApiV1CollectionsIdThumbnailsThumbnailIdSelectedRoute,
  putApiV1LibrariesLibraryIdRoute,
  putApiV1PageHashesRoute,
  putApiV1ReadlistsIdReadProgressTachiyomiRoute,
  putApiV1ReadlistsIdThumbnailsThumbnailIdSelectedRoute,
  putApiV1SeriesSeriesIdThumbnailsThumbnailIdSelectedRoute,
  putApiV2SeriesSeriesIdReadProgressTachiyomiRoute,
} from './routes'
import {
  deleteApiV1BooksBookIdFileRouteHandler,
  deleteApiV1BooksBookIdReadProgressRouteHandler,
  deleteApiV1BooksBookIdThumbnailsThumbnailIdRouteHandler,
  deleteApiV1ClientSettingsGlobalRouteHandler,
  deleteApiV1ClientSettingsUserRouteHandler,
  deleteApiV1CollectionsIdRouteHandler,
  deleteApiV1CollectionsIdThumbnailsThumbnailIdRouteHandler,
  deleteApiV1LibrariesLibraryIdRouteHandler,
  deleteApiV1ReadlistsIdRouteHandler,
  deleteApiV1ReadlistsIdThumbnailsThumbnailIdRouteHandler,
  deleteApiV1SeriesSeriesIdFileRouteHandler,
  deleteApiV1SeriesSeriesIdReadProgressRouteHandler,
  deleteApiV1SeriesSeriesIdThumbnailsThumbnailIdRouteHandler,
  deleteApiV1SyncpointsMeRouteHandler,
  deleteApiV1TasksRouteHandler,
  deleteApiV2UsersIdRouteHandler,
  deleteApiV2UsersMeApiKeysKeyIdRouteHandler,
  getActuatorInfoRouteHandler,
  getApiLogoutRouteHandler,
  getApiV1AgeRatingsRouteHandler,
  getApiV1AnnouncementsRouteHandler,
  getApiV1AuthorsNamesRouteHandler,
  getApiV1AuthorsRolesRouteHandler,
  getApiV1AuthorsRouteHandler,
  getApiV1BooksBookIdFileRouteHandler,
  getApiV1BooksBookIdFileStarRouteHandler,
  getApiV1BooksBookIdManifestDivinaRouteHandler,
  getApiV1BooksBookIdManifestEpubRouteHandler,
  getApiV1BooksBookIdManifestPdfRouteHandler,
  getApiV1BooksBookIdManifestRouteHandler,
  getApiV1BooksBookIdNextRouteHandler,
  getApiV1BooksBookIdPagesPageNumberRawRouteHandler,
  getApiV1BooksBookIdPagesPageNumberRouteHandler,
  getApiV1BooksBookIdPagesPageNumberThumbnailRouteHandler,
  getApiV1BooksBookIdPagesRouteHandler,
  getApiV1BooksBookIdPositionsRouteHandler,
  getApiV1BooksBookIdPreviousRouteHandler,
  getApiV1BooksBookIdProgressionRouteHandler,
  getApiV1BooksBookIdReadlistsRouteHandler,
  getApiV1BooksBookIdResourceResourceRouteHandler,
  getApiV1BooksBookIdRouteHandler,
  getApiV1BooksBookIdThumbnailRouteHandler,
  getApiV1BooksBookIdThumbnailsRouteHandler,
  getApiV1BooksBookIdThumbnailsThumbnailIdRouteHandler,
  getApiV1BooksDuplicatesRouteHandler,
  getApiV1BooksLatestRouteHandler,
  getApiV1BooksOndeckRouteHandler,
  getApiV1BooksRouteHandler,
  getApiV1ClaimRouteHandler,
  getApiV1ClientSettingsGlobalListRouteHandler,
  getApiV1ClientSettingsUserListRouteHandler,
  getApiV1CollectionsIdRouteHandler,
  getApiV1CollectionsIdSeriesRouteHandler,
  getApiV1CollectionsIdThumbnailRouteHandler,
  getApiV1CollectionsIdThumbnailsRouteHandler,
  getApiV1CollectionsIdThumbnailsThumbnailIdRouteHandler,
  getApiV1CollectionsRouteHandler,
  getApiV1FontsFamiliesRouteHandler,
  getApiV1FontsResourceFontFamilyCssRouteHandler,
  getApiV1FontsResourceFontFamilyFontFileRouteHandler,
  getApiV1GenresRouteHandler,
  getApiV1HistoryRouteHandler,
  getApiV1LanguagesRouteHandler,
  getApiV1LibrariesLibraryIdRouteHandler,
  getApiV1LibrariesRouteHandler,
  getApiV1LoginSetCookieRouteHandler,
  getApiV1Oauth2ProvidersRouteHandler,
  getApiV1PageHashesPageHashRouteHandler,
  getApiV1PageHashesPageHashThumbnailRouteHandler,
  getApiV1PageHashesRouteHandler,
  getApiV1PageHashesUnknownPageHashThumbnailRouteHandler,
  getApiV1PageHashesUnknownRouteHandler,
  getApiV1PublishersRouteHandler,
  getApiV1ReadlistsIdBooksBookIdNextRouteHandler,
  getApiV1ReadlistsIdBooksBookIdPreviousRouteHandler,
  getApiV1ReadlistsIdBooksRouteHandler,
  getApiV1ReadlistsIdFileRouteHandler,
  getApiV1ReadlistsIdReadProgressTachiyomiRouteHandler,
  getApiV1ReadlistsIdRouteHandler,
  getApiV1ReadlistsIdThumbnailRouteHandler,
  getApiV1ReadlistsIdThumbnailsRouteHandler,
  getApiV1ReadlistsIdThumbnailsThumbnailIdRouteHandler,
  getApiV1ReadlistsRouteHandler,
  getApiV1ReleasesRouteHandler,
  getApiV1SeriesAlphabeticalGroupsRouteHandler,
  getApiV1SeriesLatestRouteHandler,
  getApiV1SeriesNewRouteHandler,
  getApiV1SeriesReleaseDatesRouteHandler,
  getApiV1SeriesRouteHandler,
  getApiV1SeriesSeriesIdBooksRouteHandler,
  getApiV1SeriesSeriesIdCollectionsRouteHandler,
  getApiV1SeriesSeriesIdFileRouteHandler,
  getApiV1SeriesSeriesIdRouteHandler,
  getApiV1SeriesSeriesIdThumbnailRouteHandler,
  getApiV1SeriesSeriesIdThumbnailsRouteHandler,
  getApiV1SeriesSeriesIdThumbnailsThumbnailIdRouteHandler,
  getApiV1SeriesUpdatedRouteHandler,
  getApiV1SettingsRouteHandler,
  getApiV1SharingLabelsRouteHandler,
  getApiV1TagsBookRouteHandler,
  getApiV1TagsRouteHandler,
  getApiV1TagsSeriesRouteHandler,
  getApiV1TransientBooksIdPagesPageNumberRouteHandler,
  getApiV2AgeRatingsRouteHandler,
  getApiV2AuthorsNamesRouteHandler,
  getApiV2AuthorsRolesRouteHandler,
  getApiV2AuthorsRouteHandler,
  getApiV2GenresRouteHandler,
  getApiV2LanguagesRouteHandler,
  getApiV2PublishersRouteHandler,
  getApiV2SeriesReleaseYearsRouteHandler,
  getApiV2SeriesSeriesIdReadProgressTachiyomiRouteHandler,
  getApiV2SharingLabelsRouteHandler,
  getApiV2TagsRouteHandler,
  getApiV2UsersAuthenticationActivityRouteHandler,
  getApiV2UsersIdAuthenticationActivityLatestRouteHandler,
  getApiV2UsersMeApiKeysRouteHandler,
  getApiV2UsersMeAuthenticationActivityRouteHandler,
  getApiV2UsersMeRouteHandler,
  getApiV2UsersRouteHandler,
  getApiV3NotableEntitiesKindsRouteHandler,
  getApiV3NotableEntitiesNamesRouteHandler,
  getApiV3NotableEntitiesRouteHandler,
  patchApiV1BooksBookIdMetadataRouteHandler,
  patchApiV1BooksBookIdReadProgressRouteHandler,
  patchApiV1BooksMetadataRouteHandler,
  patchApiV1ClientSettingsGlobalRouteHandler,
  patchApiV1ClientSettingsUserRouteHandler,
  patchApiV1CollectionsIdRouteHandler,
  patchApiV1LibrariesLibraryIdRouteHandler,
  patchApiV1ReadlistsIdRouteHandler,
  patchApiV1SeriesSeriesIdMetadataRouteHandler,
  patchApiV1SettingsRouteHandler,
  patchApiV2UsersIdPasswordRouteHandler,
  patchApiV2UsersIdRouteHandler,
  patchApiV2UsersMePasswordRouteHandler,
  postApiLogoutRouteHandler,
  postApiV1BooksBookIdAnalyzeRouteHandler,
  postApiV1BooksBookIdMetadataRefreshRouteHandler,
  postApiV1BooksBookIdThumbnailsRouteHandler,
  postApiV1BooksImportRouteHandler,
  postApiV1BooksListRouteHandler,
  postApiV1ClaimRouteHandler,
  postApiV1CollectionsIdThumbnailsRouteHandler,
  postApiV1CollectionsRouteHandler,
  postApiV1FilesystemRouteHandler,
  postApiV1LibrariesLibraryIdAnalyzeRouteHandler,
  postApiV1LibrariesLibraryIdEmptyTrashRouteHandler,
  postApiV1LibrariesLibraryIdMetadataRefreshRouteHandler,
  postApiV1LibrariesLibraryIdScanRouteHandler,
  postApiV1LibrariesRouteHandler,
  postApiV1PageHashesPageHashDeleteAllRouteHandler,
  postApiV1PageHashesPageHashDeleteMatchRouteHandler,
  postApiV1ReadlistsIdThumbnailsRouteHandler,
  postApiV1ReadlistsMatchComicrackRouteHandler,
  postApiV1ReadlistsRouteHandler,
  postApiV1SeriesListAlphabeticalGroupsRouteHandler,
  postApiV1SeriesListRouteHandler,
  postApiV1SeriesSeriesIdAnalyzeRouteHandler,
  postApiV1SeriesSeriesIdMetadataRefreshRouteHandler,
  postApiV1SeriesSeriesIdReadProgressRouteHandler,
  postApiV1SeriesSeriesIdThumbnailsRouteHandler,
  postApiV1TransientBooksIdAnalyzeRouteHandler,
  postApiV1TransientBooksRouteHandler,
  postApiV2UsersMeApiKeysRouteHandler,
  postApiV2UsersRouteHandler,
  putApiV1AnnouncementsRouteHandler,
  putApiV1BooksBookIdProgressionRouteHandler,
  putApiV1BooksBookIdThumbnailsThumbnailIdSelectedRouteHandler,
  putApiV1BooksThumbnailsRouteHandler,
  putApiV1CollectionsIdThumbnailsThumbnailIdSelectedRouteHandler,
  putApiV1LibrariesLibraryIdRouteHandler,
  putApiV1PageHashesRouteHandler,
  putApiV1ReadlistsIdReadProgressTachiyomiRouteHandler,
  putApiV1ReadlistsIdThumbnailsThumbnailIdSelectedRouteHandler,
  putApiV1SeriesSeriesIdThumbnailsThumbnailIdSelectedRouteHandler,
  putApiV2SeriesSeriesIdReadProgressTachiyomiRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActuatorInfoRoute, getActuatorInfoRouteHandler)
  .openapi(getApiLogoutRoute, getApiLogoutRouteHandler)
  .openapi(postApiLogoutRoute, postApiLogoutRouteHandler)
  .openapi(getApiV1AgeRatingsRoute, getApiV1AgeRatingsRouteHandler)
  .openapi(getApiV1AnnouncementsRoute, getApiV1AnnouncementsRouteHandler)
  .openapi(putApiV1AnnouncementsRoute, putApiV1AnnouncementsRouteHandler)
  .openapi(getApiV1AuthorsRoute, getApiV1AuthorsRouteHandler)
  .openapi(getApiV1AuthorsNamesRoute, getApiV1AuthorsNamesRouteHandler)
  .openapi(getApiV1AuthorsRolesRoute, getApiV1AuthorsRolesRouteHandler)
  .openapi(getApiV1BooksRoute, getApiV1BooksRouteHandler)
  .openapi(getApiV1BooksDuplicatesRoute, getApiV1BooksDuplicatesRouteHandler)
  .openapi(postApiV1BooksImportRoute, postApiV1BooksImportRouteHandler)
  .openapi(getApiV1BooksLatestRoute, getApiV1BooksLatestRouteHandler)
  .openapi(postApiV1BooksListRoute, postApiV1BooksListRouteHandler)
  .openapi(patchApiV1BooksMetadataRoute, patchApiV1BooksMetadataRouteHandler)
  .openapi(getApiV1BooksOndeckRoute, getApiV1BooksOndeckRouteHandler)
  .openapi(putApiV1BooksThumbnailsRoute, putApiV1BooksThumbnailsRouteHandler)
  .openapi(getApiV1BooksBookIdRoute, getApiV1BooksBookIdRouteHandler)
  .openapi(postApiV1BooksBookIdAnalyzeRoute, postApiV1BooksBookIdAnalyzeRouteHandler)
  .openapi(deleteApiV1BooksBookIdFileRoute, deleteApiV1BooksBookIdFileRouteHandler)
  .openapi(getApiV1BooksBookIdFileRoute, getApiV1BooksBookIdFileRouteHandler)
  .openapi(getApiV1BooksBookIdFileStarRoute, getApiV1BooksBookIdFileStarRouteHandler)
  .openapi(getApiV1BooksBookIdManifestRoute, getApiV1BooksBookIdManifestRouteHandler)
  .openapi(getApiV1BooksBookIdManifestDivinaRoute, getApiV1BooksBookIdManifestDivinaRouteHandler)
  .openapi(getApiV1BooksBookIdManifestEpubRoute, getApiV1BooksBookIdManifestEpubRouteHandler)
  .openapi(getApiV1BooksBookIdManifestPdfRoute, getApiV1BooksBookIdManifestPdfRouteHandler)
  .openapi(patchApiV1BooksBookIdMetadataRoute, patchApiV1BooksBookIdMetadataRouteHandler)
  .openapi(
    postApiV1BooksBookIdMetadataRefreshRoute,
    postApiV1BooksBookIdMetadataRefreshRouteHandler,
  )
  .openapi(getApiV1BooksBookIdNextRoute, getApiV1BooksBookIdNextRouteHandler)
  .openapi(getApiV1BooksBookIdPagesRoute, getApiV1BooksBookIdPagesRouteHandler)
  .openapi(getApiV1BooksBookIdPagesPageNumberRoute, getApiV1BooksBookIdPagesPageNumberRouteHandler)
  .openapi(
    getApiV1BooksBookIdPagesPageNumberRawRoute,
    getApiV1BooksBookIdPagesPageNumberRawRouteHandler,
  )
  .openapi(
    getApiV1BooksBookIdPagesPageNumberThumbnailRoute,
    getApiV1BooksBookIdPagesPageNumberThumbnailRouteHandler,
  )
  .openapi(getApiV1BooksBookIdPositionsRoute, getApiV1BooksBookIdPositionsRouteHandler)
  .openapi(getApiV1BooksBookIdPreviousRoute, getApiV1BooksBookIdPreviousRouteHandler)
  .openapi(getApiV1BooksBookIdProgressionRoute, getApiV1BooksBookIdProgressionRouteHandler)
  .openapi(putApiV1BooksBookIdProgressionRoute, putApiV1BooksBookIdProgressionRouteHandler)
  .openapi(deleteApiV1BooksBookIdReadProgressRoute, deleteApiV1BooksBookIdReadProgressRouteHandler)
  .openapi(patchApiV1BooksBookIdReadProgressRoute, patchApiV1BooksBookIdReadProgressRouteHandler)
  .openapi(getApiV1BooksBookIdReadlistsRoute, getApiV1BooksBookIdReadlistsRouteHandler)
  .openapi(
    getApiV1BooksBookIdResourceResourceRoute,
    getApiV1BooksBookIdResourceResourceRouteHandler,
  )
  .openapi(getApiV1BooksBookIdThumbnailRoute, getApiV1BooksBookIdThumbnailRouteHandler)
  .openapi(getApiV1BooksBookIdThumbnailsRoute, getApiV1BooksBookIdThumbnailsRouteHandler)
  .openapi(postApiV1BooksBookIdThumbnailsRoute, postApiV1BooksBookIdThumbnailsRouteHandler)
  .openapi(
    deleteApiV1BooksBookIdThumbnailsThumbnailIdRoute,
    deleteApiV1BooksBookIdThumbnailsThumbnailIdRouteHandler,
  )
  .openapi(
    getApiV1BooksBookIdThumbnailsThumbnailIdRoute,
    getApiV1BooksBookIdThumbnailsThumbnailIdRouteHandler,
  )
  .openapi(
    putApiV1BooksBookIdThumbnailsThumbnailIdSelectedRoute,
    putApiV1BooksBookIdThumbnailsThumbnailIdSelectedRouteHandler,
  )
  .openapi(getApiV1ClaimRoute, getApiV1ClaimRouteHandler)
  .openapi(postApiV1ClaimRoute, postApiV1ClaimRouteHandler)
  .openapi(deleteApiV1ClientSettingsGlobalRoute, deleteApiV1ClientSettingsGlobalRouteHandler)
  .openapi(patchApiV1ClientSettingsGlobalRoute, patchApiV1ClientSettingsGlobalRouteHandler)
  .openapi(getApiV1ClientSettingsGlobalListRoute, getApiV1ClientSettingsGlobalListRouteHandler)
  .openapi(deleteApiV1ClientSettingsUserRoute, deleteApiV1ClientSettingsUserRouteHandler)
  .openapi(patchApiV1ClientSettingsUserRoute, patchApiV1ClientSettingsUserRouteHandler)
  .openapi(getApiV1ClientSettingsUserListRoute, getApiV1ClientSettingsUserListRouteHandler)
  .openapi(getApiV1CollectionsRoute, getApiV1CollectionsRouteHandler)
  .openapi(postApiV1CollectionsRoute, postApiV1CollectionsRouteHandler)
  .openapi(deleteApiV1CollectionsIdRoute, deleteApiV1CollectionsIdRouteHandler)
  .openapi(getApiV1CollectionsIdRoute, getApiV1CollectionsIdRouteHandler)
  .openapi(patchApiV1CollectionsIdRoute, patchApiV1CollectionsIdRouteHandler)
  .openapi(getApiV1CollectionsIdSeriesRoute, getApiV1CollectionsIdSeriesRouteHandler)
  .openapi(getApiV1CollectionsIdThumbnailRoute, getApiV1CollectionsIdThumbnailRouteHandler)
  .openapi(getApiV1CollectionsIdThumbnailsRoute, getApiV1CollectionsIdThumbnailsRouteHandler)
  .openapi(postApiV1CollectionsIdThumbnailsRoute, postApiV1CollectionsIdThumbnailsRouteHandler)
  .openapi(
    deleteApiV1CollectionsIdThumbnailsThumbnailIdRoute,
    deleteApiV1CollectionsIdThumbnailsThumbnailIdRouteHandler,
  )
  .openapi(
    getApiV1CollectionsIdThumbnailsThumbnailIdRoute,
    getApiV1CollectionsIdThumbnailsThumbnailIdRouteHandler,
  )
  .openapi(
    putApiV1CollectionsIdThumbnailsThumbnailIdSelectedRoute,
    putApiV1CollectionsIdThumbnailsThumbnailIdSelectedRouteHandler,
  )
  .openapi(postApiV1FilesystemRoute, postApiV1FilesystemRouteHandler)
  .openapi(getApiV1FontsFamiliesRoute, getApiV1FontsFamiliesRouteHandler)
  .openapi(getApiV1FontsResourceFontFamilyCssRoute, getApiV1FontsResourceFontFamilyCssRouteHandler)
  .openapi(
    getApiV1FontsResourceFontFamilyFontFileRoute,
    getApiV1FontsResourceFontFamilyFontFileRouteHandler,
  )
  .openapi(getApiV1GenresRoute, getApiV1GenresRouteHandler)
  .openapi(getApiV1HistoryRoute, getApiV1HistoryRouteHandler)
  .openapi(getApiV1LanguagesRoute, getApiV1LanguagesRouteHandler)
  .openapi(getApiV1LibrariesRoute, getApiV1LibrariesRouteHandler)
  .openapi(postApiV1LibrariesRoute, postApiV1LibrariesRouteHandler)
  .openapi(deleteApiV1LibrariesLibraryIdRoute, deleteApiV1LibrariesLibraryIdRouteHandler)
  .openapi(getApiV1LibrariesLibraryIdRoute, getApiV1LibrariesLibraryIdRouteHandler)
  .openapi(patchApiV1LibrariesLibraryIdRoute, patchApiV1LibrariesLibraryIdRouteHandler)
  .openapi(putApiV1LibrariesLibraryIdRoute, putApiV1LibrariesLibraryIdRouteHandler)
  .openapi(postApiV1LibrariesLibraryIdAnalyzeRoute, postApiV1LibrariesLibraryIdAnalyzeRouteHandler)
  .openapi(
    postApiV1LibrariesLibraryIdEmptyTrashRoute,
    postApiV1LibrariesLibraryIdEmptyTrashRouteHandler,
  )
  .openapi(
    postApiV1LibrariesLibraryIdMetadataRefreshRoute,
    postApiV1LibrariesLibraryIdMetadataRefreshRouteHandler,
  )
  .openapi(postApiV1LibrariesLibraryIdScanRoute, postApiV1LibrariesLibraryIdScanRouteHandler)
  .openapi(getApiV1LoginSetCookieRoute, getApiV1LoginSetCookieRouteHandler)
  .openapi(getApiV1Oauth2ProvidersRoute, getApiV1Oauth2ProvidersRouteHandler)
  .openapi(getApiV1PageHashesRoute, getApiV1PageHashesRouteHandler)
  .openapi(putApiV1PageHashesRoute, putApiV1PageHashesRouteHandler)
  .openapi(getApiV1PageHashesUnknownRoute, getApiV1PageHashesUnknownRouteHandler)
  .openapi(
    getApiV1PageHashesUnknownPageHashThumbnailRoute,
    getApiV1PageHashesUnknownPageHashThumbnailRouteHandler,
  )
  .openapi(getApiV1PageHashesPageHashRoute, getApiV1PageHashesPageHashRouteHandler)
  .openapi(
    postApiV1PageHashesPageHashDeleteAllRoute,
    postApiV1PageHashesPageHashDeleteAllRouteHandler,
  )
  .openapi(
    postApiV1PageHashesPageHashDeleteMatchRoute,
    postApiV1PageHashesPageHashDeleteMatchRouteHandler,
  )
  .openapi(
    getApiV1PageHashesPageHashThumbnailRoute,
    getApiV1PageHashesPageHashThumbnailRouteHandler,
  )
  .openapi(getApiV1PublishersRoute, getApiV1PublishersRouteHandler)
  .openapi(getApiV1ReadlistsRoute, getApiV1ReadlistsRouteHandler)
  .openapi(postApiV1ReadlistsRoute, postApiV1ReadlistsRouteHandler)
  .openapi(postApiV1ReadlistsMatchComicrackRoute, postApiV1ReadlistsMatchComicrackRouteHandler)
  .openapi(deleteApiV1ReadlistsIdRoute, deleteApiV1ReadlistsIdRouteHandler)
  .openapi(getApiV1ReadlistsIdRoute, getApiV1ReadlistsIdRouteHandler)
  .openapi(patchApiV1ReadlistsIdRoute, patchApiV1ReadlistsIdRouteHandler)
  .openapi(getApiV1ReadlistsIdBooksRoute, getApiV1ReadlistsIdBooksRouteHandler)
  .openapi(getApiV1ReadlistsIdBooksBookIdNextRoute, getApiV1ReadlistsIdBooksBookIdNextRouteHandler)
  .openapi(
    getApiV1ReadlistsIdBooksBookIdPreviousRoute,
    getApiV1ReadlistsIdBooksBookIdPreviousRouteHandler,
  )
  .openapi(getApiV1ReadlistsIdFileRoute, getApiV1ReadlistsIdFileRouteHandler)
  .openapi(
    getApiV1ReadlistsIdReadProgressTachiyomiRoute,
    getApiV1ReadlistsIdReadProgressTachiyomiRouteHandler,
  )
  .openapi(
    putApiV1ReadlistsIdReadProgressTachiyomiRoute,
    putApiV1ReadlistsIdReadProgressTachiyomiRouteHandler,
  )
  .openapi(getApiV1ReadlistsIdThumbnailRoute, getApiV1ReadlistsIdThumbnailRouteHandler)
  .openapi(getApiV1ReadlistsIdThumbnailsRoute, getApiV1ReadlistsIdThumbnailsRouteHandler)
  .openapi(postApiV1ReadlistsIdThumbnailsRoute, postApiV1ReadlistsIdThumbnailsRouteHandler)
  .openapi(
    deleteApiV1ReadlistsIdThumbnailsThumbnailIdRoute,
    deleteApiV1ReadlistsIdThumbnailsThumbnailIdRouteHandler,
  )
  .openapi(
    getApiV1ReadlistsIdThumbnailsThumbnailIdRoute,
    getApiV1ReadlistsIdThumbnailsThumbnailIdRouteHandler,
  )
  .openapi(
    putApiV1ReadlistsIdThumbnailsThumbnailIdSelectedRoute,
    putApiV1ReadlistsIdThumbnailsThumbnailIdSelectedRouteHandler,
  )
  .openapi(getApiV1ReleasesRoute, getApiV1ReleasesRouteHandler)
  .openapi(getApiV1SeriesRoute, getApiV1SeriesRouteHandler)
  .openapi(getApiV1SeriesAlphabeticalGroupsRoute, getApiV1SeriesAlphabeticalGroupsRouteHandler)
  .openapi(getApiV1SeriesLatestRoute, getApiV1SeriesLatestRouteHandler)
  .openapi(postApiV1SeriesListRoute, postApiV1SeriesListRouteHandler)
  .openapi(
    postApiV1SeriesListAlphabeticalGroupsRoute,
    postApiV1SeriesListAlphabeticalGroupsRouteHandler,
  )
  .openapi(getApiV1SeriesNewRoute, getApiV1SeriesNewRouteHandler)
  .openapi(getApiV1SeriesReleaseDatesRoute, getApiV1SeriesReleaseDatesRouteHandler)
  .openapi(getApiV1SeriesUpdatedRoute, getApiV1SeriesUpdatedRouteHandler)
  .openapi(getApiV1SeriesSeriesIdRoute, getApiV1SeriesSeriesIdRouteHandler)
  .openapi(postApiV1SeriesSeriesIdAnalyzeRoute, postApiV1SeriesSeriesIdAnalyzeRouteHandler)
  .openapi(getApiV1SeriesSeriesIdBooksRoute, getApiV1SeriesSeriesIdBooksRouteHandler)
  .openapi(getApiV1SeriesSeriesIdCollectionsRoute, getApiV1SeriesSeriesIdCollectionsRouteHandler)
  .openapi(deleteApiV1SeriesSeriesIdFileRoute, deleteApiV1SeriesSeriesIdFileRouteHandler)
  .openapi(getApiV1SeriesSeriesIdFileRoute, getApiV1SeriesSeriesIdFileRouteHandler)
  .openapi(patchApiV1SeriesSeriesIdMetadataRoute, patchApiV1SeriesSeriesIdMetadataRouteHandler)
  .openapi(
    postApiV1SeriesSeriesIdMetadataRefreshRoute,
    postApiV1SeriesSeriesIdMetadataRefreshRouteHandler,
  )
  .openapi(
    deleteApiV1SeriesSeriesIdReadProgressRoute,
    deleteApiV1SeriesSeriesIdReadProgressRouteHandler,
  )
  .openapi(
    postApiV1SeriesSeriesIdReadProgressRoute,
    postApiV1SeriesSeriesIdReadProgressRouteHandler,
  )
  .openapi(getApiV1SeriesSeriesIdThumbnailRoute, getApiV1SeriesSeriesIdThumbnailRouteHandler)
  .openapi(getApiV1SeriesSeriesIdThumbnailsRoute, getApiV1SeriesSeriesIdThumbnailsRouteHandler)
  .openapi(postApiV1SeriesSeriesIdThumbnailsRoute, postApiV1SeriesSeriesIdThumbnailsRouteHandler)
  .openapi(
    deleteApiV1SeriesSeriesIdThumbnailsThumbnailIdRoute,
    deleteApiV1SeriesSeriesIdThumbnailsThumbnailIdRouteHandler,
  )
  .openapi(
    getApiV1SeriesSeriesIdThumbnailsThumbnailIdRoute,
    getApiV1SeriesSeriesIdThumbnailsThumbnailIdRouteHandler,
  )
  .openapi(
    putApiV1SeriesSeriesIdThumbnailsThumbnailIdSelectedRoute,
    putApiV1SeriesSeriesIdThumbnailsThumbnailIdSelectedRouteHandler,
  )
  .openapi(getApiV1SettingsRoute, getApiV1SettingsRouteHandler)
  .openapi(patchApiV1SettingsRoute, patchApiV1SettingsRouteHandler)
  .openapi(getApiV1SharingLabelsRoute, getApiV1SharingLabelsRouteHandler)
  .openapi(deleteApiV1SyncpointsMeRoute, deleteApiV1SyncpointsMeRouteHandler)
  .openapi(getApiV1TagsRoute, getApiV1TagsRouteHandler)
  .openapi(getApiV1TagsBookRoute, getApiV1TagsBookRouteHandler)
  .openapi(getApiV1TagsSeriesRoute, getApiV1TagsSeriesRouteHandler)
  .openapi(deleteApiV1TasksRoute, deleteApiV1TasksRouteHandler)
  .openapi(postApiV1TransientBooksRoute, postApiV1TransientBooksRouteHandler)
  .openapi(postApiV1TransientBooksIdAnalyzeRoute, postApiV1TransientBooksIdAnalyzeRouteHandler)
  .openapi(
    getApiV1TransientBooksIdPagesPageNumberRoute,
    getApiV1TransientBooksIdPagesPageNumberRouteHandler,
  )
  .openapi(getApiV2AgeRatingsRoute, getApiV2AgeRatingsRouteHandler)
  .openapi(getApiV2AuthorsRoute, getApiV2AuthorsRouteHandler)
  .openapi(getApiV2AuthorsNamesRoute, getApiV2AuthorsNamesRouteHandler)
  .openapi(getApiV2AuthorsRolesRoute, getApiV2AuthorsRolesRouteHandler)
  .openapi(getApiV2GenresRoute, getApiV2GenresRouteHandler)
  .openapi(getApiV2LanguagesRoute, getApiV2LanguagesRouteHandler)
  .openapi(getApiV2PublishersRoute, getApiV2PublishersRouteHandler)
  .openapi(getApiV2SeriesReleaseYearsRoute, getApiV2SeriesReleaseYearsRouteHandler)
  .openapi(
    getApiV2SeriesSeriesIdReadProgressTachiyomiRoute,
    getApiV2SeriesSeriesIdReadProgressTachiyomiRouteHandler,
  )
  .openapi(
    putApiV2SeriesSeriesIdReadProgressTachiyomiRoute,
    putApiV2SeriesSeriesIdReadProgressTachiyomiRouteHandler,
  )
  .openapi(getApiV2SharingLabelsRoute, getApiV2SharingLabelsRouteHandler)
  .openapi(getApiV2TagsRoute, getApiV2TagsRouteHandler)
  .openapi(getApiV2UsersRoute, getApiV2UsersRouteHandler)
  .openapi(postApiV2UsersRoute, postApiV2UsersRouteHandler)
  .openapi(
    getApiV2UsersAuthenticationActivityRoute,
    getApiV2UsersAuthenticationActivityRouteHandler,
  )
  .openapi(getApiV2UsersMeRoute, getApiV2UsersMeRouteHandler)
  .openapi(getApiV2UsersMeApiKeysRoute, getApiV2UsersMeApiKeysRouteHandler)
  .openapi(postApiV2UsersMeApiKeysRoute, postApiV2UsersMeApiKeysRouteHandler)
  .openapi(deleteApiV2UsersMeApiKeysKeyIdRoute, deleteApiV2UsersMeApiKeysKeyIdRouteHandler)
  .openapi(
    getApiV2UsersMeAuthenticationActivityRoute,
    getApiV2UsersMeAuthenticationActivityRouteHandler,
  )
  .openapi(patchApiV2UsersMePasswordRoute, patchApiV2UsersMePasswordRouteHandler)
  .openapi(deleteApiV2UsersIdRoute, deleteApiV2UsersIdRouteHandler)
  .openapi(patchApiV2UsersIdRoute, patchApiV2UsersIdRouteHandler)
  .openapi(
    getApiV2UsersIdAuthenticationActivityLatestRoute,
    getApiV2UsersIdAuthenticationActivityLatestRouteHandler,
  )
  .openapi(patchApiV2UsersIdPasswordRoute, patchApiV2UsersIdPasswordRouteHandler)
  .openapi(getApiV3NotableEntitiesRoute, getApiV3NotableEntitiesRouteHandler)
  .openapi(getApiV3NotableEntitiesKindsRoute, getApiV3NotableEntitiesKindsRouteHandler)
  .openapi(getApiV3NotableEntitiesNamesRoute, getApiV3NotableEntitiesNamesRouteHandler)

export default app
