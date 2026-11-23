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

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AgeRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AuthorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AuthorsNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AuthorsRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksDuplicatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BooksImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BooksListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1BooksMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksOndeckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1BooksThumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BooksBookIdAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1BooksBookIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdFileStarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdManifestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdManifestDivinaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdManifestEpubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdManifestPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1BooksBookIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BooksBookIdMetadataRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdPagesPageNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdPagesPageNumberRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdPagesPageNumberThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdPreviousRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdProgressionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1BooksBookIdProgressionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1BooksBookIdReadProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1BooksBookIdReadProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdReadlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdResourceResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdThumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BooksBookIdThumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1BooksBookIdThumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BooksBookIdThumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1BooksBookIdThumbnailsThumbnailIdSelectedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ClientSettingsGlobalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1ClientSettingsGlobalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ClientSettingsGlobalListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ClientSettingsUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1ClientSettingsUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ClientSettingsUserListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1CollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CollectionsIdSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CollectionsIdThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CollectionsIdThumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CollectionsIdThumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CollectionsIdThumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CollectionsIdThumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CollectionsIdThumbnailsThumbnailIdSelectedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1FilesystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FontsFamiliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FontsResourceFontFamilyCssRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FontsResourceFontFamilyFontFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GenresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LibrariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LibrariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1LibrariesLibraryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LibrariesLibraryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1LibrariesLibraryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1LibrariesLibraryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LibrariesLibraryIdAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LibrariesLibraryIdEmptyTrashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LibrariesLibraryIdMetadataRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LibrariesLibraryIdScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LoginSetCookieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1Oauth2ProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PageHashesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PageHashesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PageHashesUnknownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PageHashesUnknownPageHashThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PageHashesPageHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PageHashesPageHashDeleteAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PageHashesPageHashDeleteMatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PageHashesPageHashThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PublishersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReadlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReadlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReadlistsMatchComicrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ReadlistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReadlistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1ReadlistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReadlistsIdBooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReadlistsIdBooksBookIdNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReadlistsIdBooksBookIdPreviousRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReadlistsIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReadlistsIdReadProgressTachiyomiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ReadlistsIdReadProgressTachiyomiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReadlistsIdThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReadlistsIdThumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReadlistsIdThumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ReadlistsIdThumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReadlistsIdThumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ReadlistsIdThumbnailsThumbnailIdSelectedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesAlphabeticalGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SeriesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SeriesListAlphabeticalGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesReleaseDatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SeriesSeriesIdAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesSeriesIdBooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesSeriesIdCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SeriesSeriesIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesSeriesIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1SeriesSeriesIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SeriesSeriesIdMetadataRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SeriesSeriesIdReadProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SeriesSeriesIdReadProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesSeriesIdThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesSeriesIdThumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SeriesSeriesIdThumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SeriesSeriesIdThumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesSeriesIdThumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SeriesSeriesIdThumbnailsThumbnailIdSelectedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SharingLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SyncpointsMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagsBookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagsSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TransientBooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TransientBooksIdAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TransientBooksIdPagesPageNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AgeRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthorsNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthorsRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GenresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PublishersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SeriesReleaseYearsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SeriesSeriesIdReadProgressTachiyomiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SeriesSeriesIdReadProgressTachiyomiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SharingLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersAuthenticationActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersMeApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersMeApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersMeApiKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersMeAuthenticationActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2UsersMePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersIdAuthenticationActivityLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2UsersIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3NotableEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3NotableEntitiesKindsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3NotableEntitiesNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
