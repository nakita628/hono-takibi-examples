import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBooksV1MylibraryAnnotationsAnnotationIdRoute,
  getBooksV1DictionaryListOfflineMetadataRoute,
  getBooksV1FamilysharingGetFamilyInfoRoute,
  getBooksV1MyconfigGetUserSettingsRoute,
  getBooksV1MylibraryAnnotationsRoute,
  getBooksV1MylibraryBookshelvesRoute,
  getBooksV1MylibraryBookshelvesShelfRoute,
  getBooksV1MylibraryBookshelvesShelfVolumesRoute,
  getBooksV1MylibraryReadingpositionsVolumeIdRoute,
  getBooksV1NotificationGetRoute,
  getBooksV1OnboardingListCategoriesRoute,
  getBooksV1OnboardingListCategoryVolumesRoute,
  getBooksV1PersonalizedstreamGetRoute,
  getBooksV1PromoofferGetRoute,
  getBooksV1SeriesGetRoute,
  getBooksV1SeriesMembershipGetRoute,
  getBooksV1UsersUserIdBookshelvesRoute,
  getBooksV1UsersUserIdBookshelvesShelfRoute,
  getBooksV1UsersUserIdBookshelvesShelfVolumesRoute,
  getBooksV1VolumesMybooksRoute,
  getBooksV1VolumesRecommendedRoute,
  getBooksV1VolumesRoute,
  getBooksV1VolumesUseruploadedRoute,
  getBooksV1VolumesVolumeIdAssociatedRoute,
  getBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdRoute,
  getBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdRoute,
  getBooksV1VolumesVolumeIdLayersLayerIdDataRoute,
  getBooksV1VolumesVolumeIdLayersLayerIdRoute,
  getBooksV1VolumesVolumeIdLayersummaryRoute,
  getBooksV1VolumesVolumeIdLayersummarySummaryIdRoute,
  getBooksV1VolumesVolumeIdRoute,
  postBooksV1CloudloadingAddBookRoute,
  postBooksV1CloudloadingDeleteBookRoute,
  postBooksV1CloudloadingUpdateBookRoute,
  postBooksV1FamilysharingShareRoute,
  postBooksV1FamilysharingUnshareRoute,
  postBooksV1MyconfigReleaseDownloadAccessRoute,
  postBooksV1MyconfigRequestAccessRoute,
  postBooksV1MyconfigSyncVolumeLicensesRoute,
  postBooksV1MyconfigUpdateUserSettingsRoute,
  postBooksV1MylibraryAnnotationsRoute,
  postBooksV1MylibraryAnnotationsSummaryRoute,
  postBooksV1MylibraryBookshelvesShelfAddVolumeRoute,
  postBooksV1MylibraryBookshelvesShelfClearVolumesRoute,
  postBooksV1MylibraryBookshelvesShelfMoveVolumeRoute,
  postBooksV1MylibraryBookshelvesShelfRemoveVolumeRoute,
  postBooksV1MylibraryReadingpositionsVolumeIdSetPositionRoute,
  postBooksV1PromoofferAcceptRoute,
  postBooksV1PromoofferDismissRoute,
  postBooksV1VolumesRecommendedRateRoute,
  putBooksV1MylibraryAnnotationsAnnotationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const booksHandler = app
  .openapi(postBooksV1CloudloadingAddBookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1CloudloadingDeleteBookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1CloudloadingUpdateBookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1DictionaryListOfflineMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1FamilysharingGetFamilyInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1FamilysharingShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1FamilysharingUnshareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1MyconfigGetUserSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1MyconfigReleaseDownloadAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1MyconfigRequestAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1MyconfigSyncVolumeLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1MyconfigUpdateUserSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1MylibraryAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1MylibraryAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1MylibraryAnnotationsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBooksV1MylibraryAnnotationsAnnotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBooksV1MylibraryAnnotationsAnnotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1MylibraryBookshelvesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1MylibraryBookshelvesShelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1MylibraryBookshelvesShelfAddVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1MylibraryBookshelvesShelfClearVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1MylibraryBookshelvesShelfMoveVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1MylibraryBookshelvesShelfRemoveVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1MylibraryBookshelvesShelfVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1MylibraryReadingpositionsVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1MylibraryReadingpositionsVolumeIdSetPositionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1NotificationGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1OnboardingListCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1OnboardingListCategoryVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1PersonalizedstreamGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1PromoofferAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1PromoofferDismissRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1PromoofferGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1SeriesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1SeriesMembershipGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1UsersUserIdBookshelvesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1UsersUserIdBookshelvesShelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1UsersUserIdBookshelvesShelfVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1VolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1VolumesMybooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1VolumesRecommendedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1VolumesRecommendedRateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1VolumesUseruploadedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1VolumesVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1VolumesVolumeIdAssociatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1VolumesVolumeIdLayersLayerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1VolumesVolumeIdLayersLayerIdDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1VolumesVolumeIdLayersummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1VolumesVolumeIdLayersummarySummaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
