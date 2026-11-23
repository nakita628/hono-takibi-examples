import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActuatorInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.actuator.info.$get(undefined, options))
}

export async function getApiLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.api.logout.$get(undefined, options))
}

export async function postApiLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.api.logout.$post(undefined, options))
}

export async function getApiV1AgeRatings(
  args: InferRequestType<(typeof client.api.v1)['age-ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['age-ratings'].$get(args, options))
}

export async function getApiV1Announcements(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.announcements.$get(undefined, options))
}

export async function putApiV1Announcements(
  args: InferRequestType<typeof client.api.v1.announcements.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.announcements.$put(args, options))
}

export async function getApiV1Authors(
  args: InferRequestType<typeof client.api.v1.authors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.authors.$get(args, options))
}

export async function getApiV1AuthorsNames(
  args: InferRequestType<typeof client.api.v1.authors.names.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.authors.names.$get(args, options))
}

export async function getApiV1AuthorsRoles(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.authors.roles.$get(undefined, options))
}

export async function getApiV1Books(
  args: InferRequestType<typeof client.api.v1.books.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books.$get(args, options))
}

export async function getApiV1BooksDuplicates(
  args: InferRequestType<typeof client.api.v1.books.duplicates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books.duplicates.$get(args, options))
}

export async function postApiV1BooksImport(
  args: InferRequestType<typeof client.api.v1.books.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books.import.$post(args, options))
}

export async function getApiV1BooksLatest(
  args: InferRequestType<typeof client.api.v1.books.latest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books.latest.$get(args, options))
}

export async function postApiV1BooksList(
  args: InferRequestType<typeof client.api.v1.books.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books.list.$post(args, options))
}

export async function patchApiV1BooksMetadata(
  args: InferRequestType<typeof client.api.v1.books.metadata.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books.metadata.$patch(args, options))
}

export async function getApiV1BooksOndeck(
  args: InferRequestType<typeof client.api.v1.books.ondeck.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books.ondeck.$get(args, options))
}

export async function putApiV1BooksThumbnails(
  args: InferRequestType<typeof client.api.v1.books.thumbnails.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books.thumbnails.$put(args, options))
}

export async function getApiV1BooksBookId(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books[':bookId'].$get(args, options))
}

export async function postApiV1BooksBookIdAnalyze(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['analyze']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books[':bookId'].analyze.$post(args, options))
}

export async function getApiV1BooksBookIdFile(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books[':bookId'].file.$get(args, options))
}

export async function deleteApiV1BooksBookIdFile(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books[':bookId'].file.$delete(args, options))
}

export async function getApiV1BooksBookIdFileStar(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['*']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books[':bookId'].file['*'].$get(args, options))
}

export async function getApiV1BooksBookIdManifest(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books[':bookId'].manifest.$get(args, options))
}

export async function getApiV1BooksBookIdManifestDivina(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['divina']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books[':bookId'].manifest.divina.$get(args, options))
}

export async function getApiV1BooksBookIdManifestEpub(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['epub']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books[':bookId'].manifest.epub.$get(args, options))
}

export async function getApiV1BooksBookIdManifestPdf(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books[':bookId'].manifest.pdf.$get(args, options))
}

export async function patchApiV1BooksBookIdMetadata(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['metadata']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books[':bookId'].metadata.$patch(args, options))
}

export async function postApiV1BooksBookIdMetadataRefresh(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['metadata']['refresh']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books[':bookId'].metadata.refresh.$post(args, options))
}

export async function getApiV1BooksBookIdNext(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['next']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books[':bookId'].next.$get(args, options))
}

export async function getApiV1BooksBookIdPages(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['pages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books[':bookId'].pages.$get(args, options))
}

export async function getApiV1BooksBookIdPagesPageNumber(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.books[':bookId'].pages[':pageNumber'].$get(args, options),
  )
}

export async function getApiV1BooksBookIdPagesPageNumberRaw(
  args: InferRequestType<
    (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['raw']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.books[':bookId'].pages[':pageNumber'].raw.$get(args, options),
  )
}

