import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postBooksV1CloudloadingAddBook(
  args: InferRequestType<typeof client.books.v1.cloudloading.addBook.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.cloudloading.addBook.$post(args, options))
}

export async function postBooksV1CloudloadingDeleteBook(
  args: InferRequestType<typeof client.books.v1.cloudloading.deleteBook.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.cloudloading.deleteBook.$post(args, options))
}

export async function postBooksV1CloudloadingUpdateBook(
  args: InferRequestType<typeof client.books.v1.cloudloading.updateBook.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.cloudloading.updateBook.$post(args, options))
}

export async function getBooksV1DictionaryListOfflineMetadata(
  args: InferRequestType<typeof client.books.v1.dictionary.listOfflineMetadata.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.dictionary.listOfflineMetadata.$get(args, options))
}

export async function getBooksV1FamilysharingGetFamilyInfo(
  args: InferRequestType<typeof client.books.v1.familysharing.getFamilyInfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.familysharing.getFamilyInfo.$get(args, options))
}

export async function postBooksV1FamilysharingShare(
  args: InferRequestType<typeof client.books.v1.familysharing.share.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.familysharing.share.$post(args, options))
}

export async function postBooksV1FamilysharingUnshare(
  args: InferRequestType<typeof client.books.v1.familysharing.unshare.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.familysharing.unshare.$post(args, options))
}

export async function getBooksV1MyconfigGetUserSettings(
  args: InferRequestType<typeof client.books.v1.myconfig.getUserSettings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.myconfig.getUserSettings.$get(args, options))
}

export async function postBooksV1MyconfigReleaseDownloadAccess(
  args: InferRequestType<typeof client.books.v1.myconfig.releaseDownloadAccess.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.myconfig.releaseDownloadAccess.$post(args, options))
}

export async function postBooksV1MyconfigRequestAccess(
  args: InferRequestType<typeof client.books.v1.myconfig.requestAccess.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.myconfig.requestAccess.$post(args, options))
}

export async function postBooksV1MyconfigSyncVolumeLicenses(
  args: InferRequestType<typeof client.books.v1.myconfig.syncVolumeLicenses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.myconfig.syncVolumeLicenses.$post(args, options))
}

export async function postBooksV1MyconfigUpdateUserSettings(
  args: InferRequestType<typeof client.books.v1.myconfig.updateUserSettings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.myconfig.updateUserSettings.$post(args, options))
}

export async function getBooksV1MylibraryAnnotations(
  args: InferRequestType<typeof client.books.v1.mylibrary.annotations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.mylibrary.annotations.$get(args, options))
}

export async function postBooksV1MylibraryAnnotations(
  args: InferRequestType<typeof client.books.v1.mylibrary.annotations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.mylibrary.annotations.$post(args, options))
}

export async function postBooksV1MylibraryAnnotationsSummary(
  args: InferRequestType<typeof client.books.v1.mylibrary.annotations.summary.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.mylibrary.annotations.summary.$post(args, options))
}

export async function putBooksV1MylibraryAnnotationsAnnotationId(
  args: InferRequestType<(typeof client.books.v1.mylibrary.annotations)[':annotationId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.books.v1.mylibrary.annotations[':annotationId'].$put(args, options),
  )
}

export async function deleteBooksV1MylibraryAnnotationsAnnotationId(
  args: InferRequestType<
    (typeof client.books.v1.mylibrary.annotations)[':annotationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.books.v1.mylibrary.annotations[':annotationId'].$delete(args, options),
  )
}

export async function getBooksV1MylibraryBookshelves(
  args: InferRequestType<typeof client.books.v1.mylibrary.bookshelves.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.mylibrary.bookshelves.$get(args, options))
}

export async function getBooksV1MylibraryBookshelvesShelf(
  args: InferRequestType<(typeof client.books.v1.mylibrary.bookshelves)[':shelf']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.mylibrary.bookshelves[':shelf'].$get(args, options))
}

export async function postBooksV1MylibraryBookshelvesShelfAddVolume(
  args: InferRequestType<
    (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['addVolume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.books.v1.mylibrary.bookshelves[':shelf'].addVolume.$post(args, options),
  )
}

export async function postBooksV1MylibraryBookshelvesShelfClearVolumes(
  args: InferRequestType<
    (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['clearVolumes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.books.v1.mylibrary.bookshelves[':shelf'].clearVolumes.$post(args, options),
  )
}

export async function postBooksV1MylibraryBookshelvesShelfMoveVolume(
  args: InferRequestType<
    (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['moveVolume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.books.v1.mylibrary.bookshelves[':shelf'].moveVolume.$post(args, options),
  )
}

export async function postBooksV1MylibraryBookshelvesShelfRemoveVolume(
  args: InferRequestType<
    (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['removeVolume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.books.v1.mylibrary.bookshelves[':shelf'].removeVolume.$post(args, options),
  )
}

export async function getBooksV1MylibraryBookshelvesShelfVolumes(
  args: InferRequestType<
    (typeof client.books.v1.mylibrary.bookshelves)[':shelf']['volumes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.books.v1.mylibrary.bookshelves[':shelf'].volumes.$get(args, options),
  )
}

export async function getBooksV1MylibraryReadingpositionsVolumeId(
  args: InferRequestType<(typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.books.v1.mylibrary.readingpositions[':volumeId'].$get(args, options),
  )
}

export async function postBooksV1MylibraryReadingpositionsVolumeIdSetPosition(
  args: InferRequestType<
    (typeof client.books.v1.mylibrary.readingpositions)[':volumeId']['setPosition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.books.v1.mylibrary.readingpositions[':volumeId'].setPosition.$post(args, options),
  )
}

export async function getBooksV1NotificationGet(
  args: InferRequestType<typeof client.books.v1.notification.get.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.notification.get.$get(args, options))
}

export async function getBooksV1OnboardingListCategories(
  args: InferRequestType<typeof client.books.v1.onboarding.listCategories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.onboarding.listCategories.$get(args, options))
}

export async function getBooksV1OnboardingListCategoryVolumes(
  args: InferRequestType<typeof client.books.v1.onboarding.listCategoryVolumes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.onboarding.listCategoryVolumes.$get(args, options))
}

export async function getBooksV1PersonalizedstreamGet(
  args: InferRequestType<typeof client.books.v1.personalizedstream.get.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.personalizedstream.get.$get(args, options))
}

