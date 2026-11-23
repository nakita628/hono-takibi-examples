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
} from './routes'
import {
  deleteBooksV1MylibraryAnnotationsAnnotationIdRouteHandler,
  getBooksV1DictionaryListOfflineMetadataRouteHandler,
  getBooksV1FamilysharingGetFamilyInfoRouteHandler,
  getBooksV1MyconfigGetUserSettingsRouteHandler,
  getBooksV1MylibraryAnnotationsRouteHandler,
  getBooksV1MylibraryBookshelvesRouteHandler,
  getBooksV1MylibraryBookshelvesShelfRouteHandler,
  getBooksV1MylibraryBookshelvesShelfVolumesRouteHandler,
  getBooksV1MylibraryReadingpositionsVolumeIdRouteHandler,
  getBooksV1NotificationGetRouteHandler,
  getBooksV1OnboardingListCategoriesRouteHandler,
  getBooksV1OnboardingListCategoryVolumesRouteHandler,
  getBooksV1PersonalizedstreamGetRouteHandler,
  getBooksV1PromoofferGetRouteHandler,
  getBooksV1SeriesGetRouteHandler,
  getBooksV1SeriesMembershipGetRouteHandler,
  getBooksV1UsersUserIdBookshelvesRouteHandler,
  getBooksV1UsersUserIdBookshelvesShelfRouteHandler,
  getBooksV1UsersUserIdBookshelvesShelfVolumesRouteHandler,
  getBooksV1VolumesMybooksRouteHandler,
  getBooksV1VolumesRecommendedRouteHandler,
  getBooksV1VolumesRouteHandler,
  getBooksV1VolumesUseruploadedRouteHandler,
  getBooksV1VolumesVolumeIdAssociatedRouteHandler,
  getBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdRouteHandler,
  getBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdRouteHandler,
  getBooksV1VolumesVolumeIdLayersLayerIdDataRouteHandler,
  getBooksV1VolumesVolumeIdLayersLayerIdRouteHandler,
  getBooksV1VolumesVolumeIdLayersummaryRouteHandler,
  getBooksV1VolumesVolumeIdLayersummarySummaryIdRouteHandler,
  getBooksV1VolumesVolumeIdRouteHandler,
  postBooksV1CloudloadingAddBookRouteHandler,
  postBooksV1CloudloadingDeleteBookRouteHandler,
  postBooksV1CloudloadingUpdateBookRouteHandler,
  postBooksV1FamilysharingShareRouteHandler,
  postBooksV1FamilysharingUnshareRouteHandler,
  postBooksV1MyconfigReleaseDownloadAccessRouteHandler,
  postBooksV1MyconfigRequestAccessRouteHandler,
  postBooksV1MyconfigSyncVolumeLicensesRouteHandler,
  postBooksV1MyconfigUpdateUserSettingsRouteHandler,
  postBooksV1MylibraryAnnotationsRouteHandler,
  postBooksV1MylibraryAnnotationsSummaryRouteHandler,
  postBooksV1MylibraryBookshelvesShelfAddVolumeRouteHandler,
  postBooksV1MylibraryBookshelvesShelfClearVolumesRouteHandler,
  postBooksV1MylibraryBookshelvesShelfMoveVolumeRouteHandler,
  postBooksV1MylibraryBookshelvesShelfRemoveVolumeRouteHandler,
  postBooksV1MylibraryReadingpositionsVolumeIdSetPositionRouteHandler,
  postBooksV1PromoofferAcceptRouteHandler,
  postBooksV1PromoofferDismissRouteHandler,
  postBooksV1VolumesRecommendedRateRouteHandler,
  putBooksV1MylibraryAnnotationsAnnotationIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postBooksV1CloudloadingAddBookRoute, postBooksV1CloudloadingAddBookRouteHandler)
  .openapi(postBooksV1CloudloadingDeleteBookRoute, postBooksV1CloudloadingDeleteBookRouteHandler)
  .openapi(postBooksV1CloudloadingUpdateBookRoute, postBooksV1CloudloadingUpdateBookRouteHandler)
  .openapi(
    getBooksV1DictionaryListOfflineMetadataRoute,
    getBooksV1DictionaryListOfflineMetadataRouteHandler,
  )
  .openapi(
    getBooksV1FamilysharingGetFamilyInfoRoute,
    getBooksV1FamilysharingGetFamilyInfoRouteHandler,
  )
  .openapi(postBooksV1FamilysharingShareRoute, postBooksV1FamilysharingShareRouteHandler)
  .openapi(postBooksV1FamilysharingUnshareRoute, postBooksV1FamilysharingUnshareRouteHandler)
  .openapi(getBooksV1MyconfigGetUserSettingsRoute, getBooksV1MyconfigGetUserSettingsRouteHandler)
  .openapi(
    postBooksV1MyconfigReleaseDownloadAccessRoute,
    postBooksV1MyconfigReleaseDownloadAccessRouteHandler,
  )
  .openapi(postBooksV1MyconfigRequestAccessRoute, postBooksV1MyconfigRequestAccessRouteHandler)
  .openapi(
    postBooksV1MyconfigSyncVolumeLicensesRoute,
    postBooksV1MyconfigSyncVolumeLicensesRouteHandler,
  )
  .openapi(
    postBooksV1MyconfigUpdateUserSettingsRoute,
    postBooksV1MyconfigUpdateUserSettingsRouteHandler,
  )
  .openapi(getBooksV1MylibraryAnnotationsRoute, getBooksV1MylibraryAnnotationsRouteHandler)
  .openapi(postBooksV1MylibraryAnnotationsRoute, postBooksV1MylibraryAnnotationsRouteHandler)
  .openapi(
    postBooksV1MylibraryAnnotationsSummaryRoute,
    postBooksV1MylibraryAnnotationsSummaryRouteHandler,
  )
  .openapi(
    deleteBooksV1MylibraryAnnotationsAnnotationIdRoute,
    deleteBooksV1MylibraryAnnotationsAnnotationIdRouteHandler,
  )
  .openapi(
    putBooksV1MylibraryAnnotationsAnnotationIdRoute,
    putBooksV1MylibraryAnnotationsAnnotationIdRouteHandler,
  )
  .openapi(getBooksV1MylibraryBookshelvesRoute, getBooksV1MylibraryBookshelvesRouteHandler)
  .openapi(
    getBooksV1MylibraryBookshelvesShelfRoute,
    getBooksV1MylibraryBookshelvesShelfRouteHandler,
  )
  .openapi(
    postBooksV1MylibraryBookshelvesShelfAddVolumeRoute,
    postBooksV1MylibraryBookshelvesShelfAddVolumeRouteHandler,
  )
  .openapi(
    postBooksV1MylibraryBookshelvesShelfClearVolumesRoute,
    postBooksV1MylibraryBookshelvesShelfClearVolumesRouteHandler,
  )
  .openapi(
    postBooksV1MylibraryBookshelvesShelfMoveVolumeRoute,
    postBooksV1MylibraryBookshelvesShelfMoveVolumeRouteHandler,
  )
  .openapi(
    postBooksV1MylibraryBookshelvesShelfRemoveVolumeRoute,
    postBooksV1MylibraryBookshelvesShelfRemoveVolumeRouteHandler,
  )
  .openapi(
    getBooksV1MylibraryBookshelvesShelfVolumesRoute,
    getBooksV1MylibraryBookshelvesShelfVolumesRouteHandler,
  )
  .openapi(
    getBooksV1MylibraryReadingpositionsVolumeIdRoute,
    getBooksV1MylibraryReadingpositionsVolumeIdRouteHandler,
  )
  .openapi(
    postBooksV1MylibraryReadingpositionsVolumeIdSetPositionRoute,
    postBooksV1MylibraryReadingpositionsVolumeIdSetPositionRouteHandler,
  )
  .openapi(getBooksV1NotificationGetRoute, getBooksV1NotificationGetRouteHandler)
  .openapi(getBooksV1OnboardingListCategoriesRoute, getBooksV1OnboardingListCategoriesRouteHandler)
  .openapi(
    getBooksV1OnboardingListCategoryVolumesRoute,
    getBooksV1OnboardingListCategoryVolumesRouteHandler,
  )
  .openapi(getBooksV1PersonalizedstreamGetRoute, getBooksV1PersonalizedstreamGetRouteHandler)
  .openapi(postBooksV1PromoofferAcceptRoute, postBooksV1PromoofferAcceptRouteHandler)
  .openapi(postBooksV1PromoofferDismissRoute, postBooksV1PromoofferDismissRouteHandler)
  .openapi(getBooksV1PromoofferGetRoute, getBooksV1PromoofferGetRouteHandler)
  .openapi(getBooksV1SeriesGetRoute, getBooksV1SeriesGetRouteHandler)
  .openapi(getBooksV1SeriesMembershipGetRoute, getBooksV1SeriesMembershipGetRouteHandler)
  .openapi(getBooksV1UsersUserIdBookshelvesRoute, getBooksV1UsersUserIdBookshelvesRouteHandler)
  .openapi(
    getBooksV1UsersUserIdBookshelvesShelfRoute,
    getBooksV1UsersUserIdBookshelvesShelfRouteHandler,
  )
  .openapi(
    getBooksV1UsersUserIdBookshelvesShelfVolumesRoute,
    getBooksV1UsersUserIdBookshelvesShelfVolumesRouteHandler,
  )
  .openapi(getBooksV1VolumesRoute, getBooksV1VolumesRouteHandler)
  .openapi(getBooksV1VolumesMybooksRoute, getBooksV1VolumesMybooksRouteHandler)
  .openapi(getBooksV1VolumesRecommendedRoute, getBooksV1VolumesRecommendedRouteHandler)
  .openapi(postBooksV1VolumesRecommendedRateRoute, postBooksV1VolumesRecommendedRateRouteHandler)
  .openapi(getBooksV1VolumesUseruploadedRoute, getBooksV1VolumesUseruploadedRouteHandler)
  .openapi(getBooksV1VolumesVolumeIdRoute, getBooksV1VolumesVolumeIdRouteHandler)
  .openapi(
    getBooksV1VolumesVolumeIdAssociatedRoute,
    getBooksV1VolumesVolumeIdAssociatedRouteHandler,
  )
  .openapi(
    getBooksV1VolumesVolumeIdLayersLayerIdRoute,
    getBooksV1VolumesVolumeIdLayersLayerIdRouteHandler,
  )
  .openapi(
    getBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdRoute,
    getBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdRouteHandler,
  )
  .openapi(
    getBooksV1VolumesVolumeIdLayersLayerIdDataRoute,
    getBooksV1VolumesVolumeIdLayersLayerIdDataRouteHandler,
  )
  .openapi(
    getBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdRoute,
    getBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdRouteHandler,
  )
  .openapi(
    getBooksV1VolumesVolumeIdLayersummaryRoute,
    getBooksV1VolumesVolumeIdLayersummaryRouteHandler,
  )
  .openapi(
    getBooksV1VolumesVolumeIdLayersummarySummaryIdRoute,
    getBooksV1VolumesVolumeIdLayersummarySummaryIdRouteHandler,
  )

export default app