export async function getApiV1BooksBookIdPagesPageNumberThumbnail(
  args: InferRequestType<
    (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['thumbnail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.books[':bookId'].pages[':pageNumber'].thumbnail.$get(args, options),
  )
}

export async function getApiV1BooksBookIdPositions(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['positions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books[':bookId'].positions.$get(args, options))
}

export async function getApiV1BooksBookIdPrevious(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['previous']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books[':bookId'].previous.$get(args, options))
}

export async function getApiV1BooksBookIdProgression(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['progression']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books[':bookId'].progression.$get(args, options))
}

export async function putApiV1BooksBookIdProgression(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['progression']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books[':bookId'].progression.$put(args, options))
}

export async function deleteApiV1BooksBookIdReadProgress(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['read-progress']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books[':bookId']['read-progress'].$delete(args, options))
}

export async function patchApiV1BooksBookIdReadProgress(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['read-progress']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books[':bookId']['read-progress'].$patch(args, options))
}

export async function getApiV1BooksBookIdReadlists(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['readlists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books[':bookId'].readlists.$get(args, options))
}

export async function getApiV1BooksBookIdResourceResource(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['resource'][':resource']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.books[':bookId'].resource[':resource'].$get(args, options),
  )
}

export async function getApiV1BooksBookIdThumbnail(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books[':bookId'].thumbnail.$get(args, options))
}

export async function getApiV1BooksBookIdThumbnails(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books[':bookId'].thumbnails.$get(args, options))
}

export async function postApiV1BooksBookIdThumbnails(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.books[':bookId'].thumbnails.$post(args, options))
}

export async function getApiV1BooksBookIdThumbnailsThumbnailId(
  args: InferRequestType<
    (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.books[':bookId'].thumbnails[':thumbnailId'].$get(args, options),
  )
}

export async function deleteApiV1BooksBookIdThumbnailsThumbnailId(
  args: InferRequestType<
    (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.books[':bookId'].thumbnails[':thumbnailId'].$delete(args, options),
  )
}

export async function putApiV1BooksBookIdThumbnailsThumbnailIdSelected(
  args: InferRequestType<
    (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['selected']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.books[':bookId'].thumbnails[':thumbnailId'].selected.$put(args, options),
  )
}

export async function getApiV1Claim(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.claim.$get(undefined, options))
}

export async function postApiV1Claim(
  args: InferRequestType<typeof client.api.v1.claim.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.claim.$post(args, options))
}

export async function deleteApiV1ClientSettingsGlobal(
  args: InferRequestType<(typeof client.api.v1)['client-settings']['global']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['client-settings'].global.$delete(args, options))
}

export async function patchApiV1ClientSettingsGlobal(
  args: InferRequestType<(typeof client.api.v1)['client-settings']['global']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['client-settings'].global.$patch(args, options))
}

export async function getApiV1ClientSettingsGlobalList(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1['client-settings'].global.list.$get(undefined, options))
}

export async function deleteApiV1ClientSettingsUser(
  args: InferRequestType<(typeof client.api.v1)['client-settings']['user']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['client-settings'].user.$delete(args, options))
}

export async function patchApiV1ClientSettingsUser(
  args: InferRequestType<(typeof client.api.v1)['client-settings']['user']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['client-settings'].user.$patch(args, options))
}

export async function getApiV1ClientSettingsUserList(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1['client-settings'].user.list.$get(undefined, options))
}

export async function getApiV1Collections(
  args: InferRequestType<typeof client.api.v1.collections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.collections.$get(args, options))
}

export async function postApiV1Collections(
  args: InferRequestType<typeof client.api.v1.collections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.collections.$post(args, options))
}

export async function getApiV1CollectionsId(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.collections[':id'].$get(args, options))
}

export async function deleteApiV1CollectionsId(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.collections[':id'].$delete(args, options))
}

export async function patchApiV1CollectionsId(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.collections[':id'].$patch(args, options))
}

export async function getApiV1CollectionsIdSeries(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['series']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.collections[':id'].series.$get(args, options))
}

export async function getApiV1CollectionsIdThumbnail(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.collections[':id'].thumbnail.$get(args, options))
}

export async function getApiV1CollectionsIdThumbnails(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnails']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.collections[':id'].thumbnails.$get(args, options))
}

export async function postApiV1CollectionsIdThumbnails(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.collections[':id'].thumbnails.$post(args, options))
}

export async function getApiV1CollectionsIdThumbnailsThumbnailId(
  args: InferRequestType<
    (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.collections[':id'].thumbnails[':thumbnailId'].$get(args, options),
  )
}