export async function postBooksV1PromoofferAccept(
  args: InferRequestType<typeof client.books.v1.promooffer.accept.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.promooffer.accept.$post(args, options))
}

export async function postBooksV1PromoofferDismiss(
  args: InferRequestType<typeof client.books.v1.promooffer.dismiss.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.promooffer.dismiss.$post(args, options))
}

export async function getBooksV1PromoofferGet(
  args: InferRequestType<typeof client.books.v1.promooffer.get.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.promooffer.get.$get(args, options))
}

export async function getBooksV1SeriesGet(
  args: InferRequestType<typeof client.books.v1.series.get.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.series.get.$get(args, options))
}

export async function getBooksV1SeriesMembershipGet(
  args: InferRequestType<typeof client.books.v1.series.membership.get.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.series.membership.get.$get(args, options))
}

export async function getBooksV1UsersUserIdBookshelves(
  args: InferRequestType<(typeof client.books.v1.users)[':userId']['bookshelves']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.users[':userId'].bookshelves.$get(args, options))
}

export async function getBooksV1UsersUserIdBookshelvesShelf(
  args: InferRequestType<
    (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.books.v1.users[':userId'].bookshelves[':shelf'].$get(args, options),
  )
}

export async function getBooksV1UsersUserIdBookshelvesShelfVolumes(
  args: InferRequestType<
    (typeof client.books.v1.users)[':userId']['bookshelves'][':shelf']['volumes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.books.v1.users[':userId'].bookshelves[':shelf'].volumes.$get(args, options),
  )
}

export async function getBooksV1Volumes(
  args: InferRequestType<typeof client.books.v1.volumes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.volumes.$get(args, options))
}

export async function getBooksV1VolumesMybooks(
  args: InferRequestType<typeof client.books.v1.volumes.mybooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.volumes.mybooks.$get(args, options))
}

export async function getBooksV1VolumesRecommended(
  args: InferRequestType<typeof client.books.v1.volumes.recommended.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.volumes.recommended.$get(args, options))
}

export async function postBooksV1VolumesRecommendedRate(
  args: InferRequestType<typeof client.books.v1.volumes.recommended.rate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.volumes.recommended.rate.$post(args, options))
}

export async function getBooksV1VolumesUseruploaded(
  args: InferRequestType<typeof client.books.v1.volumes.useruploaded.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.volumes.useruploaded.$get(args, options))
}

export async function getBooksV1VolumesVolumeId(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.volumes[':volumeId'].$get(args, options))
}

export async function getBooksV1VolumesVolumeIdAssociated(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['associated']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.volumes[':volumeId'].associated.$get(args, options))
}

export async function getBooksV1VolumesVolumeIdLayersLayerId(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.books.v1.volumes[':volumeId'].layers[':layerId'].$get(args, options),
  )
}

export async function getBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationId(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['annotations'][':annotationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.books.v1.volumes[':volumeId'].layers[':layerId'].annotations[':annotationId'].$get(
      args,
      options,
    ),
  )
}

export async function getBooksV1VolumesVolumeIdLayersLayerIdData(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.books.v1.volumes[':volumeId'].layers[':layerId'].data.$get(args, options),
  )
}

export async function getBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataId(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layers'][':layerId']['data'][':annotationDataId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.books.v1.volumes[':volumeId'].layers[':layerId'].data[':annotationDataId'].$get(
      args,
      options,
    ),
  )
}

export async function getBooksV1VolumesVolumeIdLayersummary(
  args: InferRequestType<(typeof client.books.v1.volumes)[':volumeId']['layersummary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books.v1.volumes[':volumeId'].layersummary.$get(args, options))
}

export async function getBooksV1VolumesVolumeIdLayersummarySummaryId(
  args: InferRequestType<
    (typeof client.books.v1.volumes)[':volumeId']['layersummary'][':summaryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.books.v1.volumes[':volumeId'].layersummary[':summaryId'].$get(args, options),
  )
}
