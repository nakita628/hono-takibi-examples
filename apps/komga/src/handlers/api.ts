import type { RouteHandler } from '@hono/zod-openapi'
import type {
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
} from '../routes'

export const getApiLogoutRouteHandler: RouteHandler<typeof getApiLogoutRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLogoutRouteHandler: RouteHandler<typeof postApiLogoutRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AgeRatingsRouteHandler: RouteHandler<typeof getApiV1AgeRatingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1AnnouncementsRouteHandler: RouteHandler<
  typeof getApiV1AnnouncementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1AnnouncementsRouteHandler: RouteHandler<
  typeof putApiV1AnnouncementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AuthorsRouteHandler: RouteHandler<typeof getApiV1AuthorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AuthorsNamesRouteHandler: RouteHandler<
  typeof getApiV1AuthorsNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AuthorsRolesRouteHandler: RouteHandler<
  typeof getApiV1AuthorsRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksRouteHandler: RouteHandler<typeof getApiV1BooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksDuplicatesRouteHandler: RouteHandler<
  typeof getApiV1BooksDuplicatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BooksImportRouteHandler: RouteHandler<
  typeof postApiV1BooksImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksLatestRouteHandler: RouteHandler<
  typeof getApiV1BooksLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BooksListRouteHandler: RouteHandler<typeof postApiV1BooksListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiV1BooksMetadataRouteHandler: RouteHandler<
  typeof patchApiV1BooksMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksOndeckRouteHandler: RouteHandler<
  typeof getApiV1BooksOndeckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1BooksThumbnailsRouteHandler: RouteHandler<
  typeof putApiV1BooksThumbnailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksBookIdRouteHandler: RouteHandler<
  typeof getApiV1BooksBookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BooksBookIdAnalyzeRouteHandler: RouteHandler<
  typeof postApiV1BooksBookIdAnalyzeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1BooksBookIdFileRouteHandler: RouteHandler<
  typeof deleteApiV1BooksBookIdFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksBookIdFileRouteHandler: RouteHandler<
  typeof getApiV1BooksBookIdFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksBookIdFileStarRouteHandler: RouteHandler<
  typeof getApiV1BooksBookIdFileStarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksBookIdManifestRouteHandler: RouteHandler<
  typeof getApiV1BooksBookIdManifestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksBookIdManifestDivinaRouteHandler: RouteHandler<
  typeof getApiV1BooksBookIdManifestDivinaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksBookIdManifestEpubRouteHandler: RouteHandler<
  typeof getApiV1BooksBookIdManifestEpubRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksBookIdManifestPdfRouteHandler: RouteHandler<
  typeof getApiV1BooksBookIdManifestPdfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1BooksBookIdMetadataRouteHandler: RouteHandler<
  typeof patchApiV1BooksBookIdMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BooksBookIdMetadataRefreshRouteHandler: RouteHandler<
  typeof postApiV1BooksBookIdMetadataRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksBookIdNextRouteHandler: RouteHandler<
  typeof getApiV1BooksBookIdNextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksBookIdPagesRouteHandler: RouteHandler<
  typeof getApiV1BooksBookIdPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksBookIdPagesPageNumberRouteHandler: RouteHandler<
  typeof getApiV1BooksBookIdPagesPageNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksBookIdPagesPageNumberRawRouteHandler: RouteHandler<
  typeof getApiV1BooksBookIdPagesPageNumberRawRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksBookIdPagesPageNumberThumbnailRouteHandler: RouteHandler<
  typeof getApiV1BooksBookIdPagesPageNumberThumbnailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksBookIdPositionsRouteHandler: RouteHandler<
  typeof getApiV1BooksBookIdPositionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksBookIdPreviousRouteHandler: RouteHandler<
  typeof getApiV1BooksBookIdPreviousRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksBookIdProgressionRouteHandler: RouteHandler<
  typeof getApiV1BooksBookIdProgressionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1BooksBookIdProgressionRouteHandler: RouteHandler<
  typeof putApiV1BooksBookIdProgressionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1BooksBookIdReadProgressRouteHandler: RouteHandler<
  typeof deleteApiV1BooksBookIdReadProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1BooksBookIdReadProgressRouteHandler: RouteHandler<
  typeof patchApiV1BooksBookIdReadProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksBookIdReadlistsRouteHandler: RouteHandler<
  typeof getApiV1BooksBookIdReadlistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksBookIdResourceResourceRouteHandler: RouteHandler<
  typeof getApiV1BooksBookIdResourceResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksBookIdThumbnailRouteHandler: RouteHandler<
  typeof getApiV1BooksBookIdThumbnailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksBookIdThumbnailsRouteHandler: RouteHandler<
  typeof getApiV1BooksBookIdThumbnailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BooksBookIdThumbnailsRouteHandler: RouteHandler<
  typeof postApiV1BooksBookIdThumbnailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1BooksBookIdThumbnailsThumbnailIdRouteHandler: RouteHandler<
  typeof deleteApiV1BooksBookIdThumbnailsThumbnailIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BooksBookIdThumbnailsThumbnailIdRouteHandler: RouteHandler<
  typeof getApiV1BooksBookIdThumbnailsThumbnailIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1BooksBookIdThumbnailsThumbnailIdSelectedRouteHandler: RouteHandler<
  typeof putApiV1BooksBookIdThumbnailsThumbnailIdSelectedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ClaimRouteHandler: RouteHandler<typeof getApiV1ClaimRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ClaimRouteHandler: RouteHandler<typeof postApiV1ClaimRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ClientSettingsGlobalRouteHandler: RouteHandler<
  typeof deleteApiV1ClientSettingsGlobalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1ClientSettingsGlobalRouteHandler: RouteHandler<
  typeof patchApiV1ClientSettingsGlobalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ClientSettingsGlobalListRouteHandler: RouteHandler<
  typeof getApiV1ClientSettingsGlobalListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ClientSettingsUserRouteHandler: RouteHandler<
  typeof deleteApiV1ClientSettingsUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1ClientSettingsUserRouteHandler: RouteHandler<
  typeof patchApiV1ClientSettingsUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ClientSettingsUserListRouteHandler: RouteHandler<
  typeof getApiV1ClientSettingsUserListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CollectionsRouteHandler: RouteHandler<
  typeof getApiV1CollectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1CollectionsRouteHandler: RouteHandler<
  typeof postApiV1CollectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1CollectionsIdRouteHandler: RouteHandler<
  typeof deleteApiV1CollectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CollectionsIdRouteHandler: RouteHandler<
  typeof getApiV1CollectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1CollectionsIdRouteHandler: RouteHandler<
  typeof patchApiV1CollectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CollectionsIdSeriesRouteHandler: RouteHandler<
  typeof getApiV1CollectionsIdSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CollectionsIdThumbnailRouteHandler: RouteHandler<
  typeof getApiV1CollectionsIdThumbnailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CollectionsIdThumbnailsRouteHandler: RouteHandler<
  typeof getApiV1CollectionsIdThumbnailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1CollectionsIdThumbnailsRouteHandler: RouteHandler<
  typeof postApiV1CollectionsIdThumbnailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1CollectionsIdThumbnailsThumbnailIdRouteHandler: RouteHandler<
  typeof deleteApiV1CollectionsIdThumbnailsThumbnailIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CollectionsIdThumbnailsThumbnailIdRouteHandler: RouteHandler<
  typeof getApiV1CollectionsIdThumbnailsThumbnailIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1CollectionsIdThumbnailsThumbnailIdSelectedRouteHandler: RouteHandler<
  typeof putApiV1CollectionsIdThumbnailsThumbnailIdSelectedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1FilesystemRouteHandler: RouteHandler<
  typeof postApiV1FilesystemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1FontsFamiliesRouteHandler: RouteHandler<
  typeof getApiV1FontsFamiliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1FontsResourceFontFamilyCssRouteHandler: RouteHandler<
  typeof getApiV1FontsResourceFontFamilyCssRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1FontsResourceFontFamilyFontFileRouteHandler: RouteHandler<
  typeof getApiV1FontsResourceFontFamilyFontFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GenresRouteHandler: RouteHandler<typeof getApiV1GenresRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1HistoryRouteHandler: RouteHandler<typeof getApiV1HistoryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LanguagesRouteHandler: RouteHandler<typeof getApiV1LanguagesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1LibrariesRouteHandler: RouteHandler<typeof getApiV1LibrariesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1LibrariesRouteHandler: RouteHandler<typeof postApiV1LibrariesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV1LibrariesLibraryIdRouteHandler: RouteHandler<
  typeof deleteApiV1LibrariesLibraryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LibrariesLibraryIdRouteHandler: RouteHandler<
  typeof getApiV1LibrariesLibraryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1LibrariesLibraryIdRouteHandler: RouteHandler<
  typeof patchApiV1LibrariesLibraryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1LibrariesLibraryIdRouteHandler: RouteHandler<
  typeof putApiV1LibrariesLibraryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LibrariesLibraryIdAnalyzeRouteHandler: RouteHandler<
  typeof postApiV1LibrariesLibraryIdAnalyzeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LibrariesLibraryIdEmptyTrashRouteHandler: RouteHandler<
  typeof postApiV1LibrariesLibraryIdEmptyTrashRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LibrariesLibraryIdMetadataRefreshRouteHandler: RouteHandler<
  typeof postApiV1LibrariesLibraryIdMetadataRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LibrariesLibraryIdScanRouteHandler: RouteHandler<
  typeof postApiV1LibrariesLibraryIdScanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LoginSetCookieRouteHandler: RouteHandler<
  typeof getApiV1LoginSetCookieRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1Oauth2ProvidersRouteHandler: RouteHandler<
  typeof getApiV1Oauth2ProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PageHashesRouteHandler: RouteHandler<typeof getApiV1PageHashesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV1PageHashesRouteHandler: RouteHandler<typeof putApiV1PageHashesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1PageHashesUnknownRouteHandler: RouteHandler<
  typeof getApiV1PageHashesUnknownRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PageHashesUnknownPageHashThumbnailRouteHandler: RouteHandler<
  typeof getApiV1PageHashesUnknownPageHashThumbnailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PageHashesPageHashRouteHandler: RouteHandler<
  typeof getApiV1PageHashesPageHashRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PageHashesPageHashDeleteAllRouteHandler: RouteHandler<
  typeof postApiV1PageHashesPageHashDeleteAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PageHashesPageHashDeleteMatchRouteHandler: RouteHandler<
  typeof postApiV1PageHashesPageHashDeleteMatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PageHashesPageHashThumbnailRouteHandler: RouteHandler<
  typeof getApiV1PageHashesPageHashThumbnailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PublishersRouteHandler: RouteHandler<typeof getApiV1PublishersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1ReadlistsRouteHandler: RouteHandler<typeof getApiV1ReadlistsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1ReadlistsRouteHandler: RouteHandler<typeof postApiV1ReadlistsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1ReadlistsMatchComicrackRouteHandler: RouteHandler<
  typeof postApiV1ReadlistsMatchComicrackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ReadlistsIdRouteHandler: RouteHandler<
  typeof deleteApiV1ReadlistsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ReadlistsIdRouteHandler: RouteHandler<
  typeof getApiV1ReadlistsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1ReadlistsIdRouteHandler: RouteHandler<
  typeof patchApiV1ReadlistsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ReadlistsIdBooksRouteHandler: RouteHandler<
  typeof getApiV1ReadlistsIdBooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ReadlistsIdBooksBookIdNextRouteHandler: RouteHandler<
  typeof getApiV1ReadlistsIdBooksBookIdNextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ReadlistsIdBooksBookIdPreviousRouteHandler: RouteHandler<
  typeof getApiV1ReadlistsIdBooksBookIdPreviousRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ReadlistsIdFileRouteHandler: RouteHandler<
  typeof getApiV1ReadlistsIdFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ReadlistsIdReadProgressTachiyomiRouteHandler: RouteHandler<
  typeof getApiV1ReadlistsIdReadProgressTachiyomiRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1ReadlistsIdReadProgressTachiyomiRouteHandler: RouteHandler<
  typeof putApiV1ReadlistsIdReadProgressTachiyomiRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ReadlistsIdThumbnailRouteHandler: RouteHandler<
  typeof getApiV1ReadlistsIdThumbnailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ReadlistsIdThumbnailsRouteHandler: RouteHandler<
  typeof getApiV1ReadlistsIdThumbnailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ReadlistsIdThumbnailsRouteHandler: RouteHandler<
  typeof postApiV1ReadlistsIdThumbnailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ReadlistsIdThumbnailsThumbnailIdRouteHandler: RouteHandler<
  typeof deleteApiV1ReadlistsIdThumbnailsThumbnailIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ReadlistsIdThumbnailsThumbnailIdRouteHandler: RouteHandler<
  typeof getApiV1ReadlistsIdThumbnailsThumbnailIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1ReadlistsIdThumbnailsThumbnailIdSelectedRouteHandler: RouteHandler<
  typeof putApiV1ReadlistsIdThumbnailsThumbnailIdSelectedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ReleasesRouteHandler: RouteHandler<typeof getApiV1ReleasesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1SeriesRouteHandler: RouteHandler<typeof getApiV1SeriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SeriesAlphabeticalGroupsRouteHandler: RouteHandler<
  typeof getApiV1SeriesAlphabeticalGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SeriesLatestRouteHandler: RouteHandler<
  typeof getApiV1SeriesLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SeriesListRouteHandler: RouteHandler<
  typeof postApiV1SeriesListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SeriesListAlphabeticalGroupsRouteHandler: RouteHandler<
  typeof postApiV1SeriesListAlphabeticalGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SeriesNewRouteHandler: RouteHandler<typeof getApiV1SeriesNewRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1SeriesReleaseDatesRouteHandler: RouteHandler<
  typeof getApiV1SeriesReleaseDatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SeriesUpdatedRouteHandler: RouteHandler<
  typeof getApiV1SeriesUpdatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SeriesSeriesIdRouteHandler: RouteHandler<
  typeof getApiV1SeriesSeriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SeriesSeriesIdAnalyzeRouteHandler: RouteHandler<
  typeof postApiV1SeriesSeriesIdAnalyzeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SeriesSeriesIdBooksRouteHandler: RouteHandler<
  typeof getApiV1SeriesSeriesIdBooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SeriesSeriesIdCollectionsRouteHandler: RouteHandler<
  typeof getApiV1SeriesSeriesIdCollectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SeriesSeriesIdFileRouteHandler: RouteHandler<
  typeof deleteApiV1SeriesSeriesIdFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SeriesSeriesIdFileRouteHandler: RouteHandler<
  typeof getApiV1SeriesSeriesIdFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1SeriesSeriesIdMetadataRouteHandler: RouteHandler<
  typeof patchApiV1SeriesSeriesIdMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SeriesSeriesIdMetadataRefreshRouteHandler: RouteHandler<
  typeof postApiV1SeriesSeriesIdMetadataRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SeriesSeriesIdReadProgressRouteHandler: RouteHandler<
  typeof deleteApiV1SeriesSeriesIdReadProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SeriesSeriesIdReadProgressRouteHandler: RouteHandler<
  typeof postApiV1SeriesSeriesIdReadProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SeriesSeriesIdThumbnailRouteHandler: RouteHandler<
  typeof getApiV1SeriesSeriesIdThumbnailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SeriesSeriesIdThumbnailsRouteHandler: RouteHandler<
  typeof getApiV1SeriesSeriesIdThumbnailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SeriesSeriesIdThumbnailsRouteHandler: RouteHandler<
  typeof postApiV1SeriesSeriesIdThumbnailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SeriesSeriesIdThumbnailsThumbnailIdRouteHandler: RouteHandler<
  typeof deleteApiV1SeriesSeriesIdThumbnailsThumbnailIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SeriesSeriesIdThumbnailsThumbnailIdRouteHandler: RouteHandler<
  typeof getApiV1SeriesSeriesIdThumbnailsThumbnailIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SeriesSeriesIdThumbnailsThumbnailIdSelectedRouteHandler: RouteHandler<
  typeof putApiV1SeriesSeriesIdThumbnailsThumbnailIdSelectedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SettingsRouteHandler: RouteHandler<typeof getApiV1SettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiV1SettingsRouteHandler: RouteHandler<typeof patchApiV1SettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1SharingLabelsRouteHandler: RouteHandler<
  typeof getApiV1SharingLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SyncpointsMeRouteHandler: RouteHandler<
  typeof deleteApiV1SyncpointsMeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TagsRouteHandler: RouteHandler<typeof getApiV1TagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TagsBookRouteHandler: RouteHandler<typeof getApiV1TagsBookRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1TagsSeriesRouteHandler: RouteHandler<typeof getApiV1TagsSeriesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV1TasksRouteHandler: RouteHandler<typeof deleteApiV1TasksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1TransientBooksRouteHandler: RouteHandler<
  typeof postApiV1TransientBooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TransientBooksIdAnalyzeRouteHandler: RouteHandler<
  typeof postApiV1TransientBooksIdAnalyzeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TransientBooksIdPagesPageNumberRouteHandler: RouteHandler<
  typeof getApiV1TransientBooksIdPagesPageNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AgeRatingsRouteHandler: RouteHandler<typeof getApiV2AgeRatingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2AuthorsRouteHandler: RouteHandler<typeof getApiV2AuthorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AuthorsNamesRouteHandler: RouteHandler<
  typeof getApiV2AuthorsNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AuthorsRolesRouteHandler: RouteHandler<
  typeof getApiV2AuthorsRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GenresRouteHandler: RouteHandler<typeof getApiV2GenresRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2LanguagesRouteHandler: RouteHandler<typeof getApiV2LanguagesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2PublishersRouteHandler: RouteHandler<typeof getApiV2PublishersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2SeriesReleaseYearsRouteHandler: RouteHandler<
  typeof getApiV2SeriesReleaseYearsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SeriesSeriesIdReadProgressTachiyomiRouteHandler: RouteHandler<
  typeof getApiV2SeriesSeriesIdReadProgressTachiyomiRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2SeriesSeriesIdReadProgressTachiyomiRouteHandler: RouteHandler<
  typeof putApiV2SeriesSeriesIdReadProgressTachiyomiRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SharingLabelsRouteHandler: RouteHandler<
  typeof getApiV2SharingLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TagsRouteHandler: RouteHandler<typeof getApiV2TagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersRouteHandler: RouteHandler<typeof getApiV2UsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2UsersRouteHandler: RouteHandler<typeof postApiV2UsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersAuthenticationActivityRouteHandler: RouteHandler<
  typeof getApiV2UsersAuthenticationActivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersMeRouteHandler: RouteHandler<typeof getApiV2UsersMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersMeApiKeysRouteHandler: RouteHandler<
  typeof getApiV2UsersMeApiKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2UsersMeApiKeysRouteHandler: RouteHandler<
  typeof postApiV2UsersMeApiKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2UsersMeApiKeysKeyIdRouteHandler: RouteHandler<
  typeof deleteApiV2UsersMeApiKeysKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersMeAuthenticationActivityRouteHandler: RouteHandler<
  typeof getApiV2UsersMeAuthenticationActivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2UsersMePasswordRouteHandler: RouteHandler<
  typeof patchApiV2UsersMePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2UsersIdRouteHandler: RouteHandler<typeof deleteApiV2UsersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiV2UsersIdRouteHandler: RouteHandler<typeof patchApiV2UsersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersIdAuthenticationActivityLatestRouteHandler: RouteHandler<
  typeof getApiV2UsersIdAuthenticationActivityLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2UsersIdPasswordRouteHandler: RouteHandler<
  typeof patchApiV2UsersIdPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3NotableEntitiesRouteHandler: RouteHandler<
  typeof getApiV3NotableEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3NotableEntitiesKindsRouteHandler: RouteHandler<
  typeof getApiV3NotableEntitiesKindsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3NotableEntitiesNamesRouteHandler: RouteHandler<
  typeof getApiV3NotableEntitiesNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