export async function deleteApiV1CollectionsIdThumbnailsThumbnailId(
  args: InferRequestType<
    (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.collections[':id'].thumbnails[':thumbnailId'].$delete(args, options),
  )
}

export async function putApiV1CollectionsIdThumbnailsThumbnailIdSelected(
  args: InferRequestType<
    (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['selected']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.collections[':id'].thumbnails[':thumbnailId'].selected.$put(args, options),
  )
}

export async function postApiV1Filesystem(
  args: InferRequestType<typeof client.api.v1.filesystem.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.filesystem.$post(args, options))
}

export async function getApiV1FontsFamilies(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.fonts.families.$get(undefined, options))
}

export async function getApiV1FontsResourceFontFamilyCss(
  args: InferRequestType<(typeof client.api.v1.fonts.resource)[':fontFamily']['css']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.fonts.resource[':fontFamily'].css.$get(args, options))
}

export async function getApiV1FontsResourceFontFamilyFontFile(
  args: InferRequestType<(typeof client.api.v1.fonts.resource)[':fontFamily'][':fontFile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.fonts.resource[':fontFamily'][':fontFile'].$get(args, options),
  )
}

export async function getApiV1Genres(
  args: InferRequestType<typeof client.api.v1.genres.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.genres.$get(args, options))
}

export async function getApiV1History(
  args: InferRequestType<typeof client.api.v1.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.history.$get(args, options))
}

export async function getApiV1Languages(
  args: InferRequestType<typeof client.api.v1.languages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.languages.$get(args, options))
}

export async function getApiV1Libraries(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.libraries.$get(undefined, options))
}

export async function postApiV1Libraries(
  args: InferRequestType<typeof client.api.v1.libraries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.libraries.$post(args, options))
}

export async function getApiV1LibrariesLibraryId(
  args: InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.libraries[':libraryId'].$get(args, options))
}

export async function putApiV1LibrariesLibraryId(
  args: InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.libraries[':libraryId'].$put(args, options))
}

export async function deleteApiV1LibrariesLibraryId(
  args: InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.libraries[':libraryId'].$delete(args, options))
}

export async function patchApiV1LibrariesLibraryId(
  args: InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.libraries[':libraryId'].$patch(args, options))
}

export async function postApiV1LibrariesLibraryIdAnalyze(
  args: InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['analyze']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.libraries[':libraryId'].analyze.$post(args, options))
}

export async function postApiV1LibrariesLibraryIdEmptyTrash(
  args: InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['empty-trash']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.libraries[':libraryId']['empty-trash'].$post(args, options),
  )
}

export async function postApiV1LibrariesLibraryIdMetadataRefresh(
  args: InferRequestType<
    (typeof client.api.v1.libraries)[':libraryId']['metadata']['refresh']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.libraries[':libraryId'].metadata.refresh.$post(args, options),
  )
}

export async function postApiV1LibrariesLibraryIdScan(
  args: InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['scan']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.libraries[':libraryId'].scan.$post(args, options))
}

export async function getApiV1LoginSetCookie(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.login['set-cookie'].$get(undefined, options))
}

export async function getApiV1Oauth2Providers(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.oauth2.providers.$get(undefined, options))
}

export async function getApiV1PageHashes(
  args: InferRequestType<(typeof client.api.v1)['page-hashes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['page-hashes'].$get(args, options))
}

export async function putApiV1PageHashes(
  args: InferRequestType<(typeof client.api.v1)['page-hashes']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['page-hashes'].$put(args, options))
}

export async function getApiV1PageHashesUnknown(
  args: InferRequestType<(typeof client.api.v1)['page-hashes']['unknown']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['page-hashes'].unknown.$get(args, options))
}

export async function getApiV1PageHashesUnknownPageHashThumbnail(
  args: InferRequestType<
    (typeof client.api.v1)['page-hashes']['unknown'][':pageHash']['thumbnail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['page-hashes'].unknown[':pageHash'].thumbnail.$get(args, options),
  )
}

export async function getApiV1PageHashesPageHash(
  args: InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['page-hashes'][':pageHash'].$get(args, options))
}

export async function postApiV1PageHashesPageHashDeleteAll(
  args: InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['delete-all']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['page-hashes'][':pageHash']['delete-all'].$post(args, options),
  )
}

export async function postApiV1PageHashesPageHashDeleteMatch(
  args: InferRequestType<
    (typeof client.api.v1)['page-hashes'][':pageHash']['delete-match']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['page-hashes'][':pageHash']['delete-match'].$post(args, options),
  )
}

export async function getApiV1PageHashesPageHashThumbnail(
  args: InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['thumbnail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['page-hashes'][':pageHash'].thumbnail.$get(args, options),
  )
}

export async function getApiV1Publishers(
  args: InferRequestType<typeof client.api.v1.publishers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.publishers.$get(args, options))
}

export async function getApiV1Readlists(
  args: InferRequestType<typeof client.api.v1.readlists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.readlists.$get(args, options))
}

export async function postApiV1Readlists(
  args: InferRequestType<typeof client.api.v1.readlists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.readlists.$post(args, options))
}

export async function postApiV1ReadlistsMatchComicrack(
  args: InferRequestType<typeof client.api.v1.readlists.match.comicrack.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.readlists.match.comicrack.$post(args, options))
}

export async function getApiV1ReadlistsId(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.readlists[':id'].$get(args, options))
}

export async function deleteApiV1ReadlistsId(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.readlists[':id'].$delete(args, options))
}

export async function patchApiV1ReadlistsId(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.readlists[':id'].$patch(args, options))
}

export async function getApiV1ReadlistsIdBooks(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['books']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.readlists[':id'].books.$get(args, options))
}

export async function getApiV1ReadlistsIdBooksBookIdNext(
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['books'][':bookId']['next']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.readlists[':id'].books[':bookId'].next.$get(args, options),
  )
}

export async function getApiV1ReadlistsIdBooksBookIdPrevious(
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['books'][':bookId']['previous']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.readlists[':id'].books[':bookId'].previous.$get(args, options),
  )
}

export async function getApiV1ReadlistsIdFile(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.readlists[':id'].file.$get(args, options))
}

export async function getApiV1ReadlistsIdReadProgressTachiyomi(
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.readlists[':id']['read-progress'].tachiyomi.$get(args, options),
  )
}

export async function putApiV1ReadlistsIdReadProgressTachiyomi(
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.readlists[':id']['read-progress'].tachiyomi.$put(args, options),
  )
}

export async function getApiV1ReadlistsIdThumbnail(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.readlists[':id'].thumbnail.$get(args, options))
}

export async function getApiV1ReadlistsIdThumbnails(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.readlists[':id'].thumbnails.$get(args, options))
}

export async function postApiV1ReadlistsIdThumbnails(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.readlists[':id'].thumbnails.$post(args, options))
}

export async function getApiV1ReadlistsIdThumbnailsThumbnailId(
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.readlists[':id'].thumbnails[':thumbnailId'].$get(args, options),
  )
}

export async function deleteApiV1ReadlistsIdThumbnailsThumbnailId(
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.readlists[':id'].thumbnails[':thumbnailId'].$delete(args, options),
  )
}

export async function putApiV1ReadlistsIdThumbnailsThumbnailIdSelected(
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['selected']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.readlists[':id'].thumbnails[':thumbnailId'].selected.$put(args, options),
  )
}

export async function getApiV1Releases(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.releases.$get(undefined, options))
}

export async function getApiV1Series(
  args: InferRequestType<typeof client.api.v1.series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.series.$get(args, options))
}

export async function getApiV1SeriesAlphabeticalGroups(
  args: InferRequestType<(typeof client.api.v1.series)['alphabetical-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.series['alphabetical-groups'].$get(args, options))
}

export async function getApiV1SeriesLatest(
  args: InferRequestType<typeof client.api.v1.series.latest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.series.latest.$get(args, options))
}

export async function postApiV1SeriesList(
  args: InferRequestType<typeof client.api.v1.series.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.series.list.$post(args, options))
}

export async function postApiV1SeriesListAlphabeticalGroups(
  args: InferRequestType<(typeof client.api.v1.series.list)['alphabetical-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.series.list['alphabetical-groups'].$post(args, options))
}

export async function getApiV1SeriesNew(
  args: InferRequestType<typeof client.api.v1.series.new.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.series.new.$get(args, options))
}

export async function getApiV1SeriesReleaseDates(
  args: InferRequestType<(typeof client.api.v1.series)['release-dates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.series['release-dates'].$get(args, options))
}

export async function getApiV1SeriesUpdated(
  args: InferRequestType<typeof client.api.v1.series.updated.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.series.updated.$get(args, options))
}

export async function getApiV1SeriesSeriesId(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.series[':seriesId'].$get(args, options))
}

export async function postApiV1SeriesSeriesIdAnalyze(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['analyze']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.series[':seriesId'].analyze.$post(args, options))
}

export async function getApiV1SeriesSeriesIdBooks(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['books']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.series[':seriesId'].books.$get(args, options))
}

export async function getApiV1SeriesSeriesIdCollections(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.series[':seriesId'].collections.$get(args, options))
}

export async function getApiV1SeriesSeriesIdFile(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.series[':seriesId'].file.$get(args, options))
}

export async function deleteApiV1SeriesSeriesIdFile(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['file']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.series[':seriesId'].file.$delete(args, options))
}

export async function patchApiV1SeriesSeriesIdMetadata(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['metadata']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.series[':seriesId'].metadata.$patch(args, options))
}

export async function postApiV1SeriesSeriesIdMetadataRefresh(
  args: InferRequestType<
    (typeof client.api.v1.series)[':seriesId']['metadata']['refresh']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.series[':seriesId'].metadata.refresh.$post(args, options),
  )
}

export async function postApiV1SeriesSeriesIdReadProgress(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['read-progress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.series[':seriesId']['read-progress'].$post(args, options),
  )
}

export async function deleteApiV1SeriesSeriesIdReadProgress(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['read-progress']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.series[':seriesId']['read-progress'].$delete(args, options),
  )
}

export async function getApiV1SeriesSeriesIdThumbnail(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.series[':seriesId'].thumbnail.$get(args, options))
}

export async function getApiV1SeriesSeriesIdThumbnails(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.series[':seriesId'].thumbnails.$get(args, options))
}

export async function postApiV1SeriesSeriesIdThumbnails(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.series[':seriesId'].thumbnails.$post(args, options))
}

export async function getApiV1SeriesSeriesIdThumbnailsThumbnailId(
  args: InferRequestType<
    (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.series[':seriesId'].thumbnails[':thumbnailId'].$get(args, options),
  )
}

export async function deleteApiV1SeriesSeriesIdThumbnailsThumbnailId(
  args: InferRequestType<
    (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.series[':seriesId'].thumbnails[':thumbnailId'].$delete(args, options),
  )
}

export async function putApiV1SeriesSeriesIdThumbnailsThumbnailIdSelected(
  args: InferRequestType<
    (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['selected']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.series[':seriesId'].thumbnails[':thumbnailId'].selected.$put(args, options),
  )
}

export async function getApiV1Settings(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.settings.$get(undefined, options))
}

export async function patchApiV1Settings(
  args: InferRequestType<typeof client.api.v1.settings.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.settings.$patch(args, options))
}

export async function getApiV1SharingLabels(
  args: InferRequestType<(typeof client.api.v1)['sharing-labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['sharing-labels'].$get(args, options))
}

export async function deleteApiV1SyncpointsMe(
  args: InferRequestType<typeof client.api.v1.syncpoints.me.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.syncpoints.me.$delete(args, options))
}

export async function getApiV1Tags(
  args: InferRequestType<typeof client.api.v1.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tags.$get(args, options))
}

export async function getApiV1TagsBook(
  args: InferRequestType<typeof client.api.v1.tags.book.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tags.book.$get(args, options))
}

export async function getApiV1TagsSeries(
  args: InferRequestType<typeof client.api.v1.tags.series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tags.series.$get(args, options))
}

export async function deleteApiV1Tasks(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.tasks.$delete(undefined, options))
}

export async function postApiV1TransientBooks(
  args: InferRequestType<(typeof client.api.v1)['transient-books']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['transient-books'].$post(args, options))
}

export async function postApiV1TransientBooksIdAnalyze(
  args: InferRequestType<(typeof client.api.v1)['transient-books'][':id']['analyze']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['transient-books'][':id'].analyze.$post(args, options))
}

export async function getApiV1TransientBooksIdPagesPageNumber(
  args: InferRequestType<
    (typeof client.api.v1)['transient-books'][':id']['pages'][':pageNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['transient-books'][':id'].pages[':pageNumber'].$get(args, options),
  )
}

export async function getApiV2AgeRatings(
  args: InferRequestType<(typeof client.api.v2)['age-ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['age-ratings'].$get(args, options))
}

export async function getApiV2Authors(
  args: InferRequestType<typeof client.api.v2.authors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.authors.$get(args, options))
}

export async function getApiV2AuthorsNames(
  args: InferRequestType<typeof client.api.v2.authors.names.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.authors.names.$get(args, options))
}

export async function getApiV2AuthorsRoles(
  args: InferRequestType<typeof client.api.v2.authors.roles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.authors.roles.$get(args, options))
}

export async function getApiV2Genres(
  args: InferRequestType<typeof client.api.v2.genres.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.genres.$get(args, options))
}

export async function getApiV2Languages(
  args: InferRequestType<typeof client.api.v2.languages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.languages.$get(args, options))
}

export async function getApiV2Publishers(
  args: InferRequestType<typeof client.api.v2.publishers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.publishers.$get(args, options))
}

export async function getApiV2SeriesReleaseYears(
  args: InferRequestType<(typeof client.api.v2.series)['release-years']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.series['release-years'].$get(args, options))
}

export async function getApiV2SeriesSeriesIdReadProgressTachiyomi(
  args: InferRequestType<
    (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.series[':seriesId']['read-progress'].tachiyomi.$get(args, options),
  )
}

export async function putApiV2SeriesSeriesIdReadProgressTachiyomi(
  args: InferRequestType<
    (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.series[':seriesId']['read-progress'].tachiyomi.$put(args, options),
  )
}

export async function getApiV2SharingLabels(
  args: InferRequestType<(typeof client.api.v2)['sharing-labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['sharing-labels'].$get(args, options))
}

export async function getApiV2Tags(
  args: InferRequestType<typeof client.api.v2.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tags.$get(args, options))
}

export async function getApiV2Users(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.users.$get(undefined, options))
}

export async function postApiV2Users(
  args: InferRequestType<typeof client.api.v2.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users.$post(args, options))
}

export async function getApiV2UsersAuthenticationActivity(
  args: InferRequestType<(typeof client.api.v2.users)['authentication-activity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users['authentication-activity'].$get(args, options))
}

export async function getApiV2UsersMe(
  args: InferRequestType<typeof client.api.v2.users.me.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users.me.$get(args, options))
}

export async function getApiV2UsersMeApiKeys(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.users.me['api-keys'].$get(undefined, options))
}

export async function postApiV2UsersMeApiKeys(
  args: InferRequestType<(typeof client.api.v2.users.me)['api-keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users.me['api-keys'].$post(args, options))
}

export async function deleteApiV2UsersMeApiKeysKeyId(
  args: InferRequestType<(typeof client.api.v2.users.me)['api-keys'][':keyId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users.me['api-keys'][':keyId'].$delete(args, options))
}

export async function getApiV2UsersMeAuthenticationActivity(
  args: InferRequestType<(typeof client.api.v2.users.me)['authentication-activity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users.me['authentication-activity'].$get(args, options))
}

export async function patchApiV2UsersMePassword(
  args: InferRequestType<typeof client.api.v2.users.me.password.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users.me.password.$patch(args, options))
}

export async function deleteApiV2UsersId(
  args: InferRequestType<(typeof client.api.v2.users)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':id'].$delete(args, options))
}

export async function patchApiV2UsersId(
  args: InferRequestType<(typeof client.api.v2.users)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':id'].$patch(args, options))
}

export async function getApiV2UsersIdAuthenticationActivityLatest(
  args: InferRequestType<
    (typeof client.api.v2.users)[':id']['authentication-activity']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':id']['authentication-activity'].latest.$get(args, options),
  )
}

export async function patchApiV2UsersIdPassword(
  args: InferRequestType<(typeof client.api.v2.users)[':id']['password']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':id'].password.$patch(args, options))
}

export async function getApiV3NotableEntities(
  args: InferRequestType<(typeof client.api.v3)['notable-entities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3['notable-entities'].$get(args, options))
}

export async function getApiV3NotableEntitiesKinds(
  args: InferRequestType<(typeof client.api.v3)['notable-entities']['kinds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3['notable-entities'].kinds.$get(args, options))
}

export async function getApiV3NotableEntitiesNames(
  args: InferRequestType<(typeof client.api.v3)['notable-entities']['names']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3['notable-entities'].names.$get(args, options))
}
